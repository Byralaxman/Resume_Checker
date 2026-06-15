import pdfminer.high_level as pdfminer
import docx

def extract_text(file, filename: str) -> str:
    text = ""
    if filename.endswith(".pdf"):
        text = pdfminer.extract_text(file)
    elif filename.endswith(".docx"):
        doc = docx.Document(file)
        text = "\n".join([p.text for p in doc.paragraphs])
    else:
        raise ValueError("Unsupported file format. Please upload PDF or DOCX.")
    return text.strip()
