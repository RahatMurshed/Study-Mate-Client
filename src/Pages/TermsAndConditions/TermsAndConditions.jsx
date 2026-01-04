const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-base-100 mt-20">
      {/* Hero Section */}
      <section className="bg-[#F97316] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Please read these Terms & Conditions carefully before using StudyMate. By accessing
          or using our platform, you agree to be bound by these terms.
        </p>
      </section>

      {/* Acceptance of Terms */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#F97316] mb-4">Acceptance of Terms</h2>
        <p className="text-base-content leading-relaxed">
          By registering, accessing, or using StudyMate, you confirm that you accept these
          Terms & Conditions and agree to comply with them. If you do not agree, you must not
          use our services.
        </p>
      </section>

      {/* User Responsibilities */}
      <section className="bg-base-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F97316] mb-4">User Responsibilities</h2>
          <ul className="list-disc list-inside text-base-content space-y-2">
            <li>Provide accurate and up-to-date information when creating your profile.</li>
            <li>Respect other users and maintain professional communication.</li>
            <li>Do not misuse the platform for fraudulent or harmful activities.</li>
            <li>Comply with all applicable laws and regulations.</li>
          </ul>
        </div>
      </section>

      {/* Intellectual Property */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#F97316] mb-4">Intellectual Property</h2>
        <p className="text-base-content leading-relaxed">
          All content, trademarks, and logos on StudyMate are the property of StudyMate or
          its licensors. You may not copy, reproduce, or distribute any content without prior
          written consent.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section className="bg-base-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F97316] mb-4">Limitation of Liability</h2>
          <p className="text-base-content leading-relaxed">
            StudyMate is not responsible for any damages, losses, or issues arising from your
            use of the platform, including reliance on information provided by other users.
          </p>
        </div>
      </section>

      {/* Termination */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#F97316] mb-4">Termination</h2>
        <p className="text-base-content leading-relaxed">
          We reserve the right to suspend or terminate your account if you violate these
          Terms & Conditions or engage in harmful behavior on the platform.
        </p>
      </section>

      {/* Governing Law */}
      <section className="bg-base-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F97316] mb-4">Governing Law</h2>
          <p className="text-base-content leading-relaxed">
            These Terms & Conditions are governed by and construed in accordance with the
            laws of Bangladesh. Any disputes shall be subject to the exclusive jurisdiction
            of the courts located in Dhaka.
          </p>
        </div>
      </section>

  


    </div>
  );
};

export default TermsAndConditions;