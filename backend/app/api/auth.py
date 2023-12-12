from fastapi import APIRouter, Depends, HTTPException, status
from jose import JWTError, jwt
from fastapi.security import HTTPBasic, HTTPBasicCredentials, HTTPBearer, HTTPAuthorizationCredentials

from datetime import datetime, timedelta

security = HTTPBearer()

router = APIRouter()

# Fake admin credentials (temporary)
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "password"

# Secret key to sign JWT tokens (change this in production)
SECRET_KEY = "supersecretkey"
ALGORITHM = "HS256"

# JWT Token expiration time (e.g., 1 hour)
ACCESS_TOKEN_EXPIRE_MINUTES = 60

# In-memory blacklist (should be replaced with persistent storage in production)
token_blacklist = set()

# JWT Token creation function
def create_access_token(data: dict, expires_delta: timedelta):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

#async def get_current_username(credentials: HTTPAuthorizationCredentials = Depends(security)):
async def get_current_username(token: str = Depends(HTTPBearer())):
    if token.credentials in token_blacklist:
        raise HTTPException(status_code=401, detail="Token has been invalidated already")
    try:
        payload = jwt.decode(token.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username != ADMIN_USERNAME:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Admin access required",
            )
        return username
    except JWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
        )

@router.get("/auth/admin")
def authenticate_admin(username: str = Depends(get_current_username)):
    return {"message": f"Welcome, {username}. You are authenticated as an admin."}
