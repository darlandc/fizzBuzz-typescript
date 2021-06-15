import { Component, VERSION } from '@angular/core';
import { VisualNutsRule } from './core/rules/VisualNutsRule/index';
import { VisualRule } from './core/rules/VisualRule/index';
import { NutsRule } from './core/rules/NutsRule/index';
import { RulesManager } from './core/services/rules.manager';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  result = '';

  constructor(private manager: RulesManager) {
    this.manager.addRule(new VisualNutsRule());
    this.manager.addRule(new VisualRule());
    this.manager.addRule(new NutsRule());
  }

  ngOnInit() {
    const result = this.manager.generate(100);
    this.result = result.join(', ');
  }
}
