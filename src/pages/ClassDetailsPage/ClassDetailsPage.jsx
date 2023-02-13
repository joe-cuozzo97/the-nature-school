import { useParams } from "react-router-dom"
import "./ClassDetailsPage.css"
import ClassDayItem from "../../components/ClassDayItem/ClassDayItem";


export default function ClassDetailsPage(props) {
const {id} = useParams();
 
  return (
    <>
    <div>
      <h1>Details Page</h1>
      

    </div>
    <hr />
    <div>
      <h2>Comments/Discussion</h2>
      <input placeholder="text" />
      <button>Send</button>
    </div>
    </>
  )
}
