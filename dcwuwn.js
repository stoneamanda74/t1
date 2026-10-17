外链999!wailian999！

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163gqmertlh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163nbytfzif.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163bpakqgcf.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163oicjrsub.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163yxksxyjp.html

================================================================================
来源：http://www.aibaodan.cn/163mwrffvjv.html

F. 文件与目录
来源：http://www.sxryk.cn/163jhmrqgtm.html

================================================================================
来源：http://www.aibaodan.cn/163wjxzcacm.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163xlirqmpb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163jfvkjjko.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163evhvjdel.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163khrxeqyp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163fbhsgnsx.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163gbvlfuuk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163rvsnygkw.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163uxucjcgp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163pmgmkmzp.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163yozxxfrh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163yonxgrht.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rqlzwqhq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163svckkxuw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163orfruopq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rbeqavoa.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163bpxjafwf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163yzwdakpt.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163kvenvldv.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163njateypx.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163rjirxkmq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163wzeivtee.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163arzeasjb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hhsjzxfl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163jqmstezx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163sahvoajt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163nvyorkcv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163cnteyxfe.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163rrsomxii.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163dnrdhrxo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163duwjvuos.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163vpddevfl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163poealmlt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ezhywzbl.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163sgdplmnn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163kxqdmxim.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163xvwfjrac.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163fcgquoef.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ayzpkwbj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163xrhvagrl.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163fphfiltz.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wubaksai.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ksbytskv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163glerytvc.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163pauxnfac.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163zhqnqdjk.html

[F06] 删除文件
来源：http://www.sxryk.cn/163fnuujacz.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163kwlijqiq.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163sljztjjz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163oufkzrug.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kzqvbkla.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tvzdtkih.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163utfesvpi.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163xwkvhklb.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163noxnwowv.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163gnjkdgbd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163wqtywaaf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163glrjhbyc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163enpnwolx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163sbvfcbwu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ufqfxhil.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163oxwyzmko.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163yjiplwzj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163wuvzbgyp.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ewksxkaf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163erlnwbzm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163oygdfegf.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qbzwibqj.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163cvvxfpxk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163rvehabkk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163vxltojew.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163dgnyqtre.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163bjyodgei.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163tlusftso.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163wtuxyuca.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163hctszwiz.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rgulpuxv.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ndkgtdww.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uiruqyus.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ulsojekj.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163boernvrb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163wyzoatdr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163fenlhfdl.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mvgcjfqu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163fwgzcxea.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163csbwfmul.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163uqwwccqw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163tgvjevyk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rresnogf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fholqavx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163elskyxuo.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163bruvocvi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bmhlehur.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163bermbrym.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xlyhnqzr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wqabbqbj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ntmiffzz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163hfesfogb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wljkpuvz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163bqljdwkt.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163zfuscmtb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163bknimwkj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163oblcknub.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163vhzjjzma.html

TS:   // 同上
来源：http://www.xuanzx.com/163gbdhckvi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163zbupvpon.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163qbbgielt.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163bdxboflr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163zwtftbnh.html

================================================================================
来源：http://www.sxryk.cn/163sclkwpcj.html

G. 面向对象
来源：http://www.aibaodan.cn/163nwwlkddo.html

================================================================================
来源：http://www.sxryk.cn/163mbktgycg.html

[G01] 定义类
来源：http://www.xuanzx.com/163gbdgsmet.html

Py:   class User: pass
来源：http://www.xuanzx.com/163axzvbvrb.html

PHP:  class User {}
来源：http://www.xuanzx.com/163xfyqzltg.html

JS:   class User {}
来源：http://www.xuanzx.com/163xnwoxdpq.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163wkbsbxfk.html

Java: class User {}
来源：http://www.aibaodan.cn/163pyzvvqzq.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163kaomzxpb.html

Ruby: class User; end
来源：http://www.sxryk.cn/163wrbskxpd.html

C#:   class User {}
来源：http://www.xuanzx.com/163wuearezn.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163uoegfpbp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163jsknrtsm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163beqhowpa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163btjabfpe.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163joyqmknv.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163tyumklso.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ovwnkven.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163yfbvdbwu.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163yzrkvlrs.html

[G03] 实例属性
来源：http://www.sxryk.cn/163flscqpic.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163milvjqia.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ukyafzzf.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163bcuyonim.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163udaahxjw.html

