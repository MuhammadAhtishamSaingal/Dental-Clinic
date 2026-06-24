export interface Doctor {
  slug: string;
  name: string;
  role: string;
  imageUrl: string;
  qualification: string;
  experience: string;
  certifications: string[];
  awards: string[];
  specializations: string[];
  bio: string;
}

export const doctorsData: Doctor[] = [
  {
    slug: 'dr-sarah-mitchell',
    name: 'Dr. Sarah Mitchell, DDS',
    role: 'Clinical Director & Lead Cosmetic Dentist',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop',
    qualification: 'Doctor of Dental Surgery (DDS) - Columbia University College of Dental Medicine',
    experience: '15+ Years in Restorative and Cosmetic Dentistry',
    certifications: [
      'Accredited Member, American Academy of Cosmetic Dentistry (AACD)',
      'Fellowship in International Congress of Oral Implantologists (ICOI)',
      'Certified Invisalign Platinum Provider'
    ],
    awards: [
      'Top Cosmetic Dentist of the Year (New York Dental Board) - 2023',
      'Outstanding Clinic Leadership Award - 2021',
      'Clinical Excellence Award in Aesthetic Dentistry - 2018'
    ],
    specializations: [
      'Smile Makeovers & Design',
      'Porcelain Veneers & Lumineers',
      'Dental Crowns & Bridges',
      'Laser Teeth Whitening'
    ],
    bio: 'Dr. Sarah Mitchell is passionate about crafting custom, artistic smile transformations that blend flawless aesthetic details with natural-looking anatomy. With over 15 years of experience, she combines advanced digital smile planning with a caring, patient-centered approach to restore both self-confidence and dental function.'
  },
  {
    slug: 'dr-marcus-vance',
    name: 'Dr. Marcus Vance, DDS, MS',
    role: 'Lead Oral Surgeon & Implant Specialist',
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop',
    qualification: 'Master of Science in Oral & Maxillofacial Surgery - Boston University School of Dental Medicine',
    experience: '12+ Years in Dental Implantology and Reconstructive Jaw Surgery',
    certifications: [
      'Diplomate, American Board of Oral and Maxillofacial Surgery (ABOMS)',
      'Member, American Association of Oral and Maxillofacial Surgeons (AAOMS)',
      'Advanced Sedation and General Anesthesia Certification'
    ],
    awards: [
      'Innovative Dental Implantology Award - 2024',
      'Distinguished Researcher in Bone Grafting - 2020',
      'Young Surgeon Excellence Award - 2016'
    ],
    specializations: [
      'Dental Implants (Single, Multiple, and Full-Arch)',
      'Surgical Wisdom Teeth Extractions',
      'Bone Grafting & Sinus Lifts',
      'Sedation Dentistry'
    ],
    bio: 'Dr. Marcus Vance specializes in restoring missing dentition and correcting complex bone issues. Known for his technical precision and warm bedside manner, Dr. Vance utilizes state-of-the-art 3D guided computer surgery to ensure implant placements are minimally invasive, highly stable, and exceptionally long-lasting.'
  },
  {
    slug: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova, DDS',
    role: 'Specialist Orthodontist',
    imageUrl: 'https://images.unsplash.com/photo-1594824813573-246434e33963?q=80&w=600&auto=format&fit=crop',
    qualification: 'Doctor of Dental Surgery & Orthodontic Residency - University of Pennsylvania School of Dental Medicine',
    experience: '10+ Years in Invisalign and Fixed Orthodontics',
    certifications: [
      'Member, American Association of Orthodontists (AAO)',
      'Board Certified Orthodontist (American Board of Orthodontics)',
      'Licensed Incognito Lingual Braces Provider'
    ],
    awards: [
      'Top Invisalign Provider Regional Recognition - 2023',
      'Excellence in Dental Care for Young Adults - 2019'
    ],
    specializations: [
      'Invisalign Clear Aligners (Teens & Adults)',
      'Traditional Metal and Ceramic Braces',
      'Early Childhood Phase I Orthodontics',
      'Bite Realignment (Overbite/Underbite correction)'
    ],
    bio: 'Dr. Elena Rostova dedicated her career to helping patients achieve straight, functional, and healthy bites. Combining digital orthodontics with a highly personalized touch, Dr. Rostova ensures that every alignment treatment is structured to optimize facial aesthetics, joint health, and lifelong dental stability.'
  }
];
