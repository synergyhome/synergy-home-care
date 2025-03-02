import React from 'react';
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const About = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      
      <main className="flex-grow-1">
        {/* Hero Section */}
        <section className="bg-primary text-white py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto text-center">
                <h1 className="display-4 fw-bold mb-4">About Us</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="mx-auto" style={{ maxWidth: "800px" }}>
              <div className="text-muted">
                <h2 className="h1 text-center mb-4 text-primary">Our Story</h2>
                <p className="mb-4">
                  Synergy Home Care is a leading disability support service provider based in Melbourne, founded by experienced professionals with over 20 years of expertise in the healthcare and disability sectors.
                </p>
                <p className="mb-4">
                  We are committed to simplifying disability support services while delivering quality care that empowers you to live your best life. We ensure that our staff members are thoroughly trained, supported, and equipped to provide the best care possible.
                </p>
                <p className="mb-4">
                  At Synergy Home Care, we go above and beyond to ensure you receive the highest quality care. Our team is dedicated to helping you live a fulfilling, respected, and happy life in alignment with your values and needs. We believe in empowering clients and their families to overcome challenges effortlessly.
                </p>
                <p className="mb-4">
                  Our support workers are qualified, skilled, and experienced within the disability industry. All staff undergo comprehensive background checks, and many speak multiple languages to ensure we can meet your diverse needs. They are here to care for you with genuine compassion and open arms.
                </p>
                <p className="mb-4">
                  We work closely with you to design and deliver a support plan that meets your specific needs, helping you achieve your goals every step of the way.
                </p>

                <div className="row mb-5">
                  <div className="col-md-6 order-md-2">
                    <h2 className="h1 text-primary">Our Vision</h2>
                    <p>
                      Our vision is to redefine home care by providing personalized services that are thoughtfully tailored to meet each participant's unique needs, preferences, and goals. We are committed to fostering an environment where individuals feel respected, valued, and empowered to live their lives with dignity and independence. By focusing on compassionate care, innovative solutions, and continuous improvement, we strive to ensure the highest level of support and well-being for every individual we serve.
                    </p>
                  </div>
                  <div className="col-md-6 order-md-1">
                    <img 
                      src="./images/about/vision.png" 
                      alt="Our Vision" 
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-md-6">
                    <h2 className="h1 text-primary">Our Mission</h2>
                    <p>
                      Our mission is to be the trusted provider of choice for disability care services, delivering exceptional support that empowers individuals to lead fulfilling and independent lives. We are dedicated to creating an innovative and responsive environment that goes beyond addressing physical and emotional needs, tackling the unique challenges posed by cultural, linguistic, and social diversity. Through a person-centered approach, we aim to foster inclusivity, understanding, and respect, ensuring every individual feels heard, valued, and supported. By continuously improving our services and embracing new ideas, we strive to set a benchmark for quality and compassion in the disability care industry.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <img 
                      src="./images/about/mission.png" 
                      alt="Our Mission" 
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;