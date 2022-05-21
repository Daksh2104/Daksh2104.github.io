/**
 * Function to render the focussed image on the main section of the page.
 * @param newImageDetails Contains the details (index, title, previewImage) related to the newly focussed image.
 */
const updateMainSection = (newImageDetails) => {
  const previewImageElement = document.querySelector(".preview-image");
  previewImageElement.setAttribute("src", newImageDetails.previewImage);
  previewImageElement.setAttribute("alt", newImageDetails.title);
  document.querySelector(".preview-image-title").innerHTML = newImageDetails.title;
};

export { updateMainSection };
