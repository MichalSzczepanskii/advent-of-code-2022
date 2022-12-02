export default class NotFoundError extends Error {
  constructor(file: string) {
    super(`File: ${file} was not found.`);
  }
}
