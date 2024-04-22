import { MdThumbUp, MdThumbDown } from "react-icons/md";
import HSInput from "../components/form/HSInput";
import HSButton from "../components/form/HSButton";
import { useSelector } from "react-redux";
import { selectCurrentQuestion } from "../features/solutions/booksSlice";

function SlugPage() {
  const question = useSelector(selectCurrentQuestion);
  return (
    <>
      <div className="bg-secondary p-4">
        {question ? (
          <div>
            <h1 className="text-xl font-bold">{question.question}</h1>
            {question.answers.map((answer, index) => (
              <div key={index}>
               <h1 className="font-bold text-2xl"> {`Step ${index+=1} :`}</h1>
                <h2 className="text-base capitalize font-semibold mt-2">{answer.title}</h2>
                <p className="py-5 font-light">{answer.description}</p>
                <div className=" min-h-[50%] ">
                {answer.image && answer.image.map((img, idx) => (
                  <img key={idx} src={img}  alt={answer.title} />
                ))}  
                 </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xl font-light">No question selected</p>
        )}
      </div>

      {/* Feedback Section */}
      <div className="p-4 m-5 ">
        <div className="flex items-center justify-evenly font-semibold">
          <p className="text-xl">Is this article helpful?</p>
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <p>Yes</p>
              <MdThumbUp className="text-primary size-5 cursor-pointer" />
            </div>
            <div className="flex items-center gap-2">
              <p>No</p>
              <MdThumbDown className="text-primary size-5 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="px-4 py-8 border border-solid rounded-xl bg-white">
        <p className="text-lg">Help us with your feedback to improve our article!</p>
        <form className="my-4 flex flex-col gap-3">
          <HSInput label="Names" required id="name" type="input" placeholder="Enter your Names" />
          <HSInput label="Email" required id="email" type="input" placeholder="example@gmail.com" />
          <HSInput label="Feedback" required id="feedback" type="textarea" placeholder="comments..." />
          <div className="flex items-center gap-3">
            <HSButton title="Send" />
            <HSButton title="Cancel" />
          </div>
        </form>
      </div>
    </>
  );
}

export default SlugPage;
