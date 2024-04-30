import { MdThumbUp, MdThumbDown } from "react-icons/md";
import HSInput from "../components/form/HSInput";
import HSButton from "../components/form/HSButton";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentQuestion } from "../features/solutions/booksSlice";
import { seleteGetfeedbacksStatus, createFeedbacks } from "../features/feedback/feeedbackSlice";
import * as formValidation from "../validations/index";
import { useFormik } from "formik";
import { useState } from "react";
function SlugPage() {
  const [message, setMessage] = useState("");
  const question = useSelector(selectCurrentQuestion);
  const loading = useSelector(seleteGetfeedbacksStatus);
  const dispatch = useDispatch();
  const formik = useFormik({
    validate: formValidation.validateFeedbacks,
    initialValues: {
      email: "",
      names: "",
      feedback: "",
    },
    onSubmit: async (values) => {
      try {
        const resultAction = await dispatch(createFeedbacks({
          questionId: question?._id,
          email: values.email,
          names: values.names,
          feedback: values.feedback,
        }));
        if (createFeedbacks.fulfilled.match(resultAction)) {
          setMessage("Operation successful!");
          formik.resetForm(); 
        } else {
          setMessage("Operation failed!"); 
        }
      } catch (error) {
        setMessage("An error occurred!");
        console.error("Feedback submission error:", error);
      }
    },
  });

  return (
    <>
      <div className="bg-secondary p-4">
        {question ? (
          <div>
            <h1 className="text-xl font-bold">{question.question}</h1>
            {question.answers.map((answer, index) => (
              <div key={index}>
                <h1 className="font-bold text-2xl"> {`Step ${index += 1} :`}</h1>
                <h2 className="text-base capitalize font-semibold mt-2">{answer.title}</h2>
                <p className="py-5 font-light">{answer.description}</p>
                <div className=" min-h-[50%] ">
                  {answer.image && answer.image.map((img, idx) => (
                    <img key={idx} src={img} alt={answer.title} />
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
        <form className="my-4 flex flex-col gap-3"
          onSubmit={formik.handleSubmit}
        >
          {message && <div className="text-center text-red-500">{message}</div>}

          <div>
            <HSInput
              label="Names"
              id="names"
              type="input"
              placeholder="Enter your Names"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.names}
            />
            {formik.touched.names && formik.errors.names ? (
              <p className=" text-sm text-red-800 font-normal ">
                {formik.errors.names}
              </p>
            ) : null}
          </div>
          <div>
            <HSInput
              label="Email"
              id="email"
              type="input"
              placeholder="example@gmail.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className=" text-sm text-red-800 font-normal ">
                {formik.errors.email}
              </p>
            ) : null}

          </div>
          <div>
            <HSInput
              label="Feedback"
              id="feedback"
              type="textarea"
              placeholder="comments..."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.feedback}
            />
            {formik.touched.feedback && formik.errors.feedback ? (
              <p className=" text-sm text-red-800 font-normal ">
                {formik.errors.feedback}
              </p>
            ) : null}
          </div>
          <div className="flex items-center gap-3">
            <HSButton
              title={loading ? "Processing..." : "Send"}
              click={() => formik.submitForm()}
            />
            <HSButton title="Cancel" />
          </div>
        </form>
      </div>
    </>
  );
}

export default SlugPage;
