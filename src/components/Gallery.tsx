
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=1974",
    alt: "Río entre montañas bajo nubes blancas",
    category: "landscape"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1974",
    alt: "Ciervo en entorno natural",
    category: "wildlife"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1974",
    alt: "Pinos en el bosque",
    category: "landscape"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1974",
    alt: "Cuerpo de agua rodeado de árboles",
    category: "landscape"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1974",
    alt: "Luz del sol pasando entre los árboles",
    category: "landscape"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1974&h=1100",
    alt: "Círculo de oración grupal",
    category: "activities"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") navigateImage("next");
    if (e.key === "ArrowLeft") navigateImage("prev");
  };

  return (
    <section id="gallery" className="py-20 bg-muted" onKeyDown={handleKeyDown}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">Experimenta Hebrón</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground font-inter">
            Realiza un viaje visual por nuestro campamento y obtén un vistazo de la belleza, la paz 
            y la comunidad que te esperan en Hebrón.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          <button 
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "all" 
                ? "bg-primary text-white" 
                : "bg-white text-foreground hover:bg-primary/10"
            }`}
          >
            Todos
          </button>
          <button 
            onClick={() => setActiveCategory("landscape")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "landscape" 
                ? "bg-primary text-white" 
                : "bg-white text-foreground hover:bg-primary/10"
            }`}
          >
            Paisajes
          </button>
          <button 
            onClick={() => setActiveCategory("wildlife")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "wildlife" 
                ? "bg-primary text-white" 
                : "bg-white text-foreground hover:bg-primary/10"
            }`}
          >
            Vida Silvestre
          </button>
          <button 
            onClick={() => setActiveCategory("activities")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === "activities" 
                ? "bg-primary text-white" 
                : "bg-white text-foreground hover:bg-primary/10"
            }`}
          >
            Actividades
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className="relative overflow-hidden rounded-lg aspect-square cursor-pointer group"
              onClick={() => openLightbox(image.id)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-white font-medium drop-shadow-lg text-center px-4">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 h-12 w-12 rounded-full flex items-center justify-center text-white"
              onClick={() => navigateImage("prev")}
            >
              <span className="sr-only">Anterior</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <img 
              src={galleryImages.find(img => img.id === selectedImage)?.src} 
              alt={galleryImages.find(img => img.id === selectedImage)?.alt}
              className="max-h-[80vh] max-w-[80vw] object-contain" 
            />
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 h-12 w-12 rounded-full flex items-center justify-center text-white"
              onClick={() => navigateImage("next")}
            >
              <span className="sr-only">Siguiente</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="font-medium">
                {galleryImages.find(img => img.id === selectedImage)?.alt}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
