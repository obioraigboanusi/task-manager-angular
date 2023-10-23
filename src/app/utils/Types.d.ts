interface Task {
  id?: string | number;
  date: Date;
  title: string;
  description: string;
  progress?: string;
  members?: Array<TaskMember>;
  dateStarted?: Date;
}

type TaskMember = string;
