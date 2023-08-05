import { VueInteract } from '../index';
import {createApp} from "vue";

jest.mock('interactjs');

describe('VueInteract', () => {
  it('should be defined', () => {
    expect(VueInteract).toBeDefined();
    expect(VueInteract.install).toBeDefined();
  });

  it('should provide interact', () => {
    const app = createApp({});
    app.provide = jest.fn();
    app.use(VueInteract, {
      installInject: true,
      installGlobalProperty: true,
    });
    expect(app.provide).toHaveBeenCalledWith('interact', expect.anything());
  });

  it('should regiter global property', () => {
    const app = createApp({});
    app.config.globalProperties = {};
    app.use(VueInteract, {
      installInject: true,
      installGlobalProperty: true,
    });
    expect(app.config.globalProperties.$interact).toBeDefined();
  });

  it('should not regiter global property', () => {
    const app = createApp({});
    app.config.globalProperties = {};
    app.use(VueInteract, {
      installInject: true,
      installGlobalProperty: false,
    });
    expect(app.config.globalProperties.$interact).toBeUndefined();
  });

  it('should not provide interact', () => {
    const app = createApp({});
    app.provide = jest.fn();
    app.use(VueInteract, {
      installInject: false,
      installGlobalProperty: false,
    });
    expect(app.provide).not.toHaveBeenCalled();
  });
});
