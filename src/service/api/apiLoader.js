export function studentDetailLoader({ params }) {
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
