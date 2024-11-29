import { NextResponse } from 'next/server';
 import Car from '../../db/adminUpload';   

export async function POST(req) {
  try {
     const formData = await req.json();

    const {
      carName,
      yearOfManufacture,
      mileage,
      fuelType,
      carCategory,
      emissionStandard,
      transmissionType,
      seatCapacity,
      pricePerDay,
      pricePerWeek,
      pricePerMonth,
     } = formData;

       if (
      !carName || !yearOfManufacture || !mileage || !fuelType || !carCategory ||
      !emissionStandard || !transmissionType || !seatCapacity || !pricePerDay ||
      !pricePerWeek || !pricePerMonth
    ) {
      return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 });
    }

     const newCar = await Car.create({
      carName,
      yearOfManufacture,
      mileage,
      fuelType,
      carCategory,
      emissionStandard,
      transmissionType,
      seatCapacity,
      pricePerDay,
      pricePerWeek,
      pricePerMonth,
    });

     return NextResponse.json({ success: true, car: newCar }, { status: 201 });

  } catch (error) {
    console.error('Error inserting car data:', error);
    return NextResponse.json({ success: false, message: 'Error uploading car data.' }, { status: 500 });
  }
}


 