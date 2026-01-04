const About = () => {
  return (
    <div className="min-h-screen bg-base-100 mt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-base-200">
        <div className="max-w-6xl mx-auto text-left">
          <h1 className="text-4xl font-bold text-[#F97316] mb-4">
            About StudyMate
          </h1>
          <p className="max-w-3xl text-base-content text-lg leading-relaxed">
            StudyMate is a professional learning platform built to connect students
            and mentors worldwide. We provide structured tools for collaboration,
            partner matching, and academic growth — all designed to help learners
            achieve their goals efficiently and confidently.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#F97316] mb-6">Our Mission</h2>
        <p className="text-base-content leading-relaxed">
          At StudyMate, we believe learning is most effective when shared. Our mission
          is to create a platform where students can build lasting academic connections,
          collaborate seamlessly, and make studying a productive, engaging experience.
          Whether preparing for exams, mastering new skills, or exploring new subjects,
          StudyMate is here to help you grow faster and smarter.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="bg-base-200 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F97316] mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8 text-left">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold mb-2">Create Your Profile</h3>
              <p className="text-sm text-base-content">
                Sign up and add your study preferences, subjects, and learning style.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold mb-2">Find a Match</h3>
              <p className="text-sm text-base-content">
                Our system suggests study partners based on your goals and interests.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold mb-2">Connect & Collaborate</h3>
              <p className="text-sm text-base-content">
                Chat, schedule sessions, and share resources directly through StudyMate.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-semibold mb-2">Achieve Together</h3>
              <p className="text-sm text-base-content">
                Stay motivated, learn faster, and reach your goals with your study partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#F97316] mb-8">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-base-200 p-6 rounded-lg shadow">
            <img
              src="https://www.easternstandard.com/wp-content/webp-express/webp-images/uploads/2023/10/Temple-Graduate-aspect-ratio-684-855.jpg.webp"
              alt="Sophia Carter"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold text-center">Sophia Carter</h3>
            <p className="text-sm text-center mt-2">
              “StudyMate helped me find my ideal partner for competitive exam prep.”
            </p>
          </div>
          <div className="bg-base-200 p-6 rounded-lg shadow">
            <img
              src="https://i.ibb.co.com/bjQJ4Q5z/how-to-apply-to-us-colleges-as-an-international-student.jpg"
              alt="Alex Jones"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold text-center">Alex Jones</h3>
            <p className="text-sm text-center mt-2">
              “The matching system is incredible — I connected with someone who studies the exact subjects I do.”
            </p>
          </div>
          <div className="bg-base-200 p-6 rounded-lg shadow">
            <img
              src="https://thumbs.dreamstime.com/b/african-american-male-student-college-uniform-holding-books-isolated-white-background-382240882.jpg"
              alt="Justin Kayle"
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-semibold text-center">Justin Kayle</h3>
            <p className="text-sm text-center mt-2">
              “It made online studying fun again. The UI is clean, smooth, and the partner feature is genius.”
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-base-200 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#F97316] mb-6">Contact Us</h2>
          <p className="text-base-content mb-4">We’d love to hear from you! Reach out anytime.</p>
          <p className="text-base-content">Email: support@studymate.com</p>
          <p className="text-base-content">Phone: +880 1234 567 890</p>
          <p className="text-base-content">Location: Dhaka, Bangladesh</p>
        </div>
      </section>
    </div>
  );
};

export default About;