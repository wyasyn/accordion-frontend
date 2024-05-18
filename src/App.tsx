import { AccordionComponent } from "./components/accord";
import star from "@/assets/icon-star.svg";
import desktopBg from "@/assets/background-pattern-desktop.svg";
import mobileBg from "@/assets/background-pattern-mobile.svg";

function App() {
    return (
        <>
            <div className="bg-gray-100 ">
                <img
                    src={desktopBg}
                    alt="bg"
                    className="hidden lg:block w-full object-cover "
                />
                <img
                    src={mobileBg}
                    alt="bg"
                    className="block lg:hidden w-full object-cover "
                />
            </div>
            <div className=" px-4 -mt-[7rem] relative z-40 ">
                <div className=" bg-secondary px-8 py-12 rounded-xl max-w-[600px] mx-auto shadow-sm ">
                    <h2 className=" font-bold text-3xl mb-4 flex gap-3 items-end ">
                        <img src={star} alt="star" /> FAQs
                    </h2>
                    <AccordionComponent />
                </div>
            </div>
        </>
    );
}

export default App;
