import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await axios.get('http://localhost:3001/education');
        setEducation(response.data);
      } catch (error) {
        console.error('Error fetching education data:', error);

        // fallback data
        setEducation([
          {
            id: 1,
            institution: 'Universitas Klabat',
            degree: 'Informatics',
            field: 'Computer Science',
            year: '2023 - Present',
            description: 'Pursuing a degree in Informatics with a focus on software development',
          },
          {
            id: 2,
            institution: 'SMA 1 Manado',
            degree: 'Science Major',
            field: 'Science Track',
            year: '2020 - 2023',
            description: 'Active student in Science major and School events',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
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
              Education
            </h1>
            <p className="text-lg text-muted-foreground">
              My academic journey and qualifications
            </p>
          </div>

          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 10px 40px 0 hsl(var(--shadow-green-lg))',
                }}
                className="bg-card rounded-xl shadow-green p-6 md:p-8 hover:shadow-green-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 shrink-0">
                    <GraduationCap className="text-primary" size={28} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold text-primary mb-1 md:mb-0">
                        {item.institution}
                      </h3>
                      <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full w-fit">
                        {item.year}
                      </span>
                    </div>

                    <p className="text-lg font-semibold text-foreground mb-1">
                      {item.degree}
                    </p>

                    <p className="text-muted-foreground mb-3">
                      {item.field}
                    </p>

                    {item.description && (
                      <p className="text-sm text-muted-foreground italic">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
