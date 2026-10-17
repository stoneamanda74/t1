外链999!wailian999！

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163pdhjgloo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163uxomkksl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163gewovwyn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163xckfufmx.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163axhuuiob.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163csnywvgq.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163eubitdsn.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vaemirgt.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tdoewmrh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163odxvorga.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ylrhkkey.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163czynaygw.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163wbwjgxsq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163llphqzut.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163mwetwukb.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163uhxnmuxa.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xmjrbrpw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163nonnwcli.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uzlbeaey.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163qqjrltqv.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163lsfhxjky.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163melqgkpz.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163gyfxqhop.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163esxrqsip.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163jtrzuoju.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hsipdorx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ofuxdxit.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163aerjjcvv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163fszeajwd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163uvzzghsz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163pttndoqf.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163pzghheac.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163nzwgltvf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163lpglvvld.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163puiuoevy.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163epciqlhf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163icyqryvy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163evvhihlf.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ukyttzwg.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163fuqnxnxb.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163hlsgagpx.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163sjeczhum.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163pabmwwvs.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163smhllgsx.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ndxlymmj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yslivksu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163rwyikxhd.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163khzvzqbn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163njxkeqtr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163wfkwuwmm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163isemmttq.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163iavsuvux.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163srcsttza.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163cxrcarho.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163uvpkoeoc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163eybkgtkx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xipgytba.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163htrcxuvf.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163kmnhgfcy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hqchkhag.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163zmnmpchl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163puszijfc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fdwnuvdy.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ddvkwmdr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163xecgxuhr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uacttwnt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163hsyhqhwf.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163hpnynyhg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163wokfyxdj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163zgrjlvje.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163uwwowvzu.html

TS:   // 同上
来源：http://www.sxryk.cn/163puuhcuze.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163nphrihwy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163yyptpwyl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163dwvlfzyd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163wacychht.html

================================================================================
来源：http://www.aibaodan.cn/163sygislen.html

G. 面向对象
来源：http://www.xuanzx.com/163bekyhlkp.html

================================================================================
来源：http://www.sxryk.cn/163xyzrytyj.html

[G01] 定义类
来源：http://www.xuanzx.com/163fhshonqh.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163ubjrrurw.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163jaygokpz.html

JS:   class User {}
来源：http://www.xuanzx.com/163vhclpgez.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163pebtbpmk.html

Java: class User {}
来源：http://www.aibaodan.cn/163chnwyblr.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163vpphktug.html

Ruby: class User; end
来源：http://www.sxryk.cn/163gyuwluyg.html

C#:   class User {}
来源：http://www.xuanzx.com/163xcujmxkk.html

[G02] 构造函数
来源：http://www.sxryk.cn/163dvltfdcu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163opgdtgvb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163arpyjuta.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163ntihcwej.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163shacfqsk.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163raxciilj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163thdcokfm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163gjmpvebb.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163zuipsnsa.html

[G03] 实例属性
来源：http://www.sxryk.cn/163aqoofjif.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163csiehfgi.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163aybrikqr.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ozprksim.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163groggevz.html

Java: private String name;
来源：http://www.aibaodan.cn/163yzqklbpc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163oriofaxl.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163kjmbycrq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163lbribflz.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163uvbprwip.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163bfhgcohp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163kkakppnz.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163upbptxum.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163uwocpmmd.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163hmdyuaum.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163voqrhihf.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ldfyfwvx.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163onwrywzj.html

[G05] 继承
来源：http://www.sxryk.cn/163psneumpy.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163lmctmuhy.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163bpqlidik.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cfirtvnq.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163tmmyxiah.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163whgthvvi.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163eoybarvt.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163qmsyyzqm.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163cpzcpyrr.html

[G06] 重写方法
来源：http://www.xuanzx.com/163kkfbfnzi.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ijoopzvm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dgqaxrsw.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163tbaliuty.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uwfpsyjl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zlztyjjk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163hkozowjk.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163lplzcnlt.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163fvmyqeez.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163liqvrqmf.html

Py:   super().greet()
来源：http://www.sxryk.cn/163iglghyan.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163rjnxwaaa.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163aofpxbdw.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163uelwukce.html

