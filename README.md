# VLXTR OpenAPI Clients

### **Publishing and Using VLXTR OpenAPI on GitHub Packages**

## **Prerequisites**
Before publishing or using the package, ensure you have:
- **Maven installed** (`mvn -version` to check)
- **GitHub Personal Access Token (PAT)** with `read:packages`, `write:packages`, and `delete:packages` permissions. [Create a token here](https://github.com/settings/tokens)
- **A valid GitHub repository** where the package is hosted

---

## **Publishing a New Version**
After making changes to the project, follow these steps to publish the updated package.

### **1. Update `pom.xml`**
Ensure the `pom.xml` file in the **parent project** includes the correct repository configuration:

```xml
<distributionManagement>
    <repository>
        <id>github</id>
        <url>https://maven.pkg.github.com/P4r1nc3/VLXTR_OpenAPI</url>
    </repository>
</distributionManagement>
```

Each module (`vlxtr-allegro-api` and `vlxtr-bambu-api`) **inherits this configuration**.

### **2. Configure Authentication**
Add GitHub credentials to `settings.xml` located at:
- **Linux/Mac**: `~/.m2/settings.xml`
- **Windows**: `C:\Users\your-user\.m2\settings.xml`

```xml
<servers>
    <server>
        <id>github</id>
        <username>YOUR_GITHUB_USERNAME</username>
        <password>YOUR_GITHUB_PERSONAL_ACCESS_TOKEN</password>
    </server>
</servers>
```

### **3. Deploy Each Module Separately**
Since this project has **two separate clients**, deploy them individually.

#### **Deploy VLXTR Allegro API**
```sh
mvn clean deploy -pl vlxtr-allegro-api
```

#### **Deploy VLXTR Bambu API**
```sh
mvn clean deploy -pl vlxtr-bambu-api
```

Once completed, both packages will be available in GitHub Packages.

---

## **Using VLXTR OpenAPI in Other Projects**
To use these packages in another project, add the following configurations.

### **1. Add GitHub Repository in `pom.xml`**
```xml
<repositories>
    <repository>
        <id>github</id>
        <url>https://maven.pkg.github.com/P4r1nc3/VLXTR_API_Clients</url>
    </repository>
</repositories>
```

### **2. Add Dependencies for Each API**

#### **Using VLXTR Allegro API**
```xml
<dependency>
    <groupId>com.p4r1nc3.vlxtr</groupId>
    <artifactId>vlxtr-allegro-api</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>
```

### **3. Ensure Authentication**
Users must also add their credentials in `~/.m2/settings.xml` to authenticate when pulling the package:

```xml
<servers>
    <server>
        <id>github</id>
        <username>YOUR_GITHUB_USERNAME</username>
        <password>YOUR_GITHUB_PERSONAL_ACCESS_TOKEN</password>
    </server>
</servers>
```

---

## **Where to Find the Packages?**
The packages will be available at:
- **[GitHub Packages - VLXTR OpenAPI](https://github.com/P4r1nc3/VLXTR_OpenAPI/packages)**

Each module is published separately and can be used independently in projects.

---

This setup ensures that **each API is built and deployed separately while maintaining proper authentication** for usage.