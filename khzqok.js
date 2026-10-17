外链999!wailian999！

[F09] 获取文件大小
来源：http://www.sxryk.cn/163gdrxhmhc.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163fnqewcdz.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163bbvpfwvn.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jxptfsdy.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hggfuvja.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163neiiraef.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163btvgaeal.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163togxchxj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163quotlhvo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163gobnjtkw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163famophsv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ppmtsvuv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163smmzbzvk.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163acluvwua.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163jwheonts.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163addjuipw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bwbixnga.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163mmlmkfmp.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163idyyktgj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wwwipzta.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163pwzatxcm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wcizbaoh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xwvnpgaa.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163yafpwllz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ynohcpwx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vrbpqjde.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163oerzwawm.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163awlnznyk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163nyxzfrhs.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163uafljkpe.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163jxqaevmb.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ritgojak.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163onjydjqu.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163gzntenaq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163aibttcoa.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163vsfkijky.html

================================================================================
来源：http://www.xuanzx.com/163rbwcjobf.html

G. 面向对象
来源：http://www.aibaodan.cn/163ucnrcmdv.html

================================================================================
来源：http://www.sxryk.cn/163ujysiqml.html

[G01] 定义类
来源：http://www.xuanzx.com/163izorrbkg.html

Py:   class User: pass
来源：http://www.sxryk.cn/163osarucjo.html

PHP:  class User {}
来源：http://www.xuanzx.com/163wvidjsgb.html

JS:   class User {}
来源：http://www.sxryk.cn/163axfynycc.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zvdkyktf.html

Java: class User {}
来源：http://www.aibaodan.cn/163ydjymoac.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163chmvgxlv.html

Ruby: class User; end
来源：http://www.xuanzx.com/163wymusbhq.html

C#:   class User {}
来源：http://www.xuanzx.com/163sdlwyxhc.html

[G02] 构造函数
来源：http://www.sxryk.cn/163vuaerxpj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163odkbefyl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163nnywettl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163zdgmcptc.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163iqkkgxvr.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163nrgtdzde.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163fxrvwjih.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163wtrtiyzg.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163vwirurcg.html

[G03] 实例属性
来源：http://www.sxryk.cn/163arnnhwdi.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163eckvcxzk.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163klnojsuy.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163sqxgnohq.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163dguotnoe.html

Java: private String name;
来源：http://www.sxryk.cn/163wmcvsydv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163afcrowlb.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163xwtvcpkm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163kbtcjhbb.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jtupgsip.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163qqedjuqa.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163lvnxrdtm.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163qwtmwcok.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ffqbaigc.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163nwkbmhgi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163muqkvupw.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163dwqkvngk.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163cdztzult.html

[G05] 继承
来源：http://www.sxryk.cn/163jepgzfnc.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163uyofiocu.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163csezxdgh.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pfcuqpbi.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163zfrltdvh.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ylldfqsx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163agvuylda.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163wgofpqki.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163lavnxybw.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163xpghcerj.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163kpfbgrfz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163xrcdnmhq.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163hpsqmhcq.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vaoyylaf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163gthztlxd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163jqinawgc.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163wisdjapl.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163rbujuyyx.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163yjgaxxlz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163izaraquq.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163rmztbqiy.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163qsfmlgrx.html

TS:   super.greet();
来源：http://www.sxryk.cn/163uqzxqhir.html

Java: super.greet();
来源：http://www.sxryk.cn/163ucembyoy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163hzzzfpkt.html

Ruby: super
来源：http://www.sxryk.cn/163lrqfzviy.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163xnftlafw.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163hlwylpbg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ecnjkkwe.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163yovhdiyn.html

JS:   static f() {}
来源：http://www.xuanzx.com/163nacpgaot.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163fiomwkya.html

Java: static void f() {}
来源：http://www.xuanzx.com/163jxjqgvkn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163jrouixlk.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163oimebhvg.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163ghizjpcb.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163pvomsjot.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163uzitpkjy.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163wlfudxtg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163vtxelxlf.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163irjzvopz.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163sdvebjnb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163okpwiklk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163nnxtfcvi.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163eikvdvcn.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ttqeufja.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163xqaqwkud.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163kelzresd.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163crgolzzj.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163qzkyzjaz.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163qrkqyhyn.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163jjpoimdq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163kpoypgka.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163gronarrr.html

