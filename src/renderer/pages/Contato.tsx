/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FunctionComponent } from 'react';

const Contato: FunctionComponent = () => {
  return (
    <>
      <main>
        <header>
          <h1>Contato</h1>
        </header>
        <form
          action="mailto:roberto@arbyte.com"
          method="post"
          encType="text/plain"
          acceptCharset="utf-8"
        >
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Samuel da Silva Santos..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="samuel@exemplo.com..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Assunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Meu currículo..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <textarea
              id="description"
              name="description"
              placeholder="Segue o meu currículo..."
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Enviar e-mail
          </button>
        </form>
      </main>
    </>
  );
};

export default Contato;
