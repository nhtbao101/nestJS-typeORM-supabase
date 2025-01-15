/**
 *
 * @param {string} str 'Nguyễn Văn A'
 * @return {string} 'nguyen-van-a'
 */
export const generateSlug = (str: string): string => {
  str = str.toLowerCase();
  str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  str = str.replace(/[đĐ]/g, 'd');
  str = str.replace(/\/+/g, '-');
  str = str.replace(/([^0-9a-z-\s])/g, '');
  str = str.replace(/(\s+)/g, '-');
  str = str.replace(/-+/g, '-');
  str = str.replace(/^-+|-+$/g, '');
  return str;
};
