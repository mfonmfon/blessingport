import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Heart, Crown, Sparkles } from 'lucide-react';
import WhiteWeddingThree from '../../assets/portfolioimages/whiteWeddingThree.jpg'
import WhiteWeddingFour from '../../assets/portfolioimages/whiteWeddingFour.jpg'
import ClassicWedTwo from '../../assets/portfolioimages/IMG-20250921-WA0028.jpg'
import ClassicWedOne from '../../assets/portfolioimages/IMG-20250921-WA0027.jpg'
import OldWedOnePictureFour from '../../assets/portfolioimages/OldWedFour.jpg'
import OldWedOnePictureFive from '../../assets/portfolioimages/OldWedFive.jpg'
import GreenLadyOne from '../../assets/portfolioimages/GreenDressOne.jpg'
import LoveBird from '../../assets/portfolioimages/LoveBird.jpg'
import BirthdayPicFive from '../../assets/portfolioimages/BirthdayPicsOne.jpg'
import WeddingPicture from '../../assets/portfolioimages/IMG-20250921-WA0013.jpg'
import TifePicsFour from '../../assets/portfolioimages/TifePicsFour.jpg'
import TifePicsFive from '../../assets/portfolioimages/TifePicsFive.jpg'

import TifeWeddingVideo from '../../assets/video/TifeEmayeVid.mp4'

