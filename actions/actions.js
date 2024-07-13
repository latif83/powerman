"use server";
// import prisma from "@/config/prisma";
import { db } from "@/Firebase/config";
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";

// export const getCounts = async () => {
//   const pastorsCount = await prisma.shalom_pastors.count();
//   const membersCount = await prisma.shalom_members.count();
//   const eventsCount = await prisma.shalom_events.count();

//   // console.log({ pastorsCount, membersCount, eventsCount });

//   return {
//     pastorsCount,
//     membersCount,
//     eventsCount,
//   };
// };

export const addEvent = async (formData) => {
  try{
    let { title, des, sDate, eDate, imageUrl } = formData;

  const createEvent = await addDoc(
    collection(db, `church/powerman/events`), {
      title,
      des,
      sDate: new Date(sDate).toISOString(),
      eDate: new Date(eDate).toISOString(),
      imageUrl,
    }
  );


  if (createEvent?.id) {
    return {
      status: true,
      msg: `New Event added successfully`,
    };
  } else {
    return {
      status: false,
      msg: "Error adding data",
    };
  }
  } catch(err){
    console.log(err)
  }
};

export const editEvent = async (formData) => {
  try {
    let { id, title, des, sDate, eDate, imageUrl } = formData;

    // Reference to the specific event document
    const eventRef = doc(db, `church/powerman/events/${id}`);

    // Update the event document with the new data
    await updateDoc(eventRef, {
      title,
      des,
      sDate: new Date(sDate).toISOString(),
      eDate: new Date(eDate).toISOString(),
      imageUrl,
    });

    return {
      status: true,
      msg: "Event updated successfully",
    };
  } catch (error) {
    console.error("Error editing event:", error);
    return {
      status: false,
      msg: "Error editing event",
    };
  }
};

export const getEvents = async () => {
  try {
    const eventsSnapshot = await getDocs(collection(db, 'church/powerman/events'));
    const events = eventsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return {
      status: true,
      msg: "Events retrieved successfully",
      events,
    };
  } catch (error) {
    console.error("Error getting events: ", error);
    return {
      status: false,
      msg: "Error getting events",
    };
  }
};

export const getCEvents = async () => {
  const events = await prisma.shalom_events.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  if (events) {
    return {
      status: true,
      msg: "Events retrieved successfully",
      events,
    };
  } else {
    return {
      status: false,
      msg: "Error getting events",
    };
  }
};

// export const deleteRecordBySection = async (section, sectionId) => {
//   try {
//     let deleteResult;
//     switch (section) {
//       case "pastor":
//         deleteResult = await prisma.shalom_pastors.delete({
//           where: { id: sectionId },
//         });
//         break;
//       case "member":
//         deleteResult = await prisma.shalom_members.delete({
//           where: { id: sectionId },
//         });
//         break;
//       case "event":
//         deleteResult = await prisma.shalom_events.delete({
//           where: { id: sectionId },
//         });
//         break;
//       default:
//         throw new Error("Invalid section provided");
//     }

//     if (deleteResult) {
//       return {
//         status: true,
//         msg: `${section} deleted successfully`,
//       };
//     } else {
//       return {
//         status: false,
//         msg: `Error deleting record from ${section}`,
//       };
//     }
//   } catch (error) {
//     console.error(`Error deleting record from ${section}:`, error);
//     return {
//       status: false,
//       msg: `Error deleting record from ${section}`,
//     };
//   }
// };

export const deleteEvent = async (eventId) => {
  try {
    // Reference to the specific event document
    const eventRef = doc(db, `church/powerman/events/${eventId}`);

    // Delete the event document
    await deleteDoc(eventRef);

    return {
      status: true,
      msg: "Event deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting event:", error);
    return {
      status: false,
      msg: "Error deleting event",
    };
  }
};