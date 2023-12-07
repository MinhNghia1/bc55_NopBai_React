import BookMovieTicket from "./BookMovieTicket/BookMovieTicket";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(https://www.pixelstalk.net/wp-content/uploads/2016/04/Marvel-Wallpaper-HD.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="App"
    >
      <BookMovieTicket />
    </div>
  );
}

export default App;
