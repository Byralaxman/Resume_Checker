def generate_suggestions(text):
    suggestions = []
    if "responsible for" in text.lower():
        suggestions.append("Use strong action verbs instead of 'responsible for'.")
    if len(text.split()) < 200:
        suggestions.append("Your resume seems short. Add more details about achievements.")
    if "team" not in text.lower():
        suggestions.append("Highlight teamwork or collaboration experience.")
    return suggestions
