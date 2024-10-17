export function checkBody(body: string, keys: string[]) {
  return keys.every((key) => Object.keys(body).includes(key));
}
// module.exports = { checkBody };
