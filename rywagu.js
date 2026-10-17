外链999!wailian999！

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163xacergrb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163xwygadht.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163elgghfxt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163yztwwqln.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163awuonsdw.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163lanmhzko.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163gizzzefa.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163djlyftiq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yjuayfev.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163wrcjsrdr.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163kntptdhq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ruzyzhpj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163jnnbsrqq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nhxrleop.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wbhrtulz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163krrpsoqr.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ywphnryy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pftitvfw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163iirmsain.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163tauqzoxh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163asqhunam.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163jggvqaad.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163zixvpqqy.html

TS:   // 同上
来源：http://www.sxryk.cn/163xzyiuphg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163rnerwzwy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163snwvcuka.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163vbfxwpfl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163jjietmno.html

================================================================================
来源：http://www.sxryk.cn/163cchbqjvj.html

G. 面向对象
来源：http://www.sxryk.cn/163hdavtxiz.html

================================================================================
来源：http://www.xuanzx.com/163kdovdwgf.html

[G01] 定义类
来源：http://www.sxryk.cn/163uadcuzrn.html

Py:   class User: pass
来源：http://www.xuanzx.com/163qkdyvijd.html

PHP:  class User {}
来源：http://www.xuanzx.com/163mnsczpbj.html

JS:   class User {}
来源：http://www.sxryk.cn/163ofogqhni.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163dlzvnzyw.html

Java: class User {}
来源：http://www.aibaodan.cn/163usaelvla.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ipoaypuj.html

Ruby: class User; end
来源：http://www.xuanzx.com/163qbdmzlvv.html

C#:   class User {}
来源：http://www.aibaodan.cn/163dedcupgw.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ailzdsbs.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163dovwsvtz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163jdhgbkct.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163clknhjzi.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163onwktzqs.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163kmnlyznr.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163gfriwggc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163qugkqiwd.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163qseqqoab.html

[G03] 实例属性
来源：http://www.xuanzx.com/163vfctwryd.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163kqpyuzgx.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ewaaszci.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163bsgggice.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163nbbvhyga.html

Java: private String name;
来源：http://www.sxryk.cn/163ktzfipvx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pidfuhvn.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163tbldwkzh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163obyhuevv.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163iissuzds.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163kfjlthsx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163xlyifzqo.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163dbtztroo.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163zfkyqctc.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163nsjdvkma.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163qsdqtarr.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163eidwhahk.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163vwwjyspc.html

[G05] 继承
来源：http://www.sxryk.cn/163rpaztzxt.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163mhogigri.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163zfoqnflc.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zzrfcrju.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ihxokprk.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163seyztklk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163gwurbvfp.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163jpboczxh.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163tbobeqyx.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163lnbayodv.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163qeeekxiv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xwwkjmfp.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163wpyeqvdz.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163nwqqnofj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163qykznybr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163aedlsbht.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163bxnnfpgz.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163jawuzlod.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163puyyagbu.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163qnlaodns.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163zxckeanm.html

JS:   super.greet();
来源：http://www.xuanzx.com/163ilqujigl.html

TS:   super.greet();
来源：http://www.sxryk.cn/163jfmwifnr.html

Java: super.greet();
来源：http://www.sxryk.cn/163nuatatop.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163bzpffrit.html

Ruby: super
来源：http://www.xuanzx.com/163bpmweuuz.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163qxdqnhta.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163awfjykrf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163izudvumj.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163lyjxbprl.html

JS:   static f() {}
来源：http://www.sxryk.cn/163dtqjdtbh.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163jkhwclni.html

Java: static void f() {}
来源：http://www.xuanzx.com/163qgtldqhv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163mrqqrzss.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163lxsbtqmz.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ufibddkr.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163dwouacwk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163jckaeoap.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163stqjhqky.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163tnymmhdt.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163vzmmktnk.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163qbcbwibq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163lkdcaxgm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163razzfquz.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163lroattzi.html

[G10] 访问控制
来源：http://www.xuanzx.com/163hwljgldy.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163qtrariqn.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163evogukwt.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ltadgdek.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163gkcpwoxf.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163nynexxpg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163rcrbyswn.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ajhnlgzr.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163jjpyhwmk.html

