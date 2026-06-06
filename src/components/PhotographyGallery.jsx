import { useEffect, useState } from 'react'
import { galleryPhotos } from '../data/photos'
import './PhotographyGallery.css'

export default function PhotographyGallery() {
  const slides = galleryPhotos.filter(photo => photo.src)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!slides.length) return
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [slides.length])

  const getSlideStyle = (index) => {
    const total = slides.length
    const prevIndex = (current - 1 + total) % total
    const nextIndex = (current + 1) % total

    if (index === current) {
      return {
        transform: 'translate(-50%, -50%) translateZ(180px) scale(1)',
        opacity: 1,
        zIndex: 10,
      }
    }

    if (index === prevIndex) {
      return {
        transform: 'translate(-115%, -50%) rotateY(45deg) scale(0.85)',
        opacity: 1,
        zIndex: 5,
      }
    }

    if (index === nextIndex) {
      return {
        transform: 'translate(15%, -50%) rotateY(-45deg) scale(0.85)',
        opacity: 1,
        zIndex: 5,
      }
    }

    return {
      transform: 'translate(-50%, -50%) translateZ(0px) scale(0.78)',
      opacity: 0,
      zIndex: 1,
    }
  }

  return (
    <div className="photo-section" id="hobbies">
      <div className="photo-section-head">
        <div className="photo-head-icon">
          <i className="bx bx-cube" />
        </div>
        <div>
          <h3>Hobbies</h3>
          <p>A hobby I love — 3D animation, motion galleries, and creative media. Drop images in <code>src/assets/photos/</code></p>
        </div>
      </div>

      <div className="slider-container">
        <div className="slider">
          {slides.length > 0 ? (
            slides.map((slide, index) => (
              <img
                key={slide.src ?? index}
                src={slide.src}
                alt="Hobby slide"
                className="slide"
                style={getSlideStyle(index)}
              />
            ))
          ) : (
            <div className="photo-rotator-empty">
              <span>Add images to <code>src/assets/photos/</code></span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
