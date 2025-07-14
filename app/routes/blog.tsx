export function meta() {
  return [
    { title: "Blog - FarmEx" },
    { name: "description", content: "Stay updated with the latest insights, tips, and news in agricultural technology and farming innovation." },
  ];
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              FarmEx <span className="text-green-600">Blog</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tips, and the latest news in agricultural technology and farming innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                  category.active
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-green-200 h-64 lg:h-full flex items-center justify-center">
                <svg className="w-24 h-24 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm">Technology</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  The Future of Precision Agriculture: AI-Powered Crop Monitoring
                </h2>
                <p className="text-gray-600 mb-6">
                  Discover how artificial intelligence is revolutionizing crop monitoring and helping 
                  farmers make data-driven decisions that increase yields while reducing costs.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">JD</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">John Davis</p>
                      <p className="text-sm text-gray-500">Lead Data Scientist</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">5 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-green-200 h-48 flex items-center justify-center">
                  <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                        <span className="text-green-600 text-sm font-semibold">{post.author.initials}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">{post.author.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with FarmEx
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest insights, tips, and news delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Load More */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <button className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
            Load More Articles
          </button>
        </div>
      </section>
    </div>
  );
}

const categories = [
  { name: "All", active: true },
  { name: "Technology", active: false },
  { name: "Tips & Tricks", active: false },
  { name: "Case Studies", active: false },
  { name: "Industry News", active: false },
  { name: "Sustainability", active: false }
];

const blogPosts = [
  {
    title: "10 Essential Tips for Smart Irrigation Management",
    excerpt: "Learn how to optimize your irrigation system for maximum water efficiency and crop health using modern technology and data-driven insights.",
    category: "Tips & Tricks",
    date: "Dec 15, 2024",
    readTime: "4 min read",
    author: {
      name: "Sarah Johnson",
      initials: "SJ"
    }
  },
  {
    title: "How IoT Sensors Are Revolutionizing Soil Monitoring",
    excerpt: "Discover the latest developments in IoT soil sensors and how they're helping farmers monitor soil health in real-time for better crop management.",
    category: "Technology",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    author: {
      name: "Michael Chen",
      initials: "MC"
    }
  },
  {
    title: "Case Study: 40% Yield Increase with Precision Farming",
    excerpt: "See how a family farm in Iowa achieved remarkable results by implementing our precision farming technology and data analytics platform.",
    category: "Case Studies",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    author: {
      name: "Emily Rodriguez",
      initials: "ER"
    }
  },
  {
    title: "The Impact of Climate Change on Modern Agriculture",
    excerpt: "Explore how climate change is affecting farming practices and how technology is helping farmers adapt to these new challenges.",
    category: "Industry News",
    date: "Dec 8, 2024",
    readTime: "5 min read",
    author: {
      name: "David Thompson",
      initials: "DT"
    }
  },
  {
    title: "Sustainable Farming Practices for the 21st Century",
    excerpt: "Learn about innovative sustainable farming techniques that are both environmentally friendly and economically viable for modern farmers.",
    category: "Sustainability",
    date: "Dec 5, 2024",
    readTime: "7 min read",
    author: {
      name: "Lisa Wang",
      initials: "LW"
    }
  },
  {
    title: "Drone Technology in Agriculture: Beyond Aerial Imaging",
    excerpt: "Discover the advanced applications of drone technology in farming, from crop spraying to livestock monitoring and beyond.",
    category: "Technology",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    author: {
      name: "James Wilson",
      initials: "JW"
    }
  }
]; 