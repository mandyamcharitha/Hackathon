from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression

from fastapi.middleware.cors import CORSMiddleware

# Define request body model
class Patient(BaseModel):
    description: str

app = FastAPI()

# Allow requests from your Next.js frontend
origins = [
    "http://localhost:3000",  # Next.js dev server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # allow GET, POST, OPTIONS etc.
    allow_headers=["*"],
)
# ------------------------------
# Load dataset and train model
# ------------------------------
patientDescriptionDf = pd.read_csv("./patient_descriptions.csv")

vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(patientDescriptionDf['Description'])

doctor_labels = patientDescriptionDf['Speciality']

model = LogisticRegression()
model.fit(X, doctor_labels)
# ------------------------------

@app.get("/predict")
def predict(description: str):
    """
    Predict doctor specialty based on patient description
    Example: /predict?description=I have chest pain
    """
    X_new = vectorizer.transform([description])
    prediction = model.predict(X_new)
    return {"description": description, "predicted_specialty": prediction[0]}
