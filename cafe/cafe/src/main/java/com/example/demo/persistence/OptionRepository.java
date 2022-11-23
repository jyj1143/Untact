package com.example.demo.persistence;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.domain.Product_option_info;

public interface OptionRepository extends CrudRepository<Product_option_info, Integer>{

}
