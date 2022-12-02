import * as fs from 'fs';
import NotFoundError from './not-found-error';

export class FileReader {
  static async read(path: string) {
    try {
      return await fs.promises.readFile(path, { encoding: 'utf-8' });
    } catch (err) {
      throw new NotFoundError(path);
    }
  }
}
