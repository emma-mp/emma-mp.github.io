
import { Parallax } from 'react-scroll-parallax';
import useWindowDimensions from './functions.js'
import styles from './HomePage.module.css'

function HomePage() {
    const { height, width } = useWindowDimensions();

    return (
        <div className={styles.main}>
            <div className={styles.homePage} style={{ height: height }}>
                <Parallax speed={-10}>
                    <h1 className={styles.nameText}>
                        Emma Paterson
                    </h1>
                </Parallax>
                <Parallax translateY={['600%', '0%']}>
                    <h2 className={styles.portfolioText}>
                        Portfolio Page
                    </h2>
                </Parallax>
                <div className="clouds">
                    <Parallax speed={15}>
                        <div className={styles.cloudOne}>
                            <img src={require('./images/cloudOne.png')} alt="cloud one" style={{ width: '100%' }} />
                        </div>
                    </Parallax>
                    <Parallax speed={5}>
                        <div className={styles.cloudThree}>
                            <img src={require('./images/cloudThree.png')} alt="cloud three" style={{ width: '100%' }} />
                        </div>
                    </Parallax>
                    <Parallax speed={-10}>
                        <div className={styles.cloudTwo}>
                            <img src={require('./images/cloudTwo.png')} alt="cloud two" style={{ width: '100%' }} />
                        </div>
                    </Parallax>
                </div>
            </div>

            <div className={styles.street} >
                <Parallax translateX={['-400px', '1200px']} startScroll={height / 7} endScroll={2 * height}>
                    <div className={styles.cars}>
                        <img src={require('./images/cakeCar.png')} alt="cake car" />
                        <img src={require('./images/cowCar.png')} alt="cow car" />
                        <img src={require('./images/dinoCar.png')} alt="dino car" />
                    </div>
                </Parallax>
            </div >

            <div style={{ height: 800 }}>
            </div >
        </div >
    );
}

export default HomePage;
