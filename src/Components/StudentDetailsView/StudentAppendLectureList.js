import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./StudentDetailsForm.module.css";
import OutlinedInput from "@mui/material/OutlinedInput";

import MenuItem from "@mui/material/MenuItem";

import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

function StudentAppendLectureList(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    const tempArr = [];
    props.studentsLectures.every((elem) => tempArr.push(elem.id));
    props.setSelectedLectures(tempArr);

    return () => {};
  }, [dispatch]);

  const handleChange = (e) => {
    props.setSelectedLectures(e.target.value);
  };

  return (
    <>
      <div className={`${styles.inputGroup} mb-3`}>
        <label className="form-label" for="studentLectureList">
          Lectures
        </label>
        <Select
          className={styles.selectForm}
          style={{ width: "100%" }}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={props.selectedLectures}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => {
            let names = [];
            selected.forEach((lecture) => {
              const tempLecture = props.lectures.find(
                (elem) => elem.id === lecture
              );
              names.push(tempLecture.name);
            });
            return names.join(", ");
          }}
        >
          {props.lectures.map((lecture) => (
            <MenuItem key={lecture.id} value={lecture.id}>
              <Checkbox
                checked={props.selectedLectures.indexOf(lecture.id) > -1}
              />
              <ListItemText primary={lecture.name} />
            </MenuItem>
          ))}
        </Select>
      </div>
    </>
  );
}

export default StudentAppendLectureList;
