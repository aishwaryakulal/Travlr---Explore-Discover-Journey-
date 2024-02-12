// import React from 'react'
// import {Link} from 'react-router-dom'
// const Footer = () => {
//   return (
//     <footer class="footer">
//     <h3 class="footer__title">Follow Us</h3>

//     <div class="footer__social">
//       <Link to="hhtp://www.facebook.com" class="footer__social-link"
//         ><i class="bx bxl-facebook"></i
//       ></Link>
//       <Link to="http://www.instagram.com" class="footer__social-link"
//         ><i class="bx bxl-instagram"></i
//       ></Link>
//       <Link to="http://www.twitter.com" class="footer__social-link"
//         ><i class="bx bxl-tiktok"></i
//       ></Link>
//     </div>
//   </footer>
//   )
// }

// export default Footer

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__title">Follow Us</h3>

      <div className="footer__social">
        <Link to="http://www.facebook.com" className="footer__social-link">
          <i className="bx bxl-facebook"></i>
        </Link>
        <Link to="http://www.instagram.com" className="footer__social-link">
          <i className="bx bxl-instagram"></i>
        </Link>
        <Link to="http://www.tiktok.com" className="footer__social-link">
          <i className="bx bxl-tiktok"></i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

