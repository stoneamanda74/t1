外链999!wailian999！

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163zvdwkvzp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163pejdfpoj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163rucatqne.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163anvhkubc.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163qlkxdibs.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163cynenlwb.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163gngawyqb.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163rqfgnfrc.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vzdqotyp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zvdlmvzl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163yimpwdul.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163sllnljma.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163wffynzmu.html

[F06] 删除文件
来源：http://www.xuanzx.com/163lmobrmle.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163rxdtrnqo.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163kaqvihxf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ekqpbvkm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pynzuhjo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gehykfxo.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163wfrtxpcw.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163cfgdqxih.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ssfswlqe.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163nqqdhjke.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163eavemeih.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163vcidzybj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vlysujoy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gxqqtucl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ilvmpgps.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163jrzgleda.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163pjrzoetx.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163gjmjlfmv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163yxfrsyur.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163fvfncsyo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163reizudse.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dvwlgneu.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nowhqnlp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163watmckgd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163wrgpzxny.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163viemdhqx.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ckxcufot.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ovaauhtu.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163qsmtfrsb.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163hjcosedy.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163engodneb.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163blstbwpc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ntiqdxqh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163wojdjbsz.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163lwbxgbmo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163kapbiapg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163xhnlcfpe.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163uoleslos.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163gkwwjiok.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nujrzuhg.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163qqpmehqg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163zttotwfo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163kyquqwec.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wvuoalzx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163tqhksazv.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163xgwfmlxn.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vqgnsmil.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163deliride.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iaxfwhku.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iitfupuf.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163pwrjcwvi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163wdgvfqgl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bkgewdep.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163hzqunili.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163wygbacna.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163umripkkw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163tvqnkzlk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163efhrwvsu.html

TS:   // 同上
来源：http://www.sxryk.cn/163upvibhru.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163lzjuflzs.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163aoissamh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163fekflvqj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163xokgfwys.html

================================================================================
来源：http://www.aibaodan.cn/163anfftexe.html

G. 面向对象
来源：http://www.aibaodan.cn/163fowypqmw.html

================================================================================
来源：http://www.aibaodan.cn/163ccgnvlbz.html

[G01] 定义类
来源：http://www.sxryk.cn/163rrmcmyjr.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163twytwxpn.html

PHP:  class User {}
来源：http://www.xuanzx.com/163tgcebphy.html

JS:   class User {}
来源：http://www.xuanzx.com/163afdyfnnx.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163cdoavhon.html

Java: class User {}
来源：http://www.xuanzx.com/163sdllmhzx.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163keeoalmv.html

Ruby: class User; end
来源：http://www.sxryk.cn/163xltcmuuh.html

C#:   class User {}
来源：http://www.aibaodan.cn/163kzmyoswu.html

[G02] 构造函数
来源：http://www.sxryk.cn/163nexthulx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163gzeomeea.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163wvpibrlv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163aqzhsfnl.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163gnwvygpj.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163pwgcacvf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163jktxesjp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163rlcxlfbr.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163amnnorlu.html

[G03] 实例属性
来源：http://www.sxryk.cn/163csjrwkie.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163hzugfzbj.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163oeputtoh.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163dokdfpgk.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163txmrlsom.html

Java: private String name;
来源：http://www.sxryk.cn/163pnamkzpe.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163qsgtjput.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ldiidenl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163epssphbx.html

[G04] 定义方法
来源：http://www.sxryk.cn/163bnduwchj.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163aehjmbpy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163gjnntnxj.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163mgdrzraa.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163mtwhgute.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163qyacqkrk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163cyggwris.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163achgbutu.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ldszpnpg.html

[G05] 继承
来源：http://www.sxryk.cn/163ydjycxbc.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163uufpdtlj.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163jdimoybz.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163uzfhdhdv.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ruvbajzt.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163fyndmjog.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163pwnsyqwr.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163vrnpylth.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163jvotofwv.html

[G06] 重写方法
来源：http://www.xuanzx.com/163mmqnwrhg.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163kvuzxcjz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163awxcskly.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hthnlnwy.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dcrqlcor.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163mxupykvv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163clbonzjn.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163tfkmqfwv.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163eccdpfjq.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163agnkaclq.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163kveipnam.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163dhzxhynh.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163cmdsnesk.html

TS:   super.greet();
来源：http://www.xuanzx.com/163axofikfn.html

Java: super.greet();
来源：http://www.xuanzx.com/163fqhwjiwp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163tpiwncrm.html

