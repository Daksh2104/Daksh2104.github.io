// Array of images which will be rendered
const imagesArray = [
  {
    previewImage:
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "cat.jpeg",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title:
      "a man and a woman trying to cook a meal together in a modern kitchen.jpg",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "bali-kelingking-beach-plastic-removal-drive.key",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    title: "NextByk Investor Pitch 2022.ppt",
  },
  {
    previewImage:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    title: "interns-performance-report-may-2022.key",
  },
];

/**
 * Updates a particular element of imagesArray
 * @param imageIndex Index of the element to update
 * @param imageDetails Details of the element
 */
const updateImagesArrayElement = (imageIndex, imageDetails) => {
  imagesArray[imageIndex] = imageDetails;
};

const focussedImageDetails = { isPresent: false, index: -1 };

/**
 * Updates the details which will be used to track the currently focussed image
 * @param newlyFocussedImageIndex Index of the image which is now focussed on
 */
const updateFocussedImageMetadata = (newlyFocussedImageIndex) => {
  focussedImageDetails.index = newlyFocussedImageIndex;
  focussedImageDetails.isPresent = true;
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

export {
  focussedImageDetails,
  updateFocussedImageMetadata,
  getTitleSubParts,
  imagesArray,
  updateImagesArrayElement,
};
