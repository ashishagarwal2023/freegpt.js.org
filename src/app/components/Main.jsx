"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export const Main = () => {
  const [query, setQuery] = useState("");
  const [responses, setResponses] = useState([]);
  const [generating, setGenerating] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setGenerating(true);
    setQuery("");
    try {
      const gptResponse = await gpt.ask(query);
      setResponses([{ question: query, answer: gptResponse }, ...responses]);
    } catch (error) {
      setResponses([{ question: query, answer: error.message }, ...responses]);
    }
    setGenerating(false);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <main className="m-2 flex flex-col items-center">
      <div className="p-4 m-0 w-3/4 justify-center">
        <h2 className="text-3xl font-semibold text-blue-600 flex flex-row justify-center mb-4">
          FreeGPT with ReactJS
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-row justify-center">
          <input
            type="text"
            name="q"
            required
            value={query}
            onChange={handleInputChange}
            placeholder="Enter your question"
            className="border border-gray-300 rounded-md p-2 mr-2"
          />
          {generating ? (
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-100 hover:bg-blue-600 disabled:bg-gray-400"
              disabled
            >
              <FontAwesomeIcon
                icon={faArrowRotateRight}
                className="animate-spin"
              />
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md transition duration-100 hover:bg-blue-600 disabled:bg-gray-400"
            >
              <FontAwesomeIcon icon={faPaperPlane}/>
            </button>
          )}
        </form>
        <div className="flex flex-row justify-center text-center">
          <p className="text-md text-black mt-4 w-3/4">
            This is the ChatGPT 3.5 Model. You have no limits except ChatGPT
            couldn't recall anything you said in previous responses or
            conversations. Based on{" "}
            <a
              href="https://github.com/ashishagarwal2023/freegpt.js.org/tree/main"
              target="_blank"
              className="text-blue-600 font-semibold"
            >
              FreeGPT.js
            </a>
            , a free ChatGPT-3.5 Turbo library!
          </p>
        </div>
        {responses.length > 0 ? (
          <div className="mt-4">
            <h2 className="text-2xl font-medium">Responses:</h2>
            {responses.map((response, index) => (
              <div key={index} className="mt-2">
                <h3 className="text-lg font-medium">{response.question}</h3>
                <p>{response.answer}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4">
            <h2 className="text-2xl font-medium">Responses:</h2>
            <p>No responses yet.</p>
          </div>
        )}
      </div>
    </main>
  );
};
