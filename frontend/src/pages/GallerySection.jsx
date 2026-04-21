import React from "react";
import demoVideo from "../assets/adhunic_assets/video1.mp4";
const GallerySection = () => {
  return (
    <div>
      {/* Video Section */}
      <div className="mt-14 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-6">
          आमचे काम (व्हिडिओ)
        </h3>

        <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <video
            src={demoVideo}
            controls
            autoPlay
            muted
            loop
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
