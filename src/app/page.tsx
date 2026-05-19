import ProjectModal from "./components/ProjectModal";
import AboutMe from "./components/AboutMe";
import SkillsCard from "./components/SkillsCard";
import ProductCard from "./components/ProductCard";
import Contact from "./components/Contact";
import {projectsData, skillsData} from "./data"
 
export default function Home() {
  return (
    <div className="bg-[#020617] text-slate-100 min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px]" />
        
        <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
          <div className="space-y-6 flex flex-col items-center text-center mx-auto w-full px-4">
            <p className="font-mono text-xs md:text-sm tracking-widest">
              cd /murilo/
            </p>
            
            <h1 className="text-5xl md:text-8xl lg:text-9xl tracking-tight leading-none text-white drop-shadow-[0_4px_24px_rgba(255,255,255,0.05)]">
              MURILO <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-rose-600 drop-shadow-[0_0_15px_rgba(239,68,68,0.2)]">FERRAZ</span>
            </h1>
            
            <div className="text-base md:text-xl font-mono text-slate-400 tracking-wide">
              <span>Fullstack Software Developer</span>
            </div>
            
            <p className="text-xs font-mono text-slate-500">
              // São Caetano do Sul, SP, Brazil
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-md border border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all shadow-md group" href="https://github.com/mfsouza95" target="_blank">
              <span className="text-blue-500 group-hover:text-blue-400">{'> '}</span>Github
            </a>
            <a className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-md border border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all shadow-md group" href="https://www.linkedin.com/in/muriloferrazsouza/" target="_blank">
              <span className="text-blue-500 group-hover:text-blue-400">{'> '}</span>Linkedin
            </a>
            <a className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-md border border-teal-500/30 bg-teal-500/5 text-teal-400 hover:border-teal-400 hover:bg-teal-500/10 transition-all shadow-md group" href="/CV-Murilo Ferraz de Souza.pdf" download>
              <span className="text-teal-400 group-hover:text-teal-300">{'> '}</span>Download CV
            </a>
          </div>
        </div>
      </section>
      <section id="projects" className="py-24 border-t border-white/5 relative bg-slate-950/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6 text-center">
            <h2 className="text-xl md:text-2xl font-mono font-bold text-slate-200 tracking-tight">## my_Projects( )</h2>
            <p className="text-xs md:text-sm font-mono text-slate-500 mt-2">// some projects that I worked on:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 md:gap-16 py-12 px-2 max-w-4xl mx-auto"> 
              {projectsData.map((project) => (
                <ProjectModal
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  link={project.link}
                />
              ))}
            </div>         
            <p className="text-xs md:text-sm font-mono text-slate-500 pb-6">// check all my projects here:</p>
            <a href="https://github.com/mfsouza95" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-5 py-2.5 rounded-md border border-white/10 bg-white/5 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all group">
              <span className="text-blue-500 group-hover:text-blue-400">{'> '}</span>Github
            </a>
          </div>
        </div>
      </section>
      <section id="about" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6 text-center">
            <h2 className="text-xl md:text-2xl font-mono font-bold text-slate-200 tracking-tight">## About_me( )</h2>
            <p className="text-xs md:text-sm font-mono text-slate-500 mt-2">// get to know me better: </p>
            <div className="py-12 flex justify-center w-full overflow-hidden">
              <AboutMe />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 border-t border-white/5 bg-slate-950/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6 text-center">
            <h2 className="text-xl md:text-2xl font-mono font-bold text-slate-200 tracking-tight">## my_Skills ( )</h2>
            <p className="text-xs md:text-sm font-mono text-slate-500 mt-2">// technologies that I work with: </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-12 max-w-4xl mx-auto">
              {skillsData.map((skill) => (
                <SkillsCard 
                  key={skill.id}
                  title={skill.title}
                  description={skill.description}
                />
              ))}
            </div>
          </div>
        </div>  
      </section>
      <section id="products" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6 text-center">
            <h2 className="text-xl md:text-2xl font-mono font-bold text-slate-200 tracking-tight">## my_Store ( )</h2>
            <p className="text-xs md:text-sm font-mono text-slate-500 mt-2">// try adding my CV to your cart:</p>
            
            <div className="flex justify-center py-12">
              <ProductCard title="CV" />
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-16 border-t border-white/5 bg-slate-950/40">
        <Contact />
      </section>
      
    </div>
  );
}