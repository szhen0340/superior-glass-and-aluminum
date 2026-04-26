import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const yearsInBusiness = currentYear - 2006

  const services = [
    'Custom Fabrication',
    'Aluminum Framing',
    'Storefront Systems',
    'Curtain Walls',
    'Glass Doors',
    'Shower Enclosures',
  ]

  return (
    <footer
      style={{
        background: 'var(--bg-concrete)',
        borderTop: '1px solid var(--border-steel)',
        paddingTop: 'var(--space-4xl)',
        paddingBottom: 'var(--space-xl)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-2xl)',
            marginBottom: 'var(--space-3xl)',
          }}
        >
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: 'var(--space-lg)' }}>
              <img
                src="/logo.webp"
                alt="Superior Glass & Aluminum Logo"
                width="48"
                height="48"
                style={{
                  height: '48px',
                  width: 'auto',
                  display: 'block'
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 900,
                    fontSize: '1.25rem',
                    color: 'var(--color-superior-green)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  }}
                >
                  SUPERIOR
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-secondary)',
                    fontSize: '0.875rem',
                    color: 'var(--text-dark-dim)',
                  }}
                >
                  Glass & Aluminum Inc.
                </div>
              </div>
            </div>
            <p style={{ marginBottom: 'var(--space-lg)', maxWidth: '300px', color: 'var(--text-dark-dim)' }}>
              Proudly serving Chicago and the greater Illinois area for over {yearsInBusiness} years with premium
              commercial and residential glass & aluminum solutions.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--text-dark-dim)' }}>
                <MapPin size={16} style={{ color: 'var(--color-superior-green)' }} />
                <span style={{ fontSize: '0.875rem' }}>3030 S Wentworth Ave, Chicago, IL 60616</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--text-dark-dim)' }}>
                <Phone size={16} style={{ color: 'var(--color-superior-green)' }} />
                <a href="tel:+13127148919" style={{ fontSize: '0.875rem', color: 'var(--text-dark-dim)', textDecoration: 'none' }}>
                  (312) 714-8919
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--text-dark-dim)' }}>
                <Mail size={16} style={{ color: 'var(--color-superior-green)' }} />
                <a href="mailto:superiorglassaluminum@gmail.com" style={{ fontSize: '0.875rem', color: 'var(--text-dark-dim)', textDecoration: 'none' }} target="_blank">
                  superiorglassaluminum@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', color: 'var(--text-dark-dim)' }}>
                <Clock size={16} style={{ color: 'var(--color-superior-green)' }} />
                <span style={{ fontSize: '0.875rem' }}>Mon-Fri: 7AM - 5PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ marginBottom: 'var(--space-lg)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dark)' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    style={{
                      color: 'var(--text-dark-dim)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color var(--transition-fast)',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'var(--text-dark)')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-dark-dim)')}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 style={{ marginBottom: 'var(--space-lg)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dark)' }}>
              Markets We Serve
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              {['Commercial Buildings', 'Retail Storefronts', 'Office Complexes', 'Residential Homes', 'Hospitality'].map((market) => (
                <li key={market}>
                  <span style={{ color: 'var(--text-dark-dim)', fontSize: '0.875rem' }}>{market}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 style={{ marginBottom: 'var(--space-lg)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-dark)' }}>
              Company Details
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div
                style={{
                  padding: 'var(--space-md)',
                  background: 'var(--bg-white)',
                  border: '1px solid var(--border-steel-dark)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.25rem', color: 'var(--text-dark)' }}>
                  Licensed & Insured
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dark-dim)' }}>Illinois State License</div>
              </div>
              <div
                style={{
                  padding: 'var(--space-md)',
                  background: 'var(--bg-white)',
                  border: '1px solid var(--border-steel-dark)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-primary)', fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.25rem', color: 'var(--text-dark)' }}>
                  Expert Team
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dark-dim)' }}>Factory Trained Professionals</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-steel)',
            paddingTop: 'var(--space-xl)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 'var(--space-md)',
          }}
        >
          <div style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-dark-dim)' }}>
            © {currentYear} Superior Glass & Aluminum Inc. All rights reserved.
            <span style={{ display: 'block', marginTop: '0.25rem', color: 'var(--color-superior-green)', fontWeight: 600 }}>
              Celebrating {yearsInBusiness}+ Years of Chicago Excellence
            </span>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-lg)' }}>
            <a href="#" style={{ fontSize: '0.875rem', color: 'var(--text-dark-dim)', textDecoration: 'none' }}>
              Privacy Policy
            </a>
            <a href="#" style={{ fontSize: '0.875rem', color: 'var(--text-dark-dim)', textDecoration: 'none' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
