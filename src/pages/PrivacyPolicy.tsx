import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Privacy <span className="bg-gradient-to-r from-brand-orange to-brand-purple bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-muted-foreground">
                Last Updated: January 2024
              </p>
            </div>

            <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-8 space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Edenbrook Media International ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">2.1 Personal Information</h3>
                      <p className="text-muted-foreground leading-relaxed mb-2">
                        We may collect personal information that you voluntarily provide to us when you:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Contact us through our website contact forms</li>
                        <li>Subscribe to our newsletters or marketing communications</li>
                        <li>Request our services or submit project inquiries</li>
                        <li>Participate in surveys, contests, or promotions</li>
                        <li>Register for events or workshops</li>
                      </ul>
                      <p className="text-muted-foreground leading-relaxed mt-2">
                        This information may include: name, email address, phone number, company name, job title, postal address, and any other information you choose to provide.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">2.2 Automatically Collected Information</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. We may also collect information about your browsing behavior, including the pages you view and how you interact with our site.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">2.3 Client Project Information</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        When you engage our services, we collect information necessary to complete your projects, including business requirements, branding materials, content, images, and other project-specific data.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    We use the information we collect or receive to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Provide, operate, and maintain our services</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Process your transactions and manage your orders</li>
                    <li>Send you marketing and promotional communications (with your consent)</li>
                    <li>Improve and personalize your experience on our website</li>
                    <li>Conduct research and analysis to improve our services</li>
                    <li>Detect, prevent, and address technical issues or fraud</li>
                    <li>Comply with legal obligations and enforce our terms</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Protection and Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Disclosure of Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    We may share your information in the following situations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as web hosting, data analysis, email delivery, and payment processing.</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
                    <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                    <li><strong>With Your Consent:</strong> We may disclose your information for any other purpose with your consent.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Under applicable data protection laws, including the Kenya Data Protection Act, 2019, you have the following rights:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>The right to access your personal data</li>
                    <li>The right to rectify inaccurate personal data</li>
                    <li>The right to erasure of your personal data</li>
                    <li>The right to restrict processing of your personal data</li>
                    <li>The right to data portability</li>
                    <li>The right to object to processing</li>
                    <li>The right to withdraw consent at any time</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    To exercise these rights, please contact us using the contact information provided below.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are small data files that are placed on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Third-Party Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can delete such information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">11. International Data Transfers</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information may be transferred to and maintained on computers located outside of your country or jurisdiction where data protection laws may differ. We will take appropriate measures to ensure your data receives adequate protection in accordance with this Privacy Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;
