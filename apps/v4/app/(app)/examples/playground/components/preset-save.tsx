import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog"
import { Input } from "@/registry/new-york-v4/ui/input"
import { Label } from "@/registry/new-york-v4/ui/label"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"

export function PresetSave() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">حفظ</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>حفظ الإعداد المسبق</DialogTitle>
          <DialogDescription>
            سيؤدي هذا إلى حفظ حالة ساحة اللعب الحالية كإعداد مسبق يمكنك الوصول إليه لاحقًا أو مشاركته مع الآخرين.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-3">
            <Label htmlFor="name">الاسم</Label>
            <Input id="name" autoFocus />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="description">الوصف</Label>
            <Textarea id="description" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">حفظ</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
