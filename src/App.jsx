// import Header from './Header.jsx';
// import Food from './Food.jsx';
import profilePic from "./assets/profile-pic.jpg";
import Card from './card.jsx';
import List from './List.jsx';
import Footer from './Footer.jsx';

// import Student from './Student.jsx';

function App() {
  return (
    <>
      {/* <Food /> */}
      {/* <Header /> */}
      <div className="card-container">
          <Card 
            image={profilePic}
            title="sirronney"
            description="Junior Software Developer"
            />
          <Card 
            image={profilePic}
            title="ronney"
            description="Alpha MLSA"
            />
      </div>

      <List />
     
      <Footer/>
      {/* <Student name="John Doe" age={30}/>
      <Student name="Jane Doe" age={42}/>
      <Student name="Jay Doe" age={42}/>
      <Student  age={42}/> */}
    </>
  );
}

export default App
