/**
 * SAFIAN HEALTHCARE & MEDICAL SUPPLIES
 * Site Configuration
 */

export const siteConfig = {
  // Business Information
  name: "MEDTECH SOLUTIONS",
  shortName: "MedTech Solutions",
  tagline: "Quality Medical Supplies & Equipment",
  description: "Professional medical supplies and equipment for students, healthcare professionals, and facilities. Demonstration site built by InfiniTechnologies.",
  
  // Contact Information
  contact: {
    phone: "0743 179 786",
    phoneFormatted: "+254 743 179 786",
    whatsapp: "254743179786", // Format: country code + number without +
    whatsappDisplay: "0743 179 786",
    email: "info@infinitechnologies.co.ke",
    location: "Nairobi, Kenya",
    locationFull: "Nairobi, Kenya",
  },
  
  // Brand Colors (InfiniTechnologies theme)
  colors: {
    primary: "#0B6FA4", // InfiniTechnologies Blue
    primaryDark: "#094E7A",
    secondary: "#FF7A1A", // InfiniTechnologies Orange
    secondaryDark: "#E56A0A",
    accent: "#22B8EF", // InfiniTechnologies Cyan
    accentDark: "#1A8FBF",
  },
  
  // Client Segments
  segments: [
    {
      id: "medical-students",
      name: "Medical Students",
      description: "Essential tools and kits for medical education",
      icon: "GraduationCap",
    },
    {
      id: "healthcare-professionals",
      name: "Healthcare Professionals",
      description: "Professional-grade medical equipment",
      icon: "Stethoscope",
    },
    {
      id: "healthcare-facilities",
      name: "Healthcare Facilities",
      description: "Bulk supplies for hospitals and clinics",
      icon: "Building2",
    },
    {
      id: "patients-general",
      name: "Patients / General Public",
      description: "Home care and patient support devices",
      icon: "Heart",
    },
  ],
  
  // Product Categories
  categories: [
    {
      id: "diagnostic-essentials",
      name: "Diagnostic Essentials",
      description: "Stethoscopes, BP machines, thermometers, pulse oximeters, glucometers",
      slug: "diagnostic-essentials",
    },
    {
      id: "procedure-kits",
      name: "Procedure & Practical Kits",
      description: "IV cannulation, suturing, catheterization, dressing packs, surgical kits",
      slug: "procedure-kits",
    },
    {
      id: "medical-wear",
      name: "Medical Wear & Protective Gear",
      description: "Lab coats, scrubs, theatre caps, gloves, masks, aprons",
      slug: "medical-wear",
    },
    {
      id: "clinical-tools",
      name: "Clinical & Academic Support Tools",
      description: "Pocket guides, OSCE prep, drug references, logbooks, revision notes",
      slug: "clinical-tools",
    },
    {
      id: "home-care",
      name: "Home Care & Patient Support",
      description: "Home BP machines, glucometers, wheelchairs, oxygen monitors, care kits",
      slug: "home-care",
    },
  ],
  
  // Featured Bundles
  bundles: [
    {
      id: "clinical-starter",
      name: "Clinical Starter Pack",
      description: "Essential tools for medical students starting clinical rotations",
      targetSegment: "medical-students",
    },
    {
      id: "ward-survival",
      name: "Ward Survival Kit",
      description: "Everything you need for ward rounds and patient care",
      targetSegment: "medical-students",
    },
    {
      id: "intern-survival",
      name: "Intern Survival Kit",
      description: "Complete kit for medical interns",
      targetSegment: "healthcare-professionals",
    },
    {
      id: "emergency-rotation",
      name: "Emergency Rotation Kit",
      description: "Specialized tools for emergency department rotations",
      targetSegment: "medical-students",
    },
    {
      id: "surgery-rotation",
      name: "Surgery Rotation Kit",
      description: "Surgical instruments and supplies for surgery rotations",
      targetSegment: "medical-students",
    },
  ],
  
  // Features
  features: {
    whatsappOrdering: true,
    adminPanel: true,
    productManagement: true,
    orderTracking: true,
    multiplePaymentMethods: true,
    mobileFirst: true,
    seoOptimized: true,
  },
  
  // Social Media (optional)
  social: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: "",
  },
  
  // SEO
  seo: {
    keywords: [
      "medical supplies Kenya",
      "healthcare equipment Nairobi",
      "medical student kits",
      "stethoscopes Kenya",
      "medical equipment",
      "clinical supplies",
      "home care devices",
      "medical wear",
      "lab coats",
      "diagnostic tools",
    ],
  },
};

// Helper function to get WhatsApp link
export function getWhatsAppLink(message?: string): string {
  const { whatsapp } = siteConfig.contact;
  const encodedMessage = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${whatsapp}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
}

// Helper function to format phone number
export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
}
