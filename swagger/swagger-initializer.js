window.onload = function() {
  // Get the select element
  const apiSelect = document.getElementById('api-select');

  // Function to initialize Swagger UI with the selected API
  function initSwaggerUI(url) {
    // Clear previous UI instance if it exists
    const swaggerUIContainer = document.getElementById('swagger-ui');
    while (swaggerUIContainer.firstChild) {
      swaggerUIContainer.removeChild(swaggerUIContainer.firstChild);
    }

    // Initialize new UI with selected API
    window.ui = SwaggerUIBundle({
      url: url,
      dom_id: '#swagger-ui',
      deepLinking: true,
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      layout: "StandaloneLayout"
    });
  }

  // Initialize with the default selection
  initSwaggerUI(apiSelect.value);

  // Add change event listener to the select element
  apiSelect.addEventListener('change', function() {
    initSwaggerUI(this.value);
  });
};