
import { Code, FileCode, Terminal, Database, Webhook, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';

const DevelopmentMenu = () => {
  const developmentOptions = [
    {
      title: "Langages & Frameworks",
      description: "Du no-code à l'assembleur quantique",
      icon: <FileCode className="h-6 w-6" />,
      link: "/modules/development/languages",
      color: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      title: "DevOps & CI/CD",
      description: "Automatisez vos pipelines, tests et déploiements",
      icon: <Terminal className="h-6 w-6" />,
      link: "/modules/development/devops",
      color: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      title: "Bases de données",
      description: "SQL, NoSQL, NewSQL, Time Series, Graph, Vectorielles",
      icon: <Database className="h-6 w-6" />,
      link: "/modules/development/databases",
      color: "bg-gradient-to-br from-blue-600 to-blue-900"
    },
    {
      title: "APIs & Intégrations",
      description: "REST, GraphQL, gRPC, WebSockets, MQTT et plus",
      icon: <Webhook className="h-6 w-6" />,
      link: "/modules/development/api",
      color: "bg-gradient-to-br from-blue-500 to-indigo-700"
    },
    {
      title: "Développement collaboratif",
      description: "Édition en temps réel, version control, merge IA",
      icon: <GitBranch className="h-6 w-6" />,
      link: "/modules/development/collab",
      color: "bg-gradient-to-br from-blue-600 to-indigo-800"
    },
    {
      title: "Studio complet",
      description: "Éditeur universel avec support IA et déploiement avancé",
      icon: <Code className="h-6 w-6" />,
      link: "/modules/development",
      color: "bg-gradient-to-br from-indigo-600 to-blue-700"
    }
  ];

  return (
    <div className="py-10">
      <h2 className="text-2xl font-bold mb-8 text-center">Outils de développement</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {developmentOptions.map((option, index) => (
          <Link 
            to={option.link} 
            key={index} 
            className="dev-card p-6 rounded-lg border border-muted hover:border-omni-primary transition-all duration-300"
          >
            <div className={`${option.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white`}>
              {option.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
            <p className="text-foreground/70">{option.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DevelopmentMenu;
