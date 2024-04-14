(function () {
  /**
   * Main library for gpt.ask method to fetch GPT's response from YouAPI
   * Completely free, open-source API with no verification or tokenization required
   * By @ashishagarwal2023 (GitHub)
   */

  const fetchAndExtract = async (url) => {
    try {
      const response = await fetch(url);
      const text = await response.text();
      const result = parseAndExtract(text);
      return result;
    } catch (error) {
      console.error("Bot failed to fetch response:", error);
      return null;
    }
  };

  const parseAndExtract = (text) => {
    const youChatTokens = [];
    const firstIndex = text.indexOf("event: youChatToken");
    if (firstIndex !== -1) {
      let trimmedText = text.substring(firstIndex);
      const nextEventIndex = text.indexOf("event:", firstIndex + 1);
      if (nextEventIndex !== -1) {
        const abTestSlicesIndex = trimmedText.indexOf("event: abTestSlices");
        if (abTestSlicesIndex !== -1) {
          trimmedText = trimmedText.substring(0, abTestSlicesIndex);
        } else {
          trimmedText = trimmedText.substring(0, nextEventIndex);
        }
      }
      trimmedText.split("\n").forEach((line) => {
        if (line.trim() !== "" && line.includes("data:")) {
          try {
            const data = JSON.parse(line.substring(line.indexOf("{")));
            youChatTokens.push(data.youChatToken);
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        }
      });
    } else {
      console.error("No 'event: youChatToken' found in the response.");
    }
    return youChatTokens.join("");
  };

  /**
   * The ask method that is used to fetch GPT's response.
   *
   * @param {string} query - The query to be used for fetching data.
   * @param {number} [page=1] - Optional. The page number for pagination (default is 1).
   * @returns {Promise<string|null>} A promise that resolves with the extracted information or null if an error occurs.
   */
  const ask = async (query, page=1, count=(Math.floor(Math.random() * (10000 - 100 + 1)) + 100)) => {
    const url =
      "https://you.com/api/streamingSearch?q=" +
      encodeURIComponent(query) +
      "&page=" +
      page +
      "&count=" +
      count +
      "&domain=youchat";
    if (query.trim() === "") {
      console.error("Cannot parse a blank query.");
      return null;
    }
    return await fetchAndExtract(url);
  };

  /*
   * Exporting only the ask function
   */
  window.gpt = {
    ask: ask,
  };
})();
/*
 * Example usage
 * console.log(await gpt.ask("Hello there!"))
 * Second and third parameters are not needed.
 */
