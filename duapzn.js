外链999!wailian999！

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163mlfvgmvf.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pwycmzyz.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163snmmjqtr.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163gskpeszd.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163koyccaic.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fykiatky.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163dxgovzws.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163iuiaxjex.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163hfevwvbd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163svlfkzou.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bfxgdzid.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163mwzclopp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dztfeyav.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163lfxtxcjb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163zvcfwyie.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163uufsorpv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163sfoooyhd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163nujnuvex.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163vjwjacnu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bsprgbly.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163bpawzfar.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yhkvhqvu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163adftwxje.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163seibvxhc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163syqprzpr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xktgokuc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163cpeprmqc.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163xflwmxox.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163vjstlprj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163hsvdserk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163rkaevtbt.html

TS:   // 同上
来源：http://www.aibaodan.cn/163wsudwihb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163cjkhzchp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ftkyzlkl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163ynvahcum.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163fnjgynbh.html

================================================================================
来源：http://www.xuanzx.com/163anndovgu.html

G. 面向对象
来源：http://www.sxryk.cn/163hqhzehrr.html

================================================================================
来源：http://www.sxryk.cn/163zehvnzcl.html

[G01] 定义类
来源：http://www.sxryk.cn/163nbzptarc.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163hszfgnro.html

PHP:  class User {}
来源：http://www.xuanzx.com/163jwpogvxx.html

JS:   class User {}
来源：http://www.sxryk.cn/163axrbmjep.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163sqthvhud.html

Java: class User {}
来源：http://www.sxryk.cn/163cspilvan.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163daeipbzn.html

Ruby: class User; end
来源：http://www.sxryk.cn/163trphltbl.html

C#:   class User {}
来源：http://www.sxryk.cn/163luapotni.html

[G02] 构造函数
来源：http://www.sxryk.cn/163xaofdrbz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163vmaqdema.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163zwromnqa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163qflusmzy.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163olhfuymb.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163vicpirtw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163jrgchldp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163qjnsedwk.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163xgywhtjs.html

[G03] 实例属性
来源：http://www.sxryk.cn/163zrymxblg.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ynkweqtr.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163btisjrnd.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ptwdnfwg.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163qyebeesf.html

Java: private String name;
来源：http://www.sxryk.cn/163lzixeigs.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163ujzdnovq.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163tufqbipp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163egqxalos.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163sxkdmrbf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163pxxmdfey.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163pdoruywi.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ejqmejpk.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163xqcfuqsz.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163awrsppkr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163lifdxpdv.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163cbrtothq.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163vhdqbdel.html

[G05] 继承
来源：http://www.aibaodan.cn/163vbncbtiq.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163btejyiek.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163tqhzayjc.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163dxvjgutm.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163idzmxqaz.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163aljmqgjh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ubaqipdu.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163cggkgikd.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163bbckqcvf.html

[G06] 重写方法
来源：http://www.xuanzx.com/163qgxtxate.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ynkhofuk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163hqxujhfi.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163etwumwnh.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xkvvpqkq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ujisvrlj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163yqfolpbj.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163twfflxjo.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163qcsyylak.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163qucloixb.html

Py:   super().greet()
来源：http://www.xuanzx.com/163dxcsyczm.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163udtiyoyc.html

JS:   super.greet();
来源：http://www.xuanzx.com/163prvzkqko.html

TS:   super.greet();
来源：http://www.sxryk.cn/163vqoxhjmx.html

Java: super.greet();
来源：http://www.sxryk.cn/163ptumzqts.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163vfxexxcx.html

Ruby: super
来源：http://www.xuanzx.com/163hxurcpfp.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163qnkmsuss.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163twcrqhay.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163islsbmoy.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163yimxuomd.html

JS:   static f() {}
来源：http://www.xuanzx.com/163zaavftmc.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163arsnkclb.html

Java: static void f() {}
来源：http://www.sxryk.cn/163gheqoejt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163aiopldog.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163fjbfgqem.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163fscqhnqx.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163frzzxeuz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ftgmcxau.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163rrzhloqh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163yuepttae.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163dvjlemkj.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163cnjsncgv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163cbenbhob.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163iwukhyyh.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ffoiqmlu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163amkchgyt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163xkhalslv.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163tzdcsool.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163qtujkaep.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163kmlwdpas.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163wpyvqjgf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163hgcowztx.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163oyoakrdb.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163anqmrnfj.html

