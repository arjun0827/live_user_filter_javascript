const userList = document.querySelector('.user-list');
const input = document.getElementById('filter');

input.focus();

const userData = [
    {
        img: '/img/Aigars-Silkalns-127x127.jpg',
        name: 'Ashneer',
        location: 'India'
    },
    {
        img: '/img/front-page-team-1.jpg',
        name: 'Alex',
        location: 'Italy'
    },
    {
        img: '/img/front-page-team-2.jpg',
        name: 'Benjamin',
        location: 'America'
    },
    {
        img: '/img/hombre-joven-cara-alegre-estudiante-127x127.jpg',
        name: 'Kevin',
        location: 'Australia'
    },
    {
        img: '/img/mike-muller-127x127.jpg',
        name: 'Bruce Wayne',
        location: 'Gotham',
    },
    {
        img: '/img/Aigars-Silkalns-127x127.jpg',
        name: 'Ashneer',
        location: 'India'
    },
    {
        img: '/img/front-page-team-1.jpg',
        name: 'Alex',
        location: 'Italy'
    },
    {
        img: '/img/front-page-team-2.jpg',
        name: 'Benjamin',
        location: 'America'
    },
    {
        img: '/img/hombre-joven-cara-alegre-estudiante-127x127.jpg',
        name: 'Kevin',
        location: 'Australia'
    },
    {
        img: '/img/mike-muller-127x127.jpg',
        name: 'Bruce Wayne',
        location: 'Gotham',
    }

]


const filterList = (inputValue = '', data = []) => {
    return data.filter(user => user.name.toLowerCase().startsWith(`${inputValue.toLowerCase()}`) || user.location.toLowerCase().startsWith(`${inputValue.toLowerCase()}`))
}

const renderList = (list = []) => {
    userList.innerHTML = list.map(item => `
    <li>
    <img src="${item.img}" alt="..">
    <div class="user-info">
        <h4>${item.name}</h4>
    <p>${item.location}</p>
    </div>
    </li>
    `).join('');
}

input.addEventListener('input', e => {
    console.log(e.target.value);
    const list = filterList(e.target.value, userData);
    renderList(list);
})

renderList(userData);

// console.log(listData);
// listData.forEach(user => {
//     userList.innerHTML += `
    // <li>
    // <img src="${user.img}" alt="..">
    // <div class="user-info">
    //     <h4>${user.name}</h4>
    // <p>${user.location}</p>
    // </div>
    // </li>`
// })

// function filterHandler(searchItem){

//     userData.forEach(eachItem =>{
//         if(eachItem.innerText.toLowerCase().includes(searchItem.toLowerCase())){
//             eachItem.classList.add('hide');
//         }
//         else{
//             eachItem.classList.remove('hide');
//         }
//     })
// }