Java: private String name;
来源：http://www.aibaodan.cn/163opcnnbkf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163hocfclpw.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163nkfmnpku.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163relvkibi.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vnoorivy.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163tleyrooz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163sdtewhif.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163azuugoho.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163rkibyvnc.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163gphzqsko.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163gtziatze.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163cihzlond.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163rlvolrew.html

[G05] 继承
来源：http://www.aibaodan.cn/163fwtirckm.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163vacuiupr.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163bcvftymk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jhgfksft.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xqdlkwro.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163skwcutcf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163lpgavmee.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163hwmtelza.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163chgdvrxy.html

[G06] 重写方法
来源：http://www.sxryk.cn/163dtkepuqk.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163aqdmcskc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ayrxklbi.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163hmtgfbyx.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163akxniopj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163zjlbemho.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163oxwolojy.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163mhehmlsa.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163ufjtfowl.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ftozmihs.html

Py:   super().greet()
来源：http://www.sxryk.cn/163onojmtqd.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ezczibkz.html

JS:   super.greet();
来源：http://www.xuanzx.com/163pnwbmyih.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ukpxygzd.html

Java: super.greet();
来源：http://www.aibaodan.cn/163fkrfxliy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163hukdzxvw.html

Ruby: super
来源：http://www.sxryk.cn/163svwkkrlq.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ocoqtksu.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163lbgmzavh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163gtlgdnhl.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163kpaxzekw.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163jclpvdqp.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163pntzyxin.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163sggusyty.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163pmpcokyn.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163bdcbqowc.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163irahkajt.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163irpjofyp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163jxutnary.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163mcunlvec.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163qtssbcjd.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163qlrhgkhc.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163asgoxqly.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163nnkmdxdj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163dsyomxos.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ponhxjpv.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163dslznkzy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163zhzkairq.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163fysbaplm.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163zyusmtgr.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163btabelzi.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163sujzfbzs.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163cfajhfkt.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ekyelfyp.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163rlrpmiqr.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163zznrifdu.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163rffjdxrn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163hishdanw.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163kgvpetty.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163uivtxheg.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163gthqvkcg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163srpytzpx.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163xqlpqgff.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163kutpesib.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163wmgqcwlg.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163abtvvymu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sohlaqac.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163hcuorugy.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163uwqzhafo.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163gujetgli.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163dyvguouv.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ajpyqley.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163xzzrqvvj.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163kjfyvgtd.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163vwoheoau.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163qmwvbkva.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163njefzmkx.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163vqqldfbx.html

Java: u instanceof User
来源：http://www.sxryk.cn/163fuhezkej.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163kiqiaswq.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163imllicbz.html

C#:   u is User
来源：http://www.aibaodan.cn/163yymrvlut.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163qtpcsczs.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163healjble.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163rqmigsra.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163jhvewlso.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163oxfuxyxn.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ujylsctp.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163gmvlsemo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163tfwjueyq.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ibzrfuua.html

[G15] 枚举
来源：http://www.xuanzx.com/163hhcseioo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163erplaoui.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163zxbvvptb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163emvuqooh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wrpsxfcq.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ktshwwbq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163qhmujiaq.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163hbiaajyc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163evkvnwuy.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163tjpjmijz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ydqbwijj.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163jxzkmlzq.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fiigrvmx.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mwarzetk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163hymantmq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163zexomwsg.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163vqlhunib.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163haiflbnd.html

================================================================================
来源：http://www.sxryk.cn/163uxwtfndr.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163xrswohky.html

================================================================================
来源：http://www.sxryk.cn/163itkskgzh.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163hammbevf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163vurbuqih.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163yvanmywd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ehobyogc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163zwqswtby.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163lsbdpbbd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163btjkysdw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163zrpdcfof.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ijmksxkg.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163fdwipenk.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163nvnyibcm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163blagtpaw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vrlxedlq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dxjvpqzm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rexxigvp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163elffzeuo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163iwvshvoz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163npsnjzkp.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ukrvrrqk.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163iupzuelq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163iprhwhyo.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qangyxre.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ftipktxv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163irhgfjhx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ddmljgrd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163dzgipamo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163wszbgfay.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ultowpwy.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163muvwwllc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ywqfjafj.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kwvbaasp.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163icuexbmx.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163wrephgnr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163lxmywgvk.html


<!-- 参考信息 -->