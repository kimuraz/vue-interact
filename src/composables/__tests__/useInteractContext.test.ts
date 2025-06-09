import { ref, nextTick } from 'vue';
import useInteractContext from '../useInteractContext';
import interact from 'interactjs';

jest.mock('interactjs', () => {
  const mockInteractable = {
    draggable: jest.fn().mockReturnThis(),
    resizable: jest.fn().mockReturnThis(),
    gesturable: jest.fn().mockReturnThis(),
    dropzone: jest.fn().mockReturnThis(),
    pointerEvents: jest.fn().mockReturnThis(),
    on: jest.fn().mockReturnThis(),
    off: jest.fn().mockReturnThis(),
    set: jest.fn().mockReturnThis(),
    unset: jest.fn().mockReturnThis(),
    styleCursor: jest.fn().mockReturnThis(),
    target: document.createElement('div'),
  };
  const mockInteract = jest.fn(() => mockInteractable);
  // @ts-ignore
  mockInteract.mockInteractable = mockInteractable;
  return mockInteract;
});

describe('useInteractContext', () => {
  let elRef: any;
  const mockInteractable = (interact as any).mockInteractable;

  beforeEach(() => {
    (interact as unknown as jest.Mock).mockClear();
    Object.values(mockInteractable).forEach(mockFn => {
      if (jest.isMockFunction(mockFn)) {
        mockFn.mockClear();
      }
    });
    mockInteractable.target = document.createElement('div');
    elRef = ref(null);
  });

  it('should initialize with default values', () => {
    const { interactable, position, size } = useInteractContext(elRef);
    expect(interactable.value).toBeNull();
    expect(position.value).toEqual({ x: 0, y: 0 });
    expect(size.value).toEqual({ width: 0, height: 0 });
  });

  it('should create interactable when elRef is set', async () => {
    const { interactable } = useInteractContext(elRef);
    const div = document.createElement('div');
    elRef.value = div;
    await nextTick();
    expect(interact).toHaveBeenCalledWith(div);
    expect(interactable.value).toStrictEqual(mockInteractable);
  });

  it('should reset position when elRef changes', async () => {
    const { position } = useInteractContext(elRef);
    position.value = { x: 10, y: 20 };
    const div = document.createElement('div');
    elRef.value = div;
    await nextTick();
    expect(position.value).toEqual({ x: 0, y: 0 });
  });

  it('should update element style when position changes', async () => {
    const { interactable, position } = useInteractContext(elRef);
    const div = document.createElement('div');
    elRef.value = div;
    await nextTick();

    position.value = { x: 100, y: 200 };
    await nextTick();
    expect((interactable.value?.target as HTMLElement).style.transform).toBe('translate(100px, 200px)');
  });

  it('should update element style when size changes', async () => {
    const { interactable, size } = useInteractContext(elRef);
    const div = document.createElement('div');
    elRef.value = div;
    await nextTick();

    size.value = { width: 300, height: 400 };
    await nextTick();
    expect((interactable.value?.target as HTMLElement).style.width).toBe('300px');
    expect((interactable.value?.target as HTMLElement).style.height).toBe('400px');
  });

  it('should not create interactable if elRef is initially null and remains null', () => {
    const { interactable } = useInteractContext(elRef);
    expect(interact).not.toHaveBeenCalled();
    expect(interactable.value).toBeNull();
  });

  it('should handle elRef becoming null after being set (cleanup or component unmount scenario)', async () => {
    const { interactable, position } = useInteractContext(elRef);
    const div = document.createElement('div');
    elRef.value = div;
    await nextTick();
    expect(interactable.value).not.toBeNull();

    elRef.value = null;
    await nextTick();
    (interact as unknown as jest.Mock).mockClear();
    await nextTick();
    expect(interact).not.toHaveBeenCalled();
  });
});
