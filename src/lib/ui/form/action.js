
// Masking input with number
export const inum = (el, prop)=>{
  if(prop){
    const format = ()=>{

    }
    el.addEventListener('input', format)
    return {
      destroy(){
        el.removeEventListener('input', format, true)
      }
    }
  }
}

// Masking input with placeholder
export const imask = (el, prop) => {
  if(prop){
    let mask = prop.mask||'',
        char = prop.char||'_',
        allowed = prop.allowed||'a-z0-9';

    const unmasking=(val)=>{
      let maxlen = (mask.match(new RegExp('\\'+char,'g'))||[]).length
      return val.replace(new RegExp(`[^${allowed}]`,'g'),'')
                .substr(0,maxlen);
    }
    const masking=(val)=>{
      let id=-1;
      return mask.replace(new RegExp('\\'+char,'g'),()=>{
        id++;
        return val.charAt(id)||char
      });     
    }

    const blur = () => el.value === prop.mask && (el.value = '');
    const format = ()=>{
      let sel = [el.selectionStart, el.selectionEnd];
      let value = el.value;
      let unmask = unmasking(value);
      let mask = masking(unmask,sel);
      
      el.dataset.unmask = unmask;  
      el.dataset.mask = mask;  
      el.value = mask;
      
      sel = sel.map(s=>value.charAt(sel[0]-1)==el.value.charAt(sel[0]-1)?s:s+1)
      
      el.setSelectionRange(sel[0],sel[1])
    }
    
    if(el.value!=''){
      format()
    }
    
    el.addEventListener("input", format);
    el.addEventListener("focus", format);
    el.addEventListener("blur", blur);
    return {
      destroy() {
        el.removeEventListener("input", format, true);
        el.removeEventListener("focus", format, true);
        el.removeEventListener("blur", blur, true);
      }
    }
  }
}

// Masking currency format
export const icurrency = (el, currency) => {
  if(currency){
    const unmasking=(num, locale)=>{
      var thousandSeparator = Intl.NumberFormat(locale).format(11111).replace(/\p{Number}/gu, '');
      var decimalSeparator = Intl.NumberFormat(locale).format(1.1).replace(/\p{Number}/gu, '');
  
      return parseFloat(num
        .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
        .replace(new RegExp('\\' + decimalSeparator), '.')
      )||0;
    }
    const masking=(num,locale)=>{
      return Intl.NumberFormat(locale).format(num);
    }

    const format = ()=>{  
      let sel = [el.selectionStart, el.selectionEnd];
      let value = el.value;
      let unmask = unmasking(value, currency);
      let mask = masking(unmask, currency);

      el.dataset.unmask = unmask;  
      el.dataset.mask = mask;  
      el.value = mask;
      
      sel[0] = sel[0] + el.value.length - value.length;
      el.setSelectionRange(sel[0],sel[0])
    }
    el.addEventListener("input", format);
    return {
      destroy() {
        el.removeEventListener("input", format, true);
      }
    }
  }
}