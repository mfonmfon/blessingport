import WeddingPicOne from '../assets/images/weddingPicOne.jpg'
import WeddingPicTwo from '../assets/images/WeddingPicTwo.jpg'
import WeddingPicThree from '../assets/images/WeddingPicThree.jpg'

import WhiteWeddingOne from '../assets/portfolioimages/whiteWeddingOne.jpg'
import WhiteWeddingTwo from '../assets/portfolioimages/whiteWeddingTwo.jpg'
import WhiteWeddingThree from '../assets/portfolioimages/whiteWeddingThree.jpg'
import WhiteWeddingFour from '../assets/portfolioimages/whiteWeddingFour.jpg'
import WhiteWeddingFive from '../assets/portfolioimages/whiteWeddingFive.jpg'

import OldWedOnePictureOne from '../assets/portfolioimages/OldWedOne.jpg'
import OldWedOnePictureTwo from '../assets/portfolioimages/OldWedTwo.jpg'
import OldWedOnePictureThree from '../assets/portfolioimages/OldWedThree.jpg'
import OldWedOnePictureFour from '../assets/portfolioimages/OldWedFour.jpg'
import OldWedOnePictureFive from '../assets/portfolioimages/OldWedFive.jpg'
import OldWedOnePictureSix from '../assets/portfolioimages/OldWedSix.jpg'


import BirthdayPicOne from '../assets/portfolioimages/BirthdayPicsFive.jpg'
import BirthdayPicTwo from '../assets/portfolioimages/BirthdayPicsTwo.jpg'
import BirthdayPicThree from '../assets/portfolioimages/BirthdayPicsThree.jpg'
import BirthdayPicFour from '../assets/portfolioimages/BirthdayPicsFour.jpg'
import BirthdayPicFive from '../assets/portfolioimages/BirthdayPicsOne.jpg'

import TifePicsOne from '../assets/portfolioimages/TifePicsOne.jpg'
import TifePicsTwo from '../assets/portfolioimages/TifePicsTwo.jpg'
import TifePicsThree from '../assets/portfolioimages/TifePicsThree.jpg'
import TifePicsFour from '../assets/portfolioimages/TifePicsFour.jpg'
import TifePicsFive from '../assets/portfolioimages/TifePicsFive.jpg'


import ClassicWedTwo from '../assets/portfolioimages/IMG-20250921-WA0028.jpg'
import ClassicWedThree from '../assets/portfolioimages/IMG-20250921-WA0029.jpg'
import ClassicWedFour from '../assets/portfolioimages/IMG-20250921-WA0030.jpg'
import ClassicWedFive from '../assets/portfolioimages/IMG-20250921-WA0025.jpg'
// import ClassicWedSix from '../assets/portfolioimages/IMG-20250921-WA0026.jpg'
export interface Project {
  id: string;
  title: string;
  category: 'white-wedding' | 'traditional-wedding' | 'fashion' | 'editorial' | 'bridal-party';
  description: string;
  client: string;
  date: string;
  coverImage: string;
  images: string[];
  services: string[];
  location?: string;
}

