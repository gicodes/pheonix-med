import { Card } from '@mui/material';
import { styled } from '@mui/system';

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
  height: 420px;
  width: 100%;
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
    min-width: 300px;
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

export const images = [
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
    src: '/images/visit-a-nurse-nearby-unsplash.avif',
    title: 'Visit a Nurse nearby',
    text: "Self Medication causes more complication. We have registered nurses in various locations who are happy to examine you"
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
    title: 'Order a Medicine',
    color: 'error'
  },
  {
    src: '/images/seat-sit-unsplash.avif',
    title: 'Book An Appointment',
    color: 'primary'
  },
  {
    src: '/images/nappy-giving-meds-unsplash.avif',
    title: 'Get Special Care',
    color: 'secondary'
  },
  {
    src: '/images/nappy-medical-reports-unsplash.jpg',
    title: 'Save A Life Campaign',
    color: 'warning',
  },
  // {
  // src: '/images/emmanuel-learn-about-pheonix-unsplash.jpg',
  //   title: 'Learn About Pheonix',
  //   color: 'secondary'
  // }
]