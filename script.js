function toggleSection(id) {
    const el = document.getElementById(id);
    el.classList.toggle("show");
  }
  
  function addItem(listId) {
    const value = prompt("Yeni məlumat daxil et:");
    if (value) {
      const li = document.createElement("li");
      li.textContent = value;
      document.getElementById(listId).appendChild(li);
    }
  }