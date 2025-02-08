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

//Write method to add media
export const addMedia = async (media: any) => {
  try {
    console.log(media);
    return await prisma.mediaLibraries.create({
      data: media,
    });
  } catch (error) {
    console.error("Error adding media:", error);
    return null;
  }
};

//Write method to update media
export const updateMedia = async (id: any, media: any) => {
  try {
    return await prisma.mediaLibraries.update({
      where: {
        id: parseInt(id),
      },
      data: media,
    });
  } catch (error) {
    console.error("Error updating media:", error);
    return null;
  }
};

//Write method to filter media by tag
export const getMediaByTag = async (tag: any) => {
  try {
    return await prisma.mediaLibraries.findMany({
      where: {
        tags: {
          hasSome: tag,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching media by tag:", error);
    return null;
  }
};

//Implement method to filter media by query
export const getMediaByQuery = async (whereClause: any) => {
  try {
    return await prisma.mediaLibraries.findMany({
      where: whereClause,
    });
  } catch (error) {
    console.error("Error fetching media by query:", error);
    return null;
  }
};

//Write method to
