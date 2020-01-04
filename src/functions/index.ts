export function type_mismatch(type_name1: string, type_name2: string): string {
  return `Type mismatch: type ${type_name1} cannot convert to ${type_name2}`;
}

export function out_of_range(
  range: [number, number],
  type_name: string,
  value: number
): string {
  return `Out of range: cannot assign value ${value} for type ${type_name}.
   ${type_name} must be in limit between ${range[0]}..${range[1]}.`;
}
