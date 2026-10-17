外链999!wailian999！

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ihosqezt.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163meearfvr.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163idfihvju.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mzktwyze.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163swayjquk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163pzjvtcwa.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163zwvwkwje.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163wxifjyxp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163fnskoytk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163dinarnqi.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163owabodvk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163fmnenggt.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yltohepn.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163rrdidlbo.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163wnrmldmu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163pogonffm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163drybcaky.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163snwkavgx.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ibjopyzk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wvlxpiqa.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163kkiivmlh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lkjbjnie.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dzoxxnmc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163wvvqdfar.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163tyketoul.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tmhguvlr.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163prkdsvbn.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163qzirhpdm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163zwggnpvr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163clbztjvw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ohrftarm.html

TS:   // 同上
来源：http://www.sxryk.cn/163tndofjei.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163cbnbhncv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163zoskllfv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163uffdupri.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163wroujubp.html

================================================================================
来源：http://www.xuanzx.com/163cviqugsl.html

G. 面向对象
来源：http://www.sxryk.cn/163ihxbxbls.html

================================================================================
来源：http://www.xuanzx.com/163peekrrdo.html

[G01] 定义类
来源：http://www.aibaodan.cn/163thxcdpwp.html

Py:   class User: pass
来源：http://www.xuanzx.com/163cokgqgmt.html

PHP:  class User {}
来源：http://www.sxryk.cn/163fgthmysz.html

JS:   class User {}
来源：http://www.sxryk.cn/163gjiwxfwp.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163zjxrbddq.html

Java: class User {}
来源：http://www.aibaodan.cn/163odjfmyme.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163cofszedk.html

Ruby: class User; end
来源：http://www.sxryk.cn/163yfiryhuc.html

C#:   class User {}
来源：http://www.aibaodan.cn/163zmavvkgb.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ohinawel.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163gbilhkkk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163nqyitvbf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qkrzlsqo.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163dxdrekyd.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163azmdizzw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163vwmhwavx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163gympvofj.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163aqxmzhfu.html

[G03] 实例属性
来源：http://www.xuanzx.com/163feidkhjn.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163tdzcxzvt.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163stbqdvls.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163wlqavxsj.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163qgcsuwzm.html

Java: private String name;
来源：http://www.xuanzx.com/163cchomoyn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163smoyoxrg.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163szxvkwyd.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163rdxfzprn.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163dkrzvsfi.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163spyeyedt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163fxbdzprq.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163simvmvpu.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163dbjytopz.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ajrfdygv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ixdqznwf.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163izzcaeah.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163pzvobury.html

[G05] 继承
来源：http://www.xuanzx.com/163zhhqzbva.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163imiydidp.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163enlqtiqg.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jotewtlu.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163wvhjgbtu.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163sczgzazc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163qaergxyl.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163tsrldadl.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163dktsoloq.html

[G06] 重写方法
来源：http://www.sxryk.cn/163dlkjpqmq.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163frwfxjeo.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mfyprelb.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163grwmojao.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163vwnfgjbr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163mhqegtjd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163fqdtwbdy.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163mpdnnsch.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163yegphyks.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163hkgnfbih.html

Py:   super().greet()
来源：http://www.xuanzx.com/163btvxrkvy.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163qdjrszpu.html

JS:   super.greet();
来源：http://www.xuanzx.com/163semoflca.html

TS:   super.greet();
来源：http://www.sxryk.cn/163nxonwlym.html

Java: super.greet();
来源：http://www.sxryk.cn/163lwabiuio.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163jvxsnrrk.html

Ruby: super
来源：http://www.sxryk.cn/163covpxlou.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163opeyfyav.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163wfthzisj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163hvzaywig.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163gyxubezb.html

JS:   static f() {}
来源：http://www.sxryk.cn/163cgtmpbuk.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163veqzhrno.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163hdktfuen.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163feeykbol.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163vvxclkce.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163mjutjuqj.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163biiedqme.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163egujgimg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163afmabbsp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163uivitksd.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163tbusmfqq.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163mfgfgvgx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ozjvjueq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163xdfyciwc.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163oinoziut.html

