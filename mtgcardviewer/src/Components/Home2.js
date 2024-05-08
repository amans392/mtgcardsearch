//current-video: https://www.youtube.com/watch?v=qdCHEUaFhBk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=17
//useEffect also imported then used above the return statement
import { useState, useEffect } from "react";
import BlogList from "./Bloglist";

const Home2  = () => {
    //destructuring value with array
    const[blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
//Adding Dependencies
//initial value 'mario'
const [name, setName] = useState('mario');

    //handleDelete function defined below for onClick function in Bloglist component
    //passes in the id property ()
    //placing it here allows you to interact with data directly
    //passed in the return blogs statement as a prop below for when data is created 
    // then added the handleDelete function back to the blogList function as one of the props
    //newBlogs const variable added to store the blogs
    //filter() method added to blogs to store filtered array temporarily
    //using a true or false
    //true if id does not match !== the id in the blog remains in array
    //false if id of blog matches ===  the id in the blog filtered out from array
    //then setblogs() will pass in the newBlogs value defined in the const
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    };

//useEffect() hook below that passes in an anonymous function 
//useEffect runs after every render
//state can be accessed in useEffect
//useful for running code at every render like fetching data
//adding a , [] after the useEffect hook, makes it so that hook only runs after the first initial render

//depenency [name] is set so that the useEffect will only run depending on tif this value is changed
useEffect(() => {
    console.log('use effect ran');
    console.log(name);
    //console.log(blogs);
}, [name]);
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
        //using the .filter() method to filter out blogs that aren't listed with the author property with string 'mario'
        //in the example below blogs.filter((blog) => blog.author === 'mario')
        //Re-Using the BlogList component
        //creates a new array of blogs that filters out blogs that don't have the author 'mario'
        //then returns that in a new filtered array list of blogs using the author property
        //filtered code example for return statement below<BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's blogs!"></BlogList>
        
        //button created in return statement with onClick equal to anon function setName passing in new name 'luigi'
        //added a paragraph tag with referencing the name argument
        //setName changes 'mario' to 'luigi' when clicked
        <div className="home2">
        <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}></BlogList>
        <button onClick={() => setName('luigi')}>change name</button>
        <p>{ name }</p>
        </div>
     );
}
 
export default Home2;