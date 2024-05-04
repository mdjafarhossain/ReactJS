
const products = [
    { name: "Laptop", category: "Electronics", price: 1000, stock: 4 },
    { name: "Shirt", category: "Apparel", price: 20, stock: 10 },
    { name: "Coffee Maker", category: "Appliances", price: 100, stock: 3 },
    { name: "Book", category: "Stationery", price: 150, stock: 20 },
    { name: "pen", category: "Stationery", price: 15, stock: 100 }
    ];

    //Task-1

    const result=products.filter((prod)=>prod.category==='Electronics');

    console.log(result);

        //Task-2
    const result2=products.filter(function(mob){
       // return (mob.price>50 && mob.price<150)
       if (mob.price>50 && mob.price<150)
                return true;
        
    });

    console.log(result2);
//Task-3 to cehck stock availability
    function outofStock(name, quantity){
        var st=products.filter( function(prod){
            if (prod.name==name && prod.stock>quantity){
                return true;
            }
        });  
        
        return st;
    }
    //console.log(outofStock('Laptop',2000));
       console.log(outofStock('Laptop',2).length==0?'Out of Stock':'Instock');
       console.log(outofStock('Laptop',2000).length==0?'Out of Stock':'Instock');