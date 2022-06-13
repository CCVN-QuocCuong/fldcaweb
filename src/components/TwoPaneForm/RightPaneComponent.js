/* eslint-disable no-case-declarations */
/* eslint-disable array-callback-return */
import React from 'react'
import {
  AlphanumericEntryComponent,
  QuickPickEntryComponent,
  BooleanEntryComponent,
  NumericEntryComponent,
  DateTimePickerComponent,
  DatePickerComponent,
  EmptyRightPaneComponent,
  PhotoFormComponent
} from '../../components/TwoPaneForm'
import {
  TEXT,
  MEMO,
  QUICKPICK,
  BIT,
  NUMBER,
  DATETIME,
  DATE,
  MULTIPICK,
  IMAGE
} from '../../config/constants'
import { View } from 'native-base'
import stylesTwoPane from '../../theme/stylesTwoPane'
import MultiPickComponent from './MultiPickComponent'

const RightPaneComponent = ({
  parentInfo,
  arrayValues,
  setArrayValues,
  features,
  currentIndex,
  setCurrentIndex,
  setListRequired,
  removeListRequired,
  setIsRequiredAdd,
  stringConcatenation,
  setStringConcatenation,
  featuresConcatY,
  featureConcat,
  formtype,
  arrayFormRequired,
  iskeyboard,
  setIskeyboard,
  isResetText,
  checkRequired,
  goDown,
  projName,
  dataSource,
  isResetIndex,
  showAlert,
}) => {
  const renderRightPane = (feature, index) => {
    const valueItem = arrayValues.filter(p => p.key === feature.name)
    const text = valueItem && valueItem[0].value.value && valueItem.length > 0 ? valueItem[0].value.value : ''

    switch (feature.type) {
      case MEMO:
      case TEXT:
        return <AlphanumericEntryComponent
          key={feature.name}
          arrayValues={arrayValues}
          setArrayValues={setArrayValues}
          isShow={index === currentIndex}
          feature={feature}
          setListRequired={setListRequired}
          removeListRequired={removeListRequired}
          setIsRequiredAdd={setIsRequiredAdd}
          featuresConcatY={featuresConcatY}
          featureConcat={featureConcat}
          setStringConcatenation={setStringConcatenation}
          propText={text}
          formtype={formtype}
          iskeyboard={iskeyboard}
          setIskeyboard={setIskeyboard}
          isResetText={isResetText}
          goDown={goDown}
          checkRequired={checkRequired}
        />
      case QUICKPICK:
        return <QuickPickEntryComponent
          key={feature.name}
          parentInfo={parentInfo}
          arrayValues={arrayValues} setArrayValues={setArrayValues}
          currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}
          isShow={index === currentIndex} feature={feature}
          setListRequired={setListRequired}
          stringConcatenation={stringConcatenation}
          setStringConcatenation={setStringConcatenation}
          featuresConcatY={featuresConcatY}
          featureConcat={featureConcat}
          formtype={formtype}
          propText={text}
          isResetText={isResetText}
          removeListRequired={removeListRequired}
          features={features}
          checkRequired={checkRequired}
          isResetIndex={isResetIndex}
          showAlert={showAlert}
          dataSource={dataSource}
        />
      case NUMBER:
        return <NumericEntryComponent
          key={feature.name}
          arrayValues={arrayValues}
          setArrayValues={setArrayValues}
          isShow={index === currentIndex} feature={feature}
          setListRequired={setListRequired}
          removeListRequired={removeListRequired}
          setIsRequiredAdd={setIsRequiredAdd}
          featuresConcatY={featuresConcatY}
          featureConcat={featureConcat}
          setStringConcatenation={setStringConcatenation}
          propText={text}
          formtype={formtype}
          arrayFormRequired={arrayFormRequired}
          iskeyboard={iskeyboard}
          setIskeyboard={setIskeyboard}
          isResetText={isResetText}
          goDown={goDown}
          features={features}
          checkRequired={checkRequired}
        />
      case BIT:
        return <BooleanEntryComponent
          key={feature.name}
          arrayValues={arrayValues} setArrayValues={setArrayValues}
          isShow={index === currentIndex} feature={feature} 
          propText={text}
          formtype={formtype}
          featuresConcatY={featuresConcatY}
          featureConcat={featureConcat}
          setStringConcatenation={setStringConcatenation}
          isResetText={isResetText}
          />
      case DATETIME:
        return <DateTimePickerComponent
          key={feature.name}
          arrayValues={arrayValues} setArrayValues={setArrayValues}
          isShow={index === currentIndex} feature={feature}
          isResetText={isResetText}
          checkRequired={checkRequired}
          propText={text}
          />
      case DATE:
        return <DatePickerComponent
          key={feature.name}
          arrayValues={arrayValues} setArrayValues={setArrayValues}
          isShow={index === currentIndex} feature={feature} 
          isResetText={isResetText}
          checkRequired={checkRequired}
          features={features}
          propText={text}
          />
      case IMAGE:
        return <PhotoFormComponent
          key={feature.name}
          valueItem={valueItem}
          arrayValues={arrayValues} setArrayValues={setArrayValues}
          isShow={index === currentIndex} feature={feature} 
          isResetText={isResetText}
          checkRequired={checkRequired}
          projName={projName}
          dataSource={dataSource}
          parentInfo={parentInfo}
          features={features}
          />
      case MULTIPICK:
        return <MultiPickComponent
          key={feature.name}
          isShow={index === currentIndex}
          feature={feature}
          currentIndex={currentIndex}
          arrayValues={arrayValues}
          setArrayValues={setArrayValues}
          setStringConcatenation={setStringConcatenation}
          featuresConcatY={featuresConcatY}
          featureConcat={featureConcat}
          formtype={formtype}
          propTextMultiPick={text}
          setListRequired={setListRequired}
          removeListRequired={removeListRequired}
          parentInfo={parentInfo}
          isResetText={isResetText}
          checkRequired={checkRequired}
        />
      default:
        return <EmptyRightPaneComponent isShow={index === currentIndex} />
    }
  }

  return (
    <View style={stylesTwoPane.rightPane}>
      {  
        features && features.map((feature, index) => {
          return renderRightPane(feature, index)
      })}
    </View>
  )
}

export default React.memo(RightPaneComponent)