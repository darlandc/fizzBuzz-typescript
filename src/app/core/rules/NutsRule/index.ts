import RuleInterface from '../../interfaces/rules.interface';

export class NutsRule implements RuleInterface {
  matches(number: number): boolean {
    return number % 5 === 0;
  }

  getReplacement(): string {
    return 'Nuts';
  }
}
