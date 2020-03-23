import React, {useState} from 'react';

export function AddTask(props: { onsubmit: (task: string) => void }) {
    const [task, setTask] = useState("");
    return (
        <div className="container col-sm-8 col-sm-offset-2" id="add-task-container">
            <div className="card">
                <div className="card-header">
                    Add New Task
                </div>
                <div className="card-body">
                    <form className="form-inline">
                        <div className="form-group mx-sm-3 mb-2">
                            <label htmlFor="inputTask" className="sr-only">Task</label>
                            <input type="text" value={task} className="form-control" id="inputTask" placeholder="Write your task..."
                                   onChange={(e) => setTask(e.target.value)}/>
                        </div>
                        <button type="button" className="btn btn-primary mb-2" onClick={(e) => {
                            props.onsubmit(task);
                            setTask("")
                        }}>ADD
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
