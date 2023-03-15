import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hovering app</h1>
      <div class="grid">
        <div class="img-wrapper">
          <img class="blur" src="https://picsum.photos/500?random=1" />
          <div class="content fade">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            maiores aspernatur explicabo maxime doloremque rem porro ad in
            eveniet error!
          </div>
        </div>
        <div class="img-wrapper">
          <img class="zoom blur" src="https://picsum.photos/500?random=2" />
          <div class="content fade">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            maiores aspernatur explicabo maxime doloremque rem porro ad in
            eveniet error!
          </div>
        </div>
        <div class="img-wrapper">
          <img class="blur" src="https://picsum.photos/500?random=3" />
          <div class="content slide-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            maiores aspernatur explicabo maxime doloremque rem porro ad in
            eveniet error!
          </div>
        </div>
        <div class="img-wrapper">
          <img class="blur" src="https://picsum.photos/500?random=4" />
          <div class="content slide-right">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            maiores aspernatur explicabo maxime doloremque rem porro ad in
            eveniet error!
          </div>
        </div>
        <div class="img-wrapper">
          <img class="blur" src="https://picsum.photos/500?random=5" />
          <div class="content slide-up">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            maiores aspernatur explicabo maxime doloremque rem porro ad in
            eveniet error!
          </div>
        </div>
        <div class="img-wrapper">
          <img class="blur" src="https://picsum.photos/500?random=6" />
          <div class="content slide-down">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            maiores aspernatur explicabo maxime doloremque rem porro ad in
            eveniet error!
          </div>
        </div>
        <div class="img-wrapper">
          <img class="gray" src="https://picsum.photos/500?random=7" />
          <div class="content slide-down">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            maiores aspernatur explicabo maxime doloremque rem porro ad in
            eveniet error!
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

