import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Terms of <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-muted-foreground">
                Last Updated: January 2024
              </p>
            </div>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8 space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms of Service ("Terms") govern your use of the Edenbrook Media International website and services. By accessing our website or engaging our services, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our website or services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Services</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Edenbrook Media International provides comprehensive marketing and communications services, including but not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>PR & Marketing Consultancy</li>
                    <li>Creative Design & Branding</li>
                    <li>Event Management & Planning</li>
                    <li>Publishing & Printing</li>
                    <li>Web Design & Development</li>
                    <li>Business & Strategic Plans</li>
                    <li>Multimedia Production</li>
                    <li>Capacity Building & Training</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Obligations</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    By using our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not engage in any activity that disrupts our services</li>
                    <li>Respect intellectual property rights</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Service Engagement and Contracts</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">4.1 Project Proposals</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        All service engagements begin with a detailed proposal outlining the scope of work, deliverables, timelines, and costs. The proposal becomes binding upon written acceptance by both parties.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">4.2 Client Responsibilities</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Clients are responsible for providing timely feedback, necessary materials, and approvals. Delays in client responses may result in project timeline adjustments.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">4.3 Changes to Scope</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Any changes to the agreed scope of work must be documented in writing and may result in additional fees and timeline adjustments.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">5.1 Fees and Invoicing</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        All fees are quoted in Kenyan Shillings (KES) unless otherwise specified. Payment terms will be outlined in your service agreement. Typically, we require a deposit before commencing work, with the balance due upon completion or as specified in milestones.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">5.2 Late Payments</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Late payments may incur interest charges and may result in suspension of services. We reserve the right to withhold deliverables until payment is received in full.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">5.3 Refund Policy</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Refunds are handled on a case-by-case basis. Deposits are generally non-refundable once work has commenced. Any refund requests must be submitted in writing.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property Rights</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">6.1 Client-Provided Materials</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Clients retain ownership of all materials provided to us. By providing materials, clients grant us a license to use them for the purposes of completing the agreed services.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">6.2 Work Product</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Upon full payment, clients receive ownership rights to the final deliverables created specifically for their project. We retain the right to use completed work in our portfolio and marketing materials unless otherwise agreed in writing.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">6.3 Third-Party Materials</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Any third-party materials (stock photos, fonts, software) used in projects are licensed separately and clients are responsible for obtaining appropriate licenses for continued use.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Confidentiality</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We respect the confidentiality of client information and will not disclose proprietary information to third parties without prior written consent, except as required by law. We expect clients to maintain confidentiality regarding our business practices and proprietary methodologies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Warranties and Disclaimers</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">8.1 Service Quality</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We warrant that our services will be performed in a professional and workmanlike manner. However, we do not guarantee specific results or outcomes from our services.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">8.2 Website Disclaimer</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Our website and its content are provided "as is" without warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted, error-free, or free of viruses.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To the fullest extent permitted by law, Edenbrook Media International shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid by you for the specific services giving rise to the claim.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Indemnification</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You agree to indemnify and hold harmless Edenbrook Media International from any claims, damages, losses, liabilities, and expenses arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">11. Termination</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Either party may terminate services under the following conditions:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>By mutual written agreement</li>
                    <li>For material breach of these Terms, with 30 days' written notice</li>
                    <li>Immediately for non-payment or fraud</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Upon termination, clients are responsible for payment of all services rendered up to the termination date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">12. Governing Law and Dispute Resolution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising from these Terms or our services shall first be subject to good-faith negotiation. If unresolved, disputes shall be submitted to arbitration in Nairobi, Kenya, in accordance with the Arbitration Act of Kenya.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">13. Force Majeure</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, labor disputes, or government actions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">14. Modifications to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified Terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">15. Severability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">16. Entire Agreement</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms, together with any service agreements and proposals, constitute the entire agreement between you and Edenbrook Media International regarding our services and supersede all prior agreements and understandings.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">17. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-muted-foreground">
                    <p><strong>Edenbrook Media International</strong></p>
                    <p>TRV Plaza, 5th Floor</p>
                    <p>Muthithi Road, Westlands</p>
                    <p>P.O. Box 2097 – 00621</p>
                    <p>Nairobi, Kenya</p>
                    <p className="mt-4">Email: <a href="mailto:info@edenbrookmedia.co.ke" className="text-brand-orange hover:underline">info@edenbrookmedia.co.ke</a></p>
                    <p>Phone: +254 721 658 788 / +254 736 325 788</p>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
