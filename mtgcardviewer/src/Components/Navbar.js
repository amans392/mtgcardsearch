//vscode extensison simple react snippets allows or creation shortcuts
//example below sfc creates an empty Stateless Function Component
//capitalize first letter in name of the function
const Navbar = ( ) => {
    return ( 
        <nav className="navbar">
            <h1> MTG Card Search App</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                
            </div>
        </nav>
     );
}
 //exports the componenet for use anywhere
export default Navbar;