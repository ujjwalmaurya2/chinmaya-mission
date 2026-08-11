// Organization Data for Chinmaya Chikitsalaya — Prayagraj

export const ORG_INFO = {
  name: "Chinmaya Chikitsalaya",
  location: "Prayagraj, Uttar Pradesh",
  tagline: "Compassionate Healthcare. Care for Every Life.",
  heroSub: "Healthcare rooted in compassion, dignity and a spirit of service. Serving the community of Prayagraj with accessible, trusted medical care.",
  address: "Chinmaya Mission Campus, Rasoolabad Ghat Road, Teliarganj, Prayagraj, UP 211004",
  phone: "+91 532 245 8921",
  emergencyPhone: "+91 94500 12345",
  email: "chikitsalaya.prayagraj@chinmayamission.com",
  hours: "Mon - Sat: 8:00 AM - 7:00 PM | Sun: Emergency & Urgent Care",
  missionVision: "Connected with the global vision of Chinmaya Mission, Chinmaya Chikitsalaya Prayagraj bridges quality medical expertise with selflessness (Seva), ensuring dignity and health for every individual regardless of background."
};

export const DOCTORS = [
  {
    id: "doc-1",
    name: "Dr. Ananya Sharma",
    title: "Chief Medical Officer & Senior Physician",
    specialty: "General Medicine",
    department: "General Medicine",
    qualification: "MBBS, MD (Internal Medicine) — BHU",
    experience: "16+ Years Experience",
    days: "Mon, Wed, Fri, Sat",
    timings: "9:00 AM - 1:00 PM | 4:00 PM - 6:30 PM",
    image: "/images/hero_doctor_patient.jpg",
    bio: "Specializes in preventive adult healthcare, chronic disease management (Diabetes, Hypertension), and holistic patient wellness with a compassionate approach.",
    badge: "Available Today"
  },
  {
    id: "doc-2",
    name: "Dr. Rajeshwar Mishra",
    title: "Senior Pediatric Specialist",
    specialty: "Pediatrics & Child Care",
    department: "Pediatrics",
    qualification: "MBBS, DCH (Pediatrics) — KGMC Lucknow",
    experience: "14+ Years Experience",
    days: "Mon - Sat",
    timings: "10:00 AM - 2:00 PM",
    image: "/images/modern_clinic_facility.jpg",
    bio: "Dedicated pediatric consultant passionate about child immunization, growth monitoring, developmental care, and community child nutrition.",
    badge: "Popular"
  },
  {
    id: "doc-3",
    name: "Dr. Meenakshi Tripathi",
    title: "Consultant Gynecologist",
    specialty: "Women's Health & Obstetrics",
    department: "Gynecology",
    qualification: "MBBS, MS (Obstetrics & Gynec) — MLN Medical College",
    experience: "12+ Years Experience",
    days: "Tue, Thu, Sat",
    timings: "2:00 PM - 6:00 PM",
    image: "/images/hero_doctor_patient.jpg",
    bio: "Expert in maternal health, adolescent health education, prenatal care, and preventive screenings for women across all life stages.",
    badge: "Senior Specialist"
  },
  {
    id: "doc-4",
    name: "Dr. Vikramaditya Singh",
    title: "Consultant Ophthalmologist",
    specialty: "Eye Care & Cataract Surgery",
    department: "Ophthalmology",
    qualification: "MBBS, DO, MS (Ophthalmology) — AIIMS Delhi",
    experience: "18+ Years Experience",
    days: "Mon, Wed, Fri",
    timings: "9:30 AM - 1:30 PM",
    image: "/images/community_camp_seva.jpg",
    bio: "Leads Chinmaya Chikitsalaya's rural vision outreach camps. Expert in refraction, diabetic retinopathy screening, and cataract evaluation.",
    badge: "Seva Camp Lead"
  },
  {
    id: "doc-5",
    name: "Dr. Alok Kumar Verma",
    title: "Orthopedic & Joint Care Specialist",
    specialty: "Orthopedics & Rheumatology",
    department: "Orthopedics",
    qualification: "MBBS, MS (Orthopedics) — IMS BHU",
    experience: "11+ Years Experience",
    days: "Tue, Fri, Sat",
    timings: "3:30 PM - 7:00 PM",
    image: "/images/modern_clinic_facility.jpg",
    bio: "Focuses on joint preservation, geriatric mobility, arthritis management, and non-surgical orthopedic pain relief.",
    badge: "Available"
  }
];

