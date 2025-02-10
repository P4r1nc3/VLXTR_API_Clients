# Publishing and Using VLXTR OpenAPI on GitHub Packages

## 📌 Prerequisites
Before publishing or using the package, ensure you have:
- **Maven installed** (`mvn -version` to check)
- **GitHub Personal Access Token (PAT)** with `read:packages`, `write:packages`, and `delete:packages` permissions. [Create a token here](https://github.com/settings/tokens)
- **A valid GitHub repository** where the package is hosted

---

## 🚀 Publishing a New Version
After making changes to the project, follow these steps to publish the updated package:

### 1️⃣ Update `pom.xml`
Ensure the `pom.xml` file includes the correct repository configuration:

```xml
<distributionManagement>
    <repository>
        <id>github</id>
        <url>https://maven.pkg.github.com/P4r1nc3/VLXTR_OpenAPI</url>
    </repository>
</distributionManagement>
```

### 2️⃣ Configure Authentication
Add your GitHub credentials to `settings.xml` located at `~/.m2/settings.xml` (Linux/Mac) or `C:\Users\your-user\.m2\settings.xml` (Windows):

```xml
<servers>
    <server>
        <id>github</id>
        <username>YOUR_GITHUB_USERNAME</username>
        <password>YOUR_GITHUB_PERSONAL_ACCESS_TOKEN</password>
    </server>
</servers>
```

### 3️⃣ Deploy the Package
Run the following command to publish the package to GitHub Packages:

```sh
mvn clean deploy
```

Once completed, the package will be available in GitHub Packages.

---

## 📦 Using VLXTR OpenAPI in Other Projects
To use this package in another project, add the following configurations.

### 1️⃣ Add GitHub Repository in `pom.xml`
```xml
<repositories>
    <repository>
        <id>github</id>
        <url>https://maven.pkg.github.com/P4r1nc3/VLXTR_OpenAPI</url>
    </repository>
</repositories>
```

### 2️⃣ Add the Dependency
```xml
<dependency>
    <groupId>com.p4r1nc3.vlxtr</groupId>
    <artifactId>vlxtr-openapi</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>
```

### 3️⃣ Ensure Authentication
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

## 📍 Where to Find the Package?
The package will be available at:
👉 **[GitHub Packages - VLXTR OpenAPI](https://github.com/P4r1nc3/VLXTR_OpenAPI/packages)**

This package can now be used across projects while ensuring proper authentication.

---

✅ **That's it!** Your package is now published and ready for use! 🎉

