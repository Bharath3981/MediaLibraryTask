import prisma from "../client";

//Write method to get all media
export const getMedia = async () => {
  return await prisma.mediaLibraries.findMany();
};

//Write method to get media by id
export const getMediaById = async (id: any) => {
  try {
    return await prisma.mediaLibraries.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    console.error("Error fetching media by ID:", error);
    return null;
  }
};
