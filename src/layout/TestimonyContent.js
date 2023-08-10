import React, { useState } from "react";

export default function TestimonyContent() {
  const [testimonials, setTestimonials] = useState([
    {
      quote: "Louise, tu es la meilleure! Merci pour tout...",
      author: "Larry Page, CEO ordinary",
    },
    {
      quote: "L'esprit le plus créatif que j'ai jamais vu de ma vie...",
      author: "Jack Dorsey, cristal CEO",
    },
    {
      quote: "Merci, Louise, de m'avoir appris à coder... C'est grâce à vous !",
      author: "Mark Henry", 
    },
  ]);

  const [editingIndex, setEditingIndex] = useState(null);

  const addTestimonial = (quote, author) => {
    setTestimonials([...testimonials, { quote, author }]);
  };

  const deleteTestimonial = (index) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
    setEditingIndex(null);
  };

  const updateTestimonial = (index, newQuote, newAuthor) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials[index] = { quote: newQuote, author: newAuthor };
    setTestimonials(updatedTestimonials);
    setEditingIndex(null);
  };

  return (
    <section id="recommandations">
      <div className="container">
        <div className="red-divider"></div>
        <div className="heading">
          <h2>Témoignages</h2>
        </div>
        <div id="myCarousel" className="carousel slide text-center" data-ride="carousel" style={{ marginTop: "150px" }}>
          <ol className="carousel-indicators">
            {testimonials.map((_, index) => (
              <li key={index} data-target="#myCarousel" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
            ))}
          </ol>
          <div className="carousel-inner" role="listbox">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={index === 0 ? "item active" : "item"}>
                {editingIndex === index ? (
                  <div>
                    <input type="text" value={testimonial.quote} onChange={(e) => updateTestimonial(index, e.target.value, testimonial.author)} />
                    <input type="text" value={testimonial.author} onChange={(e) => updateTestimonial(index, testimonial.quote, e.target.value)} />
                    <button onClick={() => updateTestimonial(index, testimonial.quote, testimonial.author)}>Valider</button>
                    <button onClick={() => setEditingIndex(null)}>Annuler</button>
                  </div>
                ) : (
                  <>
                    <h3>"{testimonial.quote}"</h3>
                    <h4>{testimonial.author}</h4>
                    <button onClick={() => deleteTestimonial(index)}>Supprimer</button>
                    <button onClick={() => setEditingIndex(index)}>Modifier</button>
                  </>
                )}
              </div>
            ))}
          </div>
          <a className="left carousel-control" href="#myCarousel" data-slide="prev" role="button">
            <span className="glyphicon glyphicon-chevron-left"></span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next" role="button">
            <span className="glyphicon glyphicon-chevron-right"></span>
          </a>
        </div>

        {/* Form to add a new testimonial */}
        <form style={{marginTop:'50px', textAlign:'center' }}
          onSubmit={(e) => {
            e.preventDefault();
            const quote = e.target.quote.value;
            const author = e.target.author.value;
            addTestimonial(quote, author);
            e.target.reset();
          }}
        >
          <div>
            <label htmlFor="quote">Témoignage:</label><br/>
            <input type="text" id="quote" name="quote" required />
          </div>
          <div>
            <label htmlFor="author">Auteur:</label><br/>
            <input type="text" id="author" name="author" required />
          </div><br/>
          <button type="submit">Ajouter</button>
        </form>

        <p style={{ marginTop: "170px" }}></p>
      </div>
    </section>
  );
}
