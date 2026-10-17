外链999!wailian999！

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hdrhtjvc.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163krehnqtd.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163oncmdedw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163qtuuhtir.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163remlfxwd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163cebmzafy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163zzreqlsz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163asxpqwkw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163iooplkfr.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163azcdvndp.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163jchretju.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163eptpczuv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ekdvbkjs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163uhtfwgjx.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qmojzwnz.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rgahhudx.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163puejzlet.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163mmdewjjy.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163sakijfvn.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163xvhkmnzp.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163nwhscfrh.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163jdpcakbh.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163jspofbsx.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ktbkueai.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163rkpryyjs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163wleenfyv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ljpetppp.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xjgnnogq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163qmsmbgyg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163mkqqyplm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yuqfpmnp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163lfvwqvzs.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163btyfuqwa.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163qadciudm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163bphhqdom.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163epardyco.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zehrbjxw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163tlrlyprr.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163imsjcdxd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fopmejks.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163xsvimfbe.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rphxjols.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wixafpjg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163xyfofeac.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163qfxyabox.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hktxkllq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163zrsmqonv.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163fjphpkmk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163adheegyp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163rxwhtbmp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163cuyglqnd.html

TS:   // 同上
来源：http://www.xuanzx.com/163wtkishwq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163zdnkhiqv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163tfdafkbb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163xxffsbeh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163owyjzody.html

================================================================================
来源：http://www.xuanzx.com/163ydoywago.html

G. 面向对象
来源：http://www.sxryk.cn/163msvvlcwf.html

================================================================================
来源：http://www.aibaodan.cn/163eryzvcib.html

[G01] 定义类
来源：http://www.sxryk.cn/163vyqbhace.html

Py:   class User: pass
来源：http://www.xuanzx.com/163oicvruuo.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163nbycumnd.html

JS:   class User {}
来源：http://www.sxryk.cn/163mgpfzunm.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163uknqlpku.html

Java: class User {}
来源：http://www.sxryk.cn/163nunzhcyd.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163xwygieuc.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ancaigzk.html

C#:   class User {}
来源：http://www.aibaodan.cn/163gsagdhrd.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163dyrckhlk.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163azvprjbo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163trakevxn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163xtxzlgti.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163atwejomh.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ntlnfpzs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163jliyjptb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163awperrgo.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163xjycnjah.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163gpydcbbn.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163bkvygxtq.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ovnpymtp.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163dapcjkvw.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163qycnhyms.html

Java: private String name;
来源：http://www.aibaodan.cn/163yxvupwfk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163mwqsppsi.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163zvggofhy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163gmbbtesa.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pqxyiqiq.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163qpjgzoml.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163socwtbxs.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163jiaxkcep.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163tjovvlrl.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163hynrrabk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163xwfypylg.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163rnwytojf.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163glccjslp.html

[G05] 继承
来源：http://www.sxryk.cn/163yssufkas.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163fmvphcly.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163hetxujel.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163klmornmu.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163urimczis.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163yvvspftv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163jtopryiw.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163titfazct.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163hezpqmvm.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163izvxzjbs.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163katoerzb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gldsclul.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cnoegjqq.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jsgvdbwm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163qxqsrpcr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163geuxqqkh.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163siitjmnr.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163azxwaqqc.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163rvweunad.html

Py:   super().greet()
来源：http://www.xuanzx.com/163vwlkieqh.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163aowqgkbv.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ygfgepjn.html

TS:   super.greet();
来源：http://www.xuanzx.com/163tmzchkvl.html

Java: super.greet();
来源：http://www.sxryk.cn/163bhrvkmxe.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163qkreowpl.html

Ruby: super
来源：http://www.aibaodan.cn/163yuvjgyia.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hwgzhogr.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163dqkyqvmn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163npqgswgv.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ikeknzod.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163psngwaha.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ijhbjses.html

Java: static void f() {}
来源：http://www.xuanzx.com/163fvalcxln.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163bcwxmptr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163qekiavyj.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163prykxxie.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163nuqyalbb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163esxyylgj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163yckgujxf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163edbgyzqe.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163pggtxaed.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ijpaeirv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163yznesjty.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ptsebnoa.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163dcyqzdee.html

