from fastapi import FastAPI, Depends, HTTPException, status
from app.api import employees  # Import the employees router
from app.api import auth  # Import the auth router
from fastapi.middleware.cors import CORSMiddleware


from jose import JWTError, jwt
from datetime import datetime, timedelta
from fastapi.security import HTTPBasic, HTTPBasicCredentials, HTTPBearer, HTTPAuthorizationCredentials


app = FastAPI()


# Define allowed origins
origins = [
    "http://127.0.0.1:8080",
    "http://localhost:8080",
]

# Apply CORS middleware with allowed origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define a route and corresponding function
@app.get("/")
def read_root():
    return {"Hello": "Sprout-Exam"}


app.include_router(employees.router, prefix="/api")

app.include_router(auth.router, prefix="/api")


# Authentication endpoint
@app.post("/login")
#async def login(credentials: HTTPBasicCredentials):
async def login(credentials: dict):
    username = credentials.get("username")
    password = credentials.get("password")

    if username == auth.ADMIN_USERNAME and password == auth.ADMIN_PASSWORD:
        token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
        access_token = auth.create_access_token(data={"sub": auth.ADMIN_USERNAME}, expires_delta=token_expires)
        return {"access_token": access_token, "token_type": "bearer"}
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid username or password",
        headers={"WWW-Authenticate": "Basic"},
    )

# Function to revoke or invalidate a token
@app.post("/logout")
async def logout(token: str = Depends(HTTPBearer())):
    auth.token_blacklist.add(token.credentials)
    return {"message": "Token has been invalidated"}
