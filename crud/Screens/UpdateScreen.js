import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Text, Input } from 'react-native-elements'
import firestore from '@react-native-firebase/firestore'

const UpdateScreen = ({navigation, route}) => {
    const { studentToUpdate } = route.params
    const studentId = studentToUpdate.id
    const [student, setStudent] = useState({
        name: studentToUpdate.name,
        age:  studentToUpdate.age,
        school:  studentToUpdate.school,
        department:  studentToUpdate.department,
        type: 'student'
    })

        
    const resetForm = () => {
        setStudent({
            name: '',
            age: '',
            school: '',
            department: '',
        })
    }

    const updateStudent = async (student) => {
        try {
            await firestore().collection('students').doc(studentId).update(student)
            resetForm()
            navigation.navigate('Feed')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={{flex: 1, justifyContent:'center', paddingHorizontal: 15}}>
            <Text style={{textAlign:'center', marginBottom: 15}}>Update a student</Text>
            <Input 
            value={student.name}
            onChangeText={(name) => {setStudent({...student, name: name})}}
            placeholder='Enter name'
            leftIcon={{ type: 'font-awesome', name: 'header'}}
            />
            <Input 
            value={student.age}
            onChangeText={(age) => {setStudent({...student, age: age})}}
            placeholder='Enter age'
            leftIcon={{ type: 'font-awesome', name: 'vcard'}}
            />
            <Input 
            value={student.school}
            onChangeText={(school) => {setStudent({...student, school: school})}}
            placeholder='Enter school'
            leftIcon={{ type: 'font-awesome', name: 'building-o'}}
            />
            <Input 
            value={student.department}
            onChangeText={(department) => {setStudent({...student, department: department})}}
            placeholder='Enter department'
            leftIcon={{ type: 'font-awesome', name: 'desktop'}}
            />
            <Button title='SEND' onPress={() => {updateStudent(student)}}/>
        </View>
    )
}

export default UpdateScreen
