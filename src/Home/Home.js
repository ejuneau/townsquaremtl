import './Home.css';
import {ReactComponent as Shape} from '../images/end-shape.svg';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Home() {
    const title = "A new website is coming soon";
    return (
        <main>
            <div className="home-splash">
                <div className="home-splash-path">
                    <p className="home-splash-root-path">HOME</p>
                    <p> &gt; </p>
                    <p className="home-splash-end-path">{title.toUpperCase()}</p>
                </div>
                <div className="home-splash-title">
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="home-main">
                <div className="home-main-carousel-container">
                <CarouselProvider
                    naturalSlideHeight={1}
                    naturalSlideWidth={5}
                    totalSlides={2}
                    infinite={true}
                    isPlaying={true}
                    interval={3000}
                    touchEnabled={false}
                    dragEnabled={false}
                    >
                    <Slider>
                        <Slide index={0}><h1>Don't worry</h1></Slide>
                        <Slide index={1}><h1>We're still open</h1></Slide>
                    </Slider>
                </CarouselProvider>
                </div>
                <p className="home-main-inquiries">For job inquires reach out to <a href="mailto:townsquaremtl@gmail.com">townsquaremtl@gmail.com</a> or call <a href="tel:5145507261">514-550-7261 </a></p>
            </div>
            <div className="home-end">
                <Shape className="home-end-shape"/>
                <div className="home-end-text-container" >
                    <div className="home-end-text">
                        <p className="home-end-text-header">For all your <strong>home services</strong></p>
                        <p className="home-end-text-header-subtitle">Our team is ready for anything you need!</p>
                    </div>
                </div>
            </div>
        </main>
    )
}