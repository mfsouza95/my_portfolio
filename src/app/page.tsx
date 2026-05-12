import ProjectModal from "./components/ProjectModal";

export default function Home() {
  return (
    <div>
      <section className="min-h-[90vh] flex items-center justify-center text-white">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="space-y-6 flex flex-col items-center text-center mx-auto w-full px-4">
            <p>cd /murilo/</p>
            <h1 className="text-primary text-9xl">MURILO <br /> FERRAZ</h1>
            <div className="text-xl">
              <span>Fullstack Software Developer</span>
            </div>
            <p className="text-sm">// São Caetano do Sul, SP, Brazil</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded border" href="">
              {'> '}Github
            </a>
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded border" href="">
              {'> '}Linkedin
            </a>
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded border" href="">
              {'> '}Download CV
            </a>
          </div>
        </div>
      </section>
      <section id="projects" className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-6 text-center">
            <h2 className="text-lg">## Projects.my</h2>
            <p className="italic">// some projects that I worked on:</p>
            <div className="grid grid-cols-3 gap-20 py-8 px-2"> 
              <ProjectModal
                title='Creeper Tools'
                description='Lore ipsum'
                imageUrl='/creeper-tools.png'
              />
              <ProjectModal
                title='Creeper Tools'
                description='Lore ipsum'
                imageUrl='/creeper-tools.png'
              />
              <ProjectModal
                title='Creeper Tools'
                description='Lore ipsum'
                imageUrl='/creeper-tools.png' 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
