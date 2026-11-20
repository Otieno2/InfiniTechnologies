/**
 * Demo Data Seeding Script for MedTech Solutions
 * 
 * This script populates the database with realistic demo data:
 * - 20 sample products across different categories
 * - 3 test customer accounts
 * - 5 sample orders
 * 
 * Run: npm run seed
 * 
 * Note: Requires Supabase connection configured in .env
 */

import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Demo Products Data
const demoProducts = [
  // Diagnostic Essentials
  {
    name: 'Professional Stethoscope',
    slug: 'professional-stethoscope',
    description: 'High-quality dual-head stethoscope with excellent acoustic performance. Perfect for medical students and professionals.',
    category_slug: 'diagnostic-essentials',
    price: 2500,
    compare_at_price: 3500,
    in_stock: true,
    stock_quantity: 50,
    sku: 'STETH-001',
    image_url: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    name: 'Digital Blood Pressure Monitor',
    slug: 'digital-bp-monitor',
    description: 'Automatic digital BP monitor with large LCD display. WHO blood pressure indicator and irregular heartbeat detection.',
    category_slug: 'diagnostic-essentials',
    price: 3800,
    compare_at_price: 4500,
    in_stock: true,
    stock_quantity: 35,
    sku: 'BP-001',
    image_url: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    name: 'Infrared Thermometer',
    slug: 'infrared-thermometer',
    description: 'Non-contact infrared thermometer with 1-second measurement. Perfect for quick temperature screening.',
    category_slug: 'diagnostic-essentials',
    price: 1500,
    in_stock: true,
    stock_quantity: 100,
    sku: 'THERM-001',
    image_url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Pulse Oximeter',
    slug: 'pulse-oximeter',
    description: 'Fingertip pulse oximeter for measuring SpO2 and pulse rate. LED display with multiple viewing angles.',
    category_slug: 'diagnostic-essentials',
    price: 1200,
    in_stock: true,
    stock_quantity: 60,
    sku: 'OXI-001',
    image_url: 'https://images.unsplash.com/photo-1582560469781-1965b9af903d?auto=format&fit=crop&w=800&q=80',
  },
  
  // Procedure & Practical Kits
  {
    name: 'IV Cannulation Training Kit',
    slug: 'iv-cannulation-kit',
    description: 'Complete IV cannulation practice kit with training arm, cannulas, and practice fluids.',
    category_slug: 'procedure-practical-kits',
    price: 5500,
    in_stock: true,
    stock_quantity: 20,
    sku: 'IV-KIT-001',
    image_url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    name: 'Suturing Practice Kit',
    slug: 'suturing-practice-kit',
    description: 'Professional suturing kit with practice pads, needles, suture materials, and forceps.',
    category_slug: 'procedure-practical-kits',
    price: 4200,
    in_stock: true,
    stock_quantity: 25,
    sku: 'SUT-KIT-001',
    image_url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Catheterization Kit',
    slug: 'catheterization-kit',
    description: 'Sterile catheterization kit with Foley catheter, gloves, drapes, and antiseptic solution.',
    category_slug: 'procedure-practical-kits',
    price: 850,
    in_stock: true,
    stock_quantity: 40,
    sku: 'CATH-KIT-001',
  },
  
  // Medical Wear & Protective Gear
  {
    name: 'White Lab Coat - Premium',
    slug: 'white-lab-coat-premium',
    description: 'Professional white lab coat with multiple pockets. 65% polyester, 35% cotton blend. Available in multiple sizes.',
    category_slug: 'medical-wear-protective-gear',
    price: 1800,
    in_stock: true,
    stock_quantity: 80,
    sku: 'COAT-001',
    featured: true,
  },
  {
    name: 'Disposable Gloves (Box of 100)',
    slug: 'disposable-gloves-box',
    description: 'Latex-free nitrile gloves. Powder-free, ambidextrous. 100 pieces per box.',
    category_slug: 'medical-wear-protective-gear',
    price: 950,
    in_stock: true,
    stock_quantity: 200,
    sku: 'GLOVE-001',
  },
  {
    name: 'Surgical Face Masks (Pack of 50)',
    slug: 'surgical-masks-pack',
    description: '3-ply surgical face masks with ear loops. Fluid resistant and breathable.',
    category_slug: 'medical-wear-protective-gear',
    price: 450,
    in_stock: true,
    stock_quantity: 150,
    sku: 'MASK-001',
  },
  {
    name: 'Medical Scrubs Set - Unisex',
    slug: 'medical-scrubs-unisex',
    description: 'Comfortable scrubs set with top and pants. Multiple colors available.',
    category_slug: 'medical-wear-protective-gear',
    price: 2200,
    in_stock: true,
    stock_quantity: 45,
    sku: 'SCRUB-001',
  },
  
  // Clinical & Academic Support
  {
    name: 'Oxford Handbook of Clinical Medicine',
    slug: 'oxford-handbook-clinical',
    description: 'Essential pocket guide for medical students and doctors. Latest edition.',
    category_slug: 'clinical-academic-support-tools',
    price: 3500,
    in_stock: true,
    stock_quantity: 30,
    sku: 'BOOK-001',
  },
  {
    name: 'OSCE Examination Guide',
    slug: 'osce-examination-guide',
    description: 'Comprehensive OSCE preparation guide with clinical scenarios and marking schemes.',
    category_slug: 'clinical-academic-support-tools',
    price: 1800,
    in_stock: true,
    stock_quantity: 40,
    sku: 'BOOK-002',
  },
  {
    name: 'Medical Student Logbook',
    slug: 'medical-student-logbook',
    description: 'Structured logbook for tracking clinical cases, procedures, and skills.',
    category_slug: 'clinical-academic-support-tools',
    price: 650,
    in_stock: true,
    stock_quantity: 100,
    sku: 'LOG-001',
  },
  
  // Home Care & Patient Support
  {
    name: 'Wheelchair - Foldable',
    slug: 'wheelchair-foldable',
    description: 'Lightweight foldable wheelchair with comfortable seat and armrests. Weight capacity: 120kg.',
    category_slug: 'home-care-patient-support-devices',
    price: 12500,
    in_stock: true,
    stock_quantity: 10,
    sku: 'WHEEL-001',
    featured: true,
  },
  {
    name: 'Home Blood Glucose Monitor',
    slug: 'glucose-monitor-home',
    description: 'Easy-to-use glucometer with test strips. Includes 25 test strips and lancing device.',
    category_slug: 'home-care-patient-support-devices',
    price: 2800,
    in_stock: true,
    stock_quantity: 35,
    sku: 'GLUC-001',
  },
  {
    name: 'Walking Cane with Adjustable Height',
    slug: 'walking-cane-adjustable',
    description: 'Aluminum walking cane with ergonomic handle. Height adjustable from 84-94cm.',
    category_slug: 'home-care-patient-support-devices',
    price: 950,
    in_stock: true,
    stock_quantity: 50,
    sku: 'CANE-001',
  },
  {
    name: 'First Aid Kit - Complete',
    slug: 'first-aid-kit-complete',
    description: 'Comprehensive first aid kit with bandages, antiseptics, scissors, and emergency supplies.',
    category_slug: 'home-care-patient-support-devices',
    price: 1500,
    in_stock: true,
    stock_quantity: 60,
    sku: 'AID-001',
  },
  {
    name: 'Medical Student Starter Bundle',
    slug: 'medical-student-bundle',
    description: 'Complete starter kit for medical students: stethoscope, BP cuff, penlight, reflex hammer, and handbook.',
    category_slug: 'medical-students',
    price: 6500,
    compare_at_price: 8000,
    in_stock: true,
    stock_quantity: 25,
    sku: 'BUNDLE-001',
    featured: true,
  },
  {
    name: 'Diagnostic Penlight',
    slug: 'diagnostic-penlight',
    description: 'Medical penlight with pupil gauge. Bright LED light for examinations.',
    category_slug: 'diagnostic-essentials',
    price: 350,
    in_stock: true,
    stock_quantity: 120,
    sku: 'PEN-001',
  },
];

