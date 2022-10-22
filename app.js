input="The dog is Walking fast"
dictionary=['walking','fast']

newInput=[];

function check(c1,c2)
{
	ok=0;
	if(c1.toLowerCase()===c2.toLocaleLowerCase())
	ok=1;
	return ok;
}

function hash(input, dictionary){
		if(typeof input !=="string"){
			throw new Error("Input should be a string");
		}
	
	dictionary.forEach(element => {
			if(typeof element!=="string")
			throw new Error("Invalid array format");
			
		});

	inputArray=input.split(' ');
	
	inputArray.forEach(a=>{

		let ok=0;
		dictionary.forEach(b=> {

			if(check(a,b)===1)
			{
				c=[]
				c.push(a[0]);
				ok=1;
				for(let i=1; i<a.length-1;i++)
				{
					c.push('#')
				}
				c.push(a[a.length-1])
				cstring=c.join("");
				newInput.push(cstring);

			}

		})

		if(ok===0)
		newInput.push(a);
		
		

	})

	return newInput.join(" ");
	
}

console.log(hash(input, dictionary))



const app = {
	hash
};

module.exports = app;