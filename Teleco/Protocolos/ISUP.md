
000100046d747033000200908d94315a8c589a0000011860010a00020f0d8110a0101258018045006444060a088313589929039006080100310200643a064305500000001d038090a33f080493555899326000783c8581c0000001828302078283040982830104a9c5058491020a00058691020680800105839101010583910202058691020415150305869102069595043908788331d03ad03fc000

```kroki-bytefield
    (defattrs :bg-blue {:fill "#a0a0ff"})
    (defattrs :bg-orange {:fill "#ffa500"})
    (defattrs :bg-gray {:fill "#d3d3d3"})
    (defattrs :bg-red {:fill "#ff9999"})
    (defattrs :bg-lightblue {:fill "#add8e6"})

    (defn draw-group-label-header
    "Creates a small borderless box used to draw the textual label headers
    used below the byte labels for ISUP message diagrams.
    Arguments are the number of columns to span and the text of the
    label."
    [span label]
    (draw-box (text label [:math {:font-size 12}]) {:span    span
                                                    :borders #{}
                                                    :height  14}))

    (defn draw-isup-header
    "Generates the byte and field labels and standard header fields of an
    ISUP message with the specified message type and length values."
    [msg-type length]
    (draw-column-headers)
    (draw-group-label-header 5 "Start")
    (draw-group-label-header 5 "CIC")
    (draw-group-label-header 3 "Message Type")
    (draw-group-label-header 2 "Length")
    (next-row 18)

    (draw-box 0x01 :bg-blue) ; Start
    (draw-box 0x872349ae [{:span 4} :bg-blue]) ; CIC
    (draw-box msg-type :bg-orange) ; Message Type
    (draw-box (hex-text msg-type 2 :bold) [{:span 2} :bg-orange])
    (draw-box length :bg-red) ; Length
    (draw-box (hex-text length 2 :bold) :bg-red)

    ;; Rest of the ISUP fields
    (draw-box 0x0a :bg-gray)
    (draw-box (hex-text 0x0a 4 :bold) [{:span 4} :bg-gray])
    (draw-box 0x20 :bg-lightblue)
    (draw-box (text "Address" [:math] [:sub 1]) [{:span 4} :bg-lightblue])
    (draw-box 0x30 :bg-gray)
    (draw-box (text "Optional Params" [:math] [:sub 1]) [{:span 4} :bg-gray])

    ;; Message footer
    (draw-box 0x11 :bg-gray)
    (draw-box (text "End" [:math] [:sub 1]) [{:span 4} :bg-gray]))

    ;; Draw ISUP message for IAM (Initial Address Message)
    (draw-isup-header 0x01 9)

```
