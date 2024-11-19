export const Image = ({src, ...props}) => {
    const [file, ext] = splitFilename(src);
    return (
        <picture>
            <source srcSet={`
            ${file}.${ext} 1x,
            ${file}@2x.${ext} 2x
            `}></source>
            <img alt="" {...props} src={src} />
        </picture>
    )
};


function splitFilename(src) {
    const fileName = src.split('.').slice(0, -1);
    const extension = src.split('.').slice(-1)[0];
    return [fileName, extension];
}

export default Image;