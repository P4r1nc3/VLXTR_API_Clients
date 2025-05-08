package com.p4r1nc3.vlxtr.generator;

import org.openapitools.codegen.CodegenModel;
import org.openapitools.codegen.CodegenProperty;
import org.openapitools.codegen.languages.JavaClientCodegen;
import org.openapitools.codegen.model.ModelMap;
import org.openapitools.codegen.model.ModelsMap;

public class VlxtrJavaGenerator extends JavaClientCodegen {

    public static final String NAME = "vlxtr-java";

    public VlxtrJavaGenerator() {
        super();

        embeddedTemplateDir = templateDir = NAME;
    }

    @Override
    public String getName() {
        return NAME;
    }

    @Override
    public ModelsMap postProcessModels(ModelsMap objs) {
        objs = super.postProcessModels(objs);

        for (ModelMap modelMap : objs.getModels()) {
            CodegenModel model = modelMap.getModel();
            for (CodegenProperty property : model.vars) {
                if (property.name != null && property.name.equals(property.nameInSnakeCase)) {
                    property.vendorExtensions.put("x-same-as-name", Boolean.TRUE);
                } else {
                    property.vendorExtensions.put("x-same-as-name", Boolean.FALSE);
                }
            }
        }

        return objs;
    }
}
