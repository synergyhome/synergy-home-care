import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-4">
            <h3 className="h5 mb-3">Contact Us</h3>
            <p className="mb-1">36 Goodenia Ave</p>
            <p className="mb-1">Manor Lakes VIC 3024</p>
            <p className="mb-1">Phone: 1300 033 635</p>
            <p>Email: info@synergyhomecare.com</p>
          </div>
          
          <div className="col-md-4">
            <h3 className="h5 mb-3">Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="col-md-4">
            <h3 className="h5 mb-3">Follow Us</h3>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-top border-white-50 text-center">
        <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
          <img 
            src="./images/ndis-logo.png" 
            alt="I Love NDIS" 
            className="img-fluid"
            style={{maxHeight: "60px", borderRadius: "50%"}}
          />
        </div>


          <p className="mb-0">&copy; {new Date().getFullYear()} Synergy Home Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;