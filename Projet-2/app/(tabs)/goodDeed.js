import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import colorI from '../(tabs)/_layout'
import colorA from '../(tabs)/_layout'

const {width} = Dimensions.get("window");

export default function DonationsScreen() {


  const[form, setForm] = useState("")

  const[formList, setFormList] = useState([])

  const handleAddForm = ()=>{
    setFormList([...formList, {id: Date.now().toString(), title: form}]);
  }

  const handleSupprForm = (id) =>{
    const updatedFormList = formList.filter((form)=>form.id !== id);
    setFormList(updatedFormList);
  }

  const handleUpdateForm = ()=>{
    const updatedForm = formList.map((item)=>{

        if(item.id === editedForm.id){
            return {...item, title: inputValue}
        }

        return item;
    });
        setFormList(updatedForm);
        setEditedForm(null);
        setInputValue("");

    };

  const handleModifyForm = (form)=>{
    setEditedForm(form);
    setInputValue(form.title);
  }

  const renderForm = ({item, index})=>{
    return(
        <View style={styles.formResult}>
            <Text style={styles.formResultText}>{item.title}</Text>
            <MaterialCommunityIcons  name="pencil" color={colorI} style={styles.formResultIcon}/>
            <MaterialCommunityIcons name="trash-can" color={colorI} style={styles.formResultIcon} onPress={()=>handleSupprForm(item.id)}/>
        </View>
    )
}
  return (
    <View style={styles.container}>
    <Text style={styles.label}>
       Ma liste
    </Text>
    <TextInput
      style={styles.input}
      value={form}
      placeholder="Entrez une bonne action"
      keyboardType='ascii-capable'
      onChangeText={(formText)=> setForm(formText)}
    />

{
        editedForm ?(
        <TouchableOpacity style={styles.button} onPress={()=> handleUpdateForm()}>
        <Text style={styles.buttonText}>Modifier</Text>
        </TouchableOpacity>
        ) : (
        <TouchableOpacity style={styles.button} onPress={()=> handleAddForm()}>
        <Text style={styles.buttonText}>Créer</Text>
        </TouchableOpacity>
        )
    }

    {/* <TouchableOpacity style={styles.button} onPress={()=> handleAddForm()}>
      <Text style={styles.buttonText}>Créer</Text>
    </TouchableOpacity> */}
    <FlatList data={formList} renderItem={renderForm}/>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems:'center',
      justifyContent: 'center',
    },

    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 15,
      color: '#333',
      textAlign: 'center',
    },
    input: {
      height: 40,
      width: width - 40,
      textAlign:'center',
      borderColor: '#e4b3bb',
      borderWidth: 1,
      borderRadius: 5,
      fontSize: 16,
      color: '#000',
      backgroundColor: '#fff',
      margin: 10,
      paddingLeft:10,
      paddingRight:10,
    },

    formResult: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        padding: 8,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#e4b3bb',
        color:'#000',
        width: width - 40,
    },

    formResultText:{
        width: '70%',
        fontWeight: 'bold',
    },

    formResultIcon:{
        textAlign: 'right',
        width: '15%',
        fontSize: 25,
    },

    error: {
      marginTop: 5,
      fontSize: 14,
      color: 'red',
    },

    button: {
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        width: width - 40,
        marginBottom:20,
    },
    buttonText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold',
    },

    line: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: width - 40,
        maxHeight: 1,
    },
    
  });