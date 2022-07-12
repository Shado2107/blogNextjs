import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
  <div className='container px-4 pt-5'>
      <h1>Bienvenue sur COde.io</h1>
      <span>Le blog communiataire des aficinados de developpment web</span>

      <div className='row mt-5'>
        <div className='col-12 col-sm-6' style={{ minheight: "200px" }}>
            <div className='card w-100 h-100'>
                <div className='card-body'>
                  <h5 className='card-title'> Lisez les articles</h5>
                  <h6 className='card-subtitle mb-2 text-muted'>
                      Maximisez votre culture web
                  </h6>
                  <p className='card-text'>
                      chaque auteur de vous apporter le plus de valeur possible 
                      par article
                  </p> 
                  <Link href='/blog'>
                    <a>Visiter le bloc</a>
                  </Link>   
                </div>
            </div>
        </div>
        <div className='col-12 col-sm-6' style={{ minheight: "200px" }}>
            <div className='card w-100 h-100'>
                <div className='card-body'>
                  <h5 className='card-title'> Lisez les articles</h5>
                  <h6 className='card-subtitle mb-2 text-muted'>
                      Maximisez votre culture web
                  </h6>
                  <p className='card-text'>
                      chaque auteur de vous apporter le plus de valeur possible 
                      par article
                  </p> 
                  <Link href='/blog'>
                    <a>Visiter le bloc</a>
                  </Link>   
                </div>
            </div>
        </div>

      </div>
  </div>
    
  );
}


