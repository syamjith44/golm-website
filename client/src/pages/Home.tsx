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
              {/* Futuristic AI Dashboard */}
              <div className="relative h-96 rounded-2xl overflow-hidden glassmorphism animate-hologram">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/40 via-cyber-blue/30 to-cyber-cyan/40"></div>
                
                {/* Matrix-style Digital Rain Background */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-0.5 bg-gradient-to-b from-cyber-cyan to-transparent"
                      style={{
                        left: `${i * 12.5}%`,
                        height: '200%',
                      }}
                      animate={{ y: ['-100%', '100%'] }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>

                {/* Central Command Interface */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-32 h-32 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-cyan flex items-center justify-center animate-neural-pulse"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  >
                    <Brain className="text-white h-16 w-16" />
                  </motion.div>
                </div>

                {/* Floating Data Nodes */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute glassmorphism p-3 rounded-lg"
                    style={{
                      left: `${15 + (i % 3) * 35}%`,
                      top: `${20 + Math.floor(i / 3) * 60}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.3,
                    }}
                  >
                    {i % 3 === 0 && <Brain className="text-cyber-cyan h-4 w-4" />}
                    {i % 3 === 1 && <LinkIcon className="text-cyber-purple h-4 w-4" />}
                    {i % 3 === 2 && <Shield className="text-cyber-emerald h-4 w-4" />}
                  </motion.div>
                ))}

                {/* Status Indicator */}
                <div className="absolute top-4 right-4 glassmorphism p-4 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-3 h-3 bg-cyber-emerald rounded-full animate-neural-pulse"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <span className="text-sm font-medium">Neural Network Online</span>
                  </div>
                </div>

                {/* System Status */}
                <div className="absolute bottom-4 left-4 glassmorphism p-3 rounded-lg">
                  <div className="text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">CPU:</span>
                      <span className="text-cyber-cyan">99.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Memory:</span>
                      <span className="text-cyber-purple">78.4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Network:</span>
                      <span className="text-cyber-emerald">Active</span>
                    </div>
                  </div>
                </div>
              </div>
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
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Holographic AI Network Visualization */}
              <div className="relative h-96 rounded-2xl overflow-hidden glassmorphism">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/30 via-cyber-blue/20 to-cyber-cyan/30"></div>
                
                {/* Animated Network Grid */}
                <div className="absolute inset-0 opacity-30">
                  <div className="cyber-grid h-full"></div>
                </div>
                
                {/* Floating Neural Network Nodes */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-cyber-cyan rounded-full shadow-lg"
                    style={{
                      left: `${20 + (i % 4) * 20}%`,
                      top: `${20 + Math.floor(i / 4) * 25}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2 + (i * 0.2),
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
                
                {/* Central AI Core */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-cyan flex items-center justify-center">
                    <Brain className="text-white h-10 w-10" />
                  </div>
                </motion.div>
                
                {/* Floating Tech Icons */}
                <motion.div 
                  className="absolute top-8 left-8 glassmorphism p-3 rounded-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <Brain className="text-cyber-cyan h-6 w-6" />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-8 right-8 glassmorphism p-3 rounded-lg"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                >
                  <LinkIcon className="text-cyber-purple h-6 w-6" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
