import React from 'react';
import Link from 'next/link';
import { clinicData } from '@/src/data/clinicData';
import { Icons } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-white font-heading font-extrabold text-2xl tracking-tight leading-none uppercase">
                {clinicData.name}
              </span>
              <span className="text-tealish-500 font-medium text-xs tracking-widest uppercase">
                {clinicData.tagline}
              </span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              {clinicData.description}
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-clinical-600 transition-colors">
                <Icons.Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-clinical-600 transition-colors">
                <Icons.Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-clinical-600 transition-colors">
                <Icons.Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-clinical-600 transition-colors">
                <Icons.Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              {clinicData.navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-clinical-500 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/book" className="hover:text-clinical-500 transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <Icons.MapPin className="text-clinical-500 mr-3 shrink-0" size={18} />
                <span className="opacity-80">{clinicData.contact.address}</span>
              </li>
              <li className="flex items-center">
                <Icons.Phone className="text-clinical-500 mr-3 shrink-0" size={18} />
                <span className="opacity-80">{clinicData.contact.phone}</span>
              </li>
              <li className="flex items-center">
                <Icons.Mail className="text-clinical-500 mr-3 shrink-0" size={18} />
                <span className="opacity-80">{clinicData.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4 opacity-80">Get health tips and clinic updates directly.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-clinical-600 transition-all"
              />
              <button className="bg-clinical-600 text-white py-3 rounded-xl text-sm font-bold hover:bg-clinical-700 transition-all shadow-lg shadow-clinical-600/20">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} {clinicData.fullName}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
