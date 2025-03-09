import { Link } from 'react-router-dom'
import NotFoundImg from '../../assets/images/404.gif'

function ErrorPage() {
  return (
    <div className='flex items-center justify-center flex-col'>
        <img className='w-[800px]' src={NotFoundImg} alt="" />
        <div className='mt-[-140px] text-center'>
            <p className='text-[40px]'>Opps ! Page not found</p>
            <Link className='inline-block py-3 px-8 text-base font-bold bg-theme-color rounded-[100px] duration-200 ease-in-out border mt-8 border-theme-color hover:bg-transparent' to={'/'}>Go Back</Link>
        </div>
    </div>
  )
}

export default ErrorPage