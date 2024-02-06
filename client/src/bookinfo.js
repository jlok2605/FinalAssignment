function BookInfo(props){
    const book = props.book


    return (
        <div className="container">
            <div className="information">
                <h3 key = "title">Title: {book.title}</h3>
                <h3 key = "author">Author: {book.author}</h3>
                <h3 key = "genre">Genre: {book.genre}</h3>
                <h3 key = "yearpublished">Year Published: {book.yearpublished}</h3>
            </div>
        </div>
    )


}
export default BookInfo;