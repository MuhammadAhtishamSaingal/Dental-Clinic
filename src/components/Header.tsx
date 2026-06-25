'use client';
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Clock, Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { servicesData } from '@/data/services';

const dentalServices = [
  { title: 'General Dentistry', href: '/services/general-dentistry', slug: 'general-dentistry' },
  { title: 'Teeth Cleaning', href: '/services/teeth-cleaning', slug: 'teeth-cleaning' },
  { title: 'Teeth Whitening', href: '/services/teeth-whitening', slug: 'teeth-whitening' },
  { title: 'Root Canal', href: '/services/root-canal-treatment', slug: 'root-canal-treatment' },
  { title: 'Implants', href: '/services/dental-implants', slug: 'dental-implants' },
  { title: 'Braces', href: '/services/braces', slug: 'braces' }
];

const aestheticServices = [
  { title: 'Injectables', href: '/booking', slug: 'injectables' },
  { title: 'Laser Therapies', href: '/booking', slug: 'laser-therapies' },
  { title: 'Facial Treatments', href: '/booking', slug: 'facial-treatments' },
  { title: 'Body Contouring', href: '/booking', slug: 'body-contouring' }
];

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
      {/* Top Banner / Marquee Scrolling Banner */}
      <div className="bg-[#f3e883] text-black py-2.5 px-4 flex justify-between items-center relative z-50 overflow-hidden font-bold border-b border-black/10 text-[10px] sm:text-xs">
        <div className="flex-1 overflow-hidden relative flex items-center mr-8">
          <div className="animate-marquee flex gap-12 whitespace-nowrap uppercase tracking-wider text-[10px] sm:text-xs !text-[#000000]">
            <span className="!text-[#000000]" style={{ color: '#000000' }}>Mon–Sat | Emergency Care Available | Karachi</span>
            <span className="!text-[#000000]" style={{ color: '#000000' }}>Mon–Sat | Emergency Care Available | Karachi</span>
            <span className="!text-[#000000]" style={{ color: '#000000' }}>Mon–Sat | Emergency Care Available | Karachi</span>
            <span className="!text-[#000000]" style={{ color: '#000000' }}>Mon–Sat | Emergency Care Available | Karachi</span>
            <span className="!text-[#000000]" style={{ color: '#000000' }}>Mon–Sat | Emergency Care Available | Karachi</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0 z-10 bg-[#f3e883] pl-4 font-black !text-[#000000]">
          <Phone className="w-3.5 h-3.5 !text-[#000000]" style={{ color: '#000000' }} />
          <a href="tel:+923070984307" className="hover:underline !text-[#000000] text-[10px] sm:text-xs" style={{ color: '#000000' }}>
            +92 307 0984307
          </a>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
          ? 'glass-header shadow-sm border-b border-slate-800 py-2.5'
          : 'bg-brand-dark py-3.5 border-b border-slate-800'
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

              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[520px] p-5 bg-white border border-slate-100 rounded-2xl shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 grid grid-cols-2 gap-6">
                {/* Column 1: Dental Services */}
                <div>
                  <div className="pb-2 mb-3 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Dental Services
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {dentalServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={service.href}
                        className="p-1.5 rounded-lg hover:bg-brand-light transition-colors text-sm font-medium text-slate-700 hover:text-brand-blue flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2: Advanced Aesthetics */}
                <div>
                  <div className="pb-2 mb-3 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Advanced Aesthetics
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {aestheticServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={service.href}
                        className="p-1.5 rounded-lg hover:bg-brand-light transition-colors text-sm font-medium text-slate-700 hover:text-brand-blue flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* View All Link */}
                <Link
                  href="/services"
                  className="col-span-2 text-center p-2 rounded-xl bg-brand-light hover:bg-brand-teal hover:text-white transition-colors text-xs font-bold text-brand-blue mt-1"
                >
                  View All 18 Specialist Services &rarr;
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
              className="py-2 px-5 rounded-full bg-brand-teal text-black hover:bg-brand-teal-hover font-bold text-xs transition-all shadow-md shadow-brand-teal/15 hover:shadow-lg hover:shadow-brand-teal/25"
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
            <div className="flex flex-col border-b border-slate-200/10 pb-3">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex justify-between items-center w-full py-2.5 text-base font-bold text-[#f3e883] active:text-[#e5d96a] transition-colors focus:outline-none cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {/* Expandable Section Container */}
              <div 
                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                  isServicesOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'
                }`}
              >
                <div className="overflow-hidden min-h-0 bg-[#1b1c1d] rounded-2xl border border-[#f3e883]/10 p-4 flex flex-col gap-5 shadow-inner">
                  {/* Category 1: Dental Services */}
                  <div className="flex flex-col">
                    <h5 className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#f3e883]/90 mb-3 px-1">
                      Dental Services
                    </h5>
                    <div className="flex flex-col gap-2">
                      {dentalServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={service.href}
                          className="flex items-center min-h-[46px] px-3 py-2.5 rounded-xl bg-[#232425]/60 hover:bg-[#2c2d2e] active:bg-[#2c2d2e] text-[#d0cbbf] hover:text-[#f3e883] active:text-[#f3e883] transition-all text-sm font-semibold border border-transparent hover:border-[#f3e883]/10 active:border-[#f3e883]/15 shadow-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f3e883] shrink-0 mr-3 opacity-60"></span>
                          <span>{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Horizontal Divider Line */}
                  <div className="border-t border-[#f3e883]/10 my-0.5"></div>

                  {/* Category 2: Advanced Aesthetics */}
                  <div className="flex flex-col">
                    <h5 className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#f3e883]/90 mb-3 px-1">
                      Advanced Aesthetics
                    </h5>
                    <div className="flex flex-col gap-2">
                      {aestheticServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={service.href}
                          className="flex items-center min-h-[46px] px-3 py-2.5 rounded-xl bg-[#232425]/60 hover:bg-[#2c2d2e] active:bg-[#2c2d2e] text-[#d0cbbf] hover:text-[#f3e883] active:text-[#f3e883] transition-all text-sm font-semibold border border-transparent hover:border-[#f3e883]/10 active:border-[#f3e883]/15 shadow-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f3e883] shrink-0 mr-3 opacity-60"></span>
                          <span>{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
              className="py-2.5 px-6 rounded-full bg-brand-teal text-black hover:bg-brand-teal-hover font-bold text-center text-sm shadow-md shadow-brand-teal/15 mt-2"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
