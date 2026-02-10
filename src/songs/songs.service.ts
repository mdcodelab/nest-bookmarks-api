import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create.songs.dto';
import { randomUUID } from 'crypto';

export interface Song {
    id: string;
    title: string;
    artists: string[];
    releasedDate: string;
    duration: string;
}

@Injectable()
export class SongsService {
    private readonly songs: Song[] = [];


    findAllSongs() {
        return this.songs;
    }

    findOne(id: string) {
    return this.songs.find((song) => song.id === id);
  }

    createNewSong(createSongDto: CreateSongDto){
        const song: Song = {
            id: randomUUID(),
            ...createSongDto,
        }
        this.songs.push(song);
        return song;
    }

    updateSong(id: string, updateSongDto: CreateSongDto) {
        const songIndex = this.songs.findIndex(song => song.id === id);
        if (songIndex === -1) {
            return null;
        }
        
        this.songs[songIndex] = {
            ...this.songs[songIndex],
            ...updateSongDto,
        };
        
        return this.songs[songIndex];
    }

    deleteSong(id: string){
        const songIndex = this.songs.findIndex(song => song.id === id);
        if (songIndex === -1) {
            return null;
        }
        
        const deletedSong = this.songs[songIndex];
        this.songs.splice(songIndex, 1);
        return deletedSong;
    }
}
