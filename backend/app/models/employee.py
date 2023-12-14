from pydantic import BaseModel
from datetime import date
import uuid

class BaseEmployee(BaseModel):
    id: uuid.UUID = uuid.uuid4()
    name: str
    hire_date: date


class RegularEmployee(BaseEmployee):
    pass

class ContractualEmployee(BaseEmployee):
    contract_duration: int
