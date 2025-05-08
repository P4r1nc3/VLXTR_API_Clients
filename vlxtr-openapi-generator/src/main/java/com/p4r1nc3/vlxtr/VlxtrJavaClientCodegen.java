package com.p4r1nc3.vlxtr;

import org.openapitools.codegen.CodegenModel;
import org.openapitools.codegen.CodegenProperty;
import org.openapitools.codegen.languages.JavaClientCodegen;
import org.openapitools.codegen.model.ModelMap;
import org.openapitools.codegen.model.ModelsMap;

public class VlxtrJavaClientCodegen extends JavaClientCodegen {

    public VlxtrJavaClientCodegen() {
        super();
        this.outputFolder = "generated-code/vlxtr-java";
        this.apiPackage = "com.p4r1nc3.vlxtr.api";
        this.modelPackage = "com.p4r1nc3.vlxtr.model";
        this.templateDir = "vlxtr-java"; // katalog z twoimi mustache'ami
        this.setLibrary("okhttp-gson"); // zakładamy, że używasz Gson
    }

    @Override
    public String getName() {
        return "vlxtr-java"; // używane w generatorName
    }

    @Override
    public ModelsMap postProcessModels(ModelsMap objs) {
        ModelsMap result = super.postProcessModels(objs);

        for (ModelMap mo : result.getModels()) {
            CodegenModel cm = mo.getModel();
            for (CodegenProperty prop : cm.getVars()) {
                // Sprawdź, czy nazwa w formacie snake_case zawiera podkreślnik
                String snakeCase = prop.getNameInSnakeCase();
                boolean hasMultipleParts = snakeCase.contains("_");

                // Dodaj flagę do vendorExtensions, aby użyć jej w szablonie Mustache
                prop.vendorExtensions.put("x-has-multiple-parts", hasMultipleParts);
            }
        }

        return result;
    }
}