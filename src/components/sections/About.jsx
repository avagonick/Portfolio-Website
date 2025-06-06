import UCSD from '../../assets/UCSD.png';
import UCLA from '../../assets/UCLA.png';
import Apple from '../../assets/apple.png';
import Neurocrine from '../../assets/neurocrine.png';
import BurningRock from '../../assets/burningrock.png';
import BreakThroughTech from '../../assets/breakthroughtech.png';
import DirecTV from '../../assets/directv.png';
import UCLAHealth from '../../assets/uclahealth.jpg';
import GradWIC from '../../assets/GradWIC.png';
import CraftingForCancer from '../../assets/Crafting.png';

export const About=() => {

    const LangaugesAndTech = ['Python', 'JavaScript', 'SQL', 'C++', 'SAS', 'HTML', 'CSS', 'Git', 'Linux/Unix', 'MongoDB'];
    const LibraryAndFrameWork = ['Scikit-learn', 'Pytorch', 'Pandas', 'NumPy', 'Flask', 'React.js', 'Node.js', 'TailwindCSS', "Express.js"];

    return (<section id="about" className="min-h-screen flex items-center justify-center scroll-mt-10 mt-20">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
            </h2>
            <div className="rounded-xl p-8 border-white/30 border hover:-translate-y-1 transition-all">

             <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> &#x1F3EB; &nbsp;Education </h3>
                    <div className="text-gray-300 space-y-2">
{/*big box on top for education*/}
                    <div className="mb-1 flex items-center">
                            <img src = {UCSD} alt = "UCSD Logo" className = " -ml-2 -w-8 h-8 inline mr-2 rounded-xs"></img><strong> M.S. in Computer Science and Engineering </strong> 
                            </div>
                           <em> University of California, San Diego (2025-2026) </em>
                            <ul className="list-disc list-inside">
                            </ul>
                            <div className="mb-0 flex items-center">
                            <img src = {UCLA} alt = "UCLA Logo" className = " -ml-2 w-8 h-8 inline mr-2 rounded-xs"></img><strong>  B.S. in Computational Biology </strong> 
                            </div>
                            <em> University of California, Los Angeles (2021-2025) </em>
                            <ul className="list-disc list-inside">
                                <li> 
                                Summa Cum Laude 
                                </li>
                                <li> 
                                Minor in Data Science Engineering 
                                </li>
                                <li> 
                                Relevant Coursework: Data Structure, Algorithms and Complexity, Software Construction, Computer Organization, Data Management Systems, Neural Networks and Deep Learning I and II, Computer Vision
                                </li>
                            </ul>
                    </div>
                    </div>

{/*grid that is internships, fellowships, research, then volunteer experience*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"> 
{/* internship box*/} 
                    <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> &#x1F4BC;&nbsp; Internships </h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <div className="mb-2 flex items-center">
                            <img src = {Apple} alt = "Apple Logo" className = "-ml-2 w-8 h-8 inline mr-2 rounded-xs"></img><strong> Software Engineering Intern at Apple </strong> 
                            </div>
                            <em> June 2025 - August 2025 </em>
                            <ul className="list-disc list-inside">
                                <li> 
                                Incoming Software Engineering Intern on the AI/Data Platforms Team 
                                </li>
                            </ul>
                        </div>

                        <div>
                        <div className="mb-2 flex items-center">
                            <img src = {Neurocrine} alt = "Neurocrine Logo" className = "-ml-2 w-8 h-8 inline mr-2 rounded-xs"></img><strong> Data Management intern at Neurocrine Biosciences </strong> 
                            </div>
                            <em> June 2024 - August 2024 </em>
                            <ul className="list-disc list-inside">
                                <li> 
                                At Neurocrine Biosciences, I automated clinical trial data quality control processes using SAS and SQL, reducing quality check time from 5 hours to just 5 seconds and improving data accuracy by 25%. I also developed SAS programs to clean and standardize clinical data for FDA compliance review, cutting data cleaning time by 30%. Both projects were focused on supporting drug development.
                                </li>
                            </ul>

                            <div className="flex flex-wrap gap-2 my-4">  
                        {/* the key is coming from the index that you get with a .map*/ ["SAS", "SQL"].map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                            {tech}
                        </span>
                        ))}
                    </div>
                        </div>
                        <div>

                        <div className="mb-2 flex items-center">
                            <img src ={BurningRock} alt = "Burning Rock Logo" className = "-ml-2 w-8 h-8 inline mr-2 rounded-xs"></img><strong> Bioinformatics intern at Burning Rock </strong> 
                            </div>
                            <em> September 2023 - June 2024 </em>
                            <ul className="list-disc list-inside">
                                <li> 
                                At Burning Rock I analyzed over 1,500 DNA sequences in Python to identify patient DNA factors influencing clinical trial eligibility, helping determine which patients should be enrolled based on their genetic profile.
                                </li>
                            </ul>
                            <div className="flex flex-wrap gap-2 my-4">  
                        {/* the key is coming from the index that you get with a .map*/ ["Python"].map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                            {tech}
                        </span>
                        ))}
                    </div>
                        </div>
                    </div>
                    </div>

