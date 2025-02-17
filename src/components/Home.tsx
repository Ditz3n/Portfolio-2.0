import Typewriter from './Typewriter';
import darkStar from '../assets/star-dark.svg';
import orangeStar from '../assets/star-orange.svg';
import spaceShip from '../assets/spaceship.svg';

export default function Home() {
    return (
        <section className="">
            <div className="">
                <div className="star-wrapper absolute w-[10%] h-[12%] ml-20 mt-20">
                    <img src={darkStar} alt="star" className="star-dark w-full h-full" />
                    <img src={orangeStar} alt="star" className="star-orange w-full h-full" />
                </div>
                <div className="star-wrapper absolute w-[8%] h-[8%] ml-52 mt-36">
                    <img src={darkStar} alt="star" className="star-dark w-full h-full" />
                    <img src={orangeStar} alt="star" className="star-orange w-full h-full" />
                </div>
                <div className="star-wrapper absolute w-20 h-20 ml-36 mt-52">
                    <img src={darkStar} alt="star" className="star-dark w-full h-full" />
                    <img src={orangeStar} alt="star" className="star-orange w-full h-full" />
                </div>
            </div>
            <div className='flex flex-col justify-center items-center h-screen'>
                <h1 className="text-9xl font-black uppercase text-center">Mads Villadsen</h1>
                <div className="mt-4 w-full flex justify-center">
                    <p className="text-[#EB5E28] text-xl font-medium">
                        Software Engineering Student specializing in{' '}
                        <Typewriter
                            words={[
                                'front end development',
                                'customer pleasing',
                                'innovative solutions',
                                'user experience design',
                            ]}
                        />
                    {'.'}</p>
                </div>
            </div>
            <div className="absolute bottom-20 right-20">
                <img 
                    src={spaceShip} 
                    alt="spaceship" 
                    className="w-56 h-56" 
                />
            </div>
        </section>
    );
}