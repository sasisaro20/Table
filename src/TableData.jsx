
import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Table } from "react-bootstrap"

const TableData = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getApiData()
    }, [])

    const getApiData = async () => {
        const apiData = await axios(`https://jsonplaceholder.typicode.com/posts/`)
        setData(apiData.data)
    }

    return (
        <>
            <Table bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>User ID</th>
                    <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (data.length > 0) ? (
                            data.map((row) => (
                                <tr>
                                    <td>{row.id}</td>
                                    <td>{row.userId}</td>
                                    <td>{row.title}</td>
                                </tr>
                            ))
                        ) : (
                            <tr style={{textAlign: 'center'}}>
                                <td colSpan={3}>No Record Found</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <Button onClick={() => {
                getApiData()
            }}>Click</Button>
        </>
    )
}

export default TableData