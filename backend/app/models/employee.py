from pydantic import BaseModel
from datetime import date


class BaseEmployee(BaseModel):
    id: int
    name: str
    hire_date: date


class RegularEmployee(BaseEmployee):
    pass

class ContractualEmployee(BaseEmployee):
    contract_duration: int
