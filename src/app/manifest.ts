import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Transpo',
    short_name: 'Transpo',
    description: 'Music, your way. Real-time key detection in your browser.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#E65100', // brand-orange
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
