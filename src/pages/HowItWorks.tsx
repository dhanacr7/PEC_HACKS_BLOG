import { Helmet } from 'react-helmet-async';
import {
  Server,
  Smartphone,
  Database,
  Brain,
  User,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Settings,
  Zap,
  Shield,
  BookOpen,
  Code,
  Globe,
} from 'lucide-react';

const components = [
  {
    icon: Server,
    title: 'Flask Face Recognition Service (Python)',
    description: 'AI facial recognition using InsightFace ArcFace model for accurate face embeddings and liveness detection.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Server,
    title: 'Java Spring Boot Backend',
    description: 'Core attendance and student management system handling business logic and database operations.',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
  {
    icon: Smartphone,
    title: 'Flutter Mobile App',
    description: 'Cross-platform mobile application providing student and teacher interfaces with real-time features.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Brain,
    title: 'AI Learning Backend (FastAPI)',
    description: 'Personalized learning system generating adaptive roadmaps and interactive content based on student profiles.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
];

const studentJourney = [
  {
    step: 1,
    icon: User,
    title: 'Authentication & Setup',
    description: 'Student logs in with username/password. App stores login state persistently. Demo login: arc/arc for testing.',
  },
  {
    step: 2,
    icon: Globe,
    title: 'BLE Beacon Reception',
    description: 'After authentication, student device receives BLE beacon from teacher. Signal propagates through mesh topology to all nearby student devices, unlocking attendance functionality.',
  },
  {
    step: 3,
    icon: Shield,
    title: 'Face Registration (First Time)',
    description: 'Navigate to face recognition screen. Perform liveness check: turn left → turn right → smile. Face captured and processed only after BLE beacon reception.',
  },
  {
    step: 4,
    icon: CheckCircle,
    title: 'Daily Attendance Marking',
    description: 'Attendance tab becomes active → Face recognition → Liveness detection → Image sent to Flask service → Attendance marked as PRESENT in database.',
  },
];

const teacherJourney = [
  {
    step: 1,
    icon: Settings,
    title: 'Attendance Management',
    description: 'Start attendance session and BLE beacon (1-hour timer). Beacon signal propagates via mesh topology to students. View all students with real-time status. Monitor session progress.',
  },
  {
    step: 2,
    icon: User,
    title: 'Student Configuration',
    description: 'Search and select students. Set up face recognition for new students. Update student profiles and learning parameters.',
  },
];

const keyFeatures = [
  {
    icon: Shield,
    title: 'Advanced Facial Recognition',
    description: 'InsightFace ArcFace model with liveness detection, cosine similarity matching (threshold: 0.35), and Google ML Kit integration.',
  },
  {
    icon: CheckCircle,
    title: 'Smart Attendance System',
    description: 'One record per student (upsert system), status tracking: PRESENT/ABSENT/LATE, teacher oversight and manual corrections.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Learning',
    description: 'Personalized roadmaps, sequential topic unlocking, interactive mini-sessions with quizzes, automatic grading and chatbot support.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Role-based navigation, persistent login sessions, app exit monitoring with notifications, and Bluetooth integration.',
  },
  {
    icon: Globe,
    title: 'BLE Mesh Topology',
    description: 'Teacher initiates BLE beacon that propagates through student devices via mesh network. Attendance marking only activates after receiving the beacon signal.',
  },
];

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How It Works | PEC Hacks</title>
        <meta
          name="description"
          content="Comprehensive educational platform with facial recognition attendance and AI-powered personalized learning."
        />
      </Helmet>

      <main className="min-h-screen pt-24 md:pt-32 pb-16 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="ambient-glow w-[500px] h-[500px] bg-primary/40 -top-64 left-1/4 animate-pulse-slow" />
        <div className="ambient-glow w-[400px] h-[400px] bg-accent/30 bottom-32 -right-48 animate-pulse-slow delay-200" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <h1 className="section-title mb-6 animate-slide-up">
              <span className="text-foreground">System </span>
              <span className="gradient-text">Architecture</span>
            </h1>
            <p className="section-subtitle mx-auto animate-slide-up delay-100">
              Your app is a comprehensive educational platform with 4 main components that work together to create a complete learning ecosystem.
            </p>
          </div>

          {/* System Components */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-serif text-center text-foreground mb-12">
              4 Main Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {components.map((component, index) => {
                const Icon = component.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg ${component.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${component.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {component.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {component.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Student Journey */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-serif text-center text-foreground mb-4">
              Student Journey
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Complete workflow from authentication to personalized AI learning
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {studentJourney.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.step}
                      className="flex gap-6 items-start animate-slide-up"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        {index < studentJourney.length - 1 && (
                          <div className="w-0.5 h-16 bg-border mx-auto mt-4"></div>
                        )}
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-semibold text-primary">
                            Step {step.step}
                          </span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Teacher Journey */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-serif text-center text-foreground mb-4">
              Teacher Journey
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Management and oversight capabilities for educators
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teacherJourney.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.step}
                      className="glass-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg animate-scale-in"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-accent">
                              Step {step.step}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-serif text-center text-foreground mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {keyFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="glass-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Technical Overview */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-8">
                Technical Data Flow
              </h2>
              <div className="glass-card p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Attendance System
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Flutter App → Face Image → Flask Service (Port 5000) → ArcFace Recognition → Match Score → Spring Boot (Port 8082) → PostgreSQL Database
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Brain className="w-5 h-5 text-accent" />
                      Learning System
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Flutter App → Student Profile → AI Backend (FastAPI) → Generate Roadmap → Mini-Sessions Created → Quiz Completion → Progress Update
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-orange-500" />
                      BLE Mesh Network
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Teacher Device → BLE Beacon → Student Device 1 → Student Device 2 → ... → Mesh Propagation → Attendance Unlock → Face Recognition Enabled
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Summary */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="glass-card p-8 md:p-10 animate-fade-in delay-500">
              <h2 className="text-xl md:text-2xl font-serif text-foreground mb-4">
                Complete Educational Ecosystem
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The system creates a complete educational ecosystem where students can mark attendance through facial recognition and engage with personalized AI-generated learning content, while teachers maintain oversight and can configure the system for optimal learning outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  Facial Recognition
                </span>
                <span className="px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                  AI Learning
                </span>
                <span className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
                  BLE Mesh Topology
                </span>
                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  Real-time Attendance
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HowItWorks;
