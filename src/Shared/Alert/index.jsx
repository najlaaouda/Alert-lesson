import { IoMdClose } from "react-icons/io";
import './Alert.scss';
const Alert =({name,
  title,
  description,
icon,
children}) =>{
return (
  <div className={name}> 
  <p  className='alert-title'>
 {icon}{title}
    </p>
  
  {children?children:<p className="alert-description">{description}</p>}
  
  <span className='close'>
   <IoMdClose size={20} />
    </span>
  </div>
);

}
export default Alert