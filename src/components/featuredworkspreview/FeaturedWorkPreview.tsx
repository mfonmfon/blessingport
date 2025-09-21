import React from 'react'
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, getCategoryLabel, getCategoryColor } from '../../data/projects';
const FeaturedWorkPreview = () => {

   // Get featured projects (first 6 projects)
  const featuredProjects = projects.slice(0, 6);
  
  return (
    <div>
       <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Recent Wedding & Fashion Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into my latest wedding styling and fashion projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/project/${project.id}`}>
                  <div className="group relative overflow-hidden rounded-2xl aspect-square bg-white shadow-sm hover:shadow-xl transition-all duration-500">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-3 ${getCategoryColor(project.category)}`}>
                          {getCategoryLabel(project.category)}
                        </span>
                        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-200 text-sm mb-2">{project.client}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-amber-300 text-sm font-medium">View Project</span>
                          <ArrowRight className="h-4 w-4 text-amber-300 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-amber-400 transition-colors duration-300 flex items-center space-x-2 group mx-auto"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default FeaturedWorkPreview
