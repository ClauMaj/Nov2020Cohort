
// class Button{
//     constructor(data1,data2,data3){
//         this.data1 = data1;
//         this.data2 = data2;
//         this.data3 = data3;

//     }
//     method1(){
//         //dssfsdfs
//     }

//     method2 = () =>{
//         //dasdad
//     }

//     sum(){
//         return this.data1+this.data2+this.data3;
//     }
// }

// let button = new Button(data1,data2,data3);


class Button{
    constructor(node, color, text) {
        this.state = {
            node: node,
            color: color,
            text: text,
            count: 0
        }
    }

    createButton(){
        let button = document.createElement('button');
        button.textContent = `hello ${this.state.text} ${this.state.count}`;
        button.style.backgroundColor = this.state.color;
        button.addEventListener('click',(e) => {
            this.state.count++;
        });
        this.state.node.appendChild(button);
    }
    render(){
        this.createButton();
    }
}