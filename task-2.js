function LibraryBook($title = 'неизвестно', $year = 'неизвестно', $author = 'неизвестно') {
    var title = $title;
    var year = $year;
    var author = $author;
    var readerName = null;
    var readerData = null;

    function giveTheBook (client, data = new Date()) {
        readerName = title;
        readerData = data;
    }

    this.getBookInfo = function () {
        var outOfStock = 'выдана на руки';
        var inStock = 'есть в наличии';
        if (readerData) {
            console.log(`${title}, ${year}, ${author}: ${outOfStock}`);
        } else {
            console.log(`${title}, ${year}, ${author}: ${inStock}`);
        }
    };

    this.getTheBook = function (client, data ) {
        if (readerName ) {
            this.getBookInfo();
            return null;
        } else {
            giveTheBook (client, data);
            return {
                title: title,
                year: year,
                author: author
            }
        }
    };

    this.returnBook = function () {
        readerName = null;
        readerData = null;
    }
}

var books = [];
books[0] = new LibraryBook ("Классно быть богом", "2009", "Тибор Фишер");
books[1] = new LibraryBook ("Письма Уильяма Берроуза", "2017", "Оливер Харрис");

// books[0].getBookInfo();
// books[0].getTheBook( "Косьяненко Ксения", new Date(2019, 1, 28 ));
// books[0].getBookInfo();
// books[0].returnBook();
// books[0].getBookInfo();

// books[1].getBookInfo();
// books[1].getTheBook( "Косьяненко Ксения", new Date(2019, 1, 29 ));
// books[1].getBookInfo();
// books[1].returnBook();
// books[1].getBookInfo();