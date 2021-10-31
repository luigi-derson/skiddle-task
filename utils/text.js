export function truncate(source, size, text = "...") {
  return source.length > size ? source.slice(0, size - 1) + text : source;
}
