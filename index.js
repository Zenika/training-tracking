const currentTime = new Date();
const startTime = new Date("2021-09-30 09:30:00 GMT+2:00");
const mealDuration = 1 * 3600 * 1000;
const mealTime = new Date("2021-09-30 12:30:00 GMT+2:00");

const elapsedTime =
  mealTime - currentTime >= 0
    ? currentTime - startTime
    : currentTime - startTime - mealDuration;

const availableTime = 7 * 3600 * 1000;
const pdfTotalPages = 272;

// A modifier pour mettre à jour la progression
const pdfCurrentPage = 121;

const pdfExpectedPage = Math.floor(
  (elapsedTime / availableTime) * pdfTotalPages
);

const formatMessage = (
  trainingStatus,
  pdfCurrentPage,
  pdfTotalPages,
  pdfExpectedPage
) => {
  const progressionPourcentage = Math.ceil(
    (pdfCurrentPage / pdfTotalPages) * 100
  );
  const progressionRelative = Math.abs(pdfCurrentPage - pdfExpectedPage);
  return `${progressionRelative} pages en ${trainingStatus} - page ${pdfCurrentPage}/${pdfTotalPages}(${progressionPourcentage}% progression) - on devrait être à la page ${pdfExpectedPage}/${pdfTotalPages}`;
};

const assertTrainingIsOnTime = (pdfExpectedPage, pdfCurrentPage) =>
  pdfCurrentPage > pdfExpectedPage;

const isTrainingOnTime = assertTrainingIsOnTime(
  pdfExpectedPage,
  pdfCurrentPage
);

const message = isTrainingOnTime ? "AVANCE 🐇!" : "RETARD 🐌!";

console.log(
  formatMessage(message, pdfCurrentPage, pdfTotalPages, pdfExpectedPage)
);
