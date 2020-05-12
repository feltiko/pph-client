import StringProcessor from './StringProcessor';

export default class UrlGenerator {
  static generate(text: string): string {
    const url = text
      .toLowerCase()
      .trim()
      .replace(/[.,\/#!$?%\^&\*;:{}=\_`~()]/g, '')
      .replace(/\s{2,}/g, '')
      .replace(/ /g, '-');

    return StringProcessor.stripTags(url);
  }
}
