export interface InterpolateOptions {
  open?: string;
  close?: string;
  missing?: "keep" | "empty" | "throw";
}
export function interpolate(template: string, values: Record<string, unknown>, options?: InterpolateOptions): string;
