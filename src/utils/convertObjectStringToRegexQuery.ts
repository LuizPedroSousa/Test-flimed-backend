
/** 
 * This converts a object string to mongodb $regex method
 * @example convertObjectStringToRegex('i', { name: "teste" }) 
 * // { name: { '$regex': /teste/i} }
*/
function convertObjectStringToRegex(flags: string, ...sources: any) {
  const result: any = {};

  for (const source of sources) {
    for (const key of Object.keys(source)) {
      const val = source[key];
      if (typeof val === "string") {
        result[key] = { $regex: new RegExp(val, flags) };
      }
    }
  }

  return result;
}

export { convertObjectStringToRegex };
