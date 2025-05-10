
const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-11/12 mx-auto py-10">
      {/* Text Section */}
      <div className="flex flex-col gap-5 justify-center items-center md:items-start text-center md:text-left font-rubik text-[#424242]">
        <p className="text-lg font-semibold">Start your adventure today</p>

        <h2 className="group text-4xl md:text-5xl font-bold text-black hover:text-black">
          Get the{" "}
          <span className="text-blue-500 transition-colors duration-300 group-hover:text-inherit">
            best
          </span>{" "}
          car rental deals now!
        </h2>

        <p className="text-lg text-[#817F91] max-w-md">
          Driving impact through sustainable goals and extraordinary efforts.
        </p>

        <div>
          <button className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-primary transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Book Now
            </span>
            <span className="relative invisible">Book Now</span>
          </button>
          <div className="w-[100px] h-[100px] bg-[#0181dc] blur-[90px] absolute bottom-[80px] right-[80px]"></div>
          <div className="w-[100px] h-[100px] bg-[#0181dc] blur-[90px] absolute top-[80px] left-[80px]"></div>
        </div>
      </div>

      {/* Image Section (Hidden on small screens) */}
      <div className="hidden md:block">
        <img
          className="w-full"
          src="https://img.freepik.com/free-vector/blue-hatchback-car-isolated-white-vector_53876-64419.jpg?t=st=1746829304~exp=1746832904~hmac=89c0d725f174956820a9be73b170617b379a1fe81e86fa0308a899fb73156a0c&w=1800"
          alt="Car"
        />
      </div>
    </div>
  )
}

export default Banner