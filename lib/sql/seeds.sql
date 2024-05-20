INSERT INTO department ( name ) 
VALUES ( 'Human Resources'),
( 'Maintenance' ),
( 'Information Technology' );

INSERT INTO employeerole ( title, salary, department_id ) 
VALUES ( 'HR Specalist', 50000, 1 ),
( 'Maintenance Director', 60000, 2 ),
( 'IT Support Staff', 45000, 3 );

INSERT INTO employee ( first_name, last_name, role_id, manager_id )
VALUES ( 'Taylor', 'Johnson', 1, null),
( 'John', 'Smith', 2, null),
( 'Jake', 'Test', 3, null);