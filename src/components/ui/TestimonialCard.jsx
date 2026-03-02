
const TestimonialCard = (props) => {
  return (
    <div className="bg-slate-900 border-l-4 border-green-600 rounded-lg shadow-md p-6">
          <div className="flex gap-4">
              <img src={props.image} alt={props.name} className="w-16 h-16 rounded-full object-cover" />
              <div>
                  <h3 className="text-lg font-semibold">{props.name}</h3>
                  <p className="text-gray-600">{props.title}</p>
              </div>
          </div>
            <p className="mt-4 text-gray-600">"{props.testimonial}"</p>
    </div>
  )
}

export default TestimonialCard
