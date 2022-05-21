import { imagesArray, updateImagesArrayElement } from "./data.js";
import {
  generateAllImagesContainersOnSidebar,
  getTitleSubParts,
  updateSidebarFocussedImage,
  updateFocussedImageMetadata,
  updateFocussedImageTitleOnSidebar,
} from "./sidebar.js";
import { updateMainSection } from "./mainSection.js";

let focussedImageDetails = { isPresent: false, index: -1 };

/**
 * Function to render sidebar and main section content on the page
 * Works on each page load.
 */
const displayContentOnPage = () => {
  generateAllImagesContainersOnSidebar(imagesArray, focussedImageDetails);
  changeFocussedImage({ ...imagesArray[0], index: 0 });
  document
    .querySelector(".preview-image-title")
    .addEventListener("keyup", updateImageTitle);
  document.addEventListener("keyup", (event) => {
    if (isArrowUpOrArrowDown(event.code)) {
      const newIndex =
        (focussedImageDetails.index +
          imagesArray.length +
          (event.code === "ArrowUp" ? -1 : 1)) %
        imagesArray.length;
      changeFocussedImage({ ...imagesArray[newIndex], index: newIndex });
    }
  });
};

/**
 * Changes focussed image by updating both sidebar's image containers and main section elements
 * @param newImageDetails Details of the image which has to be focussed
 */
const changeFocussedImage = (newImageDetails) => {
  const newlyFocussedImageIndex = newImageDetails.index;
  updateSidebarFocussedImage(focussedImageDetails, newlyFocussedImageIndex);
  updateFocussedImageMetadata(focussedImageDetails, newlyFocussedImageIndex);
  updateMainSection(newImageDetails);
};

/**
 * Updates the image container's title and element corresponding to this image in the imagesArray.
 * @param event Event which will be called when the title of the image changes.
 */
const updateImageTitle = (event) => {
  const [leftSidePart, rightSidePart] = getTitleSubParts(
    event.target.innerHTML
  );
  updateFocussedImageTitleOnSidebar(leftSidePart, rightSidePart);
  updateImagesArrayElement(imageIndex, {
    ...imagesArray[focussedImageIndex],
    title: event.target.innerHTML,
  });
};

/**
 * Checks whether the code is up/ down arrow or not
 * @param code The provided code which needs to be checked
 * @returns Boolean value which is true if the code is either up or down arrow
 */
const isArrowUpOrArrowDown = (code) => {
  return code === "ArrowUp" || code === "ArrowDown";
};

displayContentOnPage();
