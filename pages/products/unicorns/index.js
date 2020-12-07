import { connect } from 'react-redux';
import Layout from '../../../Components/Layout/Layout'
import Card from '../../../UI/Card/Card'
import Preview from '../../../UI/Preview/Preview';
import { togglePreview, setPreviewImage } from '../../../store/actions/actions'
import classes from './index.module.css';

const unicorns = [
  {
    name: "10ML V3 PET UNICORN BOTTLE",
    img: "/products/Unicorn/CGUB1-10MLV3/CGUB1-10MLV3-NATL/CGUB1-10MLV3-NATL.png",
    description: ""
  },
  {
    name: "16.5ML V3 PET UNICORN BOTTLE",
    img: "/products/Unicorn/CGUB1-15MLV3/CGUB1-15MLV3-NATL/CGUB1-15MLV3-NATL.png",
    description: ""
  },
  {
    name: "20ML V3 PET UNICORN BOTTLE",
    img: "/products/Unicorn/CGUB1-20MLV3/CGUB1-20MLV3-NATL/CGUB1-20MLV3-NATL.png",
    description: ""
  },
  {
    name: "30ML V3 PET UNICORN BOTTLE",
    img: "/products/Unicorn/CGUB1-30MLV3/CGUB1-30MLV3-NATL/CGUB1-30MLV3-NATL.png",
    description: ""
  },
  {
    name: "50ML V3 PET UNICORN BOTTLE",
    img: "/products/Unicorn/CGUB1-50MLV3/CGUB1-50MLV3-NATL/CGUB1-50MLV3-NATL.png",
    description: ""
  },
  {
    name: "60ML V3 PET UNICORN BOTTLE",
    img: "/products/Unicorn/CGUB1-60MLV3/CGUB1-60MLV3-NATL/60V3.png",
    description: ""
  },
  {
    name: "75MLV3 PET UNICORN BOTTLE",
    img: "/products/Unicorn/CGUB1-75MLV3/CGUB1-75MLV3-NATL/CGUB1-75MLV3-NATL.png",
    description: ""
  },
  {
    name: "100ML V3 PET UNICORN BOTTLE",
    img: "/products/Unicorn/CGUB1-100MLV3/CGUB1-100MLV3-NATL/CGUB1-100MLV3-NATL.png",
    description: ""
  },
  {
    name: "120ML V3 PET UNICORN BOTTLE",
    img: "/products/Unicorn/CGUB1-120MLV3/CGUB1-120MLV3-NATL/CGUB1-120MLV3-NATL.png",
    description: ""
  },
  {
    name: "60MLSC PET UNICORN BOTTLE",
    img: "/products/Unicorn/CGUB1-60MLSC/CGUB1-60MLSC-NATL/CGUB1-60MLSC-NATL.png",
    description: ""
  },
  {
    name: "75MLSC PET UNICORN BOTTLE",
    img: "/products/Unicorn/CGUB1-75MLSC/CGUB1-75MLSC-NATL/CGUB1-75MLV3-NATL.png",
    description: ""
  },
  // {
  //   name: "",
  //   img: "",
  //   description: ""
  // },
  // {
  //   name: "",
  //   img: "",
  //   description: ""
  // }
];

const Unicorns = (props) => {
  return <Layout>
    <>
      {props.isPreview ? <Preview /> : null}
      <div className={classes.cards}>
        {
          unicorns.map((unicorn, index) => <Card
            text={unicorn.name}
            img={unicorn.img}
            key={index}
            styleClass={classes.card}
            onClick={(event) => {
              console.log(props);
              props.togglePreview();
              props.setPreviewImage(event.target.src);
            }}
          />)
        }
      </div>
    </>
  </Layout>
}

const mapStateToProps = state => {
  return {
    isPreview: state.isPreview
  }
}

const mapDispatchToProps = dispatch => {
  return {
    togglePreview: () => dispatch(togglePreview()),
    setPreviewImage: (img) => dispatch(setPreviewImage(img))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Unicorns);