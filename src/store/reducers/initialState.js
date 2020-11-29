/*
 * Store struct
 * {
 *   boards: [],
 *   currentBoard: {
 *     title: string,
 *     color: string,
 *     completedTasks: array,
 *     unfulfilledTasks: array,
 *     days: {
 *         Monday: array,
 *         Tuesday: array,
 *         Wednesday: array,
 *         Thursday: array,
 *         Friday: array,
 *         Saturday: array,
 *         Sunday: array,
 *     },
 *     works: {
 *       ToDo: array,
 *       Doing: array,
 *       Done: array,
 *     },
 *   }
 * }
 */

export default {
  boards: [],
  currentBoard: undefined,
};
