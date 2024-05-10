//current-video: https://www.youtube.com/watch?v=aZGzwEjZrXc&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=21
//useEffect also imported then used above the return statement

//import { useState, useEffect } from "react";
import BlogList from "./Bloglist";
import useFetch2 from "./UseFetch2";



const Home2  = () => {
    //endopint parameter variable URL created set equal to api link
const URL = 'http://localhost:8000/blogs'
//destructuring three returned properties from useFetch using {} brackets
//adding : then a name after data tells code to grab data, but call it that name
//example below grabs the data and calls it blogs
//variable created with {} of the returned parameters from the custom hook useFetch
//set equal to useFetch() custom hook passing through the API link in the URL variable

//below are the three properties reutrned by useFetch Custom Hook
const { data: blogs, isLoading, error } = useFetch2(URL)

    //destructuring value with array
    //fetching data with useEffect: https://www.youtube.com/watch?v=qdCHEUaFhBk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=18
    //state will be updating after data is fetched
    
    /*const[blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    */


//Adding Dependencies
//initial value 'mario'
//const [name, setName] = useState('mario');

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
    
    //HandleDelete Functionality
    /*const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
        */


//useEffect() hook below that passes in an anonymous function 
//useEffect runs after every render
//state can be accessed in useEffect
//useful for running code at every render like fetching data
//adding a , [] after the useEffect hook, makes it so that hook only runs after the first initial render

//depenency [name] is set so that the useEffect will only run depending on tif this value is changed
/*useEffect(() => {
    console.log('use effect ran');
    console.log(name);
    //console.log(blogs);
}, [name]);
*/

//fetching data with useEffect and fetch() api
//.then() will fire a promise once the fetch function has resolved
//res is the response object
//returning res.json() returns another promise that is async and gets the data
//added another .then() function with (data) as the parameter that gets the data
//returned by res.json() which is the api data
//simulating a timeout request
//wrapped fetch request in setTimout global function
//https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
//to set a delay function of 1000 miliseconds or 1 second
//before the fetch request is sent

//catch block catches any kind of network error (err) and fires a function
// .catch fires when the promise is rejected https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
//returns a failed to fetch message in the console if fetch fails
//adding an if check !res to see if the ok response isn't okay and is false, throw an error
//added a throw error message to the if ok response fails


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
        /*<div className="home2">
        <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete}></BlogList>
        <button onClick={() => setName('luigi')}>change name</button>}
        <p>{ name }</p>
        </div>
        */
       //use of {} around BlogList below in return statement to add javascript
       //added within brackets the blogs value followed by &&
       //value bloggs followed by && is conditional templating in React
       //blogs is set to null, value on right of is false && left is ouptut if true
       //&& means logical and
       //added a conditional loading message defined above  
        <div className="home2">
            { error && <div>{ error } </div>}
            { isLoading && <div>Loading...</div> } 
            {blogs &&<BlogList blogs={blogs} title="All blogs!"></BlogList>}
        </div>
     );
}
 
export default Home2;