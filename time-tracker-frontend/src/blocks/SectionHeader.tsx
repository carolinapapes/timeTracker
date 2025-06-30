export default function SectionHeader({
    title,
    children,
}: {
    title: string;
    children?: React.ReactNode;
}) {
    return (
        <div className="flex flex-col items-center gap-4 justify-start md:justify-between md:flex-row">
            <h1 className="title">{title}</h1>
            <div className="flex">{children}</div>
        </div>
    );
}
