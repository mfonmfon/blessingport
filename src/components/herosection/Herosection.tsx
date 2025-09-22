import { motion } from 'framer-motion';
import { ArrowDown} from 'lucide-react';
import { Link } from 'react-router-dom';
import BlessingBackgroundImage from '../../assets/images/BlessingBackgroundPics.jpg'

const Herosection = () => {

  return (
    <div>
       
      <section id="home" className="relative h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
       <div className="absolute inset-0 z-0">
        <img
          src={BlessingBackgroundImage}
          alt="Digital Creator"
          className="w-full h-full object-cover bg-black/70" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // style={{ opacity, scale }}
          className="max-w-4xl mx-auto z-10 px-4 sm:px-6 lg:px-8"
        >
          <p className="inline-block px-2 py-2 bg-amber-100 text-amber-800 text-sm font-medium rounded-full tracking-wide">
            FASHION STYLIST & CONSULTANT
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
            Redefiining  Styles With <span className="text-primary">Confidence</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
           From red carpet moments to everyday elegance, I create distinctive styles experiences that reflect your unique personality and vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="rounded-full px-6 sm:px-8 py-3 text-xs sm:text-sm md:text-base bg-white text-black  hover:bg-primary/90 transition">
              View My Work
            </button>
            <button className="rounded-full px-6 sm:px-8 py-3 text-xs sm:text-sm md:text-base text-white border border-white hover:bg-white/10 transition">
              Contact Me
            </button>
        </div>

        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
        </motion.div>
      </section>

    </div>
  )
}

export default Herosection
