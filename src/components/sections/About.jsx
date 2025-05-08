export const About=() => {

    const frontendSkills = ['React', 'TailwindCSS'];
    const backendSkills = ['Node.js', 'Python', 'MongoDB'];

    return (<section id="about" className="min-h-screen flex items-center justify-center scroll-mt-10">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
            </h2>
            <div className="rounded-xl p-8 border-white/30 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 mb-6"> 
                    Generic Text I need to write more about myself Who am I quicker summary idk ill figure it out all later?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

{/* education box*/} 
                    <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> &#x1F3EB; Education </h3>
                    <div className="text-gray-300 space-y-2">
                    <div className="mb-1 flex items-center">
                            <img src = "src/assets/UCSD.png" alt = "UCSD Logo" className = "w-8 h-8 inline mr-2 rounded-xs"></img><strong> M.S. in Computer Science and Engineering </strong> 
                            </div>
                            <ul className="list-disc list-inside">
                                <li> 
                                University of California, San Diego (2025-2026) 
                                </li>
                            </ul>
                            <div className="mb-1 flex items-center">
                            <img src = "src/assets/UCLA.png" alt = "UCLA Logo" className = "w-8 h-8 inline mr-2 rounded-xs"></img><strong>  B.S. in Computational Biology </strong> 
                            </div>
                            <ul className="list-disc list-inside">
                                <li> 
                                University of California, Los Angeles (2021-2025) 
                                </li>
                                <li> 
                                Summa Cum Laude 
                                </li>
                                <li> 
                                Minor in Data Science Engineering 
                                </li>
                                <li> 
                                Relevant Coursework: Write them out whatever 
                                </li>
                            </ul>
                    </div>
                    </div>

{/* internship box*/} 
                    <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> &#x1F4BC; Internships </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <div className="mb-1 flex items-center">
                            <img src = "src/assets/apple.png" alt = "Apple Logo" className = "w-8 h-8 inline mr-2 rounded-xs"></img><strong> Software Engineering Intern at Apple </strong> 
                            </div>
                            <ul className="list-disc list-inside">
                                <li> (June 2025 - August 2025) </li>
                                <li> 
                                What I did there yahooo 
                                </li>
                            </ul>
                        </div>
                        <div>
                        <div className="mb-1 flex items-center">
                            <img src = "src/assets/neurocrine.jpg" alt = "Neurocrine Logo" className = "w-8 h-8 inline mr-2 rounded-xs"></img><strong> Data Management intern at Neurocrine Biosciences </strong> 
                            </div>
                            <ul className="list-disc list-inside">
                                <li> (June 2024 - August 2024) </li>
                                <li> 
                                What I did there yahooo 
                                </li>
                            </ul>
                        </div>
                        <div>
                        <div className="mb-1 flex items-center">
                            <img src = "src/assets/burningrock.png" alt = "Burning Rock Logo" className = "w-8 h-8 inline mr-2 rounded-xs"></img><strong> Bioinformatics intern at Burning Rock </strong> 
                            </div>
                            <ul className="list-disc list-inside">
                                <li> (September 2023 - June 2024) </li>
                                <li> 
                                What I did there yahooo 
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>

{/* fellowship box*/} 
                    <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> &#129504; Fellowships </h3>
                    <div className="space-y-4 text-gray-300">
                    <div>
                    <div className="mb-1 flex items-center">
                            <img src = "src/assets/breakthroughtech.png" alt = "Break Through Tech Logo" className = "w-8 h-8 inline mr-2 rounded-xs object-cover object-center"></img><strong> Break Through Tech AI through Cornell Tech fellow </strong> 
                            </div>
                            <ul className="list-disc list-inside">
                                <li> (May 2024 - May 2025) </li>
                                <li> 
                                What I did there yahooo 
                                </li>
                            </ul>
                        </div>
                        <div>
                        <div className="mb-1 flex items-center">
                            <img src = "src/assets/directv.png" alt = "DirecTV Logo" className = "w-8 h-8 inline mr-2 rounded-xs object-cover object-center"></img><strong> AI Studio Fellow at DirecTV </strong> 
                            </div>
                            <ul className="list-disc list-inside">
                                <li> (September 2024 - December 2024) </li>
                                <li> 
                                What I did there yahooo 
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>

{/* research box*/} 
                    <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> &#129514; Research Experience </h3>
                    <div>
                    <div className="mb-1 flex items-center">
                            <img src = "src/assets/uclahealth.jpg" alt = "UCLA Health Logo" className = "w-8 h-8 inline mr-2 rounded-xs object-cover object-center"></img><strong> Undergraduate Machine Learning Researcher at the UCLA Chiang Lab </strong> 
                            </div>
                            <ul className="list-disc list-inside">
                                <li> (November 2023 - June 2025) </li>
                                <li> 
                                What I did there yahooo 
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                        {frontendSkills.map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                                {tech}
                            </span>
                        ))}
                        </div>                  
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                        {backendSkills.map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                                {tech}
                            </span>
                        ))}
                        </div>
                        </div>    
                </div>

            </div>
        </div>

    </section>
)}