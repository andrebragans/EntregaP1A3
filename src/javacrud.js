document.addEventListener('DOMContentLoaded', function() {
    const gameForm = document.getElementById('game-form');
    const gameList = document.getElementById('games');
  
    gameForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const title = document.getElementById('game-title').value;
      const platform = document.getElementById('game-platform').value;
      const rating = document.getElementById('game-rating').value;
  
      const statusCheckboxes = document.querySelectorAll('option[type=checkbox]:checked');
      const statuses = [];
      statusCheckboxes.forEach(checkbox => statuses.push(checkbox.value));
  
      if (title && platform) {
        addGame(title, platform, statuses, rating);
        gameForm.reset();
      }
    });
  
    function addGame(title, platform, statuses, rating) {
      const li = document.createElement('li');
      const titleElement = document.createElement('span');
      titleElement.innerHTML = `<strong>${title}</strong> (${platform}) - Status: ${statuses.join(', ')}, Avaliacao: ${rating} estrelas`;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Excluir';
      deleteButton.className = 'delete-btn';
      const editButton = document.createElement('button');
      editButton.textContent = 'Editar';
      editButton.className = 'edit-btn';
  
      li.appendChild(titleElement);
      li.appendChild(deleteButton);
      li.appendChild(editButton);
      gameList.appendChild(li);
  
      deleteButton.addEventListener('click', function() {
        gameList.removeChild(li);
      });
  
      editButton.addEventListener('click', function() {
        const newTitle = prompt('Novo titulo:', title);
        const newPlatform = prompt('Nova plataforma:', platform);
        const newStatusCheckboxes = prompt('Novos status (separe por virgula):', statuses.join(', '));
        const newRating = prompt('Nova avaliacao (1-10 estrelas):', rating);
  
        if (newTitle && newPlatform) {
          title = newTitle;
          platform = newPlatform;
          statuses = newStatusCheckboxes.split(',').map(status => status.trim());
          rating = newRating;
          titleElement.innerHTML = `<strong>${title}</strong> (${platform}) - Status: ${statuses.join(', ')}, Avaliacao: ${rating} estrelas`;
        }
      });
    }
  });
  
  
  
  
  