//videos import
import FirstWeddingVideo from '../../assets/video/weddingvidone.mp4'
import { useState } from 'react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const categories = ['all', 'white-wedding', 'traditional-wedding', 'fashion', 'editorial', 'bridal-party'];

  const portfolioImages = [
    {
      id: 1,
      category: 'white-wedding',
      title: 'Elegant White Wedding',
      description: 'Classic bridal styling with modern touches',
      image: WhiteWeddingFour,
      client: 'Sarah & Michael',
      size: 'large' // large, medium, small for staggered layout
    },
    {
      id: 2,
      category: 'traditional-wedding',
      title: 'Traditional African Wedding',
      description: 'Cultural heritage meets contemporary style',
      image: BirthdayPicFive,
      client: 'Amara & Kwame',
      size: 'medium'
    },
    {
      id: 3,
      category: 'white-wedding',
      title: 'Garden Party Wedding',
      description: 'Romantic outdoor ceremony styling',
      image: TifePicsFive,
      client: 'Emma & James',
      size: 'small'
    },
    {
      id: 4,
      category: 'fashion',
      title: 'Executive Power Dressing',
      description: 'Professional wardrobe transformation',
      image: OldWedOnePictureFive,
      client: 'Corporate Executive',
      size: 'medium'
    },
    {
      id: 5,
      category: 'traditional-wedding',
      title: 'Indian Wedding Ceremony',
      description: 'Vibrant traditional bridal styling',
      image: GreenLadyOne,
      client: 'Priya & Raj',
      size: 'large'
    },
    {
      id: 6,
      category: 'bridal-party',
      title: 'Bridesmaids Coordination',
      description: 'Harmonious bridal party styling',
      image: LoveBird,
      client: 'Wedding Party of 8',
      size: 'small'
    },
    {
      id: 7,
      category: 'white-wedding',
      title: 'Vintage Inspired Wedding',
      description: 'Timeless elegance with vintage flair',
      image: ClassicWedOne,
      client: 'Isabella & Thomas',
      size: 'medium'
    },
    {
      id: 8,
      category: 'editorial',
      title: 'Bridal Magazine Shoot',
      description: 'Editorial styling for wedding publication',
      image: ClassicWedTwo,
      client: 'Bridal Magazine',
      size: 'large'
    },
    {
      id: 9,
      category: 'traditional-wedding',
      title: 'Nigerian Traditional Wedding',
      description: 'Authentic cultural wedding styling',
      image: WeddingPicture,
      client: 'Adunni & Tunde',
      size: 'small'
    },
    {
      id: 10,
      category: 'fashion',
      title: 'Red Carpet Styling',
      description: 'Glamorous event styling',
      image: TifePicsFour,
      client: 'Celebrity Client',
      size: 'medium'
    },
    {
      id: 11,
      category: 'white-wedding',
      title: 'Beach Wedding Elegance',
      description: 'Coastal wedding styling perfection',
      image: OldWedOnePictureFour ,
      client: 'Sophia & David',
      size: 'large'
    },
    {
      id: 12,
      category: 'bridal-party',
      title: 'Mother of the Bride',
      description: 'Sophisticated styling for special family',
      image: WhiteWeddingThree,
      client: 'Mrs. Johnson',
      size: 'small'
    }
  ];

  const portfolioVideos = [
    {
      id: 1,
      category: 'white-wedding',
      title: 'Behind the Scenes: White Wedding',
      description: 'Complete bridal transformation process',
      thumbnail: OldWedOnePictureFour,
      video: 'null',
      client: 'Sarah & Michael Wedding',
      duration: '3:45'
    },
    {
      id: 2,
      category: 'traditional-wedding',
      title: 'Traditional Wedding Styling',
      description: 'Cultural wedding preparation journey',
      thumbnail: WeddingPicture,
      video: FirstWeddingVideo,
      client: 'null',
      duration: '4:20'
    },
    {
      id: 3,
      category: 'fashion',
      title: 'Fashion Week Styling',
      description: 'High fashion editorial styling process',
      thumbnail: BirthdayPicFive,
      video: 'null',
      client: 'Client',
      duration: '2:30'
    },
    {
      id: 4,
      category: 'bridal-party',
      title: 'Bridal Party Coordination',
      description: 'Styling an entire wedding party',
      thumbnail:TifePicsFive,
      video: TifeWeddingVideo,
      client: 'Wedding Party',
      duration: '5:15'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(item => item.category === selectedCategory);

  const filteredVideos = selectedCategory === 'all' 
    ? portfolioVideos 
    : portfolioVideos.filter(item => item.category === selectedCategory);

  const openModal = (item) => {
    setSelectedMedia(item);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'white-wedding': return Heart;
      case 'traditional-wedding': return Crown;
      case 'bridal-party': return Sparkles;
      default: return Sparkles;
    }
  };

  const getCategoryLabel = (category) => {
    switch(category) {
      case 'white-wedding': return 'White Wedding';
      case 'traditional-wedding': return 'Traditional Wedding';
      case 'bridal-party': return 'Bridal Party';
      case 'fashion': return 'Fashion';
      case 'editorial': return 'Editorial';
      default: return 'All';
    }
  };

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
              PORTFOLIO
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Wedding & Fashion
              <span className="block text-amber-500">Styling Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From intimate white weddings to vibrant traditional ceremonies, and high-fashion editorial shoots. 
              Each project is a unique story of style, culture, and personal expression.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white sticky top-20 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = getCategoryIcon(category);
              return (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{getCategoryLabel(category)}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Images Section - Staggered Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Styling Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A curated collection of wedding and fashion styling projects
            </p>
          </motion.div>
     
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
            >
              {filteredImages.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="break-inside-avoid group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer mb-6"
                  onClick={() => openModal(item)}
                >
                  <div className={`relative overflow-hidden ${
                    item.size === 'large' ? 'aspect-[3/4]' : 
                    item.size === 'medium' ? 'aspect-[4/5]' : 'aspect-square'
                  }`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <span className="inline-block px-3 py-1 bg-amber-500 text-black text-xs font-medium rounded-full mb-3">
                          {getCategoryLabel(item.category)}
                        </span>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-200 text-sm mb-2">{item.description}</p>
                        <p className="text-amber-300 text-sm font-medium">{item.client}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Videos Section */}
      {filteredVideos.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Behind the Scenes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Watch the styling process unfold in these exclusive behind-the-scenes videos
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredVideos.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Video Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:bg-white transition-colors duration-300"
                      >
                        <Play className="h-12 w-12 text-black ml-1" />
                      </motion.div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.duration}
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <span className="inline-block px-3 py-1 bg-amber-500 text-black text-xs font-medium rounded-full mb-3">
                          {getCategoryLabel(item.category)}
                        </span>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-200 text-sm mb-2">{item.description}</p>
                        <p className="text-amber-300 text-sm font-medium">{item.client}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Media Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>

              {selectedMedia.video ? (
                <div className="aspect-video">
                  <video
                    controls
                    className="w-full h-full"
                    poster={selectedMedia.thumbnail}
                  >
                    <source src={selectedMedia.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <div className="aspect-[4/5] lg:aspect-video">
                  <img
                    src={selectedMedia.image}
                    alt={selectedMedia.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full mb-3">
                      {getCategoryLabel(selectedMedia.category)}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedMedia.title}</h3>
                    <p className="text-gray-600 mb-2">{selectedMedia.description}</p>
                    <p className="text-amber-600 font-medium">{selectedMedia.client}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;