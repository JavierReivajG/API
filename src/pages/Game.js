import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Game = async () => {
  const id = getHash();
  const Game = await getData(id);
  const view = `
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${Game.thumbnail}" alt="${Game.title}">
        <h2>${Game.title}</h2>
      </article>
      <article class="Characters-card">
        <h3>ID:                    <span>${Game.id}</span></h3>
        <h3>Descripcion:           <span>${Game.short_description}</span></h3>
        <h3>Link:                  <span>${Game.game_url}</span></h3>
        <h3>Genero:                <span>${Game.genre}</span></h3>
        <h3>Plataforma:            <span>${Game.platform}</span></h3>
        <h3>Publisher:             <span>${Game.publisher}</span></h3>
        <h3>Developers:            <span>${Game.developer}</span></h3>
        <h3>Fecha de lanzamiento:  <span>${Game.release_date}</span></h3>
        <h3>perfil:                <span>${Game.freetogame_profile_url}</span></h3>
      </article>
    </div>
  `;
  return view;
};

export default Game;