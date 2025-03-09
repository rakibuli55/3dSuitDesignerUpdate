import loaderImg from "../assets/images/fade-stagger-circles.svg";

const Preloader = () => {

    
    return <div className='fixed top-0 left-0 h-full w-full bg-white flex items-center justify-center'>
        <img className='w-[100px]' src={loaderImg} alt="" />
    </div>;
};


export default Preloader;