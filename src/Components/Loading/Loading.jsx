import './Loading.css'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className='Loading'>
        <div className='loadingCircle'>
            <AiOutlineLoading3Quarters />
        </div>
    </div>
  )
}

export default Loading