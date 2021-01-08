import Slider from '../Components/Slider/Slider';
import Cards from '../Components/Cards/Cards';
import Layout from '../Components/Layout/Layout'
import WhereToUse from '../Components/WhereToUse/WhereToUse';

export default function Index() {
  return <Layout>
    <Slider />
    <Cards />
    <WhereToUse />
  </Layout>
}