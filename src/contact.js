export default function contact(){
    const container = document.getElementById('content');
    const restaurant = document.getElementById('restaurant');
    if(restaurant){
     container.removeChild(restaurant)
    }
    const mainEle = document.createElement('main');
    mainEle.setAttribute('id','restaurant')
    const h1Ele = document.createElement('h1');
    h1Ele.innerHTML = 'Contact Us';
    
    const contactDiv = document.createElement('div');
    const h3Ele = document.createElement('h3');
    const para1 = document.createElement('p');
    const para2= document.createElement('p');
    const para3 = document.createElement('p');
    h3Ele.textContent = 'Inn Thomas';
    para1.textContent = 'chef';
    para2.textContent = '555-555-5554';
    para3.textContent = 'totallyRealEmail@notFake.com';
    contactDiv.appendChild(h3Ele);
    contactDiv.appendChild(para1);
    contactDiv.appendChild(para2);
    contactDiv.appendChild(para3);
    mainEle.appendChild(h1Ele);
    mainEle.appendChild(contactDiv);
    container.appendChild(mainEle);
}