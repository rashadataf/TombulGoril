import ImageGallery from 'react-image-gallery';
import Cards from '../Components/Cards/Cards';
import Layout from '../Components/Layout/Layout'

const images = [
    {
      original: "/banner (1).jpeg",
    },
    {
      original: "/banner (2).jpeg",
    },
    {
      original: "/banner (3).jpeg",
    },
    {
      original: "/banner (4).jpeg",
    },
    {
      original: "/banner (5).jpeg",
    },
    {
      original: "/banner (6).jpeg",
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
  </Layout>
}