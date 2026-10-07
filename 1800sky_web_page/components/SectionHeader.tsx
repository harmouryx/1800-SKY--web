interface SectionHeaderProps {
    title: string;
    description: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
    return (
        <article className="px-6 md:px-12">
            <h2 className="font-noto-serif text-xl md:text-2xl font-bold">{title}</h2>
            <p className="font-sans text-sm text-neutral-400 mt-2">{description}</p>
        </article>
    );
}