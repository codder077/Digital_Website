export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 'aarav-singh',
    name: 'Aarav Singh',
    role: 'Founder & CEO',
    bio: 'Visionary behind Elite8 Digital, Aarav leads with strategic foresight and a passion for innovation. He blends entrepreneurship with a deep understanding of digital ecosystems.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/in/aaravsingh',
      twitter: 'https://twitter.com/aarav_ceo'
    }
  },
  {
    id: 'tanya-malhotra',
    name: 'Tanya Malhotra',
    role: 'Head of Design',
    bio: 'Tanya merges minimalism with emotional design. Her interfaces are user-centered, brand-aligned, and driven by storytelling principles.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/in/tanyamalhotra',
      instagram: 'https://instagram.com/tanyadesigns'
    }
  },
  {
    id: 'karan-mehta',
    name: 'Karan Mehta',
    role: 'Tech Lead',
    bio: 'Karan architected the backbone of our scalable infrastructure. He brings clarity to complex systems and thrives on cutting-edge front-end and backend technologies.',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/in/karanmehta',
      twitter: 'https://twitter.com/karan_tech'
    }
  },
  {
    id: 'shruti-dave',
    name: 'Shruti Dave',
    role: 'Brand & Content Head',
    bio: 'Shruti creates narratives that shape perception. From campaigns to microcopy, her words build trust, drive conversion, and define Elite8’s voice.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/in/shrutidave',
      instagram: 'https://instagram.com/shrutiwrites'
    }
  },
  {
    id: 'dev-raj',
    name: 'Dev Raj',
    role: 'Cloud Engineer',
    bio: 'Dev ensures that our solutions are stable, scalable, and secure. He specializes in AWS architecture, containerization, and robust DevOps workflows.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/in/devraj',
      twitter: 'https://twitter.com/dev_cloud'
    }
  },
  {
    id: 'riya-bansal',
    name: 'Riya Bansal',
    role: 'UX Researcher',
    bio: 'Riya bridges users and solutions. She applies qualitative and quantitative methods to refine user journeys and improve engagement.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/in/riyabansal',
      twitter: 'https://twitter.com/riya_research'
    }
  }
];


