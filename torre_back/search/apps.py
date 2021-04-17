from django.apps import AppConfig


class SearchConfig(AppConfig):
    name = 'search'

    def ready(self):
        import nltk
        
        print("downloading..")
        
        nltk.download('stopwords')
        nltk.download('punkt')
        
