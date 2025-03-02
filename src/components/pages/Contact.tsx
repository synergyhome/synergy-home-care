import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const Contact = () => {
  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
              <p className="lead mb-0">
                We're here to help with all your home care needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* Contact Information */}
            <div className="col-md-6">
              <h2 className="h3 text-primary mb-4">Get in Touch</h2>
              <div className="d-flex flex-column gap-4">
                <div className="d-flex gap-3">
                  <MapPin className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="h6 mb-2">Address</h3>
                    <p className="text-muted mb-0">
                      36 Goodenia Ave, Manor Lakes VIC 3024
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <Phone className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="h6 mb-2">Phone</h3>
                    <p className="text-muted mb-0">1300 033 635</p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <Mail className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="h6 mb-2">Email</h3>
                    <a href="mailto:info@synergyhomecare.com">info@synergyhomecare.com</a>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <Clock className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="h6 mb-2">Working Hours</h3>
                    <p className="text-muted mb-0"><strong>Monday:</strong> 9am - 5pm</p>
                    <p className="text-muted mb-0"><strong>Tuesday:</strong> 9am - 5pm</p>
                    <p className="text-muted mb-0"><strong>Wednesday:</strong> 9am - 5pm</p>
                    <p className="text-muted mb-0"><strong>Thursday:</strong> 9am - 5pm</p>
                    <p className="text-muted mb-0"><strong>Friday:</strong> 9am - 5pm</p>
                    <p className="text-muted mb-0"><strong>Saturday:</strong> Closed</p>
                    <p className="text-muted mb-0"><strong>Sunday:</strong> Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.5956369442565!2d144.5875741758879!3d-37.869750871961564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad69abfa88a1f6f%3A0x3394b26ce7a937f5!2s36%20Goodenia%20Ave%2C%20Manor%20Lakes%20VIC%203024!5e0!3m2!1sen!2sau!4v1740889362096!5m2!1sen!2sau"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Synergy Home Care Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;