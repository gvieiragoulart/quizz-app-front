'use client'

type Props = {
    currentStep: number;
    totalSteps: number;
    onNext: () => void;
    onSubmit: () => void;
};

export default function StepNavigation({ currentStep, totalSteps, onNext, onSubmit }: Props) {
    const isFinalStep = currentStep >= totalSteps;
    const isPossibleToFinish = currentStep > 3;

    return (
        <div className="flex justify-end mt-8 gap-4">
            {!isFinalStep && (
                <button
                    className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800"
                    onClick={onNext}
                >
                    Próxima →
                </button>
            )}

            {isPossibleToFinish ? (
                <button
                    className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700"
                    onClick={onSubmit}
                >
                    Finalizar Quizz
                </button>
            ) : null}
        </div>
    );
}
