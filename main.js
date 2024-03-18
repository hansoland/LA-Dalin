const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

const data = [
    { name: "John Doe", image: "profile.jpg" },
    { name: "Jane Smith", image: "acleda.jpg" },
    { name: "Alice Johnson", image: "profile.jpg" },
    { name: "Bob Brown", image: "profile.jpg" },
    { name: "Charlie Davis", image: "profile.jpg" },
    { name: "David Wilson", image: "profile.jpg" }
];

searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm));
    displayResults(filteredData);
});

document.addEventListener('click', function(e) {
    if (!searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
    }
});

function displayResults(results) {
    if (results.length === 0) {
        searchResults.style.display = 'none';
        return;
    }

    searchResults.innerHTML = '';
    results.forEach(result => {
        const div = document.createElement('div');
        div.classList.add('result-item');
        div.innerHTML = `
        <div class="d-flex align-items-center p-2 position-relative">
          <img src="/image/${result.image}" class="rounded-circle " width="30px" alt="${result.name}">
          <div class="ms-2">
            <p class="m-0 " >${result.name}</p>
            <p class="m-0 fs-6 " ><i class="fa-solid fa-circle"></i> 2 new</p>
          </div>
        </div>
      `;
        div.addEventListener('click', function() {
            searchInput.value = result.name;
            searchResults.style.display = 'none';
        });
        searchResults.appendChild(div);
    });

    searchResults.style.display = 'block';
}



// -------------------------------------------------------------------------

const messenger = document.getElementById('chart');
const layout = document.getElementById('messenger');

layout.style.display = 'none';

messenger.addEventListener('click', function() {
    layout.style.display = layout.style.display === 'none' ? 'flex' : 'none';
});

const notication = document.getElementById('notication-icon');
const notications = document.getElementById('notication');

notications.style.display = 'none';

notication.addEventListener('click', function() {
    notications.style.display = notications.style.display === 'none' ? 'flex' : 'none';
});