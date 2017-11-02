export class ExportColumns {
    public static getColumns(): any {
        return [
            {
                display: 'First Name',
                variable: 'firstName',
                filter: 'text',
            },
            {
                display: 'Last Name',
                variable: 'lastName',
                filter: 'text'
            },
            {
                display: 'Birth Date',
                variable: 'birthdate',
                filter: 'date'
            },
            {
                display: 'Gender',
                variable: 'gender',
                filter: 'text'
            }
        ]
    }
}
