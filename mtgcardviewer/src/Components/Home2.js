//current-video: https://www.youtube.com/watch?v=PHaECbrKgs0&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=11
import { useState } from "react";

const Home2  = () => {
    //destructuring value with array
    const[blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    //map method below created to cycle through array and create a new item for each item in the array
    //in template below using curley braces {}
    //using.map() method fires callback function for each item where each time it returns jsx template
    //each root element must have a key property so react can keep track of the item
    //always add key attribute to each item you output
    //outputs lists of data in react
    return ( 
        <div className="home2">
            {blogs.map((blog) => (
                <div className="blog-preview" key={ blog.id }>
                <h2>{ blog.title }</h2>
                <p>written by {blog.author}</p>

                </div>
            ))}
        </div>
     );
}
 
export default Home2;