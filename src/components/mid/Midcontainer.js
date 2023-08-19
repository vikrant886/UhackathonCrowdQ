import React, { useState, useRef, useEffect } from 'react';
import './Midcontainer.css';
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from '../../config/firebase_config'
const Midcontainer = () => {
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [collegeList, setCollegeList] = useState([]);
  const [selectedCollege, setSelectedCollege] = useState('');
  const [cafeList, setCafeList] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState([]);
  const [peopleCount , setPeopleCount] = useState('');

  useEffect(() => {
    get_college('CROWDQ');
  }, []);

  const get_cafe_info = async (e) => {
    const userRef = ref(getDatabase(), e);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const cafes_list = Object.keys(data);
      setCafeList(cafes_list);
      console.log(cafeList);
    }, (error) => {
      console.error('Error fetching data:', error);
    });
  };

  const get_people_count = async (e) => {
    const userRef = ref(getDatabase(), e);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const dataArray = Object.entries(data);
      dataArray.sort((a, b) => b[1].time_of_capture - a[1].time_of_capture);
      const people_list = dataArray[0];
      const people_count = people_list[1].number_of_people;
      setPeopleCount(people_count);
      console.log('Number of people with highest time:', people_count);
    }, (error) => {
      console.error('Error fetching data:', error);
    });
  }


  const get_college = async (e) => {
    const userRef = ref(getDatabase(), e);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const colleges = Object.keys(data);
      setCollegeList(colleges);
    }, (error) => {
      console.error('Error fetching data:', error);
    });
  };

  const handleCollegeChange = (event) => {
    setSelectedCollege(event.target.value);
    console.log(event.target.value);
    get_cafe_info('CROWDQ/' + event.target.value);
  };

  const handleCafeChange = (event) => {
    setSelectedCafe(event.target.value);
    console.log(event.target.value);
    get_people_count('CROWDQ/' + selectedCollege + '/' + selectedCafe)
  };

  const toggleDiv = () => { // toggle to the second div when start is clicked
    setShowSecondDiv(true);
    console.log("clicked");
    console.log(collegeList);
  };

  const downClicked = async () => {
    setShowSecondDiv(false);
  }
  
  return (
    <div className="mid-container">
      <div className="outer-container">
        <div className={`first-div ${showSecondDiv ? 'slide-up' : ''}`}>
          <h1 className="mid-heading">CROWDQ</h1>
          <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h5>
          <button className="start-button" onClick={toggleDiv}>
            FIND A CAFE
          </button>
        </div>
        <div className={`second-div ${showSecondDiv ? 'slide-up' : 'initial'}`}>
          {showSecondDiv && (
            <div className='mid-result-cont'>
                <select value={selectedCollege} onChange={handleCollegeChange}>
                  <option value="">select a college</option>
                  {collegeList.map((collegeName, index) => (
                    <option key={index} value={collegeName}>
                      {collegeName}
                    </option>
                  ))}
                </select>
                <select value={selectedCafe} onChange={handleCafeChange}>
                  <option value="">select a cafe</option>
                  {cafeList.map((cafeName, index) => (
                    <option key={index} value={cafeName}>
                      {cafeName}
                    </option>
                  ))}
                </select>
              <div className="result">{peopleCount}</div>
              <div onClick={downClicked}><p className="return_start">v</p></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Midcontainer;
