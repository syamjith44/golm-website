import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, MapPin, Clock, Send, Phone, Globe } from 'lucide-react';
import { apiRequest } from '@/lib/queryClient';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest('POST', '/api/contact', formData);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-20">
      <section className="bg-dark-primary relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-cyber-cyan/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Get In <span className="text-cyber-purple neon-text">Touch</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to revolutionize your digital experience with AI agents? Let's start the conversation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {[
                  {
                    icon: Mail,
                    title: 'Email Us',
                    content: 'contact@golm.in',
                    description: 'Send us your questions anytime',
                    color: 'cyber-purple'
                  },
                  {
                    icon: MapPin,
                    title: 'Visit Us',
                    content: 'Kalamasssery, Kochi\nKerala, India',
                    description: 'Our headquarters location',
                    color: 'cyber-cyan'
                  },
                  {
                    icon: Clock,
                    title: 'Available',
                    content: '24/7 AI Support\nHuman team: Mon-Fri 9AM-6PM IST',
                    description: 'We\'re here when you need us',
                    color: 'cyber-emerald'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="glassmorphism p-6 border-0 hover:shadow-lg hover:shadow-cyber-purple/10 transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-${item.color}/20 rounded-lg flex items-center justify-center`}>
                            <item.icon className={`text-${item.color} text-xl h-6 w-6`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                            <p className={`text-${item.color} font-medium whitespace-pre-line mb-1`}>{item.content}</p>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Additional Contact Methods */} 
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h3 className="text-xl font-semibold text-cyber-purple">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: Globe, label: 'Website', color: 'cyber-blue' },
                      { icon: Mail, label: 'Newsletter', color: 'cyber-emerald' },
                      { icon: Phone, label: 'Schedule Call', color: 'cyber-pink' }
                    ].map((social) => (
                      <motion.div
                        key={social.label}
                        className={`w-12 h-12 bg-${social.color}/20 rounded-lg flex items-center justify-center cursor-pointer hover:bg-${social.color}/30 transition-colors`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className={`text-${social.color} h-5 w-5`} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Card className="glassmorphism p-8 border-0">
                  <CardContent className="p-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-300">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            className="bg-dark-secondary border-gray-600 focus:ring-2 focus:ring-cyber-purple focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-300">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            className="bg-dark-secondary border-gray-600 focus:ring-2 focus:ring-cyber-purple focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-gray-300">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company (Optional)"
                          className="bg-dark-secondary border-gray-600 focus:ring-2 focus:ring-cyber-purple focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-300">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project or questions..."
                          className="bg-dark-secondary border-gray-600 focus:ring-2 focus:ring-cyber-purple focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                        />
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-cyber-purple hover:bg-cyber-blue text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyber-purple/50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center space-x-2">
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                              <span>Sending...</span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-2">
                              <Send className="h-5 w-5" />
                              <span>Send Message</span>
                            </div>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
