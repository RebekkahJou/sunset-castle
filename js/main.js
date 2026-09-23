"use strict";
/**
 * Sunset Castle showcase site — client-side behavior.
 * Handles the mobile navigation toggle and the photo lightbox.
 */
function initializeMobileNavigation() {
    const navToggleButton = document.querySelector(".site-nav__toggle");
    const navLinksList = document.querySelector(".site-nav__links");
    if (!navToggleButton || !navLinksList) {
        return;
    }
    navToggleButton.addEventListener("click", () => {
        const isCurrentlyOpen = navLinksList.classList.toggle("is-open");
        navToggleButton.setAttribute("aria-expanded", String(isCurrentlyOpen));
    });
    navLinksList.querySelectorAll("a").forEach((navLink) => {
        navLink.addEventListener("click", () => {
            navLinksList.classList.remove("is-open");
            navToggleButton.setAttribute("aria-expanded", "false");
        });
    });
}
function initializePhotoLightbox() {
    const lightboxOverlay = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector(".lightbox__image");
    const lightboxCloseButton = document.querySelector(".lightbox__close");
    const collagePhotos = document.querySelectorAll(".collage__item img");
    if (!lightboxOverlay || !lightboxImage || !lightboxCloseButton) {
        return;
    }
    const openLightboxWithImage = (imageSource, imageAltText) => {
        lightboxImage.src = imageSource;
        lightboxImage.alt = imageAltText;
        lightboxOverlay.classList.add("is-open");
    };
    const closeLightbox = () => {
        lightboxOverlay.classList.remove("is-open");
        lightboxImage.src = "";
    };
    collagePhotos.forEach((photo) => {
        photo.addEventListener("click", () => {
            if (photo.classList.contains("is-missing")) {
                return;
            }
            openLightboxWithImage(photo.src, photo.alt);
        });
    });
    lightboxCloseButton.addEventListener("click", closeLightbox);
    lightboxOverlay.addEventListener("click", (mouseEvent) => {
        if (mouseEvent.target === lightboxOverlay) {
            closeLightbox();
        }
    });
    document.addEventListener("keydown", (keyboardEvent) => {
        if (keyboardEvent.key === "Escape") {
            closeLightbox();
        }
    });
}
function markMissingPhotosWithFallbackStyling() {
    const allPhotos = document.querySelectorAll("img[data-fallback-label]");
    allPhotos.forEach((photo) => {
        photo.addEventListener("error", () => {
            photo.classList.add("is-missing");
            photo.removeAttribute("src");
            photo.alt = photo.dataset.fallbackLabel ?? "Photo coming soon";
        }, { once: true });
    });
}
function displayCurrentYearInFooter() {
    const currentYearElement = document.querySelector("#current-year");
    if (!currentYearElement) {
        return;
    }
    currentYearElement.textContent = String(new Date().getFullYear());
}
document.addEventListener("DOMContentLoaded", () => {
    initializeMobileNavigation();
    initializePhotoLightbox();
    markMissingPhotosWithFallbackStyling();
    displayCurrentYearInFooter();
});
//# sourceMappingURL=main.js.map