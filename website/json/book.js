const books = [
    {
        id: '1984',
        cover: 'media/covers/1984.jpg',
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        summary: '1984 is a dystopian novel by English writer George Orwell, published on 8 June 1949. His last work, and fifth novel, focuses on the consequences of totalitarianism, mass surveillance, the repression of freedoms and the regimentation of people and behavior within society. Orwell, a libertarian socialist, modeled the authoritarian state of the novel on both Stalin’s Soviet Union and Hitler’s Nazi Germany. Even more generally, the novel analyzes the role of truth and facts within societies, and the cunning systems in which they can be manipulated. <br> Orwell’s famous work, which popularized the term "orwellian" as an adjective, and many other notions in the novel, is a satire of the perversions and abuses of dictatorial regimes.',
        category: 'novel',
        subgenre: 'fantasy'
    },
    {
        id: 'Wuthering Heights',
        cover: 'media/covers/wuthering_heights.jpg',
        title: 'Wuthering Heights',
        author: 'Emily Bronte',
        year: 1847,
        summary: 'Wuthering Heights is the only novel by Emily Brontë, written between October 1845 and June 1846. It was first published in 1847, under the pseudonym Ellis Bell, while a second posthumous edition was edited by his sister Charlotte in 1850. <br>The title comes from the name of one of the three main settings of the book (Wuthering Heights, Gimmerton, Thrushcross Grange) the farmhouse on the Yorkshire moor originally owned by the Earnshaws, where Heathcliff was raised and where the story develops.',
        category: 'novel',
        subgenre: 'pink'
    },
    {
        id: 'The Great Gatsby',
        cover: 'media/covers/The_Great_Gatsby.jpg',
        title: 'Il grande Gatsby',
        author: 'Francis Scott Fitzgerald',
        year: 1925,
        summary: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.<br>The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island\'s North Shore in 1922. Following a move to the French Riviera, Fitzgerald completed a rough draft of the novel in 1924. He submitted it to editor Maxwell Perkins, who persuaded Fitzgerald to revise the work over the following winter. After making revisions, Fitzgerald was satisfied with the text, but remained ambivalent about the book\'s title and considered several alternatives. Painter Francis Cugat\'s dust jacket art, named Celestial Eyes, greatly impressed Fitzgerald, and he incorporated its imagery into the novel.',
        category: 'tragedy',
        subgenre: ''
    },
    {
        id: 'The Lord of the Rings',
        cover: 'media/covers/lord_of_the_rings.jpg',
        title: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
        year: 1954,
        summary: 'The title refers to the story\'s main antagonist, Sauron, the Dark Lord who in an earlier age created the One Ring to rule the other Rings of Power given to Men, Dwarves, and Elves, in his campaign to conquer all of Middle-earth. From homely beginnings in the Shire, a hobbit land reminiscent of the English countryside, the story ranges across Middle-earth, following the quest to destroy the One Ring, seen mainly through the eyes of the hobbits Frodo, Sam, Merry, and Pippin. Aiding Frodo are the Wizard Gandalf, the Men Aragorn and Boromir, the Elf Legolas, and the Dwarf Gimli, who unite in order to rally the Free Peoples of Middle-earth against Sauron\'s armies and give Frodo a chance to destroy the One Ring in the fire of Mount Doom.',
        category: 'novel',
        subgenre: 'fantasy adventure'
    },
    {
        id: 'Moby Dick',
        cover: 'media/covers/moby_dick.jpg',
        title: 'Moby Dick',
        author: 'Herman Melville',
        year: 1851,
        summary: 'The story follows the voyage of the whaler Pequod, commanded by Captain Ahab, to hunt whales and sperm whales, and in particular the enormous white whale that gives the title to the novel, towards which Ahab feeds a boundless thirst for revenge.<br>In Italy it was also released with the titles Moby Dick or the whale and Moby Dick or the white whale.',
        category: 'novel',
        subgenre: 'adventure'
    },
    {
        id: 'Harry Potter 1',
        cover: 'media/covers/hp_1.jpg',
        title: 'Harry Potter and the Philosopher\'s Stone',
        author: 'J. K. Rowling',
        year: 1997,
        summary: 'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling\'s debut novel follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school. With the help of his friends, Ron Weasley and Hermione Granger, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry\'s parents but failed to kill Harry when he was just 15 months old.',
        category: 'fantasy',
        subgenre: ''
    },
    {
        id: 'Harry Potter 2',
        cover: 'media/covers/hp_2.jpg',
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J. K. Rowling',
        year: 1998,
        summary: 'Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry\'s second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school\'s corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.',
        category: 'fantasy',
        subgenre: ''
    },
    {
        id: 'Harry Potter 3',
        cover: 'media/covers/hp_3.jpg',
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'J. K. Rowling',
        year: 1999,
        summary: 'Harry Potter and the Prisoner of Azkaban is a fantasy novel written by British author J. K. Rowling and is the third in the Harry Potter series. The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort\'s old allies.',
        category: 'fantasy',
        subgenre: ''
    },
    {
        id: 'Harry Potter 4',
        cover: 'media/covers/hp_4.jpg',
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J. K. Rowling',
        year: 1999,
        summary: 'Harry Potter and the Goblet of Fire is a fantasy novel written by British author J. K. Rowling and the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry\'s name into the Triwizard Tournament, in which he is forced to compete.',
        category: 'fantasy',
        subgenre: ''
    },
    {
        id: 'Harry Potter 5',
        cover: 'media/covers/hp_5.jpg',
        title: 'Harry Potter and the Order of the Phoenix',
        author: 'J. K. Rowling',
        year: 1999,
        summary: 'arry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series. It follows Harry Potter\'s struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic.',
        category: 'fantasy',
        subgenre: ''
    }
];

function generateCatalog(filteredBooks = books) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = ''; // Clear existing books
    filteredBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.innerHTML = `
            <img src="${book.cover}" alt="Cover of the book ${book.id}">
            <br><br>
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <button class="btn" onclick="openPopup('${book.id}')">Details</button>
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
                    <img src="${book.cover}" alt="Cover of the book ${book.id}">
                    <div class="book_popup_content">
                        <h3><strong>${book.title}</strong></h3>
                        <br>
                        <p><strong>Author:</strong> ${book.author}</p>
                        <br>
                        <p><strong>Year of publication:</strong> ${book.year}</p>
                        <br>
                        <p><strong>Plot:</strong> ${book.summary}</p>
                        <br>
                        <p><strong>Category:</strong> ${book.category}</p>
                        <p><strong>Subcategory:</strong> ${book.subgenre}</p>
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