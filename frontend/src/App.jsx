import React from 'react'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="#" className="logo">S P Granites</a>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1>Premium Granite Solutions</h1>
          <p>
            Transforming spaces with the finest quality granite and natural stone. 
            We bring elegance and durability to your dream projects with expert craftsmanship 
            and exceptional service.
          </p>
          <a href="#contact" className="cta-button">Get Free Quote</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Kitchen Countertops</h3>
              <p>
                Beautiful, durable granite countertops that transform your kitchen 
                into a stunning culinary workspace. Custom cut and professionally installed.
              </p>
            </div>
            <div className="service-card">
              <h3>Bathroom Vanities</h3>
              <p>
                Elegant granite vanity tops that add luxury and functionality to your 
                bathroom. Water-resistant and easy to maintain.
              </p>
            </div>
            <div className="service-card">
              <h3>Flooring Solutions</h3>
              <p>
                Premium granite and natural stone flooring for homes and commercial spaces. 
                Slip-resistant and long-lasting beauty.
              </p>
            </div>
            <div className="service-card">
              <h3>Custom Fabrication</h3>
              <p>
                Bespoke granite solutions for unique projects. From monuments to architectural 
                features, we bring your vision to life.
              </p>
            </div>
            <div className="service-card">
              <h3>Installation & Repair</h3>
              <p>
                Professional installation services and expert repairs. Our skilled team 
                ensures perfect fit and finish for every project.
              </p>
            </div>
            <div className="service-card">
              <h3>Maintenance Services</h3>
              <p>
                Complete care packages to keep your granite surfaces looking pristine. 
                Regular maintenance and restoration services available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="services">
        <div className="container">
          <h2>Premium Materials</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Black Galaxy</h3>
              <p>
                Stunning black granite with golden speckles that add elegance 
                to any space. Perfect for luxury applications.
              </p>
            </div>
            <div className="service-card">
              <h3>Kashmir White</h3>
              <p>
                Clean, bright white granite with subtle veining. Ideal for 
                modern kitchens and contemporary designs.
              </p>
            </div>
            <div className="service-card">
              <h3>Absolute Black</h3>
              <p>
                Pure black granite with minimal patterns. A timeless choice 
                for sophisticated and minimalist designs.
              </p>
            </div>
            <div className="service-card">
              <h3>Tan Brown</h3>
              <p>
                Rich brown granite with beautiful patterns and warm tones. 
                Perfect for traditional and rustic interiors.
              </p>
            </div>
            <div className="service-card">
              <h3>Red Granite</h3>
              <p>
                Bold red granite varieties that make a statement. Ideal for 
                accent pieces and unique design elements.
              </p>
            </div>
            <div className="service-card">
              <h3>Multi Color Red</h3>
              <p>
                Vibrant multi-colored granite with red base. Perfect for 
                creating focal points and artistic installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Ready to transform your space with premium granite? Contact us today for a free consultation and quote.</p>
          
          <div className="contact-info">
            <div className="contact-item">
              <h3>📞 Phone</h3>
              <p>+91 98765 43210</p>
              <p>+91 87654 32109</p>
            </div>
            <div className="contact-item">
              <h3>📧 Email</h3>
              <p>info@spgranites.com</p>
              <p>sales@spgranites.com</p>
            </div>
            <div className="contact-item">
              <h3>📍 Location</h3>
              <p>123 Granite Street</p>
              <p>Industrial Area, City</p>
              <p>State 123456</p>
            </div>
            <div className="contact-item">
              <h3>⏰ Hours</h3>
              <p>Mon - Sat: 9AM - 6PM</p>
              <p>Sunday: 10AM - 4PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 S P Granites. All rights reserved. | Premium granite solutions for your dream projects.</p>
        </div>
      </footer>
    </div>
  )
}

export default App