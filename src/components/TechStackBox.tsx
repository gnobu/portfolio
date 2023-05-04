export default function TechStackBox({ techLogo, techTitle }: { techLogo: string, techTitle: string }) {
    return (
        <div className="tech-box">
            <img src={techLogo} alt="javascript logo" width={40} height={40} />
            <span className="blk">{techTitle}</span>
        </div>
    )
}
