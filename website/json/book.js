const books = [
    {
        id: '1984',
        cover: 'media/covers/copertina_1984.jpg',
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        summary: '1984 è un romanzo distopico di fantapolitica, oltreché racconto morale, dello scrittore inglese George Orwell, pubblicato l\'8 giugno 1949. Ultimo lavoro da lui completato, e quinto romanzo, è incentrato sulle conseguenze del totalitarismo, sulla sorveglianza di massa, sulla repressione delle libertà e l\'irreggimentazione del popolo e dei comportamenti all\'interno della società. Orwell, un socialista libertario, modellò lo stato autoritario del romanzo sia sull\'Unione Sovietica di Stalin che sulla Germania nazista di Hitler. Ancora più in generale, il romanzo analizza il ruolo della verità e dei fatti dentro alle società, e degli astuti sistemi nei quali essi possano essere manipolati. <br> Opera celeberrima di Orwell, che ha reso popolare il termine "orwelliano" come aggettivo, e molti altre nozioni presenti nel romanzo, è una satira delle perversioni e degli abusi dei regimi dittatoriali.',
        category: 'romanzo',
        subgenre: 'fantascienza'
    },
    {
        id: 'Cime Tempestose',
        cover: 'media/covers/copertina_cime_tempestose.jpeg',
        title: 'Cime tempestose',
        author: 'Emily Bronte',
        year: 1847,
        summary: 'Cime tempestose (Wuthering Heights) è l\'unico romanzo di Emily Brontë, scritto fra l\'ottobre 1845 e il giugno 1846. Venne pubblicato per la prima volta nel 1847, sotto lo pseudonimo di Ellis Bell, mentre una seconda edizione postuma fu curata da sua sorella Charlotte nel 1850.<br>Il titolo viene dal nome di una delle tre principali ambientazioni del libro (Wuthering Heights, Gimmerton, Thrushcross Grange) il casale nella brughiera dello Yorkshire originariamente di proprietà degli Earnshaw, dove fu allevato Heathcliff e dove la storia si sviluppa.',
        category: 'romanzo',
        subgenre: 'rosa'
    }
];

function generateCatalog(filteredBooks = books) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = ''; // Clear existing books
    filteredBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.innerHTML = `
            <img src="${book.cover}" alt="Copertina del libro ${book.id}">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <button class="btn" onclick="openPopup('${book.id}')">Dettagli</button>
        `;
        catalog.appendChild(bookElement);
    });
}

function generatePopups() {
    const popups = document.getElementById('popups');
    popups.innerHTML = ''; // Clear existing popups
    books.forEach(book => {
        const popupElement = document.createElement('div');
        popupElement.id = book.id;
        popupElement.className = 'popup';
        popupElement.innerHTML = `
            <div class="popup-content">
                <span class="close" onclick="closePopup('${book.id}')">&times;</span>
                <div class="book_popup">
                    <img src="${book.cover}" alt="Copertina del libro ${book.id}">
                    <div class="book_popup_content">
                        <h3><strong>${book.title}</strong></h3>
                        <br>
                        <p><strong>Autore:</strong> ${book.author}</p>
                        <br>
                        <p><strong>Anno di Pubblicazione:</strong> ${book.year}</p>
                        <br>
                        <p><strong>Trama:</strong> ${book.summary}</p>
                        <br>
                        <p><strong>Categoria:</strong> ${book.category}</p>
                        <p><strong>Sottocategoria:</strong> ${book.subgenre}</p>
                    </div>
                </div>
                
                
            </div>
        `;
        popups.appendChild(popupElement);
    });
}

function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

function filterBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filterBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchInput) ||
        book.author.toLowerCase().includes(searchInput) ||
        book.category.toLowerCase().includes(searchInput) ||
        book.subgenre.toLowerCase().includes(searchInput)
    );
    generateCatalog(filteredBooks);
}

document.addEventListener('DOMContentLoaded', () => {
    generateCatalog();
    generatePopups();
})