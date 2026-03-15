/**
 * Noor Academia Component Loader
 * Responsibility: Fetch and inject shared Header/Footer templates.
 */

const VAULT_BASE_URL = "https://nooracademia-owner.github.io/noor-vault-assets/nooracademia/";

async function injectComponent(elementId, fileName) {
    const targetElement = document.getElementById(elementId);
    
    if (!targetElement) {
        console.warn(`NoorVault: Element with ID '${elementId}' not found on this page.`);
        return;
    }

    try {
        const response = await fetch(`${VAULT_BASE_URL}templates/${fileName}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const htmlContent = await response.text();
        targetElement.innerHTML = htmlContent;
        
        console.log(`NoorVault: Successfully loaded ${fileName}`);
    } catch (error) {
        console.error(`NoorVault Error: Could not load ${fileName} from vault.`, error);
        targetElement.innerHTML = ``;
    }
}

// Initialize loading when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    injectComponent("noor-header", "header.html");
    injectComponent("noor-footer", "footer.html");
});