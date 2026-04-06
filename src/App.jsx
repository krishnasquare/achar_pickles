import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">Achar&Co.</div>
          
          <button 
            type="button" 
            className="menu-toggle"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Toggle navigation menu"
          >
            {showMenu ? '✕' : '☰'}
          </button>

          <div className={`nav-links ${showMenu ? 'active' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => setShowMenu(false)}>Home</a>
            <a href="#products" className="nav-link" onClick={() => setShowMenu(false)}>Our Pickles</a>
            <a href="#process" className="nav-link" onClick={() => setShowMenu(false)}>Process</a>
            <a href="#contact" className="nav-link" onClick={() => setShowMenu(false)}>Contact</a>
            <button type="button" className="btn-primary mobile-only">Shop Now</button>
          </div>
          <button type="button" className="btn-primary desktop-only">Shop Now</button>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-badge">100% Authentic Indian Flavors</span>
            <h1 className="hero-title">Timeless Taste in Every Jar.</h1>
            <p className="hero-desc">
              Experience the unmatched depth of authentic Indian Pickles. Handcrafted with traditional grandma's recipes, premium spices, and boundless love.
            </p>
            <button type="button" className="btn-primary">Explore Our Range</button>
          </div>
          <div className="hero-image-wrapper">
            <img src="/images/hero.png" alt="Traditional Indian Pickles" className="hero-image" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1627308595171-d1b5d67817eb?q=80&w=1000&auto=format&fit=crop'} />
            <div className="hero-image-overlay"></div>
          </div>
        </div>
      </section>

      <section id="products" className="products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Collection</span>
            <h2 className="section-title">A Symphony of Spices</h2>
          </div>
          
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image-container">
                <img src="/images/mango.png" alt="Mango Pickle" className="product-image" onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1596647970717-3d9fc2c1e8d9?q=80&w=600&auto=format&fit=crop'} />
              </div>
              <div className="product-content">
                <h3 className="product-title">Spicy Mango</h3>
                <p className="product-desc">The undisputed king of pickles. Sun-dried raw mangoes marinated in cold-pressed mustard oil and aromatic ground spices.</p>
                <button type="button" className="btn-outline">Add to Cart</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1626207174677-709ea6f96dd8?q=80&w=600&auto=format&fit=crop" alt="Lemon Pickle" className="product-image" />
              </div>
              <div className="product-content">
                <h3 className="product-title">Tangy Lemon</h3>
                <p className="product-desc">A burst of citrus paired with roasted fennel and chili. Aged perfectly to bring a zing to your daily meals.</p>
                <button type="button" className="btn-outline">Add to Cart</button>
              </div>
            </div>

            <div className="product-card">
              <div className="product-image-container">
                <img src="https://images.unsplash.com/photo-1589531580980-0c48e778a486?q=80&w=600&auto=format&fit=crop" alt="Mixed Veg Pickle" className="product-image" />
              </div>
              <div className="product-content">
                <h3 className="product-title">Mixed Veggies</h3>
                <p className="product-desc">Carrots, cauliflowers, and green chilies perfectly infused in our signature vinegar and spice blend.</p>
                <button type="button" className="btn-outline">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="features-section">
        <div className="container features-grid">
          <div className="feature-item">
            <div className="feature-icon">🌿</div>
            <h3 className="feature-title">Organic Ingredients</h3>
            <p className="product-desc">We source locally grown, organic vegetables and the finest whole spices.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">☀️</div>
            <h3 className="feature-title">Sun-Dried Perfection</h3>
            <p className="product-desc">Our pickles mature naturally under the sun, enhancing deep, complex flavors.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">👵</div>
            <h3 className="feature-title">Heirloom Recipes</h3>
            <p className="product-desc">Passed down through generations, making every jar a taste of home.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-logo">Achar&Co.</div>
          <p className="footer-text">Bringing traditional Indian flavors to your table, one jar at a time.</p>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Achar&Co. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
