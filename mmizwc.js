外链999!wailian999！

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ryfkzwfn.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163axchzsev.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163sbcwoews.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163npaqtciv.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163havsterj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163cflyuwlh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163mjyhlsgy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163fiyyowpm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163cxnttqiy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163uezbatsb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163zoqghzdh.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163vkhjzwlx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vllggxen.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163fyinivix.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ezuxtbeg.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163nvkjyxcz.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163fcvmsjqc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163hssfwdtk.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163rinpumft.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163squynjbe.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163lomdoeuh.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163vwzsijpt.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ofywkrrj.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ncxzgzmx.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163fsfttzuz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rgjiomya.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163aiqpycla.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163zfzulpnm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163curozjsv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163gqjdneww.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hwjkxdww.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163wpverjte.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163eiohhcvq.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163qavwkvpu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163yemifpvm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163grkuciov.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wzteukoo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163digjzfdw.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163kifhyeho.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qupmbwxp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163vwmysabr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cacwqseh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ytoalyen.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163vbijouit.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163cwngzylu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163elmumvmn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163xcnazeor.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163rstexmfs.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163jvaqgezh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163mijqazxr.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ebehjpsf.html

TS:   // 同上
来源：http://www.sxryk.cn/163ucvhueuc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163gegqyjhw.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163xoieryra.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163wxhavltr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163isysjjbc.html

================================================================================
来源：http://www.xuanzx.com/163tdffwzgp.html

G. 面向对象
来源：http://www.aibaodan.cn/163rirmzhqc.html

================================================================================
来源：http://www.aibaodan.cn/163vdkjdzle.html

[G01] 定义类
来源：http://www.xuanzx.com/163wwzarpdk.html

Py:   class User: pass
来源：http://www.sxryk.cn/163mtkquyop.html

PHP:  class User {}
来源：http://www.xuanzx.com/163yzdkjcsm.html

JS:   class User {}
来源：http://www.aibaodan.cn/163wwhwmgag.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ucpztcvk.html

Java: class User {}
来源：http://www.sxryk.cn/163rgjscuzh.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ygmavkbt.html

Ruby: class User; end
来源：http://www.sxryk.cn/163yowuklox.html

C#:   class User {}
来源：http://www.xuanzx.com/163tjllsldd.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163yhxsemee.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163tzadmkcn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163plpdahxd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163vccdaepp.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163slbergxu.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163qiyjiegc.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163apcyrajw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163albtikjc.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163utgtvtqr.html

[G03] 实例属性
来源：http://www.xuanzx.com/163hwvgmdko.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163lfbicsmt.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163abuwabbc.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163fmtudqeh.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163vibjmyfu.html

Java: private String name;
来源：http://www.sxryk.cn/163ozfplezx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163tofddnfz.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163yzjoarbl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163bwtwcopk.html

[G04] 定义方法
来源：http://www.sxryk.cn/163bxlffuyu.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163qvqftxwx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163mjifiyns.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163opcqipks.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163fkuzuxuh.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163abfltfyp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163pzrmgqsa.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163zcartqwr.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163izxuryoa.html

[G05] 继承
来源：http://www.sxryk.cn/163ejdblzew.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163nnenjkzl.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163lhnadtmr.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163dsjhbzmv.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163aouepbwq.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163hfhagyzr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163bjgcklsq.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163nkkykifc.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163bzfikdxk.html

[G06] 重写方法
来源：http://www.xuanzx.com/163tcakhgct.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163frbzbysu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163iyvxantn.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163sqopxqfa.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ziafnltf.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163syuifpfz.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163nrkzkaje.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163cfkzdyyo.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163xubogtzd.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163xwucsoiz.html

Py:   super().greet()
来源：http://www.xuanzx.com/163rzhafmqs.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163kqobpihu.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163jpgnpuoh.html

TS:   super.greet();
来源：http://www.xuanzx.com/163doqarzkb.html

Java: super.greet();
来源：http://www.xuanzx.com/163inkrnkzb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ljvziofz.html

Ruby: super
来源：http://www.xuanzx.com/163rnazgrdp.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163fvsppqmm.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163ohotasdo.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ytdlqhgs.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163oshsvhnj.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163azhagrhq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ifltyvnm.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163zoarbtqd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163cgcjonkl.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163xxkqqfsf.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163zkonslre.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163rtrjixyo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163jztrcjpi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163firxypqt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163obzjfeyx.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163drszbynx.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163xswgmlfe.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163imnonacn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163kpxeqojn.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163aywxddft.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163rymiygva.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163xfgcthmj.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163leafzinu.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163mjcxnonk.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163xjolohtw.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163zkbodevc.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163vjpfyjmk.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163wljzguwv.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163lihskewr.html

