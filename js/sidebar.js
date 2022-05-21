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
 * @param {*} imageDetails Details of the image whose container has to be generated
 * @returns Container corresponding to this image will be returned
 */
const generateImageDetailsContainer = (imageDetails) => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  imageContainer.setAttribute("id", "index-" + imageDetails.index);
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

export { generateAllImagesContainersOnSidebar };
