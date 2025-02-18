# VLXTR OpenAPI Clients

## Overview
VLXTR OpenAPI Clients provide Java client libraries for interacting with VLXTR microservices. These clients simplify the integration process by offering pre-configured API interactions and authentication handling.

## Features
- Auto-generated clients based on OpenAPI specifications
- Authentication support using Keycloak
- Distributed via GitHub Packages for easy inclusion in projects
- Separate modules for each VLXTR service

## Prerequisites
- **Java 17**
- **Maven**
- **GitHub Personal Access Token (PAT)** with `read:packages`, `write:packages`, and `delete:packages` permissions. [Create a token here](https://github.com/settings/tokens)
- **A valid GitHub repository** where the package is hosted

## Configuration

### 1. Publishing a New Version
After making changes to the project, follow these steps to publish an updated package.

#### **1.1 Update `pom.xml`**
Ensure the `pom.xml` file in the **parent project** includes the correct repository configuration:

```xml
<distributionManagement>
    <repository>
        <id>github</id>
        <url>https://maven.pkg.github.com/P4r1nc3/VLXTR_API_Clients</url>
    </repository>
</distributionManagement>
```

Each module (`vlxtr-allegro-api` and `vlxtr-bambu-api`) **inherits this configuration**.

#### **1.2 Configure Authentication**
Add GitHub credentials to `settings.xml` located at:
- **Linux/Mac**: `~/.m2/settings.xml`
- **Windows**: `C:\Users\your-user\.m2\settings.xml`

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
          https://maven.apache.org/xsd/settings-1.0.0.xsd">
    <servers>
        <server>
            <id>github</id>
            <username>YOUR_GITHUB_USERNAME</username>
            <password>YOUR_GITHUB_PERSONAL_ACCESS_TOKEN</password>
        </server>
    </servers>
</settings>
```

#### **1.3 Deploy Each Module Separately**
Since this project has **two separate clients**, deploy them individually.

##### **Deploy VLXTR Allegro API**
```sh
mvn clean deploy -pl vlxtr-allegro-api
```

##### **Deploy VLXTR Bambu API**
```sh
mvn clean deploy -pl vlxtr-bambu-api
```

Once completed, both packages will be available in GitHub Packages.

## **2. Using VLXTR OpenAPI in Other Projects**
To use these packages in another project, add the following configurations.

### **2.1 Add GitHub Repository in `pom.xml`**
```xml
<repositories>
    <repository>
        <id>github</id>
        <url>https://maven.pkg.github.com/P4r1nc3/VLXTR_API_Clients</url>
    </repository>
</repositories>
```

### **2.2 Add Dependencies for Each API**

#### **Using VLXTR Allegro API**
```xml
<dependency>
    <groupId>com.p4r1nc3.vlxtr</groupId>
    <artifactId>vlxtr-allegro-api</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>
```

### **2.3 Ensure Authentication**
Users must also add their credentials in `~/.m2/settings.xml` to authenticate when pulling the package:

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
          https://maven.apache.org/xsd/settings-1.0.0.xsd">
    <servers>
        <server>
            <id>github</id>
            <username>YOUR_GITHUB_USERNAME</username>
            <password>YOUR_GITHUB_PERSONAL_ACCESS_TOKEN</password>
        </server>
    </servers>
</settings>
```

## **3. Where to Find the Packages?**
The packages will be available at:
- **[GitHub Packages - VLXTR OpenAPI](https://github.com/P4r1nc3/VLXTR_OpenAPI/packages)**

Each module is published separately and can be used independently in projects.

## Debugging
Enable detailed logs by modifying `logback.xml` or `application.yml`:

```yaml
logging:
  level:
    root: INFO
    org.springframework.web.client: DEBUG
```

## Conclusion
VLXTR OpenAPI Clients provide easy integration with VLXTR microservices, ensuring seamless authentication and API access. Make sure to configure credentials properly and always keep dependencies up to date.

