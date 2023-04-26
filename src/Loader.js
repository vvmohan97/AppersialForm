import './Loader.css'
import img from './skein_logo.png';
export function Loader(){
    
    return(

        <div class="wrapper">
     <img src={img} className="image" alt=''/>
  <div class="circle">
  </div>
  <div class="circle1"></div>
</div>
    );
}