const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-map">
        <img src="./images/google-maps.png" alt="Kaart van Rotterdam" />
      </div>

      <form className="contact-form">
        <h1>Contact</h1>
        <p>Neem contact met mij op via onderstaand formulier!</p>
        <input type="text" placeholder="Naam" />
        <input type="email" placeholder="Email" />
        <textarea rows="4" placeholder="Uw bericht"></textarea>
        <button type="submit">Verzenden</button>
      </form>
    </section>
  );
};

export default Contact;
