import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'}  text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Welcome to Forever!Your go-to destination for quality, affordability, and style. We bring you a carefully curated selection of products designed to make shopping easy, enjoyable, and reliable—delivered right to your door.</p>
            <p>At Forever, we believe shopping should be simple, convenient, and fun. Our mission is to deliver high-quality products across fashion, home, and lifestyle categories at prices you’ll love. We partner with trusted suppliers to ensure quality and value in every purchase.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission at Forever is to redefine the online shopping experience by offering carefully curated, high-quality products at unbeatable prices. We aim to make every customer feel valued by providing exceptional service, fast delivery, and a seamless shopping journey.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>We carefully select and inspect every product to ensure it meets our high standards. Your satisfaction is our top priority, and we’re committed to delivering only the best.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>At Forever, we make your shopping experience simple and stress-free. Enjoy a smooth website, secure payments, and reliable delivery—so you can get what you need without the hassle.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>At Forever, your satisfaction is our top priority. Our friendly, responsive support team is always ready to help, making sure every shopping experience is smooth and worry-free</p>
        </div>
      </div>
      
      <NewsletterBox />
    </div>
  )
}

export default About
