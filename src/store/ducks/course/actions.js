
export function toggleLesson(module, lesson) {
    return {
        type: 'TOGGLE_LESSON', // ação a ser realizada (UNICA)
        module,
        lesson,
    };
}