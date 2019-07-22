/**
 * Generic event handler for the saturation, hue and alpha handlers.
 *
 * @param {Event} e
 * @param {Function} callback
 * @returns {void}
 */
export function whileMouseMove(e, callback) {
  const onMouseUp = () => {
    document.removeEventListener('mousemove', callback);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', callback);
  document.addEventListener('mouseup', onMouseUp);

  callback(e);
}
