import Link from 'next/link';
import { clinicData } from '@/src/data/clinicData';
import { Icons } from '@/src/components/Icons';

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="relative w-full h-80 md:h-[400px] rounded-3xl overflow-hidden bg-slate-200 flex items-end">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-GFexisKo7WJyQC2ppcM6q-pCRHySX-swaIPmRWboXMTbxj9UK_GGobQzgtdrJhe-wAwzTOrytZn4BiNXgjtWJz05AGhb5pqeN8oGeDh7B53m0Avd6-LhHhGZWffGldZTarNdK423L_lUtOZo5tDsrXZj1KfyeZhWcnYCR5C_FoMNL6syfYhTcWUuS3Q8O6Cu3hfApYHMIxcojaVU97NWFnX4OLJ3uUNtDAWwrOl1uiRpZRghiQbJHlHFQ8lXY1ab6xFqeGMPKSSd" 
            alt="Modern Hospital Interior" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-clinical-900/80 via-transparent to-transparent"></div>
          <div className="relative p-6 md:p-10 w-full">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight font-heading">About {clinicData.fullName}</h1>
            <p className="text-slate-200 mt-2 text-lg">Compassionate care meets clinical excellence in {clinicData.contact.location}.</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <span className="text-clinical-600 font-bold tracking-widest uppercase text-xs">Our Commitment</span>
        <h2 className="text-slate-900 text-3xl md:text-4xl font-heading font-extrabold mt-2 mb-6">Our Mission</h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          To provide accessible, high-quality healthcare with a patient-first approach, leveraging advanced technology to ensure the well-being of our community in {clinicData.contact.location}. We believe every individual deserves world-class medical attention delivered with empathy and precision.
        </p>
      </section>

      {/* Patient Focused Approach */}
      <section className="bg-clinical-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNG3awejUiFHNGPB6rkDZHu0rZJcXeqvcqSetAD1gkUAAdd1M3nEJg_pOjcLgXS3CaaL9jOp4kC23TktqGx9DWbTJnVKgCaremDUzXRSZupyOcZZ64204RNjElCX-MZcDyecl_cuRv0Ry8FGJup6vzzvMMGcGOr0usi0Coq1i9ypAXxY5xa9Y5hLM4YOZOlozjB6KRFXKhbc7ySFWJd5-JFXmLNNhzWWv_lzxlAJCNFBvUmMdeU_zsHB7lort8QtXwFZj5VN-DSO6I" 
                alt="Doctor speaking with patient" 
                className="w-full h-full object-cover aspect-video md:aspect-square"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-slate-900 text-3xl font-heading font-extrabold mb-6">Patient-Focused Care</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-clinical-600 flex items-center justify-center text-white">
                    <Icons.Heart size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 font-heading">Empathetic Communication</h3>
                    <p className="text-slate-600">We listen to your concerns and ensure you are an active partner in your healthcare journey.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-clinical-600 flex items-center justify-center text-white">
                    <Icons.User size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 font-heading">Personalized Treatment</h3>
                    <p className="text-slate-600">No two patients are the same. We tailor our medical protocols to your specific health history and needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-clinical-600 flex items-center justify-center text-white">
                    <Icons.Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 font-heading">Minimal Wait Times</h3>
                    <p className="text-slate-600">Your time is valuable. We optimize our scheduling to ensure prompt attention to all patients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-slate-900 text-3xl font-heading font-extrabold">Modern Facilities</h2>
          <p className="text-slate-600 mt-2">Equipped with the latest medical advancements to serve you better.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Icons.Activity, title: "Wheelchair Accessible", desc: "Fully ramped entrances and elevators for seamless movement." },
            { icon: Icons.Microscope, title: "Advanced Diagnostics", desc: "High-precision laboratory and imaging services available on-site." },
            { icon: Icons.HeartPulse, title: "Modern Equipment", desc: "The latest medical devices and surgical tools for effective treatments." },
            { icon: Icons.Activity, title: "Smart Facility", desc: "Digital records, online reports, and high-speed Wi-Fi." },
          ].map((facility, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-clinical-100 shadow-sm hover:shadow-md transition-shadow">
              <facility.icon className="text-clinical-600 mb-4" size={32} />
              <h4 className="font-bold text-slate-900 text-lg font-heading">{facility.title}</h4>
              <p className="text-sm text-slate-600 mt-2">{facility.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
