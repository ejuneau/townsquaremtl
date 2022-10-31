import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Header() {
    return (
        <header>
            <div className="header-alignment">
                <img className="header-logo" src={ require("../images/logo.png")} alt="townsquare logo"/>
                <div className="header-spacer"></div>
                <div className="header-nav">
                    <div className="header-nav-search">
                        <FontAwesomeIcon icon={solid('magnifying-glass')} color="#FAB734"className="search"/>
                    </div>
                    <div className="header-nav-socials">
                        <div className="header-nav-socials-facebook">
                            <a href="facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                                <FontAwesomeIcon icon={brands('facebook-f')} className="facebook-icon"/>
                            </a>
                        </div>
                        <div className="header-nav-socials-twitter">
                            <a href="twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                                <FontAwesomeIcon icon={brands('twitter')} className="twitter-icon"/>
                            </a>
                        </div>
                        <div className="header-nav-socials-instagram">
                            <a href="instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
                                <FontAwesomeIcon icon={brands('instagram')} className="instagram-icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}