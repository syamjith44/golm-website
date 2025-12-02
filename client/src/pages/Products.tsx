import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Monitor, Zap, BarChart3, Shield, Workflow } from 'lucide-react';

export default function Products() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen py-20">
      <section className="bg-dark-primary relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/5 to-cyber-cyan/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Our AI Agent <span className="text-cyber-purple neon-text">Portfolio</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our innovative AI agents designed to transform different aspects of your digital life
              </p>
            </motion.div>

            <motion.div className="grid lg:grid-cols-2 gap-12" variants={containerVariants}>
              {/* Finly */}
              <motion.div variants={itemVariants}>
                <Card className="glassmorphism p-8 border-0 hover:shadow-2xl hover:shadow-cyber-emerald/20 transition-all duration-300 group h-full">
                  <CardContent className="p-0">
                    <div className="mb-6 relative">
                      <motion.img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                        alt="Financial dashboard with charts and analytics"
                        className="rounded-xl w-full h-64 object-cover"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-emerald/20 to-transparent rounded-xl"></div>
                      <Badge className="absolute top-4 right-4 bg-cyber-emerald/20 text-cyber-emerald border-cyber-emerald/30">
                        In Development
                      </Badge>
                    </div>
                    
                    <div className="space-y-4">
                      <motion.h2 
                        className="text-2xl font-bold text-cyber-emerald group-hover:text-white transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <TrendingUp className="inline mr-2 h-6 w-6" />
                        Finly
                      </motion.h2>
                      <p className="text-gray-300 text-lg">
                        Your intelligent financial assistant that understands your spending patterns, provides personalized insights, and helps you make smarter financial decisions with advanced AI analysis.
                      </p>
                      
                      <div className="grid grid-cols-1 gap-3 my-6">
                        {[
                          { icon: BarChart3, title: 'Smart Analytics', desc: 'AI-powered insights into your spending patterns' },
                          { icon: Zap, title: 'Real-time Alerts', desc: 'Instant notifications for important financial events' },
                          { icon: Shield, title: 'Secure & Private', desc: 'Bank-level security for your financial data' }
                        ].map((feature, index) => (
                          <motion.div
                            key={feature.title}
                            className="flex items-start space-x-3 p-3 rounded-lg bg-cyber-emerald/5 border border-cyber-emerald/20"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <feature.icon className="h-5 w-5 text-cyber-emerald mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-white">{feature.title}</div>
                              <div className="text-sm text-gray-400">{feature.desc}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30">Personal Finance</Badge>
                        <Badge variant="secondary" className="bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30">AI Analytics</Badge>
                        <Badge variant="secondary" className="bg-cyber-emerald/20 text-cyber-emerald border-cyber-emerald/30">Smart Insights</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Agentic OS */}
              <motion.div variants={itemVariants}>
                <Card className="glassmorphism p-8 border-0 hover:shadow-2xl hover:shadow-cyber-cyan/20 transition-all duration-300 group h-full">
                  <CardContent className="p-0">
                    <div className="mb-6 relative">
                      <motion.img
                        src="/attached_assets/futuristic-ai-user-interface-design.png"
                        alt="Futuristic desktop environment with holographic elements"
                        className="rounded-xl w-full h-64 object-cover"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-cyan/30 to-transparent rounded-xl"></div>
                      <Badge className="absolute top-4 right-4 bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/30">
                        Coming Soon
                      </Badge>
                      {/* Holographic overlay effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-xl"></div>
                    </div>
                    
                    <div className="space-y-4">
                      <motion.h2 
                        className="text-2xl font-bold text-cyber-cyan group-hover:text-white transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Monitor className="inline mr-2 h-6 w-6" />
                        Agentic OS
                      </motion.h2>
                      <p className="text-gray-300 text-lg">
                        A revolutionary web-based AI operating system that transforms how you interact with digital environments. Experience seamless AI integration across all your workflows and applications.
                      </p>
                      
                      <div className="grid grid-cols-1 gap-3 my-6">
                        {[
                          { icon: Monitor, title: 'Web-Based OS', desc: 'Access your AI workspace from anywhere' },
                          { icon: Workflow, title: 'Workflow Automation', desc: 'Streamline complex tasks with AI assistance' },
                          { icon: Zap, title: 'Real-time Collaboration', desc: 'Work seamlessly with AI agents and humans' }
                        ].map((feature, index) => (
                          <motion.div
                            key={feature.title}
                            className="flex items-start space-x-3 p-3 rounded-lg bg-cyber-cyan/5 border border-cyber-cyan/20"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <feature.icon className="h-5 w-5 text-cyber-cyan mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-white">{feature.title}</div>
                              <div className="text-sm text-gray-400">{feature.desc}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/30">Web OS</Badge>
                        <Badge variant="secondary" className="bg-cyber-purple/20 text-cyber-purple border-cyber-purple/30">AI Integration</Badge>
                        <Badge variant="secondary" className="bg-cyber-pink/20 text-cyber-pink border-cyber-pink/30">Workflow Automation</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
