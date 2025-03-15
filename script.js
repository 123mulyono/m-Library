// Sample book data
const books = [
  {
    title: "Naskah Akademik",
    author: "Kemdikdasmen",
    cover: "https://via.placeholder.com/150",
    description: "This is a sample book.",
    pdfUrl: "https://123mulyono.github.io/naskahakademikPM/",
    category: "Kurikulum Mendalam"
  },
  {
    title: "Saboo",
    author: "Michael Fullan",
    cover: "https://via.placeholder.com/150",
    description: "Another sample book.",
    pdfUrl: "https://123mulyono.github.io/celengan/",
    category: "Panduan Kurikulum"
  },
  {
    title: "Sample Book 3",
    author: "Author 3",
    cover: "https://via.placeholder.com/150",
    description: "Yet another sample book.",
    pdfUrl: "https://example.com/book3.pdf",
    category: "Fiction"
  }
];

// Get DOM elements
const categoriesList = document.getElementById("categories");
const bookshelf = document.getElementById("bookshelf");
const categoryTitle = document.getElementById("category-title");
const pdfViewer = document.getElementById("pdf-viewer");
const pdfIframe = document.getElementById("pdf-iframe");

// Function to render categories
function renderCategories() {
  const categories = [...new Set(books.map(book => book.category))];
  categoriesList.innerHTML = categories
    .map(category => `<li onclick="filterBooks('${category}')">${category}</li>`)
    .join("");
}

// Function to filter books by category
function filterBooks(category) {
  const filteredBooks = books.filter(book => book.category === category);
  renderBooks(filteredBooks);
  categoryTitle.textContent = category;
}

// Function to render books
function renderBooks(books) {
  bookshelf.innerHTML = books
    .map(
      book => `
        <div class="book">
          <img src="${book.cover}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <button onclick="openPdf('${book.pdfUrl}')">Read Book</button>
        </div>
      `
    )
    .join("");
}

// Function to open PDF in iframe
function openPdf(url) {
  pdfIframe.src = url;
  pdfViewer.style.display = "flex";
}

// Function to close PDF viewer
function closePdf() {
  pdfIframe.src = "";
  pdfViewer.style.display = "none";
}

// Initial render
renderCategories();
renderBooks(books);
