export interface ServiceDetail {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  iconName: string;
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  seoTitle: string;
  seoDescription: string;
  imageUrl: string;
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'general-dentistry',
    title: 'General Dentistry',
    shortDescription: 'Comprehensive dental exams, cleanings, and preventive services for your entire family.',
    description: 'General dentistry is the cornerstone of lifelong oral health. It focuses on diagnosing, preventing, and treating a wide array of conditions affecting your teeth, gums, and jaw. Our clinic provides thorough dental examinations, state-of-the-art digital X-rays, and customized preventative care plans to detect and resolve dental issues long before they become complex and costly problems.',
    iconName: 'Shield',
    benefits: [
      'Early detection of tooth decay and oral health issues',
      'Prevention of gum disease and tooth loss',
      'Professional evaluation of current fillings and restorations',
      'Screenings for oral cancer for complete peace of mind',
      'Personalized guidance on home hygiene and preventative practices'
    ],
    process: [
      { step: 1, title: 'Comprehensive Examination', description: 'Our dentist inspects your teeth, gums, tongue, and jaw for any signs of decay, wear, or alignment issues.' },
      { step: 2, title: 'Digital X-Rays', description: 'Low-radiation digital imaging helps visualize bone structure and check between teeth for hidden cavities.' },
      { step: 3, title: 'Customized Treatment Planning', description: 'If any issues are found, we create a clear, step-by-step treatment plan customized to your schedule and budget.' }
    ],
    faqs: [
      { question: 'How often should I visit the dentist?', answer: 'We recommend routine cleanings and exams every six months to maintain optimal oral health and detect any developing concerns early.' },
      { question: 'What should I expect during my first visit?', answer: 'Your first visit includes a complete review of your dental history, digital X-rays, a comprehensive oral examination, and a professional cleaning if appropriate.' }
    ],
    seoTitle: 'General Dentistry & Family Dental Care | Premium Clinic',
    seoDescription: 'Maintain a healthy smile with general dentistry services including routine exams, dental hygiene, digital X-rays, and custom family dental care plans.',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'teeth-cleaning',
    title: 'Teeth Cleaning',
    shortDescription: 'Remove plaque, tartar, and surface stains to keep your teeth and gums fresh and healthy.',
    description: 'Even with diligent brushing and flossing at home, hard tartar deposits (calculus) and deeply embedded staining can build up over time. Our professional dental cleanings (prophylaxis) remove these stubborn deposits from hard-to-reach areas, lowering your risk of cavities and gum inflammation while giving you a bright, smooth, and refreshed smile.',
    iconName: 'Sparkles',
    benefits: [
      'Thorough removal of plaque and tartar that daily brushing misses',
      'Refreshes breath and combats persistent halitosis',
      'Gently polishes away coffee, tea, and tobacco stains',
      'Prevents gingivitis and advanced periodontal disease',
      'Leaves teeth feeling incredibly smooth and clean'
    ],
    process: [
      { step: 1, title: 'Physical Exam', description: 'Our dental hygienist checks around your teeth and gums to rule out active signs of major inflammation or other concerns.' },
      { step: 2, title: 'Tartar and Plaque Scaling', description: 'Using specialized hand scalers and ultrasonic instruments, we gently scrape off plaque and tartar deposits.' },
      { step: 3, title: 'Polishing & Flossing', description: 'We polish your teeth using a high-powered electric brush and specialized prophylaxis paste, followed by a professional flossing session.' }
    ],
    faqs: [
      { question: 'Does a professional teeth cleaning hurt?', answer: 'Generally, cleanings are painless. If you have sensitive teeth or mild gum recession, you might feel a tickling or scraping sensation. We can apply numbing gels if needed.' },
      { question: 'How long does a cleaning take?', answer: 'A standard scaling and polishing appointment takes about 45 to 60 minutes.' }
    ],
    seoTitle: 'Professional Teeth Cleaning & Dental Hygiene | Premium Clinic',
    seoDescription: 'Get clean, polished teeth and fresh breath. Professional dental scaling and stain removal by certified hygienists.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    shortDescription: 'Brighten your smile by up to eight shades with safe, professional laser teeth whitening.',
    description: 'Transform a dull or yellowed smile into a dazzling, confident asset. Our professional teeth whitening treatments use clinical-grade whitening agents activated by specialized laser light. This delivers fast, dramatic, and safe results in just one short office visit, far exceeding the speed and effectiveness of over-the-counter whitening strips.',
    iconName: 'Sun',
    benefits: [
      'Brightens teeth up to 8 shades in a single 60-minute session',
      'Safe, monitored application protects gums and limits sensitivity',
      'Removes deep stains from coffee, wine, aging, and food coloring',
      'Longer-lasting results compared to home kits',
      'Significantly boosts self-confidence and youthfulness'
    ],
    process: [
      { step: 1, title: 'Preparation and Shade Mapping', description: 'We record your starting tooth shade and apply a protective barrier over your gums and lips.' },
      { step: 2, title: 'Whitening Gel Application', description: 'We paint a professional hydrogen peroxide whitening gel onto the front surfaces of your teeth.' },
      { step: 3, title: 'Laser Light Activation', description: 'A specialized blue light activates the gel for three to four 15-minute cycles, breaking up deep discoloration.' }
    ],
    faqs: [
      { question: 'How long do professional whitening results last?', answer: 'Results typically last between 1 to 3 years, depending on your lifestyle. Avoiding dark-colored foods, coffee, red wine, and smoking helps maintain your bright smile.' },
      { question: 'Will whitening make my teeth sensitive?', answer: 'Some temporary sensitivity is normal for 24-48 hours after treatment. We use advanced formulas containing desensitizing agents to keep you comfortable.' }
    ],
    seoTitle: 'Professional Teeth Whitening | Zoom & Laser Treatments',
    seoDescription: 'Achieve a brighter, radiant smile with in-office laser teeth whitening. Safe, fast, and clinically proven results in under an hour.',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'dental-implants',
    title: 'Dental Implants',
    shortDescription: 'Permanent, natural-looking replacement for missing teeth that restores full chewing power.',
    description: 'Dental implants are the gold standard for replacing missing teeth. Unlike bridges or dentures that sit on top of the gums, implants are titanium posts surgically placed into the jawbone, acting as artificial tooth roots. Once healed, they fuse with your bone to support a custom porcelain crown, restoring 100% of your chewing force, preventing bone loss, and looking completely natural.',
    iconName: 'Wrench',
    benefits: [
      'Looks, feels, and functions exactly like a natural tooth',
      'Prevents jawbone shrinkage and maintains facial structure',
      'Does not require grinding down neighboring healthy teeth',
      'Permanent, stable solution that cannot slip or fall out',
      'Restores clear speech and unrestricted chewing of favorite foods'
    ],
    process: [
      { step: 1, title: 'Consultation & 3D Imaging', description: 'We perform a detailed CT scan to evaluate your jawbone density and plan the exact placement of the implant.' },
      { step: 2, title: 'Implant Placement', description: 'The titanium post is gently placed into the bone under local anesthesia. The site is allowed to heal and integrate for 3-6 months.' },
      { step: 3, title: 'Abutment & Custom Crown', description: 'Once integrated, we attach a connector (abutment) and secure your handcrafted porcelain crown.' }
    ],
    faqs: [
      { question: 'Am I a candidate for dental implants?', answer: 'Most adults with healthy gums and sufficient jawbone density are excellent candidates. If you have bone loss, we can discuss bone grafting solutions.' },
      { question: 'How long do dental implants last?', answer: 'With proper brushing, flossing, and regular clinic cleanings, the implant post itself can last a lifetime, while the crown may need replacement after 10-15 years.' }
    ],
    seoTitle: 'Dental Implants - Permanent Missing Teeth Replacement | Clinic',
    seoDescription: 'Restore your smile, speech, and chewing function with high-grade titanium dental implants. Fully customized crowns and advanced implant surgery.',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    shortDescription: 'Save infected or painful teeth and relieve discomfort with gentle endodontic care.',
    description: 'A root canal treatment (endodontics) is a highly routine, pain-relieving procedure designed to save a severely decayed or infected tooth from extraction. When bacteria reach the soft pulp inside the tooth, it causes intense throbbing pain and swelling. During a root canal, we remove the infected nerve tissue, thoroughly clean and disinfect the root chambers, and seal it to prevent reinfection.',
    iconName: 'Flame',
    benefits: [
      'Eliminates chronic tooth pain and sensitivity to heat and cold',
      'Saves your natural tooth structure and keeps your bite aligned',
      'Prevents the spread of infection to surrounding jaw tissues and blood',
      'Pain-free procedure performed under advanced local anesthesia',
      'Highly successful treatment with a lifetime track record'
    ],
    process: [
      { step: 1, title: 'Pain Relief & Access', description: 'We numb the area thoroughly. A small, protective sheet (rubber dam) isolates the tooth before we create a tiny access opening.' },
      { step: 2, title: 'Pulp Extraction & Disinfection', description: 'We extract the inflamed or dead pulp tissue and shape the microscopic canals using modern rotary instruments.' },
      { step: 3, title: 'Sealing and Rebuilding', description: 'We fill the empty canals with a biocompatible material (gutta-percha) and seal the tooth, usually recommending a crown for reinforcement.' }
    ],
    faqs: [
      { question: 'Is a root canal painful?', answer: 'Contrary to old myths, modern root canals are no more uncomfortable than receiving a standard filling. The procedure actually eliminates the excruciating pain caused by the tooth infection.' },
      { question: 'Can I go back to work after a root canal?', answer: 'Yes, most patients return to their routine immediately. The treated tooth might feel slightly tender for a few days, which is easily managed with over-the-counter pain relievers.' }
    ],
    seoTitle: 'Pain-Free Root Canal Treatment & Endodontics | Premium Clinic',
    seoDescription: 'Relieve tooth pain and save your natural tooth. Pain-free root canal therapy using advanced rotary endodontics and bio-sealants.',
    imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'braces',
    title: 'Dental Braces',
    shortDescription: 'Classic orthodontic treatment to align crooked teeth and correct bite misalignments.',
    description: 'Metal and ceramic braces remain one of the most reliable and powerful orthodontic solutions for patients of all ages. By applying gentle, continuous pressure over time, braces shift teeth into their correct positions. They are highly effective for correcting complex alignment issues, closing gaps, and resolving severe bite conditions like overbites, underbites, and crossbites.',
    iconName: 'Grid',
    benefits: [
      'Corrects even the most severe teeth crowding and bite issues',
      'Improves jaw alignment and speech clarity',
      'Available in low-profile metal or tooth-colored ceramic brackets',
      'Prevents uneven tooth wear and makes cleaning teeth easier',
      'Delivers highly predictable, stable, and beautiful lifelong results'
    ],
    process: [
      { step: 1, title: 'Orthodontic Assessment', description: 'We take digital impressions, panoramic X-rays, and photos of your teeth and facial profile to create a custom alignment plan.' },
      { step: 2, title: 'Bonding Brackets', description: 'We prepare the teeth surfaces and bond the metal or ceramic brackets, connecting them with a flexible archwire.' },
      { step: 3, title: 'Regular Adjustments', description: 'Every 4-6 weeks, you visit the clinic to tighten the wires and track alignment progress.' }
    ],
    faqs: [
      { question: 'How long do I need to wear braces?', answer: 'Treatment duration varies depending on complexity, but usually ranges from 12 to 24 months.' },
      { question: 'Are ceramic braces less visible?', answer: 'Yes, ceramic braces use clear or tooth-colored materials that blend in with your natural teeth, making them far less noticeable than metal braces.' }
    ],
    seoTitle: 'Traditional & Ceramic Dental Braces | Orthodontic Clinic',
    seoDescription: 'Achieve a perfectly aligned smile. Metal and cosmetic ceramic braces for children, teens, and adults. Custom bite correction treatments.',
    imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'invisalign',
    title: 'Invisalign Clear Aligners',
    shortDescription: 'Straighten your teeth discreetly with removable, near-invisible custom aligners.',
    description: 'Get the straight smile you have always wanted without the metal look of traditional braces. Invisalign uses a series of custom-made, clear plastic trays that fit snugly over your teeth. Because they are practically invisible and fully removable, you can eat your favorite foods, brush and floss with ease, and feel completely confident throughout your entire orthodontic journey.',
    iconName: 'Maximize',
    benefits: [
      'Virtually invisible aligners let you smile confidently during treatment',
      'Removable trays mean no dietary restrictions or food blockages',
      'Much easier to maintain excellent brushing and flossing hygiene',
      'Smooth plastic prevents irritating cuts or scrapes inside the cheeks',
      'Requires fewer dental visits for adjustments'
    ],
    process: [
      { step: 1, title: '3D Digital Scan', description: 'We scan your teeth using an intraoral scanner, generating a highly accurate 3D model of your current and future smile.' },
      { step: 2, title: 'Custom Aligner Fabrication', description: 'A series of custom aligners are printed using medical-grade thermoplastic materials.' },
      { step: 3, title: 'Progressive Alignment', description: 'You wear each set of trays for 20-22 hours a day, switching to the next set in the series every 1-2 weeks.' }
    ],
    faqs: [
      { question: 'Can I eat while wearing my Invisalign aligners?', answer: 'No, you must remove your aligners before eating or drinking anything other than plain water. This prevents staining and damaging the trays.' },
      { question: 'How long does Invisalign treatment take?', answer: 'On average, treatment takes 6 to 18 months, depending on how much alignment is needed and how consistently you wear your aligners.' }
    ],
    seoTitle: 'Invisalign Clear Aligners | Invisible Orthodontics',
    seoDescription: 'Straighten your teeth discreetly with Invisalign. Removable clear aligners for adults and teens. Book a free 3D smile scan today.',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'crowns',
    title: 'Dental Crowns',
    shortDescription: 'Restore the shape, size, strength, and appearance of broken or severely decayed teeth.',
    description: 'A dental crown is a custom-fitted cap that covers a damaged, cracked, or weakened tooth, restoring its natural shape, size, and strength. Crafted from highly aesthetic porcelain or ceramic materials, our modern crowns look identical to natural enamel and protect teeth from further fracture, especially after root canal therapy or heavy tooth decay.',
    iconName: 'Activity',
    benefits: [
      'Strengthens and preserves weak, cracked, or broken teeth',
      'Matches the natural color, contour, and translucency of surrounding teeth',
      'Protects a vulnerable tooth after a root canal',
      'Stain-resistant and highly durable ceramic material',
      'Feels completely natural and restores normal chewing function'
    ],
    process: [
      { step: 1, title: 'Tooth Preparation', description: 'We gently reshape the outer enamel of the tooth to accommodate the thickness of the crown.' },
      { step: 2, title: 'Digital Impression', description: 'We take a digital scan of the prepped tooth, matching your enamel color to ensure a seamless blend.' },
      { step: 3, title: 'Crown Bonding', description: 'Once your custom crown is ready, we check the fit and bite alignment, then bond it permanently in place.' }
    ],
    faqs: [
      { question: 'What is the difference between a filling and a crown?', answer: 'A filling repairs a small cavity, while a crown covers and protects the entire visible portion of a tooth that has extensive damage or structural weakness.' },
      { question: 'How long do dental crowns last?', answer: 'With good oral hygiene, dental crowns routinely last between 10 to 15 years.' }
    ],
    seoTitle: 'Porcelain & Ceramic Dental Crowns | Premium Restorations',
    seoDescription: 'Restore damaged teeth with natural-looking porcelain dental crowns. Custom design, durable bonding, and full structural restoration.',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'bridges',
    title: 'Dental Bridges',
    shortDescription: 'Fill the gap left by one or more missing teeth with durable, fixed bridges.',
    description: 'A dental bridge is a fixed, non-removable dental restoration used to replace one or more missing teeth. It literally bridges the gap, anchoring onto the healthy teeth on either side of the space. Made from premium, biocompatible ceramics, our custom bridges match your surrounding smile perfectly, preventing your remaining teeth from shifting out of alignment and restoring full bite function.',
    iconName: 'Layers',
    benefits: [
      'Fills gaps from missing teeth without requiring surgical bone implants',
      'Restores natural chewing pressure and distributes bite force evenly',
      'Prevents adjacent teeth from drifting and turning into empty spaces',
      'Supports facial muscles, preventing a sunken appearance',
      'Stays securely bonded, requiring no messy adhesives'
    ],
    process: [
      { step: 1, title: 'Preparation of Anchor Teeth', description: 'The teeth adjacent to the missing gap (abutments) are prepared and shaped to support the bridge.' },
      { step: 2, title: 'Impressions & Temporary Bridge', description: 'We take highly precise scans of the area and place a temporary bridge to protect your teeth while the lab fabricates the final restoration.' },
      { step: 3, title: 'Bridge Fitment and Bonding', description: 'We test the fit, alignment, and color match of your custom bridge before cementing it permanently in place.' }
    ],
    faqs: [
      { question: 'How many missing teeth can a bridge replace?', answer: 'Bridges are typically used to replace 1 to 4 adjacent missing teeth, provided there are strong, healthy teeth on both sides of the gap to support them.' },
      { question: 'How do I clean under a dental bridge?', answer: 'We will show you how to use a floss threader, interdental brushes, or a water flosser to easily clean food particles and plaque from beneath the bridge.' }
    ],
    seoTitle: 'Custom Dental Bridges | Missing Teeth Bridge Restoration',
    seoDescription: 'Bridge the gap left by missing teeth. Premium ceramic fixed dental bridges. Restore your smile, bite alignment, and chewing comfort.',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'veneers',
    title: 'Porcelain Veneers',
    shortDescription: 'Achieve a picture-perfect smile with ultra-thin porcelain shells custom-bonded to your teeth.',
    description: 'Porcelain veneers are the ultimate cosmetic treatment for an instant smile makeover. These micro-thin, custom-crafted shells of premium dental ceramic are bonded directly to the front surface of your teeth. Veneers instantly cover and correct deep stains, cracks, chips, gaps, and minor misalignments, creating a uniform, brilliant, and natural-looking Hollywood smile.',
    iconName: 'User',
    benefits: [
      'Conceals deep discolorations, chips, gaps, and minor crookedness',
      'Creates a flawless, symmetrical, and bright smile in just two visits',
      'Highly resistant to stains from coffee, tea, and red wine',
      'Gently contoured to match your specific facial features and skin tone',
      'Requires very minimal preparation of your natural tooth structure'
    ],
    process: [
      { step: 1, title: 'Cosmetic Consultation & Mockup', description: 'We discuss your aesthetic goals and create a physical mockup of your future smile to preview the final shape.' },
      { step: 2, title: 'Micro-Preparation & Scans', description: 'We gently prep a fraction of a millimeter of enamel from the tooth fronts and take digital impressions.' },
      { step: 3, title: 'Veneer Bonding', description: 'We place the custom fabricated porcelain shells and cure them permanently using a strong adhesive light.' }
    ],
    faqs: [
      { question: 'Is getting veneers a reversible process?', answer: 'Because a tiny amount of natural enamel must be reshaped to ensure the veneers lie flat and look natural, the process is generally considered permanent.' },
      { question: 'How do I care for my new veneers?', answer: 'Just treat them like natural teeth. Brush twice a day with non-abrasive toothpaste, floss daily, and avoid biting down on hard objects like ice or pens.' }
    ],
    seoTitle: 'Porcelain Veneers & Smile Makeovers | Premium Clinic',
    seoDescription: 'Transform your teeth with ultra-thin porcelain veneers. Correct stains, chips, gaps, and worn teeth with custom cosmetic veneers.',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'dentures',
    title: 'Full & Partial Dentures',
    shortDescription: 'Affordable, natural-looking removable appliances to replace multiple missing teeth.',
    description: 'Modern dentures have come a long way from the heavy, artificial-looking plates of the past. Our clinic provides custom-designed full and partial dentures made from high-strength, lightweight polymers. They fit comfortably, match your natural gum contours, and restore your smile and chewing ability with maximum stability and confidence.',
    iconName: 'Copy',
    benefits: [
      'Cost-effective solution to replace entire arches of missing teeth',
      'Improves speech and makes chewing your favorite meals comfortable again',
      'Fills out facial contours, preventing the skin from sagging over time',
      'Removable design allows for very simple and thorough cleaning',
      'Partial dentures blend seamlessly with your remaining natural teeth'
    ],
    process: [
      { step: 1, title: 'Mouth Impressions & Measurements', description: 'We take detailed impressions of your gums and jaw alignment to plan the exact fit and bite relation.' },
      { step: 2, title: 'Wax Trial & Alignment Try-in', description: 'We create a mock wax denture, allowing you to preview the look, fit, and color of the teeth before final crafting.' },
      { step: 3, title: 'Final Custom Fitting', description: 'We fit your new dentures, checking for any pressure points, and make fine adjustments to ensure a comfortable, snug fit.' }
    ],
    faqs: [
      { question: 'Will dentures change how I speak?', answer: 'It is normal to need a few weeks to adjust to speaking with new dentures. Reading aloud at home is a great way to speed up the process and speak naturally.' },
      { question: 'Should I sleep with my dentures in?', answer: 'It is recommended to remove your dentures at night. This allows your gums and bone tissues to rest, preventing irritation and fungal infections.' }
    ],
    seoTitle: 'Full & Partial Removable Dentures | Premium Prosthodontics',
    seoDescription: 'Replace missing teeth with modern, lightweight full or partial dentures. Comfortable fit, realistic gum aesthetics, and restored chewing power.',
    imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    shortDescription: 'Gentle, friendly, and patient-focused dental care to give children a lifetime of healthy smiles.',
    description: 'We believe that early dental experiences shape a child’s attitude toward oral health for the rest of their life. Our pediatric team provides a warm, fun, and completely stress-free environment. From gentle first cleanings to cavity-preventing dental sealants and fluoride treatments, we ensure your child feels safe, educated, and happy during every visit.',
    iconName: 'Smile',
    benefits: [
      'Fun, child-friendly environment that helps eliminate fear of the dentist',
      'Early detection and prevention of cavities in primary baby teeth',
      'Protective sealants block food particles from hard-to-clean molars',
      'Teaches kids proper, fun brushing and flossing habits early on',
      'Monitors proper growth and developmental alignment of the jaw'
    ],
    process: [
      { step: 1, title: 'Warm Welcome & Playful Checkup', description: 'We count and inspect the child\'s teeth using kid-friendly terms and interactive models to make them feel comfortable.' },
      { step: 2, title: 'Gentle Cleaning & Fluoride', description: 'We gently scale away soft plaque buildup and apply a protective, child-safe fluoride varnish.' },
      { step: 3, title: 'Fun Education & Prizes', description: 'We demonstrate proper brushing on a toy model and celebrate a successful visit with fun rewards!' }
    ],
    faqs: [
      { question: 'When should my child first visit the dentist?', answer: 'The American Academy of Pediatric Dentistry recommends children have their first dental visit when their first baby tooth erupts, or by their first birthday.' },
      { question: 'What are dental sealants?', answer: 'Dental sealants are thin, protective plastic coatings painted onto the chewing surfaces of the back molars to prevent cavities from forming in deep grooves.' }
    ],
    seoTitle: 'Pediatric Dentistry & Children\'s Dental Care | Family Dentist',
    seoDescription: 'Gentle, friendly children\'s dental care. Routine cleanings, dental sealants, fluoride treatments, and dental education in a stress-free clinic.',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    shortDescription: 'Upgrade your aesthetics with bonding, shaping, and personalized cosmetic enhancements.',
    description: 'Cosmetic dentistry combines science and art to enhance the beauty of your smile. Whether you want to correct minor chips, close small gaps between teeth, or reshape asymmetrical teeth, our clinic uses modern materials like composite bonding resins and digital design technology to achieve gorgeous, natural-looking results with minimal tooth alteration.',
    iconName: 'Heart',
    benefits: [
      'Corrects visual chips, cracks, gaps, and tooth shapes',
      'Uses composite resin that matches the exact color shade of your enamel',
      'Quick, minimally invasive procedures often completed in one visit',
      'Provides a dramatic boost in social and professional confidence',
      'Improves bite efficiency by restoring even tooth edges'
    ],
    process: [
      { step: 1, title: 'Aesthetic Analysis', description: 'We discuss your ideal smile and map out which cosmetic options (bonding, contouring, or whitening) fit your goal.' },
      { step: 2, title: 'Conservative Preparation', description: 'The surface of the tooth is prepared, requiring no drills or anesthetics for standard composite bonding.' },
      { step: 3, title: 'Artistic Sculpting & Polishing', description: 'We apply and shape dental resins to perfection, curing the material and polishing it to match the shine of natural enamel.' }
    ],
    faqs: [
      { question: 'Is cosmetic dentistry covered by insurance?', answer: 'Cosmetic procedures are typically considered elective and may not be covered by standard insurance. We offer flexible payment plans to make your dream smile accessible.' },
      { question: 'How long does tooth bonding last?', answer: 'Composite bonding usually lasts between 5 to 10 years, after which it can easily be touched up or replaced.' }
    ],
    seoTitle: 'Cosmetic Dentistry & Smile Enhancements | Premium Dental',
    seoDescription: 'Improve your smile\'s aesthetics with modern cosmetic dentistry. Composite bonding, tooth contouring, and smile makeovers.',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'gum-disease-treatment',
    title: 'Gum Disease Treatment',
    shortDescription: 'Protect your jawbone and teeth from periodontal disease with deep scaling and root planing.',
    description: 'Healthy gums are the foundation of healthy teeth. Gum disease (periodontitis) is a silent infection that damages the gum tissues and jawbone, and is the leading cause of adult tooth loss. Our periodontal treatments, including deep scaling and root planing, target and eliminate harmful bacteria hidden beneath the gum line, stopping the infection and promoting tissue healing.',
    iconName: 'HeartPulse',
    benefits: [
      'Halts active bleeding, swelling, and gum recession',
      'Cleans deep pockets of bacteria where regular scaling cannot reach',
      'Prevents loss of bone support, protecting teeth from becoming loose',
      'Reduces systemic health risks (heart disease, diabetes) linked to oral inflammation',
      'Eliminates persistent bad breath caused by periodontal bacteria'
    ],
    process: [
      { step: 1, title: 'Periodontal Charting', description: 'We measure the depth of the spaces (pockets) between your teeth and gums to locate areas of active infection.' },
      { step: 2, title: 'Scaling & Root Planing', description: 'Under local numbing, we clean plaque and tartar from below the gum line (scaling) and smooth the tooth roots to prevent new bacteria from adhering.' },
      { step: 3, title: 'Antibacterial Irrigation', description: 'We flush the gum pockets with medical-grade antiseptic solutions and plan follow-up visits to monitor healing.' }
    ],
    faqs: [
      { question: 'What are the warning signs of gum disease?', answer: 'Common warning signs include gums that bleed when brushing or flossing, red or swollen gums, persistent bad breath, and gums pulling away from the teeth.' },
      { question: 'Can gum disease be cured?', answer: 'Gingivitis (early-stage gum disease) can be completely reversed. Periodontitis (advanced stage) cannot be cured because bone loss is permanent, but it can be managed and halted with proper professional care.' }
    ],
    seoTitle: 'Gum Disease Treatment & Periodontal Therapy | Clinic',
    seoDescription: 'Treat bleeding gums, swelling, and bad breath. Professional deep scaling and root planing (SRP) and periodontal pocket therapies.',
    imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'tooth-extraction',
    title: 'Tooth Extraction',
    shortDescription: 'Safe, comfortable, and gentle extraction of severely damaged or crowded teeth.',
    description: 'While our primary goal is always to save your natural teeth, sometimes extraction is the healthiest option for your overall oral health. A tooth may need to be removed due to severe fracture, deep decay that cannot support a crown, advanced gum disease, or to make room for orthodontic alignment. Our surgeons perform extractions with the utmost care, utilizing advanced local anesthesia to ensure a pain-free, comfortable experience.',
    iconName: 'Scissors',
    benefits: [
      'Stops severe pain and prevents oral infections from spreading',
      'Relieves overcrowding to allow for proper orthodontic alignment',
      'Eliminates damaged teeth that are beyond repair, saving your jaw health',
      'Conducted with gentle techniques that preserve the surrounding bone for future implants',
      'Quick, safe procedure with detailed aftercare instructions for fast healing'
    ],
    process: [
      { step: 1, title: 'X-Ray & Numbing', description: 'We take detailed X-rays to assess the root structure and numb the tooth and surrounding area completely.' },
      { step: 2, title: 'Gentle Tooth Removal', description: 'Using specialized instruments, we gently loosen the tooth and extract it without damaging adjacent tissues.' },
      { step: 3, title: 'Suturing & Clot Stabilization', description: 'We apply clean gauze to help form a blood clot, placing dissolvable sutures if necessary to ensure rapid healing.' }
    ],
    faqs: [
      { question: 'What can I eat after a tooth extraction?', answer: 'Stick to soft foods like yogurt, applesauce, mashed potatoes, and soups for the first 24-48 hours. Avoid hot foods, alcohol, and using straws, which can dislodge the healing blood clot.' },
      { question: 'How long does it take to heal after an extraction?', answer: 'The initial healing of the gum tissue takes about 7 to 10 days, while the underlying bone fully heals over 3 to 6 months.' }
    ],
    seoTitle: 'Safe & Painless Tooth Extraction | Dental Surgery Clinic',
    seoDescription: 'Gentle extraction of damaged, decayed, or crowded teeth. Painless extraction techniques with comprehensive post-operative care and replacement options.',
    imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'wisdom-tooth-removal',
    title: 'Wisdom Tooth Removal',
    shortDescription: 'Prevent pain, infection, and crowding with surgical removal of impacted wisdom teeth.',
    description: 'Wisdom teeth (third molars) usually emerge in the late teens or early twenties. Because our jaws often do not have enough space to accommodate them, wisdom teeth frequently become impacted (stuck under the bone or gums), growing at awkward angles. This can lead to severe pain, cysts, damage to adjacent molars, and painful gum infections. Our clinic specializes in safe, highly comfortable surgical extractions of impacted wisdom teeth.',
    iconName: 'Skull',
    benefits: [
      'Prevents crowding and shifting of teeth that have already been aligned',
      'Eliminates pain, swelling, and infections at the back of the jaw',
      'Prevents damage and cavities on the adjacent second molars',
      'Reduces the risk of jaw cysts and bone damage',
      'Performed with advanced sedation or localized anesthesia options'
    ],
    process: [
      { step: 1, title: '3D Panoramic Scanning', description: 'We take a comprehensive panoramic X-ray to locate the exact position of the wisdom teeth and map out nerve paths.' },
      { step: 2, title: 'Surgical Extraction', description: 'Under deep anesthesia or local numbing, we make a small incision in the gum to gently remove the wisdom teeth.' },
      { step: 3, title: 'Recovery and Support', description: 'We place sterile gauze, provide detailed pain management protocols, and schedule a quick checkup to ensure clean healing.' }
    ],
    faqs: [
      { question: 'Do all wisdom teeth need to be removed?', answer: 'Not necessarily. If your wisdom teeth are fully erupted, correctly aligned, healthy, and easy to clean, they can be left in place. We evaluate them closely during regular exams.' },
      { question: 'What is a dry socket and how can I avoid it?', answer: 'Dry socket is a temporary condition when the healing blood clot is dislodged from the socket. Avoid smoking, spitting, rinsing vigorously, or using straws for at least 5 days post-surgery.' }
    ],
    seoTitle: 'Impacted Wisdom Teeth Extraction & Surgery | Clinic',
    seoDescription: 'Relieve pain and prevent tooth crowding. Safe surgical extraction of impacted wisdom teeth. Experienced oral surgeons and sedation options.',
    imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'smile-makeover',
    title: 'Smile Makeover',
    shortDescription: 'Custom, comprehensive treatment plan combining multiple aesthetic services for a total transformation.',
    description: 'A smile makeover is a highly personalized combination of cosmetic and restorative procedures designed to create your dream smile. By evaluating your facial appearance, skin tone, lip lines, and tooth dimensions, we develop a comprehensive treatment plan that may combine teeth whitening, porcelain veneers, crowns, implants, or clear aligners, giving you a life-changing aesthetic transformation.',
    iconName: 'Gem',
    benefits: [
      'Fully customized combination of procedures for a complete aesthetic overhaul',
      'Restores both the beauty and the chewing function of your teeth',
      'Corrects multiple flaws simultaneously: alignment, gaps, chips, and stains',
      'Utilizes digital smile design to let you preview results before starting',
      'Dramatically elevates your confidence, professional appearance, and youthfulness'
    ],
    process: [
      { step: 1, title: 'Smile Design Consultation', description: 'We capture digital photographs, X-rays, and intraoral scans to build a virtual mockup of your customized smile.' },
      { step: 2, title: 'Phased Treatment Execution', description: 'We execute the procedures in a structured sequence, starting with foundation steps (like alignment or whitening) followed by restorations.' },
      { step: 3, title: 'Final Reveal & Fitment', description: 'We bond the final porcelain veneers, crowns, or bridges, checking your bite dynamics for a perfect, long-lasting finish.' }
    ],
    faqs: [
      { question: 'How much does a smile makeover cost?', answer: 'Because a smile makeover is completely customized, the investment varies based on the procedures you choose. We provide detailed pricing options during your initial consultation.' },
      { question: 'How long does the entire process take?', answer: 'Simple makeovers using bonding or veneers can take as little as 2 to 3 weeks. If implants or orthodontics are needed, the process can span several months.' }
    ],
    seoTitle: 'Complete Smile Makeover & Dental Artistry | Premium Clinic',
    seoDescription: 'Transform your smile with a customized smile makeover plan. Combining veneers, whitening, implants, and crowns for a beautiful, natural look.',
    imageUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200&auto=format&fit=crop'
  },
  {
    slug: 'emergency-dentistry',
    title: 'Emergency Dentistry',
    shortDescription: 'Immediate, same-day dental care for toothaches, broken teeth, and dental trauma.',
    description: 'Dental emergencies can be frightening and require immediate professional attention to relieve pain and save vulnerable teeth. Whether you have an excruciating toothache, a knocked-out tooth, a broken filling, or a swelling infection, our clinic reserves emergency slots daily to provide same-day relief, diagnosis, and treatment when you need it most.',
    iconName: 'AlertTriangle',
    benefits: [
      'Same-day appointments to relieve severe pain immediately',
      'Urgent treatment to save knocked-out or fractured teeth',
      'Immediate diagnosis and antibiotics for spreading infections',
      'Restores broken fillings or crowns to prevent further damage',
      'Experienced emergency staff available for quick phone consultation'
    ],
    process: [
      { step: 1, title: 'Priority Triage & Pain Control', description: 'We evaluate your emergency over the phone or immediately upon arrival, getting you into a chair to manage pain first.' },
      { step: 2, title: 'Focused Exam & Imaging', description: 'We take diagnostic digital X-rays to pinpoint the underlying cause of the pain or damage.' },
      { step: 3, title: 'Immediate Stabilization', description: 'We perform urgent repairs, temporary fillings, root canal relief, or extraction to resolve the immediate crisis.' }
    ],
    faqs: [
      { question: 'What should I do if a tooth is completely knocked out?', answer: 'Find the tooth, hold it by the crown (never the root), gently rinse it with water if dirty, and try to place it back in the socket. If not possible, place it in a glass of milk and get to our clinic within 30-60 minutes.' },
      { question: 'How do I know if my toothache is an emergency?', answer: 'If your pain is constant, severe, accompanied by swelling in your face or gums, a fever, or difficulty swallowing, it is an emergency that requires immediate care.' }
    ],
    seoTitle: '24/7 Emergency Dental Care & Same-Day Relief | Clinic',
    seoDescription: 'Suffering from severe toothache or a broken tooth? We offer same-day emergency dental appointments to relieve pain and restore your smile.',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop'
  }
];
