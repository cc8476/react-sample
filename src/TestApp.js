class Twitter {
    constructor(props) {
        super()
        this.props =props;
        this.state ={
            user:null
        }
    }

    componentDidMount() {
        this.setState({
            user:{}
        })
    }

    render() {
        return (
            this.props.children(this.state.user)
        )
    }
}

export default Twitter;