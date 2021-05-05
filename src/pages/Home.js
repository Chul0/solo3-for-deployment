import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Home = () => {
    return(
        <AwesomeSlider style={{height:"500px", margin:"100px auto"}}
        media={[
          {
            source: 'https://i.ibb.co/L1MMysP/Untitled-2.png',
          },
          {
            source: 'https://assets.vogue.com/photos/60112788d056dd15bb8731e3/master/pass/00003-COMME-DES-GARCONS-HOMME-PLUS-FALL-21.jpg',
          },
          {
            source: 'https://i.ibb.co/JqFPkMg/Untitled-3.png',
          },
        ]}
      />
    )
}


export default Home