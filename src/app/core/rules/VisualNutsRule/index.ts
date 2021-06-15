import RuleInterface from '../../interfaces/rules.interface';

export class VisualNutsRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 3 === 0 && number % 5 === 0;
  }

  getReplacement(): string {
    return 'VisualNuts';
  }
}
