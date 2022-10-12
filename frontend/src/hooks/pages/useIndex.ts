import { useEffect, useState } from "react";
import { Teacher } from "../../@types/teacher";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [teacherList, setTeacherList] = useState<Teacher[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
    const [message, setMessage] = useState("")

    useEffect(() => {
        ApiService.get('/teachers').then((response) => {
            setTeacherList(response.data)
        })
    }, []);

    useEffect(() => {
        clearForm();
    }, [selectedTeacher])

    function scheduleClass() {
        if (selectedTeacher !== null) {
            if (validateClassData()) {
                ApiService.post('/teachers/' + selectedTeacher.id + '/classes', {
                    name,
                    email
                }).then(() => {
                    setSelectedTeacher(null);
                    setMessage('success');
                }).catch((error) => {
                    setMessage(error.response?.data.message);
                })
            } else {
                setMessage('fill the form with valid data')
            }
        }
    }

    function validateClassData() {
        //shitty validation..c'mon
        return name.length > 0 && email.length > 0;
    }

    function clearForm() {
        setName("");
        setEmail("");
    }
    return {
        teacherList,
        name,
        setName,
        email,
        setEmail,
        selectedTeacher,
        setSelectedTeacher,
        scheduleClass,
        message,
        setMessage
    }
}
