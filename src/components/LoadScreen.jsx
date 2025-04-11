import { useEffect, useState} from "react";

export const LoadingScreen = ( {onComplete} ) => {
    const [text, setText] = useState("")
    const fullText ="Welcome, I'm Ava Gonick";

    /*useEffect runs on <render>*/
    /*adding a array makes it only run on first render, or can amke it change when prop/states change*/
    useEffect(() => {
        let index = 0;

        /*setInterval runs the function given to it every delay milliseconds*/
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length){

                clearInterval(interval);
                setTimeout(()=> {
                    onComplete();
                }, 1000);
            }
        }, 200);

        /*this clears a component when it unmounts*/
        return () => clearInterval(interval);

        /*only runs once when loaded and onComplete is */
    }, [onComplete])


    return <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
{/* The span is make the blinking cursor, giving different styling to it. Dont want like a p or something because that has too much padding*/}
<div className="mb-4 text-4xl font-mono font-bold"> {text} <span className="animate-blink ml-1"> | </span>
</div>

<div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
    <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15pc_#3b82f6] animate-loading-bar"></div>
    </div>

</div>

}