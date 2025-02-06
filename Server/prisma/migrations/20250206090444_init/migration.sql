-- CreateTable
CREATE TABLE "MediaLibraries" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "tags" JSONB NOT NULL DEFAULT '[]',
    "customProps" JSONB NOT NULL DEFAULT '{}',
    "thumbnail" TEXT NOT NULL DEFAULT 'https://via.placeholder.com/150',
    "status" TEXT NOT NULL,
    "publishDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MediaLibraries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MediaLibraries_title_key" ON "MediaLibraries"("title");
