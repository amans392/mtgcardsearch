//current-video: https://www.youtube.com/watch?v=PHaECbrKgs0&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=11
import { useState } from "react";
import BlogList from "./Bloglist";

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
        //importing another component BlogList
        //Then passing in props from Blogs into the BlogList component
        //example bellow creates a property name blogs and sets it = {dynamic value}
        // this passes in the blogs useState value which passes it into blogList as a prop
        <div className="home2">
        <BlogList blogs={blogs} title="All blogs!"></BlogList>
        </div>
     );
}
 
export default Home2;