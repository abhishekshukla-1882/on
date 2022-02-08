var array  = []
function addproduct(){
    id =  document.getElementById('productId').value
    namee = document.getElementById('productName').value
    price = document.getElementById('productPrice').value
    auth(id,namee,price)
    display()
}
function display(){
    Html = "<table><tr><th> ProductId</th><th>name</th><th>price</th></tr>"
    Html += "<tr><td> id1 </tr></td> "+'<tr><td> id2 </tr></td> '+'<tr><td> id2 </tr></td> '
    document.getElementById('pro').innerHTML= Html
}
function auth(id,pname,price){
    alert("hello")
    for(var i = 0; i<array.length ;i++ ){
        if(array[i].pid == id){
            alert("Product Id exist")
            return
        }
    }
    obj = {}
    obj['pid'] = id
    obj['pname'] = pname
    obj['price'] = price
    alert('obj')
    array.push(obj)
    alert('new')

}
function display(){
    console.log("in dis");
    teext = document.getElementById('table')
    teext.innerHTML = "<tr>\
    <td> ProductId</td>\
    <td>name</td>\
    <td>price</td>\
    <td>Action</td>\
    </tr>";
    for(var i = 0; i<array.length; i++){
        teext.innerHTML +="<tr>\
        <td> "+ array[i].pid + "</td>\
        <td>"+ array[i].pname + "</td>\
        <td>" + array[i].price +"</td>\
         <td> <a href="+"#"+ "id=\"edit\"data-pid="+ array[i].pid + ">Edit</a>/<a href="+"#"+ "id=\"del\"data-pid="+ array[i].pid + ">Delete</a></td>\
        </tr>"
    }
}
function edit(){
    v = document.getElementById('edit').value
}