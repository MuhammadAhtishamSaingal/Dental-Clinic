import { NextResponse } from 'next/server';
import { z } from 'zod';
import dbConnect from '@/lib/dbConnect';
import Contact from '@/models/Contact';
import { sendEmail, generateContactAdminEmailHtml } from '@/lib/notifications';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(7, { message: 'Please enter a valid phone number.' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate payload
    const parsedData = contactSchema.parse(body);

    // 2. Connect to Database
    await dbConnect();

    // 3. Save to MongoDB
    const newContact = await Contact.create(parsedData);

    // 4. Send Email Notification to Admin
    const adminHtml = generateContactAdminEmailHtml(parsedData);
    await sendEmail({
      to: 'clinic-admin@premiumdental.com',
      subject: `New Contact Form Inquiry: ${parsedData.subject}`,
      html: adminHtml,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully!',
        data: newContact,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact API Error:', error);

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
