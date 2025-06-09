import { ref } from 'vue';
import useDraggable from '../useDraggable';
import type { InteractContext } from '../useInteractContext';

describe('useDraggable', () => {
    let context: InteractContext;
    let draggableMock: jest.Mock;

    beforeEach(() => {
        draggableMock = jest.fn();
        context = {
            interactable: ref({ draggable: draggableMock } as any),
            interact: {} as any,
            position: ref({ x: 0, y: 0 }),
            size: ref({ width: 0, height: 0 }),
        };
    });

    it('init should call draggable on interactable', () => {
        const { init } = useDraggable(context);
        init();
        expect(draggableMock).toHaveBeenCalledTimes(1);
        const options = draggableMock.mock.calls[0][0];
        expect(options.listeners).toBeDefined();
        expect(typeof options.listeners.start).toBe('function');
        expect(typeof options.listeners.move).toBe('function');
        expect(typeof options.listeners.end).toBe('function');
    });

    it('should handle drag events correctly', () => {
        const { init, isDragging, position } = useDraggable(context);
        init();
        const options = draggableMock.mock.calls[0][0];
        const event = { dx: 5, dy: 10 } as any;

        options.listeners.start(event);
        expect(isDragging.value).toBe(true);

        options.listeners.move(event);
        expect(position.value).toEqual({ x: 5, y: 10 });

        options.listeners.move({ dx: -2, dy: -3 } as any);
        expect(position.value).toEqual({ x: 3, y: 7 });

        options.listeners.end(event);
        expect(isDragging.value).toBe(false);
    });

    it('should call interactable.set when draggableOptions are set', () => {
        const setMock = jest.fn();
        context.interactable.value = {
            draggable: draggableMock,
            set: setMock,
        } as any;

        const { draggableOptions } = useDraggable(context);

        const newOptions = { enabled: false };
        draggableOptions.value = newOptions;

        expect(setMock).toHaveBeenCalledTimes(1);
        expect(setMock).toHaveBeenCalledWith(newOptions);
    });

    it('init throws when context.interactable.value is null', () => {
        context.interactable.value = null;
        const { init } = useDraggable(context);
        expect(() => init()).toThrow('Interactable context is not set');
    });
});
