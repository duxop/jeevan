import Link from 'next/link';
import { clinicData } from '@/src/data/clinicData';
import { Icons, IconName } from '@/src/components/Icons';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-clinical-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-clinical-100 text-clinical-700 text-xs font-bold uppercase tracking-wider mb-4">
              Our Expertise
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 leading-tight mb-6">
              World-Class <br />
              <span className="text-clinical-600">Medical Care</span> For You
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10">
              {clinicData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="bg-clinical-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-clinical-700 transition-all shadow-xl shadow-clinical-600/20 text-center"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="bg-white text-clinical-800 border border-clinical-100 px-8 py-4 rounded-xl font-bold text-lg hover:bg-clinical-50 transition-all text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-clinical-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-tealish-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">Specialized Departments</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We provide a wide range of medical services with state-of-the-art facilities and expert doctors.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicData.services.slice(0, 4).map((service) => {
              const Icon = Icons[service.icon as IconName] || Icons.Activity;
              return (
                <div key={service.title} className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-clinical-600 transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className="w-14 h-14 rounded-xl bg-clinical-50 flex items-center justify-center text-clinical-600 mb-6 group-hover:bg-clinical-600 group-hover:text-white transition-colors">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                  <Link href="/services" className="text-clinical-600 font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <Icons.ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 text-clinical-600 font-bold hover:underline">
              View All Services <Icons.ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Package */}
      <section className="py-20 bg-clinical-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {clinicData.packages.map((pkg) => (
            <div key={pkg.title} className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <span className="text-tealish-500 font-bold uppercase tracking-widest text-sm mb-2 block">{pkg.tag}</span>
                <h3 className="text-3xl md:text-4xl font-heading font-extrabold mb-6">{pkg.title}</h3>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">{pkg.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                  {pkg.features.map((feature) => {
                    const FeatureIcon = Icons[feature.icon as IconName] || Icons.CheckCircle2;
                    return (
                      <div key={feature.label} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-tealish-500">
                          <FeatureIcon size={20} />
                        </div>
                        <span className="text-sm font-medium">{feature.label}</span>
                      </div>
                    );
                  })}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="/book" className="bg-clinical-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-clinical-700 transition-all shadow-xl shadow-clinical-600/20">
                    Book Package Now
                  </Link>
                  <button className="border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-clinical-800 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6">Ready to prioritize your health?</h2>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Book your appointment today and experience the best-in-class medical services at {clinicData.fullName}.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href={`tel:${clinicData.contact.phone}`} 
                  className="bg-white text-clinical-800 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <Icons.Phone size={20} /> Call Now
                </a>
                <Link 
                  href="/book" 
                  className="bg-clinical-700 border border-white/30 backdrop-blur-sm text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-clinical-600 transition-all flex items-center gap-2"
                >
                  <Icons.Calendar size={20} /> Online Booking
                </Link>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
