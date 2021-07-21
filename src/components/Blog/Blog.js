export default function Blog({ blog }) {
    const { title, link, thumbnail } = blog
    return (
        <div className="blog-div">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={thumbnail} alt={title} className="blog-thumbnail"/>
          </a>
          <div className="blog-title">{title}</div>
        </div>
    )
}