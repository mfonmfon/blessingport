import { motion } from 'framer-motion';
import { Award, Users, Heart, Camera, Palette } from 'lucide-react';
import BlessingAboutPicture from '../../assets/images/BlessingAboutPics.jpg'

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
                  I’m a Fashion Stylist and the Creative Director / Founder of YouStyling. I have a strong foundation in Bridal Styling ,Wadrobe Management, Brand Styling , Weekly Outfit planning and Moodboard curation. 
                  I also work closely with Fashion Designers to create and design timeless pieces. 
                  I’m dedicated to crafting compelling looks that elevates each client’s personal uniqueness.
                  I am Blessing Bello.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900">4+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl font-bold text-gray-900">12+</div>
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
                  src={BlessingAboutPicture}
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
                <p className="text-gray-600 text-sm">- Blessing Bello</p>
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
                Fashion has always been a part of me. Growing up, I didn’t just play dress-up, I lived it. I loved experimenting with outfits, mixing colors, and seeing how a simple change in style could transform how someone looked and felt. What began as childhood fun slowly became a passion that has shaped my journey today.

              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                My love for style pushed me to learn and do more research. I studied trends, observed details, and practiced on myself and those around me. Over time, I realized styling was more than just putting clothes together — it was about telling stories, building confidence, and helping people see the best version of themselves.

              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Now, as a fashion stylist, I create looks for special moments from bridal styling and milestone events. For me, it’s not only about the clothes, but the person wearing them. Every outfit I curate is designed to reflect personality, celebrate individuality, and bring out inner confidence.

              </p>
              <p className='text-lg text-gray-600 leading-relaxed mt-8'>
                My journey is proof that you don’t always need formal training to pursue your dreams. Passion, creativity, and a genuine love for what you do can take you far. And with each client I style, I’m reminded that fashion is not just about appearance, but about expression, confidence, and joy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      {/* <section className="py-20 bg-black text-white">
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
      </section> */}
    </div>
  );
};

export default About;