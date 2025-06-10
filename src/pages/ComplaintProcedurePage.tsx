import Hero from '../components/ui/Hero';
import { FileText, Mail, Phone, MapPin, Clock, CheckCircle, AlertTriangle, ExternalLink } from 'lucide-react';

const ComplaintProcedurePage = () => {
  return (
    <div>
      <Hero
        title="Complaint Procedure"
        subtitle="How we handle concerns and complaints to improve our service"
        backgroundImage="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        fullHeight={false}
      />

      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card mb-8">
              <div className="flex items-center mb-4">
                <FileText className="text-gold mr-3" size={24} />
                <p className="text-sm text-gray-600">Last updated: 29 November 2024</p>
              </div>
              <p className="text-gray-700">
                At Crownline Properties, we are committed to delivering a high standard of service to all our clients. If something goes wrong, we welcome the opportunity to address it and improve the way we work.
              </p>
            </div>

            {/* Supporting All Clients */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">Supporting All Clients</h2>
              <p className="text-gray-700">
                We are happy to make reasonable adjustments if needed — for example, for individuals affected by age, disability, language barriers, bereavement, limited financial circumstances, or any other reason that may make it difficult to submit a complaint. Please let us know how we can assist.
              </p>
            </div>

            {/* Making a Complaint */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">Making a Complaint</h2>
              <p className="text-gray-700 mb-4">
                If you would like to raise a concern or make a formal complaint, please put it in writing and include as much detail as possible.
              </p>
              <div className="bg-offwhite p-4 rounded-property border-l-4 border-gold">
                <p className="text-gray-700">
                  If you do not receive a final response from us within eight weeks, or if you remain dissatisfied, you may be able to refer the matter to The Property Ombudsman for an independent review.
                </p>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-6">What Happens Next?</h2>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start">
                  <div className="bg-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="text-gold mr-2" size={20} />
                      <h3 className="text-lg font-semibold">Acknowledgement</h3>
                    </div>
                    <p className="text-gray-700">
                      We will acknowledge your complaint in writing within <strong>3 working days</strong> of receipt. This message will include a copy of this procedure for your reference.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start">
                  <div className="bg-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <FileText className="text-gold mr-2" size={20} />
                      <h3 className="text-lg font-semibold">Investigation</h3>
                    </div>
                    <p className="text-gray-700">
                      Your complaint will be reviewed by the branch or office manager, who will examine your case file and speak to the team member involved.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start">
                  <div className="bg-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Mail className="text-gold mr-2" size={20} />
                      <h3 className="text-lg font-semibold">Formal Response</h3>
                    </div>
                    <p className="text-gray-700">
                      You will receive a written outcome of our investigation within <strong>15 working days</strong> of your original complaint.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start">
                  <div className="bg-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Clock className="text-gold mr-2" size={20} />
                      <h3 className="text-lg font-semibold">Further Review (if required)</h3>
                    </div>
                    <p className="text-gray-700">
                      If you are still not satisfied with the outcome, you can request a further internal review. This will be handled by a senior member of staff not previously involved.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start">
                  <div className="bg-navy text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0 mt-1">
                    5
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="text-gold mr-2" size={20} />
                      <h3 className="text-lg font-semibold">Final Response</h3>
                    </div>
                    <p className="text-gray-700">
                      Within <strong>15 working days</strong> of your review request, we will send you a final written viewpoint on the matter.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Independent Review */}
            <div className="card mb-8">
              <h2 className="text-2xl font-semibold mb-4">Independent Review</h2>
              <p className="text-gray-700 mb-6">
                If you remain unhappy after our final response — or if more than 8 weeks have passed since you first raised the complaint — you can contact The Property Ombudsman for an independent review.
              </p>
              
              <div className="bg-offwhite p-6 rounded-property mb-6">
                <h3 className="font-semibold mb-4 text-navy">Contact Details:</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="text-gold mr-3 flex-shrink-0" size={18} />
                    <div>
                      <span className="font-medium text-navy">Email:</span>{" "}
                      <a href="mailto:admin@tpos.co.uk" className="text-navy hover:text-gold transition duration-300">
                        admin@tpos.co.uk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-gold mr-3 flex-shrink-0" size={18} />
                    <div>
                      <span className="font-medium text-navy">Phone:</span>{" "}
                      <a href="tel:01722333306" className="text-navy hover:text-gold transition duration-300">
                        01722 333 306
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <ExternalLink className="text-gold mr-3 flex-shrink-0" size={18} />
                    <div>
                      <span className="font-medium text-navy">Website:</span>{" "}
                      <a href="https://www.tpos.co.uk" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition duration-300">
                        www.tpos.co.uk
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy text-white p-6 rounded-property mb-6">
                <h3 className="font-semibold mb-3">Submit Your Complaint to the Ombudsman:</h3>
                <p className="mb-4">
                  Visit: <a href="https://www.tpos.co.uk/consumers/make-a-complaint" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                    Make a Complaint – The Property Ombudsman
                  </a>
                </p>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-property">
                <div className="flex items-start">
                  <AlertTriangle className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Please note:</h4>
                    <ul className="space-y-2 text-red-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>You must submit your complaint to The Property Ombudsman within <strong>12 months</strong> of receiving our final response.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Before contacting the Ombudsman, you must allow us the opportunity to respond via this in-house process.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="card bg-navy text-white">
              <h3 className="text-xl font-semibold mb-4">Contact Us About a Complaint</h3>
              <p className="mb-6">
                To submit a complaint or if you need assistance with the process, please contact us:
              </p>
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

export default ComplaintProcedurePage;