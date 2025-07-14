export function meta() {
  return [
    { title: "Portfolio - FarmEx" },
    { name: "description", content: "Explore our successful projects and case studies showcasing how FarmEx technology has transformed farming operations worldwide." },
  ];
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Our <span className="text-green-600">Portfolio</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our technology solutions have transformed farming operations 
              and delivered measurable results for farmers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-green-200 h-64 lg:h-full flex items-center justify-center">
                <svg className="w-24 h-24 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Featured Project
                  </span>
                  <span className="text-gray-500 text-sm">Precision Farming</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Green Valley Farms: 40% Yield Increase
                </h2>
                <p className="text-gray-600 mb-6">
                  A 5,000-acre family farm in Iowa achieved remarkable results by implementing 
                  our comprehensive precision farming solution, including smart irrigation, 
                  crop monitoring, and data analytics.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-green-600">40%</div>
                    <div className="text-sm text-gray-600">Yield Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">30%</div>
                    <div className="text-sm text-gray-600">Water Savings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">25%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">6 months</div>
                    <div className="text-sm text-gray-600">ROI Timeline</div>
                  </div>
                </div>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
                  View Full Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-green-200 h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Hear from farmers who have transformed their operations with FarmEx technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-600 font-semibold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.farm}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of successful farmers who have already increased their yields 
            and reduced costs with our technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
              Start Your Project
            </button>
            <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "50K+", label: "Acres Monitored" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "$2M+", label: "Cost Savings Delivered" }
];

const projects = [
  {
    title: "Sunset Ranch: Smart Irrigation Implementation",
    description: "Implemented automated irrigation system for a 2,000-acre ranch in California, resulting in significant water savings and improved crop health.",
    category: "Smart Irrigation",
    location: "California, USA",
    results: [
      "35% reduction in water usage",
      "Improved crop uniformity",
      "Reduced labor costs by 40%"
    ]
  },
  {
    title: "Maple Grove Farms: Precision Agriculture",
    description: "Deployed comprehensive precision farming solution including GPS guidance, variable rate application, and yield monitoring systems.",
    category: "Precision Farming",
    location: "Ontario, Canada",
    results: [
      "25% increase in crop yields",
      "Reduced fertilizer costs by 30%",
      "Enhanced field efficiency"
    ]
  },
  {
    title: "Golden Fields Cooperative: Data Analytics",
    description: "Implemented advanced analytics platform for a cooperative of 50+ farms, enabling data-driven decision making across all operations.",
    category: "Data Analytics",
    location: "Kansas, USA",
    results: [
      "Centralized data management",
      "Improved resource allocation",
      "Enhanced profitability tracking"
    ]
  },
  {
    title: "Vineyard Valley: Crop Monitoring System",
    description: "Installed IoT sensors and drone monitoring for a premium vineyard, enabling precise crop management and disease prevention.",
    category: "Crop Monitoring",
    location: "Napa Valley, USA",
    results: [
      "Early disease detection",
      "Optimized harvest timing",
      "Premium quality grapes"
    ]
  },
  {
    title: "Prairie Winds: Equipment Management",
    description: "Deployed comprehensive equipment tracking and maintenance system for a large-scale farming operation with multiple locations.",
    category: "Equipment Management",
    location: "Nebraska, USA",
    results: [
      "Reduced downtime by 60%",
      "Optimized fuel consumption",
      "Extended equipment lifespan"
    ]
  },
  {
    title: "Organic Valley: Sustainable Farming",
    description: "Implemented sustainable farming technology solutions for an organic farming cooperative, balancing productivity with environmental stewardship.",
    category: "Sustainability",
    location: "Wisconsin, USA",
    results: [
      "Maintained organic certification",
      "Improved soil health",
      "Enhanced market access"
    ]
  }
];

const testimonials = [
  {
    name: "Robert Johnson",
    initials: "RJ",
    farm: "Green Valley Farms",
    quote: "FarmEx technology has completely transformed our farming operation. The 40% yield increase we've seen is beyond our expectations."
  },
  {
    name: "Maria Rodriguez",
    initials: "MR",
    farm: "Sunset Ranch",
    quote: "The smart irrigation system has saved us thousands in water costs while improving our crop quality. It's been a game-changer."
  },
  {
    name: "David Chen",
    initials: "DC",
    farm: "Maple Grove Farms",
    quote: "The precision farming tools have made our operations so much more efficient. We're seeing better yields with less input costs."
  }
]; 