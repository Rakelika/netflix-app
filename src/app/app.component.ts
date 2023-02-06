import { Component } from '@angular/core';

interface imageFilm {
  filmTitle: string,   
  filmImg: string 
}

interface film {
  section:string;
  films: imageFilm[]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'netflix-app';

    public actionFilms: film = {
      section:'Acción',   
      films: [{
          filmTitle: 'Ejército de los muertos',   
          filmImg: '../assets/Accion/ejercitomuertos.jpg'   
        },
        {
          filmTitle: 'El Protector',   
          filmImg: 'assets/Accion/elprotector.webp'   
        },
        {
          filmTitle: 'Equalizer 2',   
          filmImg: 'assets/Accion/equalizer2.webp'   
        },
        {
          filmTitle: 'Heat',   
          filmImg: 'assets/Accion/heat.webp'   
        },
        {
          filmTitle: 'Jack Reacher',   
          filmImg: 'assets/Accion/jackreacher.webp'   
        },
        {
          filmTitle: 'John Wick 2',   
          filmImg: 'assets/Accion/johnwick2.webp'   
        },
        {
          filmTitle: 'Kill Bill 2',   
          filmImg: 'assets/Accion/killbill2.webp'   
        },  
        {
          filmTitle: 'Misión imposible',   
          filmImg: 'assets/Accion/misionimposiblenacion.webp'   
        },  
        {
          filmTitle: 'El renacido',   
          filmImg: 'assets/Accion/renacido.webp'   
        },  
        {
          filmTitle: 'Terminator 2',   
          filmImg: 'assets/Accion/terminator2.webp'   
        }
      ]
    }

  public comedyFilms: film = {
    section:'Comedia',   
    films: [{
        filmTitle: 'Casi 300',   
        filmImg: '../assets/Comedia/casi300.webp'   
      },
      {
        filmTitle: 'Los Cazafantasmas',   
        filmImg: 'assets/Comedia/cazafantasmas.webp'   
      },
      {
        filmTitle: 'Dictador',   
        filmImg: 'assets/Comedia/dictador.webp'   
      },
      {
        filmTitle: 'Érase una vez en Hollywood',   
        filmImg: 'assets/Comedia/erasehollywood.webp'   
      },
      {
        filmTitle: 'Padre de familia',   
        filmImg: 'assets/Comedia/family guy.webp'   
      },
      {
        filmTitle: 'Juerga hasta el fin',   
        filmImg: 'assets/Comedia/juerga.webp'   
      },
      {
        filmTitle: 'Los padres de ella',   
        filmImg: 'assets/Comedia/padresella.webp'   
      },  
      {
        filmTitle: 'Regreso al futuro',   
        filmImg: 'assets/Comedia/regresofuturo.webp'   
      },  
      {
        filmTitle: 'Rick and Morty',   
        filmImg: 'assets/Comedia/rickandmorty.webp'   
      },  
      {
        filmTitle: 'Scary Movie 3',   
        filmImg: 'assets/Comedia/scarymovie3.webp'   
      }
    ]
  }
  public animeFilms: film = {
    section:'Anime',   
    films: [{
        filmTitle: 'Ajin Semi humano',   
        filmImg: '../assets/Anime/ajin.jpg'   
      },
      {
        filmTitle: 'El Castillo ambulante',   
        filmImg: 'assets/Anime/castilloambulante.webp'   
      },
      {
        filmTitle: 'El VIaje de Chihiro',   
        filmImg: 'assets/Anime/chihiro.webp'   
      },
      {
        filmTitle: 'Neon Genesis Evangelion',   
        filmImg: 'assets/Anime/evangelion.webp'   
      },
      {
        filmTitle: 'Arise',   
        filmImg: 'assets/Anime/gitsarise.webp'   
      },
      {
        filmTitle: 'El Castillo en el cielo',   
        filmImg: 'assets/Anime/laputa.webp'   
      },
      {
        filmTitle: 'La princesa Mononoke',   
        filmImg: 'assets/Anime/mononoke.webp'   
      },  
      {
        filmTitle: 'Perfect Blue',   
        filmImg: 'assets/Anime/perfectblue.webp'   
      },  
      {
        filmTitle: 'Nino Kuni',   
        filmImg: 'assets/Anime/ninokuni.jpg'   
      },  
      {
        filmTitle: 'Porco Rosso',   
        filmImg: 'assets/Anime/porcorosso.webp'   
      },
      
    ]
  }
  public dramaFilms: film = {
    section:'Drama',   
    films: [{
        filmTitle: '1917',   
        filmImg: '../assets/Drama/1917.webp'   
      },
      {
        filmTitle: 'La llegada',   
        filmImg: 'assets/Drama/arrival.webp'   
      },
      {
        filmTitle: 'El club de la lucha',   
        filmImg: 'assets/Drama/clublucha.webp'   
      },
      {
        filmTitle: 'Corazones de acero',   
        filmImg: 'assets/Drama/corazones.webp'   
      },
      {
        filmTitle: 'La milla Verde',   
        filmImg: 'assets/Drama/millaverde.webp'   
      },
      {
        filmTitle: 'Naufrago',   
        filmImg: 'assets/Drama/naufrago.webp'   
      },
      {
        filmTitle: 'No es pais para viejos',   
        filmImg: 'assets/Drama/noespais.webp'   
      },  
      {
        filmTitle: 'Salvar al soldado Ryan',   
        filmImg: 'assets/Drama/salvaralsoldado.webp'   
      },  
      {
        filmTitle: 'La sombra del diablo',   
        filmImg: 'assets/Drama/sombradiablo.webp'   
      },  
      {
        filmTitle: 'El precio del poder',   
        filmImg: 'assets/Drama/scarface.webp'   
      },
      
    ]
  }   

}
