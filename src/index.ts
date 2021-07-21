/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
class DeDuplicate {
  private solveElements = (array: any[]) => {
    const newArray = array.map((el:any) => {
      if (typeof el === 'number') {
        return el;
      }

      if (typeof el === 'string') {
        return el.toLowerCase();
      }
    });

    return newArray;
  };

  public simpleArray = (array:any[]) => {
    const solvedElements: any[] = this.solveElements(array);

    const newSet:any = new Set(solvedElements);

    return Array.from(newSet.values());
  };

  public complexArray = (array:any[], key:string) => {
    const seen = new Set();
    const newId = key;

    if (typeof array[0][newId] === 'undefined') {
      return 'The key you sent not exist in the object';
    }

    const filteredArray = array.filter((el:any) => {
      const duplicate = seen.has(el[newId]);

      seen.add(el[newId]);

      return !duplicate;
    });

    return filteredArray;
  };
}

export default DeDuplicate;
