 const getName = (callback=> {
    let data ={};
    data = {...data, name: 'Koti'};
    callback(data, getAge);
})

 const getAge = ((data, callback)=> {
    data = {...data,  age: 35};
    callback(data, getDepartment);
})

 const getDepartment = ((data, callback)=>{
    data = {...data,  dept: 'IT'};
    callback(data, printInfo);
})

 const printInfo = ((data)=>{
    let para = document.createElement('h4');
    para.textContent += ` Name is:  ${data.name}, `;
    para.textContent += ` Age is:  ${data.age}, `;
    para.textContent += ` Dept is: ${data.dept}`;
    document.body.appendChild(para);  
})
getName(getAge);