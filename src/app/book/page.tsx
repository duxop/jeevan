"use client";

import React, { useState } from 'react';
import { clinicData } from '@/src/data/clinicData';
import { Icons } from '@/src/components/Icons';

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    doctor: '',
    service: '',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <main className="min-h-screen bg-clinical-50 py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 mb-4">Book Your Appointment</h1>
          <p className="text-slate-600 text-lg">Quick and easy online booking with our specialists.</p>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3].map((i) => (
            <React.Fragment key={i}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= i ? 'bg-clinical-600 text-white shadow-lg' : 'bg-white text-slate-400 border border-slate-200'}`}>
                {i}
              </div>
              {i < 3 && (
                <div className={`w-16 h-1 mx-2 rounded-full transition-all ${step > i ? 'bg-clinical-600' : 'bg-slate-200'}`}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-2xl">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-2xl font-heading font-bold mb-8">Select Doctor & Service</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Choose Specialist</label>
                  <select 
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-clinical-600 transition-all appearance-none bg-slate-50"
                    onChange={(e) => setFormData({...formData, doctor: e.target.value})}
                    value={formData.doctor}
                  >
                    <option value="">Select a Doctor</option>
                    {clinicData.doctors.map(doc => (
                      <option key={doc.id} value={doc.name}>{doc.name} - {doc.specialty}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Medical Service</label>
                  <select 
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-clinical-600 transition-all appearance-none bg-slate-50"
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    value={formData.service}
                  >
                    <option value="">Select a Service</option>
                    {clinicData.services.map(service => (
                      <option key={service.title} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button 
                onClick={handleNext}
                disabled={!formData.doctor || !formData.service}
                className="mt-10 w-full bg-clinical-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-clinical-700 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                Next Step <Icons.ArrowRight size={20} />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-2xl font-heading font-bold mb-8">Choose Date & Time</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Appointment Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-clinical-600 transition-all bg-slate-50"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    value={formData.date}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700">Preferred Time</label>
                  <select 
                    className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-clinical-600 transition-all appearance-none bg-slate-50"
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    value={formData.time}
                  >
                    <option value="">Select Time Slot</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="05:00 PM">05:00 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                    <option value="07:00 PM">07:00 PM</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-4 mt-10">
                <button 
                  onClick={handleBack}
                  className="flex-1 border-2 border-slate-200 py-4 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-all"
                >
                  Back
                </button>
                <button 
                  onClick={handleNext}
                  disabled={!formData.date || !formData.time}
                  className="flex-[2] bg-clinical-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-clinical-700 transition-all shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  Next Step <Icons.ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-2xl font-heading font-bold mb-8">Personal Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-clinical-600 transition-all"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    value={formData.name}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 99999 00000" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-clinical-600 transition-all"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    value={formData.phone}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-clinical-600 transition-all"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    value={formData.email}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold text-slate-700">Additional Notes (Optional)</label>
                  <textarea 
                    rows={3} 
                    placeholder="Any specific symptoms or requests?" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-clinical-600 transition-all resize-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    value={formData.message}
                  ></textarea>
                </div>
              </div>
              <div className="flex gap-4 mt-10">
                <button 
                  onClick={handleBack}
                  className="flex-1 border-2 border-slate-200 py-4 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-all"
                >
                  Back
                </button>
                <button 
                  className="flex-[2] bg-clinical-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-clinical-700 transition-all shadow-lg flex items-center justify-center gap-2"
                  onClick={() => alert('Appointment Request Sent Successfully!')}
                >
                  Confirm Booking <Icons.CheckCircle2 size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Support Info */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <Icons.Phone size={18} className="text-clinical-600" />
            <span>Need help? Call us at {clinicData.contact.appointmentPhone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icons.ShieldCheck size={18} className="text-clinical-600" />
            <span>Secure & Confidential Booking</span>
          </div>
        </div>
      </div>
    </main>
  );
}
