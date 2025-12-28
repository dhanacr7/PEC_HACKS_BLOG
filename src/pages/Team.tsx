import { Helmet } from 'react-helmet-async';
import { Crown, Github, Linkedin, Mail } from 'lucide-react';

const teamLead = {
  name: 'Moghul Kannan N',
  role: 'Team Lead',
  description:
    'Visionary leader who orchestrated the entire project, from initial concept to final implementation. Coordinated team efforts and ensured we stayed on track.',
};

const teamMembers = [
  {
    name: 'Dhanapriyan S',
    role: 'Developer',
    description:
      'Full-stack expertise brought the core functionality to life. Implemented critical features and ensured code quality throughout.',
  },
  {
    name: 'Deenathayalan M',
    role: 'Developer',
    description:
      'Specialized in backend architecture and AI integration. Made our intelligent features possible with creative solutions.',
  },
  {
    name: 'Dhaksha M',
    role: 'Developer',
    description:
      'Focused on UI/UX and frontend polish. Ensured our application looks and feels amazing on every device.',
  },
];

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Our Team | PEC Hacks</title>
        <meta
          name="description"
          content="Meet the talented team behind our hackathon project. Led by Moghul Kannan N with team members Dhanapriyan S, Deenathayalan M, and Dhaksha M."
        />
      </Helmet>

      <main className="min-h-screen pt-24 md:pt-32 pb-16 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="ambient-glow w-[500px] h-[500px] bg-primary/40 -top-48 left-1/4 animate-pulse-slow" />
        <div className="ambient-glow w-[400px] h-[400px] bg-accent/30 bottom-20 -right-48 animate-pulse-slow delay-200" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="section-title mb-6 animate-slide-up">
              <span className="text-foreground">Our </span>
              <span className="gradient-text">Team</span>
            </h1>
            <p className="section-subtitle mx-auto animate-slide-up delay-100">
              Meet the passionate individuals who came together during 36 intense
              hours to build something extraordinary.
            </p>
          </div>

          {/* Team Lead */}
          <div className="max-w-xl mx-auto mb-10 animate-scale-in delay-200">
            <div className="glass-card p-8 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
              {/* Crown Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 mb-6">
                <Crown className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Team Lead</span>
              </div>

              {/* Avatar */}
              <div className="w-28 h-28 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-0.5">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center border border-border">
                  <span className="text-3xl font-serif text-primary">
                    {teamLead.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Info */}
              <h2 className="text-2xl font-serif text-foreground mb-2">
                {teamLead.name}
              </h2>
              <p className="text-muted-foreground max-w-sm mx-auto mb-6 text-sm leading-relaxed">
                {teamLead.description}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-2">
                <a
                  href="#"
                  className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => {
              const isAccent = index % 2 === 0;

              return (
                <div
                  key={member.name}
                  className="glass-card p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg animate-scale-in"
                  style={{ animationDelay: `${(index + 2) * 80}ms` }}
                >
                  {/* Avatar */}
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full p-0.5 ${
                    isAccent 
                      ? 'bg-gradient-to-br from-accent/30 to-primary/20' 
                      : 'bg-gradient-to-br from-primary/30 to-accent/20'
                  }`}>
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center border border-border">
                      <span className={`text-xl font-serif ${isAccent ? 'text-accent' : 'text-primary'}`}>
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <div className={`text-xs font-medium mb-3 ${isAccent ? 'text-accent' : 'text-primary'}`}>
                    {member.role}
                  </div>
                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-2">
                    <a
                      href="#"
                      className="p-2 rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Team Quote */}
          <div className="mt-16 max-w-2xl mx-auto text-center animate-fade-in delay-500">
            <div className="glass-card p-8 md:p-10">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground mb-4 italic">
                "Alone we can do so little; together we can do so much."
              </blockquote>
              <p className="text-sm text-muted-foreground">
                — Our guiding principle during 36 hours of innovation
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Team;
