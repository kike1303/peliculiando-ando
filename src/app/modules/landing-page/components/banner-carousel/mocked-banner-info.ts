import { BannerCarouselInfo } from 'src/app/models/banner-carousel-info.model';

export const MOCKER_BANNER_DATA: BannerCarouselInfo[] = [
  {
    title: '1917',
    description:
      '6 de abril de 1917. Mientras un regimiento se reúne para librar una guerra en el territorio enemigo, dos soldados son asignados para competir contra el tiempo y entregar un mensaje que evitará que 1.600 hombres caminen directamente hacia una trampa mortal.',
    image: 'assets/images/movie-1917.jpg',
    active: true,
  },
  {
    title: 'Onward',
    description:
      'Dos hermanos elfos se embarcan en una búsqueda para traer a su padre de regreso por un día.',
    image: 'assets/images/movie-onward.jpg',
    active: false,
  },
  {
    title: 'Star Wars: Episodio VIII',
    description:
      'Rey desarrolla sus habilidades recién descubiertas con la guía de Luke Skywalker, quien está inquieto por la fuerza de sus poderes. Mientras tanto, la Resistencia se prepara para la batalla con la Primera Orden.',
    image: 'assets/images/movie-starswars.jpg',
    active: false,
  },
];
