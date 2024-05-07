//current-video https://www.youtube.com/watch?v=-YpnB-zlkPU&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=12
//props object in () of arrow function is associated with the blogs value from Home2
//destructuring the props by {blogs, title} also works

const BlogList = ({ blogs, title}) => {
//const BlogList = (props) => {
    //const blogs below grabs the blogs and storing them in the const
    //const blogs = props.blogs;
    //const title = props.title;
    //console.log(props,blogs)
    return ( 
        //cycling through the const blogs below
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                <h2>{ blog.title }</h2>
                <p>written by {blog.author}</p>

                </div>
            ))}
        </div>
     );
}
 
export default BlogList;