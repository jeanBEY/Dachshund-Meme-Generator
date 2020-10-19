import React, {Component} from "react"

class MemeGenerator extends Component{

	constructor(){
		super()
		this.state={

			toptext:"", 
			bottomtext:"",
			randomImg:"https://images.dog.ceo/breeds/dachshund/dachshund-3.jpg",
			object:{},
			allmemeImgs:[]
			
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount(){
		fetch("https://dog.ceo/api/breed/dachshund/images")
			.then(response => response.json())
			.then(response => {
				const memes = response.message
				this.setState({ allmemeImgs: memes })
			})
	}

	handleChange(event){
		const {name, value} = event.target
		this.setState({[name]: value})
		//console.log(this.toptext)
		//console.log(this.bottomtext)
	}

	handleSubmit(event){
		event.preventDefault()
		const randNum = Math.floor(Math.random() * this.state.allmemeImgs.length)
		const randMemeImg = this.state.allmemeImgs[randNum]
		this.setState({ randomImg: randMemeImg })
	}

	render(){
		return(
			<div>
				<form className="meme-form" onSubmit={this.handleSubmit} alt="">

				<input 
					type="text"
					name="toptext"
					placeholder="Top Text"
					value={this.state.toptext}
					onChange={this.handleChange}
				/>

				<input 
					type="text"
					name="bottomtext"
					placeholder="Botom Text"
					value={this.state.bottomtext}
					onChange={this.handleChange}
				/>

				<button>Generate</button>

				</form>

				<div className="meme">
					<img src={this.state.randomImg} alt=""/>
					<h2 className="top">{this.state.toptext}</h2>
					<h2 className="bottom">{this.state.bottomtext}</h2>
				</div>
			</div>
		)
	}
}

export default MemeGenerator