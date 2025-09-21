import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Star, Heart, Camera, Palette } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Palette, title: 'Personal Styling', description: 'Creating unique looks that reflect individual personality' },
    { icon: Camera, title: 'Editorial Shoots', description: 'Fashion photography and magazine styling expertise' },
    { icon: Users, title: 'Brand Consulting', description: 'Strategic fashion direction for luxury brands' },
    { icon: Heart, title: 'Wardrobe Curation', description: 'Building cohesive and versatile wardrobes' }
  ];

  const achievements = [
    'Top Wedding Stylist 2024',
    'Bridal Magazine Featured Artist',
    'Cultural Wedding Specialist',
    'Fashion Week Bridal Stylist'
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full tracking-wide">
                  ABOUT ME
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Passion Meets
                  <span className="block text-amber-500">Precision</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  With over 8 years of experience in the fashion industry, I've dedicated my career to 
                  helping individuals and brands discover their unique style identity. From intimate 
                  personal sessions to high-profile editorial shoots, every project is approached with 
                  meticulous attention to detail and creative vision.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900">8+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                  alt="Sophia Fashion Stylist"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-sm"
              >
                <p className="text-gray-900 font-medium mb-2">
                  "Style is a way to say who you are without having to speak."
                </p>
                <p className="text-gray-600 text-sm">- Sophia Martinez</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Expertise & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive styling services tailored to meet diverse fashion needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <skill.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{skill.title}</h3>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              My Journey
            </h2>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                My passion for fashion began in childhood, watching my grandmother carefully select 
                fabrics and create beautiful garments. This early exposure to the artistry of fashion 
                instilled in me a deep appreciation for the transformative power of clothing.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                After graduating from Parsons School of Design, I started my career working alongside 
                renowned stylists in New York. These formative years taught me that great styling goes 
                beyond following trends – it's about understanding the individual and creating looks 
                that authentically represent their personality and goals.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, I work with a diverse clientele ranging from celebrities and executives to 
                everyday individuals seeking to elevate their personal style. Each project is a 
                collaborative journey of discovery, where we uncover and express the unique beauty 
                that already exists within.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Recognition & Awards
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Honored to be recognized by industry leaders and publications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 border border-gray-800 rounded-xl hover:border-amber-500 transition-colors duration-300"
              >
                <Award className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h3 className="font-medium text-lg">{achievement}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;