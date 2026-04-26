import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { MapPin, Images } from 'lucide-react'
import ImageLightbox from '../components/ImageLightbox'

export const Route = createFileRoute('/gallery/commercial')({
  component: CommercialGallery,
})

function CommercialGallery() {
  const [lightboxProject, setLightboxProject] = useState<{ images: { src: string; title: string }[]; startIndex: number } | null>(null)

  const projects = [
    { id: 1, title: 'Commercial Storefront', images: ['/images/projects/commercial_storefront1.webp'], category: 'Storefront', location: '1 S Wabash Ave, Chicago, IL 60603' },
    { id: 2, title: 'Office Interior', images: ['/images/projects/office_interior1.webp'], category: 'Interior', location: '3500 S Morgan St, Chicago, IL 60609' },
    { id: 3, title: 'Curtain Wall', images: ['/images/projects/curtain_wall1.webp'], category: 'Curtain Wall', location: 'Chicago, IL' },
    { id: 4, title: 'Office Entrance', images: ['/images/projects/office_entrance1.webp'], category: 'Entrance', location: 'Chicago, IL' },
    { id: 5, title: 'Commercial Storefront', images: ['/images/projects/commercial_storefront2.webp'], category: 'Storefront', location: 'Chicago, IL' },
    { id: 6, title: 'Glass Railings', images: ['/images/projects/glass_railings1.webp'], category: 'Railings', location: 'Chicago, IL' },
    { id: 7, title: 'Commercial Storefront', images: ['/images/projects/commercial_storefront7.webp'], category: 'Storefront', location: 'Chicago, IL' },
    { id: 8, title: 'Curtain Wall', images: ['/images/projects/curtain_wall2.webp'], category: 'Curtain Wall', location: 'Chicago, IL' },
    { id: 9, title: 'Office Entrance', images: ['/images/projects/office_entrance2.webp'], category: 'Entrance', location: 'Chicago, IL' },
    { id: 10, title: 'Commercial Storefront', images: ['/images/projects/commercial_storefront3.webp'], category: 'Storefront', location: 'Chicago, IL' },
    { id: 11, title: 'Commercial Storefront', images: ['/images/projects/commercial_storefront5.webp'], category: 'Storefront', location: 'Chicago, IL' },
    { id: 12, title: 'Jewelry Store Interior', images: ['/images/projects/jewelry_interior1.webp'], category: 'Interior', location: 'Chicago, IL' },
    { id: 13, title: 'Office Entrance', images: ['/images/projects/office_entrance3.webp'], category: 'Entrance', location: 'Chicago, IL' },
    { id: 14, title: 'Office Entrance', images: ['/images/projects/office_entrance4.webp'], category: 'Entrance', location: 'Chicago, IL' },
    { id: 15, title: 'Glass Railings', images: ['/images/projects/glass_railings2.webp'], category: 'Railings', location: 'Chicago, IL' },
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
