import {
  imagesArray,
  focussedImageDetails,
  updateFocussedImageMetadata,
  getTitleSubParts,
} from "./utility.js";
import { updateMainSection } from "./mainSection.js";

/**
 * Used to render all the images' containers on the sidebar
 * @param imagesArray Array of images which will be used to generate images containers
 */
const renderAllImagesContainersOnSidebar = (imagesArray) => {
  const sidebar = document.querySelector(".sidebar");
  imagesArray.forEach((imageDetails, imageIndex) => {
    const newImageContainer = generateImageDetailsContainer(
      // Creating a new object which includes the index of this image too
      {
        ...imageDetails,
        index: imageIndex,
      }
    );
    sidebar.appendChild(newImageContainer);
  });
};

/**
 * Generates a new div container for each image and set it's attributes too
 * @param imageDetails Details of the image whose container has to be generated
 * @returns Container corresponding to this image will be returned
 */
const generateImageDetailsContainer = (imageDetails) => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  imageContainer.setAttribute("id", "index-" + imageDetails.index);
  // On every click will set the current image as the focussed image
  imageContainer.addEventListener("click", () => {
    updateSidebarFocussedImage(imageDetails.index);
    updateFocussedImageMetadata(imageDetails.index);
    updateMainSection({
      ...imagesArray[imageDetails.index],
      index: imageDetails.index,
    });
  });
  const [leftSideTitle, rightSideTitle] = getTitleSubParts(imageDetails.title);
  imageContainer.innerHTML = `
      <img src="${imageDetails.previewImage}"/>
      <div class="image-container-title">
          <p class = "title-left-part">${leftSideTitle}</p>
          <p class = "title-right-part">${rightSideTitle}</p>
      </div>
      `;
  return imageContainer;
};

/**
 * This function will replace the previously focussed image with the new one
 * @param newlyFocussedImageIndex Index of the image which will be now focussed on
 */
const updateSidebarFocussedImage = (newlyFocussedImageIndex) => {
  const previousFocussedImage = focussedImageDetails;
  // If previously a focussed image existed
  if (previousFocussedImage.isPresent) {
    toggleSidebarFocussedImage(previousFocussedImage.index);
  }
  toggleSidebarFocussedImage(newlyFocussedImageIndex);
};

/**
 * Toggles focus on an image container present on the sidebar
 * @param imageIndex Index of the image which needs to be toggled
 */
const toggleSidebarFocussedImage = (imageIndex) => {
  document
    .querySelector(`#index-${imageIndex}`)
    .classList.toggle("focussed-image-container");
};

/**
 * Updates the title of the focussed image container
 * title consists of left and right part
 * @param leftSidePart left part of the title
 * @param rightSidePart right part of the title
 */
const updateFocussedImageTitleOnSidebar = (leftSidePart, rightSidePart) => {
  // Will select the left part of the currently focussed image container and set it's value as leftSidePart
  document
    .querySelector(".focussed-image-container")
    .querySelector(".title-left-part").innerHTML = leftSidePart;
  document
    .querySelector(".focussed-image-container")
    .querySelector(".title-right-part").innerHTML = rightSidePart;
};

export {
  renderAllImagesContainersOnSidebar,
  getTitleSubParts,
  updateSidebarFocussedImage,
  updateFocussedImageTitleOnSidebar,
};
