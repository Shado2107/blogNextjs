import React from 'react'

export default function utilisateur(props) {
  return (
    <div className='container px-4 pt-3'> 
        <div className='row justify-content-center'>
            <div className='col-12 col-lg-8 col-xl-6'>
                <div className='card p-2'>
                    <div card-body>
                        <div className='card-title'>
                           <h1>{props.user.name}</h1>
                            <h5 className='card-subtitle mb-2 text-muted'>
                                Username: {props.user.username}
                            </h5>
                            <ul className='list-group'>
                                <li className='list-group-item'>
                                    Full Name: {props.user.name}
                                </li>
                                <li className='list-group-item'>
                                    Email: {props.user.email}
                                </li>
                                <li className='list-group-item'>
                                    Phone: {props.user.phone}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export async function getStaticProps(context){
    const id = context.params.user;
    
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await data.json();

    return {
        props:{
            user
        }
    }

}

export async function getStaticPaths(){

    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json();

    const paths = users.map(item => ({
        params: {user: item.id.toString()}
    }))

    return {
        paths,
        fallback: false
    }

}