{/* fellowship box*/} 
                    <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> &#129504;&nbsp; Fellowships </h3>
                    <div className="space-y-4 text-gray-300">
                    <div>
                    <div className="mb-1 flex items-center">
                            <img src = {BreakThroughTech} alt = "Break Through Tech Logo" className = "-ml-2 w-8 h-8 inline mr-2 rounded-xs object-cover object-center"></img><strong> Fellow at Break Through Tech AI through Cornell Tech </strong> 
                            </div>
                            <em> May 2024 - May 2025 </em>
                            <ul className="list-disc list-inside">
                                <li> 
                                I was selected from over 3,000 applicants as a Break Through Tech AI Fellow, a Cornell Tech program dedicated to empowering women The fellowship advanced my technical expertise and professional development. I also completed a Cornell Tech Machine Learning Foundations through the program. 
                                </li>
                            </ul>
                            <div className="flex flex-wrap gap-2 my-4">  
                        {/* the key is coming from the index that you get with a .map*/ ["Python", "Scikit-learn", 'Pytorch', 'Pandas'].map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                            {tech}
                        </span>
                        ))}
                    </div>

                        </div>
                        <div>
                        <div className="mb-1 flex items-center">
                            <img src = {DirecTV} alt = "DirecTV Logo" className = "-ml-2 w-8 h-8 inline mr-2 rounded-xs object-cover object-center"></img><strong> AI Studio Fellow at DirecTV </strong> 
                            </div>
                            <em> September 2024 - December 2024 </em>
                            <ul className="list-disc list-inside">
                                <li> 
                                  As an AI Studio Fellow at DirecTV, I conducted an academic project analyzing the Yelp Academic Dataset to identify the top 30 features distinguishing high- and low-rated restaurants using feature importance analysis. I then applied NLP techniques to customer Yelp reviews, extracting the top five complaints for over 2,000 low-rated restaurants. These insights were used to develop tailored recommendations for low-rated restaurants aimed at improving customer satisfaction.
                                 </li>
                            </ul>
                            <div className="flex flex-wrap gap-2 my-4">  
                        {/* the key is coming from the index that you get with a .map*/ ["Python", "Scikit-learn", 'Pandas', 'Keras'].map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                            {tech}
                        </span>
                        ))}
                    </div>
                        </div>
                    </div>
                    </div>

{/* research box*/} 
                    <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> &#129514;&nbsp; Research Experience </h3>
                    <div className="space-y-4 text-gray-300">
                    <div>
                    <div className="mb-2 flex items-center">
                            <img src = {UCLAHealth} alt = "UCLA Health Logo" className = "-ml-2 w-8 h-8 inline mr-2 rounded-xs object-cover object-center"></img><strong> Undergraduate Machine Learning Researcher at the UCLA Chiang Lab </strong> 
                            </div>
                            <em>  November 2023 - June 2025 </em>
                            <ul className="list-disc list-inside">
                                <li> 
                                In the Chiang Lab, I built a Random Forest model to predict postoperative complications using UCI Hospital patient data. Starting from raw clinical data with over 7,000 features, I led data cleaning and preprocessing before training a Random Forest classifier that achieved 96% accuracy. This work supported the validation of an existing UCLA model and the development of a real-time surgical risk prediction tool.
                                </li>
                                <li>
                                I also worked on a diagnostic model for lower urinary tract symptoms, focusing on reducing the 50-question feature set to improve clinical usability. I applied techniques like LASSO and SHAP to retain predictive power while making the model more practical for real-world use. 
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 my-4">  
                        {/* the key is coming from the index that you get with a .map*/ ["Python", "Scikit-learn", 'Pandas'].map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                            {tech}
                        </span>
                        ))}
                    </div>
                        </div>
                    </div>

{/*Community Service box*/}
                    <div className="p-6 rounded-xl border-white/20 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4"> &#129309;&nbsp; Community Service </h3>
                    <div className = "space-y-4 text-gray-300">
                    <div>
                    <div className="mb-2 flex items-center">
                            <img src = {GradWIC} alt = "GradWIC Logo" className = "-ml-2 w-8 h-8 inline mr-2 rounded-xs object-cover object-center"></img><strong> Community Chair of UCSD Graduate Women In Computing </strong> 
                            </div>
                            <em>  June 2025 - Present </em>
                            <ul className="list-disc list-inside">
                                <li> 
                                I'm a Community Co-Chair for GradWIC, where I help organize events that support women and underrepresented minorities in computing. This includes planning quarterly social events to foster community, as well as coordinating technical talks, industry outreach, and professional development opportunities. 
                                </li>
                            </ul>
                        </div>
                       <div>
                    <div className="mb-2 flex items-center">
                            <img src = {CraftingForCancer} alt = "Crafting For Cancer Logo" className = "-ml-2 w-8 h-8 inline mr-2 rounded-xs object-cover object-center"></img><strong> President of UCLA Crafting For Cancer </strong> 
                            </div>
                            <em> June 2022 - June 2025 </em>
                            <ul className="list-disc list-inside">
                                <li> 
                                As President of Crafting for Cancer (CFC), I lead efforts to support cancer patients through handmade donations and fundraisers. I established partnerships with the Jessie Rees Foundation enabling us to donate over 2000 beanies to patients. I also led fundraisers selling handmade crocheted items created by club members, raising over $1,000 for various LA-based cancer associations. In addition, I maintain our website, which reaches over 1,000 monthly users. 
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 my-4">  
                        {/* the key is coming from the index that you get with a .map*/ ["JavaScript", "HTML", 'CSS'].map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                            {tech}
                        </span>
                        ))}
                    </div>
                        </div>       
                    </div>
                    

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Languages and Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                        {LangaugesAndTech.map((tech, key) => (
                            <span className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition' key={key}>
                                {tech}
                            </span>
                        ))}
                        </div>                  
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Libraries and Frameworks</h3>
                        <div className="flex flex-wrap gap-2">
                        {LibraryAndFrameWork.map((tech, key) => (
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