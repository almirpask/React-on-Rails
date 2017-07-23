let ListPeople = React.createClass({
    /* getInitialState(){
        return{
            people: []
        }
    },

     componentDidMount(){
        let self = this
        $.get('/api/people.json', function(data){
            self.setState({
                people: data
            })
        });
    },  */
    handleDelete(id){
        let self = this
        $.ajax({
            type: "DELETE",
            url: "/api/people/" + id + ".json",
            success: function(data){
                self.props.handleDelete(data)
            }
        })
    },
    render(){
        let self = this
        let people = this.props.people.map(function(item){
            return(
                <div>
                    <h4>{item.name}</h4>
                    <p>{item.age}</p>
                    <p>
                        <button type="button" className="btn btn-danger" 
                        onClick={ self.handleDelete.bind(self, item.id) }>
                            Delete
                        </button>   
                    </p>
                </div>
            )
        })
        return(
            <div> {people}
                
            
            </div>
        )
    }
})