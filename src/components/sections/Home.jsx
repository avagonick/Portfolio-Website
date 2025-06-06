export const Home = () => {
    return <section className="min-h-screen flex items-center justify-center relative">
        <div id="home" className="text-center z-10 px-4  scroll-mt-10 ">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 
            text-transparent bg-clip-text leading-right">
                Hello, I'm Ava Gonick
            </h1>
            
            <img src = "src/assets/Headshot.jpg" alt="Ava Gonick headshot" className = "block w-64 h-64 rounded-full object-cover object-center mx-auto"></img>
            <p className="text-gray-400 text-lg my-8 max-w-3xl mx-auto">
                 Hi! I'm Ava Gonick, a Computer Science Master's student at UC San Diego. I'm passionate about building tools with real-world impact, from improving clinical trial data quality control in support of drug development at Neurocrine Biosciences to developing surgical risk prediction machine learning models at UCLA. My work spans software development, data science, and machine learning all rooted in the belief that technology should serve people. As a UCSD Graduate Women in Computing chair, I’m also dedicated to advancing diversity in tech and supporting my community through leadership and mentorship.

            </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-[500px] mx-auto">
                <a href="#projects" className="flex-1 text-center bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                View Projects
                </a>
                <a href="#contact" className="flex-1 text-center border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
                Contact Me
                </a>
                <a href="src/assets/Gonick, Ava Resume.pdf" download="Gonick,Ava resume.pdf" className="flex-1 text-center bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                Resume
                </a>
            </div>

        </div>
    </section>
}