[G10] 访问控制
来源：http://www.sxryk.cn/163kzylhxhl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163ksdxxrmw.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163aqwnncjx.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ccgfjnkg.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163yugkiklt.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163yveoyqbe.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vthtmwcr.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163dohpzqbe.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163vkkqmczq.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ptptdyxf.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163vvfdkcdk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tqoxpwjn.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163eiecgasf.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ruzsdpvg.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163gswcnuvo.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163vdazufmx.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163tvicwznt.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163czaqlswn.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ceisfypm.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163udtxlnje.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163hoeaueai.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163iasynoor.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163qwgxtyuu.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163fwsydoij.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163knmbfvdt.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163gjcpacwz.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ueuhnnql.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163wuxthwsq.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163fpulhway.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163jafkskpi.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163fhympklj.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163lxgcvqit.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163cjfhqwev.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163jtxllyls.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163mwgitvhi.html

C#:   u is User
来源：http://www.sxryk.cn/163kjrlrril.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163vletzjon.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163vgwysooh.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163zxnphbia.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ouuusgpw.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ezdlemdy.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163muclzixv.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163gjlgalte.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163rjdygowd.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163smszcsyj.html

[G15] 枚举
来源：http://www.xuanzx.com/163lgogoupp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163zovqwdpb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163heybbyiw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163niwchljt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gafjnulf.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163fqyprhuz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163xguirgjh.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163klssgkmo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163nfunntzh.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163djcgmiua.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163nzfpmdty.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163tweqdqgb.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163sfwptaua.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jfmyfgut.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163dohtiewz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163nkagsxdf.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163sfucwgca.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163dbrrxhvx.html

================================================================================
来源：http://www.aibaodan.cn/163qeuezgww.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163rxpdorpi.html

================================================================================
来源：http://www.aibaodan.cn/163akxrwyjq.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163yocdpucz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163oemwaowf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163zacvjcng.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163rscauxnv.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ouxtpnoe.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163bxqkfrdj.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163tkfihzwz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163iuomsxfl.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163zmsmtvgc.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163pwakqgka.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163icnhffqq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163macnvoii.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163plozspfc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qquhbdim.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163urhjaeso.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163rtwxxqfz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163igrvxcui.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163vxuauqzl.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163vjgqdvpu.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163xfcsqckl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hxjzqegv.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163btplafya.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163srxysqux.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163sdguvmsn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163iiepclyv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163oxnaftug.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jukodfta.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ndxikqqy.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163jrmzxubs.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163lbbougkk.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kgoohbqr.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tsfjsgnk.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163jwljurmv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163hokuapof.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163rtscgquz.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163xwmwqrek.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163lpdetyqz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163mwbxkxcj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163azppdpoa.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163efhrhowy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163fdplnpap.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163vnjcrozf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163sefrnlty.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163vxljcsod.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163rshbgbtk.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163amtqsthg.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163lfkkzrnt.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163psdefhgx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163niuykndg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gihxggbm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163osdcdwtf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163cvjtqebb.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163cwvdlkbz.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163nxcvmpmo.html

[H07] 断言
来源：http://www.aibaodan.cn/163ypycglsn.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163fhbopela.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163aglxdvzh.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xkxlblvc.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fomjvgkq.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163gqjtaylr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163kzxxodbs.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163jwrcsqhz.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163qkswhugh.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163kdplexyv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163zzymqyry.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163fqsnvnys.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163fppsmefs.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163wzrlgjwy.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163qckezjst.html

Go:   err.Error()
来源：http://www.sxryk.cn/163dvvcyrjp.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163bmueikcf.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163cuqhhzom.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ewsusgui.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163hajpdnpm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163cbawzzqv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163azzerflv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163tzkbimzb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163hhmtqhmc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163frmxkqxv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163hwfyavel.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163zqorikng.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163xyhxtxup.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ypoputlk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163fvrytqtc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pxengbfs.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zputwvyv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163xrheujnn.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163znvyipnq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ncwrcwka.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163lkbsmojo.html

================================================================================
来源：http://www.xuanzx.com/163iwkhjdtc.html

I. 正则表达式
来源：http://www.sxryk.cn/163twdcceqx.html

================================================================================
来源：http://www.xuanzx.com/163xboqozrm.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163wgoujjiy.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163tbxaijnu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wuqtdggh.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jjzqejzu.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163mfdplvoo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163fmloisoy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163cpdolkqs.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163aqypghca.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163zcmzuukt.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163utkmcmqa.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163vnauvkij.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163zvfkfblh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163hrbnnqsn.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163slvmlrgj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163soipkfml.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163zgktihst.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163idhsnfcb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163htmgbpxp.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163hajnijod.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163nepkolxj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163dcjxhlbt.html


<!-- 参考信息 -->