import React from 'react';


// Composant de filtre pour la recherche et la sélection de films
const Filter = ({ onFilterChange, showForm, handleShowForm }) => {
  const styles = {
    filterContainer: {
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      marginRight: '10px',
      padding: '8px 10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
    },
    select: {
      marginRight: '10px',
      padding: '8px 10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
      backgroundColor: '#fff',
    },
    addButton: {
      backgroundColor: '#d98880',
      color: 'white',
      padding: '8px 15px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };


    // Rendu du composant Filter
  return (
    <div style={styles.filterContainer}>
        {/* 
  Lorsque l'utilisateur saisit quelque chose dans le champ de recherche par titre,
  la fonction onFilterChange est appelée avec le type de filtre 'title' et la valeur saisie par l'utilisateur.
*/}
      <input
        type="text"
        placeholder="Search by title"
        style={styles.input}
        onChange={(e) => onFilterChange('title', e.target.value)}
      />
      {/* Sélecteur pour filtrer par note */}
      {/* Lorsque l'utilisateur sélectionne une option dans le sélecteur de filtre par note,
  la fonction onFilterChange est appelée avec le type de filtre 'rating' et la valeur sélectionnée par l'utilisateur.*/}
      <select
        onChange={(e) => onFilterChange('rating', e.target.value)}
        style={styles.select}
      >
        <option selected >Filter by rating</option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      
    </div>
  );
};

export default Filter;