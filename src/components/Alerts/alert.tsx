import './index.scss'
import { X } from 'lucide-react';
import { ReactNode } from 'react';
interface IProps{
  type : string ,
  icon : ReactNode ,
  title : string
}

const alert = ({type , icon , title} : IProps) => {
   return (
     <div className={type}>
      <div className='alert-header'>
        <div className="title">
      {icon} 
      <h4>{title}</h4>  
        </div>
      <span className='x'><X /></span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi consectetur eos ut alias laudantium quo optio culpa quisquam itaque aspernatur.</p>
      </div>
  )
}
export default alert