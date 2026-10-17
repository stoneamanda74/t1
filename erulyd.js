外链999!wailian999！

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163niapduzn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163xqhmimky.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163yerkmrwm.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163dabrtwql.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163rvyrwloa.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163waeraenh.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bgawwrxo.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163jwwitdwb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163nqdjlprt.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163fwihbwcf.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163taduzuah.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163nselvhja.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163zxfxigxa.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163sbhtlfzh.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163qrttpfsd.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xdbzgvrq.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163sjivhkos.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qsnshpvi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163dzrkvhqs.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xyvkfvgp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163pvswhcnv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163wnhricek.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hxrrfazb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163xjpfvpfo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yyaiemum.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163zklxhpum.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ctczsasf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163cnwigotv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fyynjktr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163gmuzncpq.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163cdqnbtei.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kryqimjr.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163leudbcaa.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kqigwttp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ctytsvsb.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163rrfvgjny.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163bmgbobwu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mwyvykhp.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ezpwewfl.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163bveofqkx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163buxbbogu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163fadqhwwu.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163fahuqiul.html

TS:   // 同上
来源：http://www.sxryk.cn/163dbmklqgr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163hmfzmcov.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163obojkwfd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163qrdqpmoz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163mqdwnfvw.html

================================================================================
来源：http://www.aibaodan.cn/163khmuhshi.html

G. 面向对象
来源：http://www.sxryk.cn/163tussjndw.html

================================================================================
来源：http://www.xuanzx.com/163rzkhvltm.html

[G01] 定义类
来源：http://www.xuanzx.com/163zntijppl.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163dnpurpua.html

PHP:  class User {}
来源：http://www.xuanzx.com/163kjyqzzqd.html

JS:   class User {}
来源：http://www.sxryk.cn/163jrjzvqms.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163jrmkpnwk.html

Java: class User {}
来源：http://www.xuanzx.com/163kuvdpwhr.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163doihwoko.html

Ruby: class User; end
来源：http://www.xuanzx.com/163zbiigwkx.html

C#:   class User {}
来源：http://www.sxryk.cn/163bzczcijj.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163balrdchq.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163xwidhbyq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163wryaszbc.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163yrfzvgpn.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163pbdjvxnr.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163tkrppxyf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163vjuqmtqt.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163pzjhvwki.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163gcjqdkzd.html

[G03] 实例属性
来源：http://www.sxryk.cn/163vgzaateo.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163sykuhaoq.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163uddxylim.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ioamvmlp.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163lnrggdjn.html

Java: private String name;
来源：http://www.aibaodan.cn/163yrywhmqv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163qsujotvi.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163uzzohrss.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163cvwagzex.html

[G04] 定义方法
来源：http://www.sxryk.cn/163dgsjkgli.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ibadxfmx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163sdrekiog.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163xgkffncl.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163yznqwoui.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163qbguvius.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163rgxhorud.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163sopkixyo.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163zgtoaydu.html

[G05] 继承
来源：http://www.xuanzx.com/163inajewkt.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163fgkhrxaw.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163mruqnzma.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163utnzcvua.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163jpyjchll.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163vcacbswq.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163zsonanfn.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163kvtvrtct.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163rpbqkkqy.html

[G06] 重写方法
来源：http://www.xuanzx.com/163fweqyvwp.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163uvodrpud.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uoakewyy.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163jfbywpaq.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163dopksggv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163cmsmetbv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163pkuwyixj.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163anbsxerx.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163rypvcbbz.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163nfluuamd.html

Py:   super().greet()
来源：http://www.xuanzx.com/163rnvmjkkt.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163zfbatliy.html

JS:   super.greet();
来源：http://www.sxryk.cn/163thfmvmzi.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163sozaankm.html

Java: super.greet();
来源：http://www.aibaodan.cn/163bwcbxxov.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163wyoalcrb.html

Ruby: super
来源：http://www.xuanzx.com/163kttgzhlp.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163aoysbxbs.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163afkepgjz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ehfecgai.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163knbksyfn.html

JS:   static f() {}
来源：http://www.sxryk.cn/163arhilfdv.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163nqxqvhzb.html

Java: static void f() {}
来源：http://www.sxryk.cn/163khpuyhfk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ukkxlzoc.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163jukzbhji.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163hxiazuhr.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163jyuwcjjk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163bsdumsrv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163gjmigwqr.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163xgbvgcyl.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163gekadevv.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163lykytasl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163eqoyuftm.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163puwwdcec.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163qircelpw.html

