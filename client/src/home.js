
import React from "react"
import NewBook from "./newbook"
import './home.css'
function Home(){
    return (
        <div className = "intro">
            <div id="introduction">
                <h1> Welcome to Evergreen Knowledge Hub</h1>
                <p>Evergreen Knowledge Hub, a sanctuary for intellect and exploration!
                Nestled in the heart of the community, our library stands as a timeless beacon of wisdom, fostering a vibrant atmosphere where 
                the pursuit of knowledge knows no bounds. Step into a world where the aroma of well-loved books mingles with the hum of intellectual discourse.
                Our cozy reading corners invite readers to lose themselves in the pages of a novel or embark on an academic journey through scholarly tomes. Knowledge seekers of all ages will find solace in our carefully curated sections, 
                each designed to inspire and inform.</p>
            </div>
            <img className="library" src = "../BooksOfLibrary.jpg" alt = "library"></img>
            <div className="information">
                <h3>Our library has the largest selection of books</h3>
                <p>The Evergreen Knowledge Hub is a vibrant hub of community learning and connection, offering a wealth of resources and programs for all ages. It's a welcoming space where minds expand, imaginations thrive, and community bonds strengthen.</p>
            </div>
            <NewBook/>
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