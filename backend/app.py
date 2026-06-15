from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from utils.parser import extract_text
from utils.checker import check_sections
from utils.suggestions import generate_suggestions

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def upload_resume(file: UploadFile):
    if not file.filename:
        raise ValueError("File must have a filename")
    text = extract_text(file.file, file.filename)
    missing_sections = check_sections(text)
    suggestions = generate_suggestions(text)
    return {"missing_sections": missing_sections, "suggestions": suggestions}
