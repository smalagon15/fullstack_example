from fastapi import APIRouter

from src.palindrome import Palindrome

router = APIRouter()

@router.post('/is_valid')
def is_valid(request:dict):
    # Parse out the word from the request
    word = str(request['word'])

    # Run word through the palindrome test
    example = Palindrome(word)
    result = example.is_palindrome()
    return result