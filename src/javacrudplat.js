document.addEventListener("DOMContentLoaded", function () {
    const platformForm = document.getElementById("platform-form");
    const platformList = document.getElementById("platform-list");
  
    platformForm.addEventListener("submit", function (event) {
      event.preventDefault();
      addPlatform();
    });
  
    platformList.addEventListener("click", function (event) {
      const target = event.target;
  
      if (target.classList.contains("delete-button")) {
        deletePlatform(target.parentNode);
      } else if (target.classList.contains("edit-button")) {
        editPlatform(target.parentNode);
      }
    });
  
    function addPlatform() {
      const platformNameInput = document.getElementById("platform-name");
      const platformName = platformNameInput.value;
  
      if (platformName.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = platformName;
  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Excluir";
        deleteButton.className = "delete-button";
        listItem.appendChild(deleteButton);
  
        const editButton = document.createElement("button");
        editButton.textContent = "Editar";
        editButton.className = "edit-button";
        listItem.appendChild(editButton);
  
        platformList.appendChild(listItem);
  
        platformNameInput.value = "";
      }
    }
  
    function deletePlatform(platformItem) {
      platformList.removeChild(platformItem);
    }
  
    function editPlatform(platformItem) {
      const platformName = platformItem.firstChild.nodeValue;
      const newPlatformName = prompt("Editar nome da plataforma:", platformName);
  
      if (newPlatformName !== null) {
        platformItem.firstChild.nodeValue = newPlatformName;
      }
    }
  });
  