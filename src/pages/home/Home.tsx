import Herosection from '../../components/herosection/Herosection';
import StatisticSection from '../../components/statisticSections/StatisticSection';
// import FeaturedBrands from '../../components/featuredbrands/FeaturedBrands';
import FeaturedWorkPreview from '../../components/featuredworkspreview/FeaturedWorkPreview';

const Home = () => {

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <Herosection />
     
     {/* Stats Section */}
     <StatisticSection />

      {/* Featured Brands */}
      {/* <FeaturedBrands /> */}
      
      {/* Featured Work Preview */}
     <FeaturedWorkPreview />
    </div>
  );
};

export default Home;