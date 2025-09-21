import React from 'react'
import { motion } from 'framer-motion';

const FeaturedBrands = () => {
  const brands = [
    'BETH ETHAN COUTURE', 'TITOS APPEREL', 'THEBUKOLA/ MIASHAB', 'DIPXON'
  ];
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Collaborating with top fashion magazines, luxury brands, and influential personalities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <span className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-300">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default FeaturedBrands
