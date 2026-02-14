import stat_image from "/mid.gif"

const Stats = () => {
  return (
      <section className="min-h-[40vh] " style={{
          backgroundImage: `url(${stat_image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
      }}>
      <div className="flex justify-center items-center md:gap-22 py-18 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">+100</h1>
          <p>Happy Clients</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">+200</h1>
          <p>Projects Completed</p>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">+50</h1>
          <p>Awards Won</p>
        </div>
      </div>
    </section>
  )
}

export default Stats
