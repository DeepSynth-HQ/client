import CodeBlock from "./code-block";
import Markdown, { Options } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export default function MarkdownFormat(props: Options) {
  return (
    <Markdown
      components={{
        code(props) {
          return <CodeBlock {...props} />;
        },
        h1(props) {
          return (
            <h1
              className="mb-4 mt-6 whitespace-normal break-words border-b border-gray-500 pb-[9.6px] text-[32px] font-semibold leading-[1.5] text-primary"
              {...props}
            />
          );
        },
        h2(props) {
          return (
            <h2
              className="mb-4 mt-6 whitespace-normal break-words border-b border-gray-500 pb-[7.2px] text-2xl font-semibold leading-[1.25] text-primary"
              {...props}
            />
          );
        },
        h3(props) {
          return (
            <h3
              className="mb-4 mt-6 whitespace-normal break-words text-xl font-semibold leading-[1.25] text-primary"
              {...props}
            />
          );
        },
        h4(props) {
          return (
            <h4
              className="mb-4 mt-6 whitespace-normal break-words text-base font-semibold leading-[1.25] text-primary"
              {...props}
            />
          );
        },
        h5(props) {
          return (
            <h5
              className="mb-4 mt-6 text-sm font-semibold leading-[1.25] text-primary"
              {...props}
            />
          );
        },
        h6(props) {
          return (
            <h6
              className="mb-4 mt-6 text-[0.85rem] font-semibold leading-[1.25] text-primary/80"
              {...props}
            />
          );
        },
        hr(props) {
          return (
            <hr
              className="my-6 h-px overflow-hidden rounded-full border-none bg-secondary"
              {...props}
            />
          );
        },
        strong(props) {
          return (
            <strong
              className="whitespace-normal break-words text-base font-semibold leading-[1.5]"
              {...props}
            />
          );
        },
        em(props) {
          return (
            <em
              className="whitespace-normal break-words text-base italic leading-[1.5]"
              {...props}
            />
          );
        },
        ul(props) {
          return (
            <ul
              className="mb-4 list-disc pl-8 font-bold"
              {...props}
            />
          );
        },
        li(props) {
          return (
            <li
              className="list-item whitespace-normal break-words text-base font-normal leading-[1.5]"
              {...props}
            />
          );
        },
        a(props) {
          return (
            <a
              className="text-primary hover:underline"
              {...props}
            />
          );
        },
        table(props) {
          return (
            <div className="w-full max-w-full overflow-x-auto">
              <table
                className="w-max border border-secondary"
                {...props}
              />
            </div>
          );
        },
        th(props) {
          return (
            <th
              className="max-w-[200px] whitespace-nowrap border border-secondary bg-primary px-2 font-bold text-primary-foreground"
              {...props}
            />
          );
        },
        td(props) {
          return (
            <td
              className="max-w-[200px] whitespace-nowrap border border-secondary px-2 text-secondary-foreground"
              {...props}
            />
          );
        },
      }}
      remarkPlugins={[remarkGfm, remarkHtml]}
      rehypePlugins={[rehypeRaw]}
      className={"flex-grow overflow-auto whitespace-normal"}
      {...props}
    />
  );
}
