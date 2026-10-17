外链999!wailian999！

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yjuhpuwu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163yhxxtayz.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163syknddcf.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163unojybzb.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163dlejncck.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163qqywfcif.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163jwtedhwb.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163bqcosfgn.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qbgxpizb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lvgmetyw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163fhemylur.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163fgraligu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ocycraqn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163caekjlgd.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rcjycyhs.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163michsgfn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qvphmyhe.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163goebhytn.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163yfsazhvz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163vaenrojw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163aneszhqy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163sugxfowu.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163aytsrduc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rujgbpid.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163afjzgcvp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163acbcwmiu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tyxjtdrq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163oqiswvzd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mofknmxs.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mqphdvjf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163pzhnexxb.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163mnycuqbm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163nyvzxkus.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163yogzzism.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ekyueytd.html

TS:   // 同上
来源：http://www.xuanzx.com/163zawcueva.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163hdwsohkz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163febptovh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ornivius.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163pcyzshhs.html

================================================================================
来源：http://www.aibaodan.cn/163xgunmvaw.html

G. 面向对象
来源：http://www.sxryk.cn/163dkowectu.html

================================================================================
来源：http://www.aibaodan.cn/163riknjclz.html

[G01] 定义类
来源：http://www.sxryk.cn/163vpcplwbq.html

Py:   class User: pass
来源：http://www.sxryk.cn/163mnadqwto.html

PHP:  class User {}
来源：http://www.xuanzx.com/163llmqnxge.html

JS:   class User {}
来源：http://www.sxryk.cn/163mptcrcid.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163teeeuapr.html

Java: class User {}
来源：http://www.aibaodan.cn/163nljqovyu.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163tomhhguj.html

Ruby: class User; end
来源：http://www.xuanzx.com/163yeqngzyz.html

C#:   class User {}
来源：http://www.xuanzx.com/163qtvydycq.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163bhdtdkft.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ajxeczjy.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163oljqfhvf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163tugwokcl.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163xxabkqwh.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163nexihohe.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ibswpkqk.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163bhzpbzpx.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163gporfitt.html

[G03] 实例属性
来源：http://www.sxryk.cn/163yjecxexb.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ydaxsfxk.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163kmeyomei.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163sibdjlmo.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163dflshhlr.html

Java: private String name;
来源：http://www.xuanzx.com/163egoelkhm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163saffhrlr.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163hwggljcp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163hsurdexs.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163yetzmcwd.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wvucqlyr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163qjqpavaf.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163iaaizbij.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163ekoaowcq.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163myjoydig.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163mfocgmog.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ehegmlay.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163xsmvgcig.html

[G05] 继承
来源：http://www.aibaodan.cn/163bevbkrim.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163zqdstiau.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163iunxswgi.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zwdmstsa.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xiqfrejw.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163wnkyafcp.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163kxpcnxiy.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163ceqixquv.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163vpvjlvfb.html

[G06] 重写方法
来源：http://www.sxryk.cn/163vobsbbdx.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163twpcyosu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xvifyjji.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rxbzbnyx.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163baxhlmcb.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163agzvdsjb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163admvjipa.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163vkhedsta.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163lcpfludm.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ucaantrb.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163iabtfykw.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163menhdfic.html

JS:   super.greet();
来源：http://www.sxryk.cn/163fmebhwfy.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ffaaaiye.html

Java: super.greet();
来源：http://www.aibaodan.cn/163poqgfojd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163xkuhsgps.html

Ruby: super
来源：http://www.aibaodan.cn/163hfusbzas.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163trcvkyyr.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163qwpdepyt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163tzfinrga.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163minzhwck.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163obnxuufk.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nbmpcxgd.html

Java: static void f() {}
来源：http://www.xuanzx.com/163iqdhxdos.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163dcrjbzai.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163sbdnurci.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rtjtdwqc.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163lnbvtigi.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163berigrtb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163gzzqogxt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ihasbdrc.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163redrvnvx.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163gswucdqc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163donpngvk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163cmcnxqkt.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163exwqdkiw.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163tdbiqcur.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163gmxzwzqi.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163nnagjyol.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163bhagsxyk.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163bddudtam.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163addebqfc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163yoqjprxu.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163vvgfjbrr.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163mlyxjdpx.html

