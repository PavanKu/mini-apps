type headingProps = {
    children: React.ReactNode
}
export default function Heading({ children }: headingProps) {
    return (
        <h1 className="text-center font-thin text-5xl mb-5 text-slate-500">{children}</h1>
    );
}