import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  year: string;
  description: string;
}

const Experience = () => {
  const [experience, setExperience] = useState<ExperienceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await axios.get('http://localhost:3001/experience');
        setExperience(response.data);
      } catch (error) {
        console.error('Error fetching experience data:', error);
        // Fallback data
        setExperience([
          {
            id: 1,
            company: 'Tech Solutions Inc.',
            position: 'Frontend Developer',
            year: '2023 - Present',
            description: 'Leading frontend development projects using React, TypeScript, and modern web technologies. Collaborating with design and backend teams to create seamless user experiences.',
          },
          {
            id: 2,
            company: 'Digital Agency Co.',
            position: 'Junior Web Developer',
            year: '2022 - 2023',
            description: 'Developed responsive websites and web applications for various clients. Implemented pixel-perfect designs and ensured cross-browser compatibility.',
          },
          {
            id: 3,
            company: 'Startup Hub',
            position: 'Web Development Intern',
            year: '2021 - 2022',
            description: 'Assisted in building and maintaining web applications. Gained hands-on experience with HTML, CSS, JavaScript, and version control systems.',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Work Experience
            </h1>
            <p className="text-lg text-muted-foreground">
              My professional journey and accomplishments
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 ring-4 ring-background" />

                  {/* Content card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, boxShadow: '0 10px 40px 0 hsl(var(--shadow-green-lg))' }}
                      className="bg-card rounded-xl shadow-green p-6 hover:shadow-green-lg transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="bg-primary/10 rounded-lg p-2">
                          <Briefcase className="text-primary" size={24} />
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                          <Calendar size={14} />
                          {item.year}
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-primary mb-1">
                        {item.position}
                      </h3>

                      <p className="text-lg font-semibold text-foreground mb-3">
                        {item.company}
                      </p>

                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
