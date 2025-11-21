const About = () => {
  return (
    <section className="about-section">
      <section className="info-about">
        <h1>Over Mij</h1>
        <p>
          Ik volg momenteel de mbo-opleiding aan het Techniek College Rotterdam, locatie Schiedam, waar ik inmiddels in mijn tweede jaar zit. <br /> Ik heb nog één jaar te gaan voordat ik mijn diploma behaal. <br /> Na het afronden van deze opleiding wil ik graag doorstromen naar het hbo om mijn studie op een hoger niveau voort te zetten en mijn kennis verder te verdiepen.


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

      <img className="image-about" src="./images/zakelijke-pica-portfolio.png" alt="Ilia" />
      </section>
    </section>
  );
};

export default About;