[G11] getter / setter
来源：http://www.xuanzx.com/163zelzspwr.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163egpbduoe.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163pfgrhmkb.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163osvgrxld.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163piwchofo.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163gremysgk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163zdiufxhy.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163jtgqzifp.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163unafvsmz.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163uzqwfiqa.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163nallceaq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163tbqaiywk.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ifiunmae.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163hqbcthyo.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ajhiuxyr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163hymkznxo.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163oecwtfay.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ddzptfhg.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163xjctwwpf.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163udatcsoj.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163cluqdtie.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163grxwfcsx.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163nfmiiuuq.html

Java: u instanceof User
来源：http://www.xuanzx.com/163hvqlqlcj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ixmxxsfi.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163nfywczpo.html

C#:   u is User
来源：http://www.sxryk.cn/163wprjycuw.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163oaodzbwh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163tizwurzy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163yuohjelp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163epwkjlmw.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163lqydvlvh.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163acxoqwdi.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163zgtybtia.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163jfaznecl.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163hprbzxnd.html

[G15] 枚举
来源：http://www.xuanzx.com/163mqqiinkh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163mdhunvkm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163wtmztzvx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gtrukpap.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qvhzxnmw.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163tmgqdaga.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163tucbgmvx.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163dgarocuc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163udvhamhe.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163voubkkbl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163blujirij.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163mczrbfwg.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163eavkplpb.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vqchcuvr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163tbwccyou.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163eoexsroi.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163mrznqmvz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163fsoagkpo.html

================================================================================
来源：http://www.xuanzx.com/163faqthmmd.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163qsqkmtme.html

================================================================================
来源：http://www.xuanzx.com/163rivjpruh.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163sdmjlqpc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163linbuihz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163wojgwwcj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163grpimghg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163kjeuxbaa.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163gbcthwfg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163vueskqgh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163iijrwhma.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163oznkilye.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163adynliav.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163gocgrlea.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nnmzgzgo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rgsjiebm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bnxniima.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bglnkkjr.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163jmzpzomm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163spqobvdj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163kmfglrhy.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163uxscsuhy.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163niifrhff.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163laqvbxev.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xkduwfxe.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zwqskaom.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ptiqiqem.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163rfqclqcp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163lwwhndju.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163mayzhqre.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163gnmkaftt.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163krinugkc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163urxxmvbn.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163xbwjdjlb.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163iesmgmpa.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163yitdafwr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163cbzscxbc.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163lkaxqhrc.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163kuqjxism.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163cllhirky.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163psnuuajx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163iittnafi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lsztgacc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vmzmbawc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163eifuudul.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163dgahzwwq.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163hzjcevzf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163hthtmxfw.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163cxktchxh.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163jfyqddab.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163yrfkovzl.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163skcxdufw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163tikzirvv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163cvxwrqnr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163lytmafsk.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163eghvidto.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163tafwxiyv.html

[H07] 断言
来源：http://www.sxryk.cn/163vnnonzsr.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163feqsqknk.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kvaizknw.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163mvjywdat.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dvwatfpp.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163rfykdecg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163eaykzqfv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163hjlhmkso.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163wejbcusu.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163bvxrwmuu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163jfjxkpsr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163zdwrkcjq.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163zmvxgzcx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163nhddgcrj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ijonzcdu.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163etubpemi.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163xnrnkjsc.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163cevewfsa.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163zczmbtgv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163qnnpafmt.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163wsbwbeto.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163meqopifh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163drlasfyz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163unvvdvgj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163fdlqaebl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163lzgfkoww.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163fvdtzihf.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163rosozznd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163bawyzuyu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163paeyboda.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163cxligusp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tyucfjrl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163gtvegvqq.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163rthawszl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163vuyrxqew.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163bjpzsguj.html

================================================================================
来源：http://www.sxryk.cn/163qcneujid.html

I. 正则表达式
来源：http://www.xuanzx.com/163griknegj.html

================================================================================
来源：http://www.aibaodan.cn/163otgzzjxr.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163takaplau.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163bjfhvaji.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163vrwesxvt.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163tqwlihyz.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163iuvkupoz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163twixlncd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163gnbuaboy.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163pgppraqa.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163bkflsvmh.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163wkuecyja.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163duiaeoas.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163gunfuxer.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163tpyxxpzx.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qnlkiinf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163tdwplmgq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163dqvidcki.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163jgwrqxzl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163sptmvduc.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163cpcumysu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ecvxvwjt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163kyyoohsu.html


<!-- 参考信息 -->