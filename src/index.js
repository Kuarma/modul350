  const form = document.getElementById('new-card-form');
  const cards = document.getElementById('cards');

  const createCard = (question, answer) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card-question">${question}</div>
      <div class="card-answer">${answer}</div>
    `;
    return card;
  };

  const addCard = card => {
    cards.appendChild(card);
  };

  const clearForm = () => {
    form.reset();
  };

  form.addEventListener('submit', event => {
    event.preventDefault();
    const question = document.getElementById('question-input').value;
    const answer = document.getElementById('answer-input').value;
    const card = createCard(question, answer);
    addCard(card);
    clearForm();
  });

    const existingCards = document.querySelectorAll('.card');

    existingCards.forEach(card => {
      card.addEventListener('click', event => {
      const question = prompt('Enter the new question:');
      const answer = prompt('Enter the new answer:');
      const deleteButton = card.querySelector('.delete-button');
      editCard(card, question, answer);
  });
});
    deleteButton.addEventListener('click', event => {
      if (confirm('Are you sure you want to delete this card?')) {
      deleteCard(card);

    existingCards.forEach(card => {
      card.addEventListener('click', event => {
      if (confirm('Are you sure you want to delete this card?')) {
      deleteCard(card);
    }
  });
});