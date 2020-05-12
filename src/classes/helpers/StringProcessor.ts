export default class StringProcessor {
  static stripTags(str: string): string {
    return str.replace(/<\/?[^>]+(>|$)/g, '').trim();
  }
}
