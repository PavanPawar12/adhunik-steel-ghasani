// import shopImage from "../assets/adhunic_assets/hero.jpeg";

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
//             <span className="text-yellow-400">आणि सह्याद्री स्टील घासणी</span>
//           </h1>

//           <p className="mt-4 text-sm md:text-lg text-gray-200">
//             आम्ही सर्व प्रकारच्या स्टील वस्तूंना धार लावण्याची सेवा देतो. आमची
//             सेवा खास दुकानदारांसाठी विश्वासार्ह आणि वेळेवर आहे.
//           </p>

//           {/* Owner Info */}
//           <div className="mt-6 bg-white/10 backdrop-blur-md p-4 rounded-lg inline-block">
//             <p className="text-yellow-400">मालक</p>
//             <h2 className="text-xl font-semibold">अंकुश पवार</h2>
//             <p className="text-sm text-gray-300">तुमची सेवा, आमचे कर्तव्य!</p>
//           </div>

//           {/* Buttons */}
//           <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
//             <a
//               href="tel:9876543210"
//               className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400"
//             >
//               📞 आता कॉल करा
//             </a>

//             <a
//               href="https://wa.me/919876543210"
//               target="_blank"
//               rel="noreferrer"
//               className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
//             >
//               💬 WhatsApp करा
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* BLUR IMAGE SECTION (50% blur below hero) */}
//       <section className="relative h-[300px] overflow-hidden">
//         <img
//           src={shopImage}
//           alt="blur background"
//           className="w-full h-full object-cover blur-md scale-110"
//         />
//       </section>
//     </div>
//   );
// };

// export default Home;


import shopImage from "../assets/adhunic_assets/hero.jpeg";

const Home = () => {
  return (
    <div className="font-marathi">
      
      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        
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
          
          <p className="text-yellow-400 text-sm md:text-lg mb-2">
            || धारदार काम आमची ओळख ||
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            आधुनिक स्टील घासणी <br />
            <span className="text-yellow-400">
              आणि सह्याद्री स्टील घासणी
            </span>
          </h1>

          <p className="mt-4 text-sm md:text-lg text-gray-200">
            आम्ही सर्व प्रकारच्या स्टील वस्तूंना धार लावण्याची सेवा देतो.
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

        {/* ✅ Bottom Gradient Fade (No Extra Space) */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>
      
      </section>

    </div>
  );
};

export default Home;