export const projects: Project[] = [
  {
    id: 'elegant-white-wedding',
    title: 'Pre wedding styling',
    category: 'white-wedding',
    description: 'A timeless white wedding featuring classic bridal styling with modern touches. The bride wanted a sophisticated look that honored tradition while incorporating contemporary elements.',
    client: 'Client Pre wedding shoot',
    date: 'June 2024',
    coverImage: WeddingPicOne,
    images: [
      WeddingPicOne,
      WeddingPicTwo,
      WeddingPicThree,
    ],
    services: ['Bridal Styling', 'Dress Selection', 'Accessory Coordination', 'Day-of Styling'],
    location: 'Lagos, Nigeria'
  },
  {
    id: 'traditional-african-wedding',
    title: 'Traditional African Wedding',
    category: 'traditional-wedding',
    description: 'A vibrant celebration of African heritage with authentic traditional styling. We incorporated family heirloom jewelry and custom-made traditional attire.',
    client: 'Client',
    date: 'null',
    coverImage: OldWedOnePictureFour,
    images: [
      OldWedOnePictureOne,
      OldWedOnePictureTwo,
      OldWedOnePictureFour,
      OldWedOnePictureFive,
      OldWedOnePictureSix,
      OldWedOnePictureThree
    ],
    services: ['Traditional Attire Selection', 'Cultural Consultation', 'Jewelry Coordination', 'Family Styling'],
    location: 'Brooklyn, New York'
  },
  {
    id: 'garden-party-wedding',
    title: 'White Wedding',
    category: 'white-wedding',
    description: 'A romantic outdoor ceremony with flowing fabrics and natural elements. The styling emphasized organic beauty and effortless elegance.',
    client: 'Client',
    date: 'null',
    coverImage: WhiteWeddingOne,
    images: [
      WhiteWeddingThree,
      WhiteWeddingFour,
      WhiteWeddingFive,
      WhiteWeddingTwo,
    ],
    services: ['Outdoor Wedding Styling', 'Natural Beauty Enhancement', 'Floral Coordination', 'Weather-Appropriate Planning'],
    location: 'Hamptons, New York'
  },
  {
    id: 'executive-power-dressing',
    title: 'Clients Birthday shoot',
    category: 'fashion',
    description: 'Professional wardrobe transformation for a C-suite executive. Focus on authoritative yet approachable styling for board meetings and public appearances.',
    client: 'Birthday Shoot',
    date: 'null',
    coverImage: BirthdayPicOne,
    images: [
      BirthdayPicOne,
      BirthdayPicTwo,
      BirthdayPicThree,
      BirthdayPicFour,
      BirthdayPicFive
    ],
    services: ['Wardrobe Audit', 'Professional Styling', 'Personal Shopping', 'Image Consulting'],
    location: 'Manhattan, New York'
  },
  {
    id: 'indian-wedding-ceremony',
    title: 'Traditional Wedding',
    category: 'traditional-wedding',
    description: 'A spectacular multi-day Indian wedding celebration with intricate traditional styling for each ceremony. Rich fabrics, elaborate jewelry, and cultural authenticity.',
    client: 'Client ',
    date: 'September 2024',
    coverImage: TifePicsOne,
    images: [
      TifePicsOne,
      TifePicsTwo,
      TifePicsThree,
      TifePicsFour,
      TifePicsFive,
  
    ],
    services: ['Multi-Day Styling', 'Traditional Jewelry Selection', 'Cultural Consultation', 'Family Coordination'],
    location: 'Long Island, New York'
  },
  {
    id: 'red-carpet-styling',
    title: 'White Wedding',
    category: 'fashion',
    description: 'Glamorous red carpet styling for a high-profile event. Custom gown selection with statement accessories and flawless execution.',
    client: 'Client',
    date: 'null',
    coverImage: ClassicWedFive,
    images: [
      ClassicWedTwo,
      ClassicWedThree,
      ClassicWedFour,
      ClassicWedFive,
      // ClassicWedSix,
    ],
    services: ['Red Carpet Styling', 'Designer Coordination', 'Jewelry Selection', 'Event Styling'],
    location: 'Lincoln Center, New York'
  }
];

export const getCategoryLabel = (category: string): string => {
  switch(category) {
    case 'white-wedding': return 'White Wedding';
    case 'traditional-wedding': return 'Traditional Wedding';
    case 'bridal-party': return 'Bridal Party';
    case 'fashion': return 'Fashion';
    case 'editorial': return 'Editorial';
    default: return 'All';
  }
};

export const getCategoryColor = (category: string): string => {
  switch(category) {
    case 'white-wedding': return 'bg-rose-100 text-rose-800';
    case 'traditional-wedding': return 'bg-purple-100 text-purple-800';
    case 'bridal-party': return 'bg-pink-100 text-pink-800';
    case 'fashion': return 'bg-blue-100 text-blue-800';
    case 'editorial': return 'bg-green-100 text-green-800';
    default: return 'bg-amber-100 text-amber-800';
  }
};