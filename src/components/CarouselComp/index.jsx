// import Carousel from 'react-bootstrap/Carousel';
import {   useState } from 'react';
import './index.css' ;

function CarouselComp() {

  // const carouselList =  { 
  //   carousel1Code : `{/*-----carousel--1----- */}
  //                     <div>
  //                       <video autoPlay loop playsInline muted className="carousel-video" alt="First slide" > 
  //                         <source  src='https://em-website.s3.amazonaws.com/videos/Frontpage.mp4' type='video/mp4' />
  //                       </video>
  //                       <div className='carousel-black-gradient'></div>
  //                       <div className='carousel-overlay'>
  //                         <h1 className='carousel-overlay-heading'>Explore. Build. Scale.</h1>
  //                         <p className='carousel-overlay-para'>Smart engineering for sustainable, no-risk implementation</p>
  //                         <button className='carousel-overlay-button'>LEARN MORE</button>
  //                       </div>
  //                     </div>` , 
  // carousel2Code:`{/*-----carousel--2----- */}
  //               <div>
  //                 <video autoPlay loop playsInline muted className="carousel-video" alt="First slide" > 
  //                   <source  src='https://em-website.s3.amazonaws.com/videos/automation.mp4' type='video/mp4' />
  //                 </video>
  //                 <div className='carousel-black-gradient'></div>
  //                 <div className='carousel-overlay'>
  //                   <h1 className='carousel-overlay-heading'>Digitalize. Transform. Secure.</h1>
  //                   <p className='carousel-overlay-para'>Improve and automate business process using emerging technologies</p>
  //                   <button className='carousel-overlay-button'>Learn more</button>
  //                 </div>
  //               </div>`, 
  // carousel3Code:`{/*-----carousel--3----- */}
  //                 <div>
  //                   <video autoPlay loop playsInline muted className="carousel-video" alt="First slide" > 
  //                     <source  src='https://em-website.s3.amazonaws.com/videos/design.mp4' type='video/mp4' />
  //                   </video>
  //                   <div className='carousel-black-gradient'></div>
  //                   <div className='carousel-overlay'>
  //                     <h1 className='carousel-overlay-heading'>Intuit. Create. Initiate.</h1>
  //                     <p className='carousel-overlay-para'>Evolve and shape creative super solutions that resonate with expectations</p>
  //                     <button className='carousel-overlay-button'>Learn more</button>
  //                   </div>
  //                 </div>`, 
  // carousel4Code:`{/*-----carousel--4----- */}
  //               <div>
  //                 <video autoPlay loop playsInline muted className="carousel-video" alt="First slide" > 
  //                   <source  src='https://em-website.s3.amazonaws.com/videos/application.mp4' type='video/mp4' />
  //                 </video>
  //                 <div className='carousel-black-gradient'></div>
  //                 <div className='carousel-overlay'>
  //                   <h1 className='carousel-overlay-heading'>Conceive. Build. Commission.</h1>
  //                   <p className='carousel-overlay-para'>Architect and deploy highly scalable and reusable design systems</p>
  //                   <button className='carousel-overlay-button'>Learn more</button>
  //                 </div>
  //               </div>`,
  //   carousel5Code:`{/*-----carousel--5----- */}
  //                   <div>
  //                     <video autoPlay loop playsInline muted className="carousel-video" alt="First slide" > 
  //                       <source  src='https://em-website.s3.amazonaws.com/videos/ai.mp4' type='video/mp4' />
  //                     </video>
  //                     <div className='carousel-black-gradient'></div>
  //                     <div className='carousel-overlay'>
  //                       <h1 className='carousel-overlay-heading'>Reinvent. Recalibrate. Respond.</h1>
  //                       <p className='carousel-overlay-para'>Unleash the power of AI and Smart tech for multi-vertical impact</p>
  //                       <button className='carousel-overlay-button'>Learn more</button>
  //                     </div>
  //                   </div>`
  //     }
              
//   const carousel1Code =() => (
//     <div>
//       <video autoPlay loop playsInline muted className="carousel-video" alt="First slide" > 
//         <source  src='https://em-website.s3.amazonaws.com/videos/Frontpage.mp4' type='video/mp4' />
//       </video>
//       <div className='carousel-black-gradient'></div>
//       <div className='carousel-overlay'>
//         <h1 className='carousel-overlay-heading'>Explore. Build. Scale.</h1>
//         <p className='carousel-overlay-para'>Smart engineering for sustainable, no-risk implementation</p>
//         <button className='carousel-overlay-button'>LEARN MORE</button>
//       </div>
//     </div>)
// const carousel2Code =() => (
//     // {/*-----carousel--2----- */}
//     <div>
//     <video autoPlay loop playsInline muted className="carousel-video" alt="First slide" > 
//       <source  src='https://em-website.s3.amazonaws.com/videos/automation.mp4' type='video/mp4' />
//     </video>
//     <div className='carousel-black-gradient'></div>
//     <div className='carousel-overlay'>
//       <h1 className='carousel-overlay-heading'>Digitalize. Transform. Secure.</h1>
//       <p className='carousel-overlay-para'>Improve and automate business process using emerging technologies</p>
//       <button className='carousel-overlay-button'>Learn more</button>
//     </div>
//   </div>)
// const carousel3Code =() => (
//     // {/*-----carousel--3----- */}
//     <div>
//     <video autoPlay loop playsInline muted className="carousel-video" alt="First slide" > 
//       <source  src='https://em-website.s3.amazonaws.com/videos/design.mp4' type='video/mp4' />
//     </video>
//     <div className='carousel-black-gradient'></div>
//     <div className='carousel-overlay'>
//       <h1 className='carousel-overlay-heading'>Intuit. Create. Initiate.</h1>
//       <p className='carousel-overlay-para'>Evolve and shape creative super solutions that resonate with expectations</p>
//       <button className='carousel-overlay-button'>Learn more</button>
//     </div>
//   </div>)
// const carousel4Code =() => (
//     // {/*-----carousel--4----- */}
//     <div>
//     <video autoPlay loop playsInline muted className="carousel-video" alt="First slide" > 
//       <source  src='https://em-website.s3.amazonaws.com/videos/application.mp4' type='video/mp4' />
//     </video>
//     <div className='carousel-black-gradient'></div>
//     <div className='carousel-overlay'>
//       <h1 className='carousel-overlay-heading'>Conceive. Build. Commission.</h1>
//       <p className='carousel-overlay-para'>Architect and deploy highly scalable and reusable design systems</p>
//       <button className='carousel-overlay-button'>Learn more</button>
//     </div>
//   </div>)
// const carousel5Code =() => (
//     // {/*-----carousel--5----- */}
//     <div>
//     <video autoPlay loop playsInline muted className="carousel-video" alt="First slide" > 
//       <source  src='https://em-website.s3.amazonaws.com/videos/ai.mp4' type='video/mp4' />
//     </video>
//     <div className='carousel-black-gradient'></div>
//     <div className='carousel-overlay'>
//       <h1 className='carousel-overlay-heading'>Reinvent. Recalibrate. Respond.</h1>
//       <p className='carousel-overlay-para'>Unleash the power of AI and Smart tech for multi-vertical impact</p>
//       <button className='carousel-overlay-button'>Learn more</button>
//     </div>
//   </div>)

  const carouselData = {
    carousel1:{src:'https://em-website.s3.amazonaws.com/videos/Frontpage.mp4',heading:'Explore. Build. Scale.',para:'Smart engineering for sustainable, no-risk implementation'},
    carousel2:{src:'https://em-website.s3.amazonaws.com/videos/automation.mp4',heading:'Digitalize. Transform. Secure.',para:'Improve and automate business process using emerging technologies'},
    carousel3:{src:'https://em-website.s3.amazonaws.com/videos/design.mp4',heading:'Intuit. Create. Initiate.',para:'Evolve and shape creative super solutions that resonate with expectations'},
    carousel4:{src:'https://em-website.s3.amazonaws.com/videos/application.mp4',heading:'Conceive. Build. Commission.',para:'Architect and deploy highly scalable and reusable design systems'},
    carousel5:{src:'https://em-website.s3.amazonaws.com/videos/ai.mp4',heading:'Reinvent. Recalibrate. Respond.',para:'Unleash the power of AI and Smart tech for multi-vertical impact'},
}

  const [displayCarouselData, setCarosuel] = useState(carouselData.carousel1)
  const {src,heading,para} = displayCarouselData ;


const onSelectCarousel = (e) =>{

  if (e === 'carousel1'){
    setCarosuel(carouselData.carousel1)
  }
  else if (e === 'carousel2'){
    setCarosuel(carouselData.carousel2)
  }
  else if (e === 'carousel3'){
    setCarosuel(carouselData.carousel3)
  }
  else if (e === 'carousel4'){
    setCarosuel(carouselData.carousel4)
  }
  else if (e === 'carousel5'){
    setCarosuel(carouselData.carousel5)
  }

}

  
  return (
    <div className='carousel-template'>
    
    <div className='carousel-indicator-list'>
      
      {/*-----carousel-indicator-1----- */}
      <div className='carousel-indicator-container' value="carousel1" onClick={() => onSelectCarousel('carousel1')} onMouseOver={() => onSelectCarousel('carousel1')} > 
        <div className='carousel-indicator' ></div>
      </div>

      {/*-----carousel-indicator-2----- */}
      <div className='carousel-indicator-container'  onClick={() => onSelectCarousel('carousel2')} onMouseOver={() => onSelectCarousel('carousel2')} >
        <div className='carousel-indicator' ></div>
      </div>

      {/*-----carousel-indicator-3----- */}
      <div className='carousel-indicator-container'  onClick={() => onSelectCarousel('carousel3')} onMouseOver={() => onSelectCarousel('carousel3')} >
        <div className='carousel-indicator' ></div>
      </div>

      {/*-----carousel-indicator-4----- */}
      <div className='carousel-indicator-container' onClick={() => onSelectCarousel('carousel4')} onMouseOver={() => onSelectCarousel('carousel4')}>
        <div className='carousel-indicator' ></div>
      </div>

      {/*-----carousel-indicator-5----- */}
      <div className='carousel-indicator-container'  onClick={() => onSelectCarousel('carousel5')} onMouseOver={() => onSelectCarousel('carousel5')}>
        <div className='carousel-indicator' ></div>
      </div>
    </div>

    <div className='carousel-video-list'>
   
      <div className='carousel-black-gradient'></div>
      <video autoPlay loop playsInline muted className="carousel-video" alt="First slide" key={src}> 
        <source  src={src} type='video/mp4' />
      </video>
      <div className='carousel-overlay'>
        <h1 className='carousel-overlay-heading'>{heading}</h1>
        <p className='carousel-overlay-para'>{para}</p>
        <button className='carousel-overlay-button'>LEARN MORE</button>
      </div>
    </div>
 
    </div>
  );
}

export default CarouselComp;