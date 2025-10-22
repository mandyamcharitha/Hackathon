const doctorDetails = [
  {
    "name": "Dr. Aisha Mehta",
    "speciality": "Radiologist",
    "location": "Noida",
    "available_time": {
      "start": "07:00",
      "end": "15:00"
    }
  },
  {
    "name": "Dr. Rohan Kapoor",
    "speciality": "Urologist",
    "location": "Hyderabad",
    "available_time": {
      "start": "07:00",
      "end": "15:00"
    }
  },
  {
    "name": "Dr. Sneha Nair",
    "speciality": "Cardiologist",
    "location": "Coimbatore",
    "available_time": {
      "start": "10:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Aarav Singh",
    "speciality": "Endocrinologist",
    "location": "Delhi",
    "available_time": {
      "start": "08:00",
      "end": "14:00"
    }
  },
  {
    "name": "Dr. Kavita Sharma",
    "speciality": "Neurologist",
    "location": "Indore",
    "available_time": {
      "start": "08:00",
      "end": "14:00"
    }
  },
  {
    "name": "Dr. Kiran Patel",
    "speciality": "Pediatrician",
    "location": "Delhi",
    "available_time": {
      "start": "08:00",
      "end": "14:00"
    }
  },
  {
    "name": "Dr. Priya Verma",
    "speciality": "Oncologist",
    "location": "Surat",
    "available_time": {
      "start": "10:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Arjun Rao",
    "speciality": "General Physician",
    "location": "Delhi",
    "available_time": {
      "start": "07:00",
      "end": "13:00"
    }
  },
  {
    "name": "Dr. Neha Bansal",
    "speciality": "Gastroenterologist",
    "location": "Surat",
    "available_time": {
      "start": "11:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Vivek Iyer",
    "speciality": "Endocrinologist",
    "location": "Chandigarh",
    "available_time": {
      "start": "07:00",
      "end": "13:00"
    }
  },
  {
    "name": "Dr. Manish Khanna",
    "speciality": "Oncologist",
    "location": "Kolkata",
    "available_time": {
      "start": "08:00",
      "end": "15:00"
    }
  },
  {
    "name": "Dr. Ritu Desai",
    "speciality": "Gynecologist",
    "location": "Nagpur",
    "available_time": {
      "start": "10:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Sanjay Gupta",
    "speciality": "Radiologist",
    "location": "Kochi",
    "available_time": {
      "start": "10:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Pooja Menon",
    "speciality": "ENT Specialist",
    "location": "Kochi",
    "available_time": {
      "start": "11:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Rahul Das",
    "speciality": "Psychiatrist",
    "location": "Jaipur",
    "available_time": {
      "start": "09:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Anita Joshi",
    "speciality": "Dentist",
    "location": "Lucknow",
    "available_time": {
      "start": "09:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Vikas Sinha",
    "speciality": "Dermatologist",
    "location": "Ahmedabad",
    "available_time": {
      "start": "10:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Shweta Rao",
    "speciality": "ENT Specialist",
    "location": "Surat",
    "available_time": {
      "start": "11:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Mohan Pillai",
    "speciality": "Pediatrician",
    "location": "Mumbai",
    "available_time": {
      "start": "11:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Divya Jain",
    "speciality": "Neurologist",
    "location": "Mumbai",
    "available_time": {
      "start": "11:00",
      "end": "19:00"
    }
  },
  {
    "name": "Dr. Harish Nanda",
    "speciality": "Cardiologist",
    "location": "Jaipur",
    "available_time": {
      "start": "11:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Anjali Bhatt",
    "speciality": "Pulmonologist",
    "location": "Mumbai",
    "available_time": {
      "start": "09:00",
      "end": "15:00"
    }
  },
  {
    "name": "Dr. Rajeev Pillai",
    "speciality": "Psychiatrist",
    "location": "Trivandrum",
    "available_time": {
      "start": "08:00",
      "end": "15:00"
    }
  },
  {
    "name": "Dr. Nisha Reddy",
    "speciality": "Ophthalmologist",
    "location": "Visakhapatnam",
    "available_time": {
      "start": "08:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Tarun Verma",
    "speciality": "Psychiatrist",
    "location": "Bangalore",
    "available_time": {
      "start": "10:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Lalita Roy",
    "speciality": "Oncologist",
    "location": "Jaipur",
    "available_time": {
      "start": "10:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Rakesh Sharma",
    "speciality": "Endocrinologist",
    "location": "Ahmedabad",
    "available_time": {
      "start": "11:00",
      "end": "19:00"
    }
  },
  {
    "name": "Dr. Meera Krishnan",
    "speciality": "Gastroenterologist",
    "location": "Bhopal",
    "available_time": {
      "start": "10:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Naveen Iyer",
    "speciality": "Hematologist",
    "location": "Kolkata",
    "available_time": {
      "start": "11:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Aparna Ghosh",
    "speciality": "Hematologist",
    "location": "Coimbatore",
    "available_time": {
      "start": "10:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Amit Malhotra",
    "speciality": "ENT Specialist",
    "location": "Visakhapatnam",
    "available_time": {
      "start": "11:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Sunita Prasad",
    "speciality": "Urologist",
    "location": "Hyderabad",
    "available_time": {
      "start": "07:00",
      "end": "15:00"
    }
  },
  {
    "name": "Dr. Arvind Menon",
    "speciality": "Cardiologist",
    "location": "Bangalore",
    "available_time": {
      "start": "11:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Karishma Deshmukh",
    "speciality": "Psychiatrist",
    "location": "Indore",
    "available_time": {
      "start": "07:00",
      "end": "14:00"
    }
  },
  {
    "name": "Dr. Ajay Shetty",
    "speciality": "Dermatologist",
    "location": "Noida",
    "available_time": {
      "start": "09:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Deepa Soni",
    "speciality": "Cardiologist",
    "location": "Noida",
    "available_time": {
      "start": "11:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Suresh Kaur",
    "speciality": "Orthopedic Surgeon",
    "location": "Coimbatore",
    "available_time": {
      "start": "09:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Manoj Kumar",
    "speciality": "Cardiologist",
    "location": "Indore",
    "available_time": {
      "start": "09:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Rashmi Gupta",
    "speciality": "Pulmonologist",
    "location": "Bangalore",
    "available_time": {
      "start": "09:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Vinay Tiwari",
    "speciality": "Neurologist",
    "location": "Trivandrum",
    "available_time": {
      "start": "07:00",
      "end": "14:00"
    }
  },
  {
    "name": "Dr. Pallavi Mehra",
    "speciality": "Psychiatrist",
    "location": "Kochi",
    "available_time": {
      "start": "09:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Gaurav Reddy",
    "speciality": "Immunologist",
    "location": "Visakhapatnam",
    "available_time": {
      "start": "07:00",
      "end": "15:00"
    }
  },
  {
    "name": "Dr. Preeti Singh",
    "speciality": "Gastroenterologist",
    "location": "Chandigarh",
    "available_time": {
      "start": "09:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Karthik Nair",
    "speciality": "ENT Specialist",
    "location": "Chandigarh",
    "available_time": {
      "start": "11:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Rina Das",
    "speciality": "Hematologist",
    "location": "Nagpur",
    "available_time": {
      "start": "09:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Siddharth Jain",
    "speciality": "Immunologist",
    "location": "Trivandrum",
    "available_time": {
      "start": "08:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Tanya Kapoor",
    "speciality": "General Physician",
    "location": "Chennai",
    "available_time": {
      "start": "09:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Yash Sharma",
    "speciality": "Cardiologist",
    "location": "Coimbatore",
    "available_time": {
      "start": "07:00",
      "end": "14:00"
    }
  },
  {
    "name": "Dr. Nikhil Patil",
    "speciality": "Orthopedic Surgeon",
    "location": "Lucknow",
    "available_time": {
      "start": "08:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Aarti Joshi",
    "speciality": "Pediatrician",
    "location": "Nagpur",
    "available_time": {
      "start": "11:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Anand Raj",
    "speciality": "Cardiologist",
    "location": "Bangalore",
    "available_time": {
      "start": "11:00",
      "end": "19:00"
    }
  },
  {
    "name": "Dr. Vandana Menon",
    "speciality": "Hematologist",
    "location": "Noida",
    "available_time": {
      "start": "07:00",
      "end": "14:00"
    }
  },
  {
    "name": "Dr. Deepak Verma",
    "speciality": "Gastroenterologist",
    "location": "Hyderabad",
    "available_time": {
      "start": "11:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Isha Malhotra",
    "speciality": "Dentist",
    "location": "Surat",
    "available_time": {
      "start": "08:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Farhan Ali",
    "speciality": "Orthopedic Surgeon",
    "location": "Chennai",
    "available_time": {
      "start": "07:00",
      "end": "14:00"
    }
  },
  {
    "name": "Dr. Rachna Sinha",
    "speciality": "Ophthalmologist",
    "location": "Chennai",
    "available_time": {
      "start": "09:00",
      "end": "15:00"
    }
  },
  {
    "name": "Dr. Krishna Rao",
    "speciality": "Endocrinologist",
    "location": "Chandigarh",
    "available_time": {
      "start": "11:00",
      "end": "19:00"
    }
  },
  {
    "name": "Dr. Payal Desai",
    "speciality": "Endocrinologist",
    "location": "Chennai",
    "available_time": {
      "start": "07:00",
      "end": "13:00"
    }
  },
  {
    "name": "Dr. Sameer Khanna",
    "speciality": "Pulmonologist",
    "location": "Jaipur",
    "available_time": {
      "start": "11:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Rekha Pillai",
    "speciality": "General Physician",
    "location": "Chandigarh",
    "available_time": {
      "start": "11:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Akash Iyer",
    "speciality": "Cardiologist",
    "location": "Kolkata",
    "available_time": {
      "start": "11:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Leena Mehta",
    "speciality": "Pediatrician",
    "location": "Trivandrum",
    "available_time": {
      "start": "08:00",
      "end": "14:00"
    }
  },
  {
    "name": "Dr. Varun Das",
    "speciality": "ENT Specialist",
    "location": "Kochi",
    "available_time": {
      "start": "07:00",
      "end": "14:00"
    }
  },
  {
    "name": "Dr. Snehal Shah",
    "speciality": "Oncologist",
    "location": "Bhopal",
    "available_time": {
      "start": "07:00",
      "end": "15:00"
    }
  },
  {
    "name": "Dr. Priyanka Roy",
    "speciality": "Dentist",
    "location": "Indore",
    "available_time": {
      "start": "09:00",
      "end": "15:00"
    }
  },
  {
    "name": "Dr. Amitabh Nanda",
    "speciality": "Neurologist",
    "location": "Jaipur",
    "available_time": {
      "start": "10:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Monica Bansal",
    "speciality": "Pulmonologist",
    "location": "Bangalore",
    "available_time": {
      "start": "09:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Suraj Gupta",
    "speciality": "Pediatrician",
    "location": "Mumbai",
    "available_time": {
      "start": "09:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Viveka Sharma",
    "speciality": "Gastroenterologist",
    "location": "Mumbai",
    "available_time": {
      "start": "11:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Roshni Iyer",
    "speciality": "Pulmonologist",
    "location": "Surat",
    "available_time": {
      "start": "10:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Aditya Nair",
    "speciality": "Neurologist",
    "location": "Trivandrum",
    "available_time": {
      "start": "07:00",
      "end": "13:00"
    }
  },
  {
    "name": "Dr. Geeta Kumar",
    "speciality": "Dentist",
    "location": "Lucknow",
    "available_time": {
      "start": "08:00",
      "end": "14:00"
    }
  },
  {
    "name": "Dr. Kavya Reddy",
    "speciality": "Gastroenterologist",
    "location": "Bangalore",
    "available_time": {
      "start": "11:00",
      "end": "19:00"
    }
  },
  {
    "name": "Dr. Hemant Joshi",
    "speciality": "Ophthalmologist",
    "location": "Kochi",
    "available_time": {
      "start": "10:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Suhasini Rao",
    "speciality": "Oncologist",
    "location": "Coimbatore",
    "available_time": {
      "start": "08:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Anupama Singh",
    "speciality": "Neurologist",
    "location": "Kochi",
    "available_time": {
      "start": "09:00",
      "end": "15:00"
    }
  },
  {
    "name": "Dr. Rajesh Patel",
    "speciality": "General Physician",
    "location": "Hyderabad",
    "available_time": {
      "start": "10:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Vijay Desai",
    "speciality": "Gynecologist",
    "location": "Kolkata",
    "available_time": {
      "start": "07:00",
      "end": "14:00"
    }
  },
  {
    "name": "Dr. Sonia Mehta",
    "speciality": "Radiologist",
    "location": "Pune",
    "available_time": {
      "start": "07:00",
      "end": "15:00"
    }
  },
  {
    "name": "Dr. Devika Sharma",
    "speciality": "Nephrologist",
    "location": "Kochi",
    "available_time": {
      "start": "10:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Tejas Nair",
    "speciality": "Orthopedic Surgeon",
    "location": "Delhi",
    "available_time": {
      "start": "10:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Mitali Kapoor",
    "speciality": "Cardiologist",
    "location": "Jaipur",
    "available_time": {
      "start": "10:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Ashok Menon",
    "speciality": "ENT Specialist",
    "location": "Kolkata",
    "available_time": {
      "start": "09:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Manisha Verma",
    "speciality": "Gynecologist",
    "location": "Pune",
    "available_time": {
      "start": "10:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Ravi Pillai",
    "speciality": "Pulmonologist",
    "location": "Jaipur",
    "available_time": {
      "start": "10:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Prerna Das",
    "speciality": "ENT Specialist",
    "location": "Ahmedabad",
    "available_time": {
      "start": "10:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Gopal Iyer",
    "speciality": "Pediatrician",
    "location": "Noida",
    "available_time": {
      "start": "10:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Kiran Reddy",
    "speciality": "Endocrinologist",
    "location": "Bangalore",
    "available_time": {
      "start": "09:00",
      "end": "15:00"
    }
  },
  {
    "name": "Dr. Saira Khan",
    "speciality": "Orthopedic Surgeon",
    "location": "Kochi",
    "available_time": {
      "start": "10:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Mohit Bansal",
    "speciality": "Hematologist",
    "location": "Kochi",
    "available_time": {
      "start": "11:00",
      "end": "19:00"
    }
  },
  {
    "name": "Dr. Divakar Sharma",
    "speciality": "Neurologist",
    "location": "Chennai",
    "available_time": {
      "start": "10:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Ashwini Rao",
    "speciality": "Orthopedic Surgeon",
    "location": "Delhi",
    "available_time": {
      "start": "07:00",
      "end": "15:00"
    }
  },
  {
    "name": "Dr. Reena Joshi",
    "speciality": "Dentist",
    "location": "Jaipur",
    "available_time": {
      "start": "10:00",
      "end": "18:00"
    }
  },
  {
    "name": "Dr. Vikram Malhotra",
    "speciality": "Ophthalmologist",
    "location": "Hyderabad",
    "available_time": {
      "start": "11:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Suman Tiwari",
    "speciality": "Pulmonologist",
    "location": "Coimbatore",
    "available_time": {
      "start": "07:00",
      "end": "15:00"
    }
  },
  {
    "name": "Dr. Bharat Patel",
    "speciality": "Dermatologist",
    "location": "Chennai",
    "available_time": {
      "start": "09:00",
      "end": "17:00"
    }
  },
  {
    "name": "Dr. Neelam Reddy",
    "speciality": "Dentist",
    "location": "Kochi",
    "available_time": {
      "start": "10:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Chetan Nair",
    "speciality": "Cardiologist",
    "location": "Indore",
    "available_time": {
      "start": "08:00",
      "end": "14:00"
    }
  },
  {
    "name": "Dr. Shivani Ghosh",
    "speciality": "Psychiatrist",
    "location": "Pune",
    "available_time": {
      "start": "09:00",
      "end": "16:00"
    }
  },
  {
    "name": "Dr. Raj Malhotra",
    "speciality": "Pediatrician",
    "location": "Bangalore",
    "available_time": {
      "start": "11:00",
      "end": "18:00"
    }
  }
]

export {doctorDetails}
