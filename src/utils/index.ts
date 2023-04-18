export function toFarsiNumber(n: number) {
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  return n
    .toString()
    .split('')
    .map((x: string) => farsiDigits[+x])
    .join('');
}


const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g]
const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g]
export const convertEnglishToPersion = (str: string) => {
  if (typeof str === 'string') {
    for (var i = 0; i < 10; i++) {
      //@ts-ignore
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
};