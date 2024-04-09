import styles from '../styles/Home.module.css';
import HeaderComposant from './HeaderComposant';
import LatestLaunch from './LatestLaunch';
import ToSell from './ToSell';
import Footer from './Footer';



function Home() {
  const productData = [
    { name: 'PHANTOM I White', desc: 'A class of its own.', img: 'phantom1.png' },
    { name: 'PHANTOM II Gold', desc: 'Pure sound.', img: 'phantom2.png' },
    { name: 'PHANTOM II Black', desc: 'Deeply nomadic.', img: 'phantom3.png' },
    { name: 'PHANTOM II White', desc: 'Intensively immersive.', img: 'phantom4.png' }
  ]

  const products = productData.map((product, i) => {
    return <ToSell key={i} name={product.name} desc={product.desc} img={product.img} />

  })
  return (
    <div>
      <div className={styles.header}>
        <HeaderComposant />
        <div className={styles.headerBottom}>
          <div className={styles.bottomLeft}>
            <h3 className={styles.thin}>Phantom</h3>
            <h2 className={styles.fat}>IMPLOSIVE SOUND</h2>
          </div>
          <div className={styles.bottomRight}>
            <button className={styles.discover_btn}>discover</button>
            <button className={styles.buy_btn}>buy</button>
          </div>
        </div>
      </div>

      <LatestLaunch />
      <div className={styles.fatiguedudessus}>
        {products}
      </div >
      <Footer />
    </div >
  );
}

export default Home;
