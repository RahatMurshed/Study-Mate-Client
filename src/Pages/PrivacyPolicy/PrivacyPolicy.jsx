const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-base-100 mt-20">
      {/* Hero Section */}
      <section className="bg-[#F97316] text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Your privacy matters to us. This Privacy Policy explains how StudyMate collects,
          uses, and protects your information when you use our platform.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#F97316] mb-4">Introduction</h2>
        <p className="text-base-content leading-relaxed">
          StudyMate is committed to safeguarding your personal information. By using our
          website and services, you agree to the practices described in this Privacy Policy.
        </p>
      </section>

      {/* Information We Collect */}
      <section className="bg-base-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F97316] mb-4">Information We Collect</h2>
          <ul className="list-disc list-inside text-base-content space-y-2">
            <li>Personal details such as name, email, and profile image.</li>
            <li>Academic preferences like subject, study mode, and availability.</li>
            <li>Usage data including partner connections and reviews.</li>
            <li>Technical data such as browser type, device information, and IP address.</li>
          </ul>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#F97316] mb-4">How We Use Your Information</h2>
        <ul className="list-disc list-inside text-base-content space-y-2">
          <li>To provide and improve our services.</li>
          <li>To match you with suitable study partners.</li>
          <li>To personalize your experience on the platform.</li>
          <li>To communicate updates, notifications, and support messages.</li>
          <li>To ensure security and prevent fraudulent activity.</li>
        </ul>
      </section>

      {/* Sharing Information */}
      <section className="bg-base-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F97316] mb-4">Sharing of Information</h2>
          <p className="text-base-content leading-relaxed">
            We do not sell or rent your personal information. We may share data with trusted
            service providers who assist us in operating the platform, or when required by law.
          </p>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#F97316] mb-4">Data Security</h2>
        <p className="text-base-content leading-relaxed">
          We implement industry-standard security measures to protect your data. However, no
          method of transmission over the internet is 100% secure, and we cannot guarantee
          absolute security.
        </p>
      </section>

      {/* Your Rights */}
      <section className="bg-base-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F97316] mb-4">Your Rights</h2>
          <ul className="list-disc list-inside text-base-content space-y-2">
            <li>Access and update your personal information.</li>
            <li>Request deletion of your account and associated data.</li>
            <li>Opt out of non-essential communications.</li>
          </ul>
        </div>
      </section>



    </div>
  );
};

export default PrivacyPolicy;