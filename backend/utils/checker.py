def check_sections(text):
    required_sections = ["Education", "Experience", "Skills", "Projects"]
    missing = []
    for section in required_sections:
        if section.lower() not in text.lower():
            missing.append(section)
    return missing