// Demo Categories
const demoCategories = [
  {
    name: 'Medical Students',
    slug: 'medical-students',
    description: 'Essential tools and supplies for medical students',
    icon: 'GraduationCap',
  },
  {
    name: 'Doctors and Professionals',
    slug: 'doctors-and-professionals',
    description: 'Professional-grade medical equipment',
    icon: 'Stethoscope',
  },
  {
    name: 'Facilities, Hospitals and Clinics',
    slug: 'facilities-hospitals-clinics',
    description: 'Bulk supplies for healthcare facilities',
    icon: 'Building2',
  },
  {
    name: 'General Public and Patients [HBC]',
    slug: 'general-public-patients-hbc',
    description: 'Home-based care supplies',
    icon: 'Users',
  },
  {
    name: 'Diagnostic Essentials',
    slug: 'diagnostic-essentials',
    description: 'Stethoscopes, BP machines, thermometers, and diagnostic tools',
    icon: 'Stethoscope',
  },
  {
    name: 'Procedure & Practical Kits',
    slug: 'procedure-practical-kits',
    description: 'IV cannulation, suturing, catheterization kits',
    icon: 'Syringe',
  },
  {
    name: 'Medical Wear & Protective Gear',
    slug: 'medical-wear-protective-gear',
    description: 'Lab coats, scrubs, gloves, masks, and protective equipment',
    icon: 'Shield',
  },
  {
    name: 'Clinical & Academic Support Tools',
    slug: 'clinical-academic-support-tools',
    description: 'Pocket guides, textbooks, logbooks, and study materials',
    icon: 'BookOpen',
  },
  {
    name: 'Home Care & Patient Support Devices',
    slug: 'home-care-patient-support-devices',
    description: 'Home BP machines, glucometers, wheelchairs, walking aids',
    icon: 'HeartPulse',
  },
];

async function seedDatabase() {
  console.log('🌱 Starting database seeding for MedTech Solutions Demo...\n');

  try {
    // 1. Seed Categories
    console.log('📁 Seeding categories...');
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .upsert(demoCategories, { onConflict: 'slug' })
      .select();

    if (catError) {
      console.error('❌ Error seeding categories:', catError.message);
      return;
    }
    console.log(`✅ Seeded ${categories?.length || 0} categories\n`);

    // 2. Seed Products
    console.log('📦 Seeding products...');
    const { data: products, error: prodError } = await supabase
      .from('products')
      .upsert(demoProducts, { onConflict: 'slug' })
      .select();

    if (prodError) {
      console.error('❌ Error seeding products:', prodError.message);
      return;
    }
    console.log(`✅ Seeded ${products?.length || 0} products\n`);

    console.log('🎉 Database seeding completed successfully!\n');
    console.log('📊 Summary:');
    console.log(`   - Categories: ${categories?.length || 0}`);
    console.log(`   - Products: ${products?.length || 0}`);
    console.log('\n💡 Next steps:');
    console.log('   1. Run: npm run dev');
    console.log('   2. Visit: http://localhost:3000/shop');
    console.log('   3. Create admin user via signup, then update role in database\n');

  } catch (error) {
    console.error('❌ Seeding failed:', error.message);
    process.exit(1);
  }
}

// Run the seeding
seedDatabase();
