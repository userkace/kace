import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/map.css';

// Olongapo City coordinates
const POSITION: L.LatLngTuple = [14.8406, 120.2818];

const Contact: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current, {
      center: POSITION,
      zoom: 11,
      minZoom: 9,
      maxZoom: 12,
      zoomControl: false,
      scrollWheelZoom: false,
    });

    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
      {
        attribution: '&copy; <a href="https://www.esri.com" target="_blank" rel="noopener noreferrer">Esri</a>',
      }
    ).addTo(map);

    // City/place labels on their own pane so the base-tile filter doesn't mute them
    map.createPane('labels');
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}',
      { pane: 'labels' }
    ).addTo(map);

    L.marker(POSITION, {
      icon: L.divIcon({ className: 'map-pin', iconSize: [14, 14] }),
      interactive: false,
    }).addTo(map);

    map.attributionControl.setPrefix(
      '<a href="https://leafletjs.com" target="_blank" rel="noopener noreferrer">Leaflet</a>'
    );

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="pt-32 max-w-[1400px] mx-auto px-6 pb-20 mb-16">
      <div className="mb-24">
        <h1 className="text-[10vw] lg:text-[140px] font-black tracking-tighter uppercase leading-[0.85] hero-title">
          LET'S BUILD <br/>
          SOMETHING <span className="text-primary italic">GREAT.</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div className="lg:col-span-8">
          <form className="space-y-12">
            <div className="group relative">
              <label className="block text-xs font-bold tracking-[0.2em] text-slate-500 mb-2 uppercase">Name</label>
              <input
                className="w-full bg-card-dark border-0 border-b-2 border-slate-800 focus:border-primary focus:ring-0 px-4 py-6 text-xl md:text-2xl font-medium placeholder:text-slate-700 transition-all uppercase rounded-lg"
                placeholder="WHO ARE YOU?"
                type="text"
              />
            </div>
            <div className="group relative">
              <label className="block text-xs font-bold tracking-[0.2em] text-slate-500 mb-2 uppercase">Email</label>
              <input
                className="w-full bg-card-dark border-0 border-b-2 border-slate-800 focus:border-primary focus:ring-0 px-4 py-6 text-xl md:text-2xl font-medium placeholder:text-slate-700 transition-all uppercase rounded-lg"
                placeholder="YOUR@EMAIL.COM"
                type="email"
              />
            </div>
            <div className="group relative">
              <label className="block text-xs font-bold tracking-[0.2em] text-slate-500 mb-2 uppercase">Message</label>
              <textarea
                className="w-full bg-card-dark border-0 border-b-2 border-slate-800 focus:border-primary focus:ring-0 px-4 py-6 text-xl md:text-2xl font-medium placeholder:text-slate-700 transition-all uppercase resize-none rounded-lg"
                placeholder="TELL ME ABOUT YOUR PROJECT"
                rows={4}
              />
            </div>
            <div className="pt-6">
              <button className="w-full md:w-auto min-w-[280px] bg-primary hover:bg-gray-100 hover:text-background-dark text-background-dark font-black text-xl py-6 rounded-lg transition-all uppercase tracking-tight">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="lg:col-span-4 space-y-16">
          <div>
            <h3 className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-6 italic">Socials</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://github.com/userkace" className="group flex items-center justify-between text-2xl font-bold border-b border-white/5 pb-2 hover:text-primary transition-colors">
                  GITHUB <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kcspadilla/" className="group flex items-center justify-between text-2xl font-bold border-b border-white/5 pb-2 hover:text-primary transition-colors">
                  LINKEDIN <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
                </a>
              </li>
              <li>
                <a href="https://bsky.app/profile/kace.dev" className="group flex items-center justify-between text-2xl font-bold border-b border-white/5 pb-2 hover:text-primary transition-colors">
                  BLUESKY <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kace.dev/" className="group flex items-center justify-between text-2xl font-bold border-b border-white/5 pb-2 hover:text-primary transition-colors">
                  INSTAGRAM <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">north_east</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold tracking-[0.3em] text-primary uppercase mb-6 italic">Location</h3>
            <p className="text-2xl font-bold uppercase tracking-tight">Olongapo City, PH</p>
            <p className="text-slate-500 mt-2">UTC+8, PHT</p>
          </div>
          <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-slate-800">
            <div ref={mapRef} className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
