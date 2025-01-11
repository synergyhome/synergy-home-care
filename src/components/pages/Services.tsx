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
  {
    title: "Daily Tasks & Shared Living",
    description: "Our Daily Tasks & Shared Living service supports individuals living in shared or group homes, offering assistance with daily activities such as meal planning, housekeeping, and personal care. The service fosters a collaborative living environment, where individuals can live together and support each other while maintaining personal independence.",
    image: "./images/services/7.jpg",
  },
  {
    title: "Community Nurse",
    description: "The Community Nurse service provides professional healthcare support at home or within the community. Nurses offer medical assistance, health monitoring, medication management, and general healthcare guidance, ensuring that individuals maintain their well-being and access the care they need.",
    image: "./images/services/8.jpg",
  },
  {
    title: "Travel & Transport Assistance",
    description: "Our Travel & Transport Assistance service offers reliable transport solutions for individuals to access appointments, social events, or community activities. This service ensures that individuals can travel safely and comfortably, with assistance when necessary to get from one place to another.",
    image: "./images/services/9.jpg",
  },
  {
    title: "Accommodation & Tenancy",
    description: "Accommodation & Tenancy services provide support for individuals seeking housing or needing assistance with tenancy matters. This includes help with finding suitable accommodation, managing rental agreements, and ensuring that living arrangements are safe, stable, and suited to personal needs.",
    image: "./images/services/10.jpg",
  }
];

const Services = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      
      <main className="flex-grow-1">
        {/* Services Section */}
        <section className="py-5">
          <div className="container px-4">
            <h2 className="h1 text-center mb-4 text-primary">
              Our Range Of Services Include
            </h2>
            <p className="text-left mb-4 text-muted mx-auto">
              We recognize that each client has unique disabilities and individual needs. That’s why we customize our services to align with the specific goals and requirements of both clients and their families. Share your needs and plans with us, and we will pair you with the ideal caregiver to meet all your home care needs.
            </p>
            <div className="row g-4">
              {services.map((service, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="card-img-top"
                      style={{height: "200px", objectFit: "cover"}}
                    />
                    <div className="card-body">
                      <h3 className="h5 card-title text-primary">{service.title}</h3>
                      <p className="card-text text-muted">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;