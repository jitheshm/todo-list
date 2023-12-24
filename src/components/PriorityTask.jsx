/* eslint-disable react/no-unescaped-entities */

import { useContext } from "react"
import TaskCard from "./TaskCard"
import { TaskContext } from "../App"


function PriorityTask({ priority, page }) {
    const { task, setTask } = useContext(TaskContext)


    let newDate = new Date()
     console.log(newDate);
    let date = newDate.getDate();
    let month = newDate.toLocaleString('default', { month: 'numeric' });
    let year = newDate.getFullYear();
    let curDate = `${year}-${month}-${date}`
     console.log(curDate);



    return (
        <>
            <div className="section">
                <div>
                    <h5><span className="badge badge-pill bg-warning">{priority} Priority</span></h5>
                </div>
                <div className="row p-4">
                    {
                        task.map((ele, index) => {
                            // console.log(ele.date);
                            if (page === 'Today') {
                                if (ele.priority === priority && ele.date === curDate && ele.status === 'Pending')
                                    return <TaskCard {...ele} index={index} />
                                else
                                    return null
                            } else if (page === 'Upcoming') {
                                
                                if (ele.priority === priority && ele.status === 'Pending' && new Date(curDate) < new Date(ele.date))
                                    return <TaskCard {...ele} index={index} />
                                else
                                    return null
                            } else if (page === 'Pending') {
                               
                                if (ele.priority === priority && ele.status === 'Pending' && new Date(curDate) > new Date(ele.date))
                                    return <TaskCard {...ele} index={index} />
                                else
                                    return null
                            }else if(page==='Completed'){
                                if (ele.priority === priority && ele.status === 'Completed')
                                    return <TaskCard {...ele} index={index} page={page} />
                                else
                                    return null
                            }
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default PriorityTask