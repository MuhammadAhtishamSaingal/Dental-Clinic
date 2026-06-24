'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Briefcase, GraduationCap, CalendarCheck } from 'lucide-react';
import { Doctor } from '@/data/doctors';

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-brand-blue/5 transition-all duration-300 flex flex-col group">
      {/* Image container */}
      <div className="relative h-80 w-full overflow-hidden bg-slate-100">
        <Image
          src={doctor.imageUrl}
          alt={doctor.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Role Badge overlay */}
        <div className="absolute bottom-4 left-4 bg-brand-dark/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
          {doctor.role}
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-extrabold text-xl text-brand-dark mb-1 group-hover:text-brand-blue transition-colors">
          {doctor.name}
        </h3>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">
          {doctor.experience}
        </p>

        {/* Bio summary */}
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
          {doctor.bio}
        </p>

        {/* Dynamic features / highlights */}
        <div className="flex flex-col gap-3 mb-8 pt-6 border-t border-slate-50 text-slate-600 text-sm">
          <div className="flex items-start gap-2.5">
            <GraduationCap className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
            <span className="text-xs font-medium leading-normal">{doctor.qualification}</span>
          </div>
          {doctor.certifications.length > 0 && (
            <div className="flex items-start gap-2.5">
              <Award className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
              <span className="text-xs font-medium leading-normal">{doctor.certifications[0]}</span>
            </div>
          )}
        </div>

        {/* Booking & Call Actions */}
        <Link
          href={`/booking?doctor=${encodeURIComponent(doctor.name)}`}
          className="w-full py-3 rounded-full bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-center text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-brand-blue/10"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Book Appointment</span>
        </Link>
      </div>
    </div>
  );
}
