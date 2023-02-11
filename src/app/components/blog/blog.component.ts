import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit{
  title: string = '';
  img: string = '';
  text: string = '';
  date: string = '';
  arrNoticias: Noticia[] = [];
  listaNoticias: string = '';

  constructor() {
    this.arrNoticias = [
      {
        title: 'Tulipanes',
        img: 'https://verdecora.es/blog/wp-content/uploads/2020/11/tulipanes-colores.jpg',
        text: 'Hay pocas flores que hayan logrado cautivar a los amantes de la jardinería como el tulipán. No solo se trata de una flor histórica que, incluso, tiene su propio mercado. Añadido, su peso en el mundo de la floristería es tan increíble que merece capítulo aparte conocer el significado de los tulipanes según su color. Un auténtico lenguaje oculto que subyace bajo cada tonalidad, y con el que podemos decir mucho sin articular una sola palabra. Ya sea por su belleza o por su tradición, los tulipanes son una de las flores más regaladas en el mundo. Un puesto que los sitúa en el ranking junto con otras grandes protagonistas de la floristería, como las rosas. A pesar de su sencillez, la fascinación por esta flor de bulbos no es nueva. De hecho, su llegada a Europa supuso un auténtico repulsivo. Fue tal el impacto que tuvo entre los amantes de las flores que, en una subasta, un tulipán llegó a venderse por el precio equivalente a lo que costaba una vivienda en la época. Hoy, a pesar de su importancia en el mundo de las flores, disfrutar de ellos está al alcance de todos. Y lo que es más importante: valernos del significado de los tulipanes para transmitir emociones pasa, únicamente, por conocer qué implica cada uno.',
        date: '25-05-2005',
      },
      {
        title: 'Rosas',
        img: 'https://www.verdissimo.com/wp-content/uploads/2018/05/tipos-de-rosas-verdissimo.jpg',
        text: 'El género Rosa está compuesto por un conocido grupo de arbustos generalmente espinosos y floridos representantes principales de la familia de las rosáceas. Se denomina rosa a la flor de los miembros de este género y rosal a la planta. El número de especies ronda las cien, la mayoría originarias de Asia y un reducido número nativas de Europa, Norteamérica y África noroccidental. Tanto especies como cultivares e híbridos se cultivan como ornamentales por la belleza y fragancia de su flor; pero también para la extracción de aceite esencial, utilizado en perfumería y cosmética, usos medicinales (fitoterapia) y gastronómicos. Existe una enorme variedad de cultivares de rosa (más de 30 000) a partir de diversas hibridaciones, y cada año aparecen otros nuevos. Las especies progenitoras mayormente implicadas en los cultivares son: Rosa moschata, Rosa gallica, Rosa × damascena, Rosa wichuraiana, Rosa californica y Rosa rugosa. Los cultivadores de rosas o rosalistas del siglo xx se centraron en el tamaño y el color, para producir flores grandes y atractivas, aunque con poco o ningún aroma. Muchas rosas silvestres y «pasadas de moda», por el contrario, tienen una fragancia dulce y fuerte. Las flores de las las rosas están entre las flores más comunes vendidas por los floristas.',
        date: '15-07-2020',
      },
    ];
  }

  guardar(): void {
    let noticia = {
      title: this.title,
      img: this.img,
      text: this.text,
      date: this.date,
    };

    this.arrNoticias.push(noticia);
    this.cargarNoticias();

    this.title = '';
    this.img = '';
    this.text = '';
    this.date = '';
  }

  cargarNoticias(): void {
    this.listaNoticias = '';
    this.arrNoticias.forEach((noticia) => {
      this.listaNoticias += `<div> <p>${noticia.title}</p> <img src = "${noticia.img}"/> <p>${noticia.text}</p> <p>${noticia.date}</p> </div>`;
    });
  }

  ngOnInit() {
    this.cargarNoticias();

  }
}
