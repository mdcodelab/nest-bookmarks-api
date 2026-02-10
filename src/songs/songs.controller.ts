import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import type { Song } from './songs.service';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create.songs.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  findAll(): Song[] {
    return this.songsService.findAllSongs();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Song | undefined {
    return this.songsService.findOne(id);
  }

  @Post()
  createNewSong(@Body() createSongDto: CreateSongDto): Song {
    return this.songsService.createNewSong(createSongDto);
  }

  @Put(':id')
  updateSong(
    @Param('id') id: string,
    @Body() updateSongDto: CreateSongDto,
  ): Song | null {
    return this.songsService.updateSong(id, updateSongDto);
  }

  @Delete(':id')
  deleteSong(@Param('id') id: string): Song | null {
    return this.songsService.deleteSong(id);
  }
}
