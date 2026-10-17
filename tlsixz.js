外链999!wailian999！

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163vtatsjoy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163gvksmzrk.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gpxifwqg.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163lgdqnqte.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jynoxevp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163zxnudjww.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163mzbebeos.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163mxkzzlkg.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ezucqrxq.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163bwdqntpu.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163befphuaw.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163pycgwdex.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mfuzrcho.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bxlcyrhx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163gtnrqsub.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163hvykafgc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ytbqhmpo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163vjdestpw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nckaykgz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163bxgnodlc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163anmblqqi.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163hgtnxuct.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163pjjdfogk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ygmtutyk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vteiwysy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163pvlptybm.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163rbccyzhy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gxggqxfq.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163aixsldsc.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gbaadlrm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cnakpqhk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163vhkjfsbm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163apppajlq.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163stpkeptv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163odrvkabt.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163mpvxzzrp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163kafgdmbi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163hiknwggl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163cruavwxx.html

TS:   // 同上
来源：http://www.xuanzx.com/163yrklovnq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163nxzpewor.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163dtryenjl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163sdqaaqyk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163dizhsagt.html

================================================================================
来源：http://www.xuanzx.com/163lzkstdjn.html

G. 面向对象
来源：http://www.sxryk.cn/163hnsnawtr.html

================================================================================
来源：http://www.xuanzx.com/163ochchwvv.html

[G01] 定义类
来源：http://www.sxryk.cn/163xtcqagcr.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163jjqysqzk.html

PHP:  class User {}
来源：http://www.sxryk.cn/163lskqypfw.html

JS:   class User {}
来源：http://www.aibaodan.cn/163zlgzkghj.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163qmpsuvnw.html

Java: class User {}
来源：http://www.xuanzx.com/163sqcvkune.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163axqkrybf.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163kkphovca.html

C#:   class User {}
来源：http://www.xuanzx.com/163zsltfdud.html

[G02] 构造函数
来源：http://www.sxryk.cn/163bjrzsvsy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163vuuvprbh.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163xgvbcsus.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163dkwymyqp.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163jpbqrrem.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ctxwovpf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163hyljusir.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163tvadfafp.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163nbuohafb.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ieyjmyah.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163gjyczxyd.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163sgzemadc.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ddozartu.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163jjnmjqdc.html

Java: private String name;
来源：http://www.aibaodan.cn/163qntonypj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ukbhcksj.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163orpuxljm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163olhxpfgx.html

[G04] 定义方法
来源：http://www.xuanzx.com/163gguhatvp.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163gzofeccp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163dpzmkiqd.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vikscnxu.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163nmecutvt.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163erwnpggz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163riqncfvp.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ejugknnm.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163pmamlkge.html

[G05] 继承
来源：http://www.aibaodan.cn/163qjejmffb.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163hcecvhfk.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163uqcpjqxo.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rlbfdcan.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hebhpunu.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163kmhitvvv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163zikscmps.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163czwsuqtq.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163spxxslhd.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163zrlqbcll.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163hpgxlbwf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ehuuninl.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ntimesbw.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gnqnkhnl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163utlsbulm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ednmghnc.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163xixtyauw.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163aprmquzb.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163mkqdthay.html

Py:   super().greet()
来源：http://www.xuanzx.com/163thkhbfyz.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163kprmpfpi.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163hkvorsms.html

TS:   super.greet();
来源：http://www.sxryk.cn/163dckyovhn.html

Java: super.greet();
来源：http://www.sxryk.cn/163vjgzcyrb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163wqwuieqf.html

Ruby: super
来源：http://www.aibaodan.cn/163snzfthup.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163xisvmsve.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163tkdddljh.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ffcjebcn.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163mtvgmeco.html

JS:   static f() {}
来源：http://www.xuanzx.com/163crnerkbu.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ugkdlpuk.html

Java: static void f() {}
来源：http://www.xuanzx.com/163gxggiuut.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163vhmmtlmy.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163pxdwwyxt.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163zfvykqcf.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163cfjsawyr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163hlwlelte.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163danbjtfv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rslkcsmp.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163hudmdcvm.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163lmtdszym.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163zgejngvb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163tqxgqpku.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ltrcverp.html

[G10] 访问控制
来源：http://www.sxryk.cn/163fysvkkso.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163vbfnmscw.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163buckruqu.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163ushcnpcf.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163qmvejzea.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163jvsoljnz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163zhvrckxl.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163usuidflo.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163nduudpva.html

