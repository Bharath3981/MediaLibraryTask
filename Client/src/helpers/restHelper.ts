export const BASE_URL = "http://localhost:3000/api";

export const getMedia = async () => {
  const response = await fetch(`${BASE_URL}/media`);
  return response.json();
};

interface Media {
  title: string;
  description: string;
  url: string;
}

interface AddMediaResponse {
  id: string;
  title: string;
  description: string;
  url: string;
}

export const addMedia = async (media: Media): Promise<AddMediaResponse> => {
  const response = await fetch(`${BASE_URL}/media`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(media),
  });
  return response.json();
};

//Implement method to update media
export const updateMedia = async (
  id: string,
  media: Media
): Promise<AddMediaResponse> => {
  const response = await fetch(`${BASE_URL}/media/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(media),
  });
  return response.json();
};

//Implement method to upload profile photo
type UploadThumbnailResponse = object;

export const uploadThumbnail = async (
  photo: File
): Promise<UploadThumbnailResponse> => {
  const formData = new FormData();
  formData.append("thumbnail", photo);
  const response = await fetch(`${BASE_URL}/media/thumbnail`, {
    method: "POST",
    body: formData,
  });
  return response.json();
};
