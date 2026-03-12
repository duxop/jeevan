export const clinicData = {
  name: "JEEWAN",
  fullName: "Jeewan Multispeciality Centre",
  tagline: "Multispeciality Centre",
  description: "Providing world-class medical services with a heart. Dedicated to excellence in patient care for over two decades in Gurugram.",
  contact: {
    phone: "+91 124 456 7890",
    appointmentPhone: "+91 99999 00000",
    email: "info@jeewancentre.com",
    address: "123, Medical Row, Sector 14, Gurugram, Haryana - 122001",
    location: "Gurugram",
  },
  hours: {
    monSat: "09:00 AM - 08:00 PM",
    sunday: "10:00 AM - 02:00 PM",
    emergency: "24/7 Support Available",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Doctors", href: "/doctors" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  doctors: [
    {
      id: "dipika-dhingra",
      name: "Dr. Dipika Dhingra",
      specialty: "Gynecologist & Obstetrician",
      qualifications: "MBBS, MS (Obstetrics & Gynaecology)",
      experience: "15+ Years Experience",
      availability: "Available Mon - Sat",
      description: "Dr. Dipika is a veteran specialist dedicated to women's reproductive health. She specializes in high-risk pregnancy management, minimally invasive laparoscopic surgeries, and comprehensive maternal care.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAjNTJiFfSe5j-vfZ6lDO2gjzz7EbgYwO98RKhdSlngmuFZG-ayTaMDNMVTsIciuXESW2HSSACyFSylFsloTqQxGRJ7iL95yuIGK9gPpFBckHXPx4IexaOHWAVmSkTNhJSARr14N8WdsUaR-v0Nw2oqHJqG8_sDu_6ORCskdF5L8P6Uy6hTS6JDOaPx9TzxrPy9DMFr8x5-cGVnMyQSBa21Myr1DTDnR8W_krxSn849FUYdfgl4QTHYyrLSgdex4fB98SMDtPscrBl",
      stats: [
        { label: "Expertise", value: "High-risk Pregnancy", icon: "User" },
        { label: "Education", value: "MS Gold Medalist", icon: "GraduationCap" },
        { label: "Services", value: "Laparoscopic Surgery", icon: "Activity" },
      ]
    },
    {
      id: "ayush-dhingra",
      name: "Dr. Ayush Dhingra",
      specialty: "Consultant Gastroenterologist",
      qualifications: "MBBS, MD, DM (Gastroenterology)",
      experience: "12+ Years Experience",
      availability: "Available Tue, Thu, Sat",
      description: "An expert in digestive health, Dr. Ayush specializes in advanced endoscopic procedures, liver diseases, and therapeutic interventions for complex gastrointestinal disorders.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyOHTLRzB72mBRlkrtQPv-KOI_Qq8QcX4VQMRcnRuQ_3NyJEqnFowVX_GlhkQrepCs-N4pAAdRqtocQY82lX3LxGfjzA3Y1JS8MSnef_udA7mJatmvzgg1gXZp0b9ytJ-0il2MJnI-E3oJTN2-4z3kPvuxmIOUSgOCB86uM51uHfZ7JFoDpqlLHTDQGITWctuwWgz-YiQyFNVpdAR7vqWXAdgboGKcaXx00kBSOgD5URNESVKrZ8-Bte-qpMxd_QJs5LWNlI9wGdGg",
      stats: [
        { label: "Expertise", value: "Therapeutic Endoscopy", icon: "Stethoscope" },
        { label: "Digestive Health", value: "Liver & Pancreas Care", icon: "HeartPulse" },
        { label: "Research", value: "Advanced GI Studies", icon: "Microscope" },
      ]
    },
    {
      id: "renuka-dhingra",
      name: "Dr. Renuka Dhingra",
      specialty: "Dental Surgeon",
      qualifications: "BDS, MDS (Oral & Maxillofacial Surgery)",
      experience: "10+ Years Experience",
      availability: "Available Mon - Fri",
      description: "Dr. Renuka specializes in advanced oral surgery, restorative dentistry, and cosmetic smile makeovers. She is known for her gentle approach to patient care and precision in complex dental procedures.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtG_sE8GSdnjPMb6DEJgwPBeE8tAinqik92oQ3DoVxXLIj_oYCV9EW3ZaFMoU8BwWLDyv49Ul5-WgLMGzn8Dnn_JKDd8VXzpaItYOKx2i34fvX_0zYpGCyoAwZmGM6WKbRsBxobXF7jFB0oOx5UqxlOoLjmkLWc1ZtHr_f_9ZmaIUH4FKRCG3HLkBjKTNQhUWVOFENOiUpIAhk9Qd1oyKldYR2wfVfZH1W0hf2mfrMvKJ_bBagxSbKtzbZh5m9L7nfs4fRHzjXyEyY",
      stats: [
        { label: "Expertise", value: "Maxillofacial Surgery", icon: "Smile" },
        { label: "Cosmetic", value: "Smile Designing", icon: "Sparkles" },
        { label: "Restorative", value: "Implants & Crowns", icon: "ShieldCheck" },
      ]
    }
  ],
  services: [
    {
      title: "General Medicine",
      description: "Comprehensive primary care focused on preventive wellness and the management of chronic conditions.",
      icon: "Stethoscope",
      features: ["Routine Checkups", "Immunizations"]
    },
    {
      title: "Gastroenterology",
      description: "Expert care for the digestive system, liver, and biliary tracts using advanced diagnostic techniques.",
      icon: "Activity",
      features: ["Acid Reflux Care", "Liver Disease"]
    },
    {
      title: "Gynecology",
      description: "Complete health solutions for women throughout all stages of life, including maternity and postnatal care.",
      icon: "Baby",
      features: ["Prenatal Care", "Wellness Exams"]
    },
    {
      title: "Infertility",
      description: "Helping families realize their dreams with advanced fertility treatments and emotional support.",
      icon: "Heart",
      features: ["IVF & IUI", "Fertility Testing"]
    },
    {
      title: "Dental Care",
      description: "Preserving your smile with full-range dentistry from whitening to complex oral surgeries.",
      icon: "Smile",
      features: ["Orthodontics", "Root Canal Therapy"]
    },
    {
      title: "Diagnostics",
      description: "High-precision laboratory and imaging diagnostics for accurate medical assessments.",
      icon: "Microscope",
      features: ["Blood Analysis", "X-Ray / Ultra Sound"]
    },
    {
      title: "Endoscopy",
      description: "Minimally invasive internal imaging for effective diagnosis and treatment planning.",
      icon: "Eye",
      features: ["Screening Colonoscopy", "Therapeutic Endoscopy"]
    },
    {
      title: "Dermatology",
      description: "Expert treatment for skin, hair, and nail health, including cosmetic dermatology solutions.",
      icon: "User",
      features: ["Skin Resurfacing", "Acne Treatments"]
    }
  ],
  packages: [
    {
      title: "Comprehensive Full Body Checkup",
      tag: "Most Popular",
      description: "Our most popular package includes over 60 essential parameters, including thyroid, liver, kidney, lipid profiles, and specialized cardiologist consultation.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8HzgWiQK9goJ9fl8imKpyABBURXXigclBYLHV7wKtUSVDNqVuXPF3483j48U2Im-RB9EyG8jYqNBfEcO9HvhM-jiS0dmKudFkKPqk8JZTGMNGkIZx9Fba6QownysfFNcbdOOZ1WNA2FaFvscQCNKSHz3x07CbONa8YZAf2i67LZCbXSNlQzPw8WJpoQSAMmoS_DEQeEM9Sy6hGL2loeY73__DeYcXyt4IxbA_jI1hafWCiFq1iwDYiVxzjcRp7cM-LRuTjSEsI_pM",
      features: [
        { label: "Advanced Lab Tests", icon: "Droplets" },
        { label: "ECG & Stress Test", icon: "Activity" },
        { label: "Doctor Consultation", icon: "User" }
      ]
    }
  ]
};
