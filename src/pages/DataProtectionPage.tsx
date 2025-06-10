import Hero from '../components/ui/Hero';
import { Shield, Mail, Phone, MapPin, Cookie, Globe, Settings } from 'lucide-react';

const DataProtectionPage = () => {
  return (
    <div>
      <Hero
        title="Data Protection"
        subtitle="How we use cookies and similar tracking technologies on our website"
        backgroundImage="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fullHeight={false}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <div className="flex items-center mb-4">
                <Cookie className="text-gold mr-3" size={24} />
                <p className="text-sm text-gray-600">Last updated: 10 September 2024</p>
              </div>
              <p className="text-gray-700">
                Please read this Cookie Policy carefully, as it explains how Crownline Properties ("we", "us", or "our") uses cookies and similar tracking technologies when you visit our website. It should be read alongside our Privacy Policy, which outlines how we collect, use, and protect your personal data.
              </p>
            </div>

            {/* Section 1 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Who We Are</h2>
              <p className="text-gray-700">
                This website is operated by Crownline Properties Ltd, a residential real estate agency based in the United Kingdom. For more about who we are, please visit www.crownlineproperties.co.uk.
              </p>
            </div>

            {/* Section 2 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Scope of This Policy</h2>
              <p className="text-gray-700">
                This Cookie Policy applies only to your use of our website at www.crownlineproperties.co.uk.
              </p>
            </div>

            {/* Section 3 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files stored on your device (computer, phone, tablet, etc.) when you visit a website. They help websites remember who you are and your preferences. We use cookies and similar technologies to enhance your experience, analyse traffic, and personalise content and advertising.
              </p>
              <p className="text-gray-700 mb-4">Cookies may collect information such as:</p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Which pages you visit</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>How often you return</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Your location and browser type</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>How you interact with our content</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Some of this data is aggregated and does not directly identify you.
              </p>
            </div>

            {/* Section 4 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">We use cookies on our site to:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Remember you between visits</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Understand how visitors use our site</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Improve performance and content</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Deliver personalised ads based on your browsing</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Support security and fraud prevention</span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Types of Cookies We Use</h2>
              <p className="text-gray-700 mb-4">We may place the following types of cookies on your device:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-offwhite p-4 rounded-property">
                  <div className="flex items-center mb-2">
                    <Shield className="text-gold mr-2" size={20} />
                    <h3 className="font-semibold">Essential Cookies</h3>
                  </div>
                  <p className="text-sm text-gray-600">Required for the site to function properly (e.g. login, navigation)</p>
                </div>
                
                <div className="bg-offwhite p-4 rounded-property">
                  <div className="flex items-center mb-2">
                    <Globe className="text-gold mr-2" size={20} />
                    <h3 className="font-semibold">Performance Cookies</h3>
                  </div>
                  <p className="text-sm text-gray-600">Help us understand how visitors use our site, so we can improve it</p>
                </div>
                
                <div className="bg-offwhite p-4 rounded-property">
                  <div className="flex items-center mb-2">
                    <Settings className="text-gold mr-2" size={20} />
                    <h3 className="font-semibold">Session Cookies</h3>
                  </div>
                  <p className="text-sm text-gray-600">Temporary cookies that expire when you close your browser</p>
                </div>
                
                <div className="bg-offwhite p-4 rounded-property">
                  <div className="flex items-center mb-2">
                    <Cookie className="text-gold mr-2" size={20} />
                    <h3 className="font-semibold">Marketing Cookies</h3>
                  </div>
                  <p className="text-sm text-gray-600">Used to deliver personalised ads and track campaign effectiveness</p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">We use third-party tools and services that may place cookies, such as:</p>
              <ul className="space-y-3 text-gray-700 mb-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>Google Analytics</strong> – Tracks how users navigate our site so we can optimise it
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>Google Ads</strong> – Tracks performance of paid advertising campaigns
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <strong>Facebook Pixel</strong> – Allows us to run more relevant Facebook ads and measure results accurately
                  </div>
                </li>
              </ul>
              <p className="text-gray-700">
                These providers may also collect data in line with their own privacy policies.
              </p>
            </div>

            {/* Section 7 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Consent for Cookies</h2>
              <p className="text-gray-700 mb-4">
                We will ask for your permission before placing cookies on your device, except for cookies that are strictly necessary for site functionality.
              </p>
              <p className="text-gray-700">
                When you visit our homepage, you'll see a cookie notice that allows you to accept or adjust your preferences.
              </p>
            </div>

            {/* Section 8 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. How to Manage or Disable Cookies</h2>
              <p className="text-gray-700 mb-4">
                You can control or block cookies through your browser settings. Be aware that disabling some cookies may affect site functionality.
              </p>
              <p className="text-gray-700 mb-4">For more guidance, visit:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                    www.aboutcookies.org
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                    www.allaboutcookies.org
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>ICO guidance on cookies</span>
                </li>
              </ul>
            </div>

            {/* Section 9 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Cookie Policy or how we use cookies, feel free to contact us:
              </p>
              <div className="bg-offwhite p-6 rounded-property">
                <h3 className="font-semibold mb-4">Crownline Properties Ltd</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="text-gold mr-3 flex-shrink-0 mt-1" size={18} />
                    <div>
                      <p className="text-gray-700">45 Broad Lane</p>
                      <p className="text-gray-700">London N15 4DJ</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-gold mr-3 flex-shrink-0" size={18} />
                    <a href="mailto:info@crownlineproperties.co.uk" className="text-gray-700 hover:text-gold transition duration-300">
                      info@crownlineproperties.co.uk
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-gold mr-3 flex-shrink-0" size={18} />
                    <a href="tel:02034892040" className="text-gray-700 hover:text-gold transition duration-300">
                      020 3489 2040
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 10 */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">10. Accessibility</h2>
              <p className="text-gray-700">
                If you require this policy in an alternative format (e.g. large print, audio, braille), please get in touch using the contact details above.
              </p>
            </div>

            {/* Section 11 */}
            <div className="card">
              <h2 className="text-2xl font-semibold mb-4">11. Updates to This Policy</h2>
              <p className="text-gray-700">
                We may revise this policy from time to time. The most up-to-date version will always be available on our website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataProtectionPage;