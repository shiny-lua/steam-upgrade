import Layout from "../../components/layout";

const Terms = () => {
  return (
    <Layout>
      <div className="px-3 relative sm:px-4 md:px-8 lg:px-0 mx-auto max-w-[1000px] mt-5 md:mt-20">
        <div className="bg-primary-lightDark rounded-lg p-6 md:p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-primary-grey text-sm mb-8">Last Updated: September 06, 2025</p>
          
          <div className="space-y-4">
            {/* Section 1: Acceptance of Terms */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
              </div>
              <p className="text-primary-grey text-sm leading-relaxed">
                By using steamupgrade.com ("Site"), you agree to these Terms. We may update them; continued use
                means acceptance.
              </p>
            </div>

            {/* Section 2: Service Description */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">2. Service Description</h2>
              </div>
              <p className="text-primary-grey text-sm leading-relaxed">
                We provide a marketplace to buy Steam level upgrades using trading cards or payments (via
                Stripe/SkinsBack). Services are "as is." We may modify or terminate features.
              </p>
            </div>

            {/* Section 3: Eligibility */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">3. Eligibility</h2>
              </div>
              <p className="text-primary-grey text-sm leading-relaxed">
                You must be 18+ and provide accurate details. One account per user via Steam login. No account
                sharing.
              </p>
            </div>

            {/* Section 4: Payments and Refunds */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">4. Payments and Refunds</h2>
              </div>
              <p className="text-primary-grey text-sm leading-relaxed">
                Payments processed through Stripe/SkinsBack. Sales final unless unprocessed; refunds per provider
                policy (e.g., SkinsBack rollbacks). Check wallet for deposits.
              </p>
            </div>

            {/* Section 5: User Conduct */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">5. User Conduct</h2>
              </div>
              <p className="text-primary-grey text-sm leading-relaxed">
                Use lawfully. No hacking, fraud, or disrupting trades. Report issues. Do not expose bot/inventory details.
              </p>
            </div>

            {/* Section 6: Inventory and Trades */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">6. Inventory and Trades</h2>
              </div>
              <p className="text-primary-grey text-sm leading-relaxed">
                Inventory managed by bot. Trades may take up to a week for large orders. No liability for Steam bans or
                losses.
              </p>
            </div>

            {/* Section 7: Intellectual Property */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">7. Intellectual Property</h2>
              </div>
              <p className="text-primary-grey text-sm leading-relaxed">
                Site content (logos, text) is ours. User content licensed to us for site use.
              </p>
            </div>

            {/* Section 8: Disclaimers and Liability */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">8. Disclaimers and Liability</h2>
              </div>
              <p className="text-primary-grey text-sm leading-relaxed">
                Site "as is" without warranties. Not liable for data loss, profits, or third-party actions (e.g., Steam). Liability
                capped at $100 or fees paid.
              </p>
            </div>

            {/* Section 9: Termination */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">9. Termination</h2>
              </div>
              <p className="text-primary-grey text-sm leading-relaxed">
                We may suspend/terminate for violations. You can delete your account.
              </p>
            </div>

            {/* Section 10: Governing Law */}
            <div className="bg-primary-semiDark rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-white">10. Governing Law</h2>
              </div>
              <p className="text-primary-grey text-sm leading-relaxed">
                Governed by Canadian law. Disputes in Vancouver BC courts.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-primary-dark">
            <p className="text-white text-sm">
              Email{" "}
              <a 
                href="mailto:steamupgrade@steamupgrade.com" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                steamupgrade@steamupgrade.com
              </a>{" "}
              for questions.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
