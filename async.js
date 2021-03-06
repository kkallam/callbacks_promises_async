const getName = (() => {
    return new Promise((resolve, reject)=>{
        let data ={};
        data = {...data, name: 'Smitha'};
        resolve(data);
    }) 
})

const getAge = ((data)=> {
    return new Promise((resolve, reject)=> {
        data = {...data,  age: 32};
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


async function init(){
    try {
        let useruserName = await getName();
    let userAge = await getAge(useruserName);
    let userDept = await getDepartment(userAge);
    await printInfo(userDept);
    } catch(error) {
        console.log('Error ..' + error);
    }
}
init();