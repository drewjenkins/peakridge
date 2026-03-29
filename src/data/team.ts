export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  yearsExperience: number
  certifications: string[]
  imageUrl: string
  initials: string
}

export const team: TeamMember[] = [
  {
    id: 'rick-harmon',
    name: 'Rick Harmon',
    role: 'Founder & Master Contractor',
    bio: 'Rick founded Peak Ridge in 1998 after 10 years as a journeyman carpenter in Denver. Born and raised in Castle Rock, he built the company on one principle: do the job right the first time. Rick holds every major contractor license in Colorado and personally reviews every project proposal.',
    yearsExperience: 36,
    certifications: ['Colorado Class A General Contractor', 'OSHA 30', 'EPA Lead-Safe Certified', 'Master Carpenter'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    initials: 'RH',
  },
  {
    id: 'donna-harmon',
    name: 'Donna Harmon',
    role: 'Operations Director',
    bio: 'Donna joined Peak Ridge full-time in 2005 after a decade in commercial construction project management. She runs the office, manages client relationships, and coordinates every project schedule. Her obsession with communication means no homeowner is ever left wondering what comes next.',
    yearsExperience: 19,
    certifications: ['PMP Certified', 'QuickBooks ProAdvisor', 'OSHA 10'],
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    initials: 'DH',
  },
  {
    id: 'carlos-mendez',
    name: 'Carlos Mendez',
    role: 'Lead Carpenter & Estimator',
    bio: 'Carlos has been with Peak Ridge since 2008 and is responsible for every kitchen and bathroom finish that leaves clients speechless. His precision on custom cabinetry and tile work is unmatched in the South Metro area. He also produces all project estimates with zero hidden line items.',
    yearsExperience: 22,
    certifications: ['Certified Kitchen & Bath Remodeler (NKBA)', 'OSHA 10', 'EPA Lead-Safe Certified'],
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    initials: 'CM',
  },
  {
    id: 'jake-purcell',
    name: 'Jake Purcell',
    role: 'Site Supervisor',
    bio: 'Jake runs day-to-day operations on every job site, coordinating crews, managing material deliveries, and making sure the work matches the plan. His background in structural framing and his instinct for spotting problems before they become expensive have saved countless projects.',
    yearsExperience: 14,
    certifications: ['Colorado Journeyman Carpenter', 'OSHA 30', 'Fall Protection Certified'],
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    initials: 'JP',
  },
]
