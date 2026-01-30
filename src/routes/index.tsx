import { createFileRoute } from '@tanstack/react-router'
import {
  Building2,
  Home,
  Ruler,
  ShowerHead,
  Wrench,
  Layers,
  ArrowRight,
  Award,
  Clock,
  Shield,
  Users,
} from 'lucide-react'

// Animated Components
import Waves from '../components/backgrounds/Waves'
import GridMotion from '../components/backgrounds/GridMotion'
import BlurText from '../components/text/BlurText'
import SplitText from '../components/text/SplitText'
import TiltedCard from '../components/cards/TiltedCard'
import SpotlightCard from '../components/cards/SpotlightCard'
import ContactForm from '../components/ContactForm'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const services = [
    {
      icon: <Building2 size={32} />,
      title: 'Storefront Systems',
      description: 'Complete commercial storefront solutions with aluminum framing and tempered glass.',
    },
    {
      icon: <Layers size={32} />,
      title: 'Curtain Walls',
      description: 'High-performance curtain wall systems for modern commercial architecture.',
    },
    {
      icon: <Home size={32} />,
      title: 'Glass Doors & Partitions',
      description: 'Custom glass doors and interior partitions for residential and commercial spaces.',
    },
    {
      icon: <ShowerHead size={32} />,
      title: 'Shower Enclosures',
      description: 'Frameless and semi-frameless shower enclosures with premium hardware.',
    },
    {
      icon: <Wrench size={32} />,
      title: 'Custom Fabrication',
      description: 'Bespoke aluminum and glass solutions tailored to your unique specifications.',
    },
    {
      icon: <Ruler size={32} />,
      title: 'Measurement & Design',
      description: 'Professional on-site measurement and CAD design services.',
    },
  ]

  const stats = [
    { value: '20+', label: 'Years Experience', icon: <Clock size={24} /> },
    { value: '5,000+', label: 'Projects Completed', icon: <Award size={24} /> },
    { value: '100%', label: 'Licensed & Insured', icon: <Shield size={24} /> },
    { value: '500+', label: 'Happy Clients', icon: <Users size={24} /> },
  ]

  return (
    <div style={{ background: 'var(--bg-white)' }}>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          paddingTop: 'var(--space-4xl)',
          paddingBottom: 'var(--space-4xl)',
        }}
      >
        {/* Animated Waves Background */}
        <Waves
          lineColor="rgba(27, 94, 32, 0.25)"
          waveSpeedX={0.01}
          waveSpeedY={0.003}
          waveAmpX={50}
          waveAmpY={20}
          xGap={14}
          yGap={32}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at center top, rgba(27, 94, 32, 0.1) 0%, transparent 50%), radial-gradient(ellipse at center bottom, rgba(255, 255, 255, 0.9) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
              padding: '0.5rem 1rem',
              background: 'rgba(27, 94, 32, 0.15)',
              border: '1px solid rgba(27, 94, 32, 0.3)',
              borderRadius: 'var(--radius-xl)',
              marginBottom: 'var(--space-xl)',
            }}
          >
            <Award size={16} style={{ color: 'var(--color-superior-green-light)' }} />
            <span
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-superior-green-light)',
                letterSpacing: '0.05em',
              }}
            >
              CHICAGO'S TRUSTED PARTNER SINCE 2006
            </span>
          </div>

          {/* Main Heading with BlurText */}
          <div style={{ marginBottom: 'var(--space-lg)' }}>
            <BlurText
              text="SUPERIOR"
              delay={0.2}
              duration={1}
              animateOnScroll={false}
              as="h1"
              style={{
                fontFamily: 'var(--font-primary)',
                fontWeight: 900,
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                letterSpacing: '-0.04em',
                marginBottom: 'var(--space-xs)',
                background: 'linear-gradient(135deg, var(--color-superior-green) 0%, var(--color-superior-green-light) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            />
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                color: 'var(--text-dark)',
                marginBottom: 'var(--space-xl)',
                letterSpacing: '0.02em',
              }}
            >
              Glass & Aluminum Inc.
            </h2>
          </div>

          {/* Tagline with SplitText */}
          <div style={{ marginBottom: 'var(--space-2xl)' }}>
            <SplitText
              text="20 Years of Chicago Excellence"
              delay={0.8}
              staggerDelay={0.04}
              animateOnScroll={false}
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--text-dark)',
                letterSpacing: '0.02em',
                marginTop: 'var(--space-sm)',
              }}
            />
          </div>

          {/* Description */}
          <p
            style={{
              maxWidth: '700px',
              margin: '0 auto var(--space-2xl)',
              fontSize: '1.25rem',
              lineHeight: 1.7,
            }}
          >
            From commercial storefronts to luxury residential installations, we deliver precision-crafted glass and
            aluminum solutions that define Chicago's architectural landscape.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)', justifyContent: 'center' }}>
            <a href="#contact" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
              Get Your Free Quote
              <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn btn-secondary" style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}>
              Explore Services
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: 'var(--space-2xl)',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--space-sm)',
            color: 'var(--text-dark-dim)',
          }}
        >
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Scroll</span>
          <div
            style={{
              width: '2px',
              height: '40px',
              background: 'linear-gradient(to bottom, var(--border-steel-dark), transparent)',
              animation: 'scrollPulse 2s ease-in-out infinite',
            }}
          />
          <style>{`
            @keyframes scrollPulse {
              0%, 100% { opacity: 0.3; transform: scaleY(1); }
              50% { opacity: 1; transform: scaleY(1.2); }
            }
          `}</style>
        </div>
      </section>

      {/* ============================================
          STATS SECTION
          ============================================ */}
      <section
        style={{
          background: 'var(--bg-elevated)',
          borderTop: '1px solid var(--border-steel)',
          borderBottom: '1px solid var(--border-steel)',
          padding: 'var(--space-2xl) 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-xl)',
              textAlign: 'center',
            }}
          >
            {stats.map((stat, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-sm)' }}>
                <div style={{ color: 'var(--color-superior-green)', marginBottom: 'var(--space-xs)' }}>{stat.icon}</div>
                <div
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: 'var(--text-dark)',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-dark-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          ABOUT / LEGACY SECTION
          ============================================ */}
      <section id="about" style={{ position: 'relative', padding: 'var(--space-4xl) 0', overflow: 'hidden', background: 'var(--bg-concrete)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-3xl)',
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-primary)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-superior-green)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                Our Legacy
              </span>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>
                Two Decades of Chicago <span style={{ color: 'var(--color-superior-green-light)' }}>Craftsmanship</span>
              </h2>
              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Since 2006, Superior Glass & Aluminum has been at the forefront of Chicago's construction industry.
                Founded on principles of precision, reliability, and uncompromising quality, we've grown from a small
                family operation to one of the region's most trusted names in glass and aluminum installation.
              </p>
              <p style={{ marginBottom: 'var(--space-xl)' }}>
                Our team of certified installers brings decades of combined experience to every project, whether it's a
                towering commercial facade or an elegant residential shower enclosure. We're proud to be your local
                experts for high-performance glass and aluminum systems.
              </p>
              <a href="#contact" className="btn btn-primary">
                Start Your Project
                <ArrowRight size={18} />
              </a>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'var(--space-md)',
              }}
            >
              {[
                { title: 'Licensed', subtitle: 'State of Illinois' },
                { title: 'Bonded', subtitle: '$2M Coverage' },
                { title: 'Insured', subtitle: 'Full Liability' },
                { title: 'Certified', subtitle: 'Factory Trained' },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: 'var(--space-lg)',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-steel)',
                    borderRadius: 'var(--radius-lg)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 900,
                      fontSize: '1.25rem',
                      color: 'var(--color-superior-green)',
                      marginBottom: 'var(--space-xs)',
                    }}
                  >
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-dark-dim)' }}>{item.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          COMMERCIAL SECTION
          ============================================ */}
      <section
        id="commercial"
        style={{
          padding: 'var(--space-4xl) 0',
          background: 'linear-gradient(to bottom, var(--bg-white) 0%, var(--bg-concrete) 100%)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-3xl)',
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-primary)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-accent-red)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                Commercial Solutions
              </span>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>
                Heavy-Duty Performance for{' '}
                <span style={{ color: 'var(--color-accent-red-light)' }}>Commercial Projects</span>
              </h2>
              <p style={{ marginBottom: 'var(--space-lg)' }}>
                From high-rise curtain walls to retail storefronts, our commercial division delivers solutions built
                for the demands of modern architecture. We specialize in large-scale installations that meet the most
                rigorous performance specifications.
              </p>
              <div
                style={{
                  padding: 'var(--space-lg)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-steel)',
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: 'var(--space-xl)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, var(--border-steel-dark) 0%, var(--border-steel) 100%)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Building2 size={24} style={{ color: 'var(--text-dark)' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, color: 'var(--text-dark)' }}>
                      High-Performance Systems
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-dark-dim)' }}>Architectural Grade</div>
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: '0.9375rem' }}>
                  Premium aluminum systems engineered for structural integrity, thermal performance, and lasting
                  durability in demanding commercial applications.
                </p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                {['Storefront Systems', 'Curtain Walls', 'Entrance Systems', 'Window Walls', 'Skylights'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        background: 'var(--color-accent-red)',
                        borderRadius: '50%',
                      }}
                    />
                    <span style={{ color: 'var(--text-dark)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <TiltedCard
              containerClassName=""
              className=""
              rotateAmount={10}
              scaleOnHover={1.02}
            >
              <div
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/images/projects/commercial/commercial_card.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-steel)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-2xl)',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(4px)',
                  padding: '1rem',
                  borderRadius: '50%',
                  marginBottom: 'var(--space-xl)'
                }}>
                  <Building2 size={60} style={{ color: 'white' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-md)', color: 'white' }}>Commercial Grade</h3>
                <p style={{ maxWidth: '300px', color: 'rgba(255,255,255,0.9)' }}>
                  Built to withstand Chicago's demanding climate while meeting the highest architectural standards.
                </p>
              </div>
            </TiltedCard>
          </div>
        </div>
      </section>

      {/* ============================================
          RESIDENTIAL SECTION
          ============================================ */}
      <section
        id="residential"
        style={{
          padding: 'var(--space-4xl) 0',
          background: 'var(--bg-white)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-3xl)',
              alignItems: 'center',
            }}
          >
            <TiltedCard
              containerClassName=""
              className=""
              rotateAmount={10}
              scaleOnHover={1.02}
            >
              <div
                style={{
                  background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/images/residential/residential_card.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-steel)',
                  borderRadius: 'var(--radius-xl)',
                  padding: 'var(--space-2xl)',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(4px)',
                  padding: '1rem',
                  borderRadius: '50%',
                  marginBottom: 'var(--space-xl)'
                }}>
                  <Home size={60} style={{ color: 'white' }} />
                </div>
                <h3 style={{ marginBottom: 'var(--space-md)', color: 'white' }}>Residential Elegance</h3>
                <p style={{ maxWidth: '300px', color: 'rgba(255,255,255,0.9)' }}>
                  Transform your home with custom glass solutions that blend beauty with functionality.
                </p>
              </div>
            </TiltedCard>

            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-primary)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-superior-green)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                Residential Excellence
              </span>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>
                High-End Glass for{' '}
                <span style={{ color: 'var(--color-superior-green-light)' }}>Modern Living</span>
              </h2>
              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Elevate your home with our premium residential glass solutions. From stunning shower enclosures to
                elegant glass doors and custom mirrors, we bring the same precision and quality from our commercial
                projects to your living space.
              </p>
              <div
                style={{
                  padding: 'var(--space-lg)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-steel)',
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: 'var(--space-xl)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'linear-gradient(135deg, var(--color-superior-green) 0%, var(--color-superior-green-dark) 100%)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Home size={24} style={{ color: 'white' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, color: 'var(--text-dark)' }}>
                      Premium Residential Glass
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-dark-dim)' }}>Expert Installation</div>
                  </div>
                </div>
                <p style={{ margin: 0, fontSize: '0.9375rem' }}>
                  Premium glass door systems featuring sleek modern designs, smooth operation, and exceptional clarity
                  for discerning homeowners.
                </p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                {['Frameless Shower Enclosures', 'Sliding Glass Doors', 'Glass Railings', 'Custom Mirrors', 'Glass Partitions'].map(
                  (item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                      <div
                        style={{
                          width: '6px',
                          height: '6px',
                          background: 'var(--color-superior-green)',
                          borderRadius: '50%',
                        }}
                      />
                      <span style={{ color: 'var(--text-dark)' }}>{item}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES SECTION
          ============================================ */}
      <section
        id="services"
        style={{
          padding: 'var(--space-4xl) 0',
          background: 'var(--bg-concrete)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            <span
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-primary)',
                fontSize: '0.875rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-superior-green)',
                marginBottom: 'var(--space-md)',
              }}
            >
              What We Do
            </span>
            <h2 style={{ marginBottom: 'var(--space-lg)' }}>Comprehensive Glass & Aluminum Services</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto' }}>
              From concept to completion, we offer a full range of services to meet your glass and aluminum needs.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-lg)',
            }}
          >
            {services.map((service, index) => (
              <SpotlightCard
                key={index}
                className=""
                spotlightColor="rgba(27, 94, 32, 0.12)"
                spotlightSize={350}
              >
                <div style={{ padding: 'var(--space-xl)' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      background: 'linear-gradient(135deg, var(--color-superior-green) 0%, var(--color-superior-green-dark) 100%)',
                      borderRadius: 'var(--radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      marginBottom: 'var(--space-lg)',
                    }}
                  >
                    {service.icon}
                  </div>
                  <h4 style={{ marginBottom: 'var(--space-sm)' }}>{service.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.9375rem' }}>{service.description}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PROJECTS GALLERY SECTION - Interactive GridMotion
          ============================================ */}
      <section
        id="projects"
        style={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Centered Overlay Title */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-primary)',
              fontSize: '1.5rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-superior-green-light)',
              marginBottom: 'var(--space-md)',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            }}
          >
            Our Work
          </span>
          <h2 style={{ marginBottom: 'var(--space-lg)', color: 'white', textShadow: '0 4px 20px rgba(0,0,0,0.7)' }}>
            Project Gallery
          </h2>
          <p style={{ maxWidth: '500px', margin: '0 auto', color: 'rgba(255,255,255,0.8)', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            Move your mouse to explore our portfolio
          </p>
        </div>

        {/* Interactive Grid */}
        <GridMotion
          items={[
            '/images/projects/commercial_storefront1.png',
            '/images/projects/office_interior1.png',
            '/images/projects/curtain_wall1.png',
            '/images/projects/shower_enclosure1.png',
            '/images/projects/office_entrance1.png',
            '/images/projects/glass_railings1.png',
            '/images/projects/commercial_storefront2.png',
            '/images/projects/glass_railings2.png',
            '/images/projects/office_entrance2.png',
            '/images/projects/commercial_storefront7.png',
            '/images/projects/curtain_wall2.png',
            '/images/projects/residential_glass2.png',
            '/images/projects/commercial_storefront3.png',
            '/images/projects/commercial_storefront5.png',
            '/images/projects/office_interior1.png',
            '/images/projects/commercial_storefront6.png',
            '/images/projects/jewelry_interior1.png',
            '/images/projects/commercial_storefront4.png',
            '/images/projects/glass_railings3.png',
            '/images/projects/shower_enclosure6.png',
            '/images/projects/office_entrance3.png',
            '/images/projects/shower_enclosure3.png',
            '/images/projects/office_entrance4.png',
            '/images/projects/office_entrance5.png',
            '/images/projects/office_entrance6.png',
            '/images/projects/shower_enclosure4.png',
            '/images/projects/shower_enclosure5.png',
            '/images/projects/curtain_wall.png',
          ]}
          gradientColor="rgba(27, 94, 32, 0.3)"
        />

        {/* Bottom CTA */}
        <div
          style={{
            position: 'absolute',
            bottom: 'var(--space-2xl)',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10
          }}
        >
          <a href="#contact" className="btn btn-primary">
            Discuss Your Project
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ============================================
          CONTACT SECTION
          ============================================ */}
      <section
        id="contact"
        style={{
          position: 'relative',
          padding: 'var(--space-4xl) 0',
          background: 'var(--bg-white)',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: 'var(--space-3xl)',
              alignItems: 'start',
            }}
          >
            <div>
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-primary)',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-accent-red)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                Get Started
              </span>
              <h2 style={{ marginBottom: 'var(--space-lg)' }}>
                Ready to Transform Your Space?
              </h2>
              <p style={{ marginBottom: 'var(--space-xl)' }}>
                Whether you're planning a commercial development or upgrading your home, our team is ready to help.
                Request a free consultation and quote today.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <div
                  style={{
                    padding: 'var(--space-lg)',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-steel)',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <h4 style={{ marginBottom: 'var(--space-sm)', fontSize: '1rem' }}>Free Consultation</h4>
                  <p style={{ margin: 0, fontSize: '0.9375rem' }}>
                    Our experts will assess your project and provide detailed recommendations.
                  </p>
                </div>
                <div
                  style={{
                    padding: 'var(--space-lg)',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-steel)',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <h4 style={{ marginBottom: 'var(--space-sm)', fontSize: '1rem' }}>Detailed Quote</h4>
                  <p style={{ margin: 0, fontSize: '0.9375rem' }}>
                    Receive a comprehensive, no-obligation quote within 24-48 hours.
                  </p>
                </div>
                <div
                  style={{
                    padding: 'var(--space-lg)',
                    background: 'var(--bg-elevated)',
                    border: '1px solid var(--border-steel)',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <h4 style={{ marginBottom: 'var(--space-sm)', fontSize: '1rem' }}>Expert Installation</h4>
                  <p style={{ margin: 0, fontSize: '0.9375rem' }}>
                    Factory-trained installers ensure precision and quality on every project.
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-steel)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-2xl)',
              }}
            >
              <h3 style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>Request Your Free Quote</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
