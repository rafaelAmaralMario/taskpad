class TaskService {
  static load () {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(JSON.parse(window.localStorage.getItem('tasks')));
        }, 3000);
      } catch (error) {
        reject(null);
      }
    });
  }

  static save (taskList) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        window.localStorage.setItem('tasks', JSON.stringify(taskList));
        resolve(true);
      }, 3000);
    });
  }
}

export default TaskService;
