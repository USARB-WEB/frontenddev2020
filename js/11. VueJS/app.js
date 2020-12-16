var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue! I am a front end Developer'
    }
})

var app = new Vue({
    el: '#counter',
    data: {
        number: 3
    },
    methods: {
        increment(){
            this.number++;
        },
        decrement(){
            this.number--;
        }
    }
})

var app = new Vue({
    el: '#calculator',
    data: {
        x: 0,
        y: 0
    },
    computed: {
        sum(){
            return Number(this.x) + Number(this.y);
        }
    }
})

var app = new Vue({
    el: '#validation',
    data: {
        text: ""
    },
    watch: {
        text(){
            if(this.text.length > 7){
                this.text = "error";
            }
        }
    }
})


var app = new Vue({
    el: '#calculatorAll',
    data: {
        x: 0,
        y: 0
    },
    computed: {
        sum(){
            return Number(this.x) + Number(this.y);
        },
        difference(){
            return Number(this.x) - Number(this.y);
        },
        multiply(){
            return Number(this.x) * Number(this.y);
        },
        devide(){
            if(Number(this.y) === 0){
                return "Error. Dividing by zero";
            }
            return Number(this.x) / Number(this.y);
        }
    }
})


var app = new Vue({
    el: '#todo',
    data: {
        todoList: [],
        newTodo: ""
    },
    methods: {
        addTodo(){
            this.todoList.push(this.newTodo);
            this.newTodo = "";
        },
        deleteItem(index){
            this.todoList.splice(index, 1);
        }
    }
})