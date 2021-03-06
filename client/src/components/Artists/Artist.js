import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import AudioButton from '../Buttons/AudioButton'
import Button from '../Buttons/Button'
import { SaveIcon } from '../Icons'

Artist.propTypes = {
  artist: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  toggleCurrentSongId: PropTypes.func.isRequired,
  isSongPlaying: PropTypes.bool.isRequired,
  currentSongId: PropTypes.string,
  saveSong: PropTypes.func.isRequired,
  savedSongs: PropTypes.array,
}

export default function Artist({
  artist,
  songTitle,
  id,
  image,
  toggleCurrentSongId,
  isSongPlaying,
  currentSongId,
  saveSong,
  savedSongs,
}) {
  return (
    <>
      <ListItemStyled key={id}>
        <Cover src={image} alt="" />
        <Content>
          <ArtistName>{artist}</ArtistName>
          <Song>{songTitle}</Song>
        </Content>
        <ButtonWrapper>
          <AudioButton
            onClick={() => toggleCurrentSongId(id)}
            isSongPlaying={isSongPlaying && currentSongId === id}
            currentSongId={currentSongId}
          />
          <Button
            id={id}
            onClick={() => saveSong(id)}
            disabled={savedSongs?.some((song) => song.id === id)}
            data-testid="save-button"
          >
            <SaveIcon />
          </Button>
        </ButtonWrapper>
      </ListItemStyled>
    </>
  )
}

const ListItemStyled = styled.li`
  display: grid;
  flex: 1 0 100%;
  grid-template-columns: 100%;
  grid-template-rows: 54vh auto;
  position: relative;
  row-gap: 46px;
  scroll-snap-align: start;
`
const Cover = styled.img`
  border-radius: 0 0 70px 70px;
  box-shadow: var(--shadow-dark);
  height: 54vh;
  object-fit: cover;
  width: 100%;
`
const Content = styled.section`
  padding: 0 22px;
`
const ArtistName = styled.span`
  color: var(--primary-regular);
  display: block;
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 8px;
  text-transform: uppercase;
`
const Song = styled.span`
  color: var(--primary-regular);
  font-size: 1.6em;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  width: 100%;
`
