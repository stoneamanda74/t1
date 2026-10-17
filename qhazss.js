外链999!wailian999！

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163amugnucx.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163tblvsjcf.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ifceusfr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ijmrngej.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163wnjlkhjm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163gtfcuvuw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vjkzqzmz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163qjwurkcl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163hjffcgao.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163fmxrglus.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ozjycwnp.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163rzsteckg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ltxykbeg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163pidavybk.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hgnvcvqm.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163vqfbvoep.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163aedvemkv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163yqdfwefg.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163iqqchpxj.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163getuyysc.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163olnwqeaq.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163mqjlpshj.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163pultppoe.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jexbgjic.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xjhasvke.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bojamkbq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163gchcftip.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163gormvvgo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163hodzpzbf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163fkjhepnd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tcpjoelj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ldjhuqlm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jjczknyk.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163kmibjtrn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163rsdsawdb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163peqeoprv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163iwsakciy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ukewfipb.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163bydqchtt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163keposqvy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163pjwvievw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wovrfjzu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xkecxseo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ocnlrixo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163uqncorww.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fajccpgj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163foszwras.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163nbaayjvw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163qhwhjsue.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163jugsqhpg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163kvicovhn.html

TS:   // 同上
来源：http://www.aibaodan.cn/163zvxpyvom.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ujjmcrlb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ijkgyeaw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163fwvjvwqh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163urgxwvrx.html

================================================================================
来源：http://www.xuanzx.com/163fkajluzm.html

G. 面向对象
来源：http://www.xuanzx.com/163ztizagce.html

================================================================================
来源：http://www.xuanzx.com/163ygtaciar.html

[G01] 定义类
来源：http://www.xuanzx.com/163zcnwgyig.html

Py:   class User: pass
来源：http://www.xuanzx.com/163tazuifmx.html

PHP:  class User {}
来源：http://www.sxryk.cn/163gmesvhkn.html

JS:   class User {}
来源：http://www.aibaodan.cn/163xsekbdxo.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ixhcqebo.html

Java: class User {}
来源：http://www.sxryk.cn/163vjmxakoi.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ndkypokg.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163uqoqeqhq.html

C#:   class User {}
来源：http://www.sxryk.cn/163wflqrndp.html

[G02] 构造函数
来源：http://www.xuanzx.com/163rmapsmiw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163vxfflurt.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163abdbkpnc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163gwggxxqw.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163tatxgsxw.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163dldlucxs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163oduxiflh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163dofdwvgr.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163mdlyvhkf.html

[G03] 实例属性
来源：http://www.xuanzx.com/163kvjtzqbu.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163swyjffck.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ryjapieq.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163akhlykhg.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163juzstbgu.html

Java: private String name;
来源：http://www.sxryk.cn/163rghapyac.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163btowyiuf.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163anprpprr.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163xvtkukuz.html

[G04] 定义方法
来源：http://www.sxryk.cn/163vojweslk.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163pkmyarre.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163gvwjiugn.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ctvyrzkb.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163iiqcdopm.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163iqwwpeqc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163tswceizp.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163mxootgkt.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163jmrbtiqe.html

[G05] 继承
来源：http://www.aibaodan.cn/163zxtixjhl.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163xrkmehzx.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163tifyuzom.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163eanwdmut.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xmmqzqwp.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163zehmjmli.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163zjudyxsn.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163zeffholq.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163xemazwza.html

[G06] 重写方法
来源：http://www.sxryk.cn/163pjwdxkox.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163tjxtszlv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163wpijptuf.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vrtcqknz.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nawonbmj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163jaraedvn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163gcbrwthx.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163apgoixuc.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163hrarhkqz.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163yixcrqiv.html

Py:   super().greet()
来源：http://www.xuanzx.com/163swulmmee.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163cxuloakc.html

JS:   super.greet();
来源：http://www.xuanzx.com/163klgdmcce.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163cpdvvwwr.html

Java: super.greet();
来源：http://www.xuanzx.com/163wrrreajc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163kcwotabc.html

Ruby: super
来源：http://www.xuanzx.com/163iwqkiyts.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163zpyavgcw.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ytdgyyvo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163lmdkjuhk.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163hfdxtutg.html

JS:   static f() {}
来源：http://www.xuanzx.com/163pxfrkeof.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163yxnabmbm.html

