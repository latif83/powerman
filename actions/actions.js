"use server"

import fs from "fs";
import path from "path";

export const addEvent = (newTask)=>{
    // Read existing tasks from file
  const filePath = path.join(process.cwd(), 'tasks.json');
  const existingTasks = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  // Append new task to existing tasks
  existingTasks.tasks.push(newTask);

  // Write updated tasks back to file
  fs.writeFileSync(filePath, JSON.stringify(existingTasks, null, 2));
  return {status:true,msg:"Event added successfully"}
}