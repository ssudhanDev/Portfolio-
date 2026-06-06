/**
 * 3D animation gallery — add images to src/assets/photos/
 * (jpg, png, webp). They load automatically.
 * Or set `src` manually per item below.
 */

const imported = import.meta.glob('../assets/photos/*.{png,jpg,jpeg,webp,JPG,PNG,JPEG,WEBP}', {
  eager: true,
  import: 'default',
})

const autoPhotos = Object.entries(imported).map(([path, src], i) => {
  const name = path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? `Photo ${i + 1}`
  return {
    src,
    title: name.replace(/[-_]/g, ' '),
    category: '3D Animation',
    size: ['large', 'small', 'small', 'medium', 'medium', 'wide'][i % 6],
  }
})

const defaultSlots = [
  { src: null, title: 'Motion Study', category: '3D Animation', size: 'large' },
  { src: null, title: 'Render Frame', category: 'Motion Design', size: 'small' },
  { src: null, title: 'Storyboard', category: 'Creative', size: 'small' },
  { src: null, title: 'Digital Art', category: 'CGI', size: 'medium' },
  { src: null, title: 'Visual FX', category: 'Animation', size: 'medium' },
  { src: null, title: 'Scene Frame', category: 'Hobby', size: 'wide' },
]

export const galleryPhotos = autoPhotos.length > 0 ? autoPhotos : defaultSlots
