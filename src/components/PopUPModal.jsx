import { modalImg } from "../assets";

const PopUPModal = () =>(
    <section id="pop-up-modal" className="w-screen h-screen flex items-center justify-center bg-slate-300">
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-[50%] h-auto flex items-center  border-2 border-black rounded-lg shadow-sm">
                <div className="w-[50%] h-full">
                    <img src={modalImg} alt="modal-image" className="bg-cover " />
                </div>
                <div className="w-[50%] h-full flex items-start flex-col">
                    <form action="#">
                        <div className="flex flex-col">
                            <span >name</span>
                            <input type="text" />
                        </div>
                        <div className="flex flex-col">
                        <span>name</span>
                        <input type="text" />
                        </div>
                        <div className="flex flex-col">
                        <span>name</span>
                        <input type="text" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )

export default PopUPModal;