[G11] getter / setter
来源：http://www.sxryk.cn/163oeaymhes.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163sdoqoysz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163vdirpbpo.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163jadroaju.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163gtikusqt.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ivmrqtsv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163dwscsohv.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163oafbqhnj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163mlamjrbm.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163oljklnuj.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163odnzyyve.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163drolnihe.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163dzbnqwum.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163dwgbdecs.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163dtisolcr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163jurtmzcs.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ajobaqcn.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163nsltiaqd.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163mezaweej.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ioajbfdg.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163mtitjppi.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163outixnny.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ebbwdfmn.html

Java: u instanceof User
来源：http://www.xuanzx.com/163uckjrwaw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163kagiltfd.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163bkxaotdv.html

C#:   u is User
来源：http://www.sxryk.cn/163koltzppl.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163apdwqshi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163zqujmtzc.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163tvpcdgze.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163nqvuzfls.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163nddpkxsm.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163knytotao.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163dywshegt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163xrgozmqv.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163thibkswl.html

[G15] 枚举
来源：http://www.xuanzx.com/163sktilssc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163jvppatdq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163fhvrvbth.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163kwviibst.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gfjgbkdd.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163egmxzgxi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163cfifwkmt.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ikqukaaw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zhooxyqj.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163qpuxjuhj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163yqwwosmb.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ksunufcj.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xjkgbmcc.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lxctycez.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163akckiokz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163gfurzntp.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163qfbzafea.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163wlkiqree.html

================================================================================
来源：http://www.aibaodan.cn/163vjretllw.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163dqdfeggu.html

================================================================================
来源：http://www.aibaodan.cn/163nwtpdgss.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163duxxipsd.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163vzhxuncs.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163jigcpkzu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fgofvrep.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163hclqzufv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163veyjissg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163mrawulbh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163tvognvqb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163qblyyxpu.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163ksleumkf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163dktjubnd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jizyuofb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hxplyqnw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hlagbhlr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vxbrpwzy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163lstgirsy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163vswyaeqw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163llpbxiuz.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163lnnocvkp.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163pzkuhpng.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163eakskvuu.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xjoawnlh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qjhywgad.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ywnlxxqv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163sfhgqsiv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ykmijhxk.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163zxrivhro.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163jvehsciy.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ylcabcuw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163brqyheya.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163uyzwbgfj.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163nvvwlxjw.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163tmcvitis.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xpcdsryp.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163iheqhcwy.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ldvxdreh.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163eedqfzaa.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163gjqwxdmq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163uroxabcl.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163njucaepk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163yvyoscrn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163jiwrcchg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163zgcldyau.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163pgsffmtf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163lrtnnqdw.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163nlwswemj.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163tavqcwzr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163byumjful.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163alhrccac.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163djsoesvn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163zjzctycf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163tjtuqxhi.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163oktbpmbp.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163mbthlcge.html

[H07] 断言
来源：http://www.aibaodan.cn/163cxyqbock.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ravoohff.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163fwjuskwq.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gzqcbtzx.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163natsuqdh.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163fybndnce.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163uftwvzmz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163bqebzvij.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163akcqxxyc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163hnvagdqi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ejnnqlkf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163giwxnnft.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163uypsqaol.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163fouzkzkj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163uljkvdil.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163bsertvlf.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qqurzyyr.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ofsabwrv.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163huymrewf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ofpagyit.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163nafqnlco.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163qrietrbl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wytafzxj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163nvzjnlyb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163rbtkmkax.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163lavkxlvv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163cvxfzejf.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163dioatgzq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163evbcfquo.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163qicdtxum.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163axsxfmpy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rgmxfphk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163eeacnfdt.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163badrbkxa.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163xiwvsbio.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hhylsjru.html

================================================================================
来源：http://www.aibaodan.cn/163jhtfggcz.html

I. 正则表达式
来源：http://www.xuanzx.com/163uzknmyym.html

================================================================================
来源：http://www.aibaodan.cn/163fcghcqdw.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163euavpxif.html


<!-- 参考信息 -->