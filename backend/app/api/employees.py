from fastapi import APIRouter, HTTPException, Depends
from typing import List, Union
from app.models.employee import RegularEmployee, ContractualEmployee
from app.api.auth import get_current_username

from fastapi.security import HTTPBasic, HTTPBasicCredentials, HTTPBearer, HTTPAuthorizationCredentials


router = APIRouter()

# data stored in an array for simplicity
regular_employees_db = []
contractual_employees_db = []


@router.post("/employees/", response_model=Union[RegularEmployee, ContractualEmployee] )
def create_employee(employee: Union[RegularEmployee, ContractualEmployee]):
    if isinstance(employee, RegularEmployee):
        regular_employees_db.append(employee)
    elif isinstance(employee, ContractualEmployee):
        contractual_employees_db.append(employee)
    return employee


@router.get("/employees", response_model=List[Union[RegularEmployee, ContractualEmployee]] )
async def get_employees(token: str = Depends(get_current_username)):
    
    return regular_employees_db + contractual_employees_db


@router.get("/employees/{employee_id}", response_model=Union[RegularEmployee, ContractualEmployee] )
def get_employee(employee_id: int):
    for employee in regular_employees_db + contractual_employees_db:
        if employee.id == employee_id:
            return employee
    raise HTTPException(status_code=404, detail="Employee not found")


@router.put("/employees/{employee_id}", response_model=Union[RegularEmployee, ContractualEmployee] )
def update_employee(employee_id: int, employee: Union[RegularEmployee, ContractualEmployee]):
    for index, emp in enumerate(regular_employees_db):
        if emp.id == employee_id:
            regular_employees_db[index] = employee
            return employee
    for index, emp in enumerate(contractual_employees_db):
        if emp.id == employee_id:
            contractual_employees_db[index] = employee
            return employee
    raise HTTPException(status_code=404, detail="Employee not found")

#@router.delete("/employees/{employee_id}", response_model=dict, dependencies=[Depends(get_current_username)])
@router.delete("/employees/{employee_id}", response_model=dict )
def delete_employee(employee_id: int):
    for index, employee in enumerate(regular_employees_db):
        if employee.id == employee_id:
            del regular_employees_db[index]
            return {"message": "Regular Employee deleted"}
    for index, employee in enumerate(contractual_employees_db):
        if employee.id == employee_id:
            del contractual_employees_db[index]
            return {"message": "Contractual Employee deleted"}
    raise HTTPException(status_code=404, detail="Employee not found")
