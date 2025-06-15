import { ref } from 'vue';
import useDraggable from '../useDraggable';
import type { InteractContext } from '../useInteractContext';
import type {
    DraggableOptions,
    DragEvent,
} from '@interactjs/actions/drag/plugin';

describe('useDraggable', () => {
    let context: InteractContext;
    let draggableMock: jest.Mock;
    let setMock: jest.Mock;

    beforeEach(() => {
        draggableMock = jest.fn();
        setMock = jest.fn();
        context = {
            interactable: ref({
                draggable: draggableMock,
                set: setMock,
                target: document.createElement('div'),
            } as any),
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

    it('draggableOptions getter should return merged initial options', () => {
        const initialOpts: DraggableOptions = {
            inertia: { enabled: true },
            autoScroll: { enabled: true },
        };
        const { init, draggableOptions } = useDraggable(context, initialOpts);
        init();

        const currentOptions = draggableOptions.value;
        expect(currentOptions.inertia).toEqual(initialOpts.inertia);
        expect(currentOptions.autoScroll).toEqual(initialOpts.autoScroll);
        expect(currentOptions.listeners).toBeDefined();
        const listeners = currentOptions.listeners as any;
        expect(typeof listeners.start).toBe('function');
        expect(typeof listeners.move).toBe('function');
        expect(typeof listeners.end).toBe('function');
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

    it('draggableOptions setter should update options and call interactable.set correctly', () => {
        const { init, draggableOptions } = useDraggable(context, {
            lockAxis: 'x',
        });
        init();

        const newSpecificOptions: DraggableOptions = {
            inertia: { resistance: 10, enabled: true },
            autoScroll: {
                enabled: true,
                container: document.createElement('div'),
            },
            cursorChecker: () => 'grabbing',
        };

        draggableOptions.value = newSpecificOptions;

        expect(setMock).toHaveBeenCalledTimes(1);
        expect(setMock).toHaveBeenCalledWith({
            drag: expect.objectContaining({
                inertia: newSpecificOptions.inertia,
                autoScroll: newSpecificOptions.autoScroll,
                cursorChecker: newSpecificOptions.cursorChecker,
                listeners: expect.objectContaining({
                    start: expect.any(Function),
                    move: expect.any(Function),
                    end: expect.any(Function),
                }),
            }),
        });

        const updatedOptions = draggableOptions.value;
        expect(updatedOptions.inertia).toEqual(newSpecificOptions.inertia);
        expect(updatedOptions.autoScroll).toEqual(
            newSpecificOptions.autoScroll,
        );
        expect(updatedOptions.cursorChecker).toEqual(
            newSpecificOptions.cursorChecker,
        );
        expect(updatedOptions.lockAxis).toBeUndefined();
        expect(updatedOptions.listeners).toBeDefined();
        const listeners = updatedOptions.listeners as any;
        expect(typeof listeners.start).toBe('function');
    });

    it('init throws when context.interactable.value is null', () => {
        context.interactable.value = null;
        const { init } = useDraggable(context);
        expect(() => init()).toThrow('Interactable context is not set');
    });
});
