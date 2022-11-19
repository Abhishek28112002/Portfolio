import React, { useState } from 'react';
import './calculator.css';

function Calculator() {
    let [ans,setans]=useState('');
  return (<div >
     <div className='container'>
  <div className='wrapper'>
    <div className='screen'>
      {ans}
      </div>
      <div className='btn light-gray' onClick={()=>setans(ans+='1')}>1</div>
      <div className='btn light-gray' onClick={()=>setans(ans+='2')}>2</div>
      <div className='btn light-gray' onClick={()=>setans(ans+='3')}>3</div>
      <div className='btn light-orange' onClick={()=>setans(ans+='4')}>4</div>
      <div className='btn' onClick={()=>setans(ans+='5')}>5</div>
      <div className='btn' onClick={()=>setans(ans+='6')}>6</div>
      <div className='btn' onClick={()=>setans(ans+='7')}>7</div>
      <div className='btn' onClick={()=>setans(ans+='8')}>8</div>
      <div className='btn' onClick={()=>setans(ans+='9')}>9</div>
      <div className='btn' onClick={()=>setans(ans+='0')}>0</div>
      <div className='btn' onClick={()=>setans(ans+='+')}>+</div>
      <div className='btn' onClick={()=>setans(ans+='-')}>-</div>
      <div className='btn' onClick={()=>setans(ans+='*')}>*</div>
      <div className='btn' onClick={()=>setans(ans+='/')}>/</div>
      <div className='btn' onClick={()=>setans(ans+='00')}>00</div>
      <div className='btn' onClick={()=>setans(ans=eval(ans))}>=</div>
      <div className='btn ' onClick={()=>setans(ans='')}>AC</div>
      <div className='btn ' onClick={()=>setans(ans.slice(0,-1))}>DC</div>
      <div className='btn  ' onClick={()=>setans(ans+='/100 *')}>%</div>
  </div>
  </div>
  </div>
  )
}

export default Calculator;