export const SERVICES = [
  {
    id: "srv-1",
    name: "General Medical Consultation",
    category: "Primary Care",
    shortDesc: "Comprehensive primary care diagnosis, outpatient treatment, fever clinic, and routine health evaluations for all age groups.",
    icon: "Stethoscope",
    details: [
      "Outpatient OPD consultation by experienced physicians",
      "Management of acute infections, seasonal fever, respiratory ailments",
      "Blood pressure, blood glucose, and baseline diagnostic evaluation",
      "Patient health counselling and diet advice"
    ]
  },
  {
    id: "srv-2",
    name: "Specialist OPD Clinics",
    category: "Specialist Care",
    shortDesc: "Dedicated OPD clinics in Pediatrics, Gynecology, Ophthalmology, Orthopedics, and Internal Medicine.",
    icon: "UserCheck",
    details: [
      "Scheduled consultations with visiting superspecialists",
      "Maternal and child healthcare guidance",
      "Orthopedic joint care and physiotherapy referral",
      "Ophthalmic refraction and vision assessment"
    ]
  },
  {
    id: "srv-3",
    name: "Preventive Healthcare & Packages",
    category: "Wellness",
    shortDesc: "Proactive screening packages for early detection of diabetes, cardiac health risks, and lifestyle conditions.",
    icon: "ShieldHeart",
    details: [
      "Executive Health Checkup Package",
      "Senior Citizen Comprehensive Screening",
      "Women's Wellness Profile",
      "Diabetes & Kidney Health Monitoring"
    ]
  },
  {
    id: "srv-4",
    name: "Diagnostic & Pathology Services",
    category: "Diagnostics",
    shortDesc: "In-house lab testing, blood investigations, ECG, digital X-Ray referral, and rapid diagnostic reports.",
    icon: "Activity",
    details: [
      "Complete Blood Count (CBC), Lipid profile, HbA1c",
      "Liver and Kidney Function Tests",
      "12-Lead Electrocardiogram (ECG)",
      "Affordable diagnostic rates for subsidized patient assistance"
    ]
  },
  {
    id: "srv-5",
    name: "Subsidized Pharmacy",
    category: "Medicines",
    shortDesc: "Quality essential medicines available at subsidized and fair rates for all patients.",
    icon: "Pill",
    details: [
      "Standard WHO-certified generic and branded formulations",
      "Chronic disease medication refill support",
      "Free medication distribution for underprivileged camp attendees",
      "Qualified pharmacist consultation on dosage"
    ]
  },
  {
    id: "srv-6",
    name: "Community Seva Health Camps",
    category: "Community Outreach",
    shortDesc: "Free mobile medical camps in rural and semi-urban Prayagraj regions, distributing free medicine and care.",
    icon: "HeartHandshake",
    details: [
      "Free multi-specialty health checkups in underserved villages",
      "Free cataract screening and surgical referral linkage",
      "Hemoglobin screening and anemia eradication drives for women",
      "School child health and hygiene awareness camps"
    ]
  }
];

export const IMPACT_STATS = [
  { value: "10,000+", label: "Patients Served", desc: "Across outpatient OPD and medical initiatives in Prayagraj." },
  { value: "500+", label: "Health Consultations", desc: "Monthly medical consultations provided with care." },
  { value: "25+", label: "Community Camps", desc: "Free rural health camps conducted across nearby villages." },
  { value: "10+", label: "Years of Seva", desc: "Dedicated service carrying forward the Chinmaya Mission legacy." }
];

