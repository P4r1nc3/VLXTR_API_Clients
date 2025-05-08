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
        this.templateDir = "vlxtr-java";
        this.setLibrary("okhttp-gson");
    }

    @Override
    public String getName() {
        return "vlxtr-java";
    }

    @Override
    public ModelsMap postProcessModels(ModelsMap objs) {
        ModelsMap result = super.postProcessModels(objs);

        for (ModelMap mo : result.getModels()) {
            CodegenModel cm = mo.getModel();
            for (CodegenProperty prop : cm.getVars()) {
                String snakeCase = prop.getNameInSnakeCase();
                boolean hasMultipleParts = snakeCase.contains("_");
                prop.vendorExtensions.put("x-has-multiple-parts", hasMultipleParts);
            }
        }

        return result;
    }
}
