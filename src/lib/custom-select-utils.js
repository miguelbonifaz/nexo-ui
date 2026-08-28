export function toSelectedValues(value, multiple) {
  if (multiple) return Array.isArray(value) ? value : value ? [value] : [];
  return Array.isArray(value) ? value.slice(0, 1) : value ? [value] : [];
}

export function firstEnabledIndex(options) {
  return options.findIndex((option) => !option.disabled);
}

export function nextEnabledIndex(options, currentIndex, direction) {
  if (!options.length) return -1;

  const startIndex = currentIndex >= 0 ? currentIndex : direction > 0 ? -1 : options.length;

  for (let step = 1; step <= options.length; step += 1) {
    const index = (startIndex + (direction * step) + options.length) % options.length;
    if (!options[index].disabled) return index;
  }

  return currentIndex;
}