export const PATIENT_STORIES = [
  {
    id: "story-1",
    name: "Rameshwar Prasad Pandey",
    age: 64,
    location: "Daraganj, Prayagraj",
    quote: "Sometimes healing begins with simply knowing that someone cares for you with genuine respect.",
    story: "Rameshwar ji came to Chinmaya Chikitsalaya with unmanaged diabetes and joint pain. The doctors not only prescribed affordable treatment but spent time explaining lifestyle adjustments. Today, his glucose levels are stable and he walks comfortably.",
    image: "/images/hero_doctor_patient.jpg"
  },
  {
    id: "story-2",
    name: "Sunita Srivastav",
    age: 38,
    location: "Phaphamau, Prayagraj",
    quote: "The warmth and dignity with which they treat every mother is something I haven't seen elsewhere.",
    story: "Attended our free Women's Wellness & Anemia Screening Camp. Received diagnostic evaluation, iron supplements, and nutritional counseling free of charge. She now volunteers during our monthly community awareness drives.",
    image: "/images/community_camp_seva.jpg"
  },
  {
    id: "story-3",
    name: "Mahesh Chandra & Family",
    age: 52,
    location: "Naini, Prayagraj",
    quote: "Accessible healthcare is a true blessing for working families like ours. We trust Chinmaya Chikitsalaya completely.",
    story: "Mahesh ji brought his mother and children for routine checkups. The subsidized pharmacy and clear medical guidance saved his family significant distress.",
    image: "/images/modern_clinic_facility.jpg"
  }
];

export const COMMUNITY_CAMPS = [
  {
    id: "camp-1",
    title: "FREE COMMUNITY HEALTH CAMP - PRAYAGRAJ",
    subtitle: "Bringing healthcare closer to the communities that need it most.",
    location: "Chinmaya Mission Rural Centre, Phaphamau, Prayagraj",
    date: "Sunday, 24th August 2026",
    time: "8:30 AM - 2:00 PM",
    doctors: "General Medicine, Eye Specialist, Child Specialist",
    services: "Free Consultation, Blood Sugar Test, BP Check, Free Medicines",
    image: "/images/community_camp_seva.jpg",
    status: "Upcoming"
  },
  {
    id: "camp-2",
    title: "WOMEN & CHILD HEALTH AWARENESS DRIVE",
    subtitle: "Focusing on maternal nutrition, hemoglobin screening, and child immunization.",
    location: "Teliarganj Community Hall, Prayagraj",
    date: "Completed — 12th July 2026",
    time: "9:00 AM - 1:00 PM",
    doctors: "Gynecologist, Pediatrician & Clinical Dietitian",
    services: "Anemia screening, Calcium & Iron kit distribution, Child growth assessment",
    image: "/images/hero_doctor_patient.jpg",
    status: "Completed"
  }
];

export const WELLNESS_ARTICLES = [
  {
    id: "art-1",
    title: "Managing Blood Pressure Naturally Through Diet & Pranayama",
    category: "Preventive Care",
    author: "Dr. Ananya Sharma",
    readTime: "4 min read",
    date: "August 2026",
    summary: "Simple, effective daily lifestyle habits to maintain optimal cardiovascular health without stress.",
    content: `Hypertension (high blood pressure) is often called the silent condition because it develops quietly. However, small daily adjustments in lifestyle can yield significant positive changes.

1. Mindful Salt Intake: Reducing processed foods and replacing excess table salt with natural herbs and spices.
2. Daily Walk & Morning Sunlight: 30 minutes of gentle walking promotes vascular elasticity.
3. Pranayama & Calmness: Deep breathing exercises like Anulom Vilom for 10-15 minutes daily regulate the sympathetic nervous system.
4. Regular Monitoring: Check your blood pressure at Chinmaya Chikitsalaya OPD every month.`
  },
  {
    id: "art-2",
    title: "Childhood Nutrition: Building Strong Immunity in Growing Years",
    category: "Children's Health",
    author: "Dr. Rajeshwar Mishra",
    readTime: "5 min read",
    date: "July 2026",
    summary: "Essential nutrients, seasonal fruits, and hydration tips for children aged 2-12.",
    content: `Childhood immunity depends on balanced nutrition, adequate restful sleep, and clean drinking water.

Key Nutritional Pillars:
- Traditional Whole Grains: Incorporate Ragi, Bajra, and whole wheat.
- Green Leafy Vegetables: Rich in iron and folate.
- Hydration: Encourage warm water and fresh home-prepared soups rather than sugary soft drinks.`
  },
  {
    id: "art-3",
    title: "Women's Health After 40: Bone Density & Hormonal Balance",
    category: "Women's Health",
    author: "Dr. Meenakshi Tripathi",
    readTime: "6 min read",
    date: "June 2026",
    summary: "Understanding calcium absorption, joint health, and preventive wellness for women.",
    content: `As women cross 40, calcium absorption gradually decreases. Early preventive screening for osteopenia and thyroid balance ensures vitality and pain-free movement.`
  }
];

