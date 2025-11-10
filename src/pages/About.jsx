const About = () => {
  return (
    <section className="about-section">
      <section className="info-about">
        <h1>Over Mij</h1>
        <p>
          Hallo! Ik ben Ilia, een enthousiaste software developer in opleiding. 
          Ik werk graag aan creatieve en functionele webprojecten met React, Node.js en Python.
        </p>
   
        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML / CSS / JavaScript</li>
            <li>React & Node.js</li>
            <li>Python / Django</li>
            <li>SQL / MongoDB</li>
          </ul>
        </section>
   </section>
   <section className="image-about">

      <img className="image-about" src="/images/zakelijke pica portfolio.png" alt="Ilia" />
      </section>
    </section>
  );
};

export default About;
