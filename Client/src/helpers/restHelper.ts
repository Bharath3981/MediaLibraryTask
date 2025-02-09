let baseUrl1 = "";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  baseUrl1 = "http://localhost:3981/api";
} else {
  baseUrl1 = "http://16.171.18.66/api";
}

export const baseUrl = baseUrl1;

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

export const filterMediaByTag = async (tag: string) => {
  const response = await fetch(`${BASE_URL}/media/tag/${tag}`);
  return response.json();
};

//IMplement rest method to handle filter with query params on media
export const filterMediaByQuery = async (query: string) => {
  const response = await fetch(`${BASE_URL}/media/filter?${query}`);
  return response.json();
};

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
