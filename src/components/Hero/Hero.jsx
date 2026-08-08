import './Hero.css';

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

function Hero() {
  const greeting = getGreeting();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          {greeting}, I'm{' '}
          <span className="highlight">Abhishek B R</span> 👋
        </h1>

        <p className="tagline">
          I build beautiful, fast, accessible websites.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;