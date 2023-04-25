type IconTextProps = {
    src: string,
    classNames?: string,
    srcCls?: string,
    text?: string,
    element?: React.ReactNode,
    size?: "small" | "xs"
}
export default function IconText({ src, srcCls, text, element, size, classNames }: IconTextProps) {
    return (
        <div className={`flex gap-p25 aligned-flex ${size === 'xs' ? 'f-s-3' : 'f-s-4'} ${classNames ?? ''}`} >
            <svg className={srcCls} height={'.9em'} >
                <use href={src} width={'100%'} height={'100%'} />
            </svg>
            {text
                ? <span>{text}</span>
                : element}
        </div>
    )
}
