import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { teamMembers, TeamMember } from '../data/team';

const About = () => {
  useEffect(() => {
    // Update page title
    document.title = 'About Us | Elite8 Digital';
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-neutral-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="mb-6">About Us</h1>
            <p className="text-xl text-neutral-300 max-w-xl">
              We're a team of creative professionals passionate about design and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <Section>
  <div className="container-custom">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle 
          subtitle="Our Story"
          title="Elite 8 — Driven by Purpose, United by Innovation"
        />
        
        <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
          We’re not your typical team. We are the Elite 8 — a tight-knit group of innovators, problem-solvers, and creative minds brought together by a shared vision: to redefine what's possible in digital experiences.
        </p>
        
        <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
          Each of us brings a unique strength — from cutting-edge design and frontend finesse to backend architecture and strategic insight. Together, we’re more than the sum of our parts, working seamlessly to deliver solutions that are not just effective, but unforgettable.
        </p>
        
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          Our journey isn’t measured by years — it’s defined by milestones, partnerships, and the impact we've made. We're proud to be a small team making a big difference, and we’re just getting started.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <img 
          src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Our team" 
          className="rounded-xl"
        />
        
        <div className="absolute top-0 -left-4 bg-primary text-black p-6 rounded-xl max-w-[200px]">
          <p className="font-semibold">Elite 8. One Vision. Infinite Possibilities.</p>
        </div>
      </motion.div>
    </div>
  </div>
</Section>


      {/* Values Section */}
      <Section className="bg-neutral-50 dark:bg-neutral-800">
  <div className="container-custom text-center">
    <SectionTitle 
      subtitle="Elite 8 DNA"
      title="What Drives Us Forward"
      centered
    />
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: 'Visionary Thinking',
          description: 'We anticipate the future and act with purpose. Every challenge is an opportunity to redefine the possible.',
          icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.5 12H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          )
        },
        {
          title: 'Agility',
          description: 'We adapt fast, build faster. Agility isn’t a strategy—it’s in our bloodstream.',
          icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4L20 20M4 20L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        },
        {
          title: 'Leadership',
          description: 'We lead with intent. From ideas to execution, each step is driven by ownership and initiative.',
          icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8H9L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        },
        {
          title: 'Impact',
          description: 'We build to leave a mark. Every product, every interaction, every line of code matters.',
          icon: (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3L20 21H4L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )
        }
      ].map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center p-6 rounded-xl bg-white dark:bg-neutral-700 shadow-sm"
        >
          <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
            {value.icon}
          </div>
          <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
          <p className="text-neutral-600 dark:text-neutral-300">{value.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</Section>


      {/* Team Section */}
      <Section>
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Team"
            title="Meet the talented people behind our success"
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-white mb-4">Want to join our team?</h2>
              <p className="text-neutral-300">
                We're always looking for talented people to join our team. Check out our current openings or send us your portfolio.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="btn bg-white text-primary text-black hover:bg-white/90 whitespace-nowrap"
            >
              View Positions
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
};

// Team Member Card Component
const TeamMemberCard = ({ member, index }: { member: TeamMember, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-6">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Social links overlay */}
        <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            {member.socials.linkedin && (
              <a 
                href={member.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            )}
            {member.socials.twitter && (
              <a 
                href={member.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
              >
                <Twitter size={20} />
              </a>
            )}
            {member.socials.instagram && (
              <a 
                href={member.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
              >
                <Instagram size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
      <p className="text-primary mb-3">{member.role}</p>
      <p className="text-neutral-600 dark:text-neutral-400">{member.bio}</p>
    </motion.div>
  );
};

export default About;