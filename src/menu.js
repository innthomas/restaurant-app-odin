export default function menu(){
    const container = document.getElementById('content');
    const para = document.createElement('p');
    para.innerHTML = 'welcome to Menu Page';
    container.appendChild(para);
}