import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/portfolio";
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length > 100) newErrors.name = "Name must be less than 100 characters";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length > 1000) newErrors.message = "Message must be less than 1000 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const contactLinks = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: "text-primary", box: "icon-box-primary" },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: "text-accent", box: "icon-box-accent" },
    { icon: Linkedin, label: "LinkedIn", value: "denilson-l", href: personalInfo.linkedin, color: "text-primary", box: "icon-box-primary" },
    { icon: Github, label: "GitHub", value: "uri4as24", href: personalInfo.github, color: "text-tertiary", box: "icon-box-tertiary" },
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="section-container">
          <div className="mb-10">
            <h1 className="heading-xl mb-4">Get in Touch</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="glass-panel-solid rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full icon-box-primary mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => { setIsSubmitted(false); setFormData({ name: "", email: "", message: "" }); }}
                    variant="outline"
                    className="rounded-full"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-panel-solid rounded-2xl p-6 sm:p-8 space-y-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium block mb-2">Name</label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-xl glass-input text-foreground placeholder:text-muted-foreground/50 focus:outline-none ${errors.name ? "border-destructive" : ""}`}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <p id="name-error" className="text-sm text-destructive mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium block mb-2">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-xl glass-input text-foreground placeholder:text-muted-foreground/50 focus:outline-none ${errors.email ? "border-destructive" : ""}`}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <p id="email-error" className="text-sm text-destructive mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium block mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className={`w-full px-4 py-3 rounded-xl glass-input text-foreground placeholder:text-muted-foreground/50 focus:outline-none resize-none ${errors.message ? "border-destructive" : ""}`}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && <p id="message-error" className="text-sm text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2 rounded-full glow-primary">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-panel-solid rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 icon-box-tertiary">
                    <MapPin className="h-5 w-5 text-tertiary" />
                  </div>
                  <div>
                    <p className="font-semibold">Based in Dublin</p>
                    <p className="text-sm text-muted-foreground">Open to opportunities and freelance projects</p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="glass-panel-solid rounded-2xl p-5 card-hover group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${link.box} group-hover:scale-110 transition-transform duration-300`}>
                        <link.icon className={`h-5 w-5 ${link.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{link.label}</p>
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">{link.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="glass-panel rounded-2xl p-6 text-center">
                <p className="text-muted-foreground text-sm">
                  Prefer a quick chat? Feel free to reach out on LinkedIn or drop me an email. I typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
