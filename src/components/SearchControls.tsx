import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { SearchIcon, FilterIcon, UsersIcon } from 'lucide-react';

interface SearchControlsProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  bookFilter: string;
  onBookFilterChange: (value: string) => void;
  typeFilter: string;
  onTypeFilterChange: (value: string) => void;
  resultsCount: number;
}

export const SearchControls = ({
  searchTerm,
  onSearchChange,
  bookFilter,
  onBookFilterChange,
  typeFilter,
  onTypeFilterChange,
  resultsCount
}: SearchControlsProps) => {
  return (
    <div className="bg-gradient-card border border-border/50 rounded-lg p-6 shadow-card">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
        <div className="relative flex-1 min-w-0">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search characters, groups, or descriptions..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-background/50 border-border/50 focus:border-malazan-gold transition-colors"
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <div className="flex items-center gap-2">
            <FilterIcon className="h-4 w-4 text-muted-foreground" />
            <Select value={bookFilter} onValueChange={onBookFilterChange}>
              <SelectTrigger className="w-48 bg-background/50 border-border/50">
                <SelectValue placeholder="Filter by book" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="all">All Books</SelectItem>
                <SelectItem value="gotm">Gardens of the Moon</SelectItem>
                <SelectItem value="dg">Deadhouse Gates</SelectItem>
                <SelectItem value="moi">Memories of Ice</SelectItem>
                <SelectItem value="hoc">House of Chains</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Select value={typeFilter} onValueChange={onTypeFilterChange}>
            <SelectTrigger className="w-48 bg-background/50 border-border/50">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="military">Military Units</SelectItem>
              <SelectItem value="ascendant">Ascendants/Gods</SelectItem>
              <SelectItem value="noble">Noble Houses</SelectItem>
              <SelectItem value="cult">Cults/Orders</SelectItem>
              <SelectItem value="clan">Clans</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-center gap-2">
          <UsersIcon className="h-4 w-4 text-malazan-gold" />
          <Badge variant="outline" className="border-malazan-gold text-malazan-gold">
            {resultsCount} groups
          </Badge>
        </div>
      </div>
    </div>
  );
};