import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './../HelperComponents/DoubleTextAnimation'
import DoubleTextAnimation from './../HelperComponents/DoubleTextAnimation';

gsap.registerPlugin(useGSAP);

function CornerText() {
  return (
    <>
      <div className='topLeft'>
        <DoubleTextAnimation string={'Design Portfolio 2025'} className={"corner-text"} />
      </div>
      <div className='bottomLeft'>
        <DoubleTextAnimation string={'December 26, 12:25'} className={'corner-text'} />
      </div>
      <div className='topRight'>
        <DoubleTextAnimation string={'Crafted with Precision'} className={'corner-text'} />
      </div>
      <div className='bottomRight'>
        <DoubleTextAnimation string={'Visual Storytelling'} className={'corner-text'} />
      </div>
    </>
  )
}
export default CornerText;