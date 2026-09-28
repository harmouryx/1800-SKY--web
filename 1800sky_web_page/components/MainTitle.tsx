type MainTitle = Readonly<{
    children: React.ReactNode;
    className?: string;
    avatar?: React.ReactNode;
}
>

export default function MainTitle({ children, avatar, className = "" }: MainTitle) {
    return (
        <div className={`flex items-center justify-between gap-6 p-2 ${className}`}>
            <h1 className={`${className} flex text-5xl sm:text-6xl md:text-7xl lg:text-8xl`}>{children}</h1>
            {avatar && <div className="overflow-hidden p-1">{avatar}</div>}
        </div>
    );
}