import Ilustra from "../../assets/ilust.svg"

const Main = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start relative md:pt-[120px] md:pl-[120px] px-6 pt-12">
      
      {/* Texto */}
      <div className="md:w-[720px] w-full text-left md:text-left">
        <h1 className="leading-tight md:leading-none">
          <span className="block text-blue-600 text-4xl md:text-[56px]">Unlock Your Potential</span>
          <span className="block text-black text-4xl md:text-[56px]">with Strategic</span>
          <span className="block text-black text-4xl md:text-[56px]">Consulting</span>
        </h1>

        <p className="mt-4 md:mt-6 text-gray-600">
          Guiding Your Success Journey Through Expertise and Innovation
        </p>

        <div className="mt-6 md:mt-[48px] flex flex-col md:flex-row gap-4 md:gap-4">
          <a href="/" className="flex gap-3 w-full md:w-[320px] h-[56px] rounded-3xl justify-center items-center bg-white text-xs text-gray-400 border border-gray-300">
            <i className="bi bi-envelope text-xl"></i>
            Enter your email to get started
          </a>

          <a href="/" className="flex gap-3 w-full md:w-[208px] h-[56px] rounded-3xl justify-center items-center bg-blue-600 text-white text-base">
            GET STARTED
            <i className="bi bi-arrow-up-right-circle-fill text-2xl md:text-4xl"></i>
          </a>  
        </div>
      </div>

      {/* Imagen */}
      <div className="hidden md:flex mb:hidden mt-6 md:mt-0 md:ml-12 flex justify-end md:justify-start md:absolute md:top-0 md:left-[750px] w-full md:w-auto">
        <img src={Ilustra} alt="Ilustración" className="w-full max-w-[750px] md:w-auto" />
      </div>

    </section>
  )
}

export default Main
