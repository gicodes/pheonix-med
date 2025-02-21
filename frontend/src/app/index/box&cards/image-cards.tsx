import { Card } from '@mui/material';
import { styled } from '@mui/system';

export const images = [
  {
    src: '/images/visit-a-nurse-nearby-unsplash.avif',
    title: 'Visit a Nurse nearby',
    text: "Self Medication causes more complication. We have registered nurses in various locations who are happy to examine you"
  },
  {
    src: '/images/one-stop-medical-servers-unsplash.jpg',
    title: 'Your One Stop Medical Centre',
    text: 'We provide a wide range of medical services, from supplying your routine prescriptions to providing specialist consultations',
  },
  {
    src: '/images/debby-price-lock-unsplash.jpg',
    title: "Lock-in at low prices",
    text: "Everyone deserves a pre-paid med supply that doesn't fluctate. \n Because when you need them, it may be too late to negotiate",
  },
  {
    src: '/images/speak-with-a-specialist-unsplash.jpg',
    title: 'Speak with Doctor Specialists',
    text: "Why spend so much time waiting for a Doctor's appointment, when you can speak with licensed specialists today"
  },
  {
    src: '/images/nappy-medical-reports-unsplash.jpg',
    title: 'Save A Life Campaign',
    text: "Patients who know what to treat stand a better chance of managing health risks. Access you or your immediate families' medical records with doctors reports"
  }
];

export const clickImages = [
  {
    src: '/images/james-supply-meds-unsplash.jpg',
    title: 'Price Lock Pharmacy 🔐',
    description: 'Order your routine medications with confidence as we lock in your price for 6 to 12 months—regardless of market fluctuations. This is not your regular over-the-counter pharmacy',
    color: 'error'
  },
  {
    src: '/images/seat-sit-unsplash.avif',
    title: 'Speak To A Doctor →',
    description: 'Connect instantly with licensed doctors for expert medical advice from the comfort of your home. Whether it’s a follow-up consultation, a prescription update, or video chat',
    color: 'primary'
  },
  {
    src: '/images/nappy-giving-meds-unsplash.avif',
    title: 'Homecare Nursing →',
    description: 'We bring professional care and compassion right to your doorstep with our Homecare Nursing service. Access verified freelance nurses who offer day-to-day needs and special care',
    color: 'secondary'
  },
  {
    src: '/images/nappy-medical-reports-unsplash.jpg',
    title: 'Save A Life Campaign →',
    description: 'Join our mission to transform lives by supporting those who cannot afford essential medications. Through the Save A Life Campaign, you contribute directly and help patients in need',
    color: 'warning'
  },
  // {
  //   src: '/images/emmanuel-learn-about-pheonix-unsplash.jpg',
  //   title: 'Learn About Pheonix →',
  //   color: 'secondary'
  // }
]

interface ImageCardProps {
  image: string;
}

export const ImageCard = styled(Card)<ImageCardProps>`
  width: 100%;
  height: 420px;
  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.image});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ClickImageCard = styled(Card)<ImageCardProps>`
  width: 100%;
  height: 420px;
  padding: 0.75rem;
  min-width: 345px;
  
  @media (max-width: 344px) {
    min-width: 280px
  }

  @media (min-width: 344px) and (max-width: 360px) {
    min-width: 300px;
    height: 360px;
  }

  @media (min-width: 600px) {
    min-width: 555px;
  } 

  @media (min-width: 768px) and (max-width: 900px) {
    min-width: 750px;
  }

  @media (min-width: 900px) and (max-width: 100px) {
    min-width: 345px;
  }

  @media (min-width: 1024px) {
    min-width: 303px;
    height: 360px
  }

  position: relative;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.image});
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5rem auto;
`;