export default function home(){
    console.log('welcome to home');
    const container = document.getElementById('content');
    const para = document.createElement('p');
    para.innerHTML = 'hello home';
    container.appendChild(para);
}