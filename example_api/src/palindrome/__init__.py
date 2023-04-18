class Palindrome:
    def __init__(self, word):
        self.word = word.lower()

    def is_palnedrome(self):
        word_length = len(self.word)
        result = True
        for i in range (int(word_length/2)):
            if(self.word[i] != self.word[-(i+1)]):
                result = False
        return result