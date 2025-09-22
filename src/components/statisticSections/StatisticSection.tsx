import { Star, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';
const StatisticSection = () => {
  
  const stats = [
    { icon: Users, number: '12+', label: 'Clients Styled' },
    { icon: Award, number: '7+', label: 'Brand Partnerships' },
    { icon: Star, number: '4+', label: 'Years Experience' },
  ];
  return (
    <div>
       {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-4xl font-bold">{stat.number}</h3>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default StatisticSection
