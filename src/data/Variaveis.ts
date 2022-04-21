import bolo1 from 'ui/image/bolo-1.jpg';
import bolo2 from 'ui/image/bolo-2.jpg';
import bolo3 from 'ui/image/bolo-3.jpg';


const images = [
    require('ui/image/bolo-1.jpg'),
    require('ui/image/bolo-2.jpg'),
    require('ui/image/bolo-3.jpg'),
    require('ui/image/cremoso.jpg'),
    require('ui/image/bolo-main.jpeg'),
    require('ui/image/nutela.jpg'),
];

const geraNumberIndex = () => {
    return Math.floor(Math.random() * 5);
};




const information = [
    {
        id: 1,
        titulo: 'Primeiro título de featurette. Vai explodir sua mente.',
        image: bolo1,
        subtitulo: 'Alguns ótimos conteúdos de espaço reservado para o primeiro featurette aqui. Imagine alguma prosa emocionante aqui. '
    },
    {
        id: 2,
        titulo: 'Ah sim, é tão bom. Veja por si mesmo.',
        image: bolo2,
        subtitulo: 'Outro recurso? Claro. Mais conteúdo de espaço reservado aqui para dar uma ideia de como esse layout funcionaria com algum conteúdo real do mundo real.'
    },
  
    {
        id: 1,
        titulo: 'E por último, este. Xeque-mate.',
        image: bolo3,
        subtitulo: 'E sim, este é o último bloco de conteúdo representativo de espaço reservado. Novamente, não pretende ser realmente lido, apenas aqui para lhe dar uma visão melhor de como isso ficaria com algum conteúdo real. Seu conteúdo.'
    },
];

export const lista_cardapios = [
    {
        id: 1,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 15.00'
    },
    {
        id: 2,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 12.00'
    },
    {
        id: 3,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 10.00'
    },
    {
        id: 4,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 18.00'
    },
    {
        id: 5,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 5.00'
    },
    {
        id: 6,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 8.00'
    },
    {
        id: 7,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 6.00'
    },
    {
        id: 8,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 15.00'
    },
    {
        id: 9,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 15.00'
    },
    {
        id: 10,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 15.00'
    },
    {
        id: 11,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 15.00'
    },
    {
        id: 12,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 15.00'
    },
    {
        id: 13,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 15.00'
    },
    {
        id: 14,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 15.00'
    },
    {
        id: 15,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 15.00'
    },
    {
        id: 16,
        img: images[geraNumberIndex()],
        title: 'Bolo 1',
        valor: 'R$ 15.00'
    },
]


export default information;
