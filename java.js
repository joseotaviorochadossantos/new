document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const modalImage = document.getElementById('modalImage');
    const modalPrice = document.getElementById('modalPrice');
    const buyButton = document.getElementById('buyButton');
    const closeModal = document.getElementById('closeModal');
    const themeToggle = document.getElementById('themeToggle');

    function showModalMessage(title, text) {
        if (modalImage) modalImage.style.display = 'none';
        if (modalTitle) modalTitle.textContent = title;
        if (modalText) modalText.textContent = text;
        if (modalPrice) modalPrice.textContent = '';
        if (buyButton) buyButton.href = '#';
        if (modal) modal.classList.remove('hidden');
    }

    function closeModalWindow() {
        if (modal) modal.classList.add('hidden');
    }

    if (closeModal) closeModal.addEventListener('click', closeModalWindow);
    if (modal) modal.addEventListener('click', event => {
        if (event.target === modal) {
            closeModalWindow();
        }
    });

    if (themeToggle) themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const active = document.body.classList.contains('dark');
        themeToggle.textContent = active ? 'Modo Claro' : 'Modo Escuro';
    });

    // Form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos.');
                return;
            }
            // Aqui você pode enviar para um backend; por enquanto mostramos confirmação
            showModalMessage('Mensagem enviada', `Obrigado ${name}! Recebemos sua mensagem e responderemos em breve.`);
            contactForm.reset();
        });
    }
});
