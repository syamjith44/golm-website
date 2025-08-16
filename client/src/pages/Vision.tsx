import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Link as LinkIcon, Shield, Zap, Globe, Users } from 'lucide-react';

export default function Vision() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const features = [
    {
      icon: Brain,
      title: 'Intelligent Adaptation',
      description: 'Our AI agents learn from every interaction, becoming more personalized and effective over time.',
      color: 'cyber-purple'
    },
    {
      icon: LinkIcon,
      title: 'Seamless Integration',
      description: 'Connect across platforms and services to provide unified, context-aware assistance.',
      color: 'cyber-cyan'
    },
    {
      icon: Shield,
      title: 'Privacy-First Approach',
      description: 'Built with privacy and security at the core, ensuring your data remains protected.',
      color: 'cyber-emerald'
    },
    {
      icon: Zap,
      title: 'Real-time Intelligence',
      description: 'Instant responses and proactive assistance that anticipates your needs.',
      color: 'cyber-gold'
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'AI agents that understand cultural context and work across languages and regions.',
      color: 'cyber-blue'
    },
    {
      icon: Users,
      title: 'Human-Centric Design',
      description: 'Technology that enhances human capabilities rather than replacing them.',
      color: 'cyber-pink'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-dark-secondary relative">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Beyond Generative AI: <span className="text-cyber-purple neon-text">Our Vision</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We envision a world where AI doesn't just generate content, but actively assists humans in every point of life. Our mission is to create intelligent agents that understand, adapt, and evolve with your needs.
              </motion.p>
              
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-pulse-glow"></div>
                  <span className="text-gray-300">Autonomous decision-making capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-purple rounded-full animate-pulse-glow"></div>
                  <span className="text-gray-300">Context-aware environmental understanding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyber-emerald rounded-full animate-pulse-glow"></div>
                  <span className="text-gray-300">Continuous learning and adaptation</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Holographic AI interface with connected nodes"
                className="rounded-2xl shadow-2xl w-full h-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/40 via-transparent to-cyber-cyan/40 rounded-2xl"></div>
              
              {/* Floating UI elements */}
              <motion.div 
                className="absolute top-8 left-8 glassmorphism p-3 rounded-lg"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut" 
                }}
              >
                <Brain className="text-cyber-cyan text-2xl h-6 w-6" />
              </motion.div>
              
              <motion.div 
                className="absolute bottom-8 right-8 glassmorphism p-3 rounded-lg"
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <LinkIcon className="text-cyber-purple text-2xl h-6 w-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-primary relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/5 to-cyber-cyan/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Core <span className="text-cyber-purple neon-text">Principles</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our vision is built on fundamental principles that guide how we develop AI agents for the future
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glassmorphism p-6 border-0 hover:shadow-xl hover:shadow-cyber-purple/10 transition-all duration-300 group h-full">
                    <CardContent className="p-0 space-y-4">
                      <div className={`w-12 h-12 bg-${feature.color}/20 rounded-lg flex items-center justify-center group-hover:bg-${feature.color}/30 transition-colors`}>
                        <feature.icon className={`text-${feature.color} text-xl h-6 w-6`} />
                      </div>
                      
                      <h3 className={`text-xl font-bold group-hover:text-${feature.color} transition-colors`}>
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-300">
                        {feature.description}
                      </p>
                      
                      <motion.div
                        className={`h-1 bg-gradient-to-r from-${feature.color} to-transparent rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 bg-dark-secondary relative">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              The <span className="text-cyber-cyan neon-text">Future</span> We're Building
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "2025 - Foundation",
                  description: "Launching Finly and establishing core AI agent infrastructure",
                  status: "current"
                },
                {
                  title: "2026 - Expansion",
                  description: "Releasing Agentic OS and expanding to enterprise solutions",
                  status: "planned"
                },
                {
                  title: "2027+ - Revolution",
                  description: "Creating a global ecosystem of AI agents working together",
                  status: "vision"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  className="glassmorphism p-6 rounded-xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="space-y-4">
                    <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                      milestone.status === 'current' ? 'bg-cyber-emerald/20 text-cyber-emerald' :
                      milestone.status === 'planned' ? 'bg-cyber-cyan/20 text-cyber-cyan' :
                      'bg-cyber-purple/20 text-cyber-purple'
                    }`}>
                      {milestone.status === 'current' ? 'In Progress' :
                       milestone.status === 'planned' ? 'Planned' : 'Vision'}
                    </div>
                    <h3 className="text-xl font-bold">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
