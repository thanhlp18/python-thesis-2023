import axios from "axios";
import { json } from "react-router";

export function studentDetailLoader(params) {
  return fetch(
    "https://t9wij3y8zl.execute-api.us-east-1.amazonaws.com/Prod/get?student_id=" +
      params.studentId
  );
}

export function allStudentsLoader() {
  return fetch(
    "https://t9wij3y8zl.execute-api.us-east-1.amazonaws.com/Prod/getAll"
  );
}

export async function addNewStudent(data) {
  const formData = new FormData();

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      formData.append(key, data[key]);
    }
  }
  console.log(formData);
  const response = await fetch(
    "https://t9wij3y8zl.execute-api.us-east-1.amazonaws.com/Prod/add-student",
    {
      method: "POST",
      body: JSON.stringify(formData),
    }
  );
  const result = await response.json();
  console.log("Success:", result);
}

export async function updateStudent(data) {
  const response = await fetch(
    "https://t9wij3y8zl.execute-api.us-east-1.amazonaws.com/Prod/update-student",
    {
      method: "PATCH",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  console.log("Success:", result);
}

export async function postDataToServer(formData) {
  try {
    const response = await fetch(
      "https://t9wij3y8zl.execute-api.us-east-1.amazonaws.com/Prod/add-student",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set Content-Type to JSON
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("Success:", data);
      // Handle success - perform actions with the response data
      return data;
    } else {
      console.error("Error:", response);
    }
  } catch (error) {
    console.error("Error:", error.message);
    // Handle exceptions - network issues, parsing errors, etc.
    throw new Error(error.message);
  }
}

export async function deleteStudent(student_id) {
  try {
    const response = await fetch(
      `https://t9wij3y8zl.execute-api.us-east-1.amazonaws.com/Prod/delete-student?student_id=${student_id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("Success:", data);
      // Handle success - perform actions with the response data
      return data;
    } else {
      console.error("Error:", response);
    }
  } catch (error) {
    console.error("Error:", error.message);
    // Handle exceptions - network issues, parsing errors, etc.
    throw new Error(error.message);
  }
}
