// Test resizable events
import useResizable from '../useResizable';
import interact from 'interactjs';

jest.mock('interactjs', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    resizable: jest.fn().mockReturnValue({
      set: jest.fn(),
    }),
    })
}));


describe('useResizable', () => {
  const getMockEl = () => {
    const el = document.createElement('div');
    el.style.width = '100px';
    el.style.height = '100px';
    return el;
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(useResizable).toBeDefined();
  });

  it('should return the expected properties', () => {
    const resizable = useResizable(getMockEl(), {});

    expect(resizable).toHaveProperty('elRef');
    expect(resizable).toHaveProperty('resizeData');
    expect(resizable).toHaveProperty('resizableOptions');
    expect(resizable).toHaveProperty('isResizing');
  });

  it('should throw an error if no element is provided', () => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore-next-line
      useResizable(null as any, {});
    } catch (e) {
      expect(e).toEqual(new Error('useResizable requires an element to interact with'));
    }
  });

   it('should call interact with the expected arguments', () => {
    const el = getMockEl();
    const resizable = useResizable(el, {});
    expect(interact).toHaveBeenCalledWith(el);
    expect(interact(el).resizable).toHaveBeenCalledWith(resizable.resizableOptions.value);
   });

    it('should set default options', () => {
      const { resizableOptions } = useResizable(getMockEl(), {});
      expect(resizableOptions.value).toHaveProperty('edges');
      expect(resizableOptions.value).toHaveProperty('edges.left');
      expect(resizableOptions.value).toHaveProperty('edges.right');
      expect(resizableOptions.value).toHaveProperty('edges.bottom');
      expect(resizableOptions.value).toHaveProperty('edges.top');
      expect(resizableOptions.value).toHaveProperty('listeners');
      expect(resizableOptions.value).toHaveProperty('listeners.start');
      expect(resizableOptions.value).toHaveProperty('listeners.move');
      expect(resizableOptions.value).toHaveProperty('listeners.end');
    });

    it('should have default values for initial edges', () => {
      const { resizableOptions } = useResizable(getMockEl(), {});
      expect(resizableOptions.value.edges).toEqual({ left: true, right: true, bottom: true, top: true });
    });

    it('should set options passed in', () => {
      const start = jest.fn();
      const edges = { left: false, right: false, bottom: false, top: false };
      const { resizableOptions } = useResizable(getMockEl(), { listeners: { start }, edges });
      expect(resizableOptions.value).toHaveProperty('listeners');
      expect(resizableOptions.value).toHaveProperty('listeners.start');
      expect(resizableOptions.value).not.toHaveProperty('listeners.move');
      expect(resizableOptions.value).not.toHaveProperty('listeners.end');
      expect(resizableOptions.value).toHaveProperty('edges');
      expect(resizableOptions.value.edges).toEqual(edges);
    });

    it('should set width and height as elements dimensions', () => {
      const el = getMockEl();
      jest.spyOn(el, 'getBoundingClientRect').mockReturnValue({ width: 100, height: 100 } as DOMRect);
      const { resizeData, elRef } = useResizable(el, {});
      expect(elRef.value).toBe(el);
      expect(resizeData.value.width).toBe(100);
      expect(resizeData.value.height).toBe(100);
    });


    it('should set options on update', () => {
      const el = getMockEl();
      const resizable = useResizable(el, {});
      expect(interact).toHaveBeenCalledWith(el);
      expect(interact(el).resizable).toHaveBeenCalledWith(resizable.resizableOptions.value);
      const newOptions = { listeners: { start: jest.fn() }, edges: { left: false, right: false, bottom: false, top: false } };
      resizable.resizableOptions.value = newOptions;
      expect(interact).toHaveBeenCalledWith(el);
      expect(interact(el).resizable).toHaveBeenCalledWith(resizable.resizableOptions.value);
      expect(interact(el).resizable(resizable.resizableOptions.value).set).toHaveBeenCalledWith(newOptions);
    });


    describe('Test resizable events', () => {
      it('should set resizeData on resize start', () => {
        const { resizableOptions, resizeData, isResizing } = useResizable(getMockEl(), {});
        expect(resizeData.value).toEqual({ width: 0, height: 0, x: 0, y: 0 });
        expect(isResizing.value).toBe(false);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore-next-line
        resizableOptions.value.listeners.start({ rect: { width: 10, height: 20 }, deltaRect: { left: 5, top: 10 } });
        expect(resizeData.value).toEqual({ width: 10, height: 20, x: 5, y: 10 });
        expect(isResizing.value).toBe(true);
      });

      it('should set resizeData with deltaRect null and dataset undefined', () => {
        const el = getMockEl();
        el.dataset.x = undefined;
        el.dataset.y = undefined;
        const { resizableOptions, resizeData } = useResizable(el, {});
        expect(resizeData.value).toEqual({ width: 0, height: 0, x: 0, y: 0 });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore-next-line
        resizableOptions.value.listeners.start({ rect: { width: 10, height: 20 }, deltaRect: null });
        expect(resizeData.value).toEqual({ width: 10, height: 20, x: 0, y: 0 });
      });

      it('should set resizeData on resize move', () => {
        const el = getMockEl();
        const { resizableOptions, resizeData, isResizing } = useResizable(el, {});
        expect(resizeData.value).toEqual({ width: 0, height: 0, x: 0, y: 0 });
        expect(isResizing.value).toBe(false);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore-next-line
        resizableOptions.value.listeners.start({ target: el, rect: { width: 10, height: 20 }, deltaRect: { left: 5, top: 10 } });
        expect(resizeData.value).toEqual({ width: 10, height: 20, x: 5, y: 10 });
        expect(isResizing.value).toBe(true);
        expect(el.style.width).toBe('100px');
        expect(el.style.height).toBe('100px');
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore-next-line
        resizableOptions.value.listeners.move({ target: el, rect: { width: 20, height: 30 }, deltaRect: { left: 10, top: 20 } });
        expect(resizeData.value).toEqual({ width: 20, height: 30, x: 15, y: 30 });
        expect(isResizing.value).toBe(true);
        expect(el.style.width).toBe('20px');
        expect(el.style.height).toBe('30px');
        expect(el.style.transform).toBe('translate(5px, 10px)');
        expect(el.dataset.x).toBe('5');
        expect(el.dataset.y).toBe('10');
      });

      it('should set resizeData on resize end', () => {
        const el = getMockEl();
        const { resizableOptions, resizeData, isResizing } = useResizable(el, {});
        expect(resizeData.value).toEqual({ width: 0, height: 0, x: 0, y: 0 });
        expect(isResizing.value).toBe(false);
        const startEvent = {
          rect: { width: 10, height: 20 },
          deltaRect: { left: 5, top: 10 },
          target: el,
        };
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore-next-line
        resizableOptions.value.listeners.start(startEvent);
        expect(resizeData.value).toEqual({ width: 10, height: 20, x: 5, y: 10 });
        expect(isResizing.value).toBe(true);

        const endEvent = {
          rect: { width: 20, height: 30 },
          deltaRect: { left: 10, top: 20 },
          target: el,
        };
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore-next-line
        resizableOptions.value.listeners.end(endEvent);
        expect(resizeData.value).toEqual({ width: 20, height: 30, x: 10, y: 20 });
        expect(isResizing.value).toBe(false);
      });
    });
});
