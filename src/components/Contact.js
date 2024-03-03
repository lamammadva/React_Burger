import React from 'react';
import contactimage from '../assets/contactimage.jpg'
export const Contact = () => {
  return (
    <div className='contactdiv'>
      <img className='contactimage' src={contactimage}/>
      <div className='contactdiv2'>
        <h1>Bizimle iletişime geçin</h1>
        <form className='form'>
          <label>Ad Soyad</label>
          <input type='text' name='name' placeholder='Lutfen adınızı giriniz'/>
          <label>Email</label>
          <input placeholder='Lutfen emailinizi giriniz'/>
          <label>Mesajiniz</label>
          <input placeholder='Lutfen mesajinizi giriniz'/>
          <button style={{backgroundColor:"green",border:"none",height:"30px",color:"white"}}>Button</button>
        </form>
      </div>
    </div>
  )
}
