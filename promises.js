const getName = (() => {
    return new Promise((resolve, reject)=>{
        let data ={};
        data = {...data, name: 'Koti'};
        resolve(data);
    }) 
})

const getAge = ((data)=> {
    return new Promise((resolve, reject)=> {
        data = {...data,  age: 35};
        resolve(data);
    })
})

const getDepartment = ((data)=> {
    return new Promise((resolve, reject)=> {
        data = {...data,  dept: 'IT'};
        resolve(data);
    })
})

const printInfo = ((data)=> {
    let para = document.createElement('h4');
    para.textContent += ` Name is:  ${data.name}, `;
    para.textContent += ` Age is:  ${data.age}, `;
    para.textContent += ` Dept is: ${data.dept}`;
    document.body.appendChild(para); 
});

getName().then(getAge).then(getDepartment).then(printInfo);