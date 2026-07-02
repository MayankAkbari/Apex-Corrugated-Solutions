export interface ProductItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  gallery: string[];
  features: string[];
  specs: {
    ply: string;
    fluteType: string;
    gsmRange: string;
    ectStrength: string;
    loadCapacity: string;
    printing: string;
  };
  applications: string[];
  benefits: string[];
  industriesServed: string[];
}

export interface IndustryItem {
  id: string;
  slug: string;
  name: string;
  iconName: string;
  description: string;
  keyRequirements: string[];
  recommendedProducts: string[];
  image: string;
}

export interface ReviewItem {
  id: string;
  name?: string;
  author?: string;
  company: string;
  designation?: string;
  role?: string;
  industry?: string;
  rating: number;
  comment: string;
  date: string;
  status: 'approved' | 'pending' | 'rejected';
  approved?: boolean;
  featured: boolean;
  avatar?: string;
  image?: string;
}


export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    slug: 'corrugated-boxes',
    title: 'Precision Corrugated Boxes',
    category: 'Corrugated Boxes',
    shortDesc: 'High-burst strength 3-ply, 5-ply, and 7-ply corrugated boxes engineered for ultimate structural rigidity and protection.',
    fullDesc: 'Our Precision Corrugated Boxes represent the peak of structural engineering in modern packaging. Manufactured using premium virgin and high-grade recycled Kraft paper on automated German corrugators, these boxes boast exceptional Edge Crush Test (ECT) ratings and Cobb values that resist humidity during transit.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Available in 3-Ply, 5-Ply, and Heavy-Duty 7-Ply configurations',
      'Precision rotary slotting and clean 90-degree folding lines',
      'Superior Edge Crush Test (ECT) and Bursting Strength Test (BST) ratings',
      'Anti-fungal and moisture-resistant Kraft top liner options'
    ],
    specs: {
      ply: '3-Ply / 5-Ply / 7-Ply',
      fluteType: 'A, B, C, E, AB, BC Flutes',
      gsmRange: '120 GSM to 350 GSM',
      ectStrength: '32 to 90 lbs/in',
      loadCapacity: '10 kg up to 150 kg static load',
      printing: 'Up to 4-Color High-Definition Flexo'
    },
    applications: [
      'Primary and secondary distribution shipping',
      'Automotive spare parts housing',
      'Consumer electronics transit boxes',
      'Pharmaceutical batch shipping'
    ],
    benefits: [
      'Reduces transit breakage by over 45%',
      'Optimizes warehouse pallet stacking density',
      '100% recyclable and FSC certified sustainable'
    ],
    industriesServed: ['FMCG', 'Electronics', 'Pharmaceutical', 'Automotive']
  },
  {
    id: 'prod-2',
    slug: 'heavy-duty-packaging',
    title: 'Heavy-Duty Industrial Pallet Boxes',
    category: 'Heavy Duty Packaging',
    shortDesc: 'Ultra-tough triple-wall corrugated bulk containers designed to replace heavy wooden crates for export and machinery.',
    fullDesc: 'Apex Heavy-Duty Industrial Pallet Boxes offer immense stacking resilience, replacing bulky wooden crates with lightweight, fumigation-free corrugated alternatives. Tested under rigorous compression simulations, they easily withstand maritime and air cargo vibration profiles.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Triple-wall (7-Ply & 9-Ply) high-density construction',
      'Integrated corrugated pallet sleeves and caps',
      'ISPM 15 exempt – zero wooden fumigation paperwork required',
      'Weatherproof adhesive matrix preventing delamination in high humidity'
    ],
    specs: {
      ply: '7-Ply Heavy Duty / 9-Ply Bulk',
      fluteType: 'AAA / CAA / BCA Flutes',
      gsmRange: '250 GSM to 450 GSM Virgin Kraft',
      ectStrength: '90 to 150+ lbs/in',
      loadCapacity: '500 kg to 2,000 kg dynamic cargo load',
      printing: 'Industrial Stencil & Flexo Branding'
    },
    applications: [
      'Heavy machinery & engine block shipment',
      'Bulk chemical & resin containerization',
      'Military & aerospace component logistics',
      'International maritime shipping'
    ],
    benefits: [
      'Saves up to 60% tare weight compared to wooden crates',
      'Lower air freight fuel costs',
      'Safe collapsible return logistics'
    ],
    industriesServed: ['Automobile', 'Textile Industry', 'Agriculture']
  },
  {
    id: 'prod-3',
    slug: 'printed-packaging',
    title: 'High-Graphic Printed Cartons',
    category: 'Printed Packaging',
    shortDesc: 'Vibrant multicolor lithography and high-speed flexo printed boxes that elevate retail shelf presence.',
    fullDesc: 'Transform your shipping cartons into powerful brand ambassadors. Combining offset litho-lamination and direct flexo printing, our cartons deliver razor-sharp imagery, accurate Pantone color matching, and luxury UV spot gloss finishes.',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Up to 7-color litho-lamination with aqueous coating',
      'Anti-scratch matte and high-gloss finishes',
      'Precision die-cut windows and handles',
      'Barcodes and QR codes verified to ISO/IEC 15416 standards'
    ],
    specs: {
      ply: '3-Ply / E-Flute / F-Flute Micro',
      fluteType: 'E, F, N Micro-Flutes',
      gsmRange: '180 GSM White Top + Kraft Backing',
      ectStrength: '32 to 55 lbs/in',
      loadCapacity: '5 kg to 35 kg retail display weight',
      printing: '7-Color Offset Litho / High-Def Flexo'
    },
    applications: [
      'Premium electronics retail display boxes',
      'Gourmet food & beverage master packs',
      'Direct-to-consumer luxury e-commerce unboxing',
      'Cosmetics and wellness kits'
    ],
    benefits: [
      'Maximizes brand impact and unboxing joy',
      'Eliminates separate retail overpackaging',
      'Recyclable water-based inks and coatings'
    ],
    industriesServed: ['FMCG', 'E-Commerce', 'Food Industry']
  },
  {
    id: 'prod-4',
    slug: 'duplex-boxes',
    title: 'Duplex Board & Folding Cartons',
    category: 'Duplex Boxes',
    shortDesc: 'Rigid coated duplex boxes engineered for pharmaceuticals, cosmetics, and fast-moving consumer items.',
    fullDesc: 'Crafted from premium white-back and grey-back duplex boards, our folding cartons offer pristine fold lines, automatic lock-bottom structures, and tamper-evident sealing capabilities.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Accurate auto-lock bottoms for high-speed automated packaging lines',
      'Embossing, debossing, and metallic foil stamping',
      'Food-grade odor-free barrier coatings',
      'Braille printing enabled for pharmaceutical compliance'
    ],
    specs: {
      ply: 'Single Layer Duplex Board / Laminated',
      fluteType: 'Rigid Coated Board',
      gsmRange: '300 GSM to 550 GSM Duplex',
      ectStrength: 'High stiffness index',
      loadCapacity: '100g to 5 kg unit packaging',
      printing: 'Full Color Offset + UV Lacquer'
    },
    applications: [
      'Pharmaceutical blister pack secondary boxes',
      'Apparel and textile gift packaging',
      'Confectionery and bakery folding packs'
    ],
    benefits: [
      'Cost-effective high volume output',
      'Compatible with 200+ units/min packaging machines',
      'Highly aesthetic shelf appeal'
    ],
    industriesServed: ['Pharmaceutical', 'FMCG', 'Textile Industry']
  },
  {
    id: 'prod-5',
    slug: 'shipping-cartons',
    title: 'Master Shipping & Logistics Cartons',
    category: 'Shipping Cartons',
    shortDesc: 'Standardized and custom RSC (Regular Slotted Container) shippers designed to survive global multi-modal supply chains.',
    fullDesc: 'Our Master Shipping Cartons are the workhorse of global trade. Optimized for standardized pallet footprints (ISO/Euro pallets), these boxes minimize dead air space in shipping containers while maximizing top-to-bottom compression resistance.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Regular Slotted Container (RSC) and Half Slotted Container (HSC) styles',
      'Reinforced hand-holes and ventilation slots',
      'High-adhesion flap surfaces for rapid tape sealing',
      'Custom dimensions to achieve 100% pallet utilization'
    ],
    specs: {
      ply: '5-Ply Double Wall Standard',
      fluteType: 'BC / EB Flute Combinations',
      gsmRange: '150 GSM to 280 GSM',
      ectStrength: '48 to 71 lbs/in',
      loadCapacity: '20 kg to 80 kg per shipper',
      printing: '1-2 Color Shipping & Handling Icons'
    },
    applications: [
      'E-commerce consolidation master shipping',
      'Apparel bulk carton exports',
      'Agricultural produce cold-chain transport'
    ],
    benefits: [
      'Lower cubic shipping volume costs',
      'Zero bursting during conveyor sorting',
      'Stackable up to 5 tiers high safely'
    ],
    industriesServed: ['E-Commerce', 'Textile Industry', 'Agriculture', 'FMCG']
  },
  {
    id: 'prod-6',
    slug: 'export-packaging',
    title: 'Seaworthy Export Corrugated Packaging',
    category: 'Export Packaging',
    shortDesc: 'Moisture-proof, heavy-duty shipping solutions formulated specifically for long oceanic container freight.',
    fullDesc: 'Ocean container shipping subjects packaging to drastic temperature fluctuations and container rain. Our Seaworthy Export Boxes feature specialized hydrophobic liners and reinforced corners that maintain structural integrity during 40+ days at sea.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Water-resistant starch adhesive bond (WPA)',
      'High Cobb resistance (<30 g/m² water absorption)',
      'Corner post inserts for extreme vertical stacking load',
      'Compliant with international customs and transit norms'
    ],
    specs: {
      ply: '5-Ply / 7-Ply Export Spec',
      fluteType: 'BC / AAC Flutes',
      gsmRange: '200 to 350 GSM Virgin Kraft',
      ectStrength: '65 to 110 lbs/in',
      loadCapacity: '50 kg to 250 kg export cargo',
      printing: 'Export Marking & Handling Symbols'
    },
    applications: [
      'Yarn and fabric cone international export',
      'Spices, tea, and dry agri-commodity export',
      'Machinery spares global air/sea distribution'
    ],
    benefits: [
      'Eliminates transit moisture collapse',
      'Protects high-value cargo across continents',
      'Fast customs clearance compliance'
    ],
    industriesServed: ['Textile Industry', 'Agriculture', 'Automotive']
  },
  {
    id: 'prod-7',
    slug: 'industrial-packaging',
    title: 'Custom Industrial Inner Fitments & Partitions',
    category: 'Industrial Packaging',
    shortDesc: 'Die-cut corrugated partitions, honeycombs, and cushioning separators that protect fragile industrial parts.',
    fullDesc: 'Internal protection is just as critical as the outer shell. We design intricate corrugated partitions, die-cut foam-laminated fitments, and honeycomb core buffers that cradle gears, glass components, and sensitive PCB assemblies.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'CAD-designed interlocking corrugated grids',
      'Anti-static and non-abrasive surface liners',
      'Shock-absorbing honeycomb structural buffers',
      'Zero movement tolerance custom engineering'
    ],
    specs: {
      ply: '3-Ply / 5-Ply / Honeycomb Core',
      fluteType: 'B, E Flute & Honeycomb Matrix',
      gsmRange: '120 GSM to 250 GSM',
      ectStrength: 'Custom engineered cushioning',
      loadCapacity: 'Precision part immobilization',
      printing: 'Part identification number stamping'
    },
    applications: [
      'Automotive headlight and glass mirror protection',
      'Bottle and glassware multi-pack separators',
      'Industrial motor and valve suspension'
    ],
    benefits: [
      'Prevents component-to-component scratching',
      'Replaces non-biodegradable thermocol/EPS foam',
      'Easy assembly on packing lines'
    ],
    industriesServed: ['Automobile', 'Electronics', 'Food Industry']
  },
  {
    id: 'prod-8',
    slug: 'custom-packaging',
    title: 'Bespoke Engineered Custom Solutions',
    category: 'Custom Packaging Solutions',
    shortDesc: 'Tailor-made packaging architectures developed collaboratively with our packaging engineers for unique product geometries.',
    fullDesc: 'Have an oversized, irregularly shaped, or delicate high-value product? Our engineering team utilizes 3D CAD modeling, drop simulation software, and sample prototyping tables to construct bespoke packaging tailored strictly to your supply chain challenges.',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Free structural prototyping within 48 hours',
      'ISTA transit simulation drop and vibration testing',
      'Integrated handles, tear strips, and easy-open perforations',
      'End-to-end total cost of ownership reduction optimization'
    ],
    specs: {
      ply: 'Custom 3, 5, 7, or 9-Ply Combinations',
      fluteType: 'Tailored Hybrid Fluting',
      gsmRange: 'Configured to specific weight targets',
      ectStrength: 'Engineered to exact safety factors',
      loadCapacity: 'Unlimited tailored specifications',
      printing: 'Full custom branding and QR serials'
    },
    applications: [
      'Specialized medical equipment transit',
      'Promotional retail point-of-purchase (POP) displays',
      'Renewable energy solar panel housing'
    ],
    benefits: [
      'Guaranteed fit and complete cargo safety',
      'Saves labor costs with fast-folding designs',
      'Elevates brand reputation for innovation'
    ],
    industriesServed: ['FMCG', 'Electronics', 'Automobile', 'Pharmaceutical']
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'ind-1',
    slug: 'fmcg',
    name: 'FMCG & Fast-Moving Consumer Goods',
    iconName: 'ShoppingBag',
    description: 'High-speed automated box assembly solutions that protect consumer goods from warehouse stacking to retail aisle display.',
    keyRequirements: [
      'High-speed auto-erector machine compatibility',
      'High stacking strength for palletized warehouses',
      'Attractive retail shelf-ready packaging (SRP) perforation'
    ],
    recommendedProducts: ['Corrugated Boxes', 'High-Graphic Printed Cartons', 'Master Shipping Cartons'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ind-2',
    slug: 'pharmaceutical',
    name: 'Pharmaceutical & Healthcare',
    iconName: 'Activity',
    description: 'Hygienic, tamper-evident, and odor-free corrugated packaging strictly complying with international healthcare logistics norms.',
    keyRequirements: [
      '100% virgin paper odor-free barrier materials',
      'Batch barcode tracking and serialization printing',
      'High insulation value against ambient temperature shifts'
    ],
    recommendedProducts: ['Duplex Board Cartons', 'Precision Corrugated Boxes', 'Custom Inner Partitions'],
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ind-3',
    slug: 'electronics',
    name: 'Consumer Electronics & Hardware',
    iconName: 'Cpu',
    description: 'Anti-static (ESD) and shock-absorbing corrugated boxes that shield sensitive circuits and screens from transit drop impact.',
    keyRequirements: [
      'Vibration damping and ISTA drop test compliance',
      'Anti-static inner surface liners',
      'High-definition unboxing aesthetic experience'
    ],
    recommendedProducts: ['High-Graphic Printed Cartons', 'Custom Industrial Partitions', 'Precision Corrugated Boxes'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ind-4',
    slug: 'automobile',
    name: 'Automobile & Heavy Spares',
    iconName: 'Truck',
    description: 'Heavy-duty multi-wall corrugated containers engineered to carry metallic engine parts, axles, and automotive electronics safely.',
    keyRequirements: [
      'Extreme compression resistance (>1500 kg static stacking)',
      'Oil and grease resistant inner liners',
      'Custom interlocking die-cut separators'
    ],
    recommendedProducts: ['Heavy-Duty Industrial Pallet Boxes', 'Seaworthy Export Packaging', 'Industrial Inner Fitments'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ind-5',
    slug: 'textile-industry',
    name: 'Textile & Apparel Manufacturing',
    iconName: 'Layers',
    description: 'Specialized yarn cone boxes, garment export cartons, and fabric bolt containers protecting garments against dust and moisture.',
    keyRequirements: [
      'Moisture-proof Cobb tested liners preventing mold',
      'High volumetric capacity for lightweight bulk textiles',
      'Reinforced corners to survive oceanic container stacking'
    ],
    recommendedProducts: ['Seaworthy Export Packaging', 'Master Shipping Cartons', 'Heavy-Duty Bulk Boxes'],
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ind-6',
    slug: 'agriculture',
    name: 'Agriculture & Fresh Produce',
    iconName: 'Sprout',
    description: 'Ventilated, cold-storage compliant boxes engineered to keep fresh fruit, vegetables, and agro-exports crisp and ventilated.',
    keyRequirements: [
      'Die-cut ventilation slots for air circulation',
      'High wet-strength wax-alternative waterproofing',
      'Food-contact safe vegetable ink printing'
    ],
    recommendedProducts: ['Master Shipping Cartons', 'Seaworthy Export Packaging', 'Precision Corrugated Boxes'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ind-7',
    slug: 'e-commerce',
    name: 'E-Commerce & Retail Distribution',
    iconName: 'Box',
    description: 'Fast-folding mailers, tamper-evident self-sealing boxes, and returnable shippers designed for modern online fulfillment speed.',
    keyRequirements: [
      'Integrated peel-and-seal adhesive strips and tear tapes',
      'Lightweight construction to minimize courier shipping fees',
      'Impact resistant during multi-hub sorting conveyors'
    ],
    recommendedProducts: ['Printed Packaging', 'Master Shipping Cartons', 'Bespoke Custom Solutions'],
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ind-8',
    slug: 'food-industry',
    name: 'Processed Food & Beverages',
    iconName: 'Coffee',
    description: 'FSC-certified food-grade corrugated master cartons and display boxes formulated with odorless adhesives for absolute food safety.',
    keyRequirements: [
      'FDA & FSSAI compliant non-toxic raw paper pulp',
      'High burst strength for heavy liquid glass/can packs',
      'Automated case packer machine speed precision'
    ],
    recommendedProducts: ['Printed Cartons', 'Precision Corrugated Boxes', 'Custom Inner Partitions'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  }
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Rajeshwar Mehta',
    author: 'Rajeshwar Mehta',
    company: 'Mehta Pharmaceuticals Ltd, Ahmedabad',
    designation: 'VP Supply Chain',
    role: 'VP Supply Chain',
    industry: 'Pharmaceutical',
    rating: 5,
    comment: 'Apex Corrugated Solutions transformed our cold-chain packaging. Their 5-ply virgin Kraft shippers reduced our transit damage across pan-India distribution from 3.2% down to virtually 0%. Truly world-class industrial standards!',
    date: '15 June 2026',
    status: 'approved',
    approved: true,
    featured: true
  },
  {
    id: 'rev-2',
    name: 'Vikramaditya Desai',
    author: 'Vikramaditya Desai',
    company: 'Texco Global Exports, Surat',
    designation: 'Managing Director',
    role: 'Managing Director',
    industry: 'Textile Industry',
    rating: 5,
    comment: 'We ship over 40 container loads of yarn cones to Europe monthly. Apex seaworthy export boxes survive 45 days in oceanic container humidity without losing stacking rigidity. Exceptional delivery punctuality!',
    date: '02 June 2026',
    status: 'approved',
    approved: true,
    featured: true
  },
  {
    id: 'rev-3',
    name: 'Ananya Sharma',
    author: 'Ananya Sharma',
    company: 'Zensar Consumer Electronics, Pune',
    designation: 'Head of Procurement',
    role: 'Head of Procurement',
    industry: 'Electronics',
    rating: 5,
    comment: 'Their engineering team designed custom 7-ply die-cut cushions for our LED displays within 48 hours. The high-graphic flexo printing quality rivals Apple unboxing standards. Best B2B packaging vendor in Gujarat!',
    date: '28 May 2026',
    status: 'approved',
    approved: true,
    featured: true
  },
  {
    id: 'rev-4',
    name: 'Ketan Patel',
    author: 'Ketan Patel',
    company: 'AgroFresh International, Vadodara',
    designation: 'Logistics Director',
    role: 'Logistics Director',
    industry: 'Agriculture',
    rating: 5,
    comment: 'Our ventilated fruit export boxes needed high Cobb resistance. Apex engineered a water-resistant box that kept our mango exports perfectly intact during air freight to the Middle East.',
    date: '10 May 2026',
    status: 'approved',
    approved: true,
    featured: false
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'future-of-sustainable-corrugated-packaging-2026',
    title: 'The Future of Sustainable Corrugated Packaging in Industrial B2B Supply Chains',
    category: 'Sustainable Packaging',
    excerpt: 'Explore how virgin Kraft fibers, water-based biodegradable adhesives, and FSC-certified closed-loop recycling are reshaping global logistics.',
    content: `Modern industrial manufacturing is undergoing a profound green transformation. With carbon border adjustment mechanisms (CBAM) and strict European ESG regulations taking full effect in 2026, B2B exporters can no longer rely on single-use plastics or uncertified timber crates.
    
Corrugated paper packaging stands at the apex of circular economy innovation. By utilizing high-yield virgin Kraft top liners combined with 100% recycled interior fluting, Apex Corrugated Solutions achieves an optimal carbon footprint without sacrificing structural Edge Crush Test (ECT) ratings. Furthermore, our adoption of modified starch adhesives and water-based inks ensures that 100% of our boxes can be repulped within 14 days of disposal.`,
    date: '24 June 2026',
    author: 'Dr. Siddharth Rao, Chief Packaging Engineer',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-2',
    slug: 'ect-vs-bursting-strength-test-guide',
    title: 'Edge Crush Test (ECT) vs. Bursting Strength (BST): The Ultimate Engineer’s Guide',
    category: 'Packaging Technology',
    excerpt: 'Understanding the mechanics behind box stacking strength and why ECT is the definitive metric for modern palletized automated warehouses.',
    content: `For decades, packaging engineers relied on the Mullen Bursting Strength Test (BST) to specify box toughness. While BST measures how much hydrostatic pressure paper can endure before puncturing, modern logistics rarely fail from side puncture—they fail from vertical stacking collapse in high-bay automated warehouses.
    
This is why Edge Crush Test (ECT) is the critical benchmark. ECT directly measures the edgewise compressive strength of a corrugated board (in lbs/in or kN/m). By applying the McKee formula, engineers can predict exact pallet stacking height tolerances under varying relative humidity levels. At Apex, every production batch undergoes computerized ECT testing to ensure zero container deflection.`,
    date: '18 June 2026',
    author: 'Eng. Pranav Patel, QA Director',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-3',
    slug: 'replacing-wooden-crates-with-heavy-duty-corrugated',
    title: 'Replacing Wooden Crates with 7-Ply Heavy-Duty Corrugated Boxes for Export',
    category: 'Export Packaging',
    excerpt: 'Discover how industrial exporters save 50% in freight weight and bypass ISPM-15 fumigation delays by switching to triple-wall corrugated containers.',
    content: `Traditional wooden crates have long plagued heavy machinery exporters with hidden costs: expensive timber heat-treatment certificates (ISPM-15), splinters damaging equipment, and massive dead tare weight inflating air and ocean freight charges.
    
Triple-wall 7-Ply and 9-Ply heavy-duty corrugated containers offer superior energy absorption and static load capacities exceeding 1,500 kg. Designed with water-resistant liners, these containers can be assembled by a single operator in under 60 seconds, drastically reducing factory floor labor and packing cycle times.`,
    date: '05 June 2026',
    author: 'Amitabh Verma, Head of Export Solutions',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQS = [
  {
    category: 'Ordering & Customization',
    question: 'What is the Minimum Order Quantity (MOQ) for custom corrugated boxes?',
    answer: 'For custom dimensions and printed corrugated boxes, our standard MOQ is 1,000 to 2,500 units depending on box dimensions and ply requirements. For standardized shipping cartons in our warehouse inventory, orders can start from 500 units.'
  },
  {
    category: 'Ordering & Customization',
    question: 'Can you develop custom die-cut inner partitions and foam fitments?',
    answer: 'Yes! Our CAD structural engineering department designs custom interlocking corrugated partitions, honeycomb buffers, and anti-static fitments tailored strictly to your product 3D profile.'
  },
  {
    category: 'Technical & Quality',
    question: 'How do you guarantee moisture resistance during 40-day oceanic export shipping?',
    answer: 'We manufacture our seaworthy export boxes using virgin Kraft top liners with Cobb values below 30 g/m² combined with water-resistant fortified starch adhesives (WPA). This prevents delamination even under 90% relative humidity inside sea containers.'
  },
  {
    category: 'Technical & Quality',
    question: 'What quality testing reports do you provide with shipments?',
    answer: 'Every commercial dispatch comes with a certified Quality Certificate detailing actual batch lab results: Edge Crush Test (ECT), Bursting Strength (BST), Box Compression Test (BCT), Cobb moisture absorption, and GSM verification.'
  },
  {
    category: 'Shipping & Logistics',
    question: 'What are your standard manufacturing lead times?',
    answer: 'Custom sample prototyping takes 48 hours. Standard commercial production runs are completed and dispatched within 5 to 7 working days from final artwork approval.'
  },
  {
    category: 'Shipping & Logistics',
    question: 'Do you deliver across India and internationally?',
    answer: 'Yes, our automated plant in Gujarat is strategically located near major industrial corridors and ports (Mundra / Nhava Sheva). We supply pan-India via our dedicated fleet and export globally.'
  }
];

export const FAQ_ITEMS = FAQS.map((item, index) => ({
  id: String(index + 1),
  category: item.category,
  question: item.question,
  answer: item.answer
}));

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  url?: string;
  specs: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'High-Speed Automated 5-Ply Corrugator Line',
    category: 'Manufacturing Plant',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    specs: 'Production speed: 200m/min • Width: 2.2 meters'
  },
  {
    id: 'gal-2',
    title: 'Precision Rotary Die-Cutting & Slotting Unit',
    category: 'Machinery',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    specs: 'Tolerance: ±0.5mm • Capacity: 12,000 sheets/hour'
  },
  {
    id: 'gal-3',
    title: 'Computerized Box Compression Test (BCT) Chamber',
    category: 'Quality Testing',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    specs: 'Load capacity: 5,000 kg • ISO 12048 compliant'
  },
  {
    id: 'gal-4',
    title: 'Heavy-Duty 7-Ply Pallet Shippers Ready for Dispatch',
    category: 'Finished Products',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    specs: 'Static stacking load: 1,800 kg • ISPM-15 exempt'
  },
  {
    id: 'gal-5',
    title: '4-Color High-Definition Flexography Printing Machine',
    category: 'Machinery',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80',
    url: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80',
    specs: 'Inline drying • Anilox roller screen: 350 LPI'
  },
  {
    id: 'gal-6',
    title: 'Automated Folder Gluer & Stitching Station',
    category: 'Manufacturing Plant',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80',
    url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80',
    specs: 'Dual-head copper wire stitching & cold glue fusion'
  }
];

