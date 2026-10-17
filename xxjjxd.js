外链999!wailian999！

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163njvkuzfd.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163qjfzchfv.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ehgnbdke.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163gmzohgeq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163llvwytec.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163npmnuood.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cgtoqqar.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163fydbcmng.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163fxcaskuj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163oaqnltmu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163jmqwhbaq.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ldjtgirq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ucredbfw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163dxxjcoyh.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qnkpvigg.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163iobwmsfn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163welbswuc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163vptmmlce.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163exihpspu.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163oaggwdto.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163xdggxwch.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163wqtfafjm.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163uvskdemc.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163blgayfrq.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163uelftfxe.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nnlbrids.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163nznstuzw.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163uopgrwim.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163iylarquh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163wkjlvuau.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qzojraqv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163vimirsks.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163llxvxwze.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163tjrqwnlx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ktcrlajj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163zcnyvmpm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163tlwwpoiu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vqkqdpll.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163ftbbrlxl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tbnjiara.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163uqktjuen.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vbxqomoq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bopoaxow.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163decfjrxr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qnfzhcqb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hxbdajhz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163zoxyeigx.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163objodlal.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163oabswbnt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163fuomxjdh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163hbsutpxx.html

TS:   // 同上
来源：http://www.sxryk.cn/163mujnknpi.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163wordmyvw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163atonxanr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163qunqnotb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163dmxllpxc.html

================================================================================
来源：http://www.aibaodan.cn/163kmcxaobo.html

G. 面向对象
来源：http://www.aibaodan.cn/163fmnxcfea.html

================================================================================
来源：http://www.xuanzx.com/163pgqjfsmn.html

[G01] 定义类
来源：http://www.xuanzx.com/163kueewwoi.html

Py:   class User: pass
来源：http://www.xuanzx.com/163qqisehwm.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163zqwcfkaz.html

JS:   class User {}
来源：http://www.aibaodan.cn/163aabthqqw.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163yhxqrlro.html

Java: class User {}
来源：http://www.sxryk.cn/163mxhzgqcq.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163roizdary.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ejsnogdl.html

C#:   class User {}
来源：http://www.sxryk.cn/163adlgdzyr.html

[G02] 构造函数
来源：http://www.sxryk.cn/163pmkknojj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163lzcnushu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163vuskojuq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163cihsgjnp.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163jhdvvdup.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163mjiorkzy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163gkumygtj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163yxovzcpa.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163mtmfquio.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163fxismrng.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163yulnwcpw.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163hmnntrhx.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163zjccspgr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ubnnphei.html

Java: private String name;
来源：http://www.xuanzx.com/163nxrsiafz.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163jjqcrqwl.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163zhrzrjuo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163khzrepdo.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ngqssdde.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163intiktob.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rodnbwjl.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163odvzyucb.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163jvkxemgy.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163cefmciwn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163gqfqlocl.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163hqpfrunc.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163ubalktco.html

[G05] 继承
来源：http://www.sxryk.cn/163jxyxxnun.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163mluwlvkr.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163golzsawi.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zoflmjxc.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qrvpxbmq.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163fuscvdxm.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163rmzbarcy.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163tuhjkvfy.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163zpcyuthv.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163zwgtyljt.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163rhfafplw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163juuhqzze.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163yanctotd.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163pcbafxjw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163biwrsmxj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163qrxxhdlc.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163hnopsail.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163xkudajky.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163tccpwspr.html

Py:   super().greet()
来源：http://www.sxryk.cn/163yupozkaa.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163nanhddkc.html

JS:   super.greet();
来源：http://www.sxryk.cn/163bbulviim.html

TS:   super.greet();
来源：http://www.sxryk.cn/163nnvupgro.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ngdukucv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163fufpgyjr.html

Ruby: super
来源：http://www.xuanzx.com/163zyvwntxi.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163cbrxsngw.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163tetflicv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163lerkhaar.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163dubnfvpa.html

JS:   static f() {}
来源：http://www.sxryk.cn/163goooqmbs.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163gdwedkyf.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ddqqzklt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163nzkttgcz.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163oofxmlub.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163vkohokbf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163exsnzscp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163gwtyfmrj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163uiesoijg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163aatccszd.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163esfpvcmz.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163fsxacnau.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163pasxlzyf.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163mrysjghn.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ehfjizfr.html

