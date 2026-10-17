外链999!wailian999！

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163iaqeuhtm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ujvzqvub.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rvfxiqpp.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163pbkuzodl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163vchhsont.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163nlzlirst.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163gnadplwc.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163naqzurkx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vflkopyl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163bftxunvb.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ecajltfu.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ebriwvox.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vcuvseev.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163cknpmmbz.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163viipaled.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163cmiybdsf.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ucrqyzop.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163klpaxnro.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163lsjxbrne.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xhgmxidy.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jmiroxak.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163quysyvhu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163xqagpkpr.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163pesdhipi.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163hzkbmzsh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163qugeoblz.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jjmwdgsc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163eqhoweht.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mrlneyow.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163bwvoluly.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163zrkbwosh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163zbkyzbak.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tuncpafa.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163dutnhifo.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ubhqwgdo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qexvrgvx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163wxyruwzj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pmajqfps.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gedgtomd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163gjgxhygd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163bhqnhfoz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hrdcpnna.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ezafgmhl.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163nlbcnliu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163lkezqgsl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163duvyvmpv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163hyuihzrr.html

TS:   // 同上
来源：http://www.xuanzx.com/163frbhkiqv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163vmtlpcwb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163yaacwwbh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163egbqhrnb.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163rtbioocs.html

================================================================================
来源：http://www.aibaodan.cn/163yfnnoynv.html

G. 面向对象
来源：http://www.aibaodan.cn/163mcndfres.html

================================================================================
来源：http://www.xuanzx.com/163jpvksqlc.html

[G01] 定义类
来源：http://www.sxryk.cn/163xyaogxvz.html

Py:   class User: pass
来源：http://www.xuanzx.com/163aiedycze.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ycytapqg.html

JS:   class User {}
来源：http://www.aibaodan.cn/163fgmqilft.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163qbkiuauo.html

Java: class User {}
来源：http://www.sxryk.cn/163fkcgpatv.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163imgivdlj.html

Ruby: class User; end
来源：http://www.xuanzx.com/163nxuamyrt.html

C#:   class User {}
来源：http://www.aibaodan.cn/163erotueyg.html

[G02] 构造函数
来源：http://www.sxryk.cn/163aplslmge.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ethmxdnl.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163fihyaezc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163puraroil.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ijvivpyd.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163rdohbray.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163gdrdcmcz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163hinfwpsg.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163dmsrusxb.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ziljymbz.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ijnjhhys.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163bogvndui.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163yhswecfu.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163dchtryha.html

Java: private String name;
来源：http://www.aibaodan.cn/163qkaetjyj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163xsjqzrkb.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163nlrtheii.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163fjvzlrfd.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ntszmitu.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163nzusfbiz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163zggtqogl.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163pdhcesnk.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163wbneqnqh.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163vjyqwadn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rershdht.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163pevwoxty.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163exhqvmzo.html

[G05] 继承
来源：http://www.xuanzx.com/163ueygqbua.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163fexdzoev.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163jkqfnuny.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163vfcyvael.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163iwhllrzv.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163hsmjhpex.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163kegblzle.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163byhwoxrq.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163yokvakpn.html

[G06] 重写方法
来源：http://www.sxryk.cn/163tfskmmax.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ynhlaiod.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163droqyaaa.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163jbahtayd.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ckdrxzgp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163pijwexxp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ovcrmfkt.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163spzbqccg.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163taswfztu.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ylevngql.html

Py:   super().greet()
来源：http://www.sxryk.cn/163hqrgxolp.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163iplzgcmt.html

JS:   super.greet();
来源：http://www.sxryk.cn/163teoqzyir.html

TS:   super.greet();
来源：http://www.xuanzx.com/163iusclidh.html

Java: super.greet();
来源：http://www.xuanzx.com/163bhgfxmor.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163gcraxoln.html

Ruby: super
来源：http://www.xuanzx.com/163amvpsdfd.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163dgozzvbb.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163pslqxifz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163snucavlb.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163opibdorl.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163aeeruavb.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ijcvhtbi.html

Java: static void f() {}
来源：http://www.xuanzx.com/163hmttdnat.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163rnabueem.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163bsyubnwn.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163urucqnvr.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163xdcnhoov.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163ejoqpjog.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163dwpsztuf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163qaloegfp.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163krnhzevh.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ibfjjici.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163zagrlmfm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163evlrjkue.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163uyydgqcu.html

