const Link = ({ to, text, className }) => {
    return (
        <div>
            <a href={to} className={className}>{text}</a>            
        </div>
    )
}

export default Link
