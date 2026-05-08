function showInfo(card) {
  document.querySelectorAll('.masonry-item').forEach(item => {
    item.classList.remove('selected');
  });

  card.classList.add('selected');

  const title = card.dataset.title || "Untitled";
  const year = card.dataset.year || "";
  const desc = card.dataset.desc || "No description available.";

  document.getElementById('info-panel').innerHTML = `
    <h3>${title}</h3>
    <div class="year">${year}</div>
    <p>${desc}</p>
  `;
}
