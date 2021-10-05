import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import { TextField } from '@mui/material';

const Home: FunctionComponent = () => {
  return (
    <>
      <main>
        <header>
          <h1>Busca de Arquivos</h1>
        </header>
        <div id="inline">
          Selecione o diretório:
          <TextField
            id="filled-search"
            label="Selecione o diretório"
            type="search"
            variant="outlined"
            size="small"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In libero
          officia, facilis unde beatae reiciendis atque minus dolor deserunt
          quam? Eligendi libero aut minima reiciendis veniam assumenda
          necessitatibus iure, magnam optio reprehenderit delectus quos
          veritatis officiis, laboriosam id ducimus labore asperiores non
          accusamus accusantium incidunt ea iusto autem quam. Eius!
        </p>
      </main>
    </>
  );
};

export default Home;
