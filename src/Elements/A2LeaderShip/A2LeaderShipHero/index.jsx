

const A2LeaderShipHero=()=>{
    return (
        <>
        <section className="relative bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Sales and Marketing Leadership Hiring
          </h1>
          <p className="mt-4 text-lg">
            <strong>Empowering Your Board to Drive Revenue Success</strong>
          </p>
          <p className="mt-6">
            A strong sales and marketing leadership team is the foundation of
            any successful business. The right leaders drive strategy, foster
            innovation, and create a high-performance culture. However, poor
            leadership hiring can lead to stagnation, high attrition, and missed
            revenue opportunities.
          </p>
          <p className="mt-4">
            At <strong>Sales Syllabus</strong>, we specialize in identifying
            and onboarding high-impact sales and marketing leaders who not only
            fit your organizational culture but also contribute to revenue
            growth and business transformation.
          </p>
          <div className="mt-8">
            <button className="bg-white text-indigo-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Content - Image or Illustration */}
        <div className="md:w-1/2">
          <img
            src="/leader.png"
            alt="Leadership hiring illustration"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </section>
        </>
    )
}
export default A2LeaderShipHero