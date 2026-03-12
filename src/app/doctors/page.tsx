import Link from 'next/link';
import { clinicData } from '@/src/data/clinicData';
import { Icons, IconName } from '@/src/components/Icons';

export default function DoctorsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mb-16">
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-clinical-100 text-clinical-700 text-sm font-bold tracking-wide uppercase mb-2 w-fit">
            Our Expert Team
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-slate-900">
            Meet Our Specialist Doctors
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our multidisciplinary team brings decades of combined experience to provide you with the highest standard of healthcare in a compassionate environment.
          </p>
        </div>
      </div>

      {/* Doctors List */}
      <div className="flex flex-col gap-16">
        {clinicData.doctors.map((doctor, index) => (
          <section 
            key={doctor.id} 
            className={`bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm overflow-hidden relative transition-all hover:shadow-md`}
          >
            <div className={`flex flex-col lg:flex-row gap-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Doctor Image */}
              <div className="w-full lg:w-1/3">
                <div className="aspect-[4/5] rounded-2xl bg-slate-100 overflow-hidden relative group">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur px-4 py-3 rounded-xl border border-clinical-100/20 shadow-lg">
                    <p className="text-xs font-bold text-clinical-600 uppercase">{doctor.experience}</p>
                    <p className="text-sm font-medium text-slate-700">{doctor.availability}</p>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-3xl font-heading font-extrabold text-slate-900 mb-2">{doctor.name}</h2>
                  <p className="text-xl font-semibold text-clinical-600 mb-2">{doctor.specialty}</p>
                  <p className="text-slate-500 font-medium">{doctor.qualifications}</p>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  {doctor.description}
                </p>

                {/* Stats/Expertise */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                  {doctor.stats.map((stat) => {
                    const StatIcon = Icons[stat.icon as IconName] || Icons.Activity;
                    return (
                      <div key={stat.label} className="bg-clinical-50 p-4 rounded-2xl border border-clinical-100">
                        <StatIcon className="text-clinical-600 mb-2" size={24} />
                        <h3 className="font-bold text-sm mb-1 text-slate-900">{stat.label}</h3>
                        <p className="text-xs text-slate-500 font-medium">{stat.value}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/book" 
                    className="bg-clinical-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-clinical-700 shadow-md hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <Icons.Calendar size={18} /> Book Appointment
                  </Link>
                  <button className="border-2 border-clinical-100 px-8 py-3 rounded-xl font-bold hover:bg-clinical-50 transition-colors text-clinical-800">
                    View Full Profile
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 bg-clinical-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-6">Ready to schedule your visit?</h2>
          <p className="text-clinical-100 text-lg opacity-90 mb-8">
            Take the first step towards better health today. Our specialists are here to help you live a better, healthier life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${clinicData.contact.appointmentPhone}`} 
              className="bg-white text-clinical-900 px-10 py-4 rounded-xl font-extrabold text-lg hover:bg-clinical-50 transition-colors"
            >
              Call Now: {clinicData.contact.appointmentPhone}
            </a>
            <Link 
              href="/book" 
              className="bg-white/10 backdrop-blur text-white border border-white/20 px-10 py-4 rounded-xl font-extrabold text-lg hover:bg-white/20 transition-colors"
            >
              Online Booking
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
