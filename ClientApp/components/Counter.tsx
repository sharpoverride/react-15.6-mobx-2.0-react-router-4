import * as React from 'react';

import { observer } from 'mobx-react';
import { observable, autorun } from 'mobx';

const abc = observable({
    title: 'Hello WOrld',
    tasks: []
});

autorun(() => {
    console.log(`title is `, abc.title);
    console.log(`tasks are `, (abc.tasks as any).toJS());
});


interface CounterState {
    currentCount: number;
}

@observer
export class Counter extends React.Component<any, CounterState> {
    constructor() {
        super();
        this.state = { currentCount: 0 };
    }

    public render() {
        return <div>
            <h1>Counter</h1>

            <p>This is a simple example of a React component.</p>
            <p>{abc.title}</p>

            <p>Current count: <strong>{this.state.currentCount}</strong></p>
            <ul>
                {(abc.tasks as any).toJS().map((index, task) => {
                    return <li key={index}>task</li>
                })}
            </ul>

            <button onClick={() => {
                this.incrementCounter();
                abc.tasks.push(`task ${this.state.currentCount}`);
                abc.title =`Created task ${this.state.currentCount}`; 
            }}>Increment</button>
        </div>;
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }
}
