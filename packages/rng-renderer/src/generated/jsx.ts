import Adw from "@/generated/girs/node-adw-1.js";
import Gdk from "@/generated/girs/node-gdk-4.0.js";
import Gio from "@/generated/girs/node-gio-2.0.js";
import GLib from "@/generated/girs/node-glib-2.0.js";
import Gtk from "@/generated/girs/node-gtk-4.0.js";
import Pango from "@/generated/girs/node-pango-1.0.js";
import React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      AboutDialog: React.JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.AboutDialog>;
        artists?: string[];
        authors?: string[];
        comments?: string | null;
        copyright?: string | null;
        documenters?: string[];
        license?: string | null;
        licenseType?: Gtk.License;
        logo?: Gdk.Paintable | null;
        logoIconName?: string | null;
        programName?: string | null;
        systemInformation?: string | null;
        translatorCredits?: string | null;
        version?: string | null;
        website?: string | null;
        websiteLabel?: string | null;
        wrapLicense?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActivateLink?: (node: Gtk.AboutDialog, uri: string | null) => boolean;
        onNotifyArtists?: (node: Gtk.AboutDialog) => void;
        onNotifyAuthors?: (node: Gtk.AboutDialog) => void;
        onNotifyComments?: (node: Gtk.AboutDialog) => void;
        onNotifyCopyright?: (node: Gtk.AboutDialog) => void;
        onNotifyDocumenters?: (node: Gtk.AboutDialog) => void;
        onNotifyLicense?: (node: Gtk.AboutDialog) => void;
        onNotifyLicenseType?: (node: Gtk.AboutDialog) => void;
        onNotifyLogo?: (node: Gtk.AboutDialog) => void;
        onNotifyLogoIconName?: (node: Gtk.AboutDialog) => void;
        onNotifyProgramName?: (node: Gtk.AboutDialog) => void;
        onNotifySystemInformation?: (node: Gtk.AboutDialog) => void;
        onNotifyTranslatorCredits?: (node: Gtk.AboutDialog) => void;
        onNotifyVersion?: (node: Gtk.AboutDialog) => void;
        onNotifyWebsite?: (node: Gtk.AboutDialog) => void;
        onNotifyWebsiteLabel?: (node: Gtk.AboutDialog) => void;
        onNotifyWrapLicense?: (node: Gtk.AboutDialog) => void;
        onNotifyName?: (node: Gtk.AboutDialog) => void;
        onNotifyAccessibleRole?: (node: Gtk.AboutDialog) => void;
      };
      ActionBar: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ActionBar>;
        revealed?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyRevealed?: (node: Gtk.ActionBar) => void;
        onNotifyName?: (node: Gtk.ActionBar) => void;
        onNotifyAccessibleRole?: (node: Gtk.ActionBar) => void;
      };
      AppChooserButton: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.AppChooserButton>;
        heading?: string | null;
        modal?: boolean;
        showDefaultItem?: boolean;
        showDialogItem?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActivate?: (node: Gtk.AppChooserButton) => void;
        onChanged?: (node: Gtk.AppChooserButton) => void;
        onCustomItemActivated?: (
          node: Gtk.AppChooserButton,
          itemName: string | null
        ) => void;
        onNotifyHeading?: (node: Gtk.AppChooserButton) => void;
        onNotifyModal?: (node: Gtk.AppChooserButton) => void;
        onNotifyShowDefaultItem?: (node: Gtk.AppChooserButton) => void;
        onNotifyShowDialogItem?: (node: Gtk.AppChooserButton) => void;
        onNotifyName?: (node: Gtk.AppChooserButton) => void;
        onNotifyAccessibleRole?: (node: Gtk.AppChooserButton) => void;
        onNotifyContentType?: (node: Gtk.AppChooserButton) => void;
      };
      AppChooserDialog: React.JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.AppChooserDialog>;
        heading?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyGfile?: (node: Gtk.AppChooserDialog) => void;
        onNotifyHeading?: (node: Gtk.AppChooserDialog) => void;
        onNotifyName?: (node: Gtk.AppChooserDialog) => void;
        onNotifyAccessibleRole?: (node: Gtk.AppChooserDialog) => void;
        onNotifyContentType?: (node: Gtk.AppChooserDialog) => void;
      };
      AppChooserWidget: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.AppChooserWidget>;
        defaultText?: string | null;
        showAll?: boolean;
        showDefault?: boolean;
        showFallback?: boolean;
        showOther?: boolean;
        showRecommended?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onApplicationActivated?: (
          node: Gtk.AppChooserWidget,
          application: Gio.AppInfo
        ) => void;
        onApplicationSelected?: (
          node: Gtk.AppChooserWidget,
          application: Gio.AppInfo
        ) => void;
        onNotifyDefaultText?: (node: Gtk.AppChooserWidget) => void;
        onNotifyShowAll?: (node: Gtk.AppChooserWidget) => void;
        onNotifyShowDefault?: (node: Gtk.AppChooserWidget) => void;
        onNotifyShowFallback?: (node: Gtk.AppChooserWidget) => void;
        onNotifyShowOther?: (node: Gtk.AppChooserWidget) => void;
        onNotifyShowRecommended?: (node: Gtk.AppChooserWidget) => void;
        onNotifyName?: (node: Gtk.AppChooserWidget) => void;
        onNotifyAccessibleRole?: (node: Gtk.AppChooserWidget) => void;
        onNotifyContentType?: (node: Gtk.AppChooserWidget) => void;
      };
      ApplicationWindow: React.JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.ApplicationWindow>;
        showMenubar?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActionAdded?: (
          node: Gtk.ApplicationWindow,
          actionName: string | null
        ) => void;
        onActionEnabledChanged?: (
          node: Gtk.ApplicationWindow,
          actionName: string | null,
          enabled: boolean
        ) => void;
        onActionRemoved?: (
          node: Gtk.ApplicationWindow,
          actionName: string | null
        ) => void;
        onActionStateChanged?: (
          node: Gtk.ApplicationWindow,
          actionName: string | null,
          value: GLib.Variant
        ) => void;
        onNotifyShowMenubar?: (node: Gtk.ApplicationWindow) => void;
        onNotifyName?: (node: Gtk.ApplicationWindow) => void;
        onNotifyAccessibleRole?: (node: Gtk.ApplicationWindow) => void;
      };
      AspectFrame: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.AspectFrame>;
        obeyChild?: boolean;
        ratio?: number;
        xalign?: number;
        yalign?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyChild?: (node: Gtk.AspectFrame) => void;
        onNotifyObeyChild?: (node: Gtk.AspectFrame) => void;
        onNotifyRatio?: (node: Gtk.AspectFrame) => void;
        onNotifyXalign?: (node: Gtk.AspectFrame) => void;
        onNotifyYalign?: (node: Gtk.AspectFrame) => void;
        onNotifyName?: (node: Gtk.AspectFrame) => void;
        onNotifyAccessibleRole?: (node: Gtk.AspectFrame) => void;
      };
      Assistant: React.JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.Assistant>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onApply?: (node: Gtk.Assistant) => void;
        onCancel?: (node: Gtk.Assistant) => void;
        onClose?: (node: Gtk.Assistant) => void;
        onEscape?: (node: Gtk.Assistant) => void;
        onPrepare?: (node: Gtk.Assistant, page: Gtk.Widget) => void;
        onNotifyPages?: (node: Gtk.Assistant) => void;
        onNotifyUseHeaderBar?: (node: Gtk.Assistant) => void;
        onNotifyName?: (node: Gtk.Assistant) => void;
        onNotifyAccessibleRole?: (node: Gtk.Assistant) => void;
      };
      Box: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Box>;
        baselineChild?: number;
        baselinePosition?: Gtk.BaselinePosition;
        homogeneous?: boolean;
        spacing?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyBaselineChild?: (node: Gtk.Box) => void;
        onNotifyBaselinePosition?: (node: Gtk.Box) => void;
        onNotifyHomogeneous?: (node: Gtk.Box) => void;
        onNotifySpacing?: (node: Gtk.Box) => void;
        onNotifyName?: (node: Gtk.Box) => void;
        onNotifyAccessibleRole?: (node: Gtk.Box) => void;
        onNotifyOrientation?: (node: Gtk.Box) => void;
      };
      Button: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Button>;
        canShrink?: boolean;
        hasFrame?: boolean;
        iconName?: string | null;
        label?: string | null;
        useUnderline?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onActivate?: (node: Gtk.Button) => void;
        onClicked?: (node: Gtk.Button) => void;
        onNotifyCanShrink?: (node: Gtk.Button) => void;
        onNotifyChild?: (node: Gtk.Button) => void;
        onNotifyHasFrame?: (node: Gtk.Button) => void;
        onNotifyIconName?: (node: Gtk.Button) => void;
        onNotifyLabel?: (node: Gtk.Button) => void;
        onNotifyUseUnderline?: (node: Gtk.Button) => void;
        onNotifyName?: (node: Gtk.Button) => void;
        onNotifyAccessibleRole?: (node: Gtk.Button) => void;
        onNotifyActionName?: (node: Gtk.Button) => void;
        onNotifyActionTarget?: (node: Gtk.Button) => void;
      };
      Calendar: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Calendar>;
        date?: GLib.DateTime;
        day?: number;
        month?: number;
        showDayNames?: boolean;
        showHeading?: boolean;
        showWeekNumbers?: boolean;
        year?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onDaySelected?: (node: Gtk.Calendar) => void;
        onNextMonth?: (node: Gtk.Calendar) => void;
        onNextYear?: (node: Gtk.Calendar) => void;
        onPrevMonth?: (node: Gtk.Calendar) => void;
        onPrevYear?: (node: Gtk.Calendar) => void;
        onNotifyDate?: (node: Gtk.Calendar) => void;
        onNotifyDay?: (node: Gtk.Calendar) => void;
        onNotifyMonth?: (node: Gtk.Calendar) => void;
        onNotifyShowDayNames?: (node: Gtk.Calendar) => void;
        onNotifyShowHeading?: (node: Gtk.Calendar) => void;
        onNotifyShowWeekNumbers?: (node: Gtk.Calendar) => void;
        onNotifyYear?: (node: Gtk.Calendar) => void;
        onNotifyName?: (node: Gtk.Calendar) => void;
        onNotifyAccessibleRole?: (node: Gtk.Calendar) => void;
      };
      CellView: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.CellView>;
        drawSensitive?: boolean;
        fitModel?: boolean;
        model?: Gtk.TreeModel | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyCellArea?: (node: Gtk.CellView) => void;
        onNotifyCellAreaContext?: (node: Gtk.CellView) => void;
        onNotifyDrawSensitive?: (node: Gtk.CellView) => void;
        onNotifyFitModel?: (node: Gtk.CellView) => void;
        onNotifyModel?: (node: Gtk.CellView) => void;
        onNotifyName?: (node: Gtk.CellView) => void;
        onNotifyAccessibleRole?: (node: Gtk.CellView) => void;
        onNotifyOrientation?: (node: Gtk.CellView) => void;
      };
      CenterBox: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.CenterBox>;
        baselinePosition?: Gtk.BaselinePosition;
        centerWidget?: Gtk.Widget | null;
        endWidget?: Gtk.Widget | null;
        shrinkCenterLast?: boolean;
        startWidget?: Gtk.Widget | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyBaselinePosition?: (node: Gtk.CenterBox) => void;
        onNotifyCenterWidget?: (node: Gtk.CenterBox) => void;
        onNotifyEndWidget?: (node: Gtk.CenterBox) => void;
        onNotifyShrinkCenterLast?: (node: Gtk.CenterBox) => void;
        onNotifyStartWidget?: (node: Gtk.CenterBox) => void;
        onNotifyName?: (node: Gtk.CenterBox) => void;
        onNotifyAccessibleRole?: (node: Gtk.CenterBox) => void;
        onNotifyOrientation?: (node: Gtk.CenterBox) => void;
      };
      CheckButton: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.CheckButton>;
        active?: boolean;
        group?: Gtk.CheckButton | null;
        inconsistent?: boolean;
        label?: string | null;
        useUnderline?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onActivate?: (node: Gtk.CheckButton) => void;
        onToggled?: (node: Gtk.CheckButton) => void;
        onNotifyActive?: (node: Gtk.CheckButton) => void;
        onNotifyChild?: (node: Gtk.CheckButton) => void;
        onNotifyGroup?: (node: Gtk.CheckButton) => void;
        onNotifyInconsistent?: (node: Gtk.CheckButton) => void;
        onNotifyLabel?: (node: Gtk.CheckButton) => void;
        onNotifyUseUnderline?: (node: Gtk.CheckButton) => void;
        onNotifyName?: (node: Gtk.CheckButton) => void;
        onNotifyAccessibleRole?: (node: Gtk.CheckButton) => void;
        onNotifyActionName?: (node: Gtk.CheckButton) => void;
        onNotifyActionTarget?: (node: Gtk.CheckButton) => void;
      };
      ColorButton: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColorButton>;
        modal?: boolean;
        showEditor?: boolean;
        title?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        rgba?: Gdk.RGBA;
        useAlpha?: boolean;
        onActivate?: (node: Gtk.ColorButton) => void;
        onColorSet?: (node: Gtk.ColorButton) => void;
        onColorActivated?: (node: Gtk.ColorButton, color: Gdk.RGBA) => void;
        onNotifyModal?: (node: Gtk.ColorButton) => void;
        onNotifyShowEditor?: (node: Gtk.ColorButton) => void;
        onNotifyTitle?: (node: Gtk.ColorButton) => void;
        onNotifyName?: (node: Gtk.ColorButton) => void;
        onNotifyAccessibleRole?: (node: Gtk.ColorButton) => void;
        onNotifyRgba?: (node: Gtk.ColorButton) => void;
        onNotifyUseAlpha?: (node: Gtk.ColorButton) => void;
      };
      ColorChooserDialog: React.JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.ColorChooserDialog>;
        showEditor?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        rgba?: Gdk.RGBA;
        useAlpha?: boolean;
        onColorActivated?: (
          node: Gtk.ColorChooserDialog,
          color: Gdk.RGBA
        ) => void;
        onNotifyShowEditor?: (node: Gtk.ColorChooserDialog) => void;
        onNotifyName?: (node: Gtk.ColorChooserDialog) => void;
        onNotifyAccessibleRole?: (node: Gtk.ColorChooserDialog) => void;
        onNotifyRgba?: (node: Gtk.ColorChooserDialog) => void;
        onNotifyUseAlpha?: (node: Gtk.ColorChooserDialog) => void;
      };
      ColorChooserWidget: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColorChooserWidget>;
        showEditor?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        rgba?: Gdk.RGBA;
        useAlpha?: boolean;
        onColorActivated?: (
          node: Gtk.ColorChooserWidget,
          color: Gdk.RGBA
        ) => void;
        onNotifyShowEditor?: (node: Gtk.ColorChooserWidget) => void;
        onNotifyName?: (node: Gtk.ColorChooserWidget) => void;
        onNotifyAccessibleRole?: (node: Gtk.ColorChooserWidget) => void;
        onNotifyRgba?: (node: Gtk.ColorChooserWidget) => void;
        onNotifyUseAlpha?: (node: Gtk.ColorChooserWidget) => void;
      };
      ColorDialogButton: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColorDialogButton>;
        dialog?: Gtk.ColorDialog;
        rgba?: Gdk.RGBA;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActivate?: (node: Gtk.ColorDialogButton) => void;
        onNotifyDialog?: (node: Gtk.ColorDialogButton) => void;
        onNotifyRgba?: (node: Gtk.ColorDialogButton) => void;
        onNotifyName?: (node: Gtk.ColorDialogButton) => void;
        onNotifyAccessibleRole?: (node: Gtk.ColorDialogButton) => void;
      };
      ColumnView: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ColumnView>;
        enableRubberband?: boolean;
        headerFactory?: Gtk.ListItemFactory | null;
        model?: Gtk.SelectionModel | null;
        reorderable?: boolean;
        rowFactory?: Gtk.ListItemFactory | null;
        showColumnSeparators?: boolean;
        showRowSeparators?: boolean;
        singleClickActivate?: boolean;
        tabBehavior?: Gtk.ListTabBehavior;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        hadjustment?: Gtk.Adjustment | null;
        hscrollPolicy?: Gtk.ScrollablePolicy;
        vadjustment?: Gtk.Adjustment | null;
        vscrollPolicy?: Gtk.ScrollablePolicy;
        onActivate?: (node: Gtk.ColumnView, position: number) => void;
        onNotifyColumns?: (node: Gtk.ColumnView) => void;
        onNotifyEnableRubberband?: (node: Gtk.ColumnView) => void;
        onNotifyHeaderFactory?: (node: Gtk.ColumnView) => void;
        onNotifyModel?: (node: Gtk.ColumnView) => void;
        onNotifyReorderable?: (node: Gtk.ColumnView) => void;
        onNotifyRowFactory?: (node: Gtk.ColumnView) => void;
        onNotifyShowColumnSeparators?: (node: Gtk.ColumnView) => void;
        onNotifyShowRowSeparators?: (node: Gtk.ColumnView) => void;
        onNotifySingleClickActivate?: (node: Gtk.ColumnView) => void;
        onNotifySorter?: (node: Gtk.ColumnView) => void;
        onNotifyTabBehavior?: (node: Gtk.ColumnView) => void;
        onNotifyName?: (node: Gtk.ColumnView) => void;
        onNotifyAccessibleRole?: (node: Gtk.ColumnView) => void;
        onNotifyHadjustment?: (node: Gtk.ColumnView) => void;
        onNotifyHscrollPolicy?: (node: Gtk.ColumnView) => void;
        onNotifyVadjustment?: (node: Gtk.ColumnView) => void;
        onNotifyVscrollPolicy?: (node: Gtk.ColumnView) => void;
      };
      ComboBox: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ComboBox>;
        active?: number;
        activeId?: string | null;
        buttonSensitivity?: Gtk.SensitivityType;
        entryTextColumn?: number;
        hasFrame?: boolean;
        idColumn?: number;
        model?: Gtk.TreeModel | null;
        popupFixedWidth?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        editingCanceled?: boolean;
        onActivate?: (node: Gtk.ComboBox) => void;
        onChanged?: (node: Gtk.ComboBox) => void;
        onFormatEntryText?: (node: Gtk.ComboBox, path: string | null) => string;
        onMoveActive?: (node: Gtk.ComboBox, scrollType: Gtk.ScrollType) => void;
        onPopdown?: (node: Gtk.ComboBox) => boolean;
        onPopup?: (node: Gtk.ComboBox) => void;
        onEditingDone?: (node: Gtk.ComboBox) => void;
        onRemoveWidget?: (node: Gtk.ComboBox) => void;
        onNotifyActive?: (node: Gtk.ComboBox) => void;
        onNotifyActiveId?: (node: Gtk.ComboBox) => void;
        onNotifyButtonSensitivity?: (node: Gtk.ComboBox) => void;
        onNotifyChild?: (node: Gtk.ComboBox) => void;
        onNotifyEntryTextColumn?: (node: Gtk.ComboBox) => void;
        onNotifyHasEntry?: (node: Gtk.ComboBox) => void;
        onNotifyHasFrame?: (node: Gtk.ComboBox) => void;
        onNotifyIdColumn?: (node: Gtk.ComboBox) => void;
        onNotifyModel?: (node: Gtk.ComboBox) => void;
        onNotifyPopupFixedWidth?: (node: Gtk.ComboBox) => void;
        onNotifyPopupShown?: (node: Gtk.ComboBox) => void;
        onNotifyName?: (node: Gtk.ComboBox) => void;
        onNotifyAccessibleRole?: (node: Gtk.ComboBox) => void;
        onNotifyEditingCanceled?: (node: Gtk.ComboBox) => void;
      };
      ComboBoxText: React.JSX.IntrinsicElements["ComboBox"] & {
        ref?: React.Ref<Gtk.ComboBoxText>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        editingCanceled?: boolean;
        onEditingDone?: (node: Gtk.ComboBoxText) => void;
        onRemoveWidget?: (node: Gtk.ComboBoxText) => void;
        onNotifyName?: (node: Gtk.ComboBoxText) => void;
        onNotifyAccessibleRole?: (node: Gtk.ComboBoxText) => void;
        onNotifyEditingCanceled?: (node: Gtk.ComboBoxText) => void;
      };
      Dialog: React.JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.Dialog>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onClose?: (node: Gtk.Dialog) => void;
        onResponse?: (node: Gtk.Dialog, responseId: number) => void;
        onNotifyUseHeaderBar?: (node: Gtk.Dialog) => void;
        onNotifyName?: (node: Gtk.Dialog) => void;
        onNotifyAccessibleRole?: (node: Gtk.Dialog) => void;
      };
      DragIcon: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DragIcon>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyChild?: (node: Gtk.DragIcon) => void;
        onNotifyName?: (node: Gtk.DragIcon) => void;
        onNotifyAccessibleRole?: (node: Gtk.DragIcon) => void;
      };
      DrawingArea: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DrawingArea>;
        contentHeight?: number;
        contentWidth?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onResize?: (
          node: Gtk.DrawingArea,
          width: number,
          height: number
        ) => void;
        onNotifyContentHeight?: (node: Gtk.DrawingArea) => void;
        onNotifyContentWidth?: (node: Gtk.DrawingArea) => void;
        onNotifyName?: (node: Gtk.DrawingArea) => void;
        onNotifyAccessibleRole?: (node: Gtk.DrawingArea) => void;
      };
      DropDown: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.DropDown>;
        enableSearch?: boolean;
        expression?: Gtk.Expression | null;
        factory?: Gtk.ListItemFactory | null;
        headerFactory?: Gtk.ListItemFactory | null;
        listFactory?: Gtk.ListItemFactory | null;
        model?: Gio.ListModel | null;
        searchMatchMode?: Gtk.StringFilterMatchMode;
        selected?: number;
        showArrow?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActivate?: (node: Gtk.DropDown) => void;
        onNotifyEnableSearch?: (node: Gtk.DropDown) => void;
        onNotifyExpression?: (node: Gtk.DropDown) => void;
        onNotifyFactory?: (node: Gtk.DropDown) => void;
        onNotifyHeaderFactory?: (node: Gtk.DropDown) => void;
        onNotifyListFactory?: (node: Gtk.DropDown) => void;
        onNotifyModel?: (node: Gtk.DropDown) => void;
        onNotifySearchMatchMode?: (node: Gtk.DropDown) => void;
        onNotifySelected?: (node: Gtk.DropDown) => void;
        onNotifySelectedItem?: (node: Gtk.DropDown) => void;
        onNotifyShowArrow?: (node: Gtk.DropDown) => void;
        onNotifyName?: (node: Gtk.DropDown) => void;
        onNotifyAccessibleRole?: (node: Gtk.DropDown) => void;
      };
      EditableLabel: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.EditableLabel>;
        editing?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        editable?: boolean;
        enableUndo?: boolean;
        maxWidthChars?: number;
        text?: string | null;
        widthChars?: number;
        xalign?: number;
        onChanged?: (node: Gtk.EditableLabel) => void;
        onDeleteText?: (
          node: Gtk.EditableLabel,
          startPos: number,
          endPos: number
        ) => void;
        onInsertText?: (
          node: Gtk.EditableLabel,
          text: string | null,
          length: number,
          position: number
        ) => void;
        onNotifyEditing?: (node: Gtk.EditableLabel) => void;
        onNotifyName?: (node: Gtk.EditableLabel) => void;
        onNotifyAccessibleRole?: (node: Gtk.EditableLabel) => void;
        onNotifyCursorPosition?: (node: Gtk.EditableLabel) => void;
        onNotifyEditable?: (node: Gtk.EditableLabel) => void;
        onNotifyEnableUndo?: (node: Gtk.EditableLabel) => void;
        onNotifyMaxWidthChars?: (node: Gtk.EditableLabel) => void;
        onNotifySelectionBound?: (node: Gtk.EditableLabel) => void;
        onNotifyText?: (node: Gtk.EditableLabel) => void;
        onNotifyWidthChars?: (node: Gtk.EditableLabel) => void;
        onNotifyXalign?: (node: Gtk.EditableLabel) => void;
      };
      EmojiChooser: React.JSX.IntrinsicElements["Popover"] & {
        ref?: React.Ref<Gtk.EmojiChooser>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onEmojiPicked?: (node: Gtk.EmojiChooser, text: string | null) => void;
        onNotifyName?: (node: Gtk.EmojiChooser) => void;
        onNotifyAccessibleRole?: (node: Gtk.EmojiChooser) => void;
      };
      Entry: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Entry>;
        activatesDefault?: boolean;
        attributes?: Pango.AttrList;
        buffer?: Gtk.EntryBuffer;
        completion?: Gtk.EntryCompletion | null;
        enableEmojiCompletion?: boolean;
        extraMenu?: Gio.MenuModel | null;
        hasFrame?: boolean;
        imModule?: string | null;
        inputHints?: Gtk.InputHints;
        inputPurpose?: Gtk.InputPurpose;
        invisibleChar?: number;
        invisibleCharSet?: boolean;
        maxLength?: number;
        menuEntryIconPrimaryText?: string | null;
        menuEntryIconSecondaryText?: string | null;
        overwriteMode?: boolean;
        placeholderText?: string | null;
        primaryIconActivatable?: boolean;
        primaryIconGicon?: Gio.Icon;
        primaryIconName?: string | null;
        primaryIconPaintable?: Gdk.Paintable;
        primaryIconSensitive?: boolean;
        primaryIconTooltipMarkup?: string | null;
        primaryIconTooltipText?: string | null;
        progressFraction?: number;
        progressPulseStep?: number;
        secondaryIconActivatable?: boolean;
        secondaryIconGicon?: Gio.Icon;
        secondaryIconName?: string | null;
        secondaryIconPaintable?: Gdk.Paintable;
        secondaryIconSensitive?: boolean;
        secondaryIconTooltipMarkup?: string | null;
        secondaryIconTooltipText?: string | null;
        showEmojiIcon?: boolean;
        tabs?: Pango.TabArray | null;
        truncateMultiline?: boolean;
        visibility?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        editingCanceled?: boolean;
        editable?: boolean;
        enableUndo?: boolean;
        maxWidthChars?: number;
        text?: string | null;
        widthChars?: number;
        xalign?: number;
        onActivate?: (node: Gtk.Entry) => void;
        onIconPress?: (node: Gtk.Entry, iconPos: Gtk.EntryIconPosition) => void;
        onIconRelease?: (
          node: Gtk.Entry,
          iconPos: Gtk.EntryIconPosition
        ) => void;
        onEditingDone?: (node: Gtk.Entry) => void;
        onRemoveWidget?: (node: Gtk.Entry) => void;
        onChanged?: (node: Gtk.Entry) => void;
        onDeleteText?: (
          node: Gtk.Entry,
          startPos: number,
          endPos: number
        ) => void;
        onInsertText?: (
          node: Gtk.Entry,
          text: string | null,
          length: number,
          position: number
        ) => void;
        onNotifyActivatesDefault?: (node: Gtk.Entry) => void;
        onNotifyAttributes?: (node: Gtk.Entry) => void;
        onNotifyBuffer?: (node: Gtk.Entry) => void;
        onNotifyCompletion?: (node: Gtk.Entry) => void;
        onNotifyEnableEmojiCompletion?: (node: Gtk.Entry) => void;
        onNotifyExtraMenu?: (node: Gtk.Entry) => void;
        onNotifyHasFrame?: (node: Gtk.Entry) => void;
        onNotifyImModule?: (node: Gtk.Entry) => void;
        onNotifyInputHints?: (node: Gtk.Entry) => void;
        onNotifyInputPurpose?: (node: Gtk.Entry) => void;
        onNotifyInvisibleChar?: (node: Gtk.Entry) => void;
        onNotifyInvisibleCharSet?: (node: Gtk.Entry) => void;
        onNotifyMaxLength?: (node: Gtk.Entry) => void;
        onNotifyMenuEntryIconPrimaryText?: (node: Gtk.Entry) => void;
        onNotifyMenuEntryIconSecondaryText?: (node: Gtk.Entry) => void;
        onNotifyOverwriteMode?: (node: Gtk.Entry) => void;
        onNotifyPlaceholderText?: (node: Gtk.Entry) => void;
        onNotifyPrimaryIconActivatable?: (node: Gtk.Entry) => void;
        onNotifyPrimaryIconGicon?: (node: Gtk.Entry) => void;
        onNotifyPrimaryIconName?: (node: Gtk.Entry) => void;
        onNotifyPrimaryIconPaintable?: (node: Gtk.Entry) => void;
        onNotifyPrimaryIconSensitive?: (node: Gtk.Entry) => void;
        onNotifyPrimaryIconStorageType?: (node: Gtk.Entry) => void;
        onNotifyPrimaryIconTooltipMarkup?: (node: Gtk.Entry) => void;
        onNotifyPrimaryIconTooltipText?: (node: Gtk.Entry) => void;
        onNotifyProgressFraction?: (node: Gtk.Entry) => void;
        onNotifyProgressPulseStep?: (node: Gtk.Entry) => void;
        onNotifyScrollOffset?: (node: Gtk.Entry) => void;
        onNotifySecondaryIconActivatable?: (node: Gtk.Entry) => void;
        onNotifySecondaryIconGicon?: (node: Gtk.Entry) => void;
        onNotifySecondaryIconName?: (node: Gtk.Entry) => void;
        onNotifySecondaryIconPaintable?: (node: Gtk.Entry) => void;
        onNotifySecondaryIconSensitive?: (node: Gtk.Entry) => void;
        onNotifySecondaryIconStorageType?: (node: Gtk.Entry) => void;
        onNotifySecondaryIconTooltipMarkup?: (node: Gtk.Entry) => void;
        onNotifySecondaryIconTooltipText?: (node: Gtk.Entry) => void;
        onNotifyShowEmojiIcon?: (node: Gtk.Entry) => void;
        onNotifyTabs?: (node: Gtk.Entry) => void;
        onNotifyTextLength?: (node: Gtk.Entry) => void;
        onNotifyTruncateMultiline?: (node: Gtk.Entry) => void;
        onNotifyVisibility?: (node: Gtk.Entry) => void;
        onNotifyName?: (node: Gtk.Entry) => void;
        onNotifyAccessibleRole?: (node: Gtk.Entry) => void;
        onNotifyEditingCanceled?: (node: Gtk.Entry) => void;
        onNotifyCursorPosition?: (node: Gtk.Entry) => void;
        onNotifyEditable?: (node: Gtk.Entry) => void;
        onNotifyEnableUndo?: (node: Gtk.Entry) => void;
        onNotifyMaxWidthChars?: (node: Gtk.Entry) => void;
        onNotifySelectionBound?: (node: Gtk.Entry) => void;
        onNotifyText?: (node: Gtk.Entry) => void;
        onNotifyWidthChars?: (node: Gtk.Entry) => void;
        onNotifyXalign?: (node: Gtk.Entry) => void;
      };
      Expander: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Expander>;
        expanded?: boolean;
        label?: string | null;
        labelWidget?: Gtk.Widget | null;
        resizeToplevel?: boolean;
        useMarkup?: boolean;
        useUnderline?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActivate?: (node: Gtk.Expander) => void;
        onNotifyChild?: (node: Gtk.Expander) => void;
        onNotifyExpanded?: (node: Gtk.Expander) => void;
        onNotifyLabel?: (node: Gtk.Expander) => void;
        onNotifyLabelWidget?: (node: Gtk.Expander) => void;
        onNotifyResizeToplevel?: (node: Gtk.Expander) => void;
        onNotifyUseMarkup?: (node: Gtk.Expander) => void;
        onNotifyUseUnderline?: (node: Gtk.Expander) => void;
        onNotifyName?: (node: Gtk.Expander) => void;
        onNotifyAccessibleRole?: (node: Gtk.Expander) => void;
      };
      FileChooserDialog: React.JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.FileChooserDialog>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        action?: Gtk.FileChooserAction;
        createFolders?: boolean;
        filter?: Gtk.FileFilter;
        selectMultiple?: boolean;
        onNotifyName?: (node: Gtk.FileChooserDialog) => void;
        onNotifyAccessibleRole?: (node: Gtk.FileChooserDialog) => void;
        onNotifyAction?: (node: Gtk.FileChooserDialog) => void;
        onNotifyCreateFolders?: (node: Gtk.FileChooserDialog) => void;
        onNotifyFilter?: (node: Gtk.FileChooserDialog) => void;
        onNotifyFilters?: (node: Gtk.FileChooserDialog) => void;
        onNotifySelectMultiple?: (node: Gtk.FileChooserDialog) => void;
        onNotifyShortcutFolders?: (node: Gtk.FileChooserDialog) => void;
      };
      FileChooserWidget: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FileChooserWidget>;
        searchMode?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        action?: Gtk.FileChooserAction;
        createFolders?: boolean;
        filter?: Gtk.FileFilter;
        selectMultiple?: boolean;
        onDesktopFolder?: (node: Gtk.FileChooserWidget) => void;
        onDownFolder?: (node: Gtk.FileChooserWidget) => void;
        onHomeFolder?: (node: Gtk.FileChooserWidget) => void;
        onLocationPopup?: (
          node: Gtk.FileChooserWidget,
          path: string | null
        ) => void;
        onLocationPopupOnPaste?: (node: Gtk.FileChooserWidget) => void;
        onLocationTogglePopup?: (node: Gtk.FileChooserWidget) => void;
        onPlacesShortcut?: (node: Gtk.FileChooserWidget) => void;
        onQuickBookmark?: (
          node: Gtk.FileChooserWidget,
          bookmarkIndex: number
        ) => void;
        onRecentShortcut?: (node: Gtk.FileChooserWidget) => void;
        onSearchShortcut?: (node: Gtk.FileChooserWidget) => void;
        onShowHidden?: (node: Gtk.FileChooserWidget) => void;
        onUpFolder?: (node: Gtk.FileChooserWidget) => void;
        onNotifySearchMode?: (node: Gtk.FileChooserWidget) => void;
        onNotifyShowTime?: (node: Gtk.FileChooserWidget) => void;
        onNotifySubtitle?: (node: Gtk.FileChooserWidget) => void;
        onNotifyName?: (node: Gtk.FileChooserWidget) => void;
        onNotifyAccessibleRole?: (node: Gtk.FileChooserWidget) => void;
        onNotifyAction?: (node: Gtk.FileChooserWidget) => void;
        onNotifyCreateFolders?: (node: Gtk.FileChooserWidget) => void;
        onNotifyFilter?: (node: Gtk.FileChooserWidget) => void;
        onNotifyFilters?: (node: Gtk.FileChooserWidget) => void;
        onNotifySelectMultiple?: (node: Gtk.FileChooserWidget) => void;
        onNotifyShortcutFolders?: (node: Gtk.FileChooserWidget) => void;
      };
      Fixed: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Fixed>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyName?: (node: Gtk.Fixed) => void;
        onNotifyAccessibleRole?: (node: Gtk.Fixed) => void;
      };
      FlowBox: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FlowBox>;
        acceptUnpairedRelease?: boolean;
        activateOnSingleClick?: boolean;
        columnSpacing?: number;
        homogeneous?: boolean;
        maxChildrenPerLine?: number;
        minChildrenPerLine?: number;
        rowSpacing?: number;
        selectionMode?: Gtk.SelectionMode;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onActivateCursorChild?: (node: Gtk.FlowBox) => void;
        onChildActivated?: (node: Gtk.FlowBox, child: Gtk.FlowBoxChild) => void;
        onMoveCursor?: (
          node: Gtk.FlowBox,
          step: Gtk.MovementStep,
          count: number,
          extend: boolean,
          modify: boolean
        ) => boolean;
        onSelectAll?: (node: Gtk.FlowBox) => void;
        onSelectedChildrenChanged?: (node: Gtk.FlowBox) => void;
        onToggleCursorChild?: (node: Gtk.FlowBox) => void;
        onUnselectAll?: (node: Gtk.FlowBox) => void;
        onNotifyAcceptUnpairedRelease?: (node: Gtk.FlowBox) => void;
        onNotifyActivateOnSingleClick?: (node: Gtk.FlowBox) => void;
        onNotifyColumnSpacing?: (node: Gtk.FlowBox) => void;
        onNotifyHomogeneous?: (node: Gtk.FlowBox) => void;
        onNotifyMaxChildrenPerLine?: (node: Gtk.FlowBox) => void;
        onNotifyMinChildrenPerLine?: (node: Gtk.FlowBox) => void;
        onNotifyRowSpacing?: (node: Gtk.FlowBox) => void;
        onNotifySelectionMode?: (node: Gtk.FlowBox) => void;
        onNotifyName?: (node: Gtk.FlowBox) => void;
        onNotifyAccessibleRole?: (node: Gtk.FlowBox) => void;
        onNotifyOrientation?: (node: Gtk.FlowBox) => void;
      };
      FlowBoxChild: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FlowBoxChild>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActivate?: (node: Gtk.FlowBoxChild) => void;
        onNotifyChild?: (node: Gtk.FlowBoxChild) => void;
        onNotifyName?: (node: Gtk.FlowBoxChild) => void;
        onNotifyAccessibleRole?: (node: Gtk.FlowBoxChild) => void;
      };
      FontButton: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FontButton>;
        modal?: boolean;
        title?: string | null;
        useFont?: boolean;
        useSize?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        font?: string | null;
        fontDesc?: Pango.FontDescription;
        language?: string | null;
        level?: Gtk.FontChooserLevel;
        previewText?: string | null;
        showPreviewEntry?: boolean;
        onActivate?: (node: Gtk.FontButton) => void;
        onFontSet?: (node: Gtk.FontButton) => void;
        onFontActivated?: (
          node: Gtk.FontButton,
          fontname: string | null
        ) => void;
        onNotifyModal?: (node: Gtk.FontButton) => void;
        onNotifyTitle?: (node: Gtk.FontButton) => void;
        onNotifyUseFont?: (node: Gtk.FontButton) => void;
        onNotifyUseSize?: (node: Gtk.FontButton) => void;
        onNotifyName?: (node: Gtk.FontButton) => void;
        onNotifyAccessibleRole?: (node: Gtk.FontButton) => void;
        onNotifyFont?: (node: Gtk.FontButton) => void;
        onNotifyFontDesc?: (node: Gtk.FontButton) => void;
        onNotifyFontFeatures?: (node: Gtk.FontButton) => void;
        onNotifyLanguage?: (node: Gtk.FontButton) => void;
        onNotifyLevel?: (node: Gtk.FontButton) => void;
        onNotifyPreviewText?: (node: Gtk.FontButton) => void;
        onNotifyShowPreviewEntry?: (node: Gtk.FontButton) => void;
      };
      FontChooserDialog: React.JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.FontChooserDialog>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        font?: string | null;
        fontDesc?: Pango.FontDescription;
        language?: string | null;
        level?: Gtk.FontChooserLevel;
        previewText?: string | null;
        showPreviewEntry?: boolean;
        onFontActivated?: (
          node: Gtk.FontChooserDialog,
          fontname: string | null
        ) => void;
        onNotifyName?: (node: Gtk.FontChooserDialog) => void;
        onNotifyAccessibleRole?: (node: Gtk.FontChooserDialog) => void;
        onNotifyFont?: (node: Gtk.FontChooserDialog) => void;
        onNotifyFontDesc?: (node: Gtk.FontChooserDialog) => void;
        onNotifyFontFeatures?: (node: Gtk.FontChooserDialog) => void;
        onNotifyLanguage?: (node: Gtk.FontChooserDialog) => void;
        onNotifyLevel?: (node: Gtk.FontChooserDialog) => void;
        onNotifyPreviewText?: (node: Gtk.FontChooserDialog) => void;
        onNotifyShowPreviewEntry?: (node: Gtk.FontChooserDialog) => void;
      };
      FontChooserWidget: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FontChooserWidget>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        font?: string | null;
        fontDesc?: Pango.FontDescription;
        language?: string | null;
        level?: Gtk.FontChooserLevel;
        previewText?: string | null;
        showPreviewEntry?: boolean;
        onFontActivated?: (
          node: Gtk.FontChooserWidget,
          fontname: string | null
        ) => void;
        onNotifyTweakAction?: (node: Gtk.FontChooserWidget) => void;
        onNotifyName?: (node: Gtk.FontChooserWidget) => void;
        onNotifyAccessibleRole?: (node: Gtk.FontChooserWidget) => void;
        onNotifyFont?: (node: Gtk.FontChooserWidget) => void;
        onNotifyFontDesc?: (node: Gtk.FontChooserWidget) => void;
        onNotifyFontFeatures?: (node: Gtk.FontChooserWidget) => void;
        onNotifyLanguage?: (node: Gtk.FontChooserWidget) => void;
        onNotifyLevel?: (node: Gtk.FontChooserWidget) => void;
        onNotifyPreviewText?: (node: Gtk.FontChooserWidget) => void;
        onNotifyShowPreviewEntry?: (node: Gtk.FontChooserWidget) => void;
      };
      FontDialogButton: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.FontDialogButton>;
        dialog?: Gtk.FontDialog;
        fontDesc?: Pango.FontDescription;
        fontFeatures?: string | null;
        language?: Pango.Language | null;
        level?: Gtk.FontLevel;
        useFont?: boolean;
        useSize?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActivate?: (node: Gtk.FontDialogButton) => void;
        onNotifyDialog?: (node: Gtk.FontDialogButton) => void;
        onNotifyFontDesc?: (node: Gtk.FontDialogButton) => void;
        onNotifyFontFeatures?: (node: Gtk.FontDialogButton) => void;
        onNotifyLanguage?: (node: Gtk.FontDialogButton) => void;
        onNotifyLevel?: (node: Gtk.FontDialogButton) => void;
        onNotifyUseFont?: (node: Gtk.FontDialogButton) => void;
        onNotifyUseSize?: (node: Gtk.FontDialogButton) => void;
        onNotifyName?: (node: Gtk.FontDialogButton) => void;
        onNotifyAccessibleRole?: (node: Gtk.FontDialogButton) => void;
      };
      Frame: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Frame>;
        label?: string | null;
        labelWidget?: Gtk.Widget | null;
        labelXalign?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyChild?: (node: Gtk.Frame) => void;
        onNotifyLabel?: (node: Gtk.Frame) => void;
        onNotifyLabelWidget?: (node: Gtk.Frame) => void;
        onNotifyLabelXalign?: (node: Gtk.Frame) => void;
        onNotifyName?: (node: Gtk.Frame) => void;
        onNotifyAccessibleRole?: (node: Gtk.Frame) => void;
      };
      GLArea: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.GLArea>;
        allowedApis?: Gdk.GLAPI;
        autoRender?: boolean;
        hasDepthBuffer?: boolean;
        hasStencilBuffer?: boolean;
        useEs?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onCreateContext?: (node: Gtk.GLArea) => Gdk.GLContext;
        onRender?: (node: Gtk.GLArea, context: Gdk.GLContext) => boolean;
        onResize?: (node: Gtk.GLArea, width: number, height: number) => void;
        onNotifyAllowedApis?: (node: Gtk.GLArea) => void;
        onNotifyApi?: (node: Gtk.GLArea) => void;
        onNotifyAutoRender?: (node: Gtk.GLArea) => void;
        onNotifyContext?: (node: Gtk.GLArea) => void;
        onNotifyHasDepthBuffer?: (node: Gtk.GLArea) => void;
        onNotifyHasStencilBuffer?: (node: Gtk.GLArea) => void;
        onNotifyUseEs?: (node: Gtk.GLArea) => void;
        onNotifyName?: (node: Gtk.GLArea) => void;
        onNotifyAccessibleRole?: (node: Gtk.GLArea) => void;
      };
      GraphicsOffload: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.GraphicsOffload>;
        blackBackground?: boolean;
        enabled?: Gtk.GraphicsOffloadEnabled;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyBlackBackground?: (node: Gtk.GraphicsOffload) => void;
        onNotifyChild?: (node: Gtk.GraphicsOffload) => void;
        onNotifyEnabled?: (node: Gtk.GraphicsOffload) => void;
        onNotifyName?: (node: Gtk.GraphicsOffload) => void;
        onNotifyAccessibleRole?: (node: Gtk.GraphicsOffload) => void;
      };
      Grid: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Grid>;
        baselineRow?: number;
        columnHomogeneous?: boolean;
        columnSpacing?: number;
        rowHomogeneous?: boolean;
        rowSpacing?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyBaselineRow?: (node: Gtk.Grid) => void;
        onNotifyColumnHomogeneous?: (node: Gtk.Grid) => void;
        onNotifyColumnSpacing?: (node: Gtk.Grid) => void;
        onNotifyRowHomogeneous?: (node: Gtk.Grid) => void;
        onNotifyRowSpacing?: (node: Gtk.Grid) => void;
        onNotifyName?: (node: Gtk.Grid) => void;
        onNotifyAccessibleRole?: (node: Gtk.Grid) => void;
        onNotifyOrientation?: (node: Gtk.Grid) => void;
      };
      GridView: React.JSX.IntrinsicElements["ListBase"] & {
        ref?: React.Ref<Gtk.GridView>;
        enableRubberband?: boolean;
        factory?: Gtk.ListItemFactory | null;
        maxColumns?: number;
        minColumns?: number;
        model?: Gtk.SelectionModel | null;
        singleClickActivate?: boolean;
        tabBehavior?: Gtk.ListTabBehavior;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        hadjustment?: Gtk.Adjustment | null;
        hscrollPolicy?: Gtk.ScrollablePolicy;
        vadjustment?: Gtk.Adjustment | null;
        vscrollPolicy?: Gtk.ScrollablePolicy;
        onActivate?: (node: Gtk.GridView, position: number) => void;
        onNotifyEnableRubberband?: (node: Gtk.GridView) => void;
        onNotifyFactory?: (node: Gtk.GridView) => void;
        onNotifyMaxColumns?: (node: Gtk.GridView) => void;
        onNotifyMinColumns?: (node: Gtk.GridView) => void;
        onNotifyModel?: (node: Gtk.GridView) => void;
        onNotifySingleClickActivate?: (node: Gtk.GridView) => void;
        onNotifyTabBehavior?: (node: Gtk.GridView) => void;
        onNotifyName?: (node: Gtk.GridView) => void;
        onNotifyAccessibleRole?: (node: Gtk.GridView) => void;
        onNotifyOrientation?: (node: Gtk.GridView) => void;
        onNotifyHadjustment?: (node: Gtk.GridView) => void;
        onNotifyHscrollPolicy?: (node: Gtk.GridView) => void;
        onNotifyVadjustment?: (node: Gtk.GridView) => void;
        onNotifyVscrollPolicy?: (node: Gtk.GridView) => void;
      };
      HeaderBar: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.HeaderBar>;
        decorationLayout?: string | null;
        showTitleButtons?: boolean;
        titleWidget?: Gtk.Widget | null;
        useNativeControls?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyDecorationLayout?: (node: Gtk.HeaderBar) => void;
        onNotifyShowTitleButtons?: (node: Gtk.HeaderBar) => void;
        onNotifyTitleWidget?: (node: Gtk.HeaderBar) => void;
        onNotifyUseNativeControls?: (node: Gtk.HeaderBar) => void;
        onNotifyName?: (node: Gtk.HeaderBar) => void;
        onNotifyAccessibleRole?: (node: Gtk.HeaderBar) => void;
      };
      IconView: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.IconView>;
        activateOnSingleClick?: boolean;
        columnSpacing?: number;
        columns?: number;
        itemOrientation?: Gtk.Orientation;
        itemPadding?: number;
        itemWidth?: number;
        margin?: number;
        markupColumn?: number;
        model?: Gtk.TreeModel | null;
        pixbufColumn?: number;
        reorderable?: boolean;
        rowSpacing?: number;
        selectionMode?: Gtk.SelectionMode;
        spacing?: number;
        textColumn?: number;
        tooltipColumn?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        hadjustment?: Gtk.Adjustment | null;
        hscrollPolicy?: Gtk.ScrollablePolicy;
        vadjustment?: Gtk.Adjustment | null;
        vscrollPolicy?: Gtk.ScrollablePolicy;
        onActivateCursorItem?: (node: Gtk.IconView) => boolean;
        onItemActivated?: (node: Gtk.IconView, path: Gtk.TreePath) => void;
        onMoveCursor?: (
          node: Gtk.IconView,
          step: Gtk.MovementStep,
          count: number,
          extend: boolean,
          modify: boolean
        ) => boolean;
        onSelectAll?: (node: Gtk.IconView) => void;
        onSelectCursorItem?: (node: Gtk.IconView) => void;
        onSelectionChanged?: (node: Gtk.IconView) => void;
        onToggleCursorItem?: (node: Gtk.IconView) => void;
        onUnselectAll?: (node: Gtk.IconView) => void;
        onNotifyActivateOnSingleClick?: (node: Gtk.IconView) => void;
        onNotifyCellArea?: (node: Gtk.IconView) => void;
        onNotifyColumnSpacing?: (node: Gtk.IconView) => void;
        onNotifyColumns?: (node: Gtk.IconView) => void;
        onNotifyItemOrientation?: (node: Gtk.IconView) => void;
        onNotifyItemPadding?: (node: Gtk.IconView) => void;
        onNotifyItemWidth?: (node: Gtk.IconView) => void;
        onNotifyMargin?: (node: Gtk.IconView) => void;
        onNotifyMarkupColumn?: (node: Gtk.IconView) => void;
        onNotifyModel?: (node: Gtk.IconView) => void;
        onNotifyPixbufColumn?: (node: Gtk.IconView) => void;
        onNotifyReorderable?: (node: Gtk.IconView) => void;
        onNotifyRowSpacing?: (node: Gtk.IconView) => void;
        onNotifySelectionMode?: (node: Gtk.IconView) => void;
        onNotifySpacing?: (node: Gtk.IconView) => void;
        onNotifyTextColumn?: (node: Gtk.IconView) => void;
        onNotifyTooltipColumn?: (node: Gtk.IconView) => void;
        onNotifyName?: (node: Gtk.IconView) => void;
        onNotifyAccessibleRole?: (node: Gtk.IconView) => void;
        onNotifyHadjustment?: (node: Gtk.IconView) => void;
        onNotifyHscrollPolicy?: (node: Gtk.IconView) => void;
        onNotifyVadjustment?: (node: Gtk.IconView) => void;
        onNotifyVscrollPolicy?: (node: Gtk.IconView) => void;
      };
      Image: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Image>;
        file?: string | null;
        gicon?: Gio.Icon;
        iconName?: string | null;
        iconSize?: Gtk.IconSize;
        paintable?: Gdk.Paintable | null;
        pixelSize?: number;
        resource?: string | null;
        useFallback?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyFile?: (node: Gtk.Image) => void;
        onNotifyGicon?: (node: Gtk.Image) => void;
        onNotifyIconName?: (node: Gtk.Image) => void;
        onNotifyIconSize?: (node: Gtk.Image) => void;
        onNotifyPaintable?: (node: Gtk.Image) => void;
        onNotifyPixelSize?: (node: Gtk.Image) => void;
        onNotifyResource?: (node: Gtk.Image) => void;
        onNotifyStorageType?: (node: Gtk.Image) => void;
        onNotifyUseFallback?: (node: Gtk.Image) => void;
        onNotifyName?: (node: Gtk.Image) => void;
        onNotifyAccessibleRole?: (node: Gtk.Image) => void;
      };
      InfoBar: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.InfoBar>;
        messageType?: Gtk.MessageType;
        revealed?: boolean;
        showCloseButton?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onClose?: (node: Gtk.InfoBar) => void;
        onResponse?: (node: Gtk.InfoBar, responseId: number) => void;
        onNotifyMessageType?: (node: Gtk.InfoBar) => void;
        onNotifyRevealed?: (node: Gtk.InfoBar) => void;
        onNotifyShowCloseButton?: (node: Gtk.InfoBar) => void;
        onNotifyName?: (node: Gtk.InfoBar) => void;
        onNotifyAccessibleRole?: (node: Gtk.InfoBar) => void;
      };
      Inscription: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Inscription>;
        attributes?: Pango.AttrList | null;
        markup?: string | null;
        minChars?: number;
        minLines?: number;
        natChars?: number;
        natLines?: number;
        text?: string | null;
        textOverflow?: Gtk.InscriptionOverflow;
        wrapMode?: Pango.WrapMode;
        xalign?: number;
        yalign?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyAttributes?: (node: Gtk.Inscription) => void;
        onNotifyMarkup?: (node: Gtk.Inscription) => void;
        onNotifyMinChars?: (node: Gtk.Inscription) => void;
        onNotifyMinLines?: (node: Gtk.Inscription) => void;
        onNotifyNatChars?: (node: Gtk.Inscription) => void;
        onNotifyNatLines?: (node: Gtk.Inscription) => void;
        onNotifyText?: (node: Gtk.Inscription) => void;
        onNotifyTextOverflow?: (node: Gtk.Inscription) => void;
        onNotifyWrapMode?: (node: Gtk.Inscription) => void;
        onNotifyXalign?: (node: Gtk.Inscription) => void;
        onNotifyYalign?: (node: Gtk.Inscription) => void;
        onNotifyName?: (node: Gtk.Inscription) => void;
        onNotifyAccessibleRole?: (node: Gtk.Inscription) => void;
      };
      Label: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Label>;
        attributes?: Pango.AttrList | null;
        ellipsize?: Pango.EllipsizeMode;
        extraMenu?: Gio.MenuModel | null;
        justify?: Gtk.Justification;
        label?: string | null;
        lines?: number;
        maxWidthChars?: number;
        mnemonicWidget?: Gtk.Widget | null;
        naturalWrapMode?: Gtk.NaturalWrapMode;
        selectable?: boolean;
        singleLineMode?: boolean;
        tabs?: Pango.TabArray | null;
        useMarkup?: boolean;
        useUnderline?: boolean;
        widthChars?: number;
        wrap?: boolean;
        wrapMode?: Pango.WrapMode;
        xalign?: number;
        yalign?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActivateCurrentLink?: (node: Gtk.Label) => void;
        onActivateLink?: (node: Gtk.Label, uri: string | null) => boolean;
        onCopyClipboard?: (node: Gtk.Label) => void;
        onMoveCursor?: (
          node: Gtk.Label,
          step: Gtk.MovementStep,
          count: number,
          extendSelection: boolean
        ) => void;
        onNotifyAttributes?: (node: Gtk.Label) => void;
        onNotifyEllipsize?: (node: Gtk.Label) => void;
        onNotifyExtraMenu?: (node: Gtk.Label) => void;
        onNotifyJustify?: (node: Gtk.Label) => void;
        onNotifyLabel?: (node: Gtk.Label) => void;
        onNotifyLines?: (node: Gtk.Label) => void;
        onNotifyMaxWidthChars?: (node: Gtk.Label) => void;
        onNotifyMnemonicKeyval?: (node: Gtk.Label) => void;
        onNotifyMnemonicWidget?: (node: Gtk.Label) => void;
        onNotifyNaturalWrapMode?: (node: Gtk.Label) => void;
        onNotifySelectable?: (node: Gtk.Label) => void;
        onNotifySingleLineMode?: (node: Gtk.Label) => void;
        onNotifyTabs?: (node: Gtk.Label) => void;
        onNotifyUseMarkup?: (node: Gtk.Label) => void;
        onNotifyUseUnderline?: (node: Gtk.Label) => void;
        onNotifyWidthChars?: (node: Gtk.Label) => void;
        onNotifyWrap?: (node: Gtk.Label) => void;
        onNotifyWrapMode?: (node: Gtk.Label) => void;
        onNotifyXalign?: (node: Gtk.Label) => void;
        onNotifyYalign?: (node: Gtk.Label) => void;
        onNotifyName?: (node: Gtk.Label) => void;
        onNotifyAccessibleRole?: (node: Gtk.Label) => void;
      };
      LevelBar: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.LevelBar>;
        inverted?: boolean;
        maxValue?: number;
        minValue?: number;
        mode?: Gtk.LevelBarMode;
        value?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onOffsetChanged?: (node: Gtk.LevelBar, name: string | null) => void;
        onNotifyInverted?: (node: Gtk.LevelBar) => void;
        onNotifyMaxValue?: (node: Gtk.LevelBar) => void;
        onNotifyMinValue?: (node: Gtk.LevelBar) => void;
        onNotifyMode?: (node: Gtk.LevelBar) => void;
        onNotifyValue?: (node: Gtk.LevelBar) => void;
        onNotifyName?: (node: Gtk.LevelBar) => void;
        onNotifyAccessibleRole?: (node: Gtk.LevelBar) => void;
        onNotifyOrientation?: (node: Gtk.LevelBar) => void;
      };
      LinkButton: React.JSX.IntrinsicElements["Button"] & {
        ref?: React.Ref<Gtk.LinkButton>;
        uri?: string | null;
        visited?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onActivateLink?: (node: Gtk.LinkButton) => boolean;
        onNotifyUri?: (node: Gtk.LinkButton) => void;
        onNotifyVisited?: (node: Gtk.LinkButton) => void;
        onNotifyName?: (node: Gtk.LinkButton) => void;
        onNotifyAccessibleRole?: (node: Gtk.LinkButton) => void;
        onNotifyActionName?: (node: Gtk.LinkButton) => void;
        onNotifyActionTarget?: (node: Gtk.LinkButton) => void;
      };
      ListBase: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBase>;
        orientation?: Gtk.Orientation;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        hadjustment?: Gtk.Adjustment | null;
        hscrollPolicy?: Gtk.ScrollablePolicy;
        vadjustment?: Gtk.Adjustment | null;
        vscrollPolicy?: Gtk.ScrollablePolicy;
        onNotifyOrientation?: (node: Gtk.ListBase) => void;
        onNotifyName?: (node: Gtk.ListBase) => void;
        onNotifyAccessibleRole?: (node: Gtk.ListBase) => void;
        onNotifyHadjustment?: (node: Gtk.ListBase) => void;
        onNotifyHscrollPolicy?: (node: Gtk.ListBase) => void;
        onNotifyVadjustment?: (node: Gtk.ListBase) => void;
        onNotifyVscrollPolicy?: (node: Gtk.ListBase) => void;
      };
      ListBox: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBox>;
        acceptUnpairedRelease?: boolean;
        activateOnSingleClick?: boolean;
        selectionMode?: Gtk.SelectionMode;
        showSeparators?: boolean;
        tabBehavior?: Gtk.ListTabBehavior;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActivateCursorRow?: (node: Gtk.ListBox) => void;
        onMoveCursor?: (
          node: Gtk.ListBox,
          step: Gtk.MovementStep,
          count: number,
          extend: boolean,
          modify: boolean
        ) => void;
        onRowActivated?: (node: Gtk.ListBox, row: Gtk.ListBoxRow) => void;
        onRowSelected?: (node: Gtk.ListBox, row: Gtk.ListBoxRow | null) => void;
        onSelectAll?: (node: Gtk.ListBox) => void;
        onSelectedRowsChanged?: (node: Gtk.ListBox) => void;
        onToggleCursorRow?: (node: Gtk.ListBox) => void;
        onUnselectAll?: (node: Gtk.ListBox) => void;
        onNotifyAcceptUnpairedRelease?: (node: Gtk.ListBox) => void;
        onNotifyActivateOnSingleClick?: (node: Gtk.ListBox) => void;
        onNotifySelectionMode?: (node: Gtk.ListBox) => void;
        onNotifyShowSeparators?: (node: Gtk.ListBox) => void;
        onNotifyTabBehavior?: (node: Gtk.ListBox) => void;
        onNotifyName?: (node: Gtk.ListBox) => void;
        onNotifyAccessibleRole?: (node: Gtk.ListBox) => void;
      };
      ListBoxRow: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ListBoxRow>;
        activatable?: boolean;
        selectable?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onActivate?: (node: Gtk.ListBoxRow) => void;
        onNotifyActivatable?: (node: Gtk.ListBoxRow) => void;
        onNotifyChild?: (node: Gtk.ListBoxRow) => void;
        onNotifySelectable?: (node: Gtk.ListBoxRow) => void;
        onNotifyName?: (node: Gtk.ListBoxRow) => void;
        onNotifyAccessibleRole?: (node: Gtk.ListBoxRow) => void;
        onNotifyActionName?: (node: Gtk.ListBoxRow) => void;
        onNotifyActionTarget?: (node: Gtk.ListBoxRow) => void;
      };
      ListView: React.JSX.IntrinsicElements["ListBase"] & {
        ref?: React.Ref<Gtk.ListView>;
        enableRubberband?: boolean;
        factory?: Gtk.ListItemFactory | null;
        headerFactory?: Gtk.ListItemFactory | null;
        model?: Gtk.SelectionModel | null;
        showSeparators?: boolean;
        singleClickActivate?: boolean;
        tabBehavior?: Gtk.ListTabBehavior;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        hadjustment?: Gtk.Adjustment | null;
        hscrollPolicy?: Gtk.ScrollablePolicy;
        vadjustment?: Gtk.Adjustment | null;
        vscrollPolicy?: Gtk.ScrollablePolicy;
        onActivate?: (node: Gtk.ListView, position: number) => void;
        onNotifyEnableRubberband?: (node: Gtk.ListView) => void;
        onNotifyFactory?: (node: Gtk.ListView) => void;
        onNotifyHeaderFactory?: (node: Gtk.ListView) => void;
        onNotifyModel?: (node: Gtk.ListView) => void;
        onNotifyShowSeparators?: (node: Gtk.ListView) => void;
        onNotifySingleClickActivate?: (node: Gtk.ListView) => void;
        onNotifyTabBehavior?: (node: Gtk.ListView) => void;
        onNotifyName?: (node: Gtk.ListView) => void;
        onNotifyAccessibleRole?: (node: Gtk.ListView) => void;
        onNotifyOrientation?: (node: Gtk.ListView) => void;
        onNotifyHadjustment?: (node: Gtk.ListView) => void;
        onNotifyHscrollPolicy?: (node: Gtk.ListView) => void;
        onNotifyVadjustment?: (node: Gtk.ListView) => void;
        onNotifyVscrollPolicy?: (node: Gtk.ListView) => void;
      };
      LockButton: React.JSX.IntrinsicElements["Button"] & {
        ref?: React.Ref<Gtk.LockButton>;
        permission?: Gio.Permission | null;
        textLock?: string | null;
        textUnlock?: string | null;
        tooltipLock?: string | null;
        tooltipNotAuthorized?: string | null;
        tooltipUnlock?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onNotifyPermission?: (node: Gtk.LockButton) => void;
        onNotifyTextLock?: (node: Gtk.LockButton) => void;
        onNotifyTextUnlock?: (node: Gtk.LockButton) => void;
        onNotifyTooltipLock?: (node: Gtk.LockButton) => void;
        onNotifyTooltipNotAuthorized?: (node: Gtk.LockButton) => void;
        onNotifyTooltipUnlock?: (node: Gtk.LockButton) => void;
        onNotifyName?: (node: Gtk.LockButton) => void;
        onNotifyAccessibleRole?: (node: Gtk.LockButton) => void;
        onNotifyActionName?: (node: Gtk.LockButton) => void;
        onNotifyActionTarget?: (node: Gtk.LockButton) => void;
      };
      MediaControls: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.MediaControls>;
        mediaStream?: Gtk.MediaStream | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyMediaStream?: (node: Gtk.MediaControls) => void;
        onNotifyName?: (node: Gtk.MediaControls) => void;
        onNotifyAccessibleRole?: (node: Gtk.MediaControls) => void;
      };
      MenuButton: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.MenuButton>;
        active?: boolean;
        alwaysShowArrow?: boolean;
        canShrink?: boolean;
        direction?: Gtk.ArrowType;
        hasFrame?: boolean;
        iconName?: string | null;
        label?: string | null;
        menuModel?: Gio.MenuModel | null;
        popover?: Gtk.Popover | null;
        primary?: boolean;
        useUnderline?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActivate?: (node: Gtk.MenuButton) => void;
        onNotifyActive?: (node: Gtk.MenuButton) => void;
        onNotifyAlwaysShowArrow?: (node: Gtk.MenuButton) => void;
        onNotifyCanShrink?: (node: Gtk.MenuButton) => void;
        onNotifyChild?: (node: Gtk.MenuButton) => void;
        onNotifyDirection?: (node: Gtk.MenuButton) => void;
        onNotifyHasFrame?: (node: Gtk.MenuButton) => void;
        onNotifyIconName?: (node: Gtk.MenuButton) => void;
        onNotifyLabel?: (node: Gtk.MenuButton) => void;
        onNotifyMenuModel?: (node: Gtk.MenuButton) => void;
        onNotifyPopover?: (node: Gtk.MenuButton) => void;
        onNotifyPrimary?: (node: Gtk.MenuButton) => void;
        onNotifyUseUnderline?: (node: Gtk.MenuButton) => void;
        onNotifyName?: (node: Gtk.MenuButton) => void;
        onNotifyAccessibleRole?: (node: Gtk.MenuButton) => void;
      };
      MessageDialog: React.JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.MessageDialog>;
        messageType?: Gtk.MessageType;
        secondaryText?: string | null;
        secondaryUseMarkup?: boolean;
        text?: string | null;
        useMarkup?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyButtons?: (node: Gtk.MessageDialog) => void;
        onNotifyMessageArea?: (node: Gtk.MessageDialog) => void;
        onNotifyMessageType?: (node: Gtk.MessageDialog) => void;
        onNotifySecondaryText?: (node: Gtk.MessageDialog) => void;
        onNotifySecondaryUseMarkup?: (node: Gtk.MessageDialog) => void;
        onNotifyText?: (node: Gtk.MessageDialog) => void;
        onNotifyUseMarkup?: (node: Gtk.MessageDialog) => void;
        onNotifyName?: (node: Gtk.MessageDialog) => void;
        onNotifyAccessibleRole?: (node: Gtk.MessageDialog) => void;
      };
      Notebook: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Notebook>;
        enablePopup?: boolean;
        groupName?: string | null;
        page?: number;
        scrollable?: boolean;
        showBorder?: boolean;
        showTabs?: boolean;
        tabPos?: Gtk.PositionType;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onChangeCurrentPage?: (node: Gtk.Notebook, page: number) => boolean;
        onCreateWindow?: (node: Gtk.Notebook, page: Gtk.Widget) => Gtk.Notebook;
        onFocusTab?: (node: Gtk.Notebook, tab: Gtk.NotebookTab) => boolean;
        onMoveFocusOut?: (
          node: Gtk.Notebook,
          direction: Gtk.DirectionType
        ) => void;
        onPageAdded?: (
          node: Gtk.Notebook,
          child: Gtk.Widget,
          pageNum: number
        ) => void;
        onPageRemoved?: (
          node: Gtk.Notebook,
          child: Gtk.Widget,
          pageNum: number
        ) => void;
        onPageReordered?: (
          node: Gtk.Notebook,
          child: Gtk.Widget,
          pageNum: number
        ) => void;
        onReorderTab?: (
          node: Gtk.Notebook,
          direction: Gtk.DirectionType,
          moveToLast: boolean
        ) => boolean;
        onSelectPage?: (node: Gtk.Notebook, moveFocus: boolean) => boolean;
        onSwitchPage?: (
          node: Gtk.Notebook,
          page: Gtk.Widget,
          pageNum: number
        ) => void;
        onNotifyEnablePopup?: (node: Gtk.Notebook) => void;
        onNotifyGroupName?: (node: Gtk.Notebook) => void;
        onNotifyPage?: (node: Gtk.Notebook) => void;
        onNotifyPages?: (node: Gtk.Notebook) => void;
        onNotifyScrollable?: (node: Gtk.Notebook) => void;
        onNotifyShowBorder?: (node: Gtk.Notebook) => void;
        onNotifyShowTabs?: (node: Gtk.Notebook) => void;
        onNotifyTabPos?: (node: Gtk.Notebook) => void;
        onNotifyName?: (node: Gtk.Notebook) => void;
        onNotifyAccessibleRole?: (node: Gtk.Notebook) => void;
      };
      Overlay: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Overlay>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onGetChildPosition?: (node: Gtk.Overlay, widget: Gtk.Widget) => boolean;
        onNotifyChild?: (node: Gtk.Overlay) => void;
        onNotifyName?: (node: Gtk.Overlay) => void;
        onNotifyAccessibleRole?: (node: Gtk.Overlay) => void;
      };
      PageSetupUnixDialog: React.JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.PageSetupUnixDialog>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyName?: (node: Gtk.PageSetupUnixDialog) => void;
        onNotifyAccessibleRole?: (node: Gtk.PageSetupUnixDialog) => void;
      };
      Paned: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Paned>;
        endChild?: Gtk.Widget | null;
        position?: number;
        positionSet?: boolean;
        resizeEndChild?: boolean;
        resizeStartChild?: boolean;
        shrinkEndChild?: boolean;
        shrinkStartChild?: boolean;
        startChild?: Gtk.Widget | null;
        wideHandle?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onAcceptPosition?: (node: Gtk.Paned) => boolean;
        onCancelPosition?: (node: Gtk.Paned) => boolean;
        onCycleChildFocus?: (node: Gtk.Paned, reversed: boolean) => boolean;
        onCycleHandleFocus?: (node: Gtk.Paned, reversed: boolean) => boolean;
        onMoveHandle?: (node: Gtk.Paned, scrollType: Gtk.ScrollType) => boolean;
        onToggleHandleFocus?: (node: Gtk.Paned) => boolean;
        onNotifyEndChild?: (node: Gtk.Paned) => void;
        onNotifyMaxPosition?: (node: Gtk.Paned) => void;
        onNotifyMinPosition?: (node: Gtk.Paned) => void;
        onNotifyPosition?: (node: Gtk.Paned) => void;
        onNotifyPositionSet?: (node: Gtk.Paned) => void;
        onNotifyResizeEndChild?: (node: Gtk.Paned) => void;
        onNotifyResizeStartChild?: (node: Gtk.Paned) => void;
        onNotifyShrinkEndChild?: (node: Gtk.Paned) => void;
        onNotifyShrinkStartChild?: (node: Gtk.Paned) => void;
        onNotifyStartChild?: (node: Gtk.Paned) => void;
        onNotifyWideHandle?: (node: Gtk.Paned) => void;
        onNotifyName?: (node: Gtk.Paned) => void;
        onNotifyAccessibleRole?: (node: Gtk.Paned) => void;
        onNotifyOrientation?: (node: Gtk.Paned) => void;
      };
      PasswordEntry: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.PasswordEntry>;
        activatesDefault?: boolean;
        extraMenu?: Gio.MenuModel | null;
        placeholderText?: string | null;
        showPeekIcon?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        editable?: boolean;
        enableUndo?: boolean;
        maxWidthChars?: number;
        text?: string | null;
        widthChars?: number;
        xalign?: number;
        onActivate?: (node: Gtk.PasswordEntry) => void;
        onChanged?: (node: Gtk.PasswordEntry) => void;
        onDeleteText?: (
          node: Gtk.PasswordEntry,
          startPos: number,
          endPos: number
        ) => void;
        onInsertText?: (
          node: Gtk.PasswordEntry,
          text: string | null,
          length: number,
          position: number
        ) => void;
        onNotifyActivatesDefault?: (node: Gtk.PasswordEntry) => void;
        onNotifyExtraMenu?: (node: Gtk.PasswordEntry) => void;
        onNotifyPlaceholderText?: (node: Gtk.PasswordEntry) => void;
        onNotifyShowPeekIcon?: (node: Gtk.PasswordEntry) => void;
        onNotifyName?: (node: Gtk.PasswordEntry) => void;
        onNotifyAccessibleRole?: (node: Gtk.PasswordEntry) => void;
        onNotifyCursorPosition?: (node: Gtk.PasswordEntry) => void;
        onNotifyEditable?: (node: Gtk.PasswordEntry) => void;
        onNotifyEnableUndo?: (node: Gtk.PasswordEntry) => void;
        onNotifyMaxWidthChars?: (node: Gtk.PasswordEntry) => void;
        onNotifySelectionBound?: (node: Gtk.PasswordEntry) => void;
        onNotifyText?: (node: Gtk.PasswordEntry) => void;
        onNotifyWidthChars?: (node: Gtk.PasswordEntry) => void;
        onNotifyXalign?: (node: Gtk.PasswordEntry) => void;
      };
      Picture: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Picture>;
        alternativeText?: string | null;
        canShrink?: boolean;
        contentFit?: Gtk.ContentFit;
        file?: Gio.File | null;
        keepAspectRatio?: boolean;
        paintable?: Gdk.Paintable | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyAlternativeText?: (node: Gtk.Picture) => void;
        onNotifyCanShrink?: (node: Gtk.Picture) => void;
        onNotifyContentFit?: (node: Gtk.Picture) => void;
        onNotifyFile?: (node: Gtk.Picture) => void;
        onNotifyKeepAspectRatio?: (node: Gtk.Picture) => void;
        onNotifyPaintable?: (node: Gtk.Picture) => void;
        onNotifyName?: (node: Gtk.Picture) => void;
        onNotifyAccessibleRole?: (node: Gtk.Picture) => void;
      };
      Popover: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Popover>;
        autohide?: boolean;
        cascadePopdown?: boolean;
        defaultWidget?: Gtk.Widget | null;
        hasArrow?: boolean;
        mnemonicsVisible?: boolean;
        pointingTo?: Gdk.Rectangle | null;
        position?: Gtk.PositionType;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActivateDefault?: (node: Gtk.Popover) => void;
        onClosed?: (node: Gtk.Popover) => void;
        onNotifyAutohide?: (node: Gtk.Popover) => void;
        onNotifyCascadePopdown?: (node: Gtk.Popover) => void;
        onNotifyChild?: (node: Gtk.Popover) => void;
        onNotifyDefaultWidget?: (node: Gtk.Popover) => void;
        onNotifyHasArrow?: (node: Gtk.Popover) => void;
        onNotifyMnemonicsVisible?: (node: Gtk.Popover) => void;
        onNotifyPointingTo?: (node: Gtk.Popover) => void;
        onNotifyPosition?: (node: Gtk.Popover) => void;
        onNotifyName?: (node: Gtk.Popover) => void;
        onNotifyAccessibleRole?: (node: Gtk.Popover) => void;
      };
      PopoverMenu: React.JSX.IntrinsicElements["Popover"] & {
        ref?: React.Ref<Gtk.PopoverMenu>;
        flags?: Gtk.PopoverMenuFlags;
        menuModel?: Gio.MenuModel | null;
        visibleSubmenu?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyFlags?: (node: Gtk.PopoverMenu) => void;
        onNotifyMenuModel?: (node: Gtk.PopoverMenu) => void;
        onNotifyVisibleSubmenu?: (node: Gtk.PopoverMenu) => void;
        onNotifyName?: (node: Gtk.PopoverMenu) => void;
        onNotifyAccessibleRole?: (node: Gtk.PopoverMenu) => void;
      };
      PopoverMenuBar: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.PopoverMenuBar>;
        menuModel?: Gio.MenuModel | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyMenuModel?: (node: Gtk.PopoverMenuBar) => void;
        onNotifyName?: (node: Gtk.PopoverMenuBar) => void;
        onNotifyAccessibleRole?: (node: Gtk.PopoverMenuBar) => void;
      };
      PrintUnixDialog: React.JSX.IntrinsicElements["Dialog"] & {
        ref?: React.Ref<Gtk.PrintUnixDialog>;
        currentPage?: number;
        embedPageSetup?: boolean;
        hasSelection?: boolean;
        manualCapabilities?: Gtk.PrintCapabilities;
        pageSetup?: Gtk.PageSetup;
        printSettings?: Gtk.PrintSettings | null;
        supportSelection?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyCurrentPage?: (node: Gtk.PrintUnixDialog) => void;
        onNotifyEmbedPageSetup?: (node: Gtk.PrintUnixDialog) => void;
        onNotifyHasSelection?: (node: Gtk.PrintUnixDialog) => void;
        onNotifyManualCapabilities?: (node: Gtk.PrintUnixDialog) => void;
        onNotifyPageSetup?: (node: Gtk.PrintUnixDialog) => void;
        onNotifyPrintSettings?: (node: Gtk.PrintUnixDialog) => void;
        onNotifySelectedPrinter?: (node: Gtk.PrintUnixDialog) => void;
        onNotifySupportSelection?: (node: Gtk.PrintUnixDialog) => void;
        onNotifyName?: (node: Gtk.PrintUnixDialog) => void;
        onNotifyAccessibleRole?: (node: Gtk.PrintUnixDialog) => void;
      };
      ProgressBar: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ProgressBar>;
        ellipsize?: Pango.EllipsizeMode;
        fraction?: number;
        inverted?: boolean;
        pulseStep?: number;
        showText?: boolean;
        text?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyEllipsize?: (node: Gtk.ProgressBar) => void;
        onNotifyFraction?: (node: Gtk.ProgressBar) => void;
        onNotifyInverted?: (node: Gtk.ProgressBar) => void;
        onNotifyPulseStep?: (node: Gtk.ProgressBar) => void;
        onNotifyShowText?: (node: Gtk.ProgressBar) => void;
        onNotifyText?: (node: Gtk.ProgressBar) => void;
        onNotifyName?: (node: Gtk.ProgressBar) => void;
        onNotifyAccessibleRole?: (node: Gtk.ProgressBar) => void;
        onNotifyOrientation?: (node: Gtk.ProgressBar) => void;
      };
      Range: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Range>;
        adjustment?: Gtk.Adjustment;
        fillLevel?: number;
        inverted?: boolean;
        restrictToFillLevel?: boolean;
        roundDigits?: number;
        showFillLevel?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onAdjustBounds?: (node: Gtk.Range, value: number) => void;
        onChangeValue?: (
          node: Gtk.Range,
          scroll: Gtk.ScrollType,
          value: number
        ) => boolean;
        onMoveSlider?: (node: Gtk.Range, step: Gtk.ScrollType) => void;
        onValueChanged?: (node: Gtk.Range) => void;
        onNotifyAdjustment?: (node: Gtk.Range) => void;
        onNotifyFillLevel?: (node: Gtk.Range) => void;
        onNotifyInverted?: (node: Gtk.Range) => void;
        onNotifyRestrictToFillLevel?: (node: Gtk.Range) => void;
        onNotifyRoundDigits?: (node: Gtk.Range) => void;
        onNotifyShowFillLevel?: (node: Gtk.Range) => void;
        onNotifyName?: (node: Gtk.Range) => void;
        onNotifyAccessibleRole?: (node: Gtk.Range) => void;
        onNotifyOrientation?: (node: Gtk.Range) => void;
      };
      Revealer: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Revealer>;
        revealChild?: boolean;
        transitionDuration?: number;
        transitionType?: Gtk.RevealerTransitionType;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyChild?: (node: Gtk.Revealer) => void;
        onNotifyChildRevealed?: (node: Gtk.Revealer) => void;
        onNotifyRevealChild?: (node: Gtk.Revealer) => void;
        onNotifyTransitionDuration?: (node: Gtk.Revealer) => void;
        onNotifyTransitionType?: (node: Gtk.Revealer) => void;
        onNotifyName?: (node: Gtk.Revealer) => void;
        onNotifyAccessibleRole?: (node: Gtk.Revealer) => void;
      };
      Scale: React.JSX.IntrinsicElements["Range"] & {
        ref?: React.Ref<Gtk.Scale>;
        digits?: number;
        drawValue?: boolean;
        hasOrigin?: boolean;
        valuePos?: Gtk.PositionType;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyDigits?: (node: Gtk.Scale) => void;
        onNotifyDrawValue?: (node: Gtk.Scale) => void;
        onNotifyHasOrigin?: (node: Gtk.Scale) => void;
        onNotifyValuePos?: (node: Gtk.Scale) => void;
        onNotifyName?: (node: Gtk.Scale) => void;
        onNotifyAccessibleRole?: (node: Gtk.Scale) => void;
        onNotifyOrientation?: (node: Gtk.Scale) => void;
      };
      ScaleButton: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ScaleButton>;
        adjustment?: Gtk.Adjustment;
        hasFrame?: boolean;
        icons?: string[];
        value?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onPopdown?: (node: Gtk.ScaleButton) => void;
        onPopup?: (node: Gtk.ScaleButton) => void;
        onValueChanged?: (node: Gtk.ScaleButton, value: number) => void;
        onNotifyActive?: (node: Gtk.ScaleButton) => void;
        onNotifyAdjustment?: (node: Gtk.ScaleButton) => void;
        onNotifyHasFrame?: (node: Gtk.ScaleButton) => void;
        onNotifyIcons?: (node: Gtk.ScaleButton) => void;
        onNotifyValue?: (node: Gtk.ScaleButton) => void;
        onNotifyName?: (node: Gtk.ScaleButton) => void;
        onNotifyAccessibleRole?: (node: Gtk.ScaleButton) => void;
        onNotifyOrientation?: (node: Gtk.ScaleButton) => void;
      };
      Scrollbar: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Scrollbar>;
        adjustment?: Gtk.Adjustment | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyAdjustment?: (node: Gtk.Scrollbar) => void;
        onNotifyName?: (node: Gtk.Scrollbar) => void;
        onNotifyAccessibleRole?: (node: Gtk.Scrollbar) => void;
        onNotifyOrientation?: (node: Gtk.Scrollbar) => void;
      };
      ScrolledWindow: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ScrolledWindow>;
        hadjustment?: Gtk.Adjustment | null;
        hasFrame?: boolean;
        hscrollbarPolicy?: Gtk.PolicyType;
        kineticScrolling?: boolean;
        maxContentHeight?: number;
        maxContentWidth?: number;
        minContentHeight?: number;
        minContentWidth?: number;
        overlayScrolling?: boolean;
        propagateNaturalHeight?: boolean;
        propagateNaturalWidth?: boolean;
        vadjustment?: Gtk.Adjustment | null;
        vscrollbarPolicy?: Gtk.PolicyType;
        windowPlacement?: Gtk.CornerType;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onEdgeOvershot?: (
          node: Gtk.ScrolledWindow,
          pos: Gtk.PositionType
        ) => void;
        onEdgeReached?: (
          node: Gtk.ScrolledWindow,
          pos: Gtk.PositionType
        ) => void;
        onMoveFocusOut?: (
          node: Gtk.ScrolledWindow,
          directionType: Gtk.DirectionType
        ) => void;
        onScrollChild?: (
          node: Gtk.ScrolledWindow,
          scroll: Gtk.ScrollType,
          horizontal: boolean
        ) => boolean;
        onNotifyChild?: (node: Gtk.ScrolledWindow) => void;
        onNotifyHadjustment?: (node: Gtk.ScrolledWindow) => void;
        onNotifyHasFrame?: (node: Gtk.ScrolledWindow) => void;
        onNotifyHscrollbarPolicy?: (node: Gtk.ScrolledWindow) => void;
        onNotifyKineticScrolling?: (node: Gtk.ScrolledWindow) => void;
        onNotifyMaxContentHeight?: (node: Gtk.ScrolledWindow) => void;
        onNotifyMaxContentWidth?: (node: Gtk.ScrolledWindow) => void;
        onNotifyMinContentHeight?: (node: Gtk.ScrolledWindow) => void;
        onNotifyMinContentWidth?: (node: Gtk.ScrolledWindow) => void;
        onNotifyOverlayScrolling?: (node: Gtk.ScrolledWindow) => void;
        onNotifyPropagateNaturalHeight?: (node: Gtk.ScrolledWindow) => void;
        onNotifyPropagateNaturalWidth?: (node: Gtk.ScrolledWindow) => void;
        onNotifyVadjustment?: (node: Gtk.ScrolledWindow) => void;
        onNotifyVscrollbarPolicy?: (node: Gtk.ScrolledWindow) => void;
        onNotifyWindowPlacement?: (node: Gtk.ScrolledWindow) => void;
        onNotifyName?: (node: Gtk.ScrolledWindow) => void;
        onNotifyAccessibleRole?: (node: Gtk.ScrolledWindow) => void;
      };
      SearchBar: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.SearchBar>;
        keyCaptureWidget?: Gtk.Widget | null;
        searchModeEnabled?: boolean;
        showCloseButton?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyChild?: (node: Gtk.SearchBar) => void;
        onNotifyKeyCaptureWidget?: (node: Gtk.SearchBar) => void;
        onNotifySearchModeEnabled?: (node: Gtk.SearchBar) => void;
        onNotifyShowCloseButton?: (node: Gtk.SearchBar) => void;
        onNotifyName?: (node: Gtk.SearchBar) => void;
        onNotifyAccessibleRole?: (node: Gtk.SearchBar) => void;
      };
      SearchEntry: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.SearchEntry>;
        activatesDefault?: boolean;
        inputHints?: Gtk.InputHints;
        inputPurpose?: Gtk.InputPurpose;
        placeholderText?: string | null;
        searchDelay?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        editable?: boolean;
        enableUndo?: boolean;
        maxWidthChars?: number;
        text?: string | null;
        widthChars?: number;
        xalign?: number;
        onActivate?: (node: Gtk.SearchEntry) => void;
        onNextMatch?: (node: Gtk.SearchEntry) => void;
        onPreviousMatch?: (node: Gtk.SearchEntry) => void;
        onSearchChanged?: (node: Gtk.SearchEntry) => void;
        onSearchStarted?: (node: Gtk.SearchEntry) => void;
        onStopSearch?: (node: Gtk.SearchEntry) => void;
        onChanged?: (node: Gtk.SearchEntry) => void;
        onDeleteText?: (
          node: Gtk.SearchEntry,
          startPos: number,
          endPos: number
        ) => void;
        onInsertText?: (
          node: Gtk.SearchEntry,
          text: string | null,
          length: number,
          position: number
        ) => void;
        onNotifyActivatesDefault?: (node: Gtk.SearchEntry) => void;
        onNotifyInputHints?: (node: Gtk.SearchEntry) => void;
        onNotifyInputPurpose?: (node: Gtk.SearchEntry) => void;
        onNotifyPlaceholderText?: (node: Gtk.SearchEntry) => void;
        onNotifySearchDelay?: (node: Gtk.SearchEntry) => void;
        onNotifyName?: (node: Gtk.SearchEntry) => void;
        onNotifyAccessibleRole?: (node: Gtk.SearchEntry) => void;
        onNotifyCursorPosition?: (node: Gtk.SearchEntry) => void;
        onNotifyEditable?: (node: Gtk.SearchEntry) => void;
        onNotifyEnableUndo?: (node: Gtk.SearchEntry) => void;
        onNotifyMaxWidthChars?: (node: Gtk.SearchEntry) => void;
        onNotifySelectionBound?: (node: Gtk.SearchEntry) => void;
        onNotifyText?: (node: Gtk.SearchEntry) => void;
        onNotifyWidthChars?: (node: Gtk.SearchEntry) => void;
        onNotifyXalign?: (node: Gtk.SearchEntry) => void;
      };
      Separator: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Separator>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyName?: (node: Gtk.Separator) => void;
        onNotifyAccessibleRole?: (node: Gtk.Separator) => void;
        onNotifyOrientation?: (node: Gtk.Separator) => void;
      };
      ShortcutLabel: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ShortcutLabel>;
        accelerator?: string | null;
        disabledText?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyAccelerator?: (node: Gtk.ShortcutLabel) => void;
        onNotifyDisabledText?: (node: Gtk.ShortcutLabel) => void;
        onNotifyName?: (node: Gtk.ShortcutLabel) => void;
        onNotifyAccessibleRole?: (node: Gtk.ShortcutLabel) => void;
      };
      ShortcutsGroup: React.JSX.IntrinsicElements["Box"] & {
        ref?: React.Ref<Gtk.ShortcutsGroup>;
        accelSizeGroup?: Gtk.SizeGroup;
        title?: string | null;
        titleSizeGroup?: Gtk.SizeGroup;
        view?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyAccelSizeGroup?: (node: Gtk.ShortcutsGroup) => void;
        onNotifyHeight?: (node: Gtk.ShortcutsGroup) => void;
        onNotifyTitle?: (node: Gtk.ShortcutsGroup) => void;
        onNotifyTitleSizeGroup?: (node: Gtk.ShortcutsGroup) => void;
        onNotifyView?: (node: Gtk.ShortcutsGroup) => void;
        onNotifyName?: (node: Gtk.ShortcutsGroup) => void;
        onNotifyAccessibleRole?: (node: Gtk.ShortcutsGroup) => void;
        onNotifyOrientation?: (node: Gtk.ShortcutsGroup) => void;
      };
      ShortcutsSection: React.JSX.IntrinsicElements["Box"] & {
        ref?: React.Ref<Gtk.ShortcutsSection>;
        maxHeight?: number;
        sectionName?: string | null;
        title?: string | null;
        viewName?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onChangeCurrentPage?: (
          node: Gtk.ShortcutsSection,
          offset: number
        ) => boolean;
        onNotifyMaxHeight?: (node: Gtk.ShortcutsSection) => void;
        onNotifySectionName?: (node: Gtk.ShortcutsSection) => void;
        onNotifyTitle?: (node: Gtk.ShortcutsSection) => void;
        onNotifyViewName?: (node: Gtk.ShortcutsSection) => void;
        onNotifyName?: (node: Gtk.ShortcutsSection) => void;
        onNotifyAccessibleRole?: (node: Gtk.ShortcutsSection) => void;
        onNotifyOrientation?: (node: Gtk.ShortcutsSection) => void;
      };
      ShortcutsShortcut: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.ShortcutsShortcut>;
        accelSizeGroup?: Gtk.SizeGroup;
        accelerator?: string | null;
        actionName?: string | null;
        direction?: Gtk.TextDirection;
        icon?: Gio.Icon;
        iconSet?: boolean;
        shortcutType?: Gtk.ShortcutType;
        subtitle?: string | null;
        subtitleSet?: boolean;
        title?: string | null;
        titleSizeGroup?: Gtk.SizeGroup;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyAccelSizeGroup?: (node: Gtk.ShortcutsShortcut) => void;
        onNotifyAccelerator?: (node: Gtk.ShortcutsShortcut) => void;
        onNotifyActionName?: (node: Gtk.ShortcutsShortcut) => void;
        onNotifyDirection?: (node: Gtk.ShortcutsShortcut) => void;
        onNotifyIcon?: (node: Gtk.ShortcutsShortcut) => void;
        onNotifyIconSet?: (node: Gtk.ShortcutsShortcut) => void;
        onNotifyShortcutType?: (node: Gtk.ShortcutsShortcut) => void;
        onNotifySubtitle?: (node: Gtk.ShortcutsShortcut) => void;
        onNotifySubtitleSet?: (node: Gtk.ShortcutsShortcut) => void;
        onNotifyTitle?: (node: Gtk.ShortcutsShortcut) => void;
        onNotifyTitleSizeGroup?: (node: Gtk.ShortcutsShortcut) => void;
        onNotifyName?: (node: Gtk.ShortcutsShortcut) => void;
        onNotifyAccessibleRole?: (node: Gtk.ShortcutsShortcut) => void;
      };
      ShortcutsWindow: React.JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Gtk.ShortcutsWindow>;
        sectionName?: string | null;
        viewName?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onClose?: (node: Gtk.ShortcutsWindow) => void;
        onSearch?: (node: Gtk.ShortcutsWindow) => void;
        onNotifySectionName?: (node: Gtk.ShortcutsWindow) => void;
        onNotifyViewName?: (node: Gtk.ShortcutsWindow) => void;
        onNotifyName?: (node: Gtk.ShortcutsWindow) => void;
        onNotifyAccessibleRole?: (node: Gtk.ShortcutsWindow) => void;
      };
      SpinButton: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.SpinButton>;
        activatesDefault?: boolean;
        adjustment?: Gtk.Adjustment;
        climbRate?: number;
        digits?: number;
        numeric?: boolean;
        snapToTicks?: boolean;
        updatePolicy?: Gtk.SpinButtonUpdatePolicy;
        value?: number;
        wrap?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        editingCanceled?: boolean;
        editable?: boolean;
        enableUndo?: boolean;
        maxWidthChars?: number;
        text?: string | null;
        widthChars?: number;
        xalign?: number;
        orientation?: Gtk.Orientation;
        onActivate?: (node: Gtk.SpinButton) => void;
        onChangeValue?: (node: Gtk.SpinButton, scroll: Gtk.ScrollType) => void;
        onInput?: (node: Gtk.SpinButton) => number;
        onOutput?: (node: Gtk.SpinButton) => boolean;
        onValueChanged?: (node: Gtk.SpinButton) => void;
        onWrapped?: (node: Gtk.SpinButton) => void;
        onEditingDone?: (node: Gtk.SpinButton) => void;
        onRemoveWidget?: (node: Gtk.SpinButton) => void;
        onChanged?: (node: Gtk.SpinButton) => void;
        onDeleteText?: (
          node: Gtk.SpinButton,
          startPos: number,
          endPos: number
        ) => void;
        onInsertText?: (
          node: Gtk.SpinButton,
          text: string | null,
          length: number,
          position: number
        ) => void;
        onNotifyActivatesDefault?: (node: Gtk.SpinButton) => void;
        onNotifyAdjustment?: (node: Gtk.SpinButton) => void;
        onNotifyClimbRate?: (node: Gtk.SpinButton) => void;
        onNotifyDigits?: (node: Gtk.SpinButton) => void;
        onNotifyNumeric?: (node: Gtk.SpinButton) => void;
        onNotifySnapToTicks?: (node: Gtk.SpinButton) => void;
        onNotifyUpdatePolicy?: (node: Gtk.SpinButton) => void;
        onNotifyValue?: (node: Gtk.SpinButton) => void;
        onNotifyWrap?: (node: Gtk.SpinButton) => void;
        onNotifyName?: (node: Gtk.SpinButton) => void;
        onNotifyAccessibleRole?: (node: Gtk.SpinButton) => void;
        onNotifyEditingCanceled?: (node: Gtk.SpinButton) => void;
        onNotifyCursorPosition?: (node: Gtk.SpinButton) => void;
        onNotifyEditable?: (node: Gtk.SpinButton) => void;
        onNotifyEnableUndo?: (node: Gtk.SpinButton) => void;
        onNotifyMaxWidthChars?: (node: Gtk.SpinButton) => void;
        onNotifySelectionBound?: (node: Gtk.SpinButton) => void;
        onNotifyText?: (node: Gtk.SpinButton) => void;
        onNotifyWidthChars?: (node: Gtk.SpinButton) => void;
        onNotifyXalign?: (node: Gtk.SpinButton) => void;
        onNotifyOrientation?: (node: Gtk.SpinButton) => void;
      };
      Spinner: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Spinner>;
        spinning?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifySpinning?: (node: Gtk.Spinner) => void;
        onNotifyName?: (node: Gtk.Spinner) => void;
        onNotifyAccessibleRole?: (node: Gtk.Spinner) => void;
      };
      Stack: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Stack>;
        hhomogeneous?: boolean;
        interpolateSize?: boolean;
        transitionDuration?: number;
        transitionType?: Gtk.StackTransitionType;
        vhomogeneous?: boolean;
        visibleChild?: Gtk.Widget;
        visibleChildName?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyHhomogeneous?: (node: Gtk.Stack) => void;
        onNotifyInterpolateSize?: (node: Gtk.Stack) => void;
        onNotifyPages?: (node: Gtk.Stack) => void;
        onNotifyTransitionDuration?: (node: Gtk.Stack) => void;
        onNotifyTransitionRunning?: (node: Gtk.Stack) => void;
        onNotifyTransitionType?: (node: Gtk.Stack) => void;
        onNotifyVhomogeneous?: (node: Gtk.Stack) => void;
        onNotifyVisibleChild?: (node: Gtk.Stack) => void;
        onNotifyVisibleChildName?: (node: Gtk.Stack) => void;
        onNotifyName?: (node: Gtk.Stack) => void;
        onNotifyAccessibleRole?: (node: Gtk.Stack) => void;
      };
      StackSidebar: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.StackSidebar>;
        stack?: Gtk.Stack;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyStack?: (node: Gtk.StackSidebar) => void;
        onNotifyName?: (node: Gtk.StackSidebar) => void;
        onNotifyAccessibleRole?: (node: Gtk.StackSidebar) => void;
      };
      StackSwitcher: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.StackSwitcher>;
        stack?: Gtk.Stack | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyStack?: (node: Gtk.StackSwitcher) => void;
        onNotifyName?: (node: Gtk.StackSwitcher) => void;
        onNotifyAccessibleRole?: (node: Gtk.StackSwitcher) => void;
        onNotifyOrientation?: (node: Gtk.StackSwitcher) => void;
      };
      Statusbar: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Statusbar>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onTextPopped?: (
          node: Gtk.Statusbar,
          contextId: number,
          text: string | null
        ) => void;
        onTextPushed?: (
          node: Gtk.Statusbar,
          contextId: number,
          text: string | null
        ) => void;
        onNotifyName?: (node: Gtk.Statusbar) => void;
        onNotifyAccessibleRole?: (node: Gtk.Statusbar) => void;
      };
      Switch: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Switch>;
        active?: boolean;
        state?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onActivate?: (node: Gtk.Switch) => void;
        onStateSet?: (node: Gtk.Switch, state: boolean) => boolean;
        onNotifyActive?: (node: Gtk.Switch) => void;
        onNotifyState?: (node: Gtk.Switch) => void;
        onNotifyName?: (node: Gtk.Switch) => void;
        onNotifyAccessibleRole?: (node: Gtk.Switch) => void;
        onNotifyActionName?: (node: Gtk.Switch) => void;
        onNotifyActionTarget?: (node: Gtk.Switch) => void;
      };
      Text: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Text>;
        activatesDefault?: boolean;
        attributes?: Pango.AttrList | null;
        buffer?: Gtk.EntryBuffer;
        enableEmojiCompletion?: boolean;
        extraMenu?: Gio.MenuModel | null;
        imModule?: string | null;
        inputHints?: Gtk.InputHints;
        inputPurpose?: Gtk.InputPurpose;
        invisibleChar?: number;
        invisibleCharSet?: boolean;
        maxLength?: number;
        overwriteMode?: boolean;
        placeholderText?: string | null;
        propagateTextWidth?: boolean;
        tabs?: Pango.TabArray | null;
        truncateMultiline?: boolean;
        visibility?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        editable?: boolean;
        enableUndo?: boolean;
        maxWidthChars?: number;
        text?: string | null;
        widthChars?: number;
        xalign?: number;
        onActivate?: (node: Gtk.Text) => void;
        onBackspace?: (node: Gtk.Text) => void;
        onCopyClipboard?: (node: Gtk.Text) => void;
        onCutClipboard?: (node: Gtk.Text) => void;
        onDeleteFromCursor?: (
          node: Gtk.Text,
          type: Gtk.DeleteType,
          count: number
        ) => void;
        onInsertAtCursor?: (node: Gtk.Text, string: string | null) => void;
        onInsertEmoji?: (node: Gtk.Text) => void;
        onMoveCursor?: (
          node: Gtk.Text,
          step: Gtk.MovementStep,
          count: number,
          extend: boolean
        ) => void;
        onPasteClipboard?: (node: Gtk.Text) => void;
        onPreeditChanged?: (node: Gtk.Text, preedit: string | null) => void;
        onToggleOverwrite?: (node: Gtk.Text) => void;
        onChanged?: (node: Gtk.Text) => void;
        onDeleteText?: (
          node: Gtk.Text,
          startPos: number,
          endPos: number
        ) => void;
        onInsertText?: (
          node: Gtk.Text,
          text: string | null,
          length: number,
          position: number
        ) => void;
        onNotifyActivatesDefault?: (node: Gtk.Text) => void;
        onNotifyAttributes?: (node: Gtk.Text) => void;
        onNotifyBuffer?: (node: Gtk.Text) => void;
        onNotifyEnableEmojiCompletion?: (node: Gtk.Text) => void;
        onNotifyExtraMenu?: (node: Gtk.Text) => void;
        onNotifyImModule?: (node: Gtk.Text) => void;
        onNotifyInputHints?: (node: Gtk.Text) => void;
        onNotifyInputPurpose?: (node: Gtk.Text) => void;
        onNotifyInvisibleChar?: (node: Gtk.Text) => void;
        onNotifyInvisibleCharSet?: (node: Gtk.Text) => void;
        onNotifyMaxLength?: (node: Gtk.Text) => void;
        onNotifyOverwriteMode?: (node: Gtk.Text) => void;
        onNotifyPlaceholderText?: (node: Gtk.Text) => void;
        onNotifyPropagateTextWidth?: (node: Gtk.Text) => void;
        onNotifyScrollOffset?: (node: Gtk.Text) => void;
        onNotifyTabs?: (node: Gtk.Text) => void;
        onNotifyTruncateMultiline?: (node: Gtk.Text) => void;
        onNotifyVisibility?: (node: Gtk.Text) => void;
        onNotifyName?: (node: Gtk.Text) => void;
        onNotifyAccessibleRole?: (node: Gtk.Text) => void;
        onNotifyCursorPosition?: (node: Gtk.Text) => void;
        onNotifyEditable?: (node: Gtk.Text) => void;
        onNotifyEnableUndo?: (node: Gtk.Text) => void;
        onNotifyMaxWidthChars?: (node: Gtk.Text) => void;
        onNotifySelectionBound?: (node: Gtk.Text) => void;
        onNotifyText?: (node: Gtk.Text) => void;
        onNotifyWidthChars?: (node: Gtk.Text) => void;
        onNotifyXalign?: (node: Gtk.Text) => void;
      };
      TextView: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.TextView>;
        acceptsTab?: boolean;
        bottomMargin?: number;
        buffer?: Gtk.TextBuffer | null;
        cursorVisible?: boolean;
        editable?: boolean;
        extraMenu?: Gio.MenuModel | null;
        imModule?: string | null;
        indent?: number;
        inputHints?: Gtk.InputHints;
        inputPurpose?: Gtk.InputPurpose;
        justification?: Gtk.Justification;
        leftMargin?: number;
        monospace?: boolean;
        overwrite?: boolean;
        pixelsAboveLines?: number;
        pixelsBelowLines?: number;
        pixelsInsideWrap?: number;
        rightMargin?: number;
        tabs?: Pango.TabArray;
        topMargin?: number;
        wrapMode?: Gtk.WrapMode;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        hadjustment?: Gtk.Adjustment | null;
        hscrollPolicy?: Gtk.ScrollablePolicy;
        vadjustment?: Gtk.Adjustment | null;
        vscrollPolicy?: Gtk.ScrollablePolicy;
        onBackspace?: (node: Gtk.TextView) => void;
        onCopyClipboard?: (node: Gtk.TextView) => void;
        onCutClipboard?: (node: Gtk.TextView) => void;
        onDeleteFromCursor?: (
          node: Gtk.TextView,
          type: Gtk.DeleteType,
          count: number
        ) => void;
        onExtendSelection?: (
          node: Gtk.TextView,
          granularity: Gtk.TextExtendSelection,
          location: Gtk.TextIter,
          start: Gtk.TextIter,
          end: Gtk.TextIter
        ) => boolean;
        onInsertAtCursor?: (node: Gtk.TextView, string: string | null) => void;
        onInsertEmoji?: (node: Gtk.TextView) => void;
        onMoveCursor?: (
          node: Gtk.TextView,
          step: Gtk.MovementStep,
          count: number,
          extendSelection: boolean
        ) => void;
        onMoveViewport?: (
          node: Gtk.TextView,
          step: Gtk.ScrollStep,
          count: number
        ) => void;
        onPasteClipboard?: (node: Gtk.TextView) => void;
        onPreeditChanged?: (node: Gtk.TextView, preedit: string | null) => void;
        onSelectAll?: (node: Gtk.TextView, select: boolean) => void;
        onSetAnchor?: (node: Gtk.TextView) => void;
        onToggleCursorVisible?: (node: Gtk.TextView) => void;
        onToggleOverwrite?: (node: Gtk.TextView) => void;
        onNotifyAcceptsTab?: (node: Gtk.TextView) => void;
        onNotifyBottomMargin?: (node: Gtk.TextView) => void;
        onNotifyBuffer?: (node: Gtk.TextView) => void;
        onNotifyCursorVisible?: (node: Gtk.TextView) => void;
        onNotifyEditable?: (node: Gtk.TextView) => void;
        onNotifyExtraMenu?: (node: Gtk.TextView) => void;
        onNotifyImModule?: (node: Gtk.TextView) => void;
        onNotifyIndent?: (node: Gtk.TextView) => void;
        onNotifyInputHints?: (node: Gtk.TextView) => void;
        onNotifyInputPurpose?: (node: Gtk.TextView) => void;
        onNotifyJustification?: (node: Gtk.TextView) => void;
        onNotifyLeftMargin?: (node: Gtk.TextView) => void;
        onNotifyMonospace?: (node: Gtk.TextView) => void;
        onNotifyOverwrite?: (node: Gtk.TextView) => void;
        onNotifyPixelsAboveLines?: (node: Gtk.TextView) => void;
        onNotifyPixelsBelowLines?: (node: Gtk.TextView) => void;
        onNotifyPixelsInsideWrap?: (node: Gtk.TextView) => void;
        onNotifyRightMargin?: (node: Gtk.TextView) => void;
        onNotifyTabs?: (node: Gtk.TextView) => void;
        onNotifyTopMargin?: (node: Gtk.TextView) => void;
        onNotifyWrapMode?: (node: Gtk.TextView) => void;
        onNotifyName?: (node: Gtk.TextView) => void;
        onNotifyAccessibleRole?: (node: Gtk.TextView) => void;
        onNotifyHadjustment?: (node: Gtk.TextView) => void;
        onNotifyHscrollPolicy?: (node: Gtk.TextView) => void;
        onNotifyVadjustment?: (node: Gtk.TextView) => void;
        onNotifyVscrollPolicy?: (node: Gtk.TextView) => void;
      };
      ToggleButton: React.JSX.IntrinsicElements["Button"] & {
        ref?: React.Ref<Gtk.ToggleButton>;
        active?: boolean;
        group?: Gtk.ToggleButton | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onToggled?: (node: Gtk.ToggleButton) => void;
        onNotifyActive?: (node: Gtk.ToggleButton) => void;
        onNotifyGroup?: (node: Gtk.ToggleButton) => void;
        onNotifyName?: (node: Gtk.ToggleButton) => void;
        onNotifyAccessibleRole?: (node: Gtk.ToggleButton) => void;
        onNotifyActionName?: (node: Gtk.ToggleButton) => void;
        onNotifyActionTarget?: (node: Gtk.ToggleButton) => void;
      };
      TreeExpander: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.TreeExpander>;
        hideExpander?: boolean;
        indentForDepth?: boolean;
        indentForIcon?: boolean;
        listRow?: Gtk.TreeListRow | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyChild?: (node: Gtk.TreeExpander) => void;
        onNotifyHideExpander?: (node: Gtk.TreeExpander) => void;
        onNotifyIndentForDepth?: (node: Gtk.TreeExpander) => void;
        onNotifyIndentForIcon?: (node: Gtk.TreeExpander) => void;
        onNotifyItem?: (node: Gtk.TreeExpander) => void;
        onNotifyListRow?: (node: Gtk.TreeExpander) => void;
        onNotifyName?: (node: Gtk.TreeExpander) => void;
        onNotifyAccessibleRole?: (node: Gtk.TreeExpander) => void;
      };
      TreeView: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.TreeView>;
        activateOnSingleClick?: boolean;
        enableGridLines?: Gtk.TreeViewGridLines;
        enableSearch?: boolean;
        enableTreeLines?: boolean;
        expanderColumn?: Gtk.TreeViewColumn | null;
        fixedHeightMode?: boolean;
        headersClickable?: boolean;
        headersVisible?: boolean;
        hoverExpand?: boolean;
        hoverSelection?: boolean;
        levelIndentation?: number;
        model?: Gtk.TreeModel | null;
        reorderable?: boolean;
        rubberBanding?: boolean;
        searchColumn?: number;
        showExpanders?: boolean;
        tooltipColumn?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        hadjustment?: Gtk.Adjustment | null;
        hscrollPolicy?: Gtk.ScrollablePolicy;
        vadjustment?: Gtk.Adjustment | null;
        vscrollPolicy?: Gtk.ScrollablePolicy;
        onColumnsChanged?: (node: Gtk.TreeView) => void;
        onCursorChanged?: (node: Gtk.TreeView) => void;
        onExpandCollapseCursorRow?: (
          node: Gtk.TreeView,
          object: boolean,
          p0: boolean,
          p1: boolean
        ) => boolean;
        onMoveCursor?: (
          node: Gtk.TreeView,
          step: Gtk.MovementStep,
          direction: number,
          extend: boolean,
          modify: boolean
        ) => boolean;
        onRowActivated?: (
          node: Gtk.TreeView,
          path: Gtk.TreePath,
          column: Gtk.TreeViewColumn | null
        ) => void;
        onRowCollapsed?: (
          node: Gtk.TreeView,
          iter: Gtk.TreeIter,
          path: Gtk.TreePath
        ) => void;
        onRowExpanded?: (
          node: Gtk.TreeView,
          iter: Gtk.TreeIter,
          path: Gtk.TreePath
        ) => void;
        onSelectAll?: (node: Gtk.TreeView) => boolean;
        onSelectCursorParent?: (node: Gtk.TreeView) => boolean;
        onSelectCursorRow?: (node: Gtk.TreeView, object: boolean) => boolean;
        onStartInteractiveSearch?: (node: Gtk.TreeView) => boolean;
        onTestCollapseRow?: (
          node: Gtk.TreeView,
          iter: Gtk.TreeIter,
          path: Gtk.TreePath
        ) => boolean;
        onTestExpandRow?: (
          node: Gtk.TreeView,
          iter: Gtk.TreeIter,
          path: Gtk.TreePath
        ) => boolean;
        onToggleCursorRow?: (node: Gtk.TreeView) => boolean;
        onUnselectAll?: (node: Gtk.TreeView) => boolean;
        onNotifyActivateOnSingleClick?: (node: Gtk.TreeView) => void;
        onNotifyEnableGridLines?: (node: Gtk.TreeView) => void;
        onNotifyEnableSearch?: (node: Gtk.TreeView) => void;
        onNotifyEnableTreeLines?: (node: Gtk.TreeView) => void;
        onNotifyExpanderColumn?: (node: Gtk.TreeView) => void;
        onNotifyFixedHeightMode?: (node: Gtk.TreeView) => void;
        onNotifyHeadersClickable?: (node: Gtk.TreeView) => void;
        onNotifyHeadersVisible?: (node: Gtk.TreeView) => void;
        onNotifyHoverExpand?: (node: Gtk.TreeView) => void;
        onNotifyHoverSelection?: (node: Gtk.TreeView) => void;
        onNotifyLevelIndentation?: (node: Gtk.TreeView) => void;
        onNotifyModel?: (node: Gtk.TreeView) => void;
        onNotifyReorderable?: (node: Gtk.TreeView) => void;
        onNotifyRubberBanding?: (node: Gtk.TreeView) => void;
        onNotifySearchColumn?: (node: Gtk.TreeView) => void;
        onNotifyShowExpanders?: (node: Gtk.TreeView) => void;
        onNotifyTooltipColumn?: (node: Gtk.TreeView) => void;
        onNotifyName?: (node: Gtk.TreeView) => void;
        onNotifyAccessibleRole?: (node: Gtk.TreeView) => void;
        onNotifyHadjustment?: (node: Gtk.TreeView) => void;
        onNotifyHscrollPolicy?: (node: Gtk.TreeView) => void;
        onNotifyVadjustment?: (node: Gtk.TreeView) => void;
        onNotifyVscrollPolicy?: (node: Gtk.TreeView) => void;
      };
      Video: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Video>;
        autoplay?: boolean;
        file?: Gio.File | null;
        graphicsOffload?: Gtk.GraphicsOffloadEnabled;
        loop?: boolean;
        mediaStream?: Gtk.MediaStream | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyAutoplay?: (node: Gtk.Video) => void;
        onNotifyFile?: (node: Gtk.Video) => void;
        onNotifyGraphicsOffload?: (node: Gtk.Video) => void;
        onNotifyLoop?: (node: Gtk.Video) => void;
        onNotifyMediaStream?: (node: Gtk.Video) => void;
        onNotifyName?: (node: Gtk.Video) => void;
        onNotifyAccessibleRole?: (node: Gtk.Video) => void;
      };
      Viewport: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Viewport>;
        scrollToFocus?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        hadjustment?: Gtk.Adjustment | null;
        hscrollPolicy?: Gtk.ScrollablePolicy;
        vadjustment?: Gtk.Adjustment | null;
        vscrollPolicy?: Gtk.ScrollablePolicy;
        onNotifyChild?: (node: Gtk.Viewport) => void;
        onNotifyScrollToFocus?: (node: Gtk.Viewport) => void;
        onNotifyName?: (node: Gtk.Viewport) => void;
        onNotifyAccessibleRole?: (node: Gtk.Viewport) => void;
        onNotifyHadjustment?: (node: Gtk.Viewport) => void;
        onNotifyHscrollPolicy?: (node: Gtk.Viewport) => void;
        onNotifyVadjustment?: (node: Gtk.Viewport) => void;
        onNotifyVscrollPolicy?: (node: Gtk.Viewport) => void;
      };
      VolumeButton: React.JSX.IntrinsicElements["ScaleButton"] & {
        ref?: React.Ref<Gtk.VolumeButton>;
        useSymbolic?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyUseSymbolic?: (node: Gtk.VolumeButton) => void;
        onNotifyName?: (node: Gtk.VolumeButton) => void;
        onNotifyAccessibleRole?: (node: Gtk.VolumeButton) => void;
        onNotifyOrientation?: (node: Gtk.VolumeButton) => void;
      };
      Widget: {
        ref?: React.Ref<Gtk.Widget>;
        children?: React.ReactNode;
        canFocus?: boolean;
        canTarget?: boolean;
        cssClasses?: string[];
        cursor?: Gdk.Cursor | null;
        focusOnClick?: boolean;
        focusable?: boolean;
        halign?: Gtk.Align;
        hasTooltip?: boolean;
        heightRequest?: number;
        hexpand?: boolean;
        hexpandSet?: boolean;
        layoutManager?: Gtk.LayoutManager | null;
        limitEvents?: boolean;
        marginBottom?: number;
        marginEnd?: number;
        marginStart?: number;
        marginTop?: number;
        name?: string | null;
        opacity?: number;
        overflow?: Gtk.Overflow;
        receivesDefault?: boolean;
        sensitive?: boolean;
        tooltipMarkup?: string | null;
        tooltipText?: string | null;
        valign?: Gtk.Align;
        vexpand?: boolean;
        vexpandSet?: boolean;
        visible?: boolean;
        widthRequest?: number;
        accessibleRole?: Gtk.AccessibleRole;
        onDestroy?: (node: Gtk.Widget) => void;
        onDirectionChanged?: (
          node: Gtk.Widget,
          previousDirection: Gtk.TextDirection
        ) => void;
        onHide?: (node: Gtk.Widget) => void;
        onKeynavFailed?: (
          node: Gtk.Widget,
          direction: Gtk.DirectionType
        ) => boolean;
        onMap?: (node: Gtk.Widget) => void;
        onMnemonicActivate?: (
          node: Gtk.Widget,
          groupCycling: boolean
        ) => boolean;
        onMoveFocus?: (node: Gtk.Widget, direction: Gtk.DirectionType) => void;
        onQueryTooltip?: (
          node: Gtk.Widget,
          x: number,
          y: number,
          keyboardMode: boolean,
          tooltip: Gtk.Tooltip
        ) => boolean;
        onRealize?: (node: Gtk.Widget) => void;
        onShow?: (node: Gtk.Widget) => void;
        onStateFlagsChanged?: (node: Gtk.Widget, flags: Gtk.StateFlags) => void;
        onUnmap?: (node: Gtk.Widget) => void;
        onUnrealize?: (node: Gtk.Widget) => void;
        onNotifyCanFocus?: (node: Gtk.Widget) => void;
        onNotifyCanTarget?: (node: Gtk.Widget) => void;
        onNotifyCssClasses?: (node: Gtk.Widget) => void;
        onNotifyCssName?: (node: Gtk.Widget) => void;
        onNotifyCursor?: (node: Gtk.Widget) => void;
        onNotifyFocusOnClick?: (node: Gtk.Widget) => void;
        onNotifyFocusable?: (node: Gtk.Widget) => void;
        onNotifyHalign?: (node: Gtk.Widget) => void;
        onNotifyHasDefault?: (node: Gtk.Widget) => void;
        onNotifyHasFocus?: (node: Gtk.Widget) => void;
        onNotifyHasTooltip?: (node: Gtk.Widget) => void;
        onNotifyHeightRequest?: (node: Gtk.Widget) => void;
        onNotifyHexpand?: (node: Gtk.Widget) => void;
        onNotifyHexpandSet?: (node: Gtk.Widget) => void;
        onNotifyLayoutManager?: (node: Gtk.Widget) => void;
        onNotifyLimitEvents?: (node: Gtk.Widget) => void;
        onNotifyMarginBottom?: (node: Gtk.Widget) => void;
        onNotifyMarginEnd?: (node: Gtk.Widget) => void;
        onNotifyMarginStart?: (node: Gtk.Widget) => void;
        onNotifyMarginTop?: (node: Gtk.Widget) => void;
        onNotifyName?: (node: Gtk.Widget) => void;
        onNotifyOpacity?: (node: Gtk.Widget) => void;
        onNotifyOverflow?: (node: Gtk.Widget) => void;
        onNotifyParent?: (node: Gtk.Widget) => void;
        onNotifyReceivesDefault?: (node: Gtk.Widget) => void;
        onNotifyRoot?: (node: Gtk.Widget) => void;
        onNotifyScaleFactor?: (node: Gtk.Widget) => void;
        onNotifySensitive?: (node: Gtk.Widget) => void;
        onNotifyTooltipMarkup?: (node: Gtk.Widget) => void;
        onNotifyTooltipText?: (node: Gtk.Widget) => void;
        onNotifyValign?: (node: Gtk.Widget) => void;
        onNotifyVexpand?: (node: Gtk.Widget) => void;
        onNotifyVexpandSet?: (node: Gtk.Widget) => void;
        onNotifyVisible?: (node: Gtk.Widget) => void;
        onNotifyWidthRequest?: (node: Gtk.Widget) => void;
        onNotifyAccessibleRole?: (node: Gtk.Widget) => void;
      };
      Window: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.Window>;
        application?: Gtk.Application | null;
        decorated?: boolean;
        defaultHeight?: number;
        defaultWidget?: Gtk.Widget | null;
        defaultWidth?: number;
        deletable?: boolean;
        destroyWithParent?: boolean;
        display?: Gdk.Display;
        focusVisible?: boolean;
        focusWidget?: Gtk.Widget | null;
        fullscreened?: boolean;
        gravity?: Gtk.WindowGravity;
        handleMenubarAccel?: boolean;
        hideOnClose?: boolean;
        iconName?: string | null;
        maximized?: boolean;
        mnemonicsVisible?: boolean;
        modal?: boolean;
        resizable?: boolean;
        startupId?: string | null;
        title?: string | null;
        titlebar?: Gtk.Widget | null;
        transientFor?: Gtk.Window | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActivateDefault?: (node: Gtk.Window) => void;
        onActivateFocus?: (node: Gtk.Window) => void;
        onCloseRequest?: (node: Gtk.Window) => boolean;
        onEnableDebugging?: (node: Gtk.Window, toggle: boolean) => boolean;
        onKeysChanged?: (node: Gtk.Window) => void;
        onNotifyApplication?: (node: Gtk.Window) => void;
        onNotifyChild?: (node: Gtk.Window) => void;
        onNotifyDecorated?: (node: Gtk.Window) => void;
        onNotifyDefaultHeight?: (node: Gtk.Window) => void;
        onNotifyDefaultWidget?: (node: Gtk.Window) => void;
        onNotifyDefaultWidth?: (node: Gtk.Window) => void;
        onNotifyDeletable?: (node: Gtk.Window) => void;
        onNotifyDestroyWithParent?: (node: Gtk.Window) => void;
        onNotifyDisplay?: (node: Gtk.Window) => void;
        onNotifyFocusVisible?: (node: Gtk.Window) => void;
        onNotifyFocusWidget?: (node: Gtk.Window) => void;
        onNotifyFullscreened?: (node: Gtk.Window) => void;
        onNotifyGravity?: (node: Gtk.Window) => void;
        onNotifyHandleMenubarAccel?: (node: Gtk.Window) => void;
        onNotifyHideOnClose?: (node: Gtk.Window) => void;
        onNotifyIconName?: (node: Gtk.Window) => void;
        onNotifyIsActive?: (node: Gtk.Window) => void;
        onNotifyMaximized?: (node: Gtk.Window) => void;
        onNotifyMnemonicsVisible?: (node: Gtk.Window) => void;
        onNotifyModal?: (node: Gtk.Window) => void;
        onNotifyResizable?: (node: Gtk.Window) => void;
        onNotifyStartupId?: (node: Gtk.Window) => void;
        onNotifySuspended?: (node: Gtk.Window) => void;
        onNotifyTitle?: (node: Gtk.Window) => void;
        onNotifyTitlebar?: (node: Gtk.Window) => void;
        onNotifyTransientFor?: (node: Gtk.Window) => void;
        onNotifyName?: (node: Gtk.Window) => void;
        onNotifyAccessibleRole?: (node: Gtk.Window) => void;
      };
      WindowControls: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.WindowControls>;
        decorationLayout?: string | null;
        side?: Gtk.PackType;
        useNativeControls?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyDecorationLayout?: (node: Gtk.WindowControls) => void;
        onNotifyEmpty?: (node: Gtk.WindowControls) => void;
        onNotifySide?: (node: Gtk.WindowControls) => void;
        onNotifyUseNativeControls?: (node: Gtk.WindowControls) => void;
        onNotifyName?: (node: Gtk.WindowControls) => void;
        onNotifyAccessibleRole?: (node: Gtk.WindowControls) => void;
      };
      WindowHandle: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Gtk.WindowHandle>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyChild?: (node: Gtk.WindowHandle) => void;
        onNotifyName?: (node: Gtk.WindowHandle) => void;
        onNotifyAccessibleRole?: (node: Gtk.WindowHandle) => void;
      };
      AdwAboutDialog: React.JSX.IntrinsicElements["AdwDialog"] & {
        ref?: React.Ref<Adw.AboutDialog>;
        applicationIcon?: string | null;
        applicationName?: string | null;
        artists?: string[] | null;
        comments?: string | null;
        copyright?: string | null;
        debugInfo?: string | null;
        debugInfoFilename?: string | null;
        designers?: string[] | null;
        developerName?: string | null;
        developers?: string[] | null;
        documenters?: string[] | null;
        issueUrl?: string | null;
        license?: string | null;
        licenseType?: Gtk.License;
        releaseNotes?: string | null;
        releaseNotesVersion?: string | null;
        supportUrl?: string | null;
        translatorCredits?: string | null;
        version?: string | null;
        website?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActivateLink?: (node: Adw.AboutDialog, uri: string | null) => boolean;
        onNotifyApplicationIcon?: (node: Adw.AboutDialog) => void;
        onNotifyApplicationName?: (node: Adw.AboutDialog) => void;
        onNotifyArtists?: (node: Adw.AboutDialog) => void;
        onNotifyComments?: (node: Adw.AboutDialog) => void;
        onNotifyCopyright?: (node: Adw.AboutDialog) => void;
        onNotifyDebugInfo?: (node: Adw.AboutDialog) => void;
        onNotifyDebugInfoFilename?: (node: Adw.AboutDialog) => void;
        onNotifyDesigners?: (node: Adw.AboutDialog) => void;
        onNotifyDeveloperName?: (node: Adw.AboutDialog) => void;
        onNotifyDevelopers?: (node: Adw.AboutDialog) => void;
        onNotifyDocumenters?: (node: Adw.AboutDialog) => void;
        onNotifyIssueUrl?: (node: Adw.AboutDialog) => void;
        onNotifyLicense?: (node: Adw.AboutDialog) => void;
        onNotifyLicenseType?: (node: Adw.AboutDialog) => void;
        onNotifyReleaseNotes?: (node: Adw.AboutDialog) => void;
        onNotifyReleaseNotesVersion?: (node: Adw.AboutDialog) => void;
        onNotifySupportUrl?: (node: Adw.AboutDialog) => void;
        onNotifyTranslatorCredits?: (node: Adw.AboutDialog) => void;
        onNotifyVersion?: (node: Adw.AboutDialog) => void;
        onNotifyWebsite?: (node: Adw.AboutDialog) => void;
        onNotifyName?: (node: Adw.AboutDialog) => void;
        onNotifyAccessibleRole?: (node: Adw.AboutDialog) => void;
      };
      AdwAboutWindow: React.JSX.IntrinsicElements["AdwWindow"] & {
        ref?: React.Ref<Adw.AboutWindow>;
        applicationIcon?: string | null;
        applicationName?: string | null;
        artists?: string[] | null;
        comments?: string | null;
        copyright?: string | null;
        debugInfo?: string | null;
        debugInfoFilename?: string | null;
        designers?: string[] | null;
        developerName?: string | null;
        developers?: string[] | null;
        documenters?: string[] | null;
        issueUrl?: string | null;
        license?: string | null;
        licenseType?: Gtk.License;
        releaseNotes?: string | null;
        releaseNotesVersion?: string | null;
        supportUrl?: string | null;
        translatorCredits?: string | null;
        version?: string | null;
        website?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActivateLink?: (node: Adw.AboutWindow, uri: string | null) => boolean;
        onNotifyApplicationIcon?: (node: Adw.AboutWindow) => void;
        onNotifyApplicationName?: (node: Adw.AboutWindow) => void;
        onNotifyArtists?: (node: Adw.AboutWindow) => void;
        onNotifyComments?: (node: Adw.AboutWindow) => void;
        onNotifyCopyright?: (node: Adw.AboutWindow) => void;
        onNotifyDebugInfo?: (node: Adw.AboutWindow) => void;
        onNotifyDebugInfoFilename?: (node: Adw.AboutWindow) => void;
        onNotifyDesigners?: (node: Adw.AboutWindow) => void;
        onNotifyDeveloperName?: (node: Adw.AboutWindow) => void;
        onNotifyDevelopers?: (node: Adw.AboutWindow) => void;
        onNotifyDocumenters?: (node: Adw.AboutWindow) => void;
        onNotifyIssueUrl?: (node: Adw.AboutWindow) => void;
        onNotifyLicense?: (node: Adw.AboutWindow) => void;
        onNotifyLicenseType?: (node: Adw.AboutWindow) => void;
        onNotifyReleaseNotes?: (node: Adw.AboutWindow) => void;
        onNotifyReleaseNotesVersion?: (node: Adw.AboutWindow) => void;
        onNotifySupportUrl?: (node: Adw.AboutWindow) => void;
        onNotifyTranslatorCredits?: (node: Adw.AboutWindow) => void;
        onNotifyVersion?: (node: Adw.AboutWindow) => void;
        onNotifyWebsite?: (node: Adw.AboutWindow) => void;
        onNotifyName?: (node: Adw.AboutWindow) => void;
        onNotifyAccessibleRole?: (node: Adw.AboutWindow) => void;
      };
      AdwActionRow: React.JSX.IntrinsicElements["AdwPreferencesRow"] & {
        ref?: React.Ref<Adw.ActionRow>;
        activatableWidget?: Gtk.Widget | null;
        iconName?: string | null;
        subtitle?: string | null;
        subtitleLines?: number;
        subtitleSelectable?: boolean;
        titleLines?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onActivated?: (node: Adw.ActionRow) => void;
        onNotifyActivatableWidget?: (node: Adw.ActionRow) => void;
        onNotifyIconName?: (node: Adw.ActionRow) => void;
        onNotifySubtitle?: (node: Adw.ActionRow) => void;
        onNotifySubtitleLines?: (node: Adw.ActionRow) => void;
        onNotifySubtitleSelectable?: (node: Adw.ActionRow) => void;
        onNotifyTitleLines?: (node: Adw.ActionRow) => void;
        onNotifyName?: (node: Adw.ActionRow) => void;
        onNotifyAccessibleRole?: (node: Adw.ActionRow) => void;
        onNotifyActionName?: (node: Adw.ActionRow) => void;
        onNotifyActionTarget?: (node: Adw.ActionRow) => void;
      };
      AdwAlertDialog: React.JSX.IntrinsicElements["AdwDialog"] & {
        ref?: React.Ref<Adw.AlertDialog>;
        body?: string | null;
        bodyUseMarkup?: boolean;
        closeResponse?: string | null;
        defaultResponse?: string | null;
        extraChild?: Gtk.Widget | null;
        heading?: string | null;
        headingUseMarkup?: boolean;
        preferWideLayout?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onResponse?: (node: Adw.AlertDialog, response: string | null) => void;
        onNotifyBody?: (node: Adw.AlertDialog) => void;
        onNotifyBodyUseMarkup?: (node: Adw.AlertDialog) => void;
        onNotifyCloseResponse?: (node: Adw.AlertDialog) => void;
        onNotifyDefaultResponse?: (node: Adw.AlertDialog) => void;
        onNotifyExtraChild?: (node: Adw.AlertDialog) => void;
        onNotifyHeading?: (node: Adw.AlertDialog) => void;
        onNotifyHeadingUseMarkup?: (node: Adw.AlertDialog) => void;
        onNotifyPreferWideLayout?: (node: Adw.AlertDialog) => void;
        onNotifyName?: (node: Adw.AlertDialog) => void;
        onNotifyAccessibleRole?: (node: Adw.AlertDialog) => void;
      };
      AdwApplicationWindow: React.JSX.IntrinsicElements["ApplicationWindow"] & {
        ref?: React.Ref<Adw.ApplicationWindow>;
        adaptivePreview?: boolean;
        content?: Gtk.Widget | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onActionAdded?: (
          node: Adw.ApplicationWindow,
          actionName: string | null
        ) => void;
        onActionEnabledChanged?: (
          node: Adw.ApplicationWindow,
          actionName: string | null,
          enabled: boolean
        ) => void;
        onActionRemoved?: (
          node: Adw.ApplicationWindow,
          actionName: string | null
        ) => void;
        onActionStateChanged?: (
          node: Adw.ApplicationWindow,
          actionName: string | null,
          value: GLib.Variant
        ) => void;
        onNotifyAdaptivePreview?: (node: Adw.ApplicationWindow) => void;
        onNotifyContent?: (node: Adw.ApplicationWindow) => void;
        onNotifyCurrentBreakpoint?: (node: Adw.ApplicationWindow) => void;
        onNotifyDialogs?: (node: Adw.ApplicationWindow) => void;
        onNotifyVisibleDialog?: (node: Adw.ApplicationWindow) => void;
        onNotifyName?: (node: Adw.ApplicationWindow) => void;
        onNotifyAccessibleRole?: (node: Adw.ApplicationWindow) => void;
      };
      AdwAvatar: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.Avatar>;
        customImage?: Gdk.Paintable | null;
        iconName?: string | null;
        showInitials?: boolean;
        size?: number;
        text?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyCustomImage?: (node: Adw.Avatar) => void;
        onNotifyIconName?: (node: Adw.Avatar) => void;
        onNotifyShowInitials?: (node: Adw.Avatar) => void;
        onNotifySize?: (node: Adw.Avatar) => void;
        onNotifyText?: (node: Adw.Avatar) => void;
        onNotifyName?: (node: Adw.Avatar) => void;
        onNotifyAccessibleRole?: (node: Adw.Avatar) => void;
      };
      AdwBanner: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.Banner>;
        buttonLabel?: string | null;
        buttonStyle?: Adw.BannerButtonStyle;
        revealed?: boolean;
        title?: string | null;
        useMarkup?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onButtonClicked?: (node: Adw.Banner) => void;
        onNotifyButtonLabel?: (node: Adw.Banner) => void;
        onNotifyButtonStyle?: (node: Adw.Banner) => void;
        onNotifyRevealed?: (node: Adw.Banner) => void;
        onNotifyTitle?: (node: Adw.Banner) => void;
        onNotifyUseMarkup?: (node: Adw.Banner) => void;
        onNotifyName?: (node: Adw.Banner) => void;
        onNotifyAccessibleRole?: (node: Adw.Banner) => void;
        onNotifyActionName?: (node: Adw.Banner) => void;
        onNotifyActionTarget?: (node: Adw.Banner) => void;
      };
      AdwBin: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.Bin>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyChild?: (node: Adw.Bin) => void;
        onNotifyName?: (node: Adw.Bin) => void;
        onNotifyAccessibleRole?: (node: Adw.Bin) => void;
      };
      AdwBottomSheet: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.BottomSheet>;
        align?: number;
        bottomBar?: Gtk.Widget | null;
        canClose?: boolean;
        canOpen?: boolean;
        content?: Gtk.Widget | null;
        fullWidth?: boolean;
        modal?: boolean;
        open?: boolean;
        revealBottomBar?: boolean;
        sheet?: Gtk.Widget | null;
        showDragHandle?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onCloseAttempt?: (node: Adw.BottomSheet) => void;
        onNotifyAlign?: (node: Adw.BottomSheet) => void;
        onNotifyBottomBar?: (node: Adw.BottomSheet) => void;
        onNotifyBottomBarHeight?: (node: Adw.BottomSheet) => void;
        onNotifyCanClose?: (node: Adw.BottomSheet) => void;
        onNotifyCanOpen?: (node: Adw.BottomSheet) => void;
        onNotifyContent?: (node: Adw.BottomSheet) => void;
        onNotifyFullWidth?: (node: Adw.BottomSheet) => void;
        onNotifyModal?: (node: Adw.BottomSheet) => void;
        onNotifyOpen?: (node: Adw.BottomSheet) => void;
        onNotifyRevealBottomBar?: (node: Adw.BottomSheet) => void;
        onNotifySheet?: (node: Adw.BottomSheet) => void;
        onNotifySheetHeight?: (node: Adw.BottomSheet) => void;
        onNotifyShowDragHandle?: (node: Adw.BottomSheet) => void;
        onNotifyName?: (node: Adw.BottomSheet) => void;
        onNotifyAccessibleRole?: (node: Adw.BottomSheet) => void;
      };
      AdwBreakpointBin: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.BreakpointBin>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyChild?: (node: Adw.BreakpointBin) => void;
        onNotifyCurrentBreakpoint?: (node: Adw.BreakpointBin) => void;
        onNotifyName?: (node: Adw.BreakpointBin) => void;
        onNotifyAccessibleRole?: (node: Adw.BreakpointBin) => void;
      };
      AdwButtonContent: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.ButtonContent>;
        canShrink?: boolean;
        iconName?: string | null;
        label?: string | null;
        useUnderline?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyCanShrink?: (node: Adw.ButtonContent) => void;
        onNotifyIconName?: (node: Adw.ButtonContent) => void;
        onNotifyLabel?: (node: Adw.ButtonContent) => void;
        onNotifyUseUnderline?: (node: Adw.ButtonContent) => void;
        onNotifyName?: (node: Adw.ButtonContent) => void;
        onNotifyAccessibleRole?: (node: Adw.ButtonContent) => void;
      };
      AdwButtonRow: React.JSX.IntrinsicElements["AdwPreferencesRow"] & {
        ref?: React.Ref<Adw.ButtonRow>;
        endIconName?: string | null;
        startIconName?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onActivated?: (node: Adw.ButtonRow) => void;
        onNotifyEndIconName?: (node: Adw.ButtonRow) => void;
        onNotifyStartIconName?: (node: Adw.ButtonRow) => void;
        onNotifyName?: (node: Adw.ButtonRow) => void;
        onNotifyAccessibleRole?: (node: Adw.ButtonRow) => void;
        onNotifyActionName?: (node: Adw.ButtonRow) => void;
        onNotifyActionTarget?: (node: Adw.ButtonRow) => void;
      };
      AdwCarousel: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.Carousel>;
        allowLongSwipes?: boolean;
        allowMouseDrag?: boolean;
        allowScrollWheel?: boolean;
        interactive?: boolean;
        revealDuration?: number;
        scrollParams?: Adw.SpringParams;
        spacing?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onPageChanged?: (node: Adw.Carousel, index: number) => void;
        onNotifyAllowLongSwipes?: (node: Adw.Carousel) => void;
        onNotifyAllowMouseDrag?: (node: Adw.Carousel) => void;
        onNotifyAllowScrollWheel?: (node: Adw.Carousel) => void;
        onNotifyInteractive?: (node: Adw.Carousel) => void;
        onNotifyNPages?: (node: Adw.Carousel) => void;
        onNotifyPosition?: (node: Adw.Carousel) => void;
        onNotifyRevealDuration?: (node: Adw.Carousel) => void;
        onNotifyScrollParams?: (node: Adw.Carousel) => void;
        onNotifySpacing?: (node: Adw.Carousel) => void;
        onNotifyName?: (node: Adw.Carousel) => void;
        onNotifyAccessibleRole?: (node: Adw.Carousel) => void;
        onNotifyOrientation?: (node: Adw.Carousel) => void;
      };
      AdwCarouselIndicatorDots: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.CarouselIndicatorDots>;
        carousel?: Adw.Carousel | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyCarousel?: (node: Adw.CarouselIndicatorDots) => void;
        onNotifyName?: (node: Adw.CarouselIndicatorDots) => void;
        onNotifyAccessibleRole?: (node: Adw.CarouselIndicatorDots) => void;
        onNotifyOrientation?: (node: Adw.CarouselIndicatorDots) => void;
      };
      AdwCarouselIndicatorLines: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.CarouselIndicatorLines>;
        carousel?: Adw.Carousel | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyCarousel?: (node: Adw.CarouselIndicatorLines) => void;
        onNotifyName?: (node: Adw.CarouselIndicatorLines) => void;
        onNotifyAccessibleRole?: (node: Adw.CarouselIndicatorLines) => void;
        onNotifyOrientation?: (node: Adw.CarouselIndicatorLines) => void;
      };
      AdwClamp: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.Clamp>;
        maximumSize?: number;
        tighteningThreshold?: number;
        unit?: Adw.LengthUnit;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyChild?: (node: Adw.Clamp) => void;
        onNotifyMaximumSize?: (node: Adw.Clamp) => void;
        onNotifyTighteningThreshold?: (node: Adw.Clamp) => void;
        onNotifyUnit?: (node: Adw.Clamp) => void;
        onNotifyName?: (node: Adw.Clamp) => void;
        onNotifyAccessibleRole?: (node: Adw.Clamp) => void;
        onNotifyOrientation?: (node: Adw.Clamp) => void;
      };
      AdwClampScrollable: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.ClampScrollable>;
        maximumSize?: number;
        tighteningThreshold?: number;
        unit?: Adw.LengthUnit;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        hadjustment?: Gtk.Adjustment | null;
        hscrollPolicy?: Gtk.ScrollablePolicy;
        vadjustment?: Gtk.Adjustment | null;
        vscrollPolicy?: Gtk.ScrollablePolicy;
        onNotifyChild?: (node: Adw.ClampScrollable) => void;
        onNotifyMaximumSize?: (node: Adw.ClampScrollable) => void;
        onNotifyTighteningThreshold?: (node: Adw.ClampScrollable) => void;
        onNotifyUnit?: (node: Adw.ClampScrollable) => void;
        onNotifyName?: (node: Adw.ClampScrollable) => void;
        onNotifyAccessibleRole?: (node: Adw.ClampScrollable) => void;
        onNotifyOrientation?: (node: Adw.ClampScrollable) => void;
        onNotifyHadjustment?: (node: Adw.ClampScrollable) => void;
        onNotifyHscrollPolicy?: (node: Adw.ClampScrollable) => void;
        onNotifyVadjustment?: (node: Adw.ClampScrollable) => void;
        onNotifyVscrollPolicy?: (node: Adw.ClampScrollable) => void;
      };
      AdwComboRow: React.JSX.IntrinsicElements["AdwActionRow"] & {
        ref?: React.Ref<Adw.ComboRow>;
        enableSearch?: boolean;
        expression?: Gtk.Expression | null;
        factory?: Gtk.ListItemFactory | null;
        headerFactory?: Gtk.ListItemFactory | null;
        listFactory?: Gtk.ListItemFactory | null;
        model?: Gio.ListModel | null;
        searchMatchMode?: Gtk.StringFilterMatchMode;
        selected?: number;
        useSubtitle?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onNotifyEnableSearch?: (node: Adw.ComboRow) => void;
        onNotifyExpression?: (node: Adw.ComboRow) => void;
        onNotifyFactory?: (node: Adw.ComboRow) => void;
        onNotifyHeaderFactory?: (node: Adw.ComboRow) => void;
        onNotifyListFactory?: (node: Adw.ComboRow) => void;
        onNotifyModel?: (node: Adw.ComboRow) => void;
        onNotifySearchMatchMode?: (node: Adw.ComboRow) => void;
        onNotifySelected?: (node: Adw.ComboRow) => void;
        onNotifySelectedItem?: (node: Adw.ComboRow) => void;
        onNotifyUseSubtitle?: (node: Adw.ComboRow) => void;
        onNotifyName?: (node: Adw.ComboRow) => void;
        onNotifyAccessibleRole?: (node: Adw.ComboRow) => void;
        onNotifyActionName?: (node: Adw.ComboRow) => void;
        onNotifyActionTarget?: (node: Adw.ComboRow) => void;
      };
      AdwDialog: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.Dialog>;
        canClose?: boolean;
        contentHeight?: number;
        contentWidth?: number;
        defaultWidget?: Gtk.Widget | null;
        focusWidget?: Gtk.Widget | null;
        followsContentSize?: boolean;
        presentationMode?: Adw.DialogPresentationMode;
        title?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onCloseAttempt?: (node: Adw.Dialog) => void;
        onClosed?: (node: Adw.Dialog) => void;
        onNotifyCanClose?: (node: Adw.Dialog) => void;
        onNotifyChild?: (node: Adw.Dialog) => void;
        onNotifyContentHeight?: (node: Adw.Dialog) => void;
        onNotifyContentWidth?: (node: Adw.Dialog) => void;
        onNotifyCurrentBreakpoint?: (node: Adw.Dialog) => void;
        onNotifyDefaultWidget?: (node: Adw.Dialog) => void;
        onNotifyFocusWidget?: (node: Adw.Dialog) => void;
        onNotifyFollowsContentSize?: (node: Adw.Dialog) => void;
        onNotifyPresentationMode?: (node: Adw.Dialog) => void;
        onNotifyTitle?: (node: Adw.Dialog) => void;
        onNotifyName?: (node: Adw.Dialog) => void;
        onNotifyAccessibleRole?: (node: Adw.Dialog) => void;
      };
      AdwEntryRow: React.JSX.IntrinsicElements["AdwPreferencesRow"] & {
        ref?: React.Ref<Adw.EntryRow>;
        activatesDefault?: boolean;
        attributes?: Pango.AttrList | null;
        enableEmojiCompletion?: boolean;
        inputHints?: Gtk.InputHints;
        inputPurpose?: Gtk.InputPurpose;
        maxLength?: number;
        showApplyButton?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        editable?: boolean;
        enableUndo?: boolean;
        maxWidthChars?: number;
        text?: string | null;
        widthChars?: number;
        xalign?: number;
        onApply?: (node: Adw.EntryRow) => void;
        onEntryActivated?: (node: Adw.EntryRow) => void;
        onChanged?: (node: Adw.EntryRow) => void;
        onDeleteText?: (
          node: Adw.EntryRow,
          startPos: number,
          endPos: number
        ) => void;
        onInsertText?: (
          node: Adw.EntryRow,
          text: string | null,
          length: number,
          position: number
        ) => void;
        onNotifyActivatesDefault?: (node: Adw.EntryRow) => void;
        onNotifyAttributes?: (node: Adw.EntryRow) => void;
        onNotifyEnableEmojiCompletion?: (node: Adw.EntryRow) => void;
        onNotifyInputHints?: (node: Adw.EntryRow) => void;
        onNotifyInputPurpose?: (node: Adw.EntryRow) => void;
        onNotifyMaxLength?: (node: Adw.EntryRow) => void;
        onNotifyShowApplyButton?: (node: Adw.EntryRow) => void;
        onNotifyTextLength?: (node: Adw.EntryRow) => void;
        onNotifyName?: (node: Adw.EntryRow) => void;
        onNotifyAccessibleRole?: (node: Adw.EntryRow) => void;
        onNotifyActionName?: (node: Adw.EntryRow) => void;
        onNotifyActionTarget?: (node: Adw.EntryRow) => void;
        onNotifyCursorPosition?: (node: Adw.EntryRow) => void;
        onNotifyEditable?: (node: Adw.EntryRow) => void;
        onNotifyEnableUndo?: (node: Adw.EntryRow) => void;
        onNotifyMaxWidthChars?: (node: Adw.EntryRow) => void;
        onNotifySelectionBound?: (node: Adw.EntryRow) => void;
        onNotifyText?: (node: Adw.EntryRow) => void;
        onNotifyWidthChars?: (node: Adw.EntryRow) => void;
        onNotifyXalign?: (node: Adw.EntryRow) => void;
      };
      AdwExpanderRow: React.JSX.IntrinsicElements["AdwPreferencesRow"] & {
        ref?: React.Ref<Adw.ExpanderRow>;
        enableExpansion?: boolean;
        expanded?: boolean;
        iconName?: string | null;
        showEnableSwitch?: boolean;
        subtitle?: string | null;
        subtitleLines?: number;
        titleLines?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onNotifyEnableExpansion?: (node: Adw.ExpanderRow) => void;
        onNotifyExpanded?: (node: Adw.ExpanderRow) => void;
        onNotifyIconName?: (node: Adw.ExpanderRow) => void;
        onNotifyShowEnableSwitch?: (node: Adw.ExpanderRow) => void;
        onNotifySubtitle?: (node: Adw.ExpanderRow) => void;
        onNotifySubtitleLines?: (node: Adw.ExpanderRow) => void;
        onNotifyTitleLines?: (node: Adw.ExpanderRow) => void;
        onNotifyName?: (node: Adw.ExpanderRow) => void;
        onNotifyAccessibleRole?: (node: Adw.ExpanderRow) => void;
        onNotifyActionName?: (node: Adw.ExpanderRow) => void;
        onNotifyActionTarget?: (node: Adw.ExpanderRow) => void;
      };
      AdwFlap: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.Flap>;
        content?: Gtk.Widget | null;
        flap?: Gtk.Widget | null;
        flapPosition?: Gtk.PackType;
        foldDuration?: number;
        foldPolicy?: Adw.FlapFoldPolicy;
        foldThresholdPolicy?: Adw.FoldThresholdPolicy;
        locked?: boolean;
        modal?: boolean;
        revealFlap?: boolean;
        revealParams?: Adw.SpringParams;
        separator?: Gtk.Widget | null;
        swipeToClose?: boolean;
        swipeToOpen?: boolean;
        transitionType?: Adw.FlapTransitionType;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyContent?: (node: Adw.Flap) => void;
        onNotifyFlap?: (node: Adw.Flap) => void;
        onNotifyFlapPosition?: (node: Adw.Flap) => void;
        onNotifyFoldDuration?: (node: Adw.Flap) => void;
        onNotifyFoldPolicy?: (node: Adw.Flap) => void;
        onNotifyFoldThresholdPolicy?: (node: Adw.Flap) => void;
        onNotifyFolded?: (node: Adw.Flap) => void;
        onNotifyLocked?: (node: Adw.Flap) => void;
        onNotifyModal?: (node: Adw.Flap) => void;
        onNotifyRevealFlap?: (node: Adw.Flap) => void;
        onNotifyRevealParams?: (node: Adw.Flap) => void;
        onNotifyRevealProgress?: (node: Adw.Flap) => void;
        onNotifySeparator?: (node: Adw.Flap) => void;
        onNotifySwipeToClose?: (node: Adw.Flap) => void;
        onNotifySwipeToOpen?: (node: Adw.Flap) => void;
        onNotifyTransitionType?: (node: Adw.Flap) => void;
        onNotifyName?: (node: Adw.Flap) => void;
        onNotifyAccessibleRole?: (node: Adw.Flap) => void;
        onNotifyOrientation?: (node: Adw.Flap) => void;
      };
      AdwHeaderBar: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.HeaderBar>;
        centeringPolicy?: Adw.CenteringPolicy;
        decorationLayout?: string | null;
        showBackButton?: boolean;
        showEndTitleButtons?: boolean;
        showStartTitleButtons?: boolean;
        showTitle?: boolean;
        titleWidget?: Gtk.Widget | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyCenteringPolicy?: (node: Adw.HeaderBar) => void;
        onNotifyDecorationLayout?: (node: Adw.HeaderBar) => void;
        onNotifyShowBackButton?: (node: Adw.HeaderBar) => void;
        onNotifyShowEndTitleButtons?: (node: Adw.HeaderBar) => void;
        onNotifyShowStartTitleButtons?: (node: Adw.HeaderBar) => void;
        onNotifyShowTitle?: (node: Adw.HeaderBar) => void;
        onNotifyTitleWidget?: (node: Adw.HeaderBar) => void;
        onNotifyName?: (node: Adw.HeaderBar) => void;
        onNotifyAccessibleRole?: (node: Adw.HeaderBar) => void;
      };
      AdwInlineViewSwitcher: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.InlineViewSwitcher>;
        canShrink?: boolean;
        displayMode?: Adw.InlineViewSwitcherDisplayMode;
        homogeneous?: boolean;
        stack?: Adw.ViewStack | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyCanShrink?: (node: Adw.InlineViewSwitcher) => void;
        onNotifyDisplayMode?: (node: Adw.InlineViewSwitcher) => void;
        onNotifyHomogeneous?: (node: Adw.InlineViewSwitcher) => void;
        onNotifyStack?: (node: Adw.InlineViewSwitcher) => void;
        onNotifyName?: (node: Adw.InlineViewSwitcher) => void;
        onNotifyAccessibleRole?: (node: Adw.InlineViewSwitcher) => void;
        onNotifyOrientation?: (node: Adw.InlineViewSwitcher) => void;
      };
      AdwLayoutSlot: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.LayoutSlot>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyId?: (node: Adw.LayoutSlot) => void;
        onNotifyName?: (node: Adw.LayoutSlot) => void;
        onNotifyAccessibleRole?: (node: Adw.LayoutSlot) => void;
      };
      AdwLeaflet: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.Leaflet>;
        canNavigateBack?: boolean;
        canNavigateForward?: boolean;
        canUnfold?: boolean;
        childTransitionParams?: Adw.SpringParams;
        foldThresholdPolicy?: Adw.FoldThresholdPolicy;
        homogeneous?: boolean;
        modeTransitionDuration?: number;
        transitionType?: Adw.LeafletTransitionType;
        visibleChild?: Gtk.Widget;
        visibleChildName?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyCanNavigateBack?: (node: Adw.Leaflet) => void;
        onNotifyCanNavigateForward?: (node: Adw.Leaflet) => void;
        onNotifyCanUnfold?: (node: Adw.Leaflet) => void;
        onNotifyChildTransitionParams?: (node: Adw.Leaflet) => void;
        onNotifyChildTransitionRunning?: (node: Adw.Leaflet) => void;
        onNotifyFoldThresholdPolicy?: (node: Adw.Leaflet) => void;
        onNotifyFolded?: (node: Adw.Leaflet) => void;
        onNotifyHomogeneous?: (node: Adw.Leaflet) => void;
        onNotifyModeTransitionDuration?: (node: Adw.Leaflet) => void;
        onNotifyPages?: (node: Adw.Leaflet) => void;
        onNotifyTransitionType?: (node: Adw.Leaflet) => void;
        onNotifyVisibleChild?: (node: Adw.Leaflet) => void;
        onNotifyVisibleChildName?: (node: Adw.Leaflet) => void;
        onNotifyName?: (node: Adw.Leaflet) => void;
        onNotifyAccessibleRole?: (node: Adw.Leaflet) => void;
        onNotifyOrientation?: (node: Adw.Leaflet) => void;
      };
      AdwMessageDialog: React.JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Adw.MessageDialog>;
        body?: string | null;
        bodyUseMarkup?: boolean;
        closeResponse?: string | null;
        defaultResponse?: string | null;
        extraChild?: Gtk.Widget | null;
        heading?: string | null;
        headingUseMarkup?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onResponse?: (node: Adw.MessageDialog, response: string | null) => void;
        onNotifyBody?: (node: Adw.MessageDialog) => void;
        onNotifyBodyUseMarkup?: (node: Adw.MessageDialog) => void;
        onNotifyCloseResponse?: (node: Adw.MessageDialog) => void;
        onNotifyDefaultResponse?: (node: Adw.MessageDialog) => void;
        onNotifyExtraChild?: (node: Adw.MessageDialog) => void;
        onNotifyHeading?: (node: Adw.MessageDialog) => void;
        onNotifyHeadingUseMarkup?: (node: Adw.MessageDialog) => void;
        onNotifyName?: (node: Adw.MessageDialog) => void;
        onNotifyAccessibleRole?: (node: Adw.MessageDialog) => void;
      };
      AdwNavigationPage: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.NavigationPage>;
        canPop?: boolean;
        tag?: string | null;
        title?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onHidden?: (node: Adw.NavigationPage) => void;
        onHiding?: (node: Adw.NavigationPage) => void;
        onShowing?: (node: Adw.NavigationPage) => void;
        onShown?: (node: Adw.NavigationPage) => void;
        onNotifyCanPop?: (node: Adw.NavigationPage) => void;
        onNotifyChild?: (node: Adw.NavigationPage) => void;
        onNotifyTag?: (node: Adw.NavigationPage) => void;
        onNotifyTitle?: (node: Adw.NavigationPage) => void;
        onNotifyName?: (node: Adw.NavigationPage) => void;
        onNotifyAccessibleRole?: (node: Adw.NavigationPage) => void;
      };
      AdwNavigationSplitView: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.NavigationSplitView>;
        collapsed?: boolean;
        content?: Adw.NavigationPage | null;
        maxSidebarWidth?: number;
        minSidebarWidth?: number;
        showContent?: boolean;
        sidebar?: Adw.NavigationPage | null;
        sidebarPosition?: Gtk.PackType;
        sidebarWidthFraction?: number;
        sidebarWidthUnit?: Adw.LengthUnit;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyCollapsed?: (node: Adw.NavigationSplitView) => void;
        onNotifyContent?: (node: Adw.NavigationSplitView) => void;
        onNotifyMaxSidebarWidth?: (node: Adw.NavigationSplitView) => void;
        onNotifyMinSidebarWidth?: (node: Adw.NavigationSplitView) => void;
        onNotifyShowContent?: (node: Adw.NavigationSplitView) => void;
        onNotifySidebar?: (node: Adw.NavigationSplitView) => void;
        onNotifySidebarPosition?: (node: Adw.NavigationSplitView) => void;
        onNotifySidebarWidthFraction?: (node: Adw.NavigationSplitView) => void;
        onNotifySidebarWidthUnit?: (node: Adw.NavigationSplitView) => void;
        onNotifyName?: (node: Adw.NavigationSplitView) => void;
        onNotifyAccessibleRole?: (node: Adw.NavigationSplitView) => void;
      };
      AdwNavigationView: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.NavigationView>;
        animateTransitions?: boolean;
        hhomogeneous?: boolean;
        popOnEscape?: boolean;
        vhomogeneous?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onGetNextPage?: (node: Adw.NavigationView) => Adw.NavigationPage;
        onPopped?: (node: Adw.NavigationView, page: Adw.NavigationPage) => void;
        onPushed?: (node: Adw.NavigationView) => void;
        onReplaced?: (node: Adw.NavigationView) => void;
        onNotifyAnimateTransitions?: (node: Adw.NavigationView) => void;
        onNotifyHhomogeneous?: (node: Adw.NavigationView) => void;
        onNotifyNavigationStack?: (node: Adw.NavigationView) => void;
        onNotifyPopOnEscape?: (node: Adw.NavigationView) => void;
        onNotifyVhomogeneous?: (node: Adw.NavigationView) => void;
        onNotifyVisiblePage?: (node: Adw.NavigationView) => void;
        onNotifyVisiblePageTag?: (node: Adw.NavigationView) => void;
        onNotifyName?: (node: Adw.NavigationView) => void;
        onNotifyAccessibleRole?: (node: Adw.NavigationView) => void;
      };
      AdwOverlaySplitView: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.OverlaySplitView>;
        collapsed?: boolean;
        content?: Gtk.Widget | null;
        enableHideGesture?: boolean;
        enableShowGesture?: boolean;
        maxSidebarWidth?: number;
        minSidebarWidth?: number;
        pinSidebar?: boolean;
        showSidebar?: boolean;
        sidebar?: Gtk.Widget | null;
        sidebarPosition?: Gtk.PackType;
        sidebarWidthFraction?: number;
        sidebarWidthUnit?: Adw.LengthUnit;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyCollapsed?: (node: Adw.OverlaySplitView) => void;
        onNotifyContent?: (node: Adw.OverlaySplitView) => void;
        onNotifyEnableHideGesture?: (node: Adw.OverlaySplitView) => void;
        onNotifyEnableShowGesture?: (node: Adw.OverlaySplitView) => void;
        onNotifyMaxSidebarWidth?: (node: Adw.OverlaySplitView) => void;
        onNotifyMinSidebarWidth?: (node: Adw.OverlaySplitView) => void;
        onNotifyPinSidebar?: (node: Adw.OverlaySplitView) => void;
        onNotifyShowSidebar?: (node: Adw.OverlaySplitView) => void;
        onNotifySidebar?: (node: Adw.OverlaySplitView) => void;
        onNotifySidebarPosition?: (node: Adw.OverlaySplitView) => void;
        onNotifySidebarWidthFraction?: (node: Adw.OverlaySplitView) => void;
        onNotifySidebarWidthUnit?: (node: Adw.OverlaySplitView) => void;
        onNotifyName?: (node: Adw.OverlaySplitView) => void;
        onNotifyAccessibleRole?: (node: Adw.OverlaySplitView) => void;
      };
      AdwPasswordEntryRow: React.JSX.IntrinsicElements["AdwEntryRow"] & {
        ref?: React.Ref<Adw.PasswordEntryRow>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        editable?: boolean;
        enableUndo?: boolean;
        maxWidthChars?: number;
        text?: string | null;
        widthChars?: number;
        xalign?: number;
        onChanged?: (node: Adw.PasswordEntryRow) => void;
        onDeleteText?: (
          node: Adw.PasswordEntryRow,
          startPos: number,
          endPos: number
        ) => void;
        onInsertText?: (
          node: Adw.PasswordEntryRow,
          text: string | null,
          length: number,
          position: number
        ) => void;
        onNotifyName?: (node: Adw.PasswordEntryRow) => void;
        onNotifyAccessibleRole?: (node: Adw.PasswordEntryRow) => void;
        onNotifyActionName?: (node: Adw.PasswordEntryRow) => void;
        onNotifyActionTarget?: (node: Adw.PasswordEntryRow) => void;
        onNotifyCursorPosition?: (node: Adw.PasswordEntryRow) => void;
        onNotifyEditable?: (node: Adw.PasswordEntryRow) => void;
        onNotifyEnableUndo?: (node: Adw.PasswordEntryRow) => void;
        onNotifyMaxWidthChars?: (node: Adw.PasswordEntryRow) => void;
        onNotifySelectionBound?: (node: Adw.PasswordEntryRow) => void;
        onNotifyText?: (node: Adw.PasswordEntryRow) => void;
        onNotifyWidthChars?: (node: Adw.PasswordEntryRow) => void;
        onNotifyXalign?: (node: Adw.PasswordEntryRow) => void;
      };
      AdwPreferencesDialog: React.JSX.IntrinsicElements["AdwDialog"] & {
        ref?: React.Ref<Adw.PreferencesDialog>;
        searchEnabled?: boolean;
        visiblePage?: Gtk.Widget;
        visiblePageName?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifySearchEnabled?: (node: Adw.PreferencesDialog) => void;
        onNotifyVisiblePage?: (node: Adw.PreferencesDialog) => void;
        onNotifyVisiblePageName?: (node: Adw.PreferencesDialog) => void;
        onNotifyName?: (node: Adw.PreferencesDialog) => void;
        onNotifyAccessibleRole?: (node: Adw.PreferencesDialog) => void;
      };
      AdwPreferencesGroup: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.PreferencesGroup>;
        description?: string | null;
        headerSuffix?: Gtk.Widget | null;
        separateRows?: boolean;
        title?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyDescription?: (node: Adw.PreferencesGroup) => void;
        onNotifyHeaderSuffix?: (node: Adw.PreferencesGroup) => void;
        onNotifySeparateRows?: (node: Adw.PreferencesGroup) => void;
        onNotifyTitle?: (node: Adw.PreferencesGroup) => void;
        onNotifyName?: (node: Adw.PreferencesGroup) => void;
        onNotifyAccessibleRole?: (node: Adw.PreferencesGroup) => void;
      };
      AdwPreferencesPage: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.PreferencesPage>;
        banner?: Adw.Banner | null;
        description?: string | null;
        descriptionCentered?: boolean;
        iconName?: string | null;
        name?: string | null;
        title?: string | null;
        useUnderline?: boolean;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyBanner?: (node: Adw.PreferencesPage) => void;
        onNotifyDescription?: (node: Adw.PreferencesPage) => void;
        onNotifyDescriptionCentered?: (node: Adw.PreferencesPage) => void;
        onNotifyIconName?: (node: Adw.PreferencesPage) => void;
        onNotifyName?: (node: Adw.PreferencesPage) => void;
        onNotifyTitle?: (node: Adw.PreferencesPage) => void;
        onNotifyUseUnderline?: (node: Adw.PreferencesPage) => void;
        onNotifyAccessibleRole?: (node: Adw.PreferencesPage) => void;
      };
      AdwPreferencesRow: React.JSX.IntrinsicElements["ListBoxRow"] & {
        ref?: React.Ref<Adw.PreferencesRow>;
        title?: string | null;
        titleSelectable?: boolean;
        useMarkup?: boolean;
        useUnderline?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onNotifyTitle?: (node: Adw.PreferencesRow) => void;
        onNotifyTitleSelectable?: (node: Adw.PreferencesRow) => void;
        onNotifyUseMarkup?: (node: Adw.PreferencesRow) => void;
        onNotifyUseUnderline?: (node: Adw.PreferencesRow) => void;
        onNotifyName?: (node: Adw.PreferencesRow) => void;
        onNotifyAccessibleRole?: (node: Adw.PreferencesRow) => void;
        onNotifyActionName?: (node: Adw.PreferencesRow) => void;
        onNotifyActionTarget?: (node: Adw.PreferencesRow) => void;
      };
      AdwPreferencesWindow: React.JSX.IntrinsicElements["AdwWindow"] & {
        ref?: React.Ref<Adw.PreferencesWindow>;
        canNavigateBack?: boolean;
        searchEnabled?: boolean;
        visiblePage?: Gtk.Widget;
        visiblePageName?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyCanNavigateBack?: (node: Adw.PreferencesWindow) => void;
        onNotifySearchEnabled?: (node: Adw.PreferencesWindow) => void;
        onNotifyVisiblePage?: (node: Adw.PreferencesWindow) => void;
        onNotifyVisiblePageName?: (node: Adw.PreferencesWindow) => void;
        onNotifyName?: (node: Adw.PreferencesWindow) => void;
        onNotifyAccessibleRole?: (node: Adw.PreferencesWindow) => void;
      };
      AdwShortcutLabel: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.ShortcutLabel>;
        accelerator?: string | null;
        disabledText?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyAccelerator?: (node: Adw.ShortcutLabel) => void;
        onNotifyDisabledText?: (node: Adw.ShortcutLabel) => void;
        onNotifyName?: (node: Adw.ShortcutLabel) => void;
        onNotifyAccessibleRole?: (node: Adw.ShortcutLabel) => void;
      };
      AdwShortcutsDialog: React.JSX.IntrinsicElements["AdwDialog"] & {
        ref?: React.Ref<Adw.ShortcutsDialog>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyName?: (node: Adw.ShortcutsDialog) => void;
        onNotifyAccessibleRole?: (node: Adw.ShortcutsDialog) => void;
      };
      AdwSpinRow: React.JSX.IntrinsicElements["AdwActionRow"] & {
        ref?: React.Ref<Adw.SpinRow>;
        adjustment?: Gtk.Adjustment | null;
        climbRate?: number;
        digits?: number;
        numeric?: boolean;
        snapToTicks?: boolean;
        updatePolicy?: Gtk.SpinButtonUpdatePolicy;
        value?: number;
        wrap?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        editable?: boolean;
        enableUndo?: boolean;
        maxWidthChars?: number;
        text?: string | null;
        widthChars?: number;
        xalign?: number;
        onInput?: (node: Adw.SpinRow) => number;
        onOutput?: (node: Adw.SpinRow) => boolean;
        onWrapped?: (node: Adw.SpinRow) => void;
        onChanged?: (node: Adw.SpinRow) => void;
        onDeleteText?: (
          node: Adw.SpinRow,
          startPos: number,
          endPos: number
        ) => void;
        onInsertText?: (
          node: Adw.SpinRow,
          text: string | null,
          length: number,
          position: number
        ) => void;
        onNotifyAdjustment?: (node: Adw.SpinRow) => void;
        onNotifyClimbRate?: (node: Adw.SpinRow) => void;
        onNotifyDigits?: (node: Adw.SpinRow) => void;
        onNotifyNumeric?: (node: Adw.SpinRow) => void;
        onNotifySnapToTicks?: (node: Adw.SpinRow) => void;
        onNotifyUpdatePolicy?: (node: Adw.SpinRow) => void;
        onNotifyValue?: (node: Adw.SpinRow) => void;
        onNotifyWrap?: (node: Adw.SpinRow) => void;
        onNotifyName?: (node: Adw.SpinRow) => void;
        onNotifyAccessibleRole?: (node: Adw.SpinRow) => void;
        onNotifyActionName?: (node: Adw.SpinRow) => void;
        onNotifyActionTarget?: (node: Adw.SpinRow) => void;
        onNotifyCursorPosition?: (node: Adw.SpinRow) => void;
        onNotifyEditable?: (node: Adw.SpinRow) => void;
        onNotifyEnableUndo?: (node: Adw.SpinRow) => void;
        onNotifyMaxWidthChars?: (node: Adw.SpinRow) => void;
        onNotifySelectionBound?: (node: Adw.SpinRow) => void;
        onNotifyText?: (node: Adw.SpinRow) => void;
        onNotifyWidthChars?: (node: Adw.SpinRow) => void;
        onNotifyXalign?: (node: Adw.SpinRow) => void;
      };
      AdwSpinner: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.Spinner>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyName?: (node: Adw.Spinner) => void;
        onNotifyAccessibleRole?: (node: Adw.Spinner) => void;
      };
      AdwSplitButton: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.SplitButton>;
        canShrink?: boolean;
        direction?: Gtk.ArrowType;
        dropdownTooltip?: string | null;
        iconName?: string | null;
        label?: string | null;
        menuModel?: Gio.MenuModel | null;
        popover?: Gtk.Popover | null;
        useUnderline?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onActivate?: (node: Adw.SplitButton) => void;
        onClicked?: (node: Adw.SplitButton) => void;
        onNotifyCanShrink?: (node: Adw.SplitButton) => void;
        onNotifyChild?: (node: Adw.SplitButton) => void;
        onNotifyDirection?: (node: Adw.SplitButton) => void;
        onNotifyDropdownTooltip?: (node: Adw.SplitButton) => void;
        onNotifyIconName?: (node: Adw.SplitButton) => void;
        onNotifyLabel?: (node: Adw.SplitButton) => void;
        onNotifyMenuModel?: (node: Adw.SplitButton) => void;
        onNotifyPopover?: (node: Adw.SplitButton) => void;
        onNotifyUseUnderline?: (node: Adw.SplitButton) => void;
        onNotifyName?: (node: Adw.SplitButton) => void;
        onNotifyAccessibleRole?: (node: Adw.SplitButton) => void;
        onNotifyActionName?: (node: Adw.SplitButton) => void;
        onNotifyActionTarget?: (node: Adw.SplitButton) => void;
      };
      AdwSqueezer: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.Squeezer>;
        allowNone?: boolean;
        homogeneous?: boolean;
        interpolateSize?: boolean;
        switchThresholdPolicy?: Adw.FoldThresholdPolicy;
        transitionDuration?: number;
        transitionType?: Adw.SqueezerTransitionType;
        xalign?: number;
        yalign?: number;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyAllowNone?: (node: Adw.Squeezer) => void;
        onNotifyHomogeneous?: (node: Adw.Squeezer) => void;
        onNotifyInterpolateSize?: (node: Adw.Squeezer) => void;
        onNotifyPages?: (node: Adw.Squeezer) => void;
        onNotifySwitchThresholdPolicy?: (node: Adw.Squeezer) => void;
        onNotifyTransitionDuration?: (node: Adw.Squeezer) => void;
        onNotifyTransitionRunning?: (node: Adw.Squeezer) => void;
        onNotifyTransitionType?: (node: Adw.Squeezer) => void;
        onNotifyVisibleChild?: (node: Adw.Squeezer) => void;
        onNotifyXalign?: (node: Adw.Squeezer) => void;
        onNotifyYalign?: (node: Adw.Squeezer) => void;
        onNotifyName?: (node: Adw.Squeezer) => void;
        onNotifyAccessibleRole?: (node: Adw.Squeezer) => void;
        onNotifyOrientation?: (node: Adw.Squeezer) => void;
      };
      AdwStatusPage: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.StatusPage>;
        description?: string | null;
        iconName?: string | null;
        paintable?: Gdk.Paintable | null;
        title?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyChild?: (node: Adw.StatusPage) => void;
        onNotifyDescription?: (node: Adw.StatusPage) => void;
        onNotifyIconName?: (node: Adw.StatusPage) => void;
        onNotifyPaintable?: (node: Adw.StatusPage) => void;
        onNotifyTitle?: (node: Adw.StatusPage) => void;
        onNotifyName?: (node: Adw.StatusPage) => void;
        onNotifyAccessibleRole?: (node: Adw.StatusPage) => void;
      };
      AdwSwitchRow: React.JSX.IntrinsicElements["AdwActionRow"] & {
        ref?: React.Ref<Adw.SwitchRow>;
        active?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onNotifyActive?: (node: Adw.SwitchRow) => void;
        onNotifyName?: (node: Adw.SwitchRow) => void;
        onNotifyAccessibleRole?: (node: Adw.SwitchRow) => void;
        onNotifyActionName?: (node: Adw.SwitchRow) => void;
        onNotifyActionTarget?: (node: Adw.SwitchRow) => void;
      };
      AdwTabBar: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.TabBar>;
        autohide?: boolean;
        endActionWidget?: Gtk.Widget | null;
        expandTabs?: boolean;
        extraDragPreload?: boolean;
        inverted?: boolean;
        startActionWidget?: Gtk.Widget | null;
        view?: Adw.TabView | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onExtraDragDrop?: (
          node: Adw.TabBar,
          page: Adw.TabPage,
          value: any
        ) => boolean;
        onExtraDragValue?: (
          node: Adw.TabBar,
          page: Adw.TabPage,
          value: any
        ) => Gdk.DragAction;
        onNotifyAutohide?: (node: Adw.TabBar) => void;
        onNotifyEndActionWidget?: (node: Adw.TabBar) => void;
        onNotifyExpandTabs?: (node: Adw.TabBar) => void;
        onNotifyExtraDragPreferredAction?: (node: Adw.TabBar) => void;
        onNotifyExtraDragPreload?: (node: Adw.TabBar) => void;
        onNotifyInverted?: (node: Adw.TabBar) => void;
        onNotifyIsOverflowing?: (node: Adw.TabBar) => void;
        onNotifyStartActionWidget?: (node: Adw.TabBar) => void;
        onNotifyTabsRevealed?: (node: Adw.TabBar) => void;
        onNotifyView?: (node: Adw.TabBar) => void;
        onNotifyName?: (node: Adw.TabBar) => void;
        onNotifyAccessibleRole?: (node: Adw.TabBar) => void;
      };
      AdwTabButton: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.TabButton>;
        view?: Adw.TabView | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        actionName?: string | null;
        actionTarget?: GLib.Variant;
        onActivate?: (node: Adw.TabButton) => void;
        onClicked?: (node: Adw.TabButton) => void;
        onNotifyView?: (node: Adw.TabButton) => void;
        onNotifyName?: (node: Adw.TabButton) => void;
        onNotifyAccessibleRole?: (node: Adw.TabButton) => void;
        onNotifyActionName?: (node: Adw.TabButton) => void;
        onNotifyActionTarget?: (node: Adw.TabButton) => void;
      };
      AdwTabOverview: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.TabOverview>;
        enableNewTab?: boolean;
        enableSearch?: boolean;
        extraDragPreload?: boolean;
        inverted?: boolean;
        open?: boolean;
        secondaryMenu?: Gio.MenuModel | null;
        showEndTitleButtons?: boolean;
        showStartTitleButtons?: boolean;
        view?: Adw.TabView | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onCreateTab?: (node: Adw.TabOverview) => Adw.TabPage;
        onExtraDragDrop?: (
          node: Adw.TabOverview,
          page: Adw.TabPage,
          value: any
        ) => boolean;
        onExtraDragValue?: (
          node: Adw.TabOverview,
          page: Adw.TabPage,
          value: any
        ) => Gdk.DragAction;
        onNotifyChild?: (node: Adw.TabOverview) => void;
        onNotifyEnableNewTab?: (node: Adw.TabOverview) => void;
        onNotifyEnableSearch?: (node: Adw.TabOverview) => void;
        onNotifyExtraDragPreferredAction?: (node: Adw.TabOverview) => void;
        onNotifyExtraDragPreload?: (node: Adw.TabOverview) => void;
        onNotifyInverted?: (node: Adw.TabOverview) => void;
        onNotifyOpen?: (node: Adw.TabOverview) => void;
        onNotifySearchActive?: (node: Adw.TabOverview) => void;
        onNotifySecondaryMenu?: (node: Adw.TabOverview) => void;
        onNotifyShowEndTitleButtons?: (node: Adw.TabOverview) => void;
        onNotifyShowStartTitleButtons?: (node: Adw.TabOverview) => void;
        onNotifyView?: (node: Adw.TabOverview) => void;
        onNotifyName?: (node: Adw.TabOverview) => void;
        onNotifyAccessibleRole?: (node: Adw.TabOverview) => void;
      };
      AdwTabView: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.TabView>;
        defaultIcon?: Gio.Icon;
        menuModel?: Gio.MenuModel | null;
        selectedPage?: Adw.TabPage;
        shortcuts?: Adw.TabViewShortcuts;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onClosePage?: (node: Adw.TabView, page: Adw.TabPage) => boolean;
        onCreateWindow?: (node: Adw.TabView) => Adw.TabView;
        onIndicatorActivated?: (node: Adw.TabView, page: Adw.TabPage) => void;
        onPageAttached?: (
          node: Adw.TabView,
          page: Adw.TabPage,
          position: number
        ) => void;
        onPageDetached?: (
          node: Adw.TabView,
          page: Adw.TabPage,
          position: number
        ) => void;
        onPageReordered?: (
          node: Adw.TabView,
          page: Adw.TabPage,
          position: number
        ) => void;
        onSetupMenu?: (node: Adw.TabView, page: Adw.TabPage | null) => void;
        onNotifyDefaultIcon?: (node: Adw.TabView) => void;
        onNotifyIsTransferringPage?: (node: Adw.TabView) => void;
        onNotifyMenuModel?: (node: Adw.TabView) => void;
        onNotifyNPages?: (node: Adw.TabView) => void;
        onNotifyNPinnedPages?: (node: Adw.TabView) => void;
        onNotifyPages?: (node: Adw.TabView) => void;
        onNotifySelectedPage?: (node: Adw.TabView) => void;
        onNotifyShortcuts?: (node: Adw.TabView) => void;
        onNotifyName?: (node: Adw.TabView) => void;
        onNotifyAccessibleRole?: (node: Adw.TabView) => void;
      };
      AdwToastOverlay: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.ToastOverlay>;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyChild?: (node: Adw.ToastOverlay) => void;
        onNotifyName?: (node: Adw.ToastOverlay) => void;
        onNotifyAccessibleRole?: (node: Adw.ToastOverlay) => void;
      };
      AdwToggleGroup: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.ToggleGroup>;
        active?: number;
        activeName?: string | null;
        canShrink?: boolean;
        homogeneous?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyActive?: (node: Adw.ToggleGroup) => void;
        onNotifyActiveName?: (node: Adw.ToggleGroup) => void;
        onNotifyCanShrink?: (node: Adw.ToggleGroup) => void;
        onNotifyHomogeneous?: (node: Adw.ToggleGroup) => void;
        onNotifyNToggles?: (node: Adw.ToggleGroup) => void;
        onNotifyToggles?: (node: Adw.ToggleGroup) => void;
        onNotifyName?: (node: Adw.ToggleGroup) => void;
        onNotifyAccessibleRole?: (node: Adw.ToggleGroup) => void;
        onNotifyOrientation?: (node: Adw.ToggleGroup) => void;
      };
      AdwToolbarView: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.ToolbarView>;
        bottomBarStyle?: Adw.ToolbarStyle;
        content?: Gtk.Widget | null;
        extendContentToBottomEdge?: boolean;
        extendContentToTopEdge?: boolean;
        revealBottomBars?: boolean;
        revealTopBars?: boolean;
        topBarStyle?: Adw.ToolbarStyle;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyBottomBarHeight?: (node: Adw.ToolbarView) => void;
        onNotifyBottomBarStyle?: (node: Adw.ToolbarView) => void;
        onNotifyContent?: (node: Adw.ToolbarView) => void;
        onNotifyExtendContentToBottomEdge?: (node: Adw.ToolbarView) => void;
        onNotifyExtendContentToTopEdge?: (node: Adw.ToolbarView) => void;
        onNotifyRevealBottomBars?: (node: Adw.ToolbarView) => void;
        onNotifyRevealTopBars?: (node: Adw.ToolbarView) => void;
        onNotifyTopBarHeight?: (node: Adw.ToolbarView) => void;
        onNotifyTopBarStyle?: (node: Adw.ToolbarView) => void;
        onNotifyName?: (node: Adw.ToolbarView) => void;
        onNotifyAccessibleRole?: (node: Adw.ToolbarView) => void;
      };
      AdwViewStack: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.ViewStack>;
        enableTransitions?: boolean;
        hhomogeneous?: boolean;
        transitionDuration?: number;
        vhomogeneous?: boolean;
        visibleChild?: Gtk.Widget;
        visibleChildName?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyEnableTransitions?: (node: Adw.ViewStack) => void;
        onNotifyHhomogeneous?: (node: Adw.ViewStack) => void;
        onNotifyPages?: (node: Adw.ViewStack) => void;
        onNotifyTransitionDuration?: (node: Adw.ViewStack) => void;
        onNotifyTransitionRunning?: (node: Adw.ViewStack) => void;
        onNotifyVhomogeneous?: (node: Adw.ViewStack) => void;
        onNotifyVisibleChild?: (node: Adw.ViewStack) => void;
        onNotifyVisibleChildName?: (node: Adw.ViewStack) => void;
        onNotifyName?: (node: Adw.ViewStack) => void;
        onNotifyAccessibleRole?: (node: Adw.ViewStack) => void;
      };
      AdwViewSwitcher: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.ViewSwitcher>;
        policy?: Adw.ViewSwitcherPolicy;
        stack?: Adw.ViewStack | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyPolicy?: (node: Adw.ViewSwitcher) => void;
        onNotifyStack?: (node: Adw.ViewSwitcher) => void;
        onNotifyName?: (node: Adw.ViewSwitcher) => void;
        onNotifyAccessibleRole?: (node: Adw.ViewSwitcher) => void;
      };
      AdwViewSwitcherBar: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.ViewSwitcherBar>;
        reveal?: boolean;
        stack?: Adw.ViewStack | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyReveal?: (node: Adw.ViewSwitcherBar) => void;
        onNotifyStack?: (node: Adw.ViewSwitcherBar) => void;
        onNotifyName?: (node: Adw.ViewSwitcherBar) => void;
        onNotifyAccessibleRole?: (node: Adw.ViewSwitcherBar) => void;
      };
      AdwViewSwitcherTitle: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.ViewSwitcherTitle>;
        stack?: Adw.ViewStack | null;
        subtitle?: string | null;
        title?: string | null;
        viewSwitcherEnabled?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyStack?: (node: Adw.ViewSwitcherTitle) => void;
        onNotifySubtitle?: (node: Adw.ViewSwitcherTitle) => void;
        onNotifyTitle?: (node: Adw.ViewSwitcherTitle) => void;
        onNotifyTitleVisible?: (node: Adw.ViewSwitcherTitle) => void;
        onNotifyViewSwitcherEnabled?: (node: Adw.ViewSwitcherTitle) => void;
        onNotifyName?: (node: Adw.ViewSwitcherTitle) => void;
        onNotifyAccessibleRole?: (node: Adw.ViewSwitcherTitle) => void;
      };
      AdwWindow: React.JSX.IntrinsicElements["Window"] & {
        ref?: React.Ref<Adw.Window>;
        adaptivePreview?: boolean;
        content?: Gtk.Widget | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifyAdaptivePreview?: (node: Adw.Window) => void;
        onNotifyContent?: (node: Adw.Window) => void;
        onNotifyCurrentBreakpoint?: (node: Adw.Window) => void;
        onNotifyDialogs?: (node: Adw.Window) => void;
        onNotifyVisibleDialog?: (node: Adw.Window) => void;
        onNotifyName?: (node: Adw.Window) => void;
        onNotifyAccessibleRole?: (node: Adw.Window) => void;
      };
      AdwWindowTitle: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.WindowTitle>;
        subtitle?: string | null;
        title?: string | null;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        onNotifySubtitle?: (node: Adw.WindowTitle) => void;
        onNotifyTitle?: (node: Adw.WindowTitle) => void;
        onNotifyName?: (node: Adw.WindowTitle) => void;
        onNotifyAccessibleRole?: (node: Adw.WindowTitle) => void;
      };
      AdwWrapBox: React.JSX.IntrinsicElements["Widget"] & {
        ref?: React.Ref<Adw.WrapBox>;
        align?: number;
        childSpacing?: number;
        childSpacingUnit?: Adw.LengthUnit;
        justify?: Adw.JustifyMode;
        justifyLastLine?: boolean;
        lineHomogeneous?: boolean;
        lineSpacing?: number;
        lineSpacingUnit?: Adw.LengthUnit;
        naturalLineLength?: number;
        naturalLineLengthUnit?: Adw.LengthUnit;
        packDirection?: Adw.PackDirection;
        wrapPolicy?: Adw.WrapPolicy;
        wrapReverse?: boolean;
        name?: string;
        accessibleRole?: Gtk.AccessibleRole;
        orientation?: Gtk.Orientation;
        onNotifyAlign?: (node: Adw.WrapBox) => void;
        onNotifyChildSpacing?: (node: Adw.WrapBox) => void;
        onNotifyChildSpacingUnit?: (node: Adw.WrapBox) => void;
        onNotifyJustify?: (node: Adw.WrapBox) => void;
        onNotifyJustifyLastLine?: (node: Adw.WrapBox) => void;
        onNotifyLineHomogeneous?: (node: Adw.WrapBox) => void;
        onNotifyLineSpacing?: (node: Adw.WrapBox) => void;
        onNotifyLineSpacingUnit?: (node: Adw.WrapBox) => void;
        onNotifyNaturalLineLength?: (node: Adw.WrapBox) => void;
        onNotifyNaturalLineLengthUnit?: (node: Adw.WrapBox) => void;
        onNotifyPackDirection?: (node: Adw.WrapBox) => void;
        onNotifyWrapPolicy?: (node: Adw.WrapBox) => void;
        onNotifyWrapReverse?: (node: Adw.WrapBox) => void;
        onNotifyName?: (node: Adw.WrapBox) => void;
        onNotifyAccessibleRole?: (node: Adw.WrapBox) => void;
        onNotifyOrientation?: (node: Adw.WrapBox) => void;
      };
    }
  }
}
