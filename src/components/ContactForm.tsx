'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, User, FileText, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(7, { message: 'Please enter a valid phone number.' }),
  subject: z.string().min(3, { message: 'Subject must be at least 3 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resBody = await response.json();

      if (!response.ok) {
        throw new Error(resBody.message || 'Failed to submit inquiry. Please try again.');
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
    <div className="w-full bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-xl shadow-brand-blue/5">
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Send Us a Message</h3>
        <p className="text-slate-500 text-sm mt-1">We typically reply to inquiries within 24 business hours.</p>
      </div>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm">Message Sent!</h4>
            <p className="text-xs text-emerald-700 mt-1">
              Your inquiry has been successfully sent. A representative from our clinic will reach out to you shortly.
            </p>
          </div>
        </div>
      )}

      {submitError && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-sm">Failed to Send Message</h4>
            <p className="text-xs text-rose-700 mt-1">{submitError}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-slate-400" />
              <span>Full Name</span>
            </label>
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
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>Email Address</span>
            </label>
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
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>Phone Number</span>
            </label>
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

          {/* Subject */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>Subject</span>
            </label>
            <input
              type="text"
              placeholder="How can we help you?"
              {...register('subject')}
              className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none transition-all ${
                errors.subject ? 'border-rose-300 focus:border-rose-500 bg-rose-50/10' : 'border-slate-200 focus:border-brand-teal'
              }`}
            />
            {errors.subject && <span className="text-rose-500 text-xs">{errors.subject.message}</span>}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Message</label>
          <textarea
            rows={5}
            placeholder="Type your message here..."
            {...register('message')}
            className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none transition-all resize-none ${
              errors.message ? 'border-rose-300 focus:border-rose-500 bg-rose-50/10' : 'border-slate-200 focus:border-brand-teal'
            }`}
          ></textarea>
          {errors.message && <span className="text-rose-500 text-xs">{errors.message.message}</span>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover disabled:bg-slate-300 text-white font-bold text-sm transition-all shadow-md shadow-brand-blue/15 hover:shadow-lg flex justify-center items-center gap-2 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
