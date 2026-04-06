import { useEffect } from 'react'
import { createFileRoute, Link, Outlet, useMatches } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/gallery')({
  component: GalleryLayout,
})

function GalleryLayout() {
  useEffect(() => {
    // Ensure scroll stays at top after router finishes all its work
    const t1 = setTimeout(() => window.scrollTo(0, 0), 0)
    const t2 = setTimeout(() => window.scrollTo(0, 0), 50)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  const matches = useMatches()
  const lastMatch = matches[matches.length - 1]
  const currentPath = lastMatch?.fullPath || ''

  const isCommercial = currentPath.includes('commercial')
  const isResidential = currentPath.includes('residential')

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-white)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-4xl)' }}>
      <div className="container">
        {/* Back link */}
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-xs)', color: 'var(--color-superior-green)', textDecoration: 'none', fontWeight: 600, marginBottom: 'var(--space-lg)' }}>
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 style={{ fontFamily: 'var(--font-primary)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: 'var(--space-sm)' }}>
            Projects Gallery
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-dark-dim)', maxWidth: '600px', marginBottom: 'var(--space-xl)' }}>
            Explore our portfolio of commercial and residential glass & aluminum installations across the Chicago area.
          </p>

          {/* Tab Navigation */}
          <div style={{ display: 'flex', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
            <Link
              to="/gallery/commercial"
              style={{
                padding: '0.625rem 1.5rem',
                borderRadius: 'var(--radius-xl)',
                fontFamily: 'var(--font-primary)',
                fontWeight: 700,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'all 0.25s ease',
                border: '2px solid',
                borderColor: isCommercial ? 'var(--color-superior-green)' : 'var(--border-steel)',
                background: isCommercial ? 'var(--color-superior-green)' : 'transparent',
                color: isCommercial ? 'white' : 'var(--text-dark-dim)',
              }}
            >
              Commercial
            </Link>
            <Link
              to="/gallery/residential"
              style={{
                padding: '0.625rem 1.5rem',
                borderRadius: 'var(--radius-xl)',
                fontFamily: 'var(--font-primary)',
                fontWeight: 700,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'all 0.25s ease',
                border: '2px solid',
                borderColor: isResidential ? 'var(--color-superior-green)' : 'var(--border-steel)',
                background: isResidential ? 'var(--color-superior-green)' : 'transparent',
                color: isResidential ? 'white' : 'var(--text-dark-dim)',
              }}
            >
              Residential
            </Link>
          </div>
        </div>

        {/* Child route content */}
        <Outlet />
      </div>
    </div>
  )
}
