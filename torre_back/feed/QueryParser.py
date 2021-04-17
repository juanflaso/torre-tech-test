import Levenshtein
from nltk.corpus import stopwords 
from nltk.tokenize import word_tokenize 
from .utils import takeClosestNumber

class QueryParser:
    stop_words = set(stopwords.words('english')) 

    stop_words.update(["years", "experience", "fully", ".", ",", "capability", "capacity", "proficiency", "able", "hold", "level"])

    fluencyDict = {"conversational", "reading", "fluent", "fully-fluent"}

    experienceDict = {1: "1-plus-year", 2: "2-plus-years", 3: "3-plus-years", 5: "5-plus-years", 10: "10-plus-years"}

    #Limitations no potential to develop
    def getPairings(self, text):
    
        word_tokens = word_tokenize(text)

        filtered_sentence = [w for w in word_tokens if not w in self.stop_words] 

        resultList = []

        experience = None
        term = ""
        fluency = None 
        for word in filtered_sentence:
            if word.isdigit():
                experience, term, fluency, wordResultDict = self.dictIfCompletedItem(experience, term, fluency)
                resultList.extend(wordResultDict)
                experience = int(word)
            elif word in self.fluencyDict:
                experience, term, fluency, wordResultDict = self.dictIfCompletedItem(experience, term, fluency)
                resultList.extend(wordResultDict)
                fluency = word
            else:

                for fluencyFromSet in self.fluencyDict:
                    if Levenshtein.distance(fluencyFromSet, word) < 3:
                        experience, term, fluency, wordResultDict = self.dictIfCompletedItem(experience, term, fluency)
                        resultList.extend(wordResultDict)
                        fluency = fluencyFromSet

                        word = ""
            
                term += (" " + word)

        _, _, _, wordResultDict = self.dictIfCompletedItem(experience, term, fluency)
        resultList.extend(wordResultDict)
        return resultList

    def dictIfCompletedItem(self, experience, term, fluency):
        resultList = []
        if experience and len(term) > 0:
            experience = self.experienceDict[takeClosestNumber(list(self.experienceDict.keys()), experience)]
            resultList.append({
                "skill/role": {"text": term.strip(), "experience": experience}
            })

            experience = None
            term = ""
        elif fluency and len(term) > 0:
            fluency = fluency if fluency != "fluent" else "fully-fluent"
            resultList.append({
                "language": {"term": term.strip(), "fluency": fluency}
            })

            fluency = None
            term = ""

        return (experience, term, fluency, resultList)