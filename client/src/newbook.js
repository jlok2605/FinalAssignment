import "./newbook.css"
function NewBook() {
    return (
        <div className = "newbookcontainer">
            <h2> OUR NEWEST BOOKS </h2>
            <div className="newbook">
                <div className="content">
                <div className="reviews">
                        <div className="review">
                            <h4>"Captivating plot, unforgettable characters, brilliance."</h4>
                            <p>- The Bookworm Gazette</p>
                        </div>
                        <div className="review">
                            <h4>"Masterpiece of storytelling, utterly captivating and inspiring!"</h4>
                            <p>- Renowned Critic, Victoria Sterling.</p>
                        </div>
                    </div>
                    <img src="./newbook.jpg" alt="New Book" />
                </div>
            </div>
        </div>
    );
}

export default NewBook;
