document.addEventListener('DOMContentLoaded', function() {
    // API spec URLs pointing directly to source files
    const apiSpecs = {
        allegro: '../vlxtr-allegro-api/vlxtr-allegro-api.yaml',
        bambu: '../vlxtr-bambu-api/vlxtr-bambu-api.yaml',
        core: '../vlxtr-core-api/vlxtr-core-api.yaml',
        gateway: '../vlxtr-api-gateway/vlxtr-api-gateway.yaml'
    };

    // Default API to display
    let currentApi = 'gateway';

    // Check if there's a hash in the URL to determine which API to show
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        if (apiSpecs[hash]) {
            currentApi = hash;
        }
    }

    // Initialize Swagger UI with the default API
    initSwaggerUI(apiSpecs[currentApi]);
    updateActiveTab(currentApi);

    // Set up tab click handlers
    document.querySelectorAll('#api-tabs a').forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const apiType = this.getAttribute('data-api');

            // Only reload if different API selected
            if (apiType !== currentApi) {
                currentApi = apiType;
                initSwaggerUI(apiSpecs[apiType]);
                updateActiveTab(apiType);

                // Update URL hash
                window.location.hash = apiType;
            }
        });
    });

    // Function to initialize or update Swagger UI
    function initSwaggerUI(specUrl) {
        // Clear previous Swagger UI instance
        const swaggerContainer = document.getElementById('swagger-ui');
        while (swaggerContainer.firstChild) {
            swaggerContainer.removeChild(swaggerContainer.firstChild);
        }

        // Initialize new Swagger UI instance
        const ui = SwaggerUIBundle({
            url: specUrl,
            dom_id: '#swagger-ui',
            deepLinking: true,
            presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIStandalonePreset
            ],
            plugins: [
                SwaggerUIBundle.plugins.DownloadUrl
            ],
            layout: "StandaloneLayout",
            supportedSubmitMethods: ['get', 'post', 'put', 'delete', 'patch'],
            validatorUrl: null
        });

        window.ui = ui;
    }

    // Function to update active tab styling
    function updateActiveTab(apiType) {
        document.querySelectorAll('#api-tabs a').forEach(tab => {
            if (tab.getAttribute('data-api') === apiType) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }
});