import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/project1.jpg"
  },
  // More projects...
];

export default function Projects() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}