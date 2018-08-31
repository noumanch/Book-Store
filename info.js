
var bookStore = new Vue({
        el: "#bookStore",
        data: {
            description: [],
            search: ""
        },
        created: function () {
            this.fetchData();
        },
        computed: {
            filtereddescription: function () {
                return this.description.filter((blog) => {
                    return blog.titulo.match(this.search);
                });
            }
        },
        methods: {
            fetchData: function () {
                fetch('https://api.myjson.com/bins/1h3vb3')
                    .then(function (respond) {
                        return respond.json();
                    })
                    .then(function (myJson) {
                        bookStore.description = myJson.books;
                    })
            }
        }

    });

