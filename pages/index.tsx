/* eslint-disable react/no-unescaped-entities */
import { faBars, faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Accordion } from 'components/Accordion'
import Carousel, { CarouselItem } from 'components/Carousel'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'

const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <header>
        {/* Top Strip */}
        <div className='h-[25px] bg-theme-main py-2 flex items-center justify-center'>
          <p className='w-fit text-[11px] font-normal text-white'>
            Cash On Delivery + FREE Shipping In India
          </p>
        </div>
        <nav>
          <div className='flex justify-between px-2 items-center'>
            {/* Header Logo */}
            <div className='w-40 md:w-[200px]'>
              <Image
                src='/assets/images/lumin-care-logo.png'
                width={160}
                height={59}
                objectFit='contain'
                alt='lumin care logo'
                layout='responsive'
              />
            </div>

            {/* Menu */}
            <ul className='list-none font-bold hidden no-underline -ml-10 md:flex md-plus:-ml-11'>
              <li>
                <a className='py-[15px] px-[30px]' href='#'>
                  Home
                </a>
              </li>
              <li>
                <a className='py-[15px] px-[30px]' href='#'>
                  Best Sellers
                </a>
              </li>
              <li>
                <a className='py-[15px] px-[30px]' href='#'>
                  Questions?
                </a>
              </li>
              <li>
                <a className='py-[15px] px-[30px]' href='#'>
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Header Icons */}
            <div className='flex items-center'>
              {/* Cart */}
              <div className='flex items-start gap relative mr-2'>
                <FontAwesomeIcon icon={faCartShopping} className='w-7 h-6' />
                <span className='font-bold text-xs absolute -top-3 -right-2'>0</span>
              </div>
              {/* Bread Menu */}
              <div
                className='w-8 h-9 bg-theme-main flex justify-center items-center ml-1 md:hidden'
                onClick={() => setIsMenuOpen((prev) => !prev)}>
                <FontAwesomeIcon
                  icon={isMenuOpen ? faClose : faBars}
                  className='w-[17.5px] h-[21px] text-white'
                />
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <ul
            className={`list-none font-medium no-underline text-sm px-4 md:hidden transition-all duration-500 ease-in overflow-hidden ${
              isMenuOpen ? 'max-h-32' : 'max-h-0'
            }`}>
            <li className='py-1'>
              <a href='#'>Home</a>
            </li>
            <li className='py-1'>
              <a href='#'>Best Sellers</a>
            </li>
            <li className='py-1'>
              <a href='#'>Questions?</a>
            </li>
            <li className='py-1'>
              <a href='#'>Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Product Showcase Section */}
      <main>
        <section className='px-4 my-4'>
          <div>
            {/* Product Title */}
            <div>
              <h1 className='text-[21px] font-bold'>Lumin Care™ Fat Melting Miracle</h1>
            </div>
            {/* Prodct Review */}
            <div className='flex items-center mb-1'>
              <div className='w-[108px] ml-[-10px]'>
                <Image
                  src='/assets/images/five-stars.png'
                  width={108}
                  height={32}
                  objectFit='contain'
                  alt='five stars'
                  layout='responsive'
                />
              </div>
              <span className='text-[17px]'>4.8 (2736 Verified Reviews)</span>
            </div>
            {/* Price */}
            <div className='flex text-[19px] gap-[5px] font-bold'>
              <span className='text-theme-main'>Rs. 899.00</span>
              <span className='text-gray-400 line-through'>Rs. 1,800.00</span>
            </div>
          </div>
        </section>

        {/* Carousel */}
        <section className='px-4 my-4'>
          <Carousel>
            <CarouselItem>
              <div className='px-1'>
                <div className='h-32 bg-red-700 text-white'>RED</div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='px-1'>
                <div className='h-32 bg-green-700 text-white '>Green</div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='px-1'>
                <div className='h-32 bg-blue-700 text-white '>Blue</div>
              </div>
            </CarouselItem>
          </Carousel>
        </section>

        {/* Trust Section */}
        <section className='px-4 my-4'>
          <div className='flex justify-between'>
            <div className='flex items-center gap-1'>
              <span className='w-8 h-7'>
                <Image
                  src='/assets/images/TrustIcon_clinically_studied.png'
                  width={30}
                  height={32}
                  objectFit='contain'
                  alt='five stars'
                  layout='responsive'
                />
              </span>
              <span className='pt-1'>
                <p className='text-xs'>Clinically Studied</p>
              </span>
            </div>
            <div className='flex items-center gap-1'>
              <span className='w-8 h-7'>
                <Image
                  src='/assets/images/TrustIcon_No_SIde_Effect.png'
                  width={30}
                  height={32}
                  objectFit='contain'
                  alt='five stars'
                  layout='responsive'
                />
              </span>
              <span className='pt-1'>
                <p className='text-xs'>No Side effects</p>
              </span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='px-4 my-4'>
          <button className='px-6 py-4 bg-theme-main rounded-md text-white w-full hover:bg-theme-main-dark transition-colors duration-200 ease-in'>
            <div className='flex justify-center items-center gap-2'>
              <span>
                <FontAwesomeIcon icon={faCartShopping} className='w-4 h-6' />
              </span>
              <span className='text-white font-bold'>Add to Cart</span>
            </div>
          </button>
          <div className='h-fit px-4 my-2'>
            <Image
              src='/assets/images/trust-badges-lumincare.jpg'
              width={260}
              height={44}
              objectFit='contain'
              alt='five stars'
              layout='responsive'
            />
          </div>
          <div className='w-full px-6 py-4 bg-theme-main-light rounded-md' />
        </section>

        {/* FAQ */}
        <section className='px-4 my-4'>
          <div className='rounded-lg bg-theme-main'>
            <Accordion>
              <Accordion.Header>Does the Fat Melting Miracle really work?</Accordion.Header>
              <Accordion.Body>
                Absolutely! This revolutionary oil has been <strong>scientifically proven</strong>{' '}
                to instantly get rid of even the most stubborn fat. You'll be amazed at the
                transformative results it delivers!
              </Accordion.Body>
            </Accordion>
            <Accordion>
              <Accordion.Header>How long does it take to see noticeable results?</Accordion.Header>
              <Accordion.Body>
                With the Fat Melting Miracle, you'll experience visible results in no time!{' '}
                <strong>In as little as 1 use, you'll witness a dramatic reduction in fat</strong>,
                allowing you to achieve your dream body faster than you ever thought possible.
              </Accordion.Body>
            </Accordion>
            <Accordion>
              <Accordion.Header>
                Is this product safe to use and are there any side effects?
              </Accordion.Header>
              <Accordion.Body>
                The Fat Melting Miracle has been meticulously formulated with your well-being in
                mind.{' '}
                <strong>
                  It is free from any harmful ingredients or chemicals that could cause side effects
                </strong>
                . Our product has undergone rigorous testing and meets the highest quality
                standards.
              </Accordion.Body>
            </Accordion>
            <Accordion>
              <Accordion.Header>Can this product be used by both men and women?</Accordion.Header>
              <Accordion.Body>
                Yes, the Fat Melting Miracle is suitable for both men and women who are looking to
                effectively reduce stubborn fat. It is a versatile solution that can cater to the
                needs and goals of individuals of all genders.
              </Accordion.Body>
            </Accordion>

            <Accordion>
              <Accordion.Header>Is it suitable for all body types?</Accordion.Header>
              <Accordion.Body>
                Yes, the Fat Melting Miracle is suitable for all body types. Regardless of your body
                shape or size, this powerful formula works synergistically to melt away fat and
                reveal a more toned and sculpted physique.
              </Accordion.Body>
            </Accordion>

            <Accordion>
              <Accordion.Header>Are the results permanent?</Accordion.Header>
              <Accordion.Body>
                Absolutely! The Fat Melting Miracle works by targeting and eliminating fat cells.
                Once these fat cells are melted away, they are gone for good. You can confidently
                enjoy your transformed body without worrying about the fat returning.
              </Accordion.Body>
            </Accordion>

            <Accordion>
              <Accordion.Header>Can this product be used on specific areas?</Accordion.Header>
              <Accordion.Body>
                Yes! The Fat Melting Miracle is designed to target those troublesome areas where fat
                tends to accumulate, such as the abdomen, thighs, hips, and arms. You can use it on
                specific areas to sculpt and contour your body to perfection.
              </Accordion.Body>
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  )
}
export default Home
