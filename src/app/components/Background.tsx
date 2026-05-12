export default function Background () {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-[#020617]">
            <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-teal-900/20 blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/15 blur-[100px] animate-pulse" />
            <div className="absolute top-[25%] left-[25%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[90px]" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    )
}
