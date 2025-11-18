import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Briefcase, Code, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code is my priority',
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'Finding innovative approaches to complex problems',
    },
    {
      icon: Briefcase,
      title: 'Professional',
      description: 'Dedicated to delivering quality work on time',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
            About Me
          </h1>

          <div className="bg-card rounded-2xl shadow-green-lg p-8 md:p-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Hello! I'm <span className="font-semibold text-primary">Kyran Natalie Runtukahu</span>, 
                a passionate Frontend Developer and Designer dedicated to crafting exceptional digital experiences. 
                With a strong foundation in modern web technologies and a keen eye for design, I transform ideas 
                into beautiful, functional, and user-friendly applications.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                My journey in web development has been driven by curiosity and a commitment to continuous learning. 
                I thrive in creating solutions that not only meet technical requirements but also delight users 
                through intuitive interfaces and seamless interactions.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-8">
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, 
                or sharing knowledge with the developer community. I believe in the power of collaboration and 
                the importance of building products that make a positive impact.
              </p>

              <div className="flex justify-center">
                <Button variant="hero" size="lg">
                  Hire Me
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-card rounded-xl shadow-green p-6 hover:shadow-green-lg transition-all duration-300 hover:scale-105"
              >
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <item.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-primary text-center mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
