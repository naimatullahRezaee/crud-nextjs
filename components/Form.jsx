import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handlesubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post </span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} ducimus dignissimos sequi laboriosam dolorum voluptates inventore
        molestias et, consequatur quo neque esse, ex quod eum provident!
      </p>
      <form
        onSubmit={handlesubmit}
        className="mt-10 w-full max-w-2xl flex flex-col glassmorphism"
      >
        <label htmlFor="">
          <span className=" font-satoshi font-semibold text-base text-gray-700 ">
            Your AI prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder=" Write your prompt hrer..."
            className="form_textarea"
            required
          />
        </label>
        <label htmlFor="">
          <span className=" font-satoshi font-semibold text-base text-gray-700 ">
            Tag {` `}
            <span className="font-normal">
              (#product, #webdevelopment, #idea )
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            className="form_input"
            required
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            type="submit"
            disabled={submitting}
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
