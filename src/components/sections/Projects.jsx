import DocuDoc from '../../assets/DocuDoc.png';
import MelodyMentor from '../../assets/MelodyMentor.png';

export const Projects = () => {
    return <section className= "min-h-screen flex items-center justify-center mt-10">
        <div  id="projects" className="max-w-5xl mx-auto px-4 scroll-mt-10 ">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects</h2>
            <div className = "grid grid=cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <div className="mb-1 flex items-center mb-2">
                    <img src = {DocuDoc} alt="DocuDoc Logo" className = "mr-3 -ml-2 w-20 h-20 inline mr- rounded-xs"></img><h3 className="text-xl font-bold">DocuDoc</h3>
                </div>
                    <p className="text-gray-400 mb-4">
                        At IrvineHacks 2025, my team and I won the Patient Safety Track for DocuDoc, a mobile app that helps patients better understand and retain critical information from doctor visits. The app records appointments, transcribes them and generates personalized summaries with a medical summary-focused model. I worked on the backend, building the transcription pipeline, deploying a medical summary model from HuggingFace and connecting the backend using Flask.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">  
                        {/* the key is coming from the index that you get with a .map*/ ["Python", "Pytorch", "Flask"].map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                            {tech}
                        </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://devpost.com/software/docudoc" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → Devpost </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                <div className="mb-1 flex items-center mb-2">
                    <img src = {MelodyMentor} alt="Melody Mentor Logo" className = "mr-3 -ml-2 w-15 h-20 inline mr- rounded-xs"></img><h3 className="text-xl font-bold">Melody Mentor</h3>
                </div>
                    <p className="text-gray-400 mb-4">
                        For LAHacks 2025, my team and I built Melody Mentor, a personalized music assistant that helps young musicians improve by providing AI-driven feedback and guidance. Users can upload or record performance videos, submit sheet music for deeper analysis, and chat with the assistant for specific advice. I worked on the backend, using Python to process users' video and text inputs, as well as integrate Google Gemini to analyze user-submitted content and generate personalized suggestions. I also used MongoDB to manage user profiles and session history, enabling context-aware feedback across multiple interactions.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">  
                        {/* the key is coming from the index that you get with a .map*/ ["Python ", "Flask", "MongoDB"].map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                            {tech}
                        </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://devpost.com/software/melody-mentor-851hmf" target="_blank" className="text-blue-400 hover:text-blue-300 tranistion-colors my-4"> View Project → Devpost </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Skin Disorder Detector</h3>
                    <p className="text-gray-400 mb-4">
                        As part of a Break Through Tech AI and Algorithmic Justice League Kaggle competition, I worked with a team of 4 to build a model that detected 21 skin conditions across diverse skin tones. For this model, I trained a pre-trained Visual Transformer on an outside dataset before fine-tuning on the competition dataset. I also optimized the model with learning rate scheduling and weight decay resulting in my team ranking in the top 15% of the competition. 
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">  
                        {/* the key is coming from the index that you get with a .map*/ ["Python", "PyTorch"].map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                            {tech}
                        </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/bettzv2/AJL-TEAM-2" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → Github </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Be Meal</h3>
                    <p className="text-gray-400 mb-4">
                        I worked with a team to build BeMEAL, a social media app inspired by BeReal and Instagram that lets users share photos of their meals in real time, build posting streaks, and follow friends' food journeys. Built with the MERN stack (MongoDB, Express, React, Node.js), I focused on backend user functionality, managing user profiles, implementing follow/unfollow features, handling profile picture uploads, and enabling user search. 
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4"  > 
                        {/* the key is coming from the index that you get with a .map*/ ["JavaScript", "MongoDB", "Node.js", "Express.js"].map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                            {tech}
                        </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="https://github.com/ltanggit/beMeal" target="_blank" className="text-blue-400 hover:text-blue-300 transtion-colors my-4"> View Project → Github </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}