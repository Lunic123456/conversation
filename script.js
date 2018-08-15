function btn(){
    var b = document.getElementById("name").value;
    var a = document.getElementById("msg").value;
    var msg = document.createElement("p");
    var t = document.createTextNode(b + " : " + a);
    msg.appendChild(t);
    document.body.appendChild(msg);

    const messages = ["Ok", "Ii bun", "Da"];
    const randomIndex = Math.round(Math.random()*messages.length);
    var mess = messages[randomIndex];
    if(a == "pa"){
      mess = "Pa, ne mai auzim";
    }
    if(a == "buna"){
      mess = "Buna, ce faci?";
    }
    if(a == "bine"){
      mess = "Bun, si ce mai zici?";
    }
    if(a == "nimic"){
      mess = "Ok, Pa";
    }
    var cs = "Computer";
    var ta = document.createTextNode(cs + " : " + mess);
    var both = document.createElement("p");
    both.appendChild(ta);
    document.body.appendChild(both);
    msg.className = "t";
    both.className = "b";
}
