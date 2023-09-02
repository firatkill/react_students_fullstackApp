import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import OutlinedInput from "@mui/material/OutlinedInput";

import MenuItem from "@mui/material/MenuItem";

import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

function StudentAppendLectureList() {
  const lectures = useSelector((state) => state.data.data.lectures);
  const studentsLectures = [
    {
      id: 3,
      name: "physics",
      classroom: "9a",
      studentCapacity: 27,
      teacher: {
        id: 1,
        firstName: "example",
        lastName: "teacher",
        email: "exampleTeacher@gmail.com",
      },
    },
    {
      id: 5,
      name: "Philosophy",
      classroom: "10c",
      studentCapacity: 28,
      teacher: {
        id: 3,
        firstName: "Ahmet",
        lastName: "Özaydın",
        email: "ahmetozaydin@gmail.com",
      },
    },
  ];

  let Ids = [];
  for (let i = 0; i < studentsLectures.length; i++) {
    Ids.push(studentsLectures[i].id);
  }
  const [selectedLectures, setSelectedLectures] = useState(studentsLectures);
  const [selectedLectureIds, setSelectedLectureIds] = useState(Ids);

  const handleChange = (event) => {
    setSelectedLectures([...event.target.value]);
    let idArr = [];
    for (let i = 0; i < event.target.value.length; i++)
      idArr.push(event.target.value[i].id);
    setSelectedLectureIds([...idArr]);
    console.log(event.target.value);
  };
  return (
    <>
      <div className="mb-3">
        <label className="form-label" for="studentLectureList">
          Lectures
        </label>
        <Select
          style={{ width: "100%" }}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedLectures}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => {
            let names = [];
            selected.forEach((lecture) => names.push(lecture.name));
            return names.join(", ");
          }}
        >
          {lectures.map((lecture) => (
            <MenuItem key={lecture.id} value={lecture}>
              <Checkbox checked={selectedLectureIds.indexOf(lecture.id) > -1} />
              <ListItemText primary={lecture.name} />
            </MenuItem>
          ))}
        </Select>
      </div>
    </>
  );
}

export default StudentAppendLectureList;
