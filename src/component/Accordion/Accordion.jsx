import React from 'react';

const Accordion = () => {
    return (
        <section className='my-12'>
            <h2 className='text-3xl text-center bg-purple-light font-black text-purple  border-2 rounded-lg mx-2 p-2'>React Fundamental Question</h2>

            <div className="">
                <div className="bg-white">
                    <div className=" flex flex-col justify-center mx-2 pt-3 md:p-8">

                        <div className="space-y-4">

                            {/* Question 1 */}
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary className="px-4 py-6 font-bold">
                                    1. What are differents between props vs state ??
                                </summary>

                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                    <span className='font-bold'>Answer:</span>
                                    The difference between props and state is given below: <br />
                                    <br />

                                    <span className='font-bold'>props: </span>
                                    props "short form Properties" are used pass data from a parent componnent to each child component. child component can not modify props, child component can only read it. the parent component update them and pass data in child component and child commponent do use with paranththis.

                                    <br /> <br />
                                    <span className='font-bold'>state: </span>
                                    state is used to manage data. if i want change value and re-render dynamically without page reload then state can help you. state has own "setState" method. when state component change react will re-render the component.
                                </p>
                            </details>

                            {/* Question 2 */}
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary className="px-4 py-6 font-bold">
                                    2. How does useState work??
                                </summary>

                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                    <span className='font-bold'>Answer: </span>
                                    "useState" is a hook in React. it is a functional component to manage state. the "useState" hook returns an array of two elements. The first element of array is current value and second is update the state value.
                                </p>
                            </details>

                            {/* Question 3 */}
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary className="px-4 py-6 font-bold">
                                    3. Purpose of useEffect other than fetching data
                                </summary>

                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                    <span className='font-bold'>Answer: </span> "useEffect" is a hook in React that allo you to perform side effects in component. "useeffect" takes two arguments. the first one is a function that contains the effect and second is and array of dependencies. the function is executed every render of component, and dependencies determine whether or not the function shoul be re-render.
                                </p>
                            </details>

                            {/* Question 4 */}
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary className="px-4 py-6 font-bold">
                                    4. How Does React work?
                                </summary>

                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                    <span className='font-bold'>Answer: </span>
                                    react is a polpular front-end javascript library for building complex user interfaces. Here's how react works: <br /> <br />

                                    <span className='font-bold'>1. Component-based: </span>
                                    React.js uses a component-based architecture where each part of the user interface is broken down into reusable components. Each component has its own state and properties. <br /> <br />

                                    <span className='font-bold'>2. Virtual DOM: </span>
                                    React.js uses a virtual DOM. which is a lightweight copy of the actual DOM. When a component's changes state, react updates the virtual DOM and checks for differences between the previous and current virtual DOM. <br /> <br />

                                    <span className='font-bold'>3. JSX: </span>
                                    JSX means Javascript XML. JSX is syntex extention that allows to write like HTML code in JS. JSX makes us easier to write and understanding code of anyone. <br /> <br />

                                    <span className='font-bold'>4. React Hooks: </span>
                                    React Hooks are function that allow to use state in component. Hooks simplify code and reuse child component.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accordion;