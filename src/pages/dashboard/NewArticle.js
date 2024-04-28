import React from "react";
import HSInput from "../../components/form/HSInput";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function NewArticle() {
  return (
    <div className="md:p-8">
      <div
        className="flex flex-col gap-5
      "
      >
        <HSInput
          type="input"
          label="Article Title"
          placeholder="Enter title"
          style={`lg:w-[400px]`}
        />
        <HSInput
          type="input"
          label="Article Category"
          placeholder="Choose category"
          style={`lg:w-[400px]`}
        />
        <label for="ckeditor">Write full article</label>
        <CKEditor
          id="ckeditor"
          editor={ClassicEditor}
          data="<p>Hello from CKEditor&nbsp;5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event) => {
            console.log(event);
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    </div>
  );
}

export default NewArticle;
