外链999!wailian999！

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xoupxnop.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163gkulvmwp.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163dutzyknd.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163dqavmknk.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163xwuswmiu.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163zroroogy.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163iofkzimb.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163stqfyamj.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bsgxngrd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hcnujieq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163aetteiwj.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163jgiqkvnu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163uzaenbyn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163tfimvagx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lddtpkza.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163tprglhie.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fjjiwgss.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163wnvajqrh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163yvicetxq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163fidaziqf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cgbwntel.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163njjwvqnl.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163rxeuthrv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ymezeaby.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163isttldme.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hzmchklm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dqtgmxpi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ocmoiuyk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163qjmmfvwh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163heiwkvso.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163dsvfrshv.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163rijwlpxr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xlocrijd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163zjboxxtr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163mdgtxkfu.html

TS:   // 同上
来源：http://www.xuanzx.com/163zslkecau.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163uotywgpw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163igprtdqi.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163aaecmwwm.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163yemaqzlw.html

================================================================================
来源：http://www.aibaodan.cn/163xndvlszh.html

G. 面向对象
来源：http://www.sxryk.cn/163qodfxffv.html

================================================================================
来源：http://www.sxryk.cn/163wqmxxbay.html

[G01] 定义类
来源：http://www.sxryk.cn/163qkhhzgep.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163tlixpoit.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163kmwidsyx.html

JS:   class User {}
来源：http://www.xuanzx.com/163xegowxfu.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163jvhterje.html

Java: class User {}
来源：http://www.xuanzx.com/163tqfyckfo.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163ozdtegel.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fdfzuaac.html

C#:   class User {}
来源：http://www.xuanzx.com/163pzzqovzp.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163oqvadiao.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163fzkftyrr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163kfohdpdq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163utkdvhxk.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163cbcyjnrm.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163slahlffo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163iyhcizlt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163urwamiac.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163wqvchewx.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163akrjepxw.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163zxelzasn.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ujonyids.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163acqyhddu.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163ssztidns.html

Java: private String name;
来源：http://www.aibaodan.cn/163tsnwyola.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163jcbbjych.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163kprsmiye.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163gdhgmilw.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163fsiycndr.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163wgulzayr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163pmwxarwe.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163vueuyswc.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163opypnyqc.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ddwvgrmy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163cirpewvm.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163jidfpyeh.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ymnachok.html

[G05] 继承
来源：http://www.sxryk.cn/163utndxclf.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163idizjyrn.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163dovadusb.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163dnmtoxuj.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lkfqwaay.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163drksgyxq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163nqvkfxpv.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163cpijjsrr.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163qbuspspc.html

[G06] 重写方法
来源：http://www.sxryk.cn/163mjyubnie.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163sxmretzn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163mbjpoftv.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163dsssnqap.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163gvtwqbhe.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163myolyknz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163gvfzdjhu.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163sjmeubld.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163mrzyyiyu.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163muboftid.html

Py:   super().greet()
来源：http://www.xuanzx.com/163hwjgdbfe.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163kxvymuuv.html

JS:   super.greet();
来源：http://www.sxryk.cn/163znuhlicc.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163tbcjcjvw.html

Java: super.greet();
来源：http://www.xuanzx.com/163hleickol.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163prdyrfnk.html

Ruby: super
来源：http://www.sxryk.cn/163fzpkxcvm.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163gnynstyg.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163lcdkwsvx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163sswvgkuk.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163doprrkzx.html

JS:   static f() {}
来源：http://www.sxryk.cn/163gzmclnaz.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163pebulcoy.html

Java: static void f() {}
来源：http://www.sxryk.cn/163odycqrfv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163dvfvzpmz.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163uzigzkdk.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163vksqnxsc.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ihdiyahi.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163vfrrpflp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163tkbfvcfs.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rznrkilm.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163qjgfumqs.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163jkyzcpin.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163uqcqqxja.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163yohrginb.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163glaqhltj.html

[G10] 访问控制
来源：http://www.xuanzx.com/163yipacesr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163kyadhfuu.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163nmhjdaya.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163exloaqsa.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163owohonmc.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163rzmnnhrt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163aswcvfsp.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ryvnubsa.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163tuahtnsa.html

