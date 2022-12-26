export default function home(){
    const container = document.getElementById('content');
    const restaurant = document.getElementById('restaurant');
    if(restaurant){
     container.removeChild(restaurant)
    }
    const mainEle = document.createElement('main');
    mainEle.setAttribute('id','restaurant')
    const h1Ele = document.createElement('h1');
    h1Ele.innerHTML = 'Idara\'s Kitchen';
    const para = document.createElement('p');
    para.innerHTML = "Idara's kitchen has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    const h3Ele = document.createElement('h3');
    h3Ele.innerHTML= 'Hours available:'
    const ulEle = document.createElement('ul');
    let listItem1 = document.createElement('li');
    let listItem2 = document.createElement('li');
    let listItem3 = document.createElement('li');
    let listItem4 = document.createElement('li');
    let listItem5 = document.createElement('li');
    let listItem6 = document.createElement('li');
    let listItem7 = document.createElement('li');
    listItem1.textContent = 'Sunday: 8am - 8pm';
    listItem2.textContent = 'Monday: 6am - 6pm';
    listItem3.textContent = 'Tuesday: 6am - 6pm';
    listItem4.textContent = 'Wednesday: 6am - 6pm';
    listItem5.textContent = 'Thursday: 6am - 10pm';
    listItem6.textContent = 'Friday: 6am - 10pm';
    listItem7.textContent = 'Saturday: 8am - 10pm';
    ulEle.appendChild(listItem1);
    ulEle.appendChild(listItem2);
    ulEle.appendChild(listItem3);
    ulEle.appendChild(listItem4);
    ulEle.appendChild(listItem5);
    ulEle.appendChild(listItem6);
    ulEle.appendChild(listItem7);

    let location = document.createElement('h3')
    let locationContent = document.createElement('p')
    location.innerHTML ='Location';
    locationContent.textContent = '123 Forest Drive, Forestville, Maine.'
    
    mainEle.appendChild(h1Ele);
    mainEle.appendChild(para);
    mainEle.appendChild(h3Ele);
    mainEle.appendChild(ulEle);
    mainEle.appendChild(location);
    mainEle.appendChild(locationContent);
    container.appendChild(mainEle);
}