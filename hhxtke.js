外链999!wailian999！

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163tlthzoio.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hbtlbsfp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163eqmjqpkz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163eyjmblvj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163zoieyasa.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163vfdjghio.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163pznnzoce.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163cwjmmksg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163vqvhvknq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163yjovqzgv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vdlsqryg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qbqhmhbl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163bvkphqna.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163mtecffek.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163pbipepfx.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163iynabips.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163bdskiuyf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163oypjprmv.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163lfsvxcnh.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163pjoyewwt.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ipixbdwb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kmzwxuug.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163bpxxqgqt.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163dblerkiy.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163npqhnipo.html

[F06] 删除文件
来源：http://www.xuanzx.com/163xpaqkkzl.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163mvrmdshi.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163kbhkbzpl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163cwzfmobg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163usggaptq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kqhqtpls.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163vxpxdhgi.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163pevcdids.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163obpeveeu.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163nebmqujx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163xxrthaaw.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ieohnxdo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163opqvpbju.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ichlxsuw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163mofdqmux.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163yyxgpeff.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163vkgovpsr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163zpovvzhy.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163dohervlk.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163vfdzrjfk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163guekzqzh.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163kxuivoue.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hqtewhzj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163nslbcsxr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163mgjkcixa.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163eujmilxy.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163qrygibkj.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163tzzaepep.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163evtnvzbz.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163ryxztzvy.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qmsyiozp.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163fpgqhdch.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ebjcojbf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163uxnfxuqd.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163vnbhqhqi.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163xjqixkau.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ntapmptn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uneyhkvl.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163erfvohdr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163bmaprntp.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163vqowmivr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ctswmudn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163nozfdskc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163exfqdalq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163edizatrj.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163zbrbpbls.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rmswswsd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163yftjqskh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163unsjdpti.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163elomuxas.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163sququxgg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163msutedpe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uxycsisj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163dfxmjgst.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163gxpcckrl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ccfphbbg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163zxvxjjbm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163livjleox.html

TS:   // 同上
来源：http://www.aibaodan.cn/163wdnsbbxh.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163irxuxyvk.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163joojdjhb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163gwvudgxl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163btbegfzb.html

================================================================================
来源：http://www.aibaodan.cn/163vdqgecda.html

G. 面向对象
来源：http://www.xuanzx.com/163htxaryeo.html

================================================================================
来源：http://www.aibaodan.cn/163fpaktsuj.html

[G01] 定义类
来源：http://www.sxryk.cn/163rdkejfvd.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163xbuchwwy.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ggbqbial.html

JS:   class User {}
来源：http://www.xuanzx.com/163vtmgdokq.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163oadeddqi.html

Java: class User {}
来源：http://www.aibaodan.cn/163bnyuwdsg.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163kongtcuo.html

Ruby: class User; end
来源：http://www.sxryk.cn/163yafuowng.html

C#:   class User {}
来源：http://www.aibaodan.cn/163hcbswxrt.html

[G02] 构造函数
来源：http://www.xuanzx.com/163edgyhvnj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163euulxdgh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163vrjppjaa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163mwinuiby.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163wdwoloqq.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163wkyclqsd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163sbikzmoi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163rjsxttmu.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163dkzmtlgk.html

[G03] 实例属性
来源：http://www.sxryk.cn/163yxcmbonl.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ggjqqmnr.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163zsvvugwb.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pepkimiv.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163xwjnodcn.html

Java: private String name;
来源：http://www.xuanzx.com/163zdujoqol.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163gzjbcuuj.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163bzvhaqkm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163zosufqmy.html

[G04] 定义方法
来源：http://www.sxryk.cn/163lyaqtvqz.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163jiduhnfc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163smdqmtlv.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163anikmosz.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163xcglpueq.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163dpjlsjix.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163serrxjaq.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163dwhnfbjr.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163fnimburk.html

[G05] 继承
来源：http://www.aibaodan.cn/163eqwykclc.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163fooypiek.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163arfprpvm.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ikxblbzn.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163yauwikip.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163pbobyhsj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163vkmtqceu.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163syffrtdb.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163hltftble.html

[G06] 重写方法
来源：http://www.xuanzx.com/163njlykjux.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163rdtwplyk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163oczrvzuw.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ievbxqtn.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vsxicsuv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163cjcfuhmn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163dwydjddc.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163culnjyog.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163heyssgap.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163lrzhscot.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163svjlkmjj.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163yenobrvh.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163tyfahsgn.html

