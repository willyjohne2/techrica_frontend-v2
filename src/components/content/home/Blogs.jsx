import React from 'react'

const Blogs = () => {
  return (
    <section className="min-h-screen bg-slate-950 px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">Blogs</h2>
      <div className="flex gap-8">
        <div className="flex-1 grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-200/20 mb-6">
            <h1 className="text-3xl mb-4">Blog Post 1</h1>
            <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-200/20 mb-6">
            <h1 className="text-3xl mb-4">Blog Post 2</h1>
            <p className="text-gray-300">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-200/20 mb-6">
            <h1 className="text-3xl mb-4">Blog Post 3</h1>
            <p className="text-gray-300">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Blogs
