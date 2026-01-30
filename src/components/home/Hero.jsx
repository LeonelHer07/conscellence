import Fondo from '../../assets/hero.png'
import Navbar from './Navbar'
import Main from './Main'

const Hero = () => {
   const bgImagen = {
        backgroundImage: `url(${Fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        position: "relative",
    };

  return (

    <div style={bgImagen} className="flex flex-col h-[616px] w-full" >
     <Navbar/>
     <Main/>
     
    </div>
  );
}

export default Hero