window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {url: "vlxtr-allegro-api/vlxtr-allegro-api.yaml", name: "VLXTR Allegro API"},
      {url: "vlxtr-api-gateway/vlxtr-api-gateway.yaml", name: "VLXTR API Gateway"},
      {url: "vlxtr-bambu-api/vlxtr-bambu-api.yaml", name: "VLXTR Bambu API"},
      {url: "vlxtr-core-api/vlxtr-core-api.yaml", name: "VLXTR Core API"}
    ],
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
    displayOperationId: true,
    filter: true,
    withCredentials: true
  });

  //</editor-fold>
};