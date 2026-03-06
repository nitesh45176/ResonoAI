import { SettingsPanel } from "../components/setting-panel";
import { TextInputPanel } from "../components/text-to-speech-input-panel";
import { VoicePreviewPlaceholder } from "../components/voice-preview-placeholder";

import {
  TextToSpeechForm,
  defaultTTSValues,
  type TTSFormValues
} from "@/features/text-to-speech/components/text-to-speech-form";


export function TextToSpeechView(){
    return(
        <div className="flex min-h-0 flex-1 overflow-hidden">
            <TextToSpeechForm defaultValues={defaultTTSValues}>
        <div className="flex min-h-0 flex-1 overflow-hidden">
          <div className="flex min-h-0 flex-1 flex-col">
            <TextInputPanel />
            <VoicePreviewPlaceholder />
          </div>
          <SettingsPanel />
        </div>
      </TextToSpeechForm>
        </div> 
    )
}