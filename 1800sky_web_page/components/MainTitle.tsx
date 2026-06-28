type MainTitle = Readonly<{
    children: React.ReactNode;
    className?: string;
}
>

export default function MainTitle ({ children, className = "" }: MainTitle) {
    return(
        <div>
            <div>
               <h1 className={`${className} text-9xl`}>{children}</h1>
            </div>
        </div>
    );
}