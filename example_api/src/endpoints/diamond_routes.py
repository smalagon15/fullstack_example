from fastapi import APIRouter
from fastapi.responses import JSONResponse

from src.diamond import Diamond

router = APIRouter()

@router.post('/generate')
def dimond(dimension: int):
    myDiamond = Diamond(dimension)
    result = myDiamond.generate_diamond()
    return JSONResponse(content=result)

@router.post('/toptriangle')
def top_triangle(dimension: int):
    myDiamond = Diamond(dimension)
    result = myDiamond.topTriangle.generate()
    return JSONResponse(content=result)

@router.post('/bottomtriangle')
def bottom_triangle(dimension: int):
    myDiamond = Diamond(dimension)
    result = myDiamond.bottomTriangle.generate()
    return JSONResponse(content=result)