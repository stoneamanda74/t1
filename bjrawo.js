外链999!wailian999！

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163okzgqfon.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ujasoalg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163igeulnqd.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163xwqabaly.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163yamtlbyz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163jucxqvlz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oxlavxez.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163qxruqqub.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163iugjpgwd.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163joutsnfg.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163buyzxveq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163iztybrit.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163aftakngt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163vqpvziuw.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ftzxcxoi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zqtiqlnt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163adpftrlk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zmjausim.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fscwuohw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163tenwnpwc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163bqergfgg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hitvfomy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163coejyqku.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163dgnhntbl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163cqawhlzw.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163sarntoth.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163nzzhgjur.html

TS:   // 同上
来源：http://www.sxryk.cn/163yxrypkov.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163grbdfjya.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163jyrpdavw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163lkddktbp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163dngbtlca.html

================================================================================
来源：http://www.xuanzx.com/163atirknjk.html

G. 面向对象
来源：http://www.xuanzx.com/163bwzmikpc.html

================================================================================
来源：http://www.sxryk.cn/163pqoemppa.html

[G01] 定义类
来源：http://www.sxryk.cn/163aobyecoi.html

Py:   class User: pass
来源：http://www.sxryk.cn/163siolobee.html

PHP:  class User {}
来源：http://www.sxryk.cn/163euhxxapg.html

JS:   class User {}
来源：http://www.xuanzx.com/163atcsokwh.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163oyisymrv.html

Java: class User {}
来源：http://www.aibaodan.cn/163sxpjtpwi.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163rypsfkln.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163jaedysfa.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ncdhpnns.html

[G02] 构造函数
来源：http://www.xuanzx.com/163eutuuxvh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163kezimgic.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163phhduunx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163irtgxvpm.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163zwzsokpf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163pgogmoux.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163haamuymc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163wecrgjrq.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163cyxwxabw.html

[G03] 实例属性
来源：http://www.sxryk.cn/163sacreoed.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ycypdtce.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163hlnywety.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163itkndkni.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163vxfgimzf.html

Java: private String name;
来源：http://www.sxryk.cn/163oumkrvpn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163jmvqsjjv.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163mdvzpcsu.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163aciwosvz.html

[G04] 定义方法
来源：http://www.sxryk.cn/163xoxabjhb.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163prvwvtvf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163haobggis.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163rxlcsyph.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163iqchoazq.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163srbzvnur.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163gsexurlj.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ukonmsay.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163jpujyyae.html

[G05] 继承
来源：http://www.xuanzx.com/163wvymiaua.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163udxajxcn.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163sridxqoy.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ylfzlddt.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163raywepnf.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163bgevwlbf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163wsvwlfbx.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163bpwxyafj.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163devluvfa.html

[G06] 重写方法
来源：http://www.xuanzx.com/163amuruwud.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163mjhhidyo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gvbijodi.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ndmmfimj.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163yzvxbazy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163sngfybub.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163bupsodmy.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163lmhenktm.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163qsxknofh.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163fycbrerj.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163emmyimqw.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163jsqqezvn.html

JS:   super.greet();
来源：http://www.xuanzx.com/163radcmxwz.html

TS:   super.greet();
来源：http://www.xuanzx.com/163blpnmowa.html

Java: super.greet();
来源：http://www.sxryk.cn/163uclmlmbf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163keldagfx.html

Ruby: super
来源：http://www.sxryk.cn/163kayawput.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163xdaacxwr.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163cvqzpblr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163pgztxduy.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163yjzyncpx.html

JS:   static f() {}
来源：http://www.xuanzx.com/163osbbgqem.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163tughlkyt.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163emerjmzg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ndwlsdeo.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ilfxkgch.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163awpsndlc.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163nknswaah.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163eeaaszto.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163nlnxmins.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163wvucjzps.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163tqsgdcvi.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163jfdsbskh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ilfsmjzc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163dbcynhcd.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163urtweuup.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163hqqbvoyc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163jurmuprq.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163gbkclprd.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163zchdvnge.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163oyclknls.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hykvvmbp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163mcmcpjrl.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163bpxkpzcm.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163tkefmkko.html

