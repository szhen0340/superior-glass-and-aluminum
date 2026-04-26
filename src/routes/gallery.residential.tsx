import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { MapPin, Images } from 'lucide-react'
import ImageLightbox from '../components/ImageLightbox'

export const Route = createFileRoute('/gallery/residential')({
  component: ResidentialGallery,
})

function ResidentialGallery() {
  const [lightboxProject, setLightboxProject] = useState<{ images: { src: string; title: string }[]; startIndex: number } | null>(null)

  const projects = [
    { id: 1, title: 'Frameless Shower Enclosure', images: ['/images/projects/shower_enclosure1.webp'], category: 'Shower Enclosure', location: 'Oak Park, IL' },
    { id: 2, title: 'Shower Enclosure', images: ['/images/projects/shower_enclosure2.webp'], category: 'Shower Enclosure', location: 'Evanston, IL' },
    { id: 3, title: 'Custom Shower Glass', images: ['/images/projects/shower_enclosure3.webp'], category: 'Shower Enclosure', location: 'Skokie, IL' },
    { id: 4, title: 'Shower Enclosure', images: ['/images/projects/shower_enclosure4.webp'], category: 'Shower Enclosure', location: 'Park Ridge, IL' },
    { id: 5, title: 'Frameless Shower', images: ['/images/projects/shower_enclosure5.webp'], category: 'Shower Enclosure', location: 'Berwyn, IL' },
    { id: 6, title: 'Premium Shower Glass', images: ['/images/projects/shower_enclosure6.webp'], category: 'Shower Enclosure', location: 'Cicero, IL' },
    { id: 7, title: 'Residential Glass Door', images: ['/images/projects/residential_glass2.webp'], category: 'Glass Door', location: 'La Grange, IL' },
    { id: 8, title: 'Glass Railings', images: ['/images/projects/glass_railings3.webp'], category: 'Railings', location: 'Riverside, IL' },
  ]

  const openLightbox = (project: typeof projects[0]) => {
    const lightboxImages = project.images.map((src) => ({ src, title: project.title }))
    setLightboxProject({ images: lightboxImages, startIndex: 0 })
  }

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-lg)' }}>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => openLightbox(project)}
            style={{
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--border-steel)',
              background: 'var(--bg-elevated)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)'
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ position: 'relative', height: '300px', background: `url(${project.images[0]}) center/cover no-repeat` }}>
              {project.images.length > 1 && (
                <div style={{
                  position: 'absolute',
                  top: 'var(--space-sm)',
                  right: 'var(--space-sm)',
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(4px)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.25rem 0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  color: 'white',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                }}>
                  <Images size={14} />
                  {project.images.length}
                </div>
              )}
            </div>
            <div style={{ padding: 'var(--space-md)' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-superior-green)' }}>
                {project.category}
              </span>
              <h3 style={{ margin: 'var(--space-xs) 0 0 0', fontSize: '1.25rem' }}>{project.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: 'var(--space-xs)', color: 'var(--text-dark-dim)', fontSize: '0.8125rem' }}>
                <MapPin size={13} />
                <span>{project.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightboxProject && (
        <ImageLightbox
          images={lightboxProject.images}
          currentIndex={lightboxProject.startIndex}
          onClose={() => setLightboxProject(null)}
        />
      )}
    </>
  )
}
