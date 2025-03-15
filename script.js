// Fetch book data from books.json
fetch('books.json')
  .then(response => response.json())
  .then(books => {
    const bookshelf = document.getElementById("bookshelf");

    // Render each book
    books.forEach(book => {
      const bookElement = document.createElement("div");
      bookElement.className = "book";
      bookElement.innerHTML = `
        <img src="${book.cover}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>${book.description}</p>
        <button onclick="openPdf('${book.pdfUrl}')">Read Now</button>
      `;
      bookshelf.appendChild(bookElement);
    });
  });

// Function to open PDF in iframe
function openPdf(url) {
  const pdfViewer = `
    <div class="pdf-viewer">
      <iframe src="${url}"></iframe>
      <button onclick="closePdf()">Close</button>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", pdfViewer);
}

// Function to close PDF viewer
function closePdf() {
  const pdfViewer = document.querySelector(".pdf-viewer");
  pdfViewer.remove();
}