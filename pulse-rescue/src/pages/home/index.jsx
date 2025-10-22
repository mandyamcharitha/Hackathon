import styles from "./styles.module.css"
import { doctorDetails } from "../../utils/doctordetails"
import { Avatar, Input, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { getPredictedSpeciality } from "@/network/network";

const { TextArea } = Input;
export default function Home(){
    const [description, setDescription] = useState("")
    const [loader, setLoader] = useState(false)
    const [speciality, setSpeciality] = useState("")
    const [suggestedProviders, setSuggestedProviders] = useState([])
    const [doctorModelOpen, setDoctorModelOpen] = useState(false)
    const [selectedProvider, setSelectedProvider] = useState({})

    const handleEnter = async (event)=>{
        
        if(event.key=="Enter"){
            setLoader(true)
            const predictedResponse = await getPredictedSpeciality(description)
            setSpeciality(predictedResponse.predicted_specialty)
            setLoader(false)
            event.preventDefault();
            setDescription("")
        }
        
    }

    const handleModelClose = ()=>{
        setDoctorModelOpen(false)
        setSelectedProvider({})
    }

    useEffect(()=>{
        filterProviders()
    },[speciality])

    const filterProviders = () => {

        const filteredProviders = doctorDetails.filter(
            (doctor) => doctor.speciality.toLowerCase() === speciality.toLowerCase()
        );

        setSuggestedProviders(filteredProviders);
    };


    return(
        <div style={{width:"100%", height:"100%"}}>
            <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%", // full screen height
                width: "100%",  // full screen width
                textAlign: "center"
            }}
            >
                <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "bold" }}>
                    STATE YOUR PROBLEM HERE!
                </div>
                <div>
                    <TextArea rows={4} 
                    style={{ height: "100px", width: "50vw", resize:"none" }} 
                    value={description}
                    onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    onKeyDown={(e)=>{
                        return handleEnter(e)
                    }}
                    />
                </div>
            </div>

            <div style={{margin:"10px", marginTop:"50px"}}>
                {speciality && speciality!=""? (
                <>
                    <div style={{ fontSize: "20px" }}>
                    For your problem we found the providers with speciality <strong>{speciality}</strong>
                    </div>
                    <div style={{display:"flex", padding:"10px"}}>
                        {suggestedProviders.map((suggestedProvider)=>{
                            return (
                                <div 
                                style={{margin:"20px", display:"flex", flexDirection:"column", alignItems:"center", cursor:"pointer"}}
                                onClick={()=>{
                                    setSelectedProvider(suggestedProvider);
                                    setDoctorModelOpen(true)
                                }}
                                >
                                    <div>
                                        <Avatar size={64} icon={<UserOutlined />} />
                                    </div>
                                    <div>{suggestedProvider.name}</div>
                                </div>
                            )
                        })}
                    </div>
                </>
                ) : (
                ""
                )}
            </div>

            <Modal
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={doctorModelOpen}
                onOk={()=>{handleModelClose()}}
                onCancel={()=>{handleModelClose()}}
                footer = {null}
                style={{height:"250px", width:"250px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}
            >
                <div>
                <div style={{height:"100%", width:"100%", display:"flex", justifyContent:"center"}}>
                    <Avatar size={64} icon={<UserOutlined />}/>
                </div> 
                <div>
                    Provider Name: {selectedProvider.name}
                </div>
                <div>
                    Contact Number: (xxx)xxx xxxx
                </div>
                <div>
                    Physical Location: {selectedProvider.location}
                </div>
                <div>
                    Availability :{selectedProvider?.available_time?.start} - {selectedProvider?.available_time?.end}
                </div>
                </div>
            </Modal>
        </div>
    )
}
