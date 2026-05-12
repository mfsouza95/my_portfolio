import ProjectCard from './ProjectCard';
import * as Dialog from '@radix-ui/react-dialog';
import ProjectProps from "../types";
import { X } from 'lucide-react';

export default function ProjectModal({ title, description, imageUrl }: ProjectProps){
    return(
         <Dialog.Root>
            <Dialog.Trigger asChild>
                <ProjectCard
                    title={title}
                    description={description}
                    imageUrl={imageUrl}
                />
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='fixed inset-0 bg-black/60 backdrop-blur-xs z-40 overlay-animation'/>
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#020617] border border-white/10 shadow-2xl pb-8 focus:outline-none z-50 content-animation">
                    <div className='w-full h-64 mb-6 overflow-hidden'>
                        <img src={imageUrl} alt={title} className='w-full h-full object-top object-cover rounded-t-2xl'/>
                    </div>
                    <div className='p-8 text-left'>
                        <Dialog.Title>{title}</Dialog.Title>
                        <Dialog.Description className='mt-4 pl-8 text-slate-400 leading-relaxed'>
                            {description}
                        </Dialog.Description>
                    </div>
                    <div className='mt-8 mr-8 flex justify-end'>
                        <a href="https://creepertools.vercel.app/" target='_blank' rel='noopener noreferrer' className='bg-teal-500 text-white px-6 py-2 rounded-lg'>Acessar Projeto</a>
                    </div>
                    <Dialog.Close className='absolute top-4 right-4 text-white/50 hover:text-white cursor-pointer'>
                        <X />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
         </Dialog.Root>
    );
}