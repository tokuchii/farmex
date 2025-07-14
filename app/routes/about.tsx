export function meta() {
  return [
    { title: "About Us - FarmEx" },
    { name: "description", content: "Learn more about FarmEx and our mission to revolutionize farming technology." },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              About <span className="text-green-600">FarmEx</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing the agricultural industry through innovative technology solutions 
              that help farmers increase productivity and sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At FarmEx, we believe that technology has the power to transform agriculture. 
                Our mission is to provide farmers with cutting-edge tools and insights that 
                enable them to make data-driven decisions and optimize their operations.
              </p>
              <p className="text-lg text-gray-600">
                We're committed to sustainability, innovation, and supporting the farming 
                community with solutions that work in the real world.
              </p>
            </div>
            <div className="bg-green-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
                  <div className="text-gray-600">Acres Monitored</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals behind FarmEx who are dedicated to 
              transforming agriculture through technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-green-600">{member.initials}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const teamMembers = [
  {
    name: "Sarah Johnson",
    initials: "SJ",
    role: "CEO & Founder",
    description: "Agricultural engineer with 15+ years of experience in precision farming technology."
  },
  {
    name: "Michael Chen",
    initials: "MC",
    role: "CTO",
    description: "Software architect specializing in IoT and machine learning for agricultural applications."
  },
  {
    name: "Emily Rodriguez",
    initials: "ER",
    role: "Head of Product",
    description: "Former farmer turned product manager, passionate about user-centered design."
  },
  {
    name: "David Thompson",
    initials: "DT",
    role: "Lead Data Scientist",
    description: "Expert in predictive analytics and crop modeling for optimal yield prediction."
  },
  {
    name: "Lisa Wang",
    initials: "LW",
    role: "Head of Customer Success",
    description: "Dedicated to ensuring farmers get the most value from our technology solutions."
  },
  {
    name: "James Wilson",
    initials: "JW",
    role: "Field Operations Manager",
    description: "Oversees on-ground implementation and training programs for farmers."
  }
]; 