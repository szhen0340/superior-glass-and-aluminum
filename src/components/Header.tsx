import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Commercial', href: '#commercial' },
    { label: 'Residential', href: '#residential' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="nav">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img 
              src="/logo.png" 
              alt="Superior Glass & Aluminum Logo" 
              style={{ 
                height: '40px', 
                width: 'auto',
                display: 'block' 
              }} 
            />
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontWeight: 900,
                  fontSize: '1.125rem',
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
                  fontSize: '0.75rem',
                  color: 'var(--text-dark-dim)',
                  letterSpacing: '0.05em',
                }}
              >
                Glass & Aluminum Inc.
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links" style={{ display: 'none' }} id="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
        <style>{`
          @media (min-width: 769px) {
            #desktop-nav {
              display: flex !important;
            }
          }
        `}</style>

        {/* CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="tel:+13125551234"
            className="btn btn-secondary"
            style={{ 
              padding: '0.5rem 1rem', 
              fontSize: '0.875rem',
              display: 'none',
            }}
            id="phone-btn"
          >
            <Phone size={16} />
            <span>(312) 555-1234</span>
          </a>
          <style>{`
            @media (min-width: 1024px) {
              #phone-btn {
                display: inline-flex !important;
              }
            }
          `}</style>

          <a href="#contact" className="btn btn-primary" style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}>
            Get Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              background: 'transparent',
              border: '1px solid var(--border-steel)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-dark)',
              cursor: 'pointer',
            }}
            id="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <style>{`
            @media (min-width: 769px) {
              #mobile-menu-btn {
                display: none !important;
              }
            }
          `}</style>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-steel)',
            padding: 'var(--space-lg)',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                style={{ fontSize: '1rem', padding: 'var(--space-sm) 0' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
