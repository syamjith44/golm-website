import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Rocket, Brain, Link as LinkIcon, Shield } from 'lucide-react';

export default function Home() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 via-transparent to-cyber-cyan/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-8" variants={itemVariants}>
              <motion.div 
                className="inline-flex items-center px-4 py-2 glassmorphism rounded-full text-sm text-cyber-cyan"
                variants={itemVariants}
              >
                <Brain className="mr-2 h-4 w-4" />
                Next-Gen AI Agents
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold leading-tight"
                variants={itemVariants}
              >
                Building the{' '}
                <span className="text-cyber-purple neon-text">Future</span> of AI{' '}
                <span className="text-cyber-cyan">Agents</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 max-w-2xl"
                variants={itemVariants}
              >
                Golm AI is revolutionizing how AI agents interact with the world. We create intelligent, autonomous systems that go beyond traditional generative AI to assist humans in every aspect of life.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <Link href="/products">
                  <Button className="bg-cyber-purple hover:bg-cyber-blue text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyber-purple/50 animate-glow">
                    <Rocket className="mr-2 h-5 w-5" />
                    Explore Our Products
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div 
                className="grid grid-cols-3 gap-8 pt-8"
                variants={itemVariants}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-cyan">50K+</div>
                  <div className="text-gray-400 text-sm">AI Interactions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-emerald">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyber-gold">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={itemVariants}
            >
              <motion.div
                className="relative rounded-2xl shadow-2xl overflow-hidden animate-float"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Futuristic AI neural network visualization"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple/30 to-transparent"></div>
                <div className="absolute top-4 right-4 glassmorphism p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-3 h-3 bg-cyber-emerald rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <span className="text-sm">AI Agents Active</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Preview Section */}
      <section className="py-20 bg-dark-secondary relative">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Beyond Generative AI: <span className="text-cyber-purple neon-text">Our Vision</span>
              </h2>
              <p className="text-xl text-gray-300">
                We envision a world where AI doesn't just generate content, but actively assists humans in every point of life. Our mission is to create intelligent agents that understand, adapt, and evolve with your needs.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Brain, title: 'Intelligent Adaptation', desc: 'Our AI agents learn from every interaction, becoming more personalized and effective over time.', color: 'cyber-purple' },
                  { icon: LinkIcon, title: 'Seamless Integration', desc: 'Connect across platforms and services to provide unified, context-aware assistance.', color: 'cyber-cyan' },
                  { icon: Shield, title: 'Privacy-First Approach', desc: 'Built with privacy and security at the core, ensuring your data remains protected.', color: 'cyber-emerald' }
                ].map((feature, index) => (
                  <motion.div 
                    key={feature.title}
                    className="glassmorphism p-6 rounded-xl"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-${feature.color}/20 rounded-lg flex items-center justify-center`}>
                        <feature.icon className={`text-${feature.color} text-xl h-6 w-6`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-300">{feature.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <Link href="/technology">
                <Button className="bg-cyber-purple hover:bg-cyber-blue text-white px-8 py-4 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyber-purple/50">
                  Learn About Our Technology
                </Button>
              </Link>
            </div>
            
            <div className="relative">
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
