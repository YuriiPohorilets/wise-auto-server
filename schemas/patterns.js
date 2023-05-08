const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[^_.-]\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordPattern = /(?!\s)^[^ ]{7,32}$/;
const namePattern = /^[a-zA-zа-яіїєА-ЯІЇЄ ,.'-][^\_]+$/;
const phonePattern = /^\380\d{9}$/;

module.exports = {
  emailPattern,
  passwordPattern,
  namePattern,
  phonePattern,
};
