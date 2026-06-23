const productDetails = {
    inox: {
        title: 'Panela de aço inox',
        text: 'Excelente para cozidos, caldos e receitas que exigem resistência. Aço inox é fácil de limpar e mantém o sabor natural dos alimentos.'
    },
    antiaderente: {
        title: 'Panela antiaderente',
        text: 'Projetada para receitas leves e frituras sem grudar. Ideal para ovos, legumes e pratos que precisam de limpeza rápida.'
    },
    ceramica: {
        title: 'Caçarola de cerâmica',
        text: 'Oferece ótima distribuição de calor e acabamento elegante. Perfeita para ensopados, arrozes e pratos que vão direto à mesa.'
    }
};

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeModal = document.getElementById('closeModal');
const themeToggle = document.getElementById('themeToggle');

function openModal(productKey) {
    const product = productDetails[productKey];
    if (!product) return;
    modalTitle.textContent = product.title;
    modalText.textContent = product.text;
    modal.classList.remove('hidden');
}

function closeModalWindow() {
    modal.classList.add('hidden');
}

document.querySelectorAll('.details-button').forEach(button => {
    button.addEventListener('click', () => {
        openModal(button.dataset.product);
    });
});

closeModal.addEventListener('click', closeModalWindow);
modal.addEventListener('click', event => {
    if (event.target === modal) {
        closeModalWindow();
    }
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const active = document.body.classList.contains('dark');
    themeToggle.textContent = active ? 'Modo Claro' : 'Modo Escuro';
});
