import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('http://localhost:3001/skills');
        setSkills(response.data);
      } catch (error) {
        console.error('Error fetching skills data:', error);

        // Fallback data
        setSkills([
          { id: 1, name: 'React.js', level: 90, category: 'Frontend' },
          { id: 2, name: 'TypeScript', level: 85, category: 'Frontend' },
          { id: 3, name: 'TailwindCSS', level: 95, category: 'Frontend' },
          { id: 4, name: 'JavaScript', level: 90, category: 'Frontend' },
          { id: 5, name: 'HTML/CSS', level: 95, category: 'Frontend' },
          { id: 6, name: 'Node.js', level: 75, category: 'Backend' },
          { id: 7, name: 'Git', level: 85, category: 'Tools' },
          { id: 8, name: 'Figma', level: 80, category: 'Design' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

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
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Skills & Expertise
            </h1>
            <p className="text-lg text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-card rounded-2xl shadow-green p-6 md:p-8"
              >
                <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                  <span className="w-2 h-8 bg-primary rounded-full mr-3" />
                  {category}
                </h2>

                <div className="space-y-6">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + index * 0.05,
                      }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + index * 0.05 + 0.3,
                          }}
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
