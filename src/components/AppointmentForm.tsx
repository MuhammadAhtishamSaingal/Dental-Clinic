'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, Clock, Sparkles, AlertCircle, CheckCircle2 } from 'lucide-react';
import { servicesData } from '@/data/services';

const appointmentSchema = z.object({
  name: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(7, { message: 'Please enter a valid phone number.' }),
  service: z.string().min(1, { message: 'Please select a dental service.' }),
  preferredDate: z.string().refine((val) => {
    const d = new Date(val);
    return !isNaN(d.getTime()) && d >= new Date(new Date().setHours(0,0,0,0));
  }, {
    message: 'Please select a valid future date.',
  }),
  preferredTime: z.string().min(1, { message: 'Please select a time slot.' }),
  message: z.string().optional(),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

interface AppointmentFormProps {
  preselectedService?: string;
  preselectedDoctor?: string;
}

export default function AppointmentForm({
  preselectedService = '',
  preselectedDoctor = '',
}: AppointmentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
    '05:00 PM',
  ];

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: preselectedService,
      preferredDate: '',
      preferredTime: '',
      message: preselectedDoctor ? `Requesting appointment with ${preselectedDoctor}.` : '',
    },
  });

  // Adjust defaults if props update
  useEffect(() => {
    if (preselectedService) {
      setValue('service', preselectedService);
    }
  }, [preselectedService, setValue]);

  const onSubmit = async (data: AppointmentFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resBody = await response.json();

      if (!response.ok) {
        throw new Error(resBody.message || 'Something went wrong. Please try again.');
      }

      setSubmitSuccess(true);
      reset();
    } catch (err: any) {
      setSubmitError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-xl shadow-brand-blue/5">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-xl bg-brand-light text-brand-teal">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Schedule Your Visit</h2>
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Online Appointment Request</p>
        </div>
      </div>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm">Booking Request Sent Successfully!</h4>
            <p className="text-xs text-emerald-700 mt-1">
              We have received your appointment request. A team member will contact you shortly to confirm your booking. Check your email for a summary!
            </p>
          </div>
        </div>
      )}

      {submitError && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm">Submission Failed</h4>
            <p className="text-xs text-rose-700 mt-1">{submitError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Full Name</label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              {...register('name')}
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none transition-all ${
                errors.name ? 'border-rose-300 focus:border-rose-500 bg-rose-50/10' : 'border-slate-200 focus:border-brand-teal'
              }`}
            />
            {errors.name && <span className="text-rose-500 text-xs">{errors.name.message}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              {...register('email')}
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none transition-all ${
                errors.email ? 'border-rose-300 focus:border-rose-500 bg-rose-50/10' : 'border-slate-200 focus:border-brand-teal'
              }`}
            />
            {errors.email && <span className="text-rose-500 text-xs">{errors.email.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Phone Number</label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              {...register('phone')}
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none transition-all ${
                errors.phone ? 'border-rose-300 focus:border-rose-500 bg-rose-50/10' : 'border-slate-200 focus:border-brand-teal'
              }`}
            />
            {errors.phone && <span className="text-rose-500 text-xs">{errors.phone.message}</span>}
          </div>

          {/* Service selection */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Dental Treatment</label>
            <select
              {...register('service')}
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none bg-white transition-all ${
                errors.service ? 'border-rose-300 focus:border-rose-500' : 'border-slate-200 focus:border-brand-teal'
              }`}
            >
              <option value="">-- Choose a Treatment --</option>
              {servicesData.map((s) => (
                <option key={s.slug} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
            {errors.service && <span className="text-rose-500 text-xs">{errors.service.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Preferred Date */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Preferred Date</span>
            </label>
            <input
              type="date"
              min={new Date().toISOString().split('T')[0]}
              {...register('preferredDate')}
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none transition-all ${
                errors.preferredDate ? 'border-rose-300 focus:border-rose-500' : 'border-slate-200 focus:border-brand-teal'
              }`}
            />
            {errors.preferredDate && <span className="text-rose-500 text-xs">{errors.preferredDate.message}</span>}
          </div>

          {/* Preferred Time */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Preferred Time Slot</span>
            </label>
            <select
              {...register('preferredTime')}
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none bg-white transition-all ${
                errors.preferredTime ? 'border-rose-300 focus:border-rose-500' : 'border-slate-200 focus:border-brand-teal'
              }`}
            >
              <option value="">-- Choose a Time --</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            {errors.preferredTime && <span className="text-rose-500 text-xs">{errors.preferredTime.message}</span>}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Additional Message (Optional)</label>
          <textarea
            rows={3}
            placeholder="Tell us about any specific concerns, pain, or medical history..."
            {...register('message')}
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:border-brand-teal transition-all resize-none"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 rounded-xl bg-brand-teal hover:bg-brand-teal-hover disabled:bg-slate-300 text-white font-bold text-sm transition-all shadow-md shadow-brand-teal/20 hover:shadow-lg flex justify-center items-center gap-2 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Submitting booking...</span>
            </>
          ) : (
            <span>Request Appointment</span>
          )}
        </button>
      </form>
    </div>
  );
}
