import { useState } from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaValue) {
      toast.error("Please complete the CAPTCHA");
      return;
    }
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", topic: "", message: "" });
    setCaptchaValue(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      
      <main className="flex-grow-1">
        <section className="py-5">
          <div className="container">
            <h2 className="h1 text-center mb-5 text-primary">
              Contact Us
            </h2>
            <div className="row g-4">
              {/* Contact Information */}
              <div className="col-md-6">
                <h2 className="h4 text-primary mb-4">Get in Touch</h2>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex gap-3">
                    <MapPin className="text-primary flex-shrink-0" />
                    <div>
                      <h3 className="h6 mb-2">Address</h3>
                      <p className="text-muted mb-0">
                        36 Goodenia Ave<br />
                        Manor Lakes VIC 3024
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
                      <p className="text-muted mb-0">info@synergyhomecare.com</p>
                    </div>
                  </div>

                  <div>
                  <h2 className="h4 text-primary mb-4">Follow Us</h2>
                    <div className="d-flex gap-3">
                      <a href="#" className="text-primary">
                        <Facebook size={24} />
                      </a>
                      <a href="#" className="text-primary">
                        <Twitter size={24} />
                      </a>
                      <a href="#" className="text-primary">
                        <Instagram size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="col-md-6">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h2 className="h3 text-primary mb-4">Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="topic" className="form-label">Topic</label>
                        <select
                          className="form-select"
                          id="topic"
                          name="topic"
                          value={formData.topic}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a topic</option>
                          <option value="general">General Inquiry</option>
                          <option value="services">Services</option>
                          <option value="pricing">Pricing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                        ></textarea>
                      </div>

                      <div className="mb-3">
                        <ReCAPTCHA
                          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                          onChange={handleCaptchaChange}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                      >
                        Send Message
                      </button>
                    </form>
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

export default Contact;