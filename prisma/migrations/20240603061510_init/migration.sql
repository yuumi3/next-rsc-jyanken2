-- CreateTable
CREATE TABLE "Scores" (
    "id" SERIAL NOT NULL,
    "human" INTEGER NOT NULL,
    "computer" INTEGER NOT NULL,
    "judgment" INTEGER NOT NULL,

    CONSTRAINT "Scores_pkey" PRIMARY KEY ("id")
);
