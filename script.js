const c =(el)=> document.querySelector(el);
const cs = (el)=document.querySelectorAll(el);


pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').clonedNode(true);

    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    c('.pizza-area').append(pizzaItem);

});