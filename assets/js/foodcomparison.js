document.addEventListener('DOMContentLoaded', () => {
  // Food dataset matching the image wireframe
  const foodItems = [
    { food: 'Chicken Rice', price: '$5.30', area: 'Clementi', type: 'Asian', rating: '4.4' },
    { food: 'Cheeseburger', price: '$6.30', area: 'Clementi', type: 'Western', rating: '4.5' },
    { food: 'Laksa', price: '$7.60', area: 'Bugis', type: 'Asian', rating: '4.6' },
    { food: 'Chicken Chop', price: '$7.80', area: 'Bugis', type: 'Western', rating: '4.4' },
    { food: 'Iced Milo', price: '$2.30', area: 'Clementi', type: 'Drinks', rating: '4.3' },
    { food: 'Nasi Lemak', price: '$5.60', area: 'Chinatown', type: 'Asian', rating: '4.3' },
    { food: 'Waffles', price: '$4.80', area: 'Bugis', type: 'Desserts', rating: '4.3' }
  ];

  // Element reference
  const tableBody = document.getElementById('tableBody');

  // Render function to populate table rows
  function renderTable(data) {
    tableBody.innerHTML = ''; // Clear existing content

    data.forEach(item => {
      const row = document.createElement('tr');
      
      row.innerHTML = `
        <td class="fw-bold">${item.food}</td>
        <td>${item.price}</td>
        <td>${item.area}</td>
        <td>${item.type}</td>
        <td>${item.rating}</td>
      `;
      
      tableBody.appendChild(row);
    });
  }

  // Initial load
  renderTable(foodItems);
});