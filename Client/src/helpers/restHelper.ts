const BASE_URL = "http://localhost:3000/api";

export const getMedia = async () => {
  const response = await fetch(`${BASE_URL}/media`);
  return response.json();
};

//Implement a method to add media
interface Media {
  title: string;
  description: string;
  tags: string;
  customProps: string;
  thumbnail: string;
  status: string;
}

export const addMedia = async (media: Media) => {
  const response = await fetch(`${BASE_URL}/media`, {
    method: "POST",
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
