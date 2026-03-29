export interface Testimonial {
  id: string
  name: string
  location: string
  quote: string
  rating: number
  projectType: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jennifer & Mark Caldwell',
    location: 'Castle Rock, CO',
    quote: 'Peak Ridge completely transformed our 1990s kitchen into something from a magazine. The project manager kept us updated every single day and the crew was respectful of our home. We\'ve already referred three neighbors.',
    rating: 5,
    projectType: 'Kitchen Remodel',
    initials: 'JC',
  },
  {
    id: '2',
    name: 'Thomas Reyes',
    location: 'Highlands Ranch, CO',
    quote: 'After the hailstorm last June, I got four quotes. Peak Ridge was the only crew that came out same-day, worked directly with my adjuster, and got the roof done in two days. Absolutely no headaches.',
    rating: 5,
    projectType: 'Roof Replacement',
    initials: 'TR',
  },
  {
    id: '3',
    name: 'Sarah Whitmore',
    location: 'Parker, CO',
    quote: 'Our finished basement adds 900 square feet of real living space. They installed an egress window, built a full bathroom, and handled every permit. We now have the home gym and guest suite we always wanted.',
    rating: 5,
    projectType: 'Basement Finishing',
    initials: 'SW',
  },
  {
    id: '4',
    name: 'Dan & Laura Okonkwo',
    location: 'Lone Tree, CO',
    quote: 'The composite deck Peak Ridge built for us has survived two Colorado winters without a single issue. The craftsmanship is exceptional — neighbors stop and ask about it regularly. Worth every penny.',
    rating: 5,
    projectType: 'Deck Build',
    initials: 'DO',
  },
  {
    id: '5',
    name: 'Patricia Nguyen',
    location: 'Centennial, CO',
    quote: 'I was nervous about a bathroom remodel after a bad experience with another contractor. The Peak Ridge team was the opposite — on time, honest about costs, and the end result is a spa-quality bathroom I love every morning.',
    rating: 5,
    projectType: 'Bathroom Renovation',
    initials: 'PN',
  },
  {
    id: '6',
    name: 'Mike Castellano',
    location: 'Littleton, CO',
    quote: 'We hired Peak Ridge to build a 600 sq ft addition for my mother-in-law. They coordinated the architect, engineer, and all the subs. Came in on budget and only two weeks behind a very aggressive schedule. Incredible work.',
    rating: 5,
    projectType: 'Home Addition',
    initials: 'MC',
  },
]
