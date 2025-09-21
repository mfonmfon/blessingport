import React from 'react'
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlessingBackgroundImage from '../../assets/images/BlessingBackgroundPics.jpg'

const Herosection = () => {
  return (
    <div>
       {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                  >
                    <div className="space-y-4">
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full tracking-wide"
                      >
                        FASHION STYLIST & CONSULTANT
                      </motion.span>
                      <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                        Elevating
                        <span className="block text-amber-500">Your Style</span>
                      </h1>
                      <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                        From red carpet moments to everyday elegance, I create distinctive style experiences 
                        that reflect your unique personality and vision.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/portfolio">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2 group"
                        >
                          <span>View My Work</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                      </Link>
                      <Link to="/contact">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="border-2 border-black text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-black hover:text-white transition-all duration-300"
                        >
                          Get In Touch
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
      
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={BlessingBackgroundImage}
                        alt="Fashion Stylist Portrait"
                        className="w-full h-[600px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    
                    {/* Floating Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.6 }}
                      className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-amber-100 p-3 rounded-full">
                          <Star className="h-6 w-6 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">Featured in Vogue</p>
                          <p className="text-gray-600 text-sm">Top Stylist 2024</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </section>
      
    </div>
  )
}

export default Herosection
