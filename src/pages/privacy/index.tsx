import Layout from "../../components/layout";
import Icon from "../../components/icon";

const Privacy = () => {
  return (
    <Layout>
      <div className="px-3 relative sm:px-4 md:px-8 lg:px-0 mx-auto max-w-[1000px] mt-5 md:mt-20">
        <div className="bg-primary-lightDark rounded-lg p-6 md:p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-primary-grey text-sm mb-8">Last Updated: September 06, 2025</p>

          <div className="space-y-4">
            {/* Section 1: Information We Collect */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-primary-white font-semibold mb-1">Account Data:</p>
                  <p className="text-primary-grey text-sm">Steam ID, email (via privateemail.com) for verification/trades.</p>
                </div>
                <div>
                  <p className="text-primary-white font-semibold mb-1">Usage Data:</p>
                  <p className="text-primary-grey text-sm">IP, pages visited for site improvement.</p>
                </div>
                <div>
                  <p className="text-primary-white font-semibold mb-1">Payment Data:</p>
                  <p className="text-primary-grey text-sm">Processed by Stripe/SkinsBack, not stored by us.</p>
                </div>
              </div>
            </div>

            {/* Section 2: How We Use Data */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white ">2. How We Use Data</h2>
              </div>
              <div className="space-y-2">
                <p className="text-primary-grey text-sm">• Verify accounts, process orders, send transactional emails (e.g., confirmations).</p>
                <p className="text-primary-grey text-sm">• Improve site performance (e.g., load times).</p>
                <p className="text-primary-grey text-sm">• No newsletters unless opted-in.</p>
              </div>
            </div>

            {/* Section 3: Data Sharing */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white ">3. Data Sharing</h2>
              </div>
              <div className="space-y-2">
                <p className="text-primary-grey text-sm">• Shared with Stripe/SkinsBack for payments, Steam for trades.</p>
                <p className="text-primary-grey text-sm">• No sale to third parties. Aggregated data may be used anonymously.</p>
              </div>
            </div>

            {/* Section 4: Security */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white ">4. Security</h2>
              </div>
              <p className="text-primary-grey text-sm">Data encrypted via HTTPS. VPS handles storage; we limit access.</p>
            </div>

            {/* Section 5: Your Rights */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white ">5. Your Rights</h2>
              </div>
              <p className="text-primary-grey text-sm">
                Request data access/deletion via{" "}
                <a
                  href="mailto:steamupgrade@steamupgrade.com"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  steamupgrade@steamupgrade.com
                </a>
                . Account deletion removes data.
              </p>
            </div>

            {/* Section 6: Changes */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white ">6. Changes</h2>
              </div>
              <p className="text-primary-grey text-sm">We will notify of policy updates.</p>
            </div>

            {/* Section 7: Contact */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white ">7. Contact</h2>
              </div>
              <p className="text-primary-grey text-sm">
                Email{" "}
                <a
                  href="mailto:steamupgrade@steamupgrade.com"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  steamupgrade@steamupgrade.com
                </a>{" "}
                for privacy concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Privacy;