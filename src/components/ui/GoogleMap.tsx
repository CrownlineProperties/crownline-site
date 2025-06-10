import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  markers?: Array<{ lat: number; lng: number; title?: string }>;
  className?: string;
  address?: string;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
    googleMapsPromise?: Promise<void>;
  }
}

// Global promise to track Google Maps API loading
let googleMapsLoadingPromise: Promise<void> | null = null;

const loadGoogleMapsAPI = (): Promise<void> => {
  // If already loaded, resolve immediately
  if (window.google && window.google.maps) {
    return Promise.resolve();
  }

  // If already loading, return the existing promise
  if (googleMapsLoadingPromise) {
    return googleMapsLoadingPromise;
  }

  // Check if script already exists in DOM
  const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
  if (existingScript) {
    // Script exists but may not be loaded yet, wait for it
    googleMapsLoadingPromise = new Promise((resolve, reject) => {
      const checkLoaded = () => {
        if (window.google && window.google.maps) {
          resolve();
        } else {
          setTimeout(checkLoaded, 100);
        }
      };
      checkLoaded();
    });
    return googleMapsLoadingPromise;
  }

  // Create new loading promise
  googleMapsLoadingPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBmfmE1hyq7X6Hh8kq1KZH0a4kh-5cpsv8&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Maps API'));
    document.head.appendChild(script);
  });

  return googleMapsLoadingPromise;
};

const GoogleMap = ({ 
  center = { lat: 51.5074, lng: -0.1278 }, // Default to London
  zoom = 15,
  markers = [],
  className = "w-full h-64 rounded-lg",
  address
}: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const initializeMap = async () => {
      try {
        // Wait for Google Maps API to load
        await loadGoogleMapsAPI();
        
        if (!mapRef.current || !window.google) return;

        const mapOptions = {
          center,
          zoom,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [{ visibility: 'off' }]
            }
          ],
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        };

        const map = new window.google.maps.Map(mapRef.current, mapOptions);
        mapInstanceRef.current = map;

        // If address is provided, geocode it
        if (address) {
          const geocoder = new window.google.maps.Geocoder();
          geocoder.geocode({ address: address + ', London, UK' }, (results: any, status: any) => {
            if (status === 'OK' && results[0]) {
              const location = results[0].geometry.location;
              map.setCenter(location);
              
              // Add marker for the geocoded location
              new window.google.maps.Marker({
                position: location,
                map: map,
                title: address,
                icon: {
                  url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 2C11.6 2 8 5.6 8 10C8 16 16 30 16 30S24 16 24 10C24 5.6 20.4 2 16 2ZM16 13C14.3 13 13 11.7 13 10S14.3 7 16 7S19 8.3 19 10S17.7 13 16 13Z" fill="#E7B10A"/>
                    </svg>
                  `),
                  scaledSize: new window.google.maps.Size(32, 32),
                  anchor: new window.google.maps.Point(16, 32)
                }
              });
            }
          });
        } else {
          // Add markers if provided
          markers.forEach(marker => {
            new window.google.maps.Marker({
              position: { lat: marker.lat, lng: marker.lng },
              map: map,
              title: marker.title,
              icon: {
                url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2C11.6 2 8 5.6 8 10C8 16 16 30 16 30S24 16 24 10C24 5.6 20.4 2 16 2ZM16 13C14.3 13 13 11.7 13 10S14.3 7 16 7S19 8.3 19 10S17.7 13 16 13Z" fill="#E7B10A"/>
                  </svg>
                `),
                scaledSize: new window.google.maps.Size(32, 32),
                anchor: new window.google.maps.Point(16, 32)
              }
            });
          });
        }
      } catch (error) {
        console.error('Failed to initialize Google Maps:', error);
      }
    };

    initializeMap();

    // No cleanup function needed - let the script persist
  }, [center.lat, center.lng, zoom, markers, address]);

  return <div ref={mapRef} className={className} />;
};

export default GoogleMap;