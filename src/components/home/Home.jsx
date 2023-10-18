import React, { useState } from 'react'
import './home.scss'
import arrow from '../../assets/icon-arrow.svg'
import left from '../../assets/icon-angle-left.svg'
import right from '../../assets/icon-angle-right.svg'
import figure1 from '../../assets/desktop-image-hero-1.jpg'
import figure2 from '../../assets/desktop-image-hero-2.jpg'
import figure3 from '../../assets/desktop-image-hero-3.jpg'

const sources = [
    {
        id: 1,
        img: figure1,

    },
    {
        id: 2,
        img: figure2,

    },
    {
        id: 3,
        img: figure3

    }

]
const Home = () => {
    const [count, setCount] = useState(0);
    const [background, setBackground] = useState(sources[count].img);

    const nextBackground = () => {
        if (count < sources.length - 1) {
            setCount(count + 1);
        } else {
            setCount(0);
        }
        setBackground(sources[count].img);
    }
    const prevBackground = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            setCount(sources.length - 1); // Retrocede a la última imagen cuando estás en la primera
        }
        setBackground(sources[count].img); // Actualiza el fondo
    }
    return (
        <div className='home'>
            <section>
                <nav style={{
                    backgroundImage: `url(${background})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'




                }}>
                    <strong>room</strong>
                    <ul>
                        <li>home</li>
                        <li>shop</li>
                        <li>about</li>
                        <li>contact</li>

                    </ul>
                </nav>
                <article>
                    <h1>Discover innovate <span>ways to decorate</span></h1>
                    <p>
                        We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.
                    </p>
                    <button>SHOP <span>NOW</span> <img src={arrow} alt="arrow" /></button>

                    <div>
                        <button onClick={prevBackground}>
                            <img src={left} alt="left" />

                        </button>
                        <button onClick={nextBackground}>
                            <img src={right} alt="right" />

                        </button>

                    </div>

                </article>

            </section>
        </div>
    )
}

export default Home