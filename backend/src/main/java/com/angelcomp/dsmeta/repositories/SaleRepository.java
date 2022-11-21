package com.angelcomp.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angelcomp.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	 
}
