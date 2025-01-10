import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import "github-markdown-css";
import FooterOne from "@/components/Footer/FooterOne";
import LayoutOne from "@/layouts/LayoutOne";

export default function Whitepaper() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    // Fetch the Markdown file from the public folder
    fetch("/EtherealCash Whitepaper.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the Markdown file");
        }
        return response.text();
      })
      .then((text) => setMarkdown(text))
      .catch((error) => console.error("Error fetching Markdown:", error));
  }, []);

  return (
    <>
      <LayoutOne>
        <div className="d-flex flex-column align-items-center justify-content-center bg-blue mt-4">
          <div
            className="markdown-body b p-3 w-100"
            style={{
              maxWidth: "80%",
              border: "0.5px solid #30363d",
              backgroundColor: "transparent",
              borderRadius: "6px",
            }}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </LayoutOne>
    </>
  );
}
