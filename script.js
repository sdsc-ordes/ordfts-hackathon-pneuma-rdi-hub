fetch('index.json')
    .then(response => response.json())
    .then(data => {
        const container = document.querySelector('.dataset-container');
        data.catalog.datasets.forEach(dataset => {
            const datasetDiv = document.createElement('div');
            datasetDiv.classList.add('dataset');
            datasetDiv.innerHTML = `
                <h2>${dataset.title}</h2>
                <p><strong>DOI:</strong> ${dataset.doi}</p>
                <p>${dataset.description}</p>
                <p><strong>Created At:</strong> ${dataset.created_at}</p>
                <p><strong>Updated At:</strong> ${dataset.updated_at}</p>
                <p><strong>Format:</strong> ${dataset.data_format}</p>
                <p><strong>Size:</strong> ${dataset.size_in_mb} MB</p>
                <p><strong>Tags:</strong> ${dataset.tags.join(', ')}</p>
                <p><strong>Source:</strong> ${dataset.source}</p>
                <p><strong>Authors:</strong> ${dataset.authors.name} (ORCID: ${dataset.authors.orcid})</p>
                <p><strong>License:</strong> ${dataset.license}</p>
                <a href="${dataset.access_url}" class="button">Access Dataset</a>
                <a href="${dataset.documentation_url}" class="button button-secondary">View Documentation</a>
            `;
            container.appendChild(datasetDiv);
        });
    })
    .catch(error => console.error('Error loading datasets:', error));
