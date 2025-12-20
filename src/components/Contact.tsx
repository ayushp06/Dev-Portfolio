import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xpwvbrrj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatusMessage("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatusMessage(""), 5000);
      } else {
        setStatusMessage("Error: Failed to send email. Please try again.");
      }
    } catch (error) {
      setStatusMessage("Error: Failed to send email. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl text-center mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Get In Touch</span>
        </h2>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl mb-6 text-white">Let's Work Together</h3>
            <p className="text-lg text-slate-300 mb-8">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-slate-400 hover:text-purple-400 transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-slate-400 hover:text-purple-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white mb-1">Location</h4>
                  <p className="text-slate-400">University Park, PA</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Send a Message</CardTitle>
              <CardDescription className="text-slate-400">Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-400"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-purple-400"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0 disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
                {statusMessage && (
                  <p className={`text-sm ${statusMessage.includes("Error") ? "text-red-400" : "text-green-400"}`}>
                    {statusMessage}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}