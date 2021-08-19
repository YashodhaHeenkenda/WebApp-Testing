import React from 'react'
import Swal from 'sweetalert2'
import { Redirect, Route } from 'react-router-dom';
import { BehaviorSubject } from 'rxjs'



function PrivateRoute(props){

    const { component: Component, ...rest } = props
    const currentUser = new BehaviorSubject(JSON.parse(localStorage.getItem('@user')))

    if(localStorage.getItem('@user') === null){
        
        Swal.fire({
            position: 'middle',
            icon: 'warning',
            title: 'You need to login first',
            showConfirmnButton: true,
            timer: 5000 
        })
        
        return(<Redirect to={'/Login'}/>)
            
    }else{
        
        if(currentUser.value.roleId != 1){
    
            Swal.fire({
                position: 'middle',
                icon: 'warning',
                title: 'Allow only for Admins',
                showConfirmnButton: true,
                timer: 5000 
            })
            
            return(<Redirect to={'/Login'}/>)

        }else{
            return(
                <Route
                    {...rest}
                    render={props => (
                        <Component {...props}/>
                    )}
                />
            )
        }
    }
}

export default PrivateRoute