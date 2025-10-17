package com.art.service;

import java.util.List;
import com.art.model.Art;

public interface ArtService {
	
	public Art addArt(Art art);
	public List<Art> viewArt();
	String deleteArt(Integer id);
	String updateArt(Art art);
	

}
