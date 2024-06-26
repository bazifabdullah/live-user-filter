const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = [];

getData()

filter.addEventListener('input', (e) => {
    filterdata(e.target.value);
})

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=100')

    const { results } = await res.json()

    // Clear Results
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li');

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    });
}

function filterdata(searchterm) {
    listItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(searchterm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}