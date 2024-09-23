import handPaintedWatercolorGalaxyBackground from '../assets/hand-painted-watercolor-galaxy-background_52683-63441.jpg.avif'


function Welcome() {
  return (
    <div>
        <div className="text-4xl font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 m-1">
          Gourmet Galaxy
        </div>
        <div className="">
          <img src={handPaintedWatercolorGalaxyBackground} alt="Galaxy Background" className="object-cover overflow-hidden h-96 w-full" />
        </div>
        <div className="text-2xl font-semibold text-center text-gray-800 mt-4">
          <h1 className="text-5xl font-extrabold text-gradient bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
            Welcome to Gourmet Galaxy
          </h1>
          <p className="mt-2 text-lg italic text-gray-600">
            The easy way to build your online menu
          </p>
        </div>
        <button className="flex justify-center items-center mt-5">
          <div className="bg-blue-600 text-white rounded-full w-fit p-5 font-bold">Create menu</div>
        </button>
      <div></div>
    </div>
  )
}

export { Welcome }