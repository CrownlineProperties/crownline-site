import Hero from '../components/ui/Hero';
import { FileText, Mail, Phone, MapPin, Scale, Shield } from 'lucide-react';

const TermsConditionsPage = () => {
  return (
    <div>
      <Hero
        title="Terms and Conditions"
        subtitle="The rules and guidelines for using our website and services"
        backgroundImage="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fullHeight={false}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <div className="flex items-center mb-4">
                <FileText className="text-gold mr-3" size={24} />
                <p className="text-sm text-gray-600">Last updated: 10 September 2024</p>
              </div>
              <p className="text-gray-700">
                Welcome to Crownline Properties. Please read these Terms and Conditions ("Terms") carefully before using our website, as they set out the rules for how you may access and interact with our site.
              </p>
            </div>

            {/* Section 1 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Definitions</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>"Crownline", "we", "us" or "our"</strong> means Crownline Properties Ltd, registered in the United Kingdom, with our office at 45 Broad Lane, London N15 4DJ.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>"Site"</strong> refers to www.crownlineproperties.co.uk and all associated web pages.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>"Content"</strong> refers to all text, images, video, audio, software or any other material found on the Site.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>"You" or "your"</strong> refers to the person using or accessing the Site.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>"Unwanted Submission"</strong> refers to any material submitted by you that is confidential, commercially sensitive, or otherwise not requested by us.
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using our website, you agree to be bound by these Terms. If you do not accept these Terms, you must stop using the Site immediately. If you have any questions about the website, please contact us at:
              </p>
              <div className="bg-offwhite p-4 rounded-property">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Mail className="text-gold mr-2" size={18} />
                    <a href="mailto:info@crownlineproperties.co.uk" className="text-gray-700 hover:text-gold transition duration-300">
                      info@crownlineproperties.co.uk
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-gold mr-2" size={18} />
                    <a href="tel:02034892040" className="text-gray-700 hover:text-gold transition duration-300">
                      020 3489 2040
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Use of the Site</h2>
              <p className="text-gray-700 mb-4">
                The Site is for your personal or business use in the UK. You are responsible for:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>All costs incurred through your use of the Site</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Keeping your login credentials secure</span>
                </li>
              </ul>
              <p className="text-gray-700">
                We may suspend or restrict your access if you breach these Terms or any applicable laws.
              </p>
            </div>

            {/* Section 4 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Privacy</h2>
              <p className="text-gray-700">
                We are committed to protecting your personal information. Any data you provide is handled in line with our Privacy Policy, which details how we collect, store, and use your information.
              </p>
            </div>

            {/* Section 5 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, branding, and intellectual property on the Site belong to Crownline Properties Ltd or our licensors. You may not use, copy, or redistribute any part of the Site without our express written permission.
              </p>
              <p className="text-gray-700">
                This includes, but is not limited to, copyrights, trademarks, logos, design rights, and databases.
              </p>
            </div>

            {/* Section 6 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Software Use</h2>
              <p className="text-gray-700">
                If any software is made available for download from the Site, its use is subject to the relevant software licence agreement. You must not misuse, redistribute, or copy the software outside the permitted terms.
              </p>
            </div>

            {/* Section 7 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Submitting Information</h2>
              <p className="text-gray-700">
                Do not submit any sensitive, confidential, or proprietary information to us unless requested. We are not liable for any use of Unwanted Submissions and make no guarantee to keep such material confidential.
              </p>
            </div>

            {/* Section 8 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Accuracy and Availability</h2>
              <p className="text-gray-700 mb-4">
                While we aim to ensure the Site is accurate and available, we do not guarantee:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>That it will always be up-to-date</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>That it will be suitable for your intended purpose</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>That it will be free of errors or interruptions</span>
                </li>
              </ul>
              <p className="text-gray-700">
                The content is for general information only and should not be considered legal, financial, or property advice.
              </p>
            </div>

            {/* Section 9 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Links to Third-Party Websites</h2>
              <p className="text-gray-700">
                We may provide links to third-party sites. These are provided for convenience only. We are not responsible for the content or accuracy of any third-party websites, nor do we endorse their services.
              </p>
            </div>

            {/* Section 10 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the extent allowed by law, we shall not be liable for any:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Indirect or unforeseen losses</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Loss of business, data, or revenue</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Losses not caused by our breach</span>
                </li>
              </ul>
              <p className="text-gray-700">
                This does not affect your rights under consumer law or liability for death or personal injury caused by negligence.
              </p>
            </div>

            {/* Section 11 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Events Outside Our Control</h2>
              <p className="text-gray-700">
                We are not responsible for any failure or delay in our performance caused by events outside our reasonable control, including (but not limited to) natural disasters, internet outages, strikes, or software failures.
              </p>
            </div>

            {/* Section 12 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">12. Changes to These Terms</h2>
              <p className="text-gray-700">
                These Terms were published on 10 September 2024. We may update them at any time by publishing a new version on our Site. Your continued use of the Site after any changes means you accept the updated Terms. Please check this page regularly for updates.
              </p>
            </div>

            {/* Section 13 */}
            <div className="card mb-8">
              <div className="flex items-center mb-4">
                <Scale className="text-gold mr-3" size={24} />
                <h2 className="text-2xl font-semibold">13. Legal Jurisdiction</h2>
              </div>
              <p className="text-gray-700">
                These Terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            {/* Accessibility Notice */}
            <div className="card bg-offwhite border border-gray-200">
              <div className="flex items-start">
                <Shield className="text-gold mr-3 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold mb-2">Accessibility</h3>
                  <p className="text-gray-700">
                    If you need these Terms in an alternative format (e.g. large print, braille), please contact us using the details below.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card mt-8 bg-navy text-white">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="text-gold mr-3 flex-shrink-0 mt-1" size={18} />
                  <div>
                    <p>Crownline Properties Ltd</p>
                    <p>45 Broad Lane</p>
                    <p>London N15 4DJ</p>
                    <p>United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-gold mr-3 flex-shrink-0" size={18} />
                  <a href="tel:02034892040" className="hover:text-gold transition duration-300">
                    020 3489 2040
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="text-gold mr-3 flex-shrink-0" size={18} />
                  <a href="mailto:info@crownlineproperties.co.uk" className="hover:text-gold transition duration-300">
                    info@crownlineproperties.co.uk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditionsPage;