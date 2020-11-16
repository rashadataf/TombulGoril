import ImageGallery from 'react-image-gallery';
import Cards from '../Components/Cards/Cards';
import Layout from '../Components/Layout/Layout'
import WhereToUse from '../Components/WhereToUse/WhereToUse';

const images = [
  {
    original: "/banner (1).jpeg",
    originalClass: "mobile"
  },
  {
    original: "/banner (2).jpeg",
    originalClass: "mobile"
  },
  {
    original: "/banner (3).jpeg",
    originalClass: "mobile"
  },
  {
    original: "/banner (4).jpeg",
    originalClass: "mobile"
  },
  {
    original: "/banner (5).jpeg",
    originalClass: "mobile"
  },
  {
    original: "/banner (6).jpeg",
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
      autoPlay={false}
    />
    <Cards />
    <WhereToUse />
  </Layout>
}