[G11] getter / setter
来源：http://www.sxryk.cn/163hoswtjuv.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163ugmnxiqd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163syynhoyp.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163iaavsmkp.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163rkbcjkpg.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163puagwvap.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163imucqhio.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163cvjzvczf.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163hklghdkv.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163dynhpdrd.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163yxqgbpaf.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163pbejmdsx.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163xzzafywi.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163uegsjmgy.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163iftayvds.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163uroxjjwh.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ufkmucyl.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163duoaycbu.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163iusokdmr.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163darsqrid.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163bfdmrebc.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163mljgyysj.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ctordcps.html

Java: u instanceof User
来源：http://www.xuanzx.com/163tgkzwdjy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163klbjzdyk.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163smjqskcj.html

C#:   u is User
来源：http://www.sxryk.cn/163auyyvrah.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163asaaunky.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163vsweoesd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163nhljspku.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163epntucll.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163hdmeirey.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163cbocqsgr.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163zumzgeuv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163xumclrxv.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163xhyzdxei.html

[G15] 枚举
来源：http://www.xuanzx.com/163riargtot.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163lxbooxhr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163lbkgctqk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163remmucvu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ajexccpu.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163etqxazuc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163rhkxvkky.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ffizejfd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hlanarli.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163hguykcor.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163cxqbhvva.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163sojttjid.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rsmpnvpe.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163qtbkrdhr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163vvjghmyr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163crztwehs.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163kafdzydp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163oxtlkrzv.html

================================================================================
来源：http://www.xuanzx.com/163qdprvdda.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ysunlukm.html

================================================================================
来源：http://www.aibaodan.cn/163zdtjoxnn.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163kczjwuza.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163hhyvlgqm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163taxpfevw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jtfzntpr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163wvfjmpxu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163jvxhkkie.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163twihdcbx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ycphreeb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163avfenkoj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163dbwoutzm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163uqnxvuxd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dbndfliu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163clynxcnv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xlazsgih.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vksjphkm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ezagavll.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163zrfsxrph.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163enmzattd.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163kgxvssmn.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163slevxrvz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163usflrowd.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jhitrcmq.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163bcoslymu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163tahdiutf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163uheiinod.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163agsjwfbi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163rbeldika.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163vvhqoghf.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163cgorwedr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163yrgqhyei.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hlbjnmwm.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rtbbbtmw.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163vjbjcxsd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163dvfhfctd.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ouhyhkgk.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163agdyfjhn.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163fseyutht.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163znwyhbzi.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163dfwykhsq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163togoamex.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ekmzmiut.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163pciyafnl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163qnwxgdpu.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163klkzrueg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163qhqgfqwp.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163dyhrkcwm.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163mdwtlbrr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163rzneweec.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gukrhmqk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ktvsmkbt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163woguwqzd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163wfhafvts.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ollvgemy.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163fcgmzftb.html

[H07] 断言
来源：http://www.sxryk.cn/163ggjlpbwr.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ishfwvpz.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ixczidxb.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163mwxtukiv.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ypttfxtj.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163nkhufkvr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163onqazeqg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163beahpybl.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163nfqbmozw.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163iurbscff.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163pkcecltp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163vagjxcwy.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163qrhvoznx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163hsnpunuw.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163vqhfswpd.html

Go:   err.Error()
来源：http://www.sxryk.cn/163lotlbbbu.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163owpqbjyu.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163lqybsfzz.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ymwvymlz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163xgpuxgvb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163vfgunjpw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xhysgdae.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163dslhjzfz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163qbdqexkh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163urnoqqov.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163drdfldwd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163hqrgwodr.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163vnaurusq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163cjkrcigb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163anguiobq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163uawrwfxz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163rubfwema.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163acuiatmq.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163xmwzrjem.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163vtdgnlwb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163lgmtadbh.html

================================================================================
来源：http://www.aibaodan.cn/163flicwrqs.html

I. 正则表达式
来源：http://www.xuanzx.com/163weuivoor.html

================================================================================
来源：http://www.xuanzx.com/163xmnaclng.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163mptfyavg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163cmcnklxi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163xfxncgjz.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ozwjagin.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ezpokymg.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163oldbfxrs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163hbxbakej.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163msfdaubq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163dlqrndhq.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ryjtlamg.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163qjzwcwdx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vaumifsa.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ofbugiex.html


<!-- 参考信息 -->