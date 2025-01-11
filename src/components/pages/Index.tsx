import { Link } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const services = [
  {
    title: "Personal Activities Assistance",
    description: "Our Personal Activities Assistance service is designed to support individuals in completing daily personal tasks, such as grooming, dressing, and hygiene. This service is tailored to provide the necessary help for individuals to maintain independence and feel comfortable in their everyday routines.",
    image: "./images/services/1.png",
  },
  {
    title: "Personal Activities Assistance (High)",
    description: "For individuals requiring a higher level of support, our High Personal Activities Assistance service offers more comprehensive help with personal care. This includes assistance with mobility, specialized hygiene care, and other complex personal needs, ensuring individuals receive the attention and care necessary for their well-being.",
    image: "./images/services/2.png",
  },
  {
    title: "Group/Centre Activities",
    description: "Our Group/Centre Activities service provides engaging and social experiences within a group setting. These activities are designed to encourage teamwork, communication, and community bonding, while also providing entertainment and skill-building opportunities. It’s a great way to stay active and connected with others.",
    image: "./images/services/3.png",
  },
  {
    title: "Community Participation",
    description: "The Community Participation service promotes active involvement in local events, activities, and social opportunities. It encourages individuals to engage with their community, fostering a sense of belonging and providing the chance to explore new experiences, meet new people, and participate in social life.",
    image: "./images/services/4.png",
  },
  {
    title: "Household Tasks",
    description: "Our Household Tasks service assists with everyday domestic duties, including cleaning, laundry, meal preparation, and home maintenance. This support ensures that individuals can live in a safe, tidy environment without the stress of managing these tasks alone.",
    image: "./images/services/5.png",
  },
  {
    title: "Life Skills Development",
    description: "Life Skills Development focuses on empowering individuals with the essential skills needed for independent living. This may include learning time management, budgeting, cooking, personal care routines, and decision-making, all aimed at enhancing confidence and autonomy.",
    image: "./images/services/6.png",
  },
];

const coreValues =  [
  {
    title: "Respect",
    description: "At the heart of our home care services is a commitment to respect. We honor the dignity, individuality, and unique needs of every client, treating them with the utmost care and consideration. Respect means actively listening, valuing personal preferences, and fostering an environment where clients feel safe, heard, and valued.",
    image: "./images/values/respect.png"
  },
  {
    title: "Quality",
    description: "Quality is the foundation of everything we do in home care. We are dedicated to delivering exceptional, personalized services that meet the highest standards of excellence. Our commitment to quality means providing compassionate care, paying attention to every detail, and continuously striving to improve our practices.",
    image: "./images/values/quality.png"
  },
  {
    title: "Choice",
    description: "Choice is a cornerstone of our home care philosophy. We empower clients to make decisions about their care, respecting their preferences, routines, and goals. By offering flexible, personalized care plans, we ensure that each individual maintains control over their life and receives support tailored to their unique needs.",
    image: "./images/values/choice.png"
  },
];

