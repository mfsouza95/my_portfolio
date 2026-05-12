import ProjectProps from "../types";

export default function Project({ title, description, imageUrl }: ProjectProps){
    return(
        <button className="group flex flex-col text-left bg-white/5 border-2 border-blue-500 rounded-2xl overflow-hidden cursor-pointer">
            <div className="relative h-36 w-full overflow-hidden">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover" 
                />
            </div>
            <div className="h-72 mx-2">
                <h3 className="text-xl font-semibold text-gray-400 mb-3">
                    {title}
                </h3>
                <div className="pl-4">
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>
                <div className="mt-4 text-xs font-medium text-teal-500 uppercase tracking-wider flex justify-end">
                    <span>Ver Detalhes</span>                   
                </div>
            </div>
        </button>
    );
}