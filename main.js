function displayQuote(quote) {
  document.getElementById("text").textContent = quote.text;
  document.getElementById("author").textContent = quote.author;
  document.getElementById("tag").textContent = quote.tag.join(", ");
}

function quoteDate() {
  fetch("https://lumoshive-academy-quote-api.vercel.app/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "RJS1-202409",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      displayQuote(data);
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
    });
}
quoteDate();
