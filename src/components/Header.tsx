'use client';
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Clock, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { servicesData } from '@/data/services';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Doctors', href: '/doctors' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      {/* Top Banner / Emergency Banner */}
      <div className="bg-brand-blue text-white text-[11px] sm:text-xs py-1.5 px-4 flex justify-between items-center border-b border-white/10 relative z-50 font-medium">
        <div className="flex items-center gap-1.5 tracking-wide">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Emergency Care Available</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="tel:+923070984307"
            className="flex items-center gap-1.5 font-semibold text-white/90 hover:text-brand-teal transition-colors"
          >
            <Phone className="w-3 h-3 text-brand-teal" />
            <span>Emergency: +92 307 0984307</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
          ? 'glass-header shadow-sm border-b border-slate-100/60 py-2.5'
          : 'bg-white py-3.5 border-b border-slate-100'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/BEVERLY-HILLS-LOGO1.png"
              alt="Beverly Hills Dentistry Aesthetics"
              width={100}
              height={16}
              priority
              className="w-28 sm:w-[125px] h-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-sm transition-colors hover:text-brand-teal ${pathname === link.href ? 'text-brand-teal' : 'text-slate-600'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 font-semibold text-sm transition-colors hover:text-brand-teal cursor-pointer ${pathname.startsWith('/services') ? 'text-brand-teal' : 'text-slate-600'
                  }`}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[480px] p-4 bg-white border border-slate-100 rounded-2xl shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 grid grid-cols-2 gap-2">
                <div className="col-span-2 pb-2 mb-2 border-b border-slate-50">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Explore Dental Treatments
                  </span>
                </div>
                {servicesData.slice(0, 10).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="p-2 rounded-lg hover:bg-brand-light transition-colors text-sm font-medium text-slate-700 hover:text-brand-blue flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                    {service.title}
                  </Link>
                ))}
                <Link
                  href="/services"
                  className="col-span-2 text-center p-2 rounded-xl bg-brand-light hover:bg-brand-teal hover:text-white transition-colors text-xs font-bold text-brand-blue mt-2"
                >
                  View All 18 Specialist Services
                </Link>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold text-sm transition-colors hover:text-brand-teal ${pathname === link.href ? 'text-brand-teal' : 'text-slate-600'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/booking"
              className="py-2 px-5 rounded-full bg-brand-teal text-white hover:bg-brand-teal-hover font-bold text-xs transition-all shadow-md shadow-brand-teal/15 hover:shadow-lg hover:shadow-brand-teal/25"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl px-5 py-5 z-50 flex flex-col gap-3 max-h-[85vh] overflow-y-auto font-sans">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-md font-semibold border-b border-slate-50 pb-2 ${pathname === link.href ? 'text-brand-teal font-bold' : 'text-slate-700'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Services Accordion */}
            <div className="flex flex-col border-b border-slate-50 pb-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex justify-between items-center w-full text-md font-semibold text-slate-700"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>
              {isServicesOpen && (
                <div className="grid grid-cols-1 gap-1.5 mt-2 pl-3 border-l border-slate-200">
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="text-slate-600 hover:text-brand-teal py-0.5 text-xs font-medium"
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="text-brand-blue font-bold py-1 text-xs"
                  >
                    View All Services &rarr;
                  </Link>
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-md font-semibold border-b border-slate-50 pb-2 ${pathname === link.href ? 'text-brand-teal font-bold' : 'text-slate-700'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/booking"
              className="py-2.5 px-6 rounded-full bg-brand-teal text-white hover:bg-brand-teal-hover font-bold text-center text-sm shadow-md shadow-brand-teal/15 mt-2"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
