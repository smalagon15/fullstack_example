from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import faulthandler

from src.endpoints import diamond_routes, palindrome_routes

# initialize fast api
app = FastAPI(title="NavFeas Example Project")
faulthandler.enable()
 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def description():
    resources = {
        "Title": "Example Python API",
        "Description":"This is an example python api showing how you take entry CS hw assignments and turn them into an api service."
    }
    return resources

app.include_router(
    diamond_routes.router,
    prefix="/diamond",
    tags=["Diamond Endpoints"]
)
app.include_router(
    palindrome_routes.router,
    prefix="/palindrome",
    tags=["Palindrome Endpoints"]
)