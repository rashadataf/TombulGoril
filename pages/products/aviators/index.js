import { connect } from 'react-redux';
import Layout from '../../../Components/Layout/Layout'
import Card from '../../../UI/Card/Card'
import Preview from '../../../UI/Preview/Preview';
import { togglePreview, setPreviewImage } from '../../../store/actions/actions'
import classes from './index.module.css';

const aviators = [
  {
    name: "1OZ (30CC) SIGNATURE AVIATOR CR CONTAINER",
    img: "/products/Aviator/Aviator Containers/CGAC1-1OZ_White Translucent.png",
    description: ""
  },
  {
    name: "2OZ (60CC) SIGNATURE AVIATOR CR CONTAINER",
    img: "/products/Aviator/Aviator Containers/CG_Aviator-Container_2oz_White Translucent.png",
    description: ""
  },
  {
    name: "3OZ (90CC) SIGNATURE AVIATOR CR CONTAINER",
    img: "/products/Aviator/Aviator Containers/CG_Aviator-Container_3oz_White Translucent.png",
    description: ""
  },
  {
    name: "4OZ (120CC) SIGNATURE AVIATOR CR CONTAINER",
    img: "/products/Aviator/Aviator Containers/CG_Aviator-Container_4oz_White Translucent.png",
    description: ""
  },
  {
    name: "8OZ (240CC) SIGNATURE AVIATOR CR CONTAINER",
    img: "/products/Aviator/Aviator Containers/CG_Aviator-Container_8oz_White Translucent.png",
    description: ""
  },
  {
    name: "100MM SIGNATURE AVIATOR CR TUBE",
    img: "/products/Aviator/Aviator Tubes/CG_Aviator-Tube_100ML_White-Translucent.png",
    description: ""
  },
  {
    name: "113MM SIGNATURE AVIATOR CR TUBE",
    img: "/products/Aviator/Aviator Tubes/CG_Aviator-Tube_113ML_White-Translucent.png",
    description: ""
  },
  {
    name: "120MM SIGNATURE AVIATOR CR TUBE",
    img: "/products/Aviator/Aviator Tubes/CG_Aviator-Tube_120ML_White-Translucent.png",
    description: ""
  },
  {
    name: "7.5OZXL (225CC) SIGNATURE AVIATOR CR CONTAINER",
    img: "/products/Aviator/Aviator XL/CG_Aviator-XL_7.5OZ_White Translucent.png",
    description: ""
  },
  {
    name: "18.5OZXL (550CC) SIGNATURE AVIATOR CR CONTAINER",
    img: "/products/Aviator/Aviator XL/CG_Aviator-XL_18.5OZ_White Translucent.png",
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
  // },
  // {
  //   name: "",
  //   img: "",
  //   description: ""
  // }
];

const Aviators = (props) => {
  return <Layout>
    <>
      {props.isPreview ? <Preview /> : null}
      <div className={classes.cards}>
        {
          aviators.map((aviator, index) => <Card
            text={aviator.name}
            img={aviator.img}
            key={index}
            divKey={index.toString()}
            paragraphKey={aviator.name}
            imgKey={aviator.img}
            styleClass={classes.card}
            onClick={(event) => {
              // console.log(event.target);
              if (event.target.tagName.toLowerCase() === 'img') {
                props.setPreviewImage(event.target.src);
              } else {
                props.setPreviewImage(event.currentTarget.querySelector('img').src);
              }
              props.togglePreview();
              
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

export default connect(mapStateToProps, mapDispatchToProps)(Aviators);