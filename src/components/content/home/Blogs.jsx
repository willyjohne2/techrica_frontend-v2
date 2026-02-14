const sampleBlogs = [
  {
    id: 1,
    title: "The Future of Cybersecurity: Trends to Watch in 2024",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    excerpt: "As cyber threats continue to evolve, staying ahead of the curve is crucial. In this blog, we explore the top cybersecurity trends to watch in 2024 and how they will impact businesses and individuals alike."
  },
  {
    id: 2,
    title: "5 Essential Tips for Building a Strong Cybersecurity Strategy",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    excerpt: "A robust cybersecurity strategy is essential for protecting your digital assets. In this article, we share five essential tips for building a strong cybersecurity strategy that can help safeguard your organization from cyber threats."
  },
  {
    id: 3,
    title: "The Importance of Cybersecurity Awareness Training",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    excerpt: "Cybersecurity awareness training is a critical component of any comprehensive security program. In this blog, we discuss why awareness training is essential and how to implement an effective training program."
  },
  {
    id: 4,
    title: "How to Protect Your Business from Ransomware Attacks",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    excerpt: "Ransomware attacks are on the rise, and businesses of all sizes are at risk. In this article, we provide practical tips and strategies for protecting your business from ransomware attacks and minimizing the impact if an attack occurs."
  }
]

const Blogs = () => {
  return (
    <section className="min-h-screen bg-black px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">Blogs</h2>
      <div className="flex gap-8">
        <div className="flex-1 grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {sampleBlogs.map((blog) => (
            <div key={blog.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-green-500 mb-6">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-lg mb-4" />  
              <h1 className="text-2xl mb-4 text-green-400">{blog.title}</h1>
              <p className="text-gray-300">{blog.excerpt}</p>
            </div>
          ))}
        </div>
      </div>  
    </section>
  )
}

export default Blogs