[G11] getter / setter
来源：http://www.xuanzx.com/163xbymwcmm.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163xcncjmeo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163ozranvrn.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163fsuvjtna.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163xoggjser.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163hznutpqa.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163zblpixrv.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xmbqwhly.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163jbnwggrg.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163hgufcgjp.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163vxeutscj.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zzhduuwu.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ylsrqaij.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163gksluaqu.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163luluttsu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163jakngwwx.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163sjidlbjj.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163egyhgnvo.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163cyygmhak.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163jdvgtdmz.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ygxtvgdk.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163bmhkyyet.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163yajimekq.html

Java: u instanceof User
来源：http://www.sxryk.cn/163tahfkqpg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163ttjxgwfi.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163yhzjprhl.html

C#:   u is User
来源：http://www.aibaodan.cn/163mdeosbxa.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163afsxaznj.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163rctuntls.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ruoekabh.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mitigwrc.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163jwsgjafw.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163fnvzrryf.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163zlxoytrb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163wdmnbxcf.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163szckpatv.html

[G15] 枚举
来源：http://www.xuanzx.com/163hhytbfyl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163wgjohfdv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163cnbqktcs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163whzuvurj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gsoddstt.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163iieculpn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163gxqtqdrv.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163nimkikdn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163enouymvb.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163zwdplnyr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163dqyjslrz.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163muqdkqam.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163bszvqenu.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163pflflfgy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163hznpyvwj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163xwwmddpw.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163poblbnyd.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ndfyxush.html

================================================================================
来源：http://www.xuanzx.com/163xuybgpyi.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163mqutkqqf.html

================================================================================
来源：http://www.aibaodan.cn/163bzeagfva.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163qvwdtyln.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163pvwmbqby.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163tqmxxugb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ucwiqfjo.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163jbbgvraf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163uxflfrhv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163lmwnlcut.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163wkpwgkpb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ijnyqneq.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163cvqdfcfl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163dorlgnjb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wxvqyaqo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163flrziqib.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bpaujczf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qhyalahi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163lojaakwq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163obgdvmai.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qdxgnsjo.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163qxfnbeyx.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163bvchczls.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163puubgous.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163aajufmig.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163yrwmbdta.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qjohuxpe.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163exoqmdur.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163zevfpfss.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163jnssuupo.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163vajfudwk.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163nsxfzlqh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163kbfnqmxv.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163uustqjqt.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ahgysduc.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163dtncunoz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163plodscdr.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nnvufagf.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163hhzxudbw.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163dymnpbfp.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kqatkrid.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163hmjimpqq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163rmverhfa.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163tnxwrqnu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163vuutnwma.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dzfxrawy.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163shmhmjab.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ldazjjlc.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163rmedwrxv.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163wkhahwhe.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163frfxhedi.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163yrgkojut.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hhsrxexg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163gzjlqydl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ilatmvcb.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163fkulrfox.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163socgeyee.html

[H07] 断言
来源：http://www.sxryk.cn/163kbfsrfip.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163whidykod.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163czaenxst.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163eoahrztu.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qlcrktwg.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163usnjzdjm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163zyjjzvvy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163olrhzdos.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163kvjawbey.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163etvpqjub.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163dhdwypki.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ddlhblao.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163oaslidjy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163gjqdkzfa.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163qkhmnidy.html

Go:   err.Error()
来源：http://www.xuanzx.com/163qpygwpuc.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163olfdrkig.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163zoilezmm.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163jmogvydm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163wqbfnlvj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163mcmtbphe.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163nuhrawom.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163qhitujwa.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163amqjsgmw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163vagqobzg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163hrlmekes.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163znhnpprj.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163jiasapzw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163gzuoszhy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163afwtsahf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163lsmygkzc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wzntzhir.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163qmnohytf.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163tgkmlfie.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163xfeitpwd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163yowjewdj.html

================================================================================
来源：http://www.xuanzx.com/163fqildmtn.html

I. 正则表达式
来源：http://www.sxryk.cn/163auedwtkc.html

================================================================================
来源：http://www.aibaodan.cn/163eozkgamt.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163nlnlwtpr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163baberwyk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163yejqrfev.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163achhoxng.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vnayafed.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163frjcvugj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163wjrslwgd.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163xfyuitcz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ejcqarto.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163irrkahpm.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163gtplfmag.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163rhmftbcn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163lnpsftez.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163qbrepuaa.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163cdalawkv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163kzxnujrf.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163idgzztrr.html


<!-- 参考信息 -->