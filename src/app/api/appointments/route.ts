import { NextResponse } from 'next/server';
import { z } from 'zod';
import dbConnect from '@/lib/dbConnect';
import Appointment from '@/models/Appointment';
import {
  sendEmail,
  generateAppointmentAdminEmailHtml,
  generateAppointmentPatientEmailHtml,
} from '@/lib/notifications';

// Validation Schema using Zod
const appointmentSchema = z.object({
  name: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(7, { message: 'Please enter a valid phone number.' }),
  service: z.string().min(1, { message: 'Please select a dental service.' }),
  preferredDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Please select a valid date.',
  }),
  preferredTime: z.string().min(1, { message: 'Please select a preferred time slot.' }),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate form fields
    const parsedData = appointmentSchema.parse(body);

    // 2. Connect to Database
    await dbConnect();

    // 3. Save Appointment
    const newAppointment = await Appointment.create({
      name: parsedData.name,
      email: parsedData.email,
      phone: parsedData.phone,
      service: parsedData.service,
      preferredDate: new Date(parsedData.preferredDate),
      preferredTime: parsedData.preferredTime,
      message: parsedData.message || '',
      status: 'pending',
    });

    // 4. Send Email Notifications
    const formattedDate = new Date(parsedData.preferredDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Admin Notification
    const adminHtml = generateAppointmentAdminEmailHtml({
      ...parsedData,
      preferredDate: formattedDate,
    });
    await sendEmail({
      to: 'clinic-admin@premiumdental.com',
      subject: `New Booking Request from ${parsedData.name}`,
      html: adminHtml,
    });

    // Patient Confirmation
    const patientHtml = generateAppointmentPatientEmailHtml({
      name: parsedData.name,
      service: parsedData.service,
      preferredDate: formattedDate,
      preferredTime: parsedData.preferredTime,
    });
    await sendEmail({
      to: parsedData.email,
      subject: 'Your Appointment Request Has Been Received - Dental Clinic',
      html: patientHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Appointment request submitted successfully!',
        data: newAppointment,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Appointment API Error:', error);

    // Zod validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed.',
          errors: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'An internal server error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}
