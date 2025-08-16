import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Network, 
  MessageSquare, 
  Brain, 
  Database, 
  Shield, 
  Cloud,
  Cpu,
  Zap,
  Lock,
  Globe
} from 'lucide-react';

export default function Technology() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const technologies = [
    {
      icon: Network,
      title: 'Advanced Neural Networks',
      description: 'Leveraging state-of-the-art transformer architectures and custom neural network designs for superior performance.',
      tags: ['Transformers', 'Deep Learning'],
      color: 'cyber-blue'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities that understand context, intent, and nuance in human communication.',
      tags: ['NLP', 'Context Aware'],
      color: 'cyber-pink'
    },
    {
      icon: Brain,
      title: 'Autonomous Decision Making',
      description: 'AI agents capable of making intelligent decisions and taking actions without constant human supervision.',
      tags: ['Autonomous', 'Decision Trees'],
      color: 'cyber-emerald'
    },
    {
      icon: Database,
      title: 'Real-time Data Processing',
      description: 'Lightning-fast data processing and analysis to provide instant insights and responses.',
      tags: ['Real-time', 'Analytics'],
      color: 'cyber-gold'
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security with end-to-end encryption and privacy-preserving machine learning.',
      tags: ['Encryption', 'Privacy'],
      color: 'red-400'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Architecture',
      description: 'Scalable, distributed systems designed for global deployment and high availability.',
      tags: ['Cloud', 'Scalable'],
      color: 'cyan-400'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-dark-secondary relative">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cutting-Edge <span className="text-cyber-purple neon-text">Technology Stack</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our AI agents are built on the latest advancements in machine learning, natural language processing, and autonomous systems
            </motion.p>

            {/* Tech Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: Cpu, value: '99.9%', label: 'Uptime', color: 'cyber-emerald' },
                { icon: Zap, value: '<50ms', label: 'Response Time', color: 'cyber-gold' },
                { icon: Lock, value: '256-bit', label: 'Encryption', color: 'cyber-pink' },
                { icon: Globe, value: '24/7', label: 'Global Support', color: 'cyber-cyan' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glassmorphism p-6 rounded-xl text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <stat.icon className={`h-8 w-8 text-${stat.color} mx-auto mb-2`} />
                  <div className={`text-2xl font-bold text-${stat.color}`}>{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="py-20 bg-dark-primary relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/5 to-cyber-cyan/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className={`glassmorphism p-6 border-0 hover:shadow-xl hover:shadow-${tech.color}/20 transition-all duration-300 group h-full`}>
                  <CardContent className="p-0 space-y-4">
                    <div className={`w-12 h-12 bg-${tech.color}/20 rounded-lg flex items-center justify-center group-hover:bg-${tech.color}/30 transition-colors`}>
                      <tech.icon className={`text-${tech.color} text-xl h-6 w-6`} />
                    </div>
                    
                    <h3 className={`text-xl font-bold group-hover:text-${tech.color} transition-colors`}>
                      {tech.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4">
                      {tech.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {tech.tags.map((tag) => (
                        <Badge 
                          key={tag}
                          variant="secondary" 
                          className={`bg-${tech.color}/20 text-${tech.color} border-${tech.color}/30 hover:bg-${tech.color}/30 transition-colors`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Progress bar animation */}
                    <motion.div
                      className={`h-1 bg-gradient-to-r from-${tech.color} to-transparent rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="py-20 bg-dark-secondary relative">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              System <span className="text-cyber-cyan neon-text">Architecture</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our distributed architecture ensures scalability, reliability, and performance at global scale
            </p>

            <div className="mt-12">
              <motion.img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
                alt="AI System Architecture Diagram"
                className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-purple/20 to-transparent rounded-2xl max-w-4xl mx-auto"></div>
            </div>

            {/* Architecture Components */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                {
                  title: "Frontend Layer",
                  description: "React-based interfaces with real-time WebSocket connections",
                  technologies: ["React", "TypeScript", "Tailwind CSS", "WebSocket"]
                },
                {
                  title: "AI Processing Layer", 
                  description: "Distributed AI inference engines with load balancing",
                  technologies: ["PyTorch", "TensorFlow", "CUDA", "Kubernetes"]
                },
                {
                  title: "Data Layer",
                  description: "High-performance databases with real-time synchronization",
                  technologies: ["PostgreSQL", "Redis", "ElasticSearch", "Apache Kafka"]
                }
              ].map((component, index) => (
                <motion.div
                  key={component.title}
                  className="glassmorphism p-6 rounded-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-bold text-cyber-purple mb-3">{component.title}</h3>
                  <p className="text-gray-300 mb-4">{component.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {component.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-cyber-purple/30 text-cyber-purple">
                        {tech}
                      </Badge>
                    ))}
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