Java: static void f() {}
来源：http://www.sxryk.cn/163euukxuwt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163qxvrahug.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163nnzlfshb.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163exyeaxgo.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163zqsokwiv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163yhtvfcmv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163huwxftfv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163sdqmhtcm.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163kileymoh.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163aacbdgzg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163kzkiivyf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163jfrytujv.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163rfypihsn.html

[G10] 访问控制
来源：http://www.sxryk.cn/163boewmhsh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163enlmsjxj.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163dqeglqfq.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163iflzlggy.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163pjvwtyzu.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163vddfudxu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163fomrnwdd.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163vmdcagtw.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ayxsugab.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163hertotqi.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163bcmczxbx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ooszqtdi.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163puklfgen.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ddmeuhon.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163mxrnlozg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163cftdwnfo.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163jpmxunep.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163dfkmafpp.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163trqlsnzs.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163prepcaut.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163katnhbeb.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163aqsrcwkh.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163anvyxsdx.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163liemalug.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163jbajwyfx.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163kyejlgzk.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163wqfmnndf.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163osrosozl.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163wdwclodo.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163vifizysp.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163hhhduwmj.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163kmdiprng.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163syiwbrwx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163turccgkk.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163jmfsuqxx.html

C#:   u is User
来源：http://www.aibaodan.cn/163nbxkomtc.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163uvjynfsv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163wrgqeadi.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163saxmajtc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163sgjilmqq.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163qzeacovb.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163zyubjsyl.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163nyihwhbe.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163eptdkqip.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163vhkfqepv.html

[G15] 枚举
来源：http://www.sxryk.cn/163caeymqvp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163vaesvvhe.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ypihbcmh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163uejhxjuo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mkncghor.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163oyvjgchu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163fovsmosy.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163qkunysxl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qqlejnna.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ohnvvaoj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163nvmxhmlo.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163rznvxlna.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163fhdbonou.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163svpltqcj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163asjwmcjm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163diresiui.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163abaftfav.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163kfbgmjdq.html

================================================================================
来源：http://www.aibaodan.cn/163fqsisbdw.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163jgsmgxkq.html

================================================================================
来源：http://www.aibaodan.cn/163jmsachha.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163sbdcqmgg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163innpdwpj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163iscmszob.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qtyizxqr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fimkriwb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163kfbjqkan.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163awduuuxf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163gikxhfep.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163fjzhybrp.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ejiwprnr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163hesiccpo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jiuviqix.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zkmeazvt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163enmiwdvc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lnchqhso.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163yawswenc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163sszvcfab.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163wzqkdxkb.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163gmfcugqx.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163xykvzyyv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163cyeokkyu.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163idcqlfgl.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163aynircmy.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163oqjbzznb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ctgssour.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163hhpoxthy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ypmyegoy.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163panuiknh.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163wmttedvo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163egkshtrp.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163lutkstmx.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mdrrnyzv.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163yxcicwcr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163olbyaozl.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163sifuqdne.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ovynbega.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163uqjwoohc.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163uenalnma.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163bhprvhjg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fztzqhdz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jrsiwloj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163wezvqwyu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163psqovdgq.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163eunowhim.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163cqstkfmf.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163dhezvekq.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163xkraptpn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163wtswlonp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163pbkedppa.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163bnfbbfdd.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163qzzsqwjo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163epalkwol.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163cbginpvf.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163njfnsjbf.html

[H07] 断言
来源：http://www.xuanzx.com/163mgpwuwvq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163qbqbkgva.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163xxgafmkx.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qorteitw.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lyhjypup.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163guysrpcs.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163svlfbjlx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163dgjeyrps.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163dvgomhxp.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163jfdiyjgb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163rbgffigy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163xyzpcmry.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163qulggoce.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163zaaghhfu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163kyfbywat.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ygqmsdii.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163hatucmtg.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163vfotgofk.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163gttmnkwu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163uqcknfsj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163pupzykjv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163nqqhnfqz.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163dwxoicbn.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163qgcywype.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163yyzozvmk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163wqwcdzza.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163qdvewpto.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163tcooiwqr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163prcraaeh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163jstwqwez.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163kcskwrim.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163mnlyniue.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163bicgucjc.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163nkqcbkkh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163jvimrgtw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163eehoytdt.html

================================================================================
来源：http://www.aibaodan.cn/163hgejtapj.html

I. 正则表达式
来源：http://www.xuanzx.com/163uvhzmnox.html

================================================================================
来源：http://www.aibaodan.cn/163blzqcwlc.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163kdqhzhtd.html


<!-- 参考信息 -->