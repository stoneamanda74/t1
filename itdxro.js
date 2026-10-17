外链999!wailian999！

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163bsgyocuf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ifsllcht.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163zjcfrzpq.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163kvildmcq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163dmdzrwsl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163cdqnonjn.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163oxznwnlq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rcjhhula.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163xdmburbz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163dhigzciy.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163vsogjytn.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163nkqiudsn.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163refyquco.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ekqicrou.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ejmmbmko.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nxlhuhxl.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163snamibdi.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163okuwjzkw.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ddpfahnc.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163vqsjdcwn.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163dxcsufqg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163kfvsnisj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163frobvcez.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163tykuokji.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163tpkexeas.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163sinadbtd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163zhjzgpxf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163wjwwclim.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dnvisliw.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163wklpqtwq.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163azlyndsl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163auwbazjf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163elzexoia.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163tzihmmqu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gpbcqkpr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163zssuouce.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163oyoyuoiv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pziuyrha.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163dnhajtzj.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163engenrdj.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163rqzikjjb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163spzrmefv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ffesazyk.html

TS:   // 同上
来源：http://www.xuanzx.com/163hlmlhfpc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163drudjskx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163vhsdehqe.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163tkhhpfib.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163fffmwzlr.html

================================================================================
来源：http://www.xuanzx.com/163mjsuhjya.html

G. 面向对象
来源：http://www.sxryk.cn/163ruhtsfdk.html

================================================================================
来源：http://www.sxryk.cn/163ncnqepqe.html

[G01] 定义类
来源：http://www.aibaodan.cn/163rvemkiop.html

Py:   class User: pass
来源：http://www.xuanzx.com/163dtfhobnv.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163opcpxwij.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ggdhxreo.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163qoklgprt.html

Java: class User {}
来源：http://www.sxryk.cn/163oouboqxc.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163qiraibus.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163mfdewnjb.html

C#:   class User {}
来源：http://www.sxryk.cn/163bnrshumm.html

[G02] 构造函数
来源：http://www.sxryk.cn/163eigsqkvr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163vynmwhax.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163qwzqkusr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163opyvxtoo.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163xyjdwhjd.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163gsqzykvd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163mazbimsv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163onpxforz.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163vtseazjk.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ruaibfxf.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ntziagzh.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163kcjsowwa.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163zyosifau.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163saffazoa.html

Java: private String name;
来源：http://www.sxryk.cn/163qqyfkfah.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163jjrfmvbt.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163jsaorhcx.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163aazwgryx.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163igkgqqrq.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163pmqgegvj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163noztjzit.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163wpgtsewy.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ixhdxzkv.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163mvqlttww.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163hynghmui.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ylvtarig.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163rnivcbwi.html

[G05] 继承
来源：http://www.aibaodan.cn/163imkhjlcj.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163wqvhfknn.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wydqxexa.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163xhfoblvs.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jiqtfvwt.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ptpaqwnf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163vjceaxce.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163coovnwuj.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163cxiywjzo.html

[G06] 重写方法
来源：http://www.xuanzx.com/163aukrtodt.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163ggiltryf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163yboinrog.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ikahmloa.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163chphjicy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163rulbdfpb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163jpofgbge.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163okmitvmc.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163dagnkldj.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163utrfkqqp.html

Py:   super().greet()
来源：http://www.xuanzx.com/163pbezktqb.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163xdaeyffv.html

JS:   super.greet();
来源：http://www.sxryk.cn/163nxegohks.html

TS:   super.greet();
来源：http://www.xuanzx.com/163anazxtft.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ezxkabav.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163kfaqskwa.html

Ruby: super
来源：http://www.xuanzx.com/163dijkyjcg.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ymhgqkrc.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ekzwnsuz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163mccqvilc.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163lgamawhl.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163tysdxshy.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163aonbvspx.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ujscwtte.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ejflddej.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163tovhioyn.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163xokwkujv.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163hpiwttts.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163caykfinf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163fckmgagu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163aioqdnhn.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163fijwnkbu.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163lpygmkuq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163hgzfmzos.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163swegmuul.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163qssdcfnh.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163spbhtgey.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163noomngaq.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163nragqilh.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163eimxiyrz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163bfdleqrz.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163jxwpqnho.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163wcktzzlu.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163rzhtjfba.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ehhpeopd.html

