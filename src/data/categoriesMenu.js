export const categorias = {
  nuevo: {
    path: '/nuevo',
    items: {
      'Novedades para hombres': { path: '/nuevo/hombres' },
      'Novedades para mujeres': { path: '/nuevo/mujeres' },
      'Mejores valorados': { path: '/nuevo/mejores-valorados' },
    },
  },

  mujeres: {
    path: '/mujeres',
    items: {
      Ropa: {
        path: '/mujeres/ropa',
        subcategorias: [
          { nombre: 'Polos', path: '/mujeres/ropa/polos' },
          { nombre: 'Pantalones', path: '/mujeres/ropa/pantalones' },
          { nombre: 'Vestidos', path: '/mujeres/ropa/vestidos' },
          { nombre: 'Casacas', path: '/mujeres/ropa/casacas' },
          { nombre: 'Blusas', path: '/mujeres/ropa/blusas' },
        ],
      },
      Calzado: {
        path: '/mujeres/calzado',
        subcategorias: [
          { nombre: 'Zapatillas', path: '/mujeres/calzado/zapatillas' },
          { nombre: 'Tacones', path: '/mujeres/calzado/tacones' },
          { nombre: 'Botines', path: '/mujeres/calzado/botines' },
          { nombre: 'Sandalias', path: '/mujeres/calzado/sandalias' },
        ],
      },
      Bolsos: {
        path: '/mujeres/bolsos',
        subcategorias: [
          { nombre: 'De mano', path: '/mujeres/bolsos/de-mano' },
          { nombre: 'Cruzados', path: '/mujeres/bolsos/cruzados' },
          {
            nombre: 'Mochilas pequeñas',
            path: '/mujeres/bolsos/mochilas-pequenas',
          },
        ],
      },
      Pulseras: {
        path: '/mujeres/pulseras',
        subcategorias: [
          { nombre: 'Plata', path: '/mujeres/pulseras/plata' },
          { nombre: 'Oro', path: '/mujeres/pulseras/oro' },
          { nombre: 'Cuero', path: '/mujeres/pulseras/cuero' },
        ],
      },
    },
  },

  hombres: {
    path: '/hombres',
    items: {
      Ropa: {
        path: '/hombres/ropa',
        subcategorias: [
          { nombre: 'Polos', path: '/hombres/ropa/polos' },
          { nombre: 'Camisas', path: '/hombres/ropa/camisas' },
          { nombre: 'Pantalones', path: '/hombres/ropa/pantalones' },
          { nombre: 'Casacas', path: '/hombres/ropa/casacas' },
        ],
      },
      Calzado: {
        path: '/hombres/calzado',
        subcategorias: [
          { nombre: 'Zapatillas', path: '/hombres/calzado/zapatillas' },
          { nombre: 'Mocasines', path: '/hombres/calzado/mocasines' },
          { nombre: 'Botines', path: '/hombres/calzado/botines' },
        ],
      },
      Pulseras: {
        path: '/hombres/pulseras',
        subcategorias: [
          { nombre: 'Cuero', path: '/hombres/pulseras/cuero' },
          { nombre: 'Acero', path: '/hombres/pulseras/acero' },
          { nombre: 'Paracord', path: '/hombres/pulseras/paracord' },
        ],
      },
      Mochilas: {
        path: '/hombres/mochilas',
        subcategorias: [
          { nombre: 'Urbanas', path: '/hombres/mochilas/urbanas' },
          { nombre: 'Deportivas', path: '/hombres/mochilas/deportivas' },
          { nombre: 'Casuales', path: '/hombres/mochilas/casuales' },
        ],
      },
    },
  },

  niños: {
    path: '/ninos',
    items: {
      Ropa: {
        path: '/ninos/ropa',
        subcategorias: [
          { nombre: 'Polos', path: '/ninos/ropa/polos' },
          { nombre: 'Pantalones', path: '/ninos/ropa/pantalones' },
          { nombre: 'Casacas', path: '/ninos/ropa/casacas' },
          { nombre: 'Vestidos', path: '/ninos/ropa/vestidos' },
        ],
      },
      Calzado: {
        path: '/ninos/calzado',
        subcategorias: [
          { nombre: 'Zapatillas', path: '/ninos/calzado/zapatillas' },
          { nombre: 'Sandalias', path: '/ninos/calzado/sandalias' },
          { nombre: 'Botines', path: '/ninos/calzado/botines' },
        ],
      },
      Juguetes: {
        path: '/ninos/juguetes',
        subcategorias: [
          { nombre: 'Educativos', path: '/ninos/juguetes/educativos' },
          { nombre: 'De colección', path: '/ninos/juguetes/de-coleccion' },
          { nombre: 'Para exterior', path: '/ninos/juguetes/para-exterior' },
        ],
      },
    },
  },

  regalos: {
    path: '/regalos',
    items: {
      'Regalos para él': { path: '/regalos/para-el' },
      'Regalos para ella': { path: '/regalos/para-ella' },
      'Gift Card': { path: '/regalos/gift-card' },
      Gorras: { path: '/regalos/gorras' },
      Pulseras: { path: '/regalos/pulseras' },
      Tomatodos: { path: '/regalos/tomatodos' },
      Llaveros: { path: '/regalos/llaveros' },
    },
  },
};
