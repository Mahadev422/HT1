import { TiLockClosed } from "react-icons/ti";
import { useToast } from "../../store/useToast";

export default function Toast () {

  const { vissible, toast, progress, set } = useToast();

    const handleRemove = () => {
      set({vissible: false});
    };

    return (
      <div
        className={`transform transition-all duration-300 ease-out ${
          vissible 
            ? 'translate-x-0 opacity-100 scale-100' 
            : 'translate-x-full opacity-0 scale-95'
        }`}
      >
        <div className={`relative overflow-hidden rounded-lg shadow-lg border ${config.bgColor} ${config.borderColor} mb-3 min-w-80 max-w-md`}>
          {/* Progress bar */}

          {/* {toast.duration > 0 && (
            <div className="absolute top-0 left-0 h-1 bg-white/30 transition-all duration-75 ease-linear"
                 style={{ width: `${progress}%` }}>
            </div>
          )} */}
          
          <div className="p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <TiLockClosed className="h-6 w-6" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className={`text-sm font-semibold ${config.textColor} mb-1`}>
                  {'toast.title'}
                </h4>
                {(toast.message || true) && (
                  <p className={`text-sm ${config.textColor} opacity-90`}>
                    {'toast.message'}
                  </p>
                )}
              </div>
              
              <button
                onClick={handleRemove}
                className={`flex-shrink-0 ${config.textColor} hover:opacity-75 transition-opacity`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
