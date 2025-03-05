from fastapi import FastAPI, HTTPException, Form, UploadFile, File, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pymongo import MongoClient
from bson import ObjectId
import shutil
import os
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = FastAPI()

# Allow CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB Connection
MONGO_URI = "mongodb://localhost:27017"
client = MongoClient(MONGO_URI)
db = client["job_portal"]
applications_collection = db["applications"]

# Directory to store resumes
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Email Configuration
SMTP_SERVER = "smtp.gmail.com"  # For Gmail
SMTP_PORT = 587
EMAIL_SENDER = "yogesh.unique9844@gmail.com"  # Replace with your email
EMAIL_PASSWORD = "fsna ondk mqyt aemu"  # Replace with your app password (if using Gmail)


def send_email(name, email, resume_url):
    """ Sends job application details to HR email """
    recipient_email = "loksai2024@gmail.com"  # Replace with the HR email

    msg = MIMEMultipart()
    msg["From"] = EMAIL_SENDER
    msg["To"] = recipient_email
    msg["Subject"] = f"New Job Application from {name}"

    # Email Body
    body = f"""
    <html>
        <body>
            <h2>New Job Application Received</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Resume:</strong> <a href="{resume_url}">Download Resume</a></p>
            <br>
            <p>This is an automated email from the Job Portal.</p>
        </body>
    </html>
    """
    msg.attach(MIMEText(body, "html"))

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_SENDER, EMAIL_PASSWORD)
        server.sendmail(EMAIL_SENDER, recipient_email, msg.as_string())
        server.quit()
        print("Email sent successfully")
    except Exception as e:
        print(f"Error sending email: {e}")


@app.post("/apply")
async def apply_job(
    background_tasks: BackgroundTasks,
    name: str = Form(...),
    email: str = Form(...),
    resume: UploadFile = File(...),
):
    """ Store job applications and send email """

    # Generate a unique filename
    resume_filename = f"{ObjectId()}.pdf"
    resume_path = os.path.join(UPLOAD_FOLDER, resume_filename)

    # Save the uploaded file
    with open(resume_path, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)

    application = {
        "name": name,
        "email": email,
        "resume_filename": resume_filename,
    }

    result = applications_collection.insert_one(application)
    application_id = str(result.inserted_id)
    resume_url = f"http://localhost:8000/resume/{application_id}"

    # Send email in the background
    background_tasks.add_task(send_email, name, email, resume_url)

    return {
        "message": "Application submitted successfully",
        "application_id": application_id,
        "resume_url": resume_url,
    }


@app.get("/resume/{application_id}")
def get_resume(application_id: str):
    """Retrieve and download the resume file for a given application ID"""
    application = applications_collection.find_one({"_id": ObjectId(application_id)})

    if not application:
        raise HTTPException(status_code=404, detail="Application not found")

    resume_filename = application["resume_filename"]
    resume_path = os.path.join(UPLOAD_FOLDER, resume_filename)

    if not os.path.exists(resume_path):
        raise HTTPException(status_code=404, detail="Resume file not found")

    return FileResponse(resume_path, media_type="application/pdf", filename=resume_filename)


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
