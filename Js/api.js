function searchMovie() {
  const apiKey = '75c54705'; // Substitua pelo seu API key da OMDB

  const searchInput = document.getElementById('searchInput').value;
  const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchInput}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const floatingWindow = document.getElementById('floatingWindow');
      const content = document.getElementById('content');

      if (data.Response === 'True') {
        content.innerHTML = `
          <h2>${data.Title}</h2>
          <p>Ano: ${data.Year}</p>
          <p>Nota: ${data.imdbRating}</p>
          <img src="${data.Poster}" alt="${data.Title}">
        `;
      } else {
        content.innerHTML = '<p>Filme não encontrado.</p>';
      }

      floatingWindow.style.display = 'block';
    })
    .catch(error => {
      console.error('Erro ao buscar filme:', error);
    });
}

function closeFloatingWindow() {
  const floatingWindow = document.getElementById('floatingWindow');
  floatingWindow.style.display = 'none';
}