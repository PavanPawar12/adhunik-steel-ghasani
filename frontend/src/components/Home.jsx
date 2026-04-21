


// import shopImage from "../assets/adhunic_assets/image2.jpeg";
// import Services from "../pages/Services";

// const Home = () => {
//   return (
//     <div className="font-marathi">
      
//       {/* HERO SECTION */}
//       <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        
//         {/* Background Image */}
//         <img
//           src={shopImage}
//           alt="shop"
//           className="absolute w-full h-full object-cover"
//         />

//         {/* Dark Overlay */}
//         <div className="absolute w-full h-full bg-black/60"></div>

//         {/* Content */}
//         <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          
//           <p className="text-yellow-400 text-sm md:text-lg mb-2">
//             || धारदार काम आमची ओळख ||
//           </p>

//           <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//             आधुनिक स्टील घासणी <br />
//             <span className="text-yellow-400">
//               आणि सह्याद्री स्टील घासणी
//             </span>
//           </h1>

//           <p className="mt-4 text-sm md:text-lg text-gray-200">
//             आमची सेवा खास दुकानदारांसाठी विश्वासार्ह आणि वेळेवर आहे.
//           </p>

//           {/* Owner Info */}
//           <div className="mt-6 bg-white/10 backdrop-blur-md p-4 rounded-lg inline-block">
//             <p className="text-yellow-400">मालक</p>
//             <h2 className="text-xl font-semibold">अंकुश पवार</h2>
//             <p className="text-sm text-gray-300">
//               तुमची सेवा, आमचे कर्तव्य!
//             </p>
//           </div>

//           {/* Buttons */}
//           <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
            
//             <a
//               href="tel:9730074760"
//               className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400"
//             >
//               📞 आता कॉल करा
//             </a>

//             <a
//               href="https://wa.me/919730074760"
//               target="_blank"
//               rel="noreferrer"
//               className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
//             >
//               💬 WhatsApp करा
//             </a>
//           </div>
//         </div>

//         {/* ✅ Bottom Gradient Fade (No Extra Space) */}
//         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>
      
//       </section>
//       <div>
//      <Services/>

//       </div>
//     </div>
//   );
// };

// export default Home;

import shopImage from "../assets/adhunic_assets/image2.jpeg";
import ProductInfo from "../pages/ProductInfo";
import Services from "../pages/Services";

const Home = () => {
  return (
    <div className="font-marathi">
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Image */}
        <img
          src={shopImage}
          alt="shop"
          className="absolute w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute w-full h-full bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          
          {/* Top Tagline */}
          <p className="text-yellow-400 text-sm md:text-lg mb-2">
            || धारदार काम आमची ओळख ||
          </p>

          {/* 🔥 Main Brand (Like Your Image) */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
            सह्याद्री
          </h1>

          {/* Sub Marathi Line */}
          <p className="text-lg md:text-2xl font-semibold mt-2">
            आता नव्या स्वरूपात
          </p>

          {/* English Subtitle */}
          <p className="text-xs md:text-sm tracking-widest text-gray-300 mt-1">
            STAINLESS STEEL SCRUBBER
          </p>

          {/* Description */}
          <p className="mt-4 text-sm md:text-lg text-gray-200">
            आमची सेवा खास दुकानदारांसाठी विश्वासार्ह आणि वेळेवर आहे.
          </p>

          {/* Owner Info */}
          <div className="mt-6 bg-white/10 backdrop-blur-md p-4 rounded-lg inline-block">
            <p className="text-yellow-400">मालक</p>
            <h2 className="text-xl font-semibold">अंकुश पवार</h2>
            <p className="text-sm text-gray-300">
              तुमची सेवा, आमचे कर्तव्य!
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
            
            <a
              href="tel:9730074760"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400"
            >
              📞 आता कॉल करा
            </a>

            <a
              href="https://wa.me/919730074760"
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
            >
              💬 WhatsApp करा
            </a>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>
      
      </section>

      {/* Services */}
      <Services/>
      <ProductInfo/>
    </div>
  );
};

export default Home;