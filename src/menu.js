export default function menu(){
    const container = document.getElementById('content');
    const restaurant = document.getElementById('restaurant');
    if(restaurant){
     container.removeChild(restaurant)
    }
    const mainEle = document.createElement('main');
    mainEle.setAttribute('id','restaurant')
    const h1Ele = document.createElement('h1');
    h1Ele.innerHTML = 'Menu';

    const h2Ele = document.createElement('h1');
    h2Ele.innerHTML = 'Beverages';
    const beverageDiv = document.createElement('div');
    const honeyTea = document.createElement('h4');
    honeyTea.innerHTML = 'Honey Tea';
    const honeyPara = document.createElement('p');
    honeyPara.textContent = 'A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!';
    const price = document.createElement('h5');
    price.innerHTML = '$2';
    beverageDiv.appendChild(honeyTea);
    beverageDiv.appendChild(honeyPara);
    beverageDiv.appendChild(price);
    mainEle.appendChild(h1Ele);
    mainEle.appendChild(h2Ele);
    mainEle.appendChild(beverageDiv);
    container.appendChild(mainEle);
}