const Index = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      
      <main className="flex-grow-1">
        {/* Banner Section */}
        <div 
          className="banner"
          style={{backgroundImage: "url('./images/banners/index.jpg')"}}
        >
          <div className="banner-overlay">
            <div className="text-center text-white px-3">
              <h1 className="display-4 fw-bold mb-4 fade-in">Synergy Home Care</h1>
              <p className="lead mx-auto fade-in" style={{maxWidth: "600px"}}>
                Personalized care that supports your goals, right at home.
              </p>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <section className="py-5 bg-white">
          <div className="container px-4">
            <h2 className="h2 text-center mb-4 text-primary">
              Welcome to Synergy Home Care
            </h2>
            <p className="text-left mb-4 text-muted mx-auto">
              Synergy Home Care is a trusted provider of disability support and care services based in Melbourne, Victoria. Our mission is to deliver safe, high-quality support to individuals with disabilities and their families. We strive to offer compassionate, respectful care that empowers our clients to achieve their life goals.
            </p>
            <p className="text-left mb-5 text-muted mx-auto">
              We are dedicated to making disability support services simple and accessible, ensuring that you receive the care that helps you live your best life. Let us collaborate with you to tailor and provide the support you need, designed to meet your unique needs and help you achieve your goals.
            </p>

            {/* Core Values Section */}
            <h2 className="h2 text-center mb-4 text-primary">Core Values</h2>
            <div className="row g-4 mb-5">
              {coreValues.map((coreValues, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body">

                    <img 
                      src={coreValues.image} 
                      className="card-img-top" 
                      alt={coreValues.title}
                      style={{height: "200px", objectFit: "contain"}}
                      loading="lazy"
                    />

                      <h3 className="h5 card-title text-primary mb-3">{coreValues.title}</h3>
                      <p className="card-text text-muted">{coreValues.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us Section */}
            <h2 className="h2 text-center mb-4 text-primary">Why Choose Us</h2>
            <p className="text-left mb-4 text-muted mx-auto">
              At Synergy Home Care, we are dedicated to enhancing the lives of our clients and their families through compassionate, personalized, and reliable care. Here's why families trust us to provide exceptional home care services:
            </p>
            
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    <strong>Personalized Care Plans</strong>
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    We understand that every individual is unique, so we tailor our services to meet your specific needs, preferences, and goals. We are here to help.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Experienced and Compassionate Caregivers</strong>
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    Our caregivers are highly trained, background-checked, and chosen for their dedication to providing care with empathy and respect. They are not just caregivers—they are companions who genuinely care about your well-being.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Commitment to Quality</strong>
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    At Synergy Home Care, excellence is our standard. We go above and beyond to ensure that our services exceed expectations, offering reliable and consistent care you can depend on.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <strong>Focus on Independence</strong>
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    We believe in empowering our clients to maintain their independence and dignity. Our services are designed to support your daily activities while respecting your choices and routines.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    <strong>Comprehensive Services</strong>
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    From companionship and personal care to specialized support for chronic conditions or post-hospital recovery, we offer a wide range of services to meet your needs at every stage of life.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    <strong>Family-Centered Approach</strong>
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    We see ourselves as partners in care, working closely with families to provide peace of mind and open communication. Your loved one’s happiness and health are our top priorities.
                  </div>
                </div>
              </div>
            </div>
            <p className="text-left mt-4 mb-4 text-muted mx-auto">
            Choose Synergy Home Care for a trusted partner that truly cares. Let us help you or your loved one enjoy a safe, fulfilling, and comfortable life at home.
            </p>

            {/* Services Section */}
            <h2 className="h2 text-center mb-4 text-primary">Services We Offer</h2>
            <p className="text-left mb-5 text-muted mx-auto">
              We recognize that each client has unique disabilities and needs, which is why we customize our services to align with the individual goals and requirements of both clients and their families. Share your plans and needs with us, and we will connect you with the ideal caregiver to meet all your home care needs.
            </p>
            <div className="row g-4 mb-5">
              {services.map((service, index) => (
                <div key={index} className="col-12 col-sm-6 col-lg-4">
                  <div className="card h-100 shadow-sm">
                    <img 
                      src={service.image} 
                      className="card-img-top" 
                      alt={service.title}
                      style={{height: "200px", objectFit: "cover"}}
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h3 className="h5 card-title text-primary mb-3">{service.title}</h3>
                      <p className="card-text text-muted">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/services"
                className="btn btn-primary btn-lg"
              >
                View All Services
              </Link>
            </div>

            {/*Contact Us*/}
            <h2 className="h2 text-center mt-5 mb-4 text-primary">Get in Touch with Us Today!</h2>
            <p className="text-center mb-5 text-muted mx-auto">
              Have questions or need more information? We're here to help! Visit our Contact Us page to get in touch with our friendly team. Whether you're looking for personalized care options or just want to learn more about our services, we're ready to assist you every step of the way.
            </p>
            <div className="text-center">
              <Link
                to="/contact"
                className="btn btn-primary btn-lg"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;