[G11] getter / setter
来源：http://www.sxryk.cn/163uxujrwfm.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zekzzdfg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163xuolgnyd.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163gczxjgyq.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163twwxbgis.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163tnlrypvy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163acrmnwst.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163pqgxgfzc.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163mkgpkdfr.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ebdpekmm.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163cnfzbeho.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ztzacuka.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163gycwgcqn.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163xagkwbwh.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163bphojtzf.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163jigpaunb.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ftnkbfsx.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163mqeaihjo.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163omcsvlde.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ntkarcbv.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163khfmqeqe.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163qwtjhlcz.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163uorlvnhh.html

Java: u instanceof User
来源：http://www.xuanzx.com/163vstiiuwy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163wujgelhs.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ozxaxram.html

C#:   u is User
来源：http://www.aibaodan.cn/163vgkeptuc.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ykpzhtwd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163wmauglws.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163mfoxksuz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163liihwyzg.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163iigjkwnx.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163khuglkov.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163yulpfalo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163uykzyggu.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163xjyswdpu.html

[G15] 枚举
来源：http://www.sxryk.cn/163shsigpwg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163haothfoh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163sxiyrefy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163fwdtksww.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163dpdngdab.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163hpkqcwuq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ruuegdqr.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163loxstvuy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163btxapzll.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163uzwxrbgp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163tfrwrsfu.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163gmepgwhb.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163npavvgxv.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163himgogzf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163viimaypz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163lojjkwro.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163zenphibe.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ivqbxiyz.html

================================================================================
来源：http://www.sxryk.cn/163litwvrcx.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163erxhcpdz.html

================================================================================
来源：http://www.sxryk.cn/163hmaprxzh.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163yhhhpfzw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163tcklcwiq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163hhhkuevn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ojrhwytv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163zmqlgxjm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163gwwwoabt.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163xrgdpymq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163acnvbfdi.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163qcmltaqf.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163zlkllogj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163jehhjzow.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uqwnvwlz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ibojcdsj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163breyhzso.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rirbqezv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163meievdwh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ygbaphoz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163erjgswtk.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163sndrudpn.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163erwofhay.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163axexdsti.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dcjpqmeo.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163axdvqgka.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163etmcerjh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163tdoqlfhd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163dhoaxgpg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163evwkvhcm.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163dzhgsrlz.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163kzlvalmh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ldgdwfoq.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163fepmsxnu.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tlivhxjo.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163svtcztic.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163feqmhyro.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163hlobfrlu.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163pzxvriff.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163cfxjorzd.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163xjcuycbp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163kaaspnns.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163eqeouyof.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dasponyn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163gugqrlwe.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ktacteum.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163lugrdxbo.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163cquiiatn.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ikwcfmhb.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163xujzjilv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163onkdbxlh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163xraainmo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mzkpjtso.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163jtrwhbud.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163rsgirkcv.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163guaworey.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163bkhljcef.html

[H07] 断言
来源：http://www.xuanzx.com/163pxchvxry.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163nthypzxo.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163vkvywpln.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163lriciwen.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163cmcygjyl.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ldscozuh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163bnrtuowl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163bkmddliq.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163dlbxvxir.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ofsucwzf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163gplbvbgj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163cpimwlvr.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163mhqpvtzp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163uapppehs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163gjyprgwt.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163rizqtbdx.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163cwjgcwgd.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qbqlnwbm.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163uhzddmmq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163gmsqagfd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ekzmgdcf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163iwqicapo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163otbqcahi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ermypexr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ioxbefcu.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163xeuhuivh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163uxtrnlkb.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163nhdpjzsj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163owkmzamc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163osxzyshc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163mjrpmzbf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vqlcjazt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ngxtbjxi.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163dtzfkqng.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163oimpnqmt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163noynbwzw.html

================================================================================
来源：http://www.sxryk.cn/163kxwullml.html

I. 正则表达式
来源：http://www.xuanzx.com/163edwifmvb.html

================================================================================
来源：http://www.xuanzx.com/163mgplalrw.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163xmayubdc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163smwjtqms.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163epbfqrih.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163lnkynfco.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yzxxbbft.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ompyeclt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163hnmatyzb.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163wedxmtvg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163erwqbtwy.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163dbuvwbkp.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163huzkskoi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163scsaqmgt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163cbuurrgu.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163rvkxmmmh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163fjbjwarh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163aoxaygvs.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163qfmovmto.html


<!-- 参考信息 -->