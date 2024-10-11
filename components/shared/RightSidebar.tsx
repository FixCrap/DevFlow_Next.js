import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
	const hotQuestions = [
		{ _id: 1, title: "How do i use express as a custom server in NextJS" },
		{ _id: 3, title: "How do i make chey mou, love me?" },
		{ _id: 4, title: "How do i go to Paris to Stalk her?" },
		{ _id: 5, title: "How do i kill a person in Paris in hide it?" },
	];

	const popularTags = [
		{ _id: 1, name: "Javascript", totalQuestions: 5 },
		{ _id: 2, name: "React", totalQuestions: 35 },
		{ _id: 3, name: "Next", totalQuestions: 15 },
		{ _id: 4, name: "vue", totalQuestions: 3 },
		{ _id: 5, name: "redux", totalQuestions: 8 },
	];

	return (
		<section className='background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden w-[350px]'>
			<div>
				<h3 className='h3-bold text-dark200_light900'>Top Questions</h3>
				<div className='mt-7 flex w-full flex-col gap-[30px]'>
					{hotQuestions.map((question) => (
						<Link
							href={`/questions/${question._id}`}
							key={question._id}
							className='flex cursor-pointer justify-between  items-center gap-7'>
							<p className='body-medium text-dark500_light700'>
								{question.title}
							</p>
							<Image
								src='/assets/icons/chevron-right.svg'
								width={20}
								height={20}
								className='invert-colors'
							/>
						</Link>
					))}
				</div>

				<div className='mt-7 flex w-full flex-col gap-[30px]'></div>
			</div>
			<div className='mt-16'>
				<h3 className='h3-bold text-dark200_light900'>Popular Tags</h3>
				<div className='mt-7 flex flex-col gap-4'>
					{popularTags.map((tag) => (
						<RenderTag
							key={tag._id}
							_id={tag._id}
							name={tag.name}
							totalQuestions={tag.totalQuestions}
							showCount
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default RightSidebar;
