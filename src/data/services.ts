export interface Service {
  id: string
  name: string
  description: string
  fullDescription: string
  icon: string
  startingPrice: string
  features: string[]
  imageUrl: string
}

export const services: Service[] = [
  {
    id: 'kitchen-remodeling',
    name: 'Kitchen Remodeling',
    description: 'Transform your kitchen into the heart of your home with custom cabinetry, countertops, and modern fixtures.',
    fullDescription: 'Your kitchen is the hub of daily life — and it deserves to look the part. Our kitchen remodeling team works with you from concept to completion, handling everything from cabinet installation and countertop fabrication to electrical and plumbing upgrades. We work with a curated network of suppliers to bring you high-quality materials at competitive prices, with no-surprise pricing and a dedicated project manager throughout.',
    icon: '🍳',
    startingPrice: '$12,000',
    features: ['Custom cabinetry & millwork', 'Granite, quartz & stone countertops', 'Tile backsplash installation', 'Kitchen island additions', 'Lighting & electrical upgrades', 'Plumbing fixture replacement'],
    imageUrl: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    id: 'bathroom-renovation',
    name: 'Bathroom Renovation',
    description: 'Spa-quality bathrooms built to your specifications — from walk-in showers to heated floors.',
    fullDescription: 'A well-designed bathroom adds daily comfort and serious resale value. Peak Ridge handles full bathroom renovations from rough-in to final tile — including walk-in showers, freestanding tubs, double vanities, and radiant heated floors. Our waterproofing standards exceed code requirements, and every tile is set by experienced craftsmen.',
    icon: '🚿',
    startingPrice: '$8,500',
    features: ['Walk-in showers & steam showers', 'Freestanding & soaking tubs', 'Heated tile floors', 'Custom vanities & storage', 'Full tile work & waterproofing', 'Exhaust fan & lighting upgrades'],
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
  },
  {
    id: 'deck-patio',
    name: 'Deck & Patio',
    description: 'Extend your living space outdoors with custom decks, patios, and pergolas built to last Colorado winters.',
    fullDescription: 'Colorado\'s seasons demand outdoor structures that can handle heavy snow loads, intense UV, and temperature swings. We design and build composite and pressure-treated decks, stamped concrete patios, natural stone hardscapes, and pergolas engineered for mountain climates. All structural work is permitted and inspected.',
    icon: '🏡',
    startingPrice: '$6,000',
    features: ['Composite & pressure-treated decks', 'Stamped concrete & pavers', 'Pergolas & shade structures', 'Built-in seating & planters', 'Outdoor lighting & electrical', 'Snow load engineering'],
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    id: 'basement-finishing',
    name: 'Basement Finishing',
    description: 'Turn unused square footage into a legal living space — home theater, gym, office, or in-law suite.',
    fullDescription: 'Colorado\'s basement climate is unique, and finishing a basement here requires experience with moisture management, egress requirements, and radon mitigation. Peak Ridge handles the full scope: framing, electrical, HVAC extension, insulation, drywall, flooring, and finish carpentry. We pull all required permits and coordinate every inspection.',
    icon: '🏗️',
    startingPrice: '$18,000',
    features: ['Egress window installation', 'Framing, insulation & drywall', 'Electrical panel upgrades', 'HVAC extension & zoning', 'Bathroom rough-in & finish', 'Radon mitigation systems'],
    imageUrl: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80',
  },
  {
    id: 'roof-repair',
    name: 'Roof Repair',
    description: 'From storm damage and missing shingles to full replacements — fast, reliable roofing with transferable warranties.',
    fullDescription: 'Colorado storms are no joke. Hail, heavy snow, and high winds put our roofs through more than most of the country. Peak Ridge is a certified installer for several major shingle brands and handles everything from minor repairs to complete tear-offs. We work with your insurance adjuster, document everything, and back all labor with a 5-year warranty.',
    icon: '🏠',
    startingPrice: '$800',
    features: ['Asphalt, metal & synthetic shingles', 'Hail & wind damage repair', 'Insurance claim assistance', 'Skylight installation & flashing', 'Gutter replacement & guards', '5-year labor warranty'],
    imageUrl: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=800&q=80',
  },
  {
    id: 'general-contracting',
    name: 'General Contracting',
    description: 'Full home additions, ADUs, garage builds, and whole-home renovations managed start to finish.',
    fullDescription: 'For projects that go beyond a single trade, Peak Ridge acts as your general contractor — managing architects, engineers, subcontractors, and inspections under one roof. Whether you\'re adding a bedroom, building a detached garage, or renovating a whole floor, we keep projects on schedule and on budget with weekly reporting and total transparency.',
    icon: '📐',
    startingPrice: 'Custom quote',
    features: ['Home additions & ADUs', 'Whole-home renovations', 'Garage & workshop builds', 'Architect & engineer coordination', 'Permit management', 'Weekly progress reporting'],
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
]
