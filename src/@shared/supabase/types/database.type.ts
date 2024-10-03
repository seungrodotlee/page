export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      abouts: {
        Row: {
          content: string
          created_at: string
          id: number
          note: string | null
          selected: boolean | null
          title: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: number
          note?: string | null
          selected?: boolean | null
          title: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: number
          note?: string | null
          selected?: boolean | null
          title?: string
        }
        Relationships: []
      }
      abouts_contacts_relation: {
        Row: {
          about: number
          contact: number
        }
        Insert: {
          about: number
          contact: number
        }
        Update: {
          about?: number
          contact?: number
        }
        Relationships: [
          {
            foreignKeyName: "about_contact_relation_about_fkey"
            columns: ["about"]
            isOneToOne: false
            referencedRelation: "abouts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "about_contact_relation_contact_fkey"
            columns: ["contact"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      articles: {
        Row: {
          content: string
          created_at: string
          id: number
          title: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: number
          title: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: number
          title?: string
        }
        Relationships: []
      }
      articles_tags_relation: {
        Row: {
          article: number
          tag: number
        }
        Insert: {
          article: number
          tag: number
        }
        Update: {
          article?: number
          tag?: number
        }
        Relationships: [
          {
            foreignKeyName: "blog_tags_relation_blog_fkey"
            columns: ["article"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_tags_relation_tag_fkey"
            columns: ["tag"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          created_at: string
          id: number
          label: string
          link: string
        }
        Insert: {
          created_at?: string
          id?: number
          label: string
          link: string
        }
        Update: {
          created_at?: string
          id?: number
          label?: string
          link?: string
        }
        Relationships: []
      }
      tags: {
        Row: {
          created_at: string
          id: number
          title: string
        }
        Insert: {
          created_at?: string
          id?: number
          title: string
        }
        Update: {
          created_at?: string
          id?: number
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
