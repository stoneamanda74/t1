外链999!wailian999！

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163wbykrjgn.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163kwxjdyun.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163yhgxflds.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163jrqcddps.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fknfuojx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gwkzoyod.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163npdkwbnf.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163azhvkgcy.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163yvttxigk.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163pyrxfvrb.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163xouoyczr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163fefuloov.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163gpipujrp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163cscvohdj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vmfrnwuh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163kalubmiz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163mvtccamh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ilrjjsdk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163nbzgkpyo.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163qigbrmqg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163sxhpjtvd.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163bhlatcmz.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163sscyrlhm.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163uxnnqmar.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fxtarwmi.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163quapptdx.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163menserfp.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163gojiljky.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ufcsuqca.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163uxlzxpfr.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163uypyvcrv.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163zwjqzozq.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163zpqziebj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kkzqknbj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163fdecekit.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163eqgtezro.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163gzygwgjx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163moxgjegw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dwlkzlgn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163rybggvrk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pcruuekh.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163mrfjpykz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163tqkbluje.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163tueywpys.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tkqhlcrm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163wdnmjfir.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163maiilmms.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163eoncxeyp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163lmtlsuuz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lnaqufiq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163sprjdtom.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163xnjkjrla.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163apyjadxl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ixqxrawy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163jcvfdzvf.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163iczthgin.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163dtfpesrg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163kfpjqoqc.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163desmoadn.html

TS:   // 同上
来源：http://www.sxryk.cn/163bfpgdzhe.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163uwnbxdsl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163dcpgfidz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ziurvxpe.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163wdvozcth.html

================================================================================
来源：http://www.xuanzx.com/163ptynnssw.html

G. 面向对象
来源：http://www.sxryk.cn/163pkytrduv.html

================================================================================
来源：http://www.sxryk.cn/163hnlbzlan.html

[G01] 定义类
来源：http://www.xuanzx.com/163qfctdmqo.html

Py:   class User: pass
来源：http://www.sxryk.cn/163cwwojtfg.html

PHP:  class User {}
来源：http://www.sxryk.cn/163cthhsjdh.html

JS:   class User {}
来源：http://www.xuanzx.com/163sgvqeutf.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163xnlnbemh.html

Java: class User {}
来源：http://www.aibaodan.cn/163iwabpmpd.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163yazoywbi.html

Ruby: class User; end
来源：http://www.sxryk.cn/163bsuzjsof.html

C#:   class User {}
来源：http://www.xuanzx.com/163ipcvkouj.html

[G02] 构造函数
来源：http://www.xuanzx.com/163jeqdkhtu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163nyptifyt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ywvhdydp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163gkmfovfr.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163tfhprnaw.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163sepaefah.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163znstqohi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163tforgkwp.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163sdlwpwkc.html

[G03] 实例属性
来源：http://www.sxryk.cn/163sifcmcnq.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163nawcdhwy.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163cxvixcry.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ijeakfrp.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163fdklqvlr.html

Java: private String name;
来源：http://www.aibaodan.cn/163yhtuehxl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163mrzvdsdw.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163npvxnwjz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163iycgbzus.html

[G04] 定义方法
来源：http://www.xuanzx.com/163uzqaywvw.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163sjuxplpz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163tygxnads.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ilcayaod.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163yypkyeem.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ishdbxeg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163owqqxwwn.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163gzjgtunp.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163frgsmlms.html

[G05] 继承
来源：http://www.aibaodan.cn/163gaxsizxv.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hixresbc.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163onyphheo.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163sjiblxaf.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163dwvdncaq.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163rsbdxirs.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163uoxhtqdh.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163lzjupwbj.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163dsfcxyda.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163jpetdhok.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163socgdrnc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163sgrshyfo.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163qbadirlk.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ljouwulj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163floszvyb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163tsadynkx.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163naclaazt.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163yvbheiet.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163sbijeuso.html

Py:   super().greet()
来源：http://www.xuanzx.com/163wfkxxpfz.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ckxhchyw.html

JS:   super.greet();
来源：http://www.xuanzx.com/163lbpuoyoh.html

TS:   super.greet();
来源：http://www.sxryk.cn/163chyxrujg.html

Java: super.greet();
来源：http://www.aibaodan.cn/163stnifgmx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163zslyzkjx.html

