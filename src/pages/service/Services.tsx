import React from 'react';
import { motion } from 'framer-motion';
import { User, Camera, Building2, Heart, Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: User,
      title: 'Personal Styling',
      description: 'One-on-one styling sessions to discover and develop your unique personal style',
      features: ['Style assessment', 'Wardrobe audit', 'Shopping consultation', 'Styling session'],
      price: 'From $500',
      duration: '3-4 hours',
      popular: false
    },
    {
      icon: Camera,
      title: 'Editorial & Shoots',
      description: 'Professional styling for photoshoots, campaigns, and editorial content',
      features: ['Creative direction', 'Wardrobe coordination', 'On-set styling', 'Post-production consultation'],
      price: 'From $1,200',
      duration: 'Full day',
      popular: true
    },
    {
      icon: Building2,
      title: 'Brand Consulting',
      description: 'Strategic fashion direction and styling services for brands and companies',
      features: ['Brand style guide', 'Team styling', 'Event styling', 'Ongoing consultation'],
      price: 'Custom quote',
      duration: 'Project based',
      popular: false
    },
    {
      icon: Heart,
      title: 'Special Occasions',
      description: 'Perfect styling for life\'s most important moments and celebrations',
      features: ['Event styling', 'Red carpet looks', 'Wedding styling', 'Anniversary shoots'],
      price: 'From $800',
      duration: '2-3 hours',
      popular: false
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Wedding Consultation',
      description: 'We discuss your wedding vision, cultural preferences, and styling goals'
    },
    {
      step: '02',
      title: 'Style Planning',
      description: 'Custom styling plan including dress selection, cultural elements, and timeline'
    },
    {
      step: '03',
      title: 'Preparation & Fittings',
      description: 'Dress fittings, accessory selection, and final styling preparations'
    },
    {
      step: '04',
      title: 'Wedding Day Styling',
      description: 'Complete day-of styling service ensuring you look perfect for your special day'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full tracking-wide">
              SERVICES
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your
              <span className="block text-amber-500">Style Journey</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From personal styling sessions to high-profile editorial shoots, I offer comprehensive 
              styling services tailored to your unique needs and vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  service.popular ? 'ring-2 ring-amber-500' : 'border border-gray-100'
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-xl ${service.popular ? 'bg-amber-100' : 'bg-gray-100'}`}>
                      <service.icon className={`h-8 w-8 ${service.popular ? 'text-amber-600' : 'text-gray-600'}`} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{service.price}</div>
                      <div className="text-gray-500 text-sm flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 group ${
                        service.popular
                          ? 'bg-black text-white hover:bg-gray-800'
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      <span>Book Consultation</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Styling Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A carefully crafted approach to discovering and developing your personal style
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="bg-amber-500 text-black w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-y-0.5"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Ready to Plan Your Perfect Wedding Style?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book a consultation today and let's create the perfect styling plan for your special day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2 group"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-black text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-black hover:text-white transition-all duration-300"
                >
                  View My Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;