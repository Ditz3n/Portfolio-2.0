import { projects } from "../utils/projects"

export default function Projects() {
    return (
        <section className="common-container">
            <h1 className="text-3xl">Projects</h1>
            <p className="text-[#252422]">I am currently working on a project that will be released in 2025.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
                {projects.map((project) => (
                    <div key={project.id} className="bg-[#FFFCF2] border-1 w-full h-92 rounded-md transform transition-all duration-300 hover:scale-105 hover:shadow-md flex flex-col justify-center items-center">
                        <h2 className="text-xl text-[#252422]">{project.title}</h2>
                        <p className="text-[#252422]">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}