import {
  renderAllSidebarItems,
  updateSidebarFocussedImage,
  updateFocussedImageTitleOnSidebar,
} from "./sidebar.js";
import { updateMainSection } from "./mainSection.js";
import {
  focussedImageDetails,
  getTitleSubParts,
  imagesArray,
  updateImagesArrayElement,
} from "./utility.js";

/**
 * Function to render sidebar and main section content on the page
 * Works on each page load.
 */
const displayContentOnPage = () => {
  renderAllSidebarItems(imagesArray);
  changeFocussedImage({ ...imagesArray[0], index: 0 });
  document
    .querySelector(".preview-image-title")
    .addEventListener("keyup", updateImageTitle);
  document.addEventListener("keyup", (event) => {
    if (isArrowUpOrArrowDown(event.code)) {
      const newIndex =
        (focussedImageDetails.getDetails().index +
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
  updateSidebarFocussedImage(newlyFocussedImageIndex);
  focussedImageDetails.updateDetails(newlyFocussedImageIndex);
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
  updateImagesArrayElement(
    focussedImageDetails.getDetails().index,
    // Create a new object first which will contain the details of the focussed image and the changed title.
    {
      ...imagesArray[focussedImageDetails.getDetails().index],
      title: event.target.innerHTML,
    }
  );
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