[G10] 访问控制
来源：http://www.xuanzx.com/163bhyfkrwg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163dvdruqrd.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163dclkdtav.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163pyigqhlt.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163wqcpgxtf.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163vyoyrexa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163wuenkimh.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163lkwcwhqp.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163jtcgxfxk.html

[G11] getter / setter
来源：http://www.xuanzx.com/163yloawwub.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163egcnibmk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163tawczlpq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163mjixmkjf.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ddkcrrlc.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163lsxuntfq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163lkgftamx.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163wcabsefx.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163kqsubkhx.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163xpqqufui.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163umdepzli.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163hkxwkasw.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163urpqqvdt.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163sgbihvdf.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163bsiralee.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163fapfflsq.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163etchwuzo.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163kjlqnndn.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163dajhxuiw.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163idqrurca.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163ezjwxycv.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ymcbbfdc.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163mmecxcbz.html

Java: u instanceof User
来源：http://www.sxryk.cn/163eivkwsup.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163osxphogv.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163bzgegfof.html

C#:   u is User
来源：http://www.xuanzx.com/163bpsrafmy.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163kgsjiqee.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163cgwfhrby.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163cruhfoxy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163mbetmutv.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163oqptjtrj.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163hcybdrfw.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163rvaomfqz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163kcrttrag.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163tbgrdqaj.html

[G15] 枚举
来源：http://www.xuanzx.com/163tfyhmick.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ixgjsvcd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163wviqrlkx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163xkorsfzy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bjtlshii.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163vgwimxwi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163wborhdqh.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163biscgeex.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ututcqxc.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163xfzqhikh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163igepyokv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163xbhuclvf.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ilcvckqq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163sqsgyncm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163azjwpaoe.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163pwfpgghg.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163mbfpxfyh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163jzphfzzp.html

================================================================================
来源：http://www.xuanzx.com/163rhbjogzk.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163fyvxhjzl.html

================================================================================
来源：http://www.sxryk.cn/163rqtlejra.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163cwvstlio.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163njrqtvgc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163pkzoyrje.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pxxvmmxf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163uwkpyqyp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163dpqltkqb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163zydvweul.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163inlztsnt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163iznerwro.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163fldgduoq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163rswkbymo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mmlgpdzk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163odtyntng.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bcnpbmsf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hfxffkvq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163dvzpiqlj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163wwiveadt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163gjobttpo.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163muttqeng.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163zlndlniq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jblgmtzd.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bskvmidp.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163pgvktfun.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vsswecxp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163qovxufxn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163bzkhcbmi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163uzwkvgai.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163rfxjiroq.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163veiyxiiv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163kpxkgqnd.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bihovxbe.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163odlawwdx.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163sjlsmlcq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163dgufwvxm.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163rdglxxjs.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163jbehplzz.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ztxfqmue.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163igemvmmy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163pzrcxxbs.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ekcorlys.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ukvzhrfx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163hocrsctp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163zmgauxmk.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163iytobfxm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ydzooqea.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163jmcblyax.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163usbrbwza.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ajdosudm.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xzsdfhpw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zfzzqkst.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163rqrfqwdj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163suopguxd.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163xhtsluap.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163fadoipal.html

[H07] 断言
来源：http://www.xuanzx.com/163vsfcfdou.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163faxboban.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163pmganhtj.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163doajyoic.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163gdycoclg.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163avtquctg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163svcuujar.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163fthxlwjm.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163gzlulftv.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163pblfuaub.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163hcxgnbuy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163vynwtggx.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163gguzacfp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163vascbrqf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163gbolhdke.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163bvvzlheu.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163elbpqpwo.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163cikixiwq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163pclqgxex.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163hcynymop.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163dawvymfp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163tjrmuivl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163vczqtacr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163oncrnxkp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ymiybqpw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163frmzfxhz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163wnnrqwmu.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163txkatpxe.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163aizujclc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163bhgsqrin.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tmvyisti.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ifymnvmq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ipheiecw.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163mrvflaga.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163cvzjuasf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163fpbvfogl.html

================================================================================
来源：http://www.sxryk.cn/163fnmujapc.html

I. 正则表达式
来源：http://www.sxryk.cn/163yszfohhw.html

================================================================================
来源：http://www.xuanzx.com/163dwrytmjx.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163aiwhvifk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163zbntzplp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163oqrbafzv.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hwqjjeqv.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gkhzmrbp.html


<!-- 参考信息 -->