import { clinicData } from '@/src/data/clinicData';
import { Icons } from '@/src/components/Icons';

export default function ContactPage() {
  return (
    <main className="flex-1">
      <section className="py-12 md:py-20 bg-clinical-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 mb-6">Contact Us</h1>
            <p className="text-slate-600 text-lg">Have a question or need assistance? Our team is here to help you. Reach out to us through any of the channels below.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-heading font-bold mb-6">Contact Details</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-clinical-50 flex items-center justify-center text-clinical-600 shrink-0">
                      <Icons.MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Address</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{clinicData.contact.address}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-clinical-50 flex items-center justify-center text-clinical-600 shrink-0">
                      <Icons.Phone size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Phone</p>
                      <p className="text-sm text-slate-600">{clinicData.contact.phone}</p>
                      <p className="text-sm text-slate-600">{clinicData.contact.appointmentPhone}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-clinical-50 flex items-center justify-center text-clinical-600 shrink-0">
                      <Icons.Mail size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Email</p>
                      <p className="text-sm text-slate-600">{clinicData.contact.email}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-clinical-900 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-heading font-bold mb-4">Clinic Hours</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span className="opacity-70">Mon - Sat</span>
                    <span className="font-bold">{clinicData.hours.monSat}</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span className="opacity-70">Sunday</span>
                    <span className="font-bold">{clinicData.hours.sunday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="opacity-70">Emergency</span>
                    <span className="font-bold text-tealish-500">24/7 Available</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl">
                <h3 className="text-2xl font-heading font-bold mb-8">Send us a Message</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-clinical-600 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-clinical-600 transition-all" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700">Subject</label>
                    <input type="text" placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-clinical-600 transition-all" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-bold text-slate-700">Message</label>
                    <textarea rows={5} placeholder="Your message here..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-clinical-600 transition-all resize-none"></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="w-full bg-clinical-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-clinical-700 transition-all shadow-lg shadow-clinical-600/20 flex items-center justify-center gap-2">
                      <Icons.Send size={20} /> Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
          <div className="text-center p-8">
            <Icons.MapPin className="text-clinical-600 mx-auto mb-4" size={48} />
            <h3 className="text-xl font-heading font-bold mb-2">Find us on Google Maps</h3>
            <p className="text-slate-500 max-w-xs mx-auto">Visit us at {clinicData.contact.address} for expert medical care.</p>
            <button className="mt-6 bg-clinical-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-clinical-700 transition-all">
              Get Directions
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
