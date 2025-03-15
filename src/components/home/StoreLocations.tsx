import { MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

const storeLocation = {
  city: "Hyderabad",
  address: "Jatin Jewellers, Road No.36, Jubilee Hills Checkpost, Hyderabad, Telangana, 500033",
  phone: "+91 98765 43210",
  hours: "11:00 AM to 8:00 PM",
  mapLink: "https://maps.google.com/?q=Jatin+Jewellers+Road+No.36+Jubilee+Hills+Checkpost+Hyderabad",
};

export default function StoreLocations() {
  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-playfair mb-3 text-black">
            Visit Our Store
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-6"></div>
          <p className="text-black/70 max-w-3xl mx-auto font-light">
            Experience our exquisite jewelry collection in person at our elegantly designed store.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white p-8 elegant-shadow hover:shadow-lg transition-all duration-300 border-t-2 border-gold">
            <h3 className="text-xl font-playfair mb-4 text-black">{storeLocation.city}</h3>
            <div className="flex items-start mb-4">
              <MapPin size={18} className="text-gold shrink-0 mt-1 mr-3" />
              <p className="text-black/70">{storeLocation.address}</p>
            </div>
            <div className="flex items-center mb-4">
              <Phone size={18} className="text-gold shrink-0 mr-3" />
              <a href={`tel:${storeLocation.phone.replace(/\s+/g, '')}`} className="text-black/70 hover:text-gold transition-colors">
                {storeLocation.phone}
              </a>
            </div>
            <p className="text-black/70 mb-6 pl-7">
              <span className="font-medium">Store Hours:</span> {storeLocation.hours}
            </p>
            <a
              href={storeLocation.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-black flex items-center text-sm font-medium transition-colors"
            >
              Get Directions
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
