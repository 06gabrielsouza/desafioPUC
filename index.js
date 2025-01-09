const searchInput = document.getElementById('searchInput');
const photoItems = document.querySelectorAll('.photo-item');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  photoItems.forEach(item => {
    const title = item.getAttribute('data-title').toLowerCase();
    if (title.includes(searchTerm)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});