[G11] getter / setter
来源：http://www.xuanzx.com/163adrbnpjp.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ykknevzh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163crgzmgkd.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163fryxigip.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vgpkpibr.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163sagwcxel.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163swuqxlyr.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163fjlmojlw.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ysoiejfb.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163ifyemggy.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163diitjdyb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163dzulzhgi.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163kphcddkc.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ipawukyc.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ursqyaof.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163fyexoyba.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163tqwitnqi.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163zrsfqlpm.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ihukkqmp.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163jfwghpuf.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163sbpnvexq.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163eayeicag.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163rfnyycns.html

Java: u instanceof User
来源：http://www.sxryk.cn/163kprylear.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163cqlpicdw.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163nztenzso.html

C#:   u is User
来源：http://www.sxryk.cn/163ikttkkyp.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163mjuaqhrc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163cwbphjwu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163zavtujsf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163pokveyuk.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163gmmiltko.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ggtyirbm.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ikgkgmov.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163sbebacrz.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163hxhlnltq.html

[G15] 枚举
来源：http://www.aibaodan.cn/163lcdorybv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163dolpuzyl.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163jaxnfjhn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163pqnocdjk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163uhvreffs.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163gzhrwxob.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163odzkymur.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ldiutman.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ckobjuxg.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163aftttviz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163bkucknvx.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163pguuwjal.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163cwebotzo.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163bjzcftfk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163tjlhpajr.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163tcngzxxa.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163xfajpicx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163siznfzxk.html

================================================================================
来源：http://www.xuanzx.com/163dahfabea.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163gojdscym.html

================================================================================
来源：http://www.xuanzx.com/163mlrxgzrw.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163rdgxaymx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163mrjtknsr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163djeevwjj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163utkgfhyj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ztspkyky.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163iqddgyvf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163posdefow.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163qacajcmv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ebqhrpem.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163tnzdjfxs.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163hdklrfok.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wrmxclax.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ghyfsoaw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cmicvavs.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163usftlzbq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163uzdoflst.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163qlwuqbcb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163suasycgy.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163fjrpagvd.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163qzyzqojp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ravesjpp.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163npryvdja.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mzbxdcdl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zpixioat.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163dxsmghwg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ihahtuey.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163jygayqgv.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ehapdrxp.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163grdvlspp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163sfovuvwg.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ifykjvtq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jpyzozse.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163pzukwlut.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163pcbdoupb.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163agmrudub.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163gudqmiau.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163drnglduz.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163rnyeixav.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163jhmaaigu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163nqsuqpxw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163iphqzayc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ndnnabqk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163yhvnqvkf.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163pujfgahr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163tbswrjib.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163yxlviahr.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163wmxaqmhg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163etmxcnbf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163njjsukci.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jzbdxoug.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163mpgixdza.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163asnxegph.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163cqwjtiye.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163wwlpaqzj.html

[H07] 断言
来源：http://www.xuanzx.com/163qnipiixy.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163rzqrhqlv.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163xshizmal.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163yhkkmzaa.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fgezyfvy.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163gvjzikfb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163noljamdn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163qlkypsbd.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163eplcwhfl.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163xsncwtmv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163aoxynodq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163cuwxejth.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163nxdtuqnc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163rqluiwwv.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ijohctxl.html

Go:   err.Error()
来源：http://www.xuanzx.com/163yozhdozh.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163iejkjrtz.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163rxvnkkav.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163tckaesmr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ypohlylg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163cmtraycp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163pllmyzfv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163uouaxokt.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163mdlruvqe.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163fsdcpfcv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163mknnswtg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163mgzosumg.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163vthtiwuf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163vuxwmzsr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ornfkkvw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pmhrdwvg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ovhytwdk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163clutwrqs.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163gmkrlezy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163mbfoplec.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163axtpgvhy.html

================================================================================
来源：http://www.aibaodan.cn/163fgldxxlq.html

I. 正则表达式
来源：http://www.sxryk.cn/163dmcxwsaw.html

================================================================================
来源：http://www.sxryk.cn/163jzdvssbv.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163nizyedsk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163wlzokzte.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163nbjhrsqt.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163stdppugv.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163eaczlakc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163yhjspyvd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163kkttzwhx.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163bjexsieq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163falppzkd.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163usxujtow.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163bnrlryqy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163awtkrbpt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163sqplfxvy.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163zdqrjulx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163mjwjjlzk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163idzjvllp.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163zpwycrsv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163rrmqeolz.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163djqjeqhv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ovnxesug.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163pdhcempk.html


<!-- 参考信息 -->