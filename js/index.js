import { imagesArray } from "./data.js";
import {
  generateAllImagesContainersOnSidebar,
} from "./sidebar.js";
import {updateMainSection} from "./mainSection.js";

let focussedImageDetails = { isPresent: false, index: -1 };

/**
 * Function to render sidebar and main section content on the page
 * Works on each page load.
 */
const displayContentOnPage = () => {
  generateAllImagesContainersOnSidebar(imagesArray, focussedImageDetails);
  updateMainSection({...imagesArray[0], index: 0})
};

displayContentOnPage();
