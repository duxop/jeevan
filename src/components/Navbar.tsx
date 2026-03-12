"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clinicData } from '@/src/data/clinicData';
import { Icons } from './Icons';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300 border-b",
      scrolled 
        ? "bg-white/95 backdrop-blur-md py-2 shadow-sm border-slate-200" 
        : "bg-white py-4 border-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <span className="text-clinical-800 font-heading font-extrabold text-2xl tracking-tight leading-none uppercase group-hover:text-clinical-600 transition-colors">
              {clinicData.name}
            </span>
            <span className="text-tealish-600 font-medium text-[10px] tracking-widest uppercase">
              {clinicData.tagline}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {clinicData.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-clinical-600",
                  pathname === item.href ? "text-clinical-600" : "text-slate-600"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/book"
              className="bg-clinical-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-clinical-700 transition-all shadow-md hover:shadow-lg"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {clinicData.navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-4 text-base font-semibold rounded-xl transition-colors",
                  pathname === item.href 
                    ? "bg-clinical-50 text-clinical-600" 
                    : "text-slate-600 hover:bg-slate-50"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-clinical-600 text-white py-4 rounded-xl font-bold shadow-lg"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
