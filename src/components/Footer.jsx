import '../styles.scss';

export default function Footer() {
  return (
    <>
    <footer className='footer'>
      <p>
        Building a Full Stack Application with Node/Express Backend and ReactJS Frontend     
      </p> 
      <div className="left-footer-container">
    <div className='container-footer'> 
       <button className='button-footer'>Topic</button>
       <button className='button-footer'>Page</button>
       <button className='button-footer'>Page</button>
       <button className='button-footer'>Page</button>
     </div>
     <div className='container-footer'> 
       <button className='button-footer'>Topic</button>
       <button className='button-footer'>Page</button>
       <button className='button-footer'>Page</button>
       <button className='button-footer'>Page</button>
     </div>
     <div className='container-footer'> 
       <button className='button-footer'>Topic</button>
       <button className='button-footer'>Page</button>
       <button className='button-footer'>Page</button>
       <button className='button-footer'>Page</button>
     </div>
     </div>
     
     
    </footer>
     <div className='container-footer2'>
     <button> <img className="photo" src="https://biomatec.net/wp-content/uploads/2018/04/facebook2.png"></img></button>
   <button> <img className="photo" src="https://www.iconninja.com/files/595/483/824/linkedin-icon.png"></img></button>
   <button> <img className="photo" src="https://nottriangles.com/wp-content/uploads/2018/05/Youtube-Icon.png"></img></button>
   <button> <img className="photo" src="https://icon-library.com/images/instagram-camera-icon/instagram-camera-icon-29.jpg"></img></button>
     </div>
     </>
    
    
  );
}
