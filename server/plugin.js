import {BasePlugin} from '@opentelemetry/core'

export class MetorPlugin extends BasePlugin {
  constructor() {
      super();
      this.moduleName = 'meteor-plugin';
  }

  patch() {
      shimmer.wrap(this._moduleExports, 'name', orig => () => 'patched-' + orig.apply());
      shimmer.wrap(this._moduleExports, 'value', orig => () => orig.apply() + 1);
      return this._moduleExports;
  }

  unpatch() {
      shimmer.unwrap(this._moduleExports, 'name');
      shimmer.unwrap(this._moduleExports, 'value');
  }
}


export const plugin = new MetorPlugin();