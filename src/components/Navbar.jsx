import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [buttonsClicked, setButtonsClicked] = useState(false);

  const handleLoginRegisterClick = () => {
    setButtonsClicked(true);
  };

  return (
    <>
      <div className="pt-8 border border-b-red pb-8 relative">
        <nav className="inline list-none pt-0.5">
          <ul>
            <li className='text-[35px] font-mono font-semibold inline px-6 pr-[700px]'>Ref-A-Doc</li>
            
            {/* Conditionally render Login and Register buttons */}
            {location.pathname !== '/login' && location.pathname !== '/register' && (
              <>
                <Link to='login'><button onClick={handleLoginRegisterClick} className='inline mx-10 px-7 py-1.5 rounded-xl bg-red text-[20px] text-white hover:bg-lightred'>Login</button></Link>
                <Link to='/register'><button onClick={handleLoginRegisterClick} className='inline ml1.5 px-5 py-1.5 rounded-xl bg-red text-[20px] text-white hover:bg-lightred'>Register</button></Link>        
              </>
            )}
            
            {/* Render Home and About links with right position */}
            <Link to ='/' style={{ position: 'absolute', right: buttonsClicked ? '200px' : '0',top: buttonsClicked?'43px':'0' }}><li className={`inline px-7 pt-2 text-[20px]`}>Home</li></Link>
            <Link to='/about' style={{ position: 'absolute', right: buttonsClicked ? '100px' : '0',top: buttonsClicked?'43px':'0'  }}><li className={`inline px-7 pt-2 text-[20px]`}>About</li></Link>
           
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
