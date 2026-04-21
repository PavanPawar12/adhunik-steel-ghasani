const ProductInfo = () => {
  return (
    <section className="bg-gray-100 py-14 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800">
            सह्याद्री
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mt-2">
            आता नव्या स्वरूपात
          </p>
          <p className="text-sm tracking-widest text-gray-500 mt-1">
            STAINLESS STEEL SCRUBBER
          </p>
        </div>

        {/* Top Features Line */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-10">
          <p className="bg-white p-3 rounded shadow">HEAVY DUTY</p>
          <p className="bg-white p-3 rounded shadow">RUST PROOF</p>
          <p className="bg-white p-3 rounded shadow">EASY CLEANING</p>
          <p className="bg-white p-3 rounded shadow">SMOOTH ON HAND</p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* USES */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">USES</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• TOOLS</li>
              <li>• TIRES</li>
              <li>• GRILLS</li>
              <li>• STOVE & OVENS</li>
              <li>• POOL AREAS</li>
              <li>• POTS & PANS</li>
              <li>• CLEANS ENGINES</li>
              <li>• TILE FLOORS</li>
              <li>• BOAT BOTTOMS</li>
            </ul>
          </div>

          {/* FEATURES */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-4">FEATURES</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• SANITARY</li>
              <li>• COMPACT</li>
              <li>• EASY TO USE</li>
              <li>• LONG LASTING</li>
              <li>• DURABLE</li>
              <li>• CLEANS EASILY</li>
              <li>• STAINLESS STEEL</li>
              <li>• OUTLASTS STEEL</li>
              <li>• SOFT & GENTLE</li>
            </ul>
          </div>

        </div>

        {/* Footer Info */}
        <div className="mt-10 text-center text-gray-600 text-sm">
          <p className="font-semibold">Sahyadri Stainless Scrubber</p>
          <p>Beed, Maharashtra</p>
          <p>Email: adhunic543@gmail.com</p>
          <p>Customer Care: 9730074760</p>
        </div>

      </div>
    </section>
  );
};

export default ProductInfo;