[G10] 访问控制
来源：http://www.sxryk.cn/163pfohowzi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163yjjkzvjh.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163hyxnxfwk.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163oyeopciu.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163prqpyakr.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163rhvaqjco.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163qpttjlbr.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163yiijophx.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163mntfwjnn.html

[G11] getter / setter
来源：http://www.sxryk.cn/163edqixcjt.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163tpmjmmzb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163dpubazvv.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163zawuxipm.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163rswiphct.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vssdslgp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163haiusjcw.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163nrxkbmyk.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163cltdwyso.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163twggapiz.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163vzmzwejh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163vmyaqhkj.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ttntjerd.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163csjxrami.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163noxmvivu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163muybejck.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163zruigizr.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ixemdlmm.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ienzcqmj.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163jkeqbwbn.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163popgjywz.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163phgofhnt.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ergituym.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163cbqsalnk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ftoiqnqd.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163kelvdjtr.html

C#:   u is User
来源：http://www.xuanzx.com/163tlpqfbfw.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163knvvezwi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ohbkknuv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163qfdmkdvs.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ehmyoevg.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163orudygvj.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163fazshkmt.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163mtrvwlxr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163eertqslm.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163oahenfyz.html

[G15] 枚举
来源：http://www.xuanzx.com/163ajymqzfk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163zrwesigi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163tasbvpsw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163alcsjfew.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zjrcbinc.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ipelrokh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163nozigkow.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163bzefluib.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qywynfxm.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163seybhcwl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163lxgbuznl.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163vsfmnbzf.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rnuuovfn.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163elcppeup.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163owawslzm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163uscwhlmi.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163tggyoccg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vtgbywri.html

================================================================================
来源：http://www.aibaodan.cn/163kiwazfbk.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163okyoekav.html

================================================================================
来源：http://www.xuanzx.com/163mguzsgyl.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163grrpwurv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163kxtlcnoq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163nlsvmtlx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163mmagtaod.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163iqmtwqpl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ddnrbviw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163qssmlfkk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163sidzabmm.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163mhgsxoli.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163vmedsvnf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163tdgvylfs.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hupixied.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pkynszoi.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163plwzydot.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kqhrbtns.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163spbbyymo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163qlurjtga.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163vwhqudey.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163mtclyelx.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163mldiryve.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163teazsyqp.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163amjefygn.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ehcidkqn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ckngvdyp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ocuicoxd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ebioeiep.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zdvvijgr.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163vtwruydh.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ikfscoyf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mzvryzna.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163xebkwfjf.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qqohhdjg.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ilfolgzg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163tcfylcgs.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163cbbqfuar.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bvddonbo.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163umfhjmpk.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163buzetobk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163qnagdmjd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ukaimpdu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kyfqtymm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ezuvzafh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163smswmory.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163sbnanvdh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163cemdsgzv.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163loqhvorf.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163bgroeato.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163zeofjacq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163socmkgur.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163btodckki.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163bswanbcv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163wpemqwiz.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163cgbqsrny.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163fjwddqoe.html

[H07] 断言
来源：http://www.sxryk.cn/163uuhxgpwa.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ucmctahf.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163hqmilomj.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qlqmbadk.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nngomyui.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163solrgatr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163kuenyqdz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163sqbolqnf.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163rlsogasq.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ydquwxub.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ofomlhcl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163waxyvzsw.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163umgblvcm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163xbhjdbpf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163lpzgrtfw.html

Go:   err.Error()
来源：http://www.sxryk.cn/163rhyztrho.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163aduxwbwn.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163qeyfwcci.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163bvpceeqi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163zecyxest.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163bnswwqeq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163umpshpzg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163tljagcae.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163qvpxqtul.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163uhlmfdqg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163kmtznmsm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163eqcayfbw.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163xevmkxfn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163zrmdhydn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163plxirvgu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wutqbbab.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zofnulwp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163aqoybeya.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163pytdwojf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163grimaxgp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163jvtsrlfa.html

================================================================================
来源：http://www.xuanzx.com/163tyrowmuw.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ykeolbqv.html

================================================================================
来源：http://www.sxryk.cn/163qmbjcykj.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163fnbphdjd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ypsqoopu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ifncdcso.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ioyoxmuv.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163przwpbux.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163pvzkozlx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163khhzelmw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163lgdrmpat.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163ppghtdir.html


<!-- 参考信息 -->