import interact from 'interactjs';
import { useDraggable } from '../../index';

jest.mock('interactjs', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    draggable: jest.fn().mockReturnValue({
      set: jest.fn(),
    }),
  }),
}));

describe('useDraggable', () => {
  const getMockEl = () => {
    const el = document.createElement('div');
    el.style.width = '100px';
    el.style.height = '100px';
    return el;
  }
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should be defined', () => {
    expect(useDraggable).toBeDefined();
  });

  it('should throw an error if no element is provided', () => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore-next-line
      useDraggable(null as any, {});
    } catch (e) {
      expect(e).toEqual(new Error('useDraggable requires an element to interact with'));
    }
  });

  it('should return the expected properties', () => {
    const draggable = useDraggable(getMockEl(), {});

    expect(draggable).toHaveProperty('elRef');
    expect(draggable).toHaveProperty('position');
    expect(draggable).toHaveProperty('draggableOptions');
    expect(draggable).toHaveProperty('isDragging');
  });

  it('should call interact with the expected arguments', () => {
    const el = getMockEl();
    const draggable = useDraggable(el, {});
    expect(interact).toHaveBeenCalledWith(el);
    expect(interact(el).draggable).toHaveBeenCalledWith(draggable.draggableOptions.value);
  });

  it('should set default options', () => {
    const { draggableOptions } = useDraggable(getMockEl(), {});
    expect(draggableOptions.value).toHaveProperty('listeners');
    expect(draggableOptions.value).toHaveProperty('listeners.start');
    expect(draggableOptions.value).toHaveProperty('listeners.move');
    expect(draggableOptions.value).toHaveProperty('listeners.end');
  });

  it('should set options passed in', () => {
    const start = jest.fn();
    const { draggableOptions } = useDraggable(getMockEl(), { listeners: { start } });

    expect(draggableOptions.value).toHaveProperty('listeners');
    expect(draggableOptions.value).toHaveProperty('listeners.start');
    expect(draggableOptions.value).not.toHaveProperty('listeners.move');
    expect(draggableOptions.value).not.toHaveProperty('listeners.end');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore-next-line
    draggableOptions.value.listeners.start();
    expect(start).toHaveBeenCalled();
  });

  it('should set options on update', () => {
    const el = getMockEl();
    const draggable = useDraggable(el, {});
    expect(interact).toHaveBeenCalledWith(el);
    expect(interact(el).draggable).toHaveBeenCalledWith(draggable.draggableOptions.value);
    const newOptions = { listeners: { start: jest.fn() } };
    draggable.draggableOptions.value = newOptions;
    expect(interact).toHaveBeenCalledWith(el);
    expect(interact(el).draggable).toHaveBeenCalledWith(draggable.draggableOptions.value);
    expect(interact(el).draggable(draggable.draggableOptions.value).set).toHaveBeenCalledWith(newOptions);
  });

  describe('Test draggable events', () => {
    it('should set postion on drag start', () => {
      const { draggableOptions, position, isDragging } = useDraggable(getMockEl(), {});
      expect(position.value).toEqual({ x: 0, y: 0 });
      expect(isDragging.value).toBe(false);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore-next-line
      draggableOptions.value.listeners.start({ pageX: 10, pageY: 20 });
      expect(position.value).toEqual({ x: 10, y: 20 });
      expect(isDragging.value).toBe(true);
    });

    it('should set position on drag move', () => {
      const el = getMockEl();
      const { draggableOptions, position, isDragging } = useDraggable(el, {});
      expect(position.value).toEqual({ x: 0, y: 0 });
      expect(isDragging.value).toBe(false);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore-next-line
      draggableOptions.value.listeners.start({ pageX: 10, pageY: 20 });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore-next-line
      draggableOptions.value.listeners.move({ dx: 30, dy: 40 });
      expect(position.value).toEqual({ x: 30, y: 40 });
      expect(isDragging.value).toBe(true);
      expect(el.style.transform).toBe('translate(30px, 40px)');
    });

    it('should set position on drag end', () => {
      const el = getMockEl();
      const { draggableOptions, position, isDragging } = useDraggable(el, {});
      expect(position.value).toEqual({ x: 0, y: 0 });
      expect(isDragging.value).toBe(false);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore-next-line
      draggableOptions.value.listeners.start({ pageX: 10, pageY: 20 });
      expect(isDragging.value).toBe(true);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore-next-line
      draggableOptions.value.listeners.move({ dx: 30, dy: 40 });
      expect(isDragging.value).toBe(true);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore-next-line
      draggableOptions.value.listeners.end({ dx: 31, dy: 41 });
      expect(position.value).toEqual({ x: 31, y: 41 });
      expect(isDragging.value).toBe(false);
      expect(el.style.transform).toBe('translate(30px, 40px)');
    });
  });
});
