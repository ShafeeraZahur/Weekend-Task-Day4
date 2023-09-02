//JSON iteration using for in loop
var books = [
    {
        title: "Lord of the Rings",
        year: 1994,
        pages: 3000
    },
    {
        title: "1984",
        year: 1984,
        pages: 2000
    },
    {
        title: "Art of war",
        year: 2000,
        pages: 5000
    }
 ]
 
 for(var key in books.jsonData) {
    for (var key1 in books.jsonData[key]) {
        console.log(books.jsonData[key][key1])
    }
 }

 //JSON iteration using for  loop

var books = [
    {
        title: "Lord of the Rings",
        year: 1994,
        pages: 3000
    },
    {
        title: "1984",
        year: 1984,
        pages: 2000
    },
    {
        title: "Art of war",
        year: 2000,
        pages: 5000
    }
 ]
 for (var i=0; i < books.length; i++) {
    console.log(books[i])
 }

 //JSON iteration using for each loop

 var books = [
    {
        title: "Lord of the Rings",
        year: 1994,
        pages: 3000
    },
    {
        title: "1984",
        year: 1984,
        pages: 2000
    },
    {
        title: "Art of war",
        year: 2000,
        pages: 5000
    }
 ]
 books.forEach(obj=>{
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key} ${value}`);
    });
 })
 
 