[G11] getter / setter
来源：http://www.sxryk.cn/163stelzcfc.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163oubcbuyc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163lvlverrp.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163pzlowaun.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163kuavwfzc.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163cjbssrrl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163rjuejkyf.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163rzplxvpc.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ruzrsiiv.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163mqszvndy.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163flpfhfxw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163otzpazmb.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163hovfasng.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163xhocutry.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163meayaikd.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ajruqzkw.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163cznbqpiz.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163sqaqonjm.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163buagmqfm.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163aurfsytw.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163hbkxjjhh.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163ghzlaqxm.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163rvsyyhhi.html

Java: u instanceof User
来源：http://www.xuanzx.com/163pobhjtju.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163drzvzgju.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163wemzatww.html

C#:   u is User
来源：http://www.xuanzx.com/163jwbzblvt.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163txdgxaai.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qrglnqjc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163dszstilo.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ulcwwlbd.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ntbuqzzp.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163korsbxqj.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163mqahkvre.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163uqqtvryl.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163jjzhcjot.html

[G15] 枚举
来源：http://www.xuanzx.com/163sgzyzlfa.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163woszsnub.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163dtcydekh.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163tkwloxcv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163rycwqzls.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163trjyrsyy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163clgaaiuv.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163uavebddc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163dxbfgbtk.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163kbtxonny.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163vniofegg.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163frcuxadw.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ppcxvfpv.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xmvtoxvo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163btazupkl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163hazggkoz.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163tsogzhqh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vaoqyvnr.html

================================================================================
来源：http://www.sxryk.cn/163ufeiigfs.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163cruvtonv.html

================================================================================
来源：http://www.aibaodan.cn/163dihhijto.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163twnjidav.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163rsimmjun.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163mgtmtnyv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163fohawvcz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163fatbybwp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163tjdfopxq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163kaedlxvx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ugfgrbdc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163msfdavau.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ywptauvw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163marqnuef.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163svpklbpd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gvbugstd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163xazilaoq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zdmcxmhf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163pwdglkdg.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163vbmraexz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163kbsyqoqz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163amcohzbe.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163yahiqztj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ayhdgrbn.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qqqoiuzd.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pxzbfiey.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163iotzsduu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163fkvlhnyi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163qrpldqzi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nghksmwk.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163vsqtnjoh.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163axvkddoc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mysbufra.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ovkmflat.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163cpeorhtw.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xzrmrnge.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163inrctarc.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ktolzyph.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163iilffwnq.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163eachmqal.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ywfoeiyx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163axgsfeig.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vcvbhjju.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163semrkbew.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163pjobcqig.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163gsdcdxuf.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163kxcutugc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163zbnkpwrv.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163mepttjgd.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163vowbshyh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163aljckmvz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hbqfwjof.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163pkddjlfs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163htavlgpw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ltuulpoz.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163soyrqasb.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163mrngnsfx.html

[H07] 断言
来源：http://www.aibaodan.cn/163kffxteam.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163vsezyeqt.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163zcnndcgh.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qqfjlcvu.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dknteniw.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163tpstuink.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163tdumzwlu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ovxphheq.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163zohnnwsd.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163xgmtcxqg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163qlchaght.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163uytmslzh.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163rkhwwhru.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163wbbqxpvs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163evhojbis.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ivyhckpg.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163mvbixrte.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163wrdrgjxs.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163lhfbaaee.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163pfurjyiv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163obgjmias.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163akzrcqyb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163paduintc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163thglfiwl.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163dgcsvlzb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163hualhsba.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163sfousjmq.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163fqbsmbwd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163pkivilzf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163fdehdxud.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xqofrfhl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163jutonaqb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163bcclobnh.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163pykmefhp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163qevxrmzg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163fboyghyq.html

================================================================================
来源：http://www.sxryk.cn/163cgypfnjn.html

I. 正则表达式
来源：http://www.aibaodan.cn/163bomteeft.html

================================================================================
来源：http://www.xuanzx.com/163jknkmmpw.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163rdpdwmuk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xzlwhdyu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163kmpdzlob.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163zlfatinh.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163likwlllj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ikowjaun.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163rbpfbiye.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163dsyllrhl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163dbhqtpuq.html


<!-- 参考信息 -->