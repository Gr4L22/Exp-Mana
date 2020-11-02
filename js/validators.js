function nameVerification(fullName) {
  return /^(?=.{6,})([a-zA-Z]+\s{1}[a-zA-Z]+)$/.test(fullName);
}
function mailVerification(mail) {
  return /^[a-z0-9A-Z._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/.test(mail);
}
function passVerification(pass) {
  return /^(?=.{8,})([a-zA-Z0-9])+$/.test(pass);
}
function ageVerification(age) {
  return age % 1 == 0 && age >= 18;
}
function phoneVerification(phone) {
  return /^(?=.{7,})([0-9])+$/.test(phone);
}
function direcVerification(direc) {
  return /^(?=.{5,})([a-zA-Z0-9]+\s{1}[0-9]+)$/.test(direc);
}
function minLength(string, n) {
  return string.length >= n;
}
function idVerification(ident) {
  return /^[0-9]{7,8}$/.test(ident);
}
function dataValidator(data) {
  return (
    data.name &&
    data.email &&
    data.pass &&
    data.rePass &&
    data.age &&
    data.phone &&
    data.direc &&
    data.city &&
    data.postCode &&
    data.id
  );
}