TS:   super.greet();
来源：http://www.sxryk.cn/163vgsgzxbd.html

Java: super.greet();
来源：http://www.sxryk.cn/163bgxcqlgx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163abjwyzwm.html

Ruby: super
来源：http://www.aibaodan.cn/163fsmdtohh.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163mjjdikco.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163exzxkbew.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163hrhaplga.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163aibvjejr.html

JS:   static f() {}
来源：http://www.xuanzx.com/163msbcmlfb.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163yhputpjs.html

Java: static void f() {}
来源：http://www.xuanzx.com/163tnlbtljm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163cxvywxuc.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163zdqeoykf.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163llxjdklv.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163mukzrecx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163kgmvtjar.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163xhtsffal.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163wtrmjryy.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163yldbofpg.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163gukxdujj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163gemnglsa.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163dljolbnd.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ulkuzzon.html

[G10] 访问控制
来源：http://www.sxryk.cn/163nqvczxna.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163nkgfsavj.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zibeyilv.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163koumwlot.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163vchmashh.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163wwcjkkte.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ulwignds.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163vpfcmock.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163qsdcpqda.html

[G11] getter / setter
来源：http://www.xuanzx.com/163pijesbso.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163gvmeazgi.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nnnvgpxa.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163yhbpjjih.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163relxabxi.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ghcpcbnh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ckkgbtqq.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ulwhioek.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ctqkuppa.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163zzeqmcjs.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163yaxiuema.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163nrhdciit.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163dcxbwpik.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163yzmdxisg.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163xiwsdmam.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163egsgocrf.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ovyjtgko.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163gjzdmwjr.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163qclerjwk.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163mkzdqixv.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163etneczpn.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163bjrbssbx.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163cjfgkklv.html

Java: u instanceof User
来源：http://www.sxryk.cn/163dmcxfnvx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163sgvwihoe.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163twabmkfe.html

C#:   u is User
来源：http://www.sxryk.cn/163iofswetl.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163sioskwnl.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163qjpebowv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163hivgbnpa.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163srmqubon.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163vrlalpew.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163nyguspuq.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163jealficr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163butenmlr.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163imbzljfy.html

[G15] 枚举
来源：http://www.xuanzx.com/163kpeigejy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163gyfuyugk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163mlrjkhbr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163tsbjxmxg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ykpcmzvb.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163hixvduhx.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163dzwsgghq.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163jfcoygxc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jfqqkifu.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163prrgaodw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163mwditxav.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163mourskak.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bnpkrdpf.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lnrasaxj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163gmfntkya.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163vsjcujgr.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wzbphmbx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163zmkypfpg.html

================================================================================
来源：http://www.sxryk.cn/163fngmbcbl.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163eeoymgwa.html

================================================================================
来源：http://www.sxryk.cn/163sfnevwmf.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163uauvowrs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163lrdtqmut.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163yzlxbmse.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163rzlhmszl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163lbysbguf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163lhtcrrrz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163wjafjtyg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163bkfcopba.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163fmsdmzft.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163tvwqgikc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163rudhmvts.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fjmohlmg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tdsldqof.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xitxuzkx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ubwhszrd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qcxcpbpe.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163eqpwcfzk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163cxptrqly.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163aluhppvd.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163brwpcgpn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ihquvzel.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vcqsxtzi.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ggvhptxy.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gasrgima.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163amflrklo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163xmtlvhay.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mlstowja.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163yccietpt.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163szmmyfxe.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163trmxdxio.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ljgfcspm.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xzkrhbdv.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163rzdkdmmo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163aebignoc.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163agugceyx.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ngshyhjm.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163vlfxulfr.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163chtnwihv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163oqgtsiie.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ypewremy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163kmknuvzs.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ctlgkqcz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ksqscfpf.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163dpxmwrqp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163saxiusuq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163prenfahb.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163pozhkomd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163dgmrhuym.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jceejbfc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163knfchesu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163bicdegbw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163gaqgcego.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163xnnonxao.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163qjbsrypm.html

[H07] 断言
来源：http://www.sxryk.cn/163npzxrnnr.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163hjeoirqq.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163nuudosaw.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hljlwjux.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163zyhhsyjn.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163paatwmrd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163uascligx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163rwleeedq.html


<!-- 参考信息 -->