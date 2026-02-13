import React from 'react'

const HowItWorks = () => {
  return (
      <section className='min-h-125 mx-4'>
          <h2 className="text-3xl font-bold text-center mb-8 text-green-600">How It Works</h2>
          <div className="flex gap-8">
              <div className="flex-2 grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
                  {
                      [1, 2, 3].map((item) => (
                            <div key={item} className="bg-slate-800 p-4 min-h-[10em] rounded-lg">
                              <h3 className="text-lg font-semibold text-white">Step {item}</h3>
                              <p className="text-gray-300">Description of step {item}</p>
                            </div>
                      ))}
              </div>
            </div>
    </section>
  )
}

export default HowItWorks
