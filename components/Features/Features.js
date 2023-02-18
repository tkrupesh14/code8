import styles from "../../styles/Features.module.css"
const Features = () => {
  return (
    
    <div>
      <div className="grid grid-cols-4 text-left my-10 gap-10 place-content-around mx-32">
        <div className="bg-clip-padding backdrop-filter px-10 py-6 backdrop-blur-xl bg-opacity-60 border border-white/20 to-black bg-gradient-to-tl  from-white/10 hover:rotate-1 hover:scale-105 group duration-500 rounded-3xl">


          <div className="mb-5 text-2xl duration-500 text-center">
            Industry relevant cohort based learning
          </div>

        </div>
        <div className="bg-clip-padding backdrop-filter px-10 py-6 backdrop-blur-xl bg-opacity-60 border border-white/20 to-black bg-gradient-to-tl  from-white/10 hover:rotate-1 hover:scale-105 group duration-500 rounded-3xl">


          <div className="mb-5 text-2xl duration-500 text-center">
            Experiential and project based approach
          </div>

        </div>
        <div className="bg-clip-padding backdrop-filter px-10 py-6 backdrop-blur-xl bg-opacity-60 border border-white/20 to-black bg-gradient-to-tl  from-white/10 hover:rotate-1 hover:scale-105 group duration-500 rounded-3xl">


          <div className="mb-5 text-2xl duration-500 text-center">
           We provide you Skill based learning
          </div>

        </div>
        <div className="bg-clip-padding backdrop-filter px-10 py-6 backdrop-blur-xl bg-opacity-60 border border-white/20 to-black bg-gradient-to-tl  from-white/10 hover:rotate-1 hover:scale-105 group duration-500 rounded-3xl">


          <div className="mb-5 text-2xl duration-500 text-center">
          Mentors who have made it already
          </div>

        </div>
      </div>
     
    </div>


  )
}

export default Features