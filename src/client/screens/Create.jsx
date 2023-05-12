import React from "react";

const Create = () => {
  return (
    <section>
      <h1>Make a Post</h1>
      <form action="">
        <input className="title-input" placeholder="Title of Post" />
        <textarea className="description-input" placeholder="Description" />
        <textarea className="code-input" placeholder="Code Block" />
        <button>Post it</button>
      </form>
    </section>
  );
};

export default Create;
