export function toFarsiNumber(n:number) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n
      .toString()
      .split('')
      .map((x:string)=> farsiDigits[+x])
      .join('');
  }