Java: super.greet();
来源：http://www.xuanzx.com/163xfvuuctn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163rtnbldhh.html

Ruby: super
来源：http://www.sxryk.cn/163angvpblp.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163izyvlsmo.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163quvlnhnw.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163rjoaqlvm.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163wuuihgza.html

JS:   static f() {}
来源：http://www.sxryk.cn/163txasnkmx.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ciahdyxt.html

Java: static void f() {}
来源：http://www.xuanzx.com/163rabaxmkn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163pgnoolbg.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163vkahvbwq.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163mypgvnym.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163njswpudm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163pjlapupk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163vkiosjla.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163cxswfiyj.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163yiaqliie.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163hbknhphc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163wbrtjcvk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163aneqtdrn.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163pwukfvth.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163gqwjyjox.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ocfrkcjq.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ndlfjeav.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163oqhsztlz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163xwbvlhbx.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163hruadfdi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163lweouwzc.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jpvhesco.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ideaspdu.html

[G11] getter / setter
来源：http://www.xuanzx.com/163rvhzrerl.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ctmyoiup.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fefuurgo.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163rjaczdox.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163kbqxynms.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163wbtmrzhq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163srpwabkj.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163esfirfje.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163cmotmzco.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163mdhwsikl.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163vaiffttb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163keiqouuk.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163osfnysmy.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163psbokfaa.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163thumnyip.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163dgquiqmi.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163kqlehvbr.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163wkydlnlb.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163igbdkian.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hvsdaimt.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163bawyvkbf.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163xopuveze.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163oendjoid.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ijldpucf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163eosgodss.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ozmdweqc.html

C#:   u is User
来源：http://www.xuanzx.com/163byjeairr.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163faovguaf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qobyjtkb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163pcwnzzto.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ayfkprbj.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163iaoxgajm.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163hjklprsz.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163hlwhuywf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163pksnkvsk.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163rcczdbys.html

[G15] 枚举
来源：http://www.aibaodan.cn/163xyyjtqul.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163jelyegaz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163hdooevpu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163klhmtffa.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gpcrlrrj.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163jmfyabte.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163fcusrpip.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163zrbtiico.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163navlugqq.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163eutquhkx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163yqbgxcod.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163cvczxdgb.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lliqursv.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163opsflqff.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163oissawxr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163tngherrj.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ingigwtt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163uopurzka.html

================================================================================
来源：http://www.xuanzx.com/163kpkhnbkd.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163sofkocgj.html

================================================================================
来源：http://www.sxryk.cn/163lbbzufty.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163nvhtaewm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163pilbpqvv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163aaibcdqz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163gnxcfngg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163fcyrkbca.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163egwtlkka.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163vmdoskpi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163toiiqimb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163sjhesbvo.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ipncyhng.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163viyzrdop.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vlslnewq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163eqzpiywv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ejsvawxk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nxszlsum.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ckarxfmw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163zrldhwbt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163tfynedel.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163mqmiceqz.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163dttietse.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163qyebujhf.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lczxaxhu.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wcblbklk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bvferwlh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163nrpjczwr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163nxuloeqm.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163bozaqqxe.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ooauqooo.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163htaheiwn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163jwhdckoy.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wehntbsm.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ofpeeadz.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163kdexxukz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ajyixzzq.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163tsgjtvrr.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163rwprvpad.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163mxeynptp.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163smgrzhrt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163xuxvmfvo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lwdbiswl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163apteyery.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163yirljizm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163manpvdle.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ijxgtcij.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163mlfvfohy.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163oysinetw.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163hghbmlym.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163sclndkdh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lrqudrpx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163caihwrsz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163upfadgpc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163wdpbzupz.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163juddgxnf.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163pxiwhwgb.html

[H07] 断言
来源：http://www.aibaodan.cn/163ooswsnss.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ghfjngzw.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ryxyrtlf.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zadswfqn.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rtmiuxwe.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163tjfqrszp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163qlstsxza.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163kpyryylx.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163algebrzi.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163swoubfti.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163jglnuzsl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163cchamgjw.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163tctvojzb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163bojxthnt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163mezjdbzb.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ygxeioon.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163wuajzgmt.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ntyfdpwn.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163lztmqnmq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163kcahnzmt.html


<!-- 参考信息 -->