document.addEventListener('DOMContentLoaded', () => {
    const addProjectBtn = document.getElementById('addProjectBtn');
    const projectsGrid = document.getElementById('projectsGrid');
    const projectModal = document.getElementById('projectModal');
    const closeModal = document.getElementById('closeModal');
    const projectForm = document.getElementById('projectForm');

    const deleteModal = document.getElementById("deleteModal");
    const deleteMessage = document.getElementById("deleteMessage");
    const confirmDeleteBtn = document.getElementById("confirmDelete");
    const cancelDeleteBtn = document.getElementById("cancelDelete");

    let projectToDelete = null; // Store reference to the project to be deleted

    // Open Modal
    addProjectBtn.addEventListener('click', () => {
        projectModal.style.display = 'flex'; // Use flex to enable centering
    });

    // Close Modal
    closeModal.addEventListener('click', () => {
        projectModal.style.display = 'none'; // Hide the modal
    });

    // Add Project Card
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get values from the form
        const projectName = document.getElementById('projectName').value;
        const translatedVersion = document.getElementById('translatedVersion').value;
        const language = document.getElementById('language').value;

        // Create a new project card
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <button class="delete-btn">&times;</button>
            <p class="project-title">${projectName}</p>
            <p class="project-lang">${language}</p>
            <button class="project-btn">Next</button>
        `;

        // Add the card to the grid
        projectsGrid.appendChild(projectCard);

        // Close the modal
        projectModal.style.display = 'none';

        // Clear the form
        projectForm.reset();

        // Add delete functionality to the new card
        const deleteBtn = projectCard.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            showDeleteModal(projectCard, projectName);
        });
    });

    // Handle delete for existing cards
    projectsGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const card = event.target.closest('.project-card');
            const projectName = card.querySelector(".project-title")?.textContent || "this project";
            if (card) showDeleteModal(card, projectName);
        }
    });

    // Function to show delete confirmation modal
    function showDeleteModal(card, projectName) {
        projectToDelete = card;
        deleteMessage.textContent = `Are you sure you want to delete "${projectName}"?`;
        deleteModal.style.display = "flex";
    }

    // Confirm delete
    confirmDeleteBtn.addEventListener("click", () => {
        if (projectToDelete) {
            projectToDelete.remove();
            projectToDelete = null;
        }
        deleteModal.style.display = "none";
    });

    // Cancel delete
    cancelDeleteBtn.addEventListener("click", () => {
        deleteModal.style.display = "none";
        projectToDelete = null;
    });

    // Close modal when clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === deleteModal) {
            deleteModal.style.display = "none";
        }
    });
});