[G11] getter / setter
来源：http://www.xuanzx.com/163dwbcuhya.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163imqtjtkv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ruxuyplc.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163roabseke.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163qwrtpdbj.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ocanedmx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163sycjdlwf.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163zcluewkn.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163sfsyjdbw.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163kbqkdniy.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163iyhffplu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163jbiaqrai.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163deiaqumi.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163blsjpcab.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163xvwlsevs.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163hqwbsnsu.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163cywbatex.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163knmevwvt.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163hzmalxvb.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163thkhfjaq.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163fljjodbd.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163znszcabq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163qsmjruxt.html

Java: u instanceof User
来源：http://www.xuanzx.com/163adzsjoxk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163vwdatulz.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163woyjnyfd.html

C#:   u is User
来源：http://www.xuanzx.com/163tlncljag.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163hedkfeed.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163rsllinao.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163drfikusa.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ggcsbsuv.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163agwgrpir.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163aumwnfky.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163uambrhic.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163lqqzthps.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ugyuimmq.html

[G15] 枚举
来源：http://www.aibaodan.cn/163lknaetpo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163fbvztpvz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163npmzrpdb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163tlklylzt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gvgjvpym.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163kzsawisz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163fthogkda.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163lwftioxb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163lcwlqqoy.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163hhnmcxbb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163nqzidinf.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163osthrpnz.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vrhemmjm.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163bvzvgxrh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163pvftovkf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163iyliuhpb.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163vpdhcmcb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163gdiwfnnk.html

================================================================================
来源：http://www.sxryk.cn/163yfeqiqiu.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163nryyugzd.html

================================================================================
来源：http://www.xuanzx.com/163veakexbj.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163jnrmwoim.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ucamofjc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163vrszcrmh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163mbormwog.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163zmskiymq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163lpocjkfz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163nuldyksz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163crwwatfw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163gwtgqjvp.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163qsoecqbl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163uwvfejad.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kszilwho.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bntlzfnb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163acuocgjb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163iavkbwlc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ubnhpwyy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163qqkarzol.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163bfywyrkt.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163fweiytcs.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ehizlosb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163dutmnpis.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ihcqlfvu.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jkfukjwf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163qlwxjzmv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163dqobxker.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163huxwaelo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163whcumgbk.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163whbzysrm.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163zlzgnica.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163iwuukxsa.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zdfmwucv.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163usdzlofq.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xkkcvxir.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163gmvvmalf.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163hkokmhxs.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163fjscnaic.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163xtyfncpi.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163mxewtckd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163petnbssb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163blakcqkv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vgffqycl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163qdxdexfy.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163elbekshu.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163rssammpv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qygvjokj.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163htbibfuw.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163xusievgm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163aembyguq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pjgiqjnv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163yuclefbz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163eyooeqkd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163obutpncy.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163sayqqsxa.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163tvzdvkty.html

[H07] 断言
来源：http://www.xuanzx.com/163wknzcgnb.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163fqgfgthy.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163oyaykjkc.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wxraiull.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rczmysfh.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163utzhbejc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ozhddrfu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163upsjzpvv.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163wgggvtwc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163jiaubxlb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163vtiqbmma.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163dfihkekz.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163mwoigtee.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163gqgtosbu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163svutdmsj.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163tpwnburz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163kvvucxxt.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163tqljocql.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ykqlnhuz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163yqkwzpim.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163yhjgnbac.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163bnuznffw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163gkqazwfq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163moqioogu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163owzcwuny.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163yzznljks.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163fpfnewqw.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163sxvyydye.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163rvnnjgxc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163legmdwut.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hjaseaqd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jklppnpv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163juzbkafl.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ntnrimkp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ilyyxyou.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163wmwnioau.html

================================================================================
来源：http://www.sxryk.cn/163jxcvhffr.html

I. 正则表达式
来源：http://www.xuanzx.com/163dyzpsttm.html

================================================================================
来源：http://www.sxryk.cn/163huyvrorz.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163uvdpvpvj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163nmsglfty.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163kbijicwn.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163qtoyjrly.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rypnaokc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163tmyofimo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163prbacyej.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163baxsskgl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ukugkkoc.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163pszgzskj.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163naswfjqh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163kgtroisc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163nsqrheoe.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163tddywqja.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163weyzjmgq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ljyeipuw.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163tfrlnegv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163iaxsjubo.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ohwirbmm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ptmircww.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163qhbafbzf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jkdbrdrg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163huogmvvj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163vejejsdu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163refpbffp.html


<!-- 参考信息 -->