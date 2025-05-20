export const Projects = () => {
    return <section id="projects" className= "min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects</h2>
            <div className = "grid grid=cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <div className="mb-1 flex items-center mb-2">
                    <img src = "src/assets/DocuDoc.png" alt="DocuDoc Logo" className = "mr-3 -ml-2 w-20 h-20 inline mr- rounded-xs"></img><h3 className="text-xl font-bold">DocuDoc</h3>
                </div>
                    <p className="text-gray-400 mb-4">
                        Some description of this 
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">  
                        {/* the key is coming from the index that you get with a .map*/ ["React", "Python", "Tailwind"].map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                            {tech}
                        </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://devpost.com/software/docudoc" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → Devpost </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <div className="mb-1 flex items-center mb-2">
                    <img src = "src/assets/MelodyMentor.png" alt="Melody Mentor Logo" className = "mr-3 -ml-2 w-15 h-20 inline mr- rounded-xs"></img><h3 className="text-xl font-bold">Melody Mentor</h3>
                </div>
                    <p className="text-gray-400 mb-4">
                        Some description of this 
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">  
                        {/* the key is coming from the index that you get with a .map*/ ["React", "Python", "Tailwind"].map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                            {tech}
                        </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://devpost.com/software/melody-mentor-851hmf" className="text-blue-400 hover:text-blue-300 tranistion-colors my-4"> View Project → Devpost </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Skin Disorder Detector</h3>
                    <p className="text-gray-400 mb-4">
                        Some description of this 
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">  
                        {/* the key is coming from the index that you get with a .map*/ ["Python", "PyTorch"].map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                            {tech}
                        </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/bettzv2/AJL-TEAM-2" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → Github </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Be Meal</h3>
                    <p className="text-gray-400 mb-4">
                        Some description of this 
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4"  > 
                        {/* the key is coming from the index that you get with a .map*/ ["React", "JavaScript", "Node.js", "MongoDB", "Tailwind"].map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                            {tech}
                        </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/ltanggit/beMeal" className="text-blue-400 hover:text-blue-300 transtion-colors my-4"> View Project → Github </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}