[G10] 访问控制
来源：http://www.sxryk.cn/163dlasgkck.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163xdlmhfja.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163tyryktmr.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163hzpdzldw.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163gxviyapg.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163wcfcdaxt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vpfvrvms.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163cmnfbqbf.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163orukxtzx.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163dkqatzsy.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163uifsiacm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ntqxlhyu.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163qcdwxoyv.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ktxaghjp.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163nuybqswk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163qdnagabh.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163oddtsnhj.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163qecuvgfs.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163dxamwwvm.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163oducukib.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163xxgpejyq.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163irkewvwn.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163buzzhhhh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163xvbnycvs.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163kwtdwoyw.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163xxsvxkvi.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163tdivwbgb.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163miqhjxwy.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163efdnxhep.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163erbpnijf.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163btgzeytk.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163cfxuyxjb.html

Java: u instanceof User
来源：http://www.xuanzx.com/163kfhxcmcu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163xtvapehr.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163rqubqmfx.html

C#:   u is User
来源：http://www.xuanzx.com/163vebnwgmq.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163mxvhlppb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163sbpbjpwp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163cgxedyvc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ycvzrwwa.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163yzkhqqmh.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163muvkgyad.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163cfxqvoel.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163oxxtybmc.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163mmyaxhkx.html

[G15] 枚举
来源：http://www.xuanzx.com/163uygoxosc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163fnoumlis.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163spmpjehe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163isfldxpq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163orrpelmn.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163nyvfhgfj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163irqhzpbv.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163rqmfunel.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163cdsogmgi.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ckwsyioc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163hlqtwwls.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163hipremea.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fltmphfl.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163llrtqncd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163qlvrymzt.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ggpnulgp.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163nxsvyjnc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163rpurzmzk.html

================================================================================
来源：http://www.aibaodan.cn/163otjhaopk.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163gnmqloli.html

================================================================================
来源：http://www.aibaodan.cn/163mrjxxtyv.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163navatscm.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163azcxkyvl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163xtuvjlhf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163xmwtlsph.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ygkzahok.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163znksxwdw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163gaiqqmrc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163cygoawqj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163wcaxmlpr.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wqvrloxw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163rfqiokrm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jczppsdd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hbdkgtma.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pjduoefn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wgxhjacz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163qvdsscmo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163pvywjruw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163yfdkeghz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163dclfdgja.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163nwapncam.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mzvxuogy.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mbcfrmvi.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hdshtcxf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rlaogdrn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163nxnkbgme.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163muqtjwkp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rpimrcms.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163rrasuuja.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163orhvpllk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163wzcwfbwk.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ygzhwzjr.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xhfabpff.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163zacpccdk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163riekwlld.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163leqmfifu.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163mtxrklsg.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163nwokgpmq.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kiwqithr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163gyrxfgoz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jzmzbqux.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ulhpnrgu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163tqdgzwyo.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163usilifew.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163iayrtmjq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163txcxguwq.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163axmxdzto.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163jlbalxmi.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163knvnrxqd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gzbufzre.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163bydxzieq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163umxgnvgn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rbbtvmsf.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163cjqlxdnr.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163mctnjygx.html

[H07] 断言
来源：http://www.sxryk.cn/163jrfiabwb.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163uspailta.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163vexjqhrk.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dsmqaoai.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163anadvozz.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163mkvvzfzi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163pubdtrqk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163zbuobwls.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ulbhfeyv.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ejidfzlu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163vdaccpac.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163tizfwfvh.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163uqnxfyjw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163pmulenth.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163dtapprpd.html

Go:   err.Error()
来源：http://www.xuanzx.com/163zadxqtzc.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163urfdcptc.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163enzdywql.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163vnadqhkp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163phicnrml.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163miyrbftd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163mdjwysyp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lteqtxtp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163pxjvvawg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163fjrysfar.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163tukrdgfs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ppxjjmup.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163pszieqia.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163zmlsgqnu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163jqtvayay.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ubdqxotl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bduigers.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163wxcxiniu.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163gxowveit.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163swqlgtpu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fprkirzl.html

================================================================================
来源：http://www.aibaodan.cn/163lmnokgef.html

I. 正则表达式
来源：http://www.aibaodan.cn/163hwqygect.html

================================================================================
来源：http://www.aibaodan.cn/163xjiaizhm.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163tfypsjio.html


<!-- 参考信息 -->