export const GALLERY_ITEMS = [
  { id: "g1", category: "Hospital", title: "Clean Consultation OPD", image: "/images/modern_clinic_facility.jpg" },
  { id: "g2", category: "Community", title: "Rural Health Camp In Action", image: "/images/community_camp_seva.jpg" },
  { id: "g3", category: "Doctors", title: "Compassionate Doctor Consultation", image: "/images/hero_doctor_patient.jpg" },
  { id: "g4", category: "Events", title: "Free Health Awareness Seminar", image: "/images/community_camp_seva.jpg" },
  { id: "g5", category: "Hospital", title: "Modern Medical Facility Interior", image: "/images/modern_clinic_facility.jpg" },
  { id: "g6", category: "Medical Camps", title: "Free Medicine Distribution", image: "/images/community_camp_seva.jpg" }
];

export const FAQ_ITEMS = [
  {
    q: "What medical services are available at Chinmaya Chikitsalaya Prayagraj?",
    a: "We offer General Medical OPD consultations, Specialist OPDs (Pediatrics, Gynecology, Ophthalmology, Orthopedics), basic diagnostic lab tests, ECG, preventive health packages, and a subsidized pharmacy."
  },
  {
    q: "How can I book an appointment with a doctor?",
    a: "You can easily schedule a consultation using our online 'Book Appointment' button on this website, calling our helpline at +91 532 245 8921, or visiting our OPD reception desk directly during working hours."
  },
  {
    q: "Where is Chinmaya Chikitsalaya located in Prayagraj?",
    a: "We are situated within the Chinmaya Mission Campus, Rasoolabad Ghat Road, Teliarganj, Prayagraj, UP 211004. You can find directions using the map section below."
  },
  {
    q: "What are the OPD consultation timings?",
    a: "Our outpatient department operates Monday to Saturday from 8:00 AM to 7:00 PM. Specialist timings vary by day, so we recommend checking our Doctor Directory schedule."
  },
  {
    q: "How can I support or donate to Chinmaya Chikitsalaya's community initiatives?",
    a: "You can support our Seva programs (such as sponsoring free medical camps or subsidizing patient care) through our 'Support / Donate' section or by visiting our administration office."
  },
  {
    q: "Can medical professionals or citizens volunteer with your organization?",
    a: "Yes! We welcome doctors, nurses, medical students, and community volunteers to join our health camps and awareness drives. Please submit a request via our 'Volunteer' form."
  },
  {
    q: "How do free rural health camps work?",
    a: "Our medical team travels to rural regions near Prayagraj to offer free consultations, diagnostic screening (BP/Sugar/Vision), and free basic medicines to underserved families."
  }
];

export const TRANSPARENCY_DOCS = [
  { title: "Annual Activity Report 2025-26", size: "2.4 MB PDF", desc: "Overview of medical services, community camps, and patient outreach numbers." },
  { title: "Financial Audit Summary", size: "1.8 MB PDF", desc: "Institutional financial transparency report (Demo document)." },
  { title: "Trust Registration & 80G Certificate", size: "1.1 MB PDF", desc: "Official society registration under Chinmaya Mission Prayagraj Trust." },
  { title: "Clinical Standards & Guidelines", size: "1.5 MB PDF", desc: "Medical ethics and quality assurance protocols adhered to by our healthcare team." }
];
