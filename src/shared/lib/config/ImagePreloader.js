import { useEffect } from 'react';
import pic1 from "../../assets/Pic1.webp";
import pic2 from "../../assets/Pic2.webp";
import pic3 from "../../assets/Pic3.webp";
import pic4 from "../../assets/Pic4.webp";
import bg1 from '../../assets/BG1.webp';
import bg from '../../assets/BG.webp';
import inst from '../../assets/svg/Instlogo.svg';

const ImagePreloader = () => {
  useEffect(() => {
    const preloadLink = (href) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = href;
      document.head.appendChild(link);
    };

    // Preload images
    preloadLink(pic1);
    preloadLink(bg);
    preloadLink(pic2);
    preloadLink(bg1);
    preloadLink(pic3);
    preloadLink(pic4);
    preloadLink(inst);

    // Cleanup on unmount
    return () => {
      const links = document.querySelectorAll('link[rel="preload"]');
      links.forEach(link => document.head.removeChild(link));
    };
  }, []);

  return null;
};

export default ImagePreloader;
