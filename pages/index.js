import ImageGallery from 'react-image-gallery';
import Cards from '../Components/Cards/Cards';
import Layout from '../Components/Layout/Layout'
import WhereToUse from '../Components/WhereToUse/WhereToUse';

const images = [
  {
    original: "/banner (1).jpg",
    originalClass: "mobile"
  },
  {
    original: "/banner (2).jpg",
    originalClass: "mobile"
  },
  {
    original: "/banner (3).jpg",
    originalClass: "mobile"
  },
  {
    original: "/banner (4).jpg",
    originalClass: "mobile"
  },
  {
    original: "/banner (5).jpg",
    originalClass: "mobile"
  },
  {
    original: "/banner (6).jpg",
    originalClass: "mobile"
  },
];

export default function Index() {
  return <Layout>
    <ImageGallery
      items={images}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      autoPlay={true}
    />
    <Cards />
    <WhereToUse />
  </Layout>
}