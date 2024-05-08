//current-video https://www.youtube.com/watch?v=-YpnB-zlkPU&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=12
//props object in () of arrow function is associated with the blogs value from Home2
//destructuring the props by {blogs, title} also works

//handleDelete onClick function added to blog-list return statement below and defined in Home2
//passed in data creation function to interact with data directly
const BlogList = ({ blogs, title, handleDelete}) => {
//const BlogList = (props) => {
    //const blogs below grabs the blogs and storing them in the const
    //const blogs = props.blogs;
    //const title = props.title;
    //console.log(props,blogs)
    //created button below author with delete functionality for blogs
    //added onClick set equal to {}brackets  
    //added an anonymous function () = >
    //to pass in an argument on the onClilck
    //passed in blog.id as the argument
    //handleDelete function to avoid updating the state here
    // the handleDelete function is created in another component in this case, Home2
    //so it can interact with data directly
    return ( 
        //cycling through the const blogs below
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                <h2>{ blog.title }</h2>
                <p>written by {blog.author}</p>
                <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                

                </div>
            ))}
        </div>
     );
}
 
export default BlogList;