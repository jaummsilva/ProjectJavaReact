import axios from "axios";
import icon from "../../assets/img/Vector.svg"
import { BASE_URL } from "../../utils/request";
import "./style.css"

type Props = {
    saleID: number;
}

function handleClick(id: number){
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log(response.data.content)
        })
}

function NotificationButton({saleID} : Props) {
    return(
        <>      
            <div className="dsmeta-red-btn" onClick={() => handleClick(saleID)}>
                <img src={icon} alt="Notificar" />
            </div>
        </>
    )
  }
  
  export default NotificationButton
  