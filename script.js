
/* ==========================================
   IBUSISE MEDIA - MAIN CONFIGURATION
========================================== */

// Use the current page address so the QR follows the site when it is published.
const SITE_URL = window.location.href.split("#")[0];

// YOUR SOCIAL MEDIA LINKS
// Replace the example URLs with your real accounts.

const socialLinks = [

    {
        name: "Facebook",
        description: "Follow our updates",
        icon: "facebook",
        color: "#f39800",
        url: "https://www.facebook.com/share/1CqY9azYJ8/?mibextid=wwXIfr"
    },

    {
        name: "Instagram",
        description: "Explore our gallery",
        icon: "instagram",
        color: "#008fbd",
        url: "https://www.instagram.com/ibusise_media?dlrf=MWttbDhqbXkxMHBwOA%3D%3D&utm_source=qr"
    },

    {
        name: "TikTok",
        description: "Watch our content",
        icon: "tiktok",
        color: "#777777",
        url: "https://www.tiktok.com/@ibusise_media?_r=1&_t=ZS-9BHXJanPRRs"
    },

    {
        name: "WhatsApp",
        description: "Chat with our team",
        icon: "whatsapp",
        color: "#008fbd",
        iconColor: "#25d366",
        url: "https://wa.me/27710664350"
    },

    {
        name: "Email",
        description: "Send us an enquiry",
        icon: "email",
        color: "#777777",
        url: "mailto:hello@example.com"
    }

];

const socialIconShapes = {
    facebook: [
        {
            tag: "path",
            attributes: {
                d: "M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.008 10.125 11.854v-8.385H7.078v-3.469h3.047V9.428c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.931-1.956 1.886v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.081 24 18.092 24 12.073z"
            }
        }
    ],
    instagram: [
        { tag: "rect", attributes: { x: "3", y: "3", width: "18", height: "18", rx: "5" } },
        { tag: "circle", attributes: { cx: "12", cy: "12", r: "4" } },
        { tag: "circle", attributes: { cx: "17.5", cy: "6.5", r: "1" } }
    ],
    tiktok: [
        {
            tag: "path",
            attributes: {
                d: "M19.59 6.69a4.79 4.79 0 0 1-3.77-4.2V2h-4.46v13.67a2.9 2.9 0 0 1-2.91 2.76 2.91 2.91 0 1 1 2.91-2.91c0-.43-.05-.84-.13-1.24v-4.56a7.3 7.3 0 1 0 4.59 6.77V9.55a9.15 9.15 0 0 0 5.34 1.72V6.82a4.8 4.8 0 0 1-1.57-.13z"
            }
        }
    ],
    pixieset: [
        { tag: "rect", attributes: { x: "3", y: "4", width: "18", height: "16", rx: "2" } },
        { tag: "circle", attributes: { cx: "8.5", cy: "9", r: "1.5" } },
        { tag: "path", attributes: { d: "m5 17 4.5-4 3 2 3.5-4 3 6H5z" } }
    ],
    whatsapp: [
        {
            tag: "path",
            attributes: {
                d: "M20.52 3.48A11.88 11.88 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.25-1.64a11.9 11.9 0 0 0 5.79 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.48-8.41zm-8.47 18.34h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.86 9.86 0 0 1-1.52-5.27c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.98 2.89a9.8 9.8 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.89 9.88zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"
            }
        }
    ],
    email: [
        { tag: "rect", attributes: { x: "3", y: "5", width: "18", height: "14", rx: "2" } },
        { tag: "path", attributes: { d: "m4 7 8 6 8-6" } }
    ]
};


/* ==========================================
   DISPLAY SOCIAL MEDIA
========================================== */

function displaySocialLinks() {

    const container = document.getElementById("socialLinks");

    container.innerHTML = "";

    socialLinks.forEach(platform => {

        const link = document.createElement("a");

        link.className = "social-link";
        link.href = platform.url;

        link.style.setProperty(
            "--accent",
            platform.color
        );
        link.style.setProperty(
            "--icon-accent",
            platform.iconColor || platform.color
        );

        if (platform.url.startsWith("mailto:")) {

            link.target = "_self";

        } else {

            link.target = "_blank";
            link.rel = "noopener noreferrer";

        }

        const icon = document.createElement("span");

        icon.className = "social-icon";
        const brandIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        brandIcon.setAttribute("viewBox", "0 0 24 24");
        brandIcon.setAttribute("aria-hidden", "true");
        brandIcon.classList.add("platform-icon", `${platform.icon}-icon`);

        socialIconShapes[platform.icon].forEach(shape => {
            const element = document.createElementNS("http://www.w3.org/2000/svg", shape.tag);
            Object.entries(shape.attributes).forEach(([attribute, value]) => {
                element.setAttribute(attribute, value);
            });
            brandIcon.appendChild(element);
        });

        icon.appendChild(brandIcon);

        const info = document.createElement("span");

        info.className = "social-info";

        const name = document.createElement("strong");

        name.textContent = platform.name;

        const description = document.createElement("small");

        description.textContent = platform.description;

        info.appendChild(name);
        info.appendChild(description);

        const arrow = document.createElement("span");

        arrow.className = "social-arrow";
        arrow.textContent = "↗";

        link.appendChild(icon);
        link.appendChild(info);
        link.appendChild(arrow);

        container.appendChild(link);

    });

}

/* ==========================================
   GENERATE PROFESSIONAL QR CODE
========================================== */

let qrCode = null;

function generateQRCode() {

    const qrContainer = document.getElementById("qrcode");

    const downloadButton = document.getElementById("downloadQR");

    const status = document.getElementById("qrStatus");

    const qrFrame = document.getElementById("qrFrame");

    const instruction = document.getElementById("qrInstruction");

    downloadButton.disabled = true;

    qrFrame.hidden = true;
    instruction.hidden = true;
    qrContainer.innerHTML = "";

    if (window.location.protocol === "file:") {
        status.textContent =
            "Publish this page online to create a QR code that phones can open.";
        return;
    }

    if (typeof QRCodeStyling === "undefined") {

        status.textContent =
            "QR library unavailable. Check your internet connection.";

        return;

    }

    qrCode = new QRCodeStyling({

        width: 1000,

        height: 1000,

        type: "canvas",

        data: SITE_URL,

        margin: 35,

        qrOptions: {

            typeNumber: 0,

            mode: "Byte",

            errorCorrectionLevel: "H"

        },

        dotsOptions: {

            color: "#000000",

            type: "rounded"

        },

        backgroundOptions: {

            color: "#ffffff"

        },

        cornersSquareOptions: {

            color: "#000000",

            type: "extra-rounded"

        },

        cornersDotOptions: {

            color: "#000000",

            type: "dot"

        }

    });

    qrCode.append(qrContainer);

    qrFrame.hidden = false;
    instruction.hidden = false;
    status.textContent = "Your QR code is ready.";

    downloadButton.disabled = false;

}


/* ==========================================
   DOWNLOAD QR CODE
========================================== */

function downloadQRCode() {

    if (!qrCode) return;

    qrCode.download({

        name: "IBUSISE-MEDIA-QR-CODE",

        extension: "png"

    });

}


/* ==========================================
   INITIALISE WEBSITE
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("year").textContent =
        new Date().getFullYear();

    displaySocialLinks();

    generateQRCode();

    document.getElementById("downloadQR")
        .addEventListener("click", downloadQRCode);

});
