import "./style.css"
import logo from "../../assets/img/image1.svg"

function Header() {
    return(
        <>      
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta" />
            <h1>Project React</h1>
            <p>
              Desenvolvido por
              <a href="https://www.instagram.com/jaumm.silva">@jaumm.silva</a>
            </p>
        </div>
    </header>
        </>
    )
  }
  
  export default Header