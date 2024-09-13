import { quotes } from "../assets"

const Feedback = ({ content, name, title, img }) => (
    <div className="md:w-[20vw] w-screen h-auto flex flex-auto flex-col items-center justify-center bg-blue-400 rounded md:m-4 m-0 shadow border-2">
        <div className="w-[100%] flex items-start justify-between p-6">
          <img src={img} alt="" className="h-12 w-12 shadow"/>
          <img src={quotes} alt="" className="h-8 w-8"/>
        </div>
        <div className="w-[100%] text-wrap text-center  flex flex-col p-2">
          <span className="text-white font-semibold text-xl">{name}</span>
          <span className="text-dimWhite font-light text-xs">{title}</span>
          <p className="font-normal text-xl">{content}</p>
        </div>
    </div>
  )


export default Feedback