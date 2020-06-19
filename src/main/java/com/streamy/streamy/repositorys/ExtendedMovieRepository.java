package com.streamy.streamy.repositorys;

import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.persistence.Query;

public abstract class ExtendedMovieRepository implements MoviesRepository {

    @Autowired
    EntityManager em;

    public double getAvgById(int id){
        double result=0;
        Query query=  em.createNativeQuery("{call avg_rating(?,?)}")
                .setParameter(1,id)
                .setParameter(2,result);

        double anotherResult=query.getFirstResult();
        return anotherResult;
    }

}