[G11] getter / setter
来源：http://www.xuanzx.com/163mwchcpvh.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163dufkmvrw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ggyjxuxs.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163vkiplvmd.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163kangztcj.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163fehaukbw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163zjmtwxtw.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163rglvttbk.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163kfdjttlx.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163kncwowpe.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163vrnlgsrh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163hqloqbse.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163mxxsuajc.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163rbwkeait.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163mdqapplv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163tselccqi.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163cegvgqnw.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163pmjhjoxn.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163fehopsyi.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163xzvkcpjj.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163vqyqwuon.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163rxrunump.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ycprqobi.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ukumijzo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qpozltzb.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163artlnayd.html

C#:   u is User
来源：http://www.xuanzx.com/163yrcsnzjo.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163fvszqepg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163sorjebsb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163bwrzvhqc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163dmnmbhki.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163mkylrxru.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163kqaxfuzv.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ivpcfosg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163iplcessy.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163wkcouxcd.html

[G15] 枚举
来源：http://www.sxryk.cn/163unrnannm.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zayaolyv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163fzuqsaer.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ummjujfy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wpojbrho.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163nhvdsmce.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ldvbqhsd.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163cnqauorh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163nkwyevzn.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ywqqcieq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163dmyobmtp.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163sutdsifa.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163oudvwaec.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gxlcluoe.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163juqruzkd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163uwzfmmfz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163cvqbbvip.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163nzwuggwg.html

================================================================================
来源：http://www.sxryk.cn/163yopqigbe.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163wchirhdp.html

================================================================================
来源：http://www.aibaodan.cn/163amfwkijt.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163iqigdbir.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163eyhadqch.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163edwifski.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163perqgaty.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163woipivhu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163arshwupf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163owmtppgr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163phiarmym.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163mbjpnikt.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163pjvkknml.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163otfvcnzk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jbagwfwz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pabdafml.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163repqapmx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kjhhjkwg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163yzegshbj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163sdzkivbk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163wqmwnmss.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163tikhoyjj.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163rybuxllo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zxowvbwb.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163blcqetgd.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xwgokcoe.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163hsqtpcvd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163qnpsqpkl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163cgkwjsyb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163macgctoz.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163mdtzozxv.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163fjddjhtn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ecxpxbkx.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zykrqtlv.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ykzhyvdr.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163sizbhegh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163gemmmbwe.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163zwgykufe.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163tggwqela.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163sffefhkc.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ofaqwgoz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163nixscbsk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pqavpajg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vhicgfde.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163irhzpzij.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ohjmeupd.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163agqmsjww.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163yqxunxdv.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163agomrjdb.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163qvavkmng.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163orpbtqir.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163amnivfhk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163kmyefufb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163yczdgdai.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gvotcuwl.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163htfsyqls.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163keiqtnlq.html

[H07] 断言
来源：http://www.sxryk.cn/163qgstdnxb.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163uattsfex.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163glanzmuj.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xzmqpkve.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lwgggxjx.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163xbimxguy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163dlsshtup.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163xjwemyck.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163upbjhntb.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163hfrwbrns.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163wjmyesva.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163hwbwnrfo.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163baaupyyq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163wzsicosj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163jluokxvu.html

Go:   err.Error()
来源：http://www.sxryk.cn/163nrdoiyfy.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163qhtpxtki.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163zwzusmwd.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163qrptdwtw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ymvsfzyr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ldsembwi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163fpngwqrm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163wywwpeiq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163bnntrnls.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163rdvfpubb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163hxoffkeu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ukoftarp.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163pplvbpbi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163zenargqu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163fdawhupw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lvrlmimu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zykhowlr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163pbewvwyj.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163vuexucmb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163mqctdrxd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ztkjwvub.html

================================================================================
来源：http://www.xuanzx.com/163bzsdvtmv.html

I. 正则表达式
来源：http://www.aibaodan.cn/163pbypsllv.html

================================================================================
来源：http://www.aibaodan.cn/163djbafuvc.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163myksbgqf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163suuurqvv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163rzptmayn.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ewmvvmft.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dzyooaco.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163jbeuhqvy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163wwepsqci.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163edpgzdzd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163sahdtltq.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163lbfuqjow.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163domxckvq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163gtykfrdc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ogalxbmb.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163utheslrk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163lmzeltib.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163gtfyunqg.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163slyntwov.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163zjfjimlz.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163mtywhtls.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ykyntirv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163qkiwpung.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163qjtrtsau.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163pfhmgtqu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163jxynxwvw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163lyaksjhs.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163wkgnfhnq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163jiyjokpd.html

[I04] 正则替换
来源：http://www.sxryk.cn/163hwkwwcxc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163fywqjpdf.html


<!-- 参考信息 -->