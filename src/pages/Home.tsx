const Home = () => {
  return (
    <div className="grid grid-cols-2 gap-8 w-11/12 mx-auto">
      <div className="flex flex-col gap-5 justify-center font-rubik text-[#424242]">
        <p className="text-lg">Start your adventure today</p>
        <h2 className="text-5xl font-semibold">
          Get the best car rental deals now!
        </h2>
        <p className="text-lg text-[#817F91]">
          Driving impact through sustainable goals and extraordinary efforts.
        </p>
        <div>
          <button
  className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-primary transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group">
    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span
        className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">ZenUI Library</span>
    <span className="relative invisible">ZenUI Library</span>
</button>
          {/* <button className="py-2 px-6 shadow-lg before:block before:-left-1 before:-top-1 before:border-t-[4px] before:invisible before:hover:visible before:border-l-[4px] before:border-primary before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%] before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:border-r-[4px] after:border-b-[4px] after:border-primary after:invisible after:hover:visible after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-secondary relative ">
            Animate 2
          </button> */}
        </div>
      </div>
      <div>
        <img
          className="w-full"
          src="https://img.freepik.com/free-vector/blue-hatchback-car-isolated-white-vector_53876-64419.jpg?t=st=1746829304~exp=1746832904~hmac=89c0d725f174956820a9be73b170617b379a1fe81e86fa0308a899fb73156a0c&w=1800"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
