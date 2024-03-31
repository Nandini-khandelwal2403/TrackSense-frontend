import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import './Dashboard.css';
import SidePanel from './SidePanel';

import MainPanel from './MainPanel';


function Dashboard() {
    const [listData, setListData] = useState([]);
	const [glanceData, setGlanceData] = useState([]);
    useEffect(() => {
        console.log("came to fetchlistdata")
        fetchListData()
    }, []);

    async function fetchListData(){
        fetch('/getexpenses')
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            setListData(data.expenses);
			setGlanceData(data.expenseSummary);
        });
    }

    // function mergeListData(data) {
    //     setListData([...listData, data]);
    // }

  return (
    <div>
        <Container fluid>
            <Row>
                <SidePanel setList = {fetchListData}/>
                <MainPanel listData = {listData} glanceData = {glanceData}/>
            </Row>
        </Container>
    </div>
  );
}

export default Dashboard;