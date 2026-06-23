document.addEventListener('DOMContentLoaded', () => {
    const productDetails = {
        inox: {
            title: 'Panela de aço inox',
            text: 'Excelente para cozidos, caldos e receitas que exigem resistência. Aço inox é fácil de limpar e mantém o sabor natural dos alimentos.',
            image: 'https://images.unsplash.com/photo-1542444459-db1b9f8f9b5f?auto=format&fit=crop&w=1200&q=80',
            price: 'R$ 259,90'
        },
        antiaderente: {
            title: 'Panela antiaderente',
            text: 'Projetada para receitas leves e frituras sem grudar. Ideal para ovos, legumes e pratos que precisam de limpeza rápida.',
            image: 'https://images.unsplash.com/photo-1604908177522-7bde7b4d6f7d?auto=format&fit=crop&w=1200&q=80',
            price: 'R$ 179,90'
        },
        ceramica: {
            title: 'Caçarola de cerâmica',
            text: 'Oferece ótima distribuição de calor e acabamento elegante. Perfeita para ensopados, arrozes e pratos que vão direto à mesa.',
            image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
            price: 'R$ 329,90'
        }
    };

    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const modalImage = document.getElementById('modalImage');
    const modalPrice = document.getElementById('modalPrice');
    const buyButton = document.getElementById('buyButton');
    const closeModal = document.getElementById('closeModal');
    const themeToggle = document.getElementById('themeToggle');

    function openModal(productKey) {
        const product = productDetails[productKey];
        if (!product) return;
        if (!modal) {
            // fallback: se o modal não existe (por algum motivo), mostrar alerta com detalhes
            alert(`${product.title}\n\n${product.text}\n\nPreço: ${product.price}`);
            return;
        }

        if (modalImage) {
            modalImage.style.display = '';
            modalImage.src = product.image;
            modalImage.alt = product.title;
        }
        if (modalTitle) modalTitle.textContent = product.title;
        if (modalText) modalText.textContent = product.text;
        if (modalPrice) modalPrice.textContent = product.price;
        // Prepara link de contato/compra via email
        if (buyButton) {
            const subject = encodeURIComponent('Interesse: ' + product.title);
            const body = encodeURIComponent('Olá,%0D%0A%0D%0ATenho interesse na ' + product.title + ' (preço: ' + product.price + ').%0D%0APor favor, envie mais informações.%0D%0A%0D%0AObrigado.');
            buyButton.href = `mailto:contato@panelaspremium.com?subject=${subject}&body=${body}`;
            buyButton.setAttribute('target', '_blank');
        }

        modal.classList.remove('hidden');
    }

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

    // Prefer event delegation to ensure dynamically-added buttons also work
    document.body.addEventListener('click', (e) => {
        const btn = e.target.closest('.details-button');
        if (!btn) return;
        const key = btn.dataset.product;
        console.log('[DEBUG] details-button clicked:', key);
        openModal(key);
    });

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
