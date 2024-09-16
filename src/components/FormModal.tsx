"use client"

const FormModal = ({ table, type, data, id }: {
    table: 
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
    type: "create" | "update" | "delete";
    data?:any;
    id?:number; 
}) => {
    return (
        <div>

        </div>
    );
};

export default FormModal;