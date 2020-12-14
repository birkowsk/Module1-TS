// Stwórz funkcję paginateArray
// paginateArray(data,settings)

// która przyjmuję array do paginacji dataEntries oraz settings o kluczach { actualPageIdx, entriesOnPage }
// - actualPageIdx to index wybranej strony
// - entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// który zwraca entriesOnSelectedPage:
// - entriesOnSelectedPage to array z odpowiednią ilością elementów z danej strony

const data: number[] = new Array(30).fill(30).map((_, i) => i + 1);

interface typeSettings {
  actualPageIdx: number;
  elementsOnPage: number;
}

const maxElementsOnPage = 10;

const paginateArray = <T>(dataEntries: T[], settings: typeSettings): T[] => {
  if (settings.elementsOnPage <= 0 || settings.actualPageIdx <= 0) {
    throw new Error('Settings keys must be postive numbers');
  }

  if (settings.elementsOnPage > maxElementsOnPage) {
    throw new Error(`This page has got only ${maxElementsOnPage} elements`);
  }

  const outOfScopeIndex = (settings.actualPageIdx - 1) * maxElementsOnPage >= dataEntries.length;

  if (outOfScopeIndex) {
    throw new Error('page index does not exist');
  }

  const startSlice = (settings.actualPageIdx - 1) * maxElementsOnPage;
  const endSlice = (settings.actualPageIdx - 1) * maxElementsOnPage + settings.elementsOnPage;

  const entriesOnSelectedPage = dataEntries.slice(startSlice, endSlice);
  return entriesOnSelectedPage;
};

const pageSettings: typeSettings = {
  actualPageIdx: 3,
  elementsOnPage: 11
};

export { data, paginateArray, pageSettings };
