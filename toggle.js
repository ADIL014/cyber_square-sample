  
    const btn = document.getElementById('toggleBtn');
    let isToggled = false;

    btn.addEventListener('click', () => {
      isToggled = !isToggled;

      if (isToggled) {
        btn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        btn.classList.add('bg-green-600', 'hover:bg-green-700');
        btn.textContent = 'Toggled On';
      } else {
        btn.classList.remove('bg-green-600', 'hover:bg-green-700');
        btn.classList.add('bg-blue-600', 'hover:bg-blue-700');
        btn.textContent = 'Toggle Me';
      }
    });
  