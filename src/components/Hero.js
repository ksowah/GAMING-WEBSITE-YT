import Fade from 'react-reveal/Fade';

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:h-screen items-center pt-[5rem] w-full" >
        
        <Fade bottom >
            <div className="flex flex-col flex-1 h-full items-center xl:items-start justify-center text-white text-center xl:text-start space-y-8 mb-[4rem] " >
                <p className="text-[#e87d0e] font-medium  " >Proved by prodesigner</p>
                <h1 className="text-[2rem] font-bold w-full xl:w-[25rem] " >
                    Work that we produce for our clients
                </h1>

                <p className="text-xs w-full xl:w-[19rem] text-gray-200 " >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                </p>

                <button className="text-sm w-[10rem] py-2 rounded-full bg-gradient-to-tr from-[#D80027] to-[#FB9E3C]" >Get more details</button>
            </div>
        </Fade>

        <Fade bottom>
            <div className="flex items-center justify-center flex-1 h-full " >
                <img src={require("../images/hero.png")} />
            </div>
        </Fade>
    </div>
  )
}

export default Hero