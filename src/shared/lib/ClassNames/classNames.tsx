type Mode = Record<string, string | boolean>;

export function classNames(
  cls: string,
  modes: Mode,
  additionals: string[]
): string {
  return [
    cls,
    ...additionals,
    ...Object.entries(modes)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
}