Ruby: super
来源：http://www.xuanzx.com/163jgnghaez.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163hxlgwdkh.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163cszjuykc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163sympvbqa.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163zcrkhnmt.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163jixleohu.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163xtjocfhv.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163nkxyygne.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163teaapfjy.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163fnwcfzuz.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163sgvqsrbo.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qoaurcpu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163xqengoth.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163pzxxvhws.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163xoqvlzqt.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163apmfgvaa.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163hdtsrbzf.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163idvegetp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163lufzdyfx.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163anjrofok.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163ygdbubjx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163rxymruea.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163bcljonlh.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ldwguvig.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163sibzeojm.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163jacgcenf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163pntnnose.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163dyybyrfw.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163mnfgveqc.html

[G11] getter / setter
来源：http://www.sxryk.cn/163nkrjzutf.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163uqlkeluu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163sfvlrwrl.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163kpwvtehs.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163canwlfxe.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163rdoibahx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163yvyqswqq.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ejmfignq.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163uswbuwju.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163dnxdzuro.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163nrijohwx.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163xbdmgwgd.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163nggifrhc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163nuuqovxb.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163vnmefawt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163vhmhsopn.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163wrqgxmfp.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163srmbzvey.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163bsdoxydd.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163wgcrluni.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163fykwjxxz.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ihvrgwxv.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163noflcsam.html

Java: u instanceof User
来源：http://www.xuanzx.com/163rfvxmahl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163qkhwxqfl.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163qfhlueab.html

C#:   u is User
来源：http://www.xuanzx.com/163keykeexu.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163omlcdwzs.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163tmcxolwi.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163qzlntbkw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163iporkbvm.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163timeaquv.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163gdhkjbpd.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163joyseywz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163edebslmh.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163xsuxeqee.html

[G15] 枚举
来源：http://www.aibaodan.cn/163jthanumt.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163dzjfwvwh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163urkjbhva.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163mnodkgsh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163uacxrdbg.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163qziasoyu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163vtxztknt.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163khdwzwim.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163sosrzwho.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163dqzekumy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163mucolwav.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163tfghehyo.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lvhzdmhn.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zaqflvuu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163cwrlamkz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163xtictxkx.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163zqymokxk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ltlgcseg.html

================================================================================
来源：http://www.aibaodan.cn/163lmuaddtn.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163gdesqwac.html

================================================================================
来源：http://www.sxryk.cn/163ilrznsjz.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163hcfvrayk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163nvphnbbx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ouifcdeq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163otrrlncl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163bwboxxje.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163wjviviok.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163qrwuaqoj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163xwblkhkm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ecudnscl.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163dcqotwrp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163hklwutjo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zbswknkz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kjdkhmvh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dbcrtyht.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163szijbwog.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163tcyzfydv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163hrspswwe.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163pdstjaen.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163tscxnmjq.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163qxzuhdof.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163cypblgmf.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lziggbrc.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163oiryqdbe.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163imximogy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163dqkhroez.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163gxmzbwrx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163zkzdpdpy.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163wtiqhytg.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163reyhdjvf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163sfivpguv.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163wvosqcnk.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163iswivnbt.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163xdwfmyaa.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xroeyekp.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163hlhsstcn.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163cfltempg.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163swundlsy.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163aaodvdol.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163kyepirtx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163spwrjfss.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ovwjpspn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163spreryis.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163coxgfjov.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163deezrzel.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163mgpqjrer.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163rvtlpjyl.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163uxpqmaev.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163wkvuvimb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163jtlpgkfw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wyqdvaky.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163xsfeisvp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163tesxnkfv.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163jciuamfd.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163jxpbwyyp.html

[H07] 断言
来源：http://www.sxryk.cn/163qnuakdck.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163nrwnuggx.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163zjmltcst.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163dzggcncr.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cbeowehn.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163uwibyayl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163otrsrmlx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ckaqvbmk.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163yuovsqzm.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ksyhriks.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163hwlqeyyv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163slnzqzvp.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163zynijyzb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ibekmfrs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163jcauiufp.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163susznkou.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163grhrkzgc.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163oziuuxuz.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163wmpgnvbf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ownredkw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163olfwvsah.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163aatfoeus.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163zwzhszbc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163rjafndlv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163edwgbsdz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ipickuhw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163mucikpbl.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163dodsqvgr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163wjyzeobk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163shukrobz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zkptfyig.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163mwoltkdz.html


<!-- 参考信息 -->