import "./blogList.css"
export default function BlogList(props) {
    return (
        <ul className="blog-list">
            {
                props.children
            }
        </ul>
    )
}