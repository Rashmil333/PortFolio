const Image = (props) => {
    const { src, className, alt = 'placeholder', onPointerOver, onPointerOut, onClick } = props;
    return (
        <img src={src} alt={alt} className={className} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick} />
    )
}

export default Image