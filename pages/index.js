import Head from 'next/head';
import Countdown from '../components/Countdown';

export default function Home() {
  return (
    <>
      <Head>
        <title>La vida bonita</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Montserrat:wght@500&family=Playfair+Display&display=swap" rel="stylesheet" />
      </Head>

      <header className="hero">
        <h1>Bren y Jordi</h1>
        <p>Tenemos el gusto de invitarlos a nuestro enlace matrimonial, con la bendicion de DIOS, nuestros padres, hermanos y seres queridos.</p>
         <section className="padres">
        <div className="padres-container">
         <div class="lado">
        <p>PEDRO MORENO SALDAÑA</p>
        <p>BLANCA ESTELA HERNANDEZ SANCHEZ</p>
        </div>
        <div class="linea-vertical"></div>
        <div class="lado">
        <p>ERASMO BRITO INIESTA</p>
        <p>ROCISELA PLASCENCIA HERNANDEZ</p>
        </div>
        </div>
        </section>
        <p className="date">13 de Diciembre de 2025</p>
      </header>

      <section className="fotos">
        <h1>Así que ya no son dos, sino uno solo. Por tanto, lo que Dios ha unido, que no lo separe el hombre.</h1>
        <div className="foto-seccion">
          <img src="/img/PedidaBN.jpeg" alt="AMOR" />
        </div>
      </section>

      <section className="detalles">
        <h2>
          Detalles del Evento
        </h2>
        <p><strong>Fecha:</strong> 13 de Diciembre de 2025</p>
        <p><strong>Lugar:</strong> Jardín Magnolia, Jiutepec Morelos</p>
        <p><strong>Recepción:</strong> 4:00 PM</p>
        <div className="boton-con-icono">
    <img src="/img/location.svg" alt="Ubicación" className="icono" />
        <a href="https://maps.app.goo.gl/219x1PZCheMR7wWe6?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer">
        Cómo llegar
        </a>
      </div>
      
        <div className="foto-seccion">
          <img src="/img/detalle-evento.jpeg" alt="Nos comprometimos" />
        </div>
      </section>

 <section className="detalles vestimenta">
  <div className="icon-text-container">
    <img src="/img/suit1.svg" alt="traje" className="iconv" />
    
    <p className="codigo-vestimenta"><strong> <h2>Código de vestimenta</h2> </strong> <p>Formal / Etiqueta</p> </p>

    <img src="/img/dress.svg" alt="vestido" className="iconv" />
  </div>

  {/* Aquí va el texto que quieres mostrar */}
  <h3 className="subtitulo-paleta">Paleta de colores sugerida</h3>

  <div style={{ textAlign: 'center' }}>
    <img src="/img/paleta3.png" alt="Paleta de colores" className="imagen-paleta" />
  </div>
</section>

      <div className="foto-seccion">
        <img src="/img/VistaBN.jpeg" alt="Te esperamos" />
      </div>

        <section className="detalles">
        <h2>
          Asistencia / Mesa de regalos
        </h2>  
       <div className="boton-con-icono">
    <img src="/img/confirm.svg" alt="Confirmacion" className="icono" />
        <a href="https://maps.app.goo.gl/219x1PZCheMR7wWe6?g_st=com.google.maps.preview.copy" target="_blank" rel="noopener noreferrer">
          Confirmar asistencia
        </a>
      </div>
      </section>
      <section>
        <h1>FALTAN</h1>
        <Countdown />
      </section>

      <footer>
        <p>Gracias por compartir este momento con nosotros.</p>
      </footer>
    </>
  );
}