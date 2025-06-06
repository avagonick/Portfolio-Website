export const Contact = () => {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div  id = "contact" className="max-w-5xl mx-auto px-4 text-center scroll-mt-10 ">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
            </h2>
            <div className = "p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all mb-10">
            <div className = "p-6 rounded-xl border border-white/15 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all mb-10">
            <h3 className="text-2xl pb-1"> Email </h3>
            <a href="mailto:gonickava@gmail.com"><h4 className="text-l text-blue-400 hover:text-blue-300 transition-colors my-4"> gonickava@gmail.com </h4></a>
            </div>
            <div className = "p-6 rounded-xl border border-white/15 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-2xl pb-1"> LinkedIn </h3>
            <a href = "https://www.linkedin.com/in/avagonick/" target="_blank" rel="noopener noreferrer"><h4 className="text-l text-blue-400 hover:text-blue-300 transition-colors my-4"> https://www.linkedin.com/in/avagonick/ </h4> </a>
            </div>
            </div>
            </div>
            
        </section>
    )
}