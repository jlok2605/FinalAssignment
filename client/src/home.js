
import React from "react"
import NewBook from "./newbook"
function Home(){
    return (
        <div className = "intro">
            {/*NavBar containing Home route, My Books (button), Search (button) */}

            <h1> Welcome to Evergreen Knowledge Hub</h1>
            <p>Evergreen Knowledge Hub, a sanctuary for intellect and exploration!
            Nestled in the heart of the community, our library stands as a timeless beacon of wisdom, fostering a vibrant atmosphere where 
            the pursuit of knowledge knows no bounds. Step into a world where the aroma of well-loved books mingles with the hum of intellectual discourse.
            Our cozy reading corners invite readers to lose themselves in the pages of a novel or embark on an academic journey through scholarly tomes. Knowledge seekers of all ages will find solace in our carefully curated sections, 
            each designed to inspire and inform.</p>
            <img className="library" src = "../BooksOfLibrary.jpg" alt = "library"></img>
            <h2> OUR NEWEST BOOKS </h2>
             <NewBook/>
            <h2> Featured books</h2>
            {/*Displaying a line of 5 random books */}
            {/* FOOTER 
            Contact us details: email, phone number,
            Library hours,
            Social media link
            FAQ
            */}

        </div>
    )
}
export default Home;