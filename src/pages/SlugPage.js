import { useSelector } from "react-redux"
import { selectGetAllBooks } from "../features/solutions/booksSlice";
import Input from "../components/UI/HsInput"
import Button from "../components/UI/HsButton"
function SlugPage() {
  const book = useSelector(selectGetAllBooks);
  console.log(book)
  return (
    <div className=" bg-secondaryLight mt-0 md:-mt-10  flex flex-col gap-3">
      {/* {book.description} */}
      <div className="bg-white p-4 flex flex-col gap-3">

        <h1 className="text-lg font-semibold ">Lorem ipsum</h1>
        <p className="text-base text-gray-500 "> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available </p>

        <div className="flex flex-col gap-3">
          <h1 className="text-lg font-semibold ">Step 1: Lorem ipsum</h1>
          <p className="text-base text-gray-500 "> In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available </p>

          <img src="/payment.png" alt={book?.name} />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <small className="text-base font-normal ">Is this article helpful ?</small>
        <p className="text-base font-normal flex gap-3 ">

          <button className="bg-primary text-white px-4 py-2 rounded-md">
            Yes
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            No
          </button>
        </p>
      </div>
      <div className=" border border-gray-400 p-3 ">
        <p>help us wit your feedback to improve our article</p>

        <form className="flex flex-col gap-2">

          <Input label="Name" placeholder="John Doe" type="input" style={`bg-white`} />
          <Input label="E-mail" placeholder="johnDoe@gmail.com" style={`bg-white`} type="input" />
          <Input label="Feedback" placeholder="Comments" />
          <div className=" flex gap-3 items-center capitalize">
            <Button title="send"  styles={`bg-primary text-white`}/>
            <Button title="cancel" styles={`bg-primary text-white`} />
          </div>

        </form>

      </div>
    </div>
  );
}
export default SlugPage;
