import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import Depot from "./assets/Depot.png"
import Pallotti from "./assets/Pallotti.png"
import Pulse from "./assets/DevPulse.png"
import Wallet from "./assets/Wallet.png"
import Variety from "./assets/Variety-master.png"
import profile from "./assets/Profile.jpeg"

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
   
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
  
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#3498db',
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    camera.position.z = 2;
    
   
    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.x += 0.0003;
      particlesMesh.rotation.y += 0.0005;
      renderer.render(scene, camera);
    };
    
    animate();
    
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
  
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  

  const projects = [
    {
      id: 1,
      title: "Depot E-commerce",
      description: "A comprehensive e-commerce platform developed as part of the Andela Technical Leadership Program with a team of 7 developers. Features include user authentication, product catalog, shopping cart, and payment processing.",
      technologies: ["React.js", "Node.js", "sequalize", "Postgresql", "Redux", "Redis","Stripe"],
      image: Depot,
      github: "https://github.com/atlp-rwanda/e-commerce-lydia-32-fn",
      demo: "https://e-commerce-lydia-32-fn-staging.onrender.com/"
    },
    {
      id: 2,
      title: "Pallotti Children Hope Centre",
      description: "A visually appealing and fully responsive website showcasing the Pallotti Children Hope Centre's activities and vision. Implemented with modern web technologies for optimal performance.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: Pallotti,
      github: "https://github.com/robsdagreat/pchc-project",
      demo: "https://pallottichildrenhopecentre.org.rw/"
    },
    {
      id: 3,
      title: "Dev Pulse",
      description: "Pulse is a platform designed to handle ratings for the companies in the Ed-tech industries with the its first paying customer being Andela. It is currently under development using modern web technologies that prioritize speed and security. This repo holds the codebase for the frontend part of the platform which uses Reactjs javascript framework for build modern UIs.",
      technologies: ["React.js", "Redux", "Node.js", "MongoDB", "GraphQL", "Codeclimate", "Circle CI", "Docker", "ngnix"],
      image: Pulse,
      github: "https://github.com/atlp-rwanda/atlp-devpulse-fn",
      demo: "https://task-manager-demo.vercel.app/"
    },
    {
      id: 4,
      title: "Wallet management system",
      description: "A Wallet Management System is a centralized platform designed to help users manage multiple financial accounts seamlessly, such as bank accounts, cash apps, credit cards, and digital wallets. It provides a unified interface to track, monitor, and control all financial activities across different accounts in one place.",
      technologies: ["React.js", "TypeScript", "Redux", "Tailwind", "c#", "Docker"],
      image: Wallet,
      github: "https://github.com/robsdagreat/COA-Front",
      demo: "https://coa-front.vercel.app/"
    },
    {
      id: 5,
      title: "Variety master",
      description: "Developed a machine learning-based recommendation system to help farmers choose the best crop varieties based on environmental conditions such as soil type, climate, and water availability. The system analyzes factors like disease tolerance, yield productivity, and growth duration to provide tailored recommendations, improving agricultural efficiency and productivity. Built using Python, Scikit-learn, and Streamlit, this project demonstrates the application of data science in solving real-world agricultural challenges. "+"Disclaimer❕: This project is in its ealry stage so the demo might not  be working at the moment.Stay tuned to check how it will turn out to be in the near future🚀🚀🚀",
      technologies: ["Python", "Streamlite", "Google colab"],
      image: Variety,
      github: "https://github.com/robsdagreat/variety-adventure-v1",
      demo: "https://variety-adventure-v1.vercel.app/"
    },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Three.js background */}
      <div className="fixed inset-0 z-0" ref={mountRef}></div>
      
      {/* Navigation */}
      <nav className="relative z-10 bg-black bg-opacity-50 p-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="text-xl font-bold">Robs-Dagreat</div>
          <div className="hidden md:flex space-x-6">
            <button 
              className={`px-2 py-1 ${activeSection === 'home' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300'}`}
              onClick={() => setActiveSection('home')}
            >
              Home
            </button>
            <button 
              className={`px-2 py-1 ${activeSection === 'about' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300'}`}
              onClick={() => setActiveSection('about')}
            >
              About
            </button>
            <button 
              className={`px-2 py-1 ${activeSection === 'projects' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300'}`}
              onClick={() => setActiveSection('projects')}
            >
              Projects
            </button>
            <button 
              className={`px-2 py-1 ${activeSection === 'contact' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-300'}`}
              onClick={() => setActiveSection('contact')}
            >
              Contact
            </button>
          </div>
          <a 
            href="https://drive.google.com/file/d/1JPOH7Wjd6nJwjFwJLTrLqpC1giZF_yAE/view?usp=sharing  " 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors"
          >
            Resume
          </a>
        </div>
      </nav>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-blue-400">Robert Rwibutso Hakuzimana</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              A passionate Software developer from Rwanda
              </h2>
              <p className="text-gray-400 mb-6 text-lg">
                I'm a versatile software developer with expertise in modern web and mobile technologies, 
                specializing in React Native and Flutter for cross-platform mobile development, along with
                strong backend skills in Node.js, API development and I come up as very handy when it comes to shiping, deploying and maintaining your apps and softwares .
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setActiveSection('projects')}
                  className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-md transition-colors"
                >
                  View Projects
                </button>
                <button 
                  onClick={() => setActiveSection('contact')}
                  className="border border-blue-400 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 px-6 py-3 rounded-md transition-colors"
                >
                  Contact Me
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-none shadow-lg">
                  <img 
                    src={profile} 
                    alt="Robert Rwibutso Hakuzimana" 
                    className="w-full h-full object-cover object-center"
                  />
              </div>
            </div>
          </div>
        )}
        
        {/* About Section */}
        {activeSection === 'about' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 border-b border-blue-500 pb-2 inline-block">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-4">
                  I'm a passionate software developer with a strong foundation in both frontend and backend technologies.
                  My journey in software development started with web technologies, and I've expanded my expertise to include
                  mobile development with React Native and Flutter.
                </p>
                <p className="text-gray-300 mb-4">
                  I've worked on diverse projects, from e-commerce platforms to community websites, and have experience
                  collaborating with teams of developers to deliver high-quality solutions.
                </p>
                <p className="text-gray-300">
                  My experience at Andela's Technical Leadership Program has equipped me with not only technical skills but also
                  leadership and business-oriented professional capabilities that enable me to contribute effectively to any team.
                </p>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Interests</h3>
                  <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Game development using Unity 3D and C#</li>
                    <li>Building LLMs using langchain.js</li>
                    <li>IoT engineering</li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-800 p-3 rounded-md">
                    <span className="font-medium">React Native</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full w-11/12"></div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-md">
                    <span className="font-medium">Flutter</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full w-10/12"></div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-md">
                    <span className="font-medium">JavaScript/TypeScript</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-md">
                    <span className="font-medium">Node.js</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full w-11/12"></div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-md">
                    <span className="font-medium">React.js</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-md">
                    <span className="font-medium">SQL/NoSQL</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full w-10/12"></div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-md">
                    <span className="font-medium">REST/GraphQL APIs</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full w-11/12"></div>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-3 rounded-md">
                    <span className="font-medium">DevOps/CI/CD</span>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full w-9/12"></div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 mt-6 text-blue-400">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-800 p-3 rounded-md text-center">Leadership</div>
                  <div className="bg-gray-800 p-3 rounded-md text-center">Problem-Solving</div>
                  <div className="bg-gray-800 p-3 rounded-md text-center">Teamwork</div>
                  <div className="bg-gray-800 p-3 rounded-md text-center">Communication</div>
                  <div className="bg-gray-800 p-3 rounded-md text-center">Time Management</div>
                  <div className="bg-gray-800 p-3 rounded-md text-center">Critical Thinking</div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 border-b border-blue-500 pb-2 inline-block">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map(project => (
                <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-500/20 hover:translate-y-1 transition-all">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-blue-900 px-3 py-1 text-sm rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md transition-colors flex-1 text-center"
                      >
                        Code
                      </a>
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors flex-1 text-center"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div>
            <h2 className="text-3xl font-bold mb-6 border-b border-blue-500 pb-2 inline-block">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-6">
                  I'm currently open for new opportunities, especially in React Native development. Whether you have a project in mind
                  or just want to connect, feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <span className="text-gray-300">rwibutsorobert12@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <span className="text-gray-300">+250 790 929 784</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                    </div>
                    <span className="text-gray-300">KN Ave 17 St, Rwanda</span>
                  </div>
                </div>
                <div className="mt-8 flex space-x-4">
                  <a href="https://github.com/robsdagreat" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/h-rwibutso-robert-583766249" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
                
                <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">References</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Bernard DUSHIMIMANA</p>
                      <p className="text-gray-400">Trainee Success Manager, Andela Rwanda</p>
                      <p className="text-gray-400">+250-782-769-303 | lespharaons@hotmail.com</p>
                    </div>
                    <div>
                      <p className="font-medium">Denis NIWEMUGISHA</p>
                      <p className="text-gray-400">Technical Manager, Andela Rwanda</p>
                      <p className="text-gray-400">+250-782-371-420 | denis.niwemugisha@andela.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={6} 
                      className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 bg-black bg-opacity-50 py-6 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Robert Hakuzimana Rwibutso. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;