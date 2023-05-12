import "./Home.css";

const Home = () => {
    return (
    <div class="w3-content w3-justify w3-text-grey w3-padding-61" id="about">
    <h2 class="w3-text-black">Prince Marvie Lorenzo</h2>
    <hr style={{width: "300px"}}/>
    <p>I am 2nd year graduating student of Pamantasan ng Lungsod ng Muntinlupa(PLMun). My favorite programming language are C++, SQL, PHP, and for markup language is HTML.
      My favorite food is Shanghai, Shanghai, and Shanghai.
    </p>
    <h3 class="w3-padding-16 w3-text-light-grey">My Skills</h3>
    <p class="w3-wide">Coding</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style={{height: "28px", width: "67%"}}></div>
    </div>
    <p class="w3-wide">Designing</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style={{height:"28px", width: "50%"}}></div>
    </div>
    <p class="w3-wide">Debugging</p>
    <div class="w3-white">
      <div class="w3-dark-grey" style={{height: "28px", width: "80%"}}></div>
    </div>
    
    <div class="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">20+</span><br/>
        Projects Done
      </div>
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">50+</span><br/>
        Reporting
      </div>
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">89+</span><br/>
        Quizes
      </div>
      <div class="w3-quarter w3-section">
        <span class="w3-xlarge">200+</span><br/>
        F2F Classes
      </div>
    </div>
    </div>
    );
};

export default Home;