type MainTitle = Readonly<{
    children: React.ReactNode;
    className?: string;
    avatar?: React.ReactNode;
}
>

export default function MainTitle ({ children, avatar,  className = "" }: MainTitle) {
    return(
            <div className={`flex flex-row items-center justify-between gap-6 ${className}`}>
               <h1 className={`${className} text-9xl`}>{children}</h1>
                {avatar && <div className="shrink-0 p-1">{avatar}</div>}
            </div>
    );
}