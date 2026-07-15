type MainTitle = Readonly<{
    children: React.ReactNode;
    className?: string;
    avatar?: React.ReactNode;
}
>

export default function MainTitle ({ children, avatar,  className = "" }: MainTitle) {
    return(
            <div className={`flex flex-wrap items-center justify-between gap-6 p-2 ${className}`}>
               <h1 className={`${className} flex shrink text-9xl`}>{children}</h1>
                {avatar && <div className="overflow-hidden p-1">{avatar}</div>}
            </div>
    );
}