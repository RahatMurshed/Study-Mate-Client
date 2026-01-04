const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100 mt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-base-200">
        <div className="max-w-6xl mx-auto text-left">
          <h1 className="text-4xl font-bold text-[#F97316] mb-4">Contact Us</h1>
          <p className="max-w-3xl text-base-content text-lg leading-relaxed">
            We value clear communication. Whether you need technical support, have a business inquiry,
            or want to share feedback, our team is available to assist you promptly and professionally.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow text-left">
          <h2 className="text-xl font-semibold text-[#F97316] mb-2">Email</h2>
          <p className="text-base-content">support@studymate.com</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-left">
          <h2 className="text-xl font-semibold text-[#F97316] mb-2">Phone</h2>
          <p className="text-base-content">+880 1234 567 890</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-left">
          <h2 className="text-xl font-semibold text-[#F97316] mb-2">Location</h2>
          <p className="text-base-content">Dhaka, Bangladesh</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-[#F97316] mb-6 text-left">Send Us a Message</h2>
        <form className="space-y-6 bg-base-200 p-8 rounded-lg shadow">
          <div>
            <label className="block text-sm font-medium text-base-content mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-base-content mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-base-content mb-1">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-base-content mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#F97316] hover:bg-[#ea580c] text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;