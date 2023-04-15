from fastapi import APIRouter

from src.palindrome import Palindrome

router = APIRouter()

@router.post('/is_valid')
def is_valid(word: str):
    example = Palindrome(word)
    result = example.is_palnedrome()
    return result