import streamlit as st
import requests

from streamlit_lottie import st_lottie
from streamlit_option_menu import option_menu

# configuración de la página
st.set_page_config(page_title='Portafolio', page_icon='🖥', layout='wide')

# cargar el lottie
def load_lottieurl(url):
    r = requests.get(url)
    if r.status_code !=200:
        return None
    return r.json()

# url del lotiie
lottie_file ="https://lottie.host/dad47bff-17ea-4b48-a93a-0fe3c863a1f4/vWzC8OSOJX.json"

# url imagenes
img_perfil = "https://i.postimg.cc/wxZLsfxv/perfil.png"
img_generador = "https://i.postimg.cc/fTPXbdCk/Generador.png"
img_linktree = "https://i.postimg.cc/X75FKfXg/linktree.png"
img_data = "https://i.postimg.cc/W1PZ5dkc/Manchester-United-Liverpool.png"

# sidebar
with st.sidebar:
    selected = option_menu(
        menu_title=None, 
         options=["Home", "Projects", "Skills"], 
        icons=["house", "book", "code"],
        menu_icon="cast",  
        default_index=0,  
        styles={
            "icon": {"color": "orange", "font-size": "25px"},
            "nav-link": {
                "font-size": "25px",
                "text-align": "left",
                "margin": "0px",
                "--hover-color": "#ffebc8",
            },
            "nav-link-selected": {"background-color": "#ebd2b9"},
        },
    )

# opciones del sidebar
if selected == "Home":
    html_template = f"""
        <div style="text-align: center;">
            <h1>Nicole Palomino Alvarado</h1>
        </div>
    """
    html_subtitle = f"""
        <div style="text-align: center;">
            <h4>Software Developer</h4>
        </div>
    """

    col1, col2 = st.columns([3, 1])
    with col1:
        st.markdown(html_template, unsafe_allow_html=True)
        st.markdown(html_subtitle, unsafe_allow_html=True)

    with col2:
        st.image(img_perfil, caption=None, width=150)
        
    with st.container():
        st.write('---')

        col1, col2 = st.columns([2, 2])
        with col1:
            st.title('About :orange[me]')
            st.write('I am 22 years old and I am from Piura, Peru. I am currently studying the seventh cycle of Information Systems Management. I work on my own projects on soccer data analysis and software development.')
            st.write('I am currently working on the creation of a sports prediction software, which uses the Python language implementing machine learning algorithms and data analysis to predict results especially in soccer matches.')
        with col2:
            st_lottie(load_lottieurl(lottie_file), height=300)

    with st.container():
        st.write('---')
        st.title(':orange[Social] Media')

        # redes sociales
        instagram_url = "https://www.instagram.com/nicolee.palomino/"
        facebook_url = "https://www.facebook.com/nicolee.palomino"
        twitter_url = "https://twitter.com/aless_palomino"
        linkedin_url = "https://www.linkedin.com/in/nicole-palomino-alvarado/"
        github_url = "https://github.com/Nicole-Palomino"
        
        # Iconos de redes sociales
        st.markdown(
            f"""
            <div style="display:flex; justify-content:center;">
                <a href="{instagram_url}" target="_blank"><img src="https://img.icons8.com/fluency/48/instagram-new.png" style="margin: 0px 10px;"></a> 
                <a href="{facebook_url}" target="_blank"><img src="https://img.icons8.com/fluency/48/facebook-new.png" style="margin: 0px 10px;"></a>
                <a href="{twitter_url}" target="_blank"><img src="https://img.icons8.com/ios/50/twitterx--v1.png" style="margin: 0px 10px;"></a>
                <a href="{linkedin_url}" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" style="margin: 0px 10px;"></a>
                <a href="{github_url}" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/github.png" style="margin: 0px 10px;"></a>
            </div>
            """,
            unsafe_allow_html=True
        )

if selected == "Projects":
    st.title(f"Projects")

    # primer proyecto
    with st.container():
        col1, col2 = st.columns([2, 2])
        with col1:
            st.image(img_data, caption=None, use_column_width='always')

        with col2:
            st.header('SOCCER DATA ANALYSIS PROJECT')
            st.subheader('PYTHON & JUPYTER NOTEBOOK')
            st.write('This project demonstrates the potential of Python and Jupyter Notebook to analyze soccer data. The results of the analysis can be used by coaches, players, fans and other professionals to make better decisions.')
            st.write("[Link to repository >](https://valerapp.com/)")

    # segundo proyecto
    with st.container():
        st.write('---')
        col1, col2 = st.columns([2, 2])
        with col1:
            st.image(img_linktree, caption=None, use_column_width='always')
        
        with col2:
            st.header('CLONE LINKTREE')
            st.subheader('HTML & CSS')
            st.write('This project is a clone of Linktree, a popular tool for centralizing links in one place. Using HTML, CSS and Javascript, I developed this web application that allows you to create your own custom link page and share it with your audience.')
            st.write("[Link to repository >](https://valerapp.com/)")

    # tercer proyecto
    with st.container():
        st.write('---')

        col1, col2 = st.columns([2, 2])
        with col1:
            st.image(img_generador, caption=None, use_column_width='always')

        with col2:
            st.header('PASSWORD GENERATOR')
            st.subheader('HTML, CSS & JAVASCRIPT')
            st.write('This password generator project is developed with HTML CSS and JavaScript. It has options for the length of the password, whether to include numbers, capital letters or symbols.')
            st.write("[Link to repository >](https://valerapp.com/)")

if selected == "Skills":
    st.title(f"Skills")

    with st.container():
        st.subheader('PROGRAMMING LANGUAGES & TOOLS')
        st.markdown(
            f"""
            <div style="display:flex; justify-content:center;">
                <img src="https://img.icons8.com/color/48/html-5--v1.png" style="margin: 0px 10px;">
                <img src="https://img.icons8.com/color/48/css3.png" style="margin: 0px 10px;">
                <img src="https://img.icons8.com/color/48/javascript--v1.png" style="margin: 0px 10px;">
                <img src="https://img.icons8.com/fluency/48/bootstrap.png" style="margin: 0px 10px;">
                <img src="https://img.icons8.com/color/48/python--v1.png" style="margin: 0px 10px;">
                <img src="https://img.icons8.com/ios-filled/50/000000/streamlit.png" style="margin: 0px 10px;">
                <img src="https://img.icons8.com/color/48/kotlin.png" style="margin: 0px 10px;">
                <img src="https://img.icons8.com/color/48/firebase.png" style="margin: 0px 10px;">
                <img src="https://img.icons8.com/color/48/mysql-logo.png" style="margin: 0px 10px;">
                <img src="https://img.icons8.com/color/48/git.png" style="margin: 0px 10px;">
            </div>
            """,
            unsafe_allow_html=True
        )