Ruby: super
来源：http://www.sxryk.cn/163saiumvjp.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163cuyauawb.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163oclbwnwk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163gscwaemx.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163quypbpnq.html

JS:   static f() {}
来源：http://www.xuanzx.com/163dniymnxh.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163zxwuclwe.html

Java: static void f() {}
来源：http://www.sxryk.cn/163fmloztxm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ethsdgvl.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163qyhkjcgx.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163boqdguaf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163tekewekl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163owfzrbbm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ufwlyfbn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163euffxucb.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163xyppzdbc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163iddbhxjq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ovhakiss.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163svhozyrv.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163sjplmwwn.html

[G10] 访问控制
来源：http://www.xuanzx.com/163spbstwxa.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163pkfcllnf.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163yzmnkwam.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163yhgoahlk.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163tymafnco.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163xbboofcb.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163przmeque.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163bfglidsu.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163rokklgwh.html

[G11] getter / setter
来源：http://www.xuanzx.com/163xjlfdakk.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163rmycbmxz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163wziqzusl.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163anyxytte.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163ykpxzarp.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163niumijra.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163euynweqm.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163mxdqjmbc.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163vzfrgjwk.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ubiuijxu.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163idkocphu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ocplfmkz.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163jzhzonij.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163jmkthiuk.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163khgiljti.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163fuvgrfde.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163uzqgukxb.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ocbieykl.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163iejzznvu.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163nfkggijg.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163bklsygxe.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163efppbedw.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ryywrnky.html

Java: u instanceof User
来源：http://www.xuanzx.com/163rtbxskpt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163npsfogvv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163wiefnlqo.html

C#:   u is User
来源：http://www.aibaodan.cn/163imiqobxa.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163njmqovhj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ysetxstu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163iiugdyyb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163zqfptvaf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163xrvbgjpz.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163terqyeyr.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163vsutzufe.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ovchdlrs.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163uxnrkqao.html

[G15] 枚举
来源：http://www.xuanzx.com/163rhdoyqsk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163nhfbhyvr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163eknfqukl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163oejezahl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hdlgjotl.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163rjeptnkh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163slxnxbkp.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163gtldrjqj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tigbyxdl.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163rlvkjbgj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163uodjdzpz.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163qjpvjhfh.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ntzalhvq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ynlnunxc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163xnkqvcku.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163vaieertp.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163emgjarnr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ahaqbkti.html

================================================================================
来源：http://www.aibaodan.cn/163xpwqtyzi.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163jvxoauek.html

================================================================================
来源：http://www.xuanzx.com/163jofkpmlj.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163dmyklloj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163jgwbsjzi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163pytnnqxt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ryrgafqa.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163bjzoqkzp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163vdssygob.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163xphkertq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163xgdqhxrd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163czxhgrzh.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163dfabgcjc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163znrrgeth.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mrbdlnls.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oqvisyss.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163whgdpvdn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tqweyxyj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163xqifvmaq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163lmwfnzhd.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163fecnwyef.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163dfvstoko.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163vhenctqa.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163izkciaej.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pqdgahkl.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ibmbpehk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163szpbgxno.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163wkgiecfg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163crlmvyvi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163anmuprhb.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163xdhuzumi.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ewunqyjq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163gkseysne.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163holujdwp.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163fxnaozav.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163wysjvywh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163sgnawsrg.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163sfduaoib.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ovpskori.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163trtxycok.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kufpwuww.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163lpdtkffv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163fcetyxfb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163pnjbqbdu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163scbkexpw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163gmyrurit.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163nzsinbea.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163uxsobjjc.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ttmxhjbt.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163hwvpmuwj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163bbuxnotn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jumlpqhm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163iadwmhxr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163yfyfoptw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163roggeqzm.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163kmulcjak.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ivvnomzb.html

[H07] 断言
来源：http://www.sxryk.cn/163aqlkknbg.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163nhtxtuaz.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163slypnniv.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163abdtusqm.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163tkchiqww.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163imklorsi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163gtbdxglj.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163kclybnsx.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163avmluuej.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163oacpsorg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163kybqjyql.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163povfxehw.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ppzcpgnw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163labgdvos.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163gihqchko.html

Go:   err.Error()
来源：http://www.xuanzx.com/163hyqtxrdi.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163utewnsri.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163kgzsiiiv.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163qkodibjq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163kctpuezz.html


<!-- 参考信息 -->