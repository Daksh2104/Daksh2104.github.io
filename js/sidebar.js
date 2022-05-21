/**
 * Used to generate all images containers on the sidebar
 * @param imagesArray Array of images which will be used to generate images containers
 * @param focussedImageDetails Previously focussed image's object
 */
const generateAllImagesContainersOnSidebar = (
  imagesArray,
  focussedImageDetails
) => {
  const sidebar = document.querySelector(".sidebar");
  imagesArray.forEach((imageDetails, imageIndex) => {
    const newImageContainer = generateImageDetailsContainer(
      // Creating a new object which includes the index of this image too
      {
        ...imageDetails,
        index: imageIndex,
      },
      focussedImageDetails
    );
    sidebar.appendChild(newImageContainer);
  });
};

/**
 * Generates a new div container for each image and set it's attributes too
 * @param imageDetails Details of the image whose container has to be generated
 * @param focussedImageDetails Details of the previously focussed image
 * @returns Container corresponding to this image will be returned
 */
const generateImageDetailsContainer = (imageDetails, focussedImageDetails) => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  imageContainer.setAttribute("id", "index-" + imageDetails.index);
  // On every click will set the current image as the focussed image
  imageContainer.addEventListener("click", () =>
    updateSidebarFocussedImage(focussedImageDetails, imageDetails.index)
  );
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
 * Splits the title into two sub parts
 * Will be used to set values of the left and right part of the title
 * @param title Title of the image which will be splitted into sub-parts
 * @returns Array of strings consisting of two sub-parts of the title
 */
const getTitleSubParts = (title) => {
  const leftSideSize = Math.max(title.length - 12, 0);
  return [title.slice(0, leftSideSize), title.slice(leftSideSize)];
};

/**
 * This function will replace the previously focussed image with the new one
 * @param previousFocussedImage Details of the previously focussed image
 * @param newlyFocussedImageIndex Index of the image which will be now focussed on
 */
const updateSidebarFocussedImage = (
  previousFocussedImage,
  newlyFocussedImageIndex
) => {
  // If previously a focussed image existed
  if (previousFocussedImage.isPresent) {
    toggleSidebarFocussedImage(previousFocussedImage.index);
  }
  toggleSidebarFocussedImage(newlyFocussedImageIndex);
  updateFocussedImageMetadata(previousFocussedImage, newlyFocussedImageIndex);
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
 * Updates the details which will be used to track the currently focussed image
 * @param focussedImageDetails Object which contains the information about the focussed images
 * @param newlyFocussedImageIndex Index of the image which is now focussed on
 */
const updateFocussedImageMetadata = (
  focussedImageDetails,
  newlyFocussedImageIndex
) => {
  focussedImageDetails.index = newlyFocussedImageIndex;
  focussedImageDetails.isPresent = true;
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
  generateAllImagesContainersOnSidebar,
  getTitleSubParts,
  updateSidebarFocussedImage,
  updateFocussedImageMetadata,
  updateFocussedImageTitleOnSidebar,
};
