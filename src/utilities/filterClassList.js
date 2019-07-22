export default function (classList) {
  return classList.filter(className => (
    typeof className === 'object'
      ? Object.keys(className)[0] !== 'undefined'
      : true
  ));
}
