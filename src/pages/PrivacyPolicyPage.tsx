import Hero from '../components/ui/Hero';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Hero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
        backgroundImage="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fullHeight={false}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <div className="flex items-center mb-4">
                <Shield className="text-gold mr-3" size={24} />
                <p className="text-sm text-gray-600">Last updated: 10 September 2024</p>
              </div>
              <p className="text-gray-700">
                Please take a moment to read this Privacy Policy carefully. It explains how Crownline Properties ("Crownline", "we", "us", or "our") collects, uses, shares, and protects your personal data, and outlines your rights under UK data protection laws.
              </p>
            </div>

            {/* Section 1 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Who We Are</h2>
              <p className="text-gray-700 mb-4">
                Crownline Properties is a real estate agency based in the United Kingdom. This Privacy Policy covers how we handle your personal data when you visit our website https://www.crownlineproperties.co.uk, use our services, or interact with us.
              </p>
              <p className="text-gray-700">
                We are the data "controller" under the UK GDPR and the Data Protection Act 2018, which means we are responsible for how your personal data is processed and protected.
              </p>
            </div>

            {/* Section 2 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. What Personal Data We Collect</h2>
              <p className="text-gray-700 mb-4">
                We may collect and process the following types of personal data depending on how you use our services:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Name, date of birth, and nationality</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Address, contact details, and location</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Proof of ID and address (e.g. passport, utility bill)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Bank account and payment details</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Property preferences or purchase details</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Details of co-buyers, legal advisors, or related parties</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Account login information</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Feedback or communications sent via email, phone, or social media</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Device data or usage details from your visits to our site (via cookies)</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
              <p className="text-gray-700 mb-4">
                We use your personal data for several purposes, including:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Creating and managing your account</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Verifying your identity</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Delivering our services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Communicating updates and changes</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Improving our website and customer experience</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Ensuring security and preventing fraud</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Sending relevant marketing (with your consent)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Meeting legal, tax, and regulatory obligations</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Our Legal Grounds for Processing</h2>
              <p className="text-gray-700 mb-4">
                We rely on the following legal bases when processing your data:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Contractual necessity</strong> – to fulfil our service agreement with you</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Legal obligations</strong> – where we must comply with regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Legitimate interests</strong> – to operate and improve our business, unless your privacy rights override these interests</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Consent</strong> – for marketing or non-essential cookies, where required</span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Sharing Your Data</h2>
              <p className="text-gray-700 mb-4">We may share your data with:</p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Our professional service providers (e.g. accountants, legal advisors, IT support)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Trusted partners who assist in property-related services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Government authorities or regulators, when legally required</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Third-party companies for fraud prevention and credit checks</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Potential buyers if we sell our business assets</span>
                </li>
              </ul>
              <p className="text-gray-700">
                In all cases, we ensure that appropriate contracts and data protection safeguards are in place.
              </p>
            </div>

            {/* Section 6 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. International Data Transfers</h2>
              <p className="text-gray-700">
                Some of our partners or systems may operate outside the UK or European Economic Area (EEA). If personal data is transferred internationally, we will ensure appropriate safeguards are used, such as standard contractual clauses approved by UK or EU regulators.
              </p>
            </div>

            {/* Section 7 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
              <p className="text-gray-700">
                We use cookies and similar technologies to understand how our site is used and to enhance user experience. These may collect device and usage data. For more details, refer to our Cookie Policy.
              </p>
            </div>

            {/* Section 8 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Data Retention</h2>
              <p className="text-gray-700">
                We only retain your personal data for as long as needed to fulfil the purpose it was collected for. This includes meeting legal, accounting, or reporting requirements. In some cases, data may be kept longer if there's a legal claim or ongoing inquiry.
              </p>
            </div>

            {/* Section 9 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Access the personal data we hold about you</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Request corrections to inaccurate information</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Ask us to erase data under certain conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Withdraw your consent at any time (if applicable)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Object to or request limits on processing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Receive your data in a structured, machine-readable format</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Opt-out of direct marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Lodge a complaint with the UK Information Commissioner's Office (ICO)</span>
                </li>
              </ul>
              <p className="text-gray-700">
                To exercise any of these rights, please contact us directly (see below).
              </p>
            </div>

            {/* Section 10 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Data Security</h2>
              <p className="text-gray-700">
                We take your privacy seriously and have strict security measures in place to protect your data. Access is limited to authorised personnel only. In the event of a data breach, we will notify you and the relevant authorities as required.
              </p>
            </div>

            {/* Section 11 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Marketing</h2>
              <p className="text-gray-700">
                If you've opted in, we may contact you about property updates, offers, or services that may interest you. You can unsubscribe at any time by clicking the unsubscribe link in emails or contacting us.
              </p>
            </div>

            {/* Section 12 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. How to Contact Us</h2>
              <p className="text-gray-700 mb-4">
                For any questions about this Privacy Policy or to exercise your data rights, please contact us at:
              </p>
              <div className="bg-offwhite p-6 rounded-property">
                <h3 className="font-semibold mb-4">Crownline Properties Ltd</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="text-gold mr-3 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-gray-700">45 Broad Lane</p>
                      <p className="text-gray-700">London N15 4DJ</p>
                      <p className="text-gray-700">United Kingdom</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-gold mr-3 flex-shrink-0" size={18} />
                    <a href="tel:02034892040" className="text-gray-700 hover:text-gold transition duration-300">
                      020 3489 2040
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-gold mr-3 flex-shrink-0" size={18} />
                    <a href="mailto:info@crownlineproperties.co.uk" className="text-gray-700 hover:text-gold transition duration-300">
                      info@crownlineproperties.co.uk
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Shield className="text-gold mr-3 flex-shrink-0" size={18} />
                    <span className="text-gray-700">www.crownlineproperties.co.uk</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 13 */}
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">13. Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this policy occasionally. When we do, the revised version will be published on our website with a new effective date.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;