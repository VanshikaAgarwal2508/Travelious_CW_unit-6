import React from 'react'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const PageNotFound = () => {
    return (
        <div id="wrapper" style={{margin:"auto",width:"50%"}}>
            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*DeBkx8vjbumpCO-ZkPE9Cw.png" />
            <div id="info">
                <h2 style={{ color:'orange',marginBottom:"30px"}}>This page could not be found!</h2>
                <Link to='/'><Button variant={'outline'}color={"orange"}>Go To Homepage</Button></Link>
            </div>
        </div >
    )
}

export default PageNotFound