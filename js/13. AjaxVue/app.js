var app = new Vue({
    el: '#app',
    data: {
        persons: [],
        loading: false
    },
    methods: {
        loadPersons() {
            this.loading = true;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    axios
                        .get('http://localhost:3000/persons')
                        .then(response => (this.persons = response.data))
                    this.loading = false;

                }, 2000);
            });
        }
    }
})
