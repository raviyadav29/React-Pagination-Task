import { useEffect, useState } from 'react'
import axios from 'axios'
import "./Pagination.css"

function Pagination(props) {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [show, setShow] = useState(true);

    useEffect(() => {
        axios
            .get(`http://localhost:5001/results?_limit=${4}&_page=${page}`)
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
            })
            .catch(() => {
                alert("Failed To Fetch Users Data");
            });
    }, [page])


    return (
        <div>
            <h1>Pagination Concept </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe atque necessitatibus possimus distinctio omnis doloremque. Placeat facere, distinctio perspiciatis nisi beatae, error quisquam eos molestiae repudiandae possimus dolorum nobis repellat et, deleniti eaque magni. Magnam unde quia esse tenetur ratione. Expedita cupiditate exercitationem laborum suscipit, odit debitis nulla deleniti et officiis facere, molestiae necessitatibus nostrum? Vero perspiciatis officia sit ad. Quis similique delectus mollitia. Vitae debitis ab placeat odit dignissimos, officia numquam possimus tempore porro facere expedita dolorum beatae accusantium eum impedit asperiores sit, assumenda nam blanditiis. Assumenda nam porro consequuntur minima. Repellat, ad incidunt ut amet dicta itaque aliquid.</p>
            {users.length > 0 && (<div>
                <table frame="box" cellPadding={10} rules="all" width={500} style={{ margin: "20px auto" }} >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>GENDER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.gender}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <div className='btn'>
                    {page > 1 && <button onClick={() => { setPage(page - 1) }} >Prev</button>}&nbsp;&nbsp;
                    <button>{page}</button>&nbsp;&nbsp;
                    {page < 5 && <button onClick={() => { setPage(page + 1) }}>Next</button>}&nbsp;&nbsp;
                </div>
            </div>)}

        </div>
    )
}

export default Pagination
