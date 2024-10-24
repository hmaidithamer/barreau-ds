import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Component/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    class: {
      control: 'select',
      options: [
        'bouton-rectangle-primaire',
        'bouton-rectangle-secondaire',
        'bouton-rectangle-primaire-blanc',
        'bouton-rectangle-secondaire-blanc',
        'bouton-arrondi-primaire',
        'bouton-arrondi-secondaire',
        'bouton-arrondi-primaire-blanc',
        'bouton-arrondi-secondaire-blanc',
        'bouton-rectangle-noir',
        'bouton-arrondi-noir',
        'bouton-rectangle-gris',
        'bouton-arrondi-gris',
      ],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default meta;
type Story = StoryObj<ButtonComponent>;

/**
 * - Le bouton principal est utilisé pour l'action la plus importante sur la page. Il est recommandé d'en avoir qu'un seul par page. Cette recommendation peut être omise dans le cas des boutons de navigation, où deux boutons peuvent être utilisés (par exemple, les boutons « Précédent » et « Suivant »). Le bouton a une forme rectangulaire.
 * - Le bouton principal est implémenté avec les styles commençant par « bouton-rectangle ». Le mot suivant, primaire ou secondaire, représente les variables $primaire et $secondaire des projets Angular. Il est recommandé de mettre la couleur dominante (la plus utilisée) dans la variable $primaire.
 * - Les valeurs des variables peuvent changer d'un projet à l'autre. Dans l'inscription annuelle, le rouge est utilisé, tandis que le bleu est utilisé dans la gestion des évaluations de l'École du Barreau. La couleur des boutons s'adaptent au projet.
 */
export const PrimaryRectangle: Story = {
  name: 'bouton-rectangle-primaire',
  args: {
    class: 'bouton-rectangle-primaire',
    label: 'Enregistrer',
    disabled: false,
  },
};

export const SecondaryRectangle: Story = {
  name: 'bouton-rectangle-secondaire',
  args: {
    class: 'bouton-rectangle-secondaire',
    label: 'Enregistrer',
    disabled: false,
  },
};

export const PrimaryRectangleBlanc: Story = {
  name: 'bouton-rectangle-primaire-blanc',
  args: {
    class: 'bouton-rectangle-primaire-blanc',
    label: 'Précédent',
    disabled: false,
  },
};

export const SecondaryRectangleBlanc: Story = {
  name: 'bouton-rectangle-secondaire-blanc',
  args: {
    class: 'bouton-rectangle-secondaire-blanc',
    label: 'Enregistrer',
    disabled: false,
  },
};

export const PrimaryRounded: Story = {
  name: 'bouton-arrondi-primaire',
  args: {
    class: 'bouton-arrondi-primaire',
    label: 'Enregistrer',
    disabled: false,
  },
};

export const SecondaryRounded: Story = {
  name: 'bouton-arrondi-secondaire',
  args: {
    class: 'bouton-arrondi-secondaire',
    label: 'Enregistrer',
    disabled: false,
  },
};

export const PrimaryRoundedBlanc: Story = {
  name: 'bouton-arrondi-primaire-blanc',
  args: {
    class: 'bouton-arrondi-primaire-blanc',
    label: 'Enregistrer',
    disabled: false,
  },
};

export const SecondaryRoundedBlanc: Story = {
  name: 'bouton-arrondi-secondaire-blanc',
  args: {
    class: 'bouton-arrondi-secondaire-blanc',
    label: 'Enregistrer',
    disabled: false,
  },
};

export const BlackRectangle: Story = {
  name: 'bouton-rectangle-noir',
  args: {
    class: 'bouton-rectangle-noir',
    label: 'Enregistrer',
    disabled: false,
  },
};

export const BlackRounded: Story = {
  name: 'bouton-arrondi-noir',
  args: {
    class: 'bouton-arrondi-noir',
    label: 'Enregistrer',
    disabled: false,
  },
};

export const GrayRectangle: Story = {
  name: 'bouton-rectangle-gris',
  args: {
    class: 'bouton-rectangle-gris',
    label: 'Enregistrer',
    disabled: false,
  },
};

export const GrayRounded: Story = {
  name: 'bouton-arrondi-gris',
  args: {
    class: 'bouton-arrondi-gris',
    label: 'Enregistrer',
    disabled: false,
  },
};
