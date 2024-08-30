fetch('index.json')
    .then(response => response.json())
    .then(data => {
        const sidebar = document.querySelector('.sidebar');
        const container = document.querySelector('.content-container');

        // Create tabs for each category in data.catalog
        Object.keys(data.catalog).forEach(category => {
            const tab = document.createElement('div');
            tab.classList.add('tab');
            tab.innerText = category.charAt(0).toUpperCase() + category.slice(1);
            tab.dataset.category = category;
            sidebar.appendChild(tab);
        });

        // Function to display content for a selected category
        const displayContent = (category) => {
            container.innerHTML = ''; // Clear previous content
            data.catalog[category].forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('item');
                itemDiv.innerHTML = `
                    <h2>${item.title}</h2>
                    <p><strong>DOI:</strong> ${item.doi}</p>
                    <p>${item.description}</p>
                    <p><strong>Created At:</strong> ${item.created_at}</p>
                    <p><strong>Updated At:</strong> ${item.updated_at}</p>
                    <p><strong>Format:</strong> ${item.data_format}</p>
                    <p><strong>Size:</strong> ${item.size_in_mb} MB</p>
                    <p><strong>Tags:</strong> ${item.tags.join(', ')}</p>
                    <p><strong>Source:</strong> ${item.source}</p>
                    <p><strong>Authors:</strong> ${item.authors.name} (ORCID: ${item.authors.orcid})</p>
                    <p><strong>License:</strong> ${item.license}</p>
                    <a href="${item.access_url}" class="button">Access ${category.charAt(0).toUpperCase() + category.slice(1)}</a>
                    <a href="${item.documentation_url}" class="button button-secondary">View Documentation</a>
                `;
                container.appendChild(itemDiv);
            });
        };

        // Add event listeners to tabs
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                displayContent(tab.dataset.category);
            });
        });

        // Display the first category by default
        const firstCategory = Object.keys(data.catalog)[0];
        document.querySelector(`.tab[data-category="${firstCategory}"]`).classList.add('active');
        displayContent(firstCategory);
    })
    .catch(error => console.error('Error loading data:', error));

