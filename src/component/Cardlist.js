import Card from './Card'; 
const Cardlist = ({roboot}) =>{
return(
<div>
    {
    roboot.map((user,i)=>{
        return(
            <Card 
            key={i}
            id={roboot[i].id} 
            name={roboot[i].name} 
            email={roboot[i].email}
                     />  
    );
    }) 
    }  
</div>
);
 } 

export default Cardlist;