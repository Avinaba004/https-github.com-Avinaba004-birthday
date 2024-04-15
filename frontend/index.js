

class Users{
    constructor(first,second){
        this.first=first;
        this.second=second;
    }

    add(){
        let sum=this.first+this.second;
        return sum;
    }
    sub(){
        let sub=this.first-this.second;
        return sub;
    }
    
    
}
Users.prototype={
    mul:function(){
        let mul=this.first*this.second;
        return mul;
            },
              div:function(){
                let div=this.second/this.first;
                return div;
            }
}
var user=new Users(6,4);
var adds=user.add();
var subs=user.sub();
var muls=user.mul();
var divs=user.div();

console.log(`The addition is ${adds}`);
console.log(`The subtraction is ${subs}`);
console.log(`The multiplication is ${muls}`);
console.log(`The division is ${divs}`);
