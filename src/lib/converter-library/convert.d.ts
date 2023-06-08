declare module "convert" {
  interface ConvertFunction {
    (value?: number): ConvertChain;
    measures(): string[];
    (): ConvertChain;
  }

  interface ConvertChain {
    from(unit: string): ConvertChain;
    to(unit: string): number;
    toBest(options?: { exclude?: string[]; cutOffNumber?: number }): number;
    possibilities(measure?: string): string[];
    describe(unit: string): ConversionDescription;
    list(measure?: string): ConversionDescription[];
  }

  interface ConversionDescription {
    abbr: string;
    measure: string;
    system: string;
    singular: string;
    plural: string;
  }

  const convert: ConvertFunction;
  export default convert;
}