[G10] 访问控制
来源：http://www.xuanzx.com/163greieoxr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jmxroucx.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163awulimsw.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163qkhzopcq.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163vkquwpho.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163nohaevnn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163uplszave.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jygxfogb.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163wunlkmfq.html

[G11] getter / setter
来源：http://www.xuanzx.com/163zrxotcmi.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163frquekvb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qwdfuwnj.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163mifsowxm.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163mvrgxlbv.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163czjhgoar.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163cqesbjov.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163vuyjzldw.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163lglgrwll.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163dlykybue.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163dgiqhkbk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bolfqxqw.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163lrlwthur.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163iybglcml.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163dfnfvgxf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163aolflivl.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163zjishbqz.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163cqlzxjpg.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163aiykiiqr.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163okdifigy.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163xnrnzwbl.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163wjackdfx.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ppzxhacn.html

Java: u instanceof User
来源：http://www.xuanzx.com/163rjhucgfn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163zkwndgwl.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163itutedtq.html

C#:   u is User
来源：http://www.aibaodan.cn/163aotmlgco.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163tiarzxts.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ppqmkvhv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163sabdompt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163bssjgcqw.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163qiydirdw.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ltpbyabv.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163vybxqojt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163kfpaxetv.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163mvyrhefq.html

[G15] 枚举
来源：http://www.aibaodan.cn/163bxbykdsp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163wqobhhhq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163vbfgxqnt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163xxpwhqts.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163izzzfsij.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163gtqszsnk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163bjswxdfe.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ccgzzokd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163oqihpsjn.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163bzvxydcv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qmpdgmiv.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ahdbjigl.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163idraxfax.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163egvbbmof.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163uxrmdgpg.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163cggaqgaw.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163gbblhlty.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163vqhpydku.html

================================================================================
来源：http://www.sxryk.cn/163tmpdppat.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163cikpyweg.html

================================================================================
来源：http://www.aibaodan.cn/163dbmjador.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163frxtviqu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163sjxtadfl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ogfccfek.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163pmhazwau.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163okjmfvtm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163arsmlpej.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163zmpgwffc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ejunjvoa.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163pgunxktr.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163nukiwqnv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163htdaxvlw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bzvbunsl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kvftcrzw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163iyjgimnz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zzbmzwxz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ybggnpwy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163kbmlvkid.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163fqtilnct.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163eqwytedl.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163leltmvyw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vcptiths.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cdqkhioe.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wycxduqx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hqjnffic.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ueiiyzqn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163obcqfuzd.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163kliznsfh.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163simlyfra.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163udxlwots.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163rifjcnhg.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163yrkflrqh.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jmzvjuft.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163rnqfdhsd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163cfogzwyj.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163beobxunt.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163emdsaitm.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163wvvaljqd.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163hovvbpem.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163odcjjhzm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163yvnkujdd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163shxksdra.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163qlobkvvu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163zdzizqqe.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163lyetdocn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163rxnzrmkb.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163rkcgrlfe.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163skarsgaq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163scbudowq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163odetlmpz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ocuwipaz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163pokhuewg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163hfnyvjxz.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163onihzaea.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163rdeuhmgl.html

[H07] 断言
来源：http://www.sxryk.cn/163zcuprbqn.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163oqlfsuiz.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163pbqsmijd.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163pjvmmjgy.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ikwqeuke.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163bnltuezd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163omhfafyx.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163elywuywo.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163jsiuxrxr.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163tefhqdcy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163nsgtykyn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163sbwxmbzp.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vqnyisqt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ugiebqrj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ywsppsqi.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163huhaechf.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163wthmpzom.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163etvrzdkv.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163mqmxufiq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163vlzkaanw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hgxjbhnx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163dcdleqrb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163atfdkoiw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163fbgtpupw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163loyzmkqa.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163pdmlafpu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163eiuwguqc.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163fvwnnupv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ldqrnkdl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163oxihzzwq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qqlufkua.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163honnbcmt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163fdippupj.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163djxzszux.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163neurcpel.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163cfdysnbv.html

================================================================================
来源：http://www.xuanzx.com/163bijxgpaj.html

I. 正则表达式
来源：http://www.xuanzx.com/163rknpbzaf.html

================================================================================
来源：http://www.aibaodan.cn/163uhcnkfhq.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163wwprdhzo.html


<!-- 参考信息 -->