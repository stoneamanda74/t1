外链999!wailian999！

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163kmqedxgf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163xgftkgyj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qauqeqtq.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ztjfxtra.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kecmkisd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163acaighdv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163uafntwir.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163rouocvuf.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163msfwbyzt.html

[F06] 删除文件
来源：http://www.sxryk.cn/163pveygamw.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163sqqjzmfw.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163jbwmpdzh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kniwgdsa.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qdryekvr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163syvatmyw.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163aciorxfu.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163kqwjmgqf.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163gaosxjnj.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163kzvlidun.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163jpqzbtqj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163umhzrwlz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163mihianym.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lfohaklq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163enrwvdmi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163sjzcevqw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163xonegkgw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163qbfoeybn.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163gdlbiwci.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163khxzcfir.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163mhqtgcap.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gkkbcazy.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163mtijocpi.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vpsitvxl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163mwnxbizl.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163kmrmwuov.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163vvlfqopn.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163xwhgdwkj.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163gwkhwzec.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163pptqqxsi.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lbhonkpm.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163aixmpoiy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163whkpqlwi.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163jxdnswyr.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163afrsyllt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163knymzqnp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ynfqcivn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163loehovgc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163qbndmzvm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163voyiyggx.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163sekbxxfv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163hmranflf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rkvjqyem.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uzsscoxf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163pnslhujh.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163yxfzpcxh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yuabhcre.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163vecdpznt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pjuhmzfd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dfutbbzh.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163hpqnqqfx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163vnxheuky.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yntytzth.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ybigdlaz.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ehwmlxgz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163caxmtdyp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163kfbyemaz.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163iomwjiwx.html

TS:   // 同上
来源：http://www.sxryk.cn/163cegglfan.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ckngtecy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163hzxuysob.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163tufrrulk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163agpsixnp.html

================================================================================
来源：http://www.aibaodan.cn/163joeojiiu.html

G. 面向对象
来源：http://www.aibaodan.cn/163xkwxxtmn.html

================================================================================
来源：http://www.xuanzx.com/163dspjflmt.html

[G01] 定义类
来源：http://www.sxryk.cn/163nilbhogl.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163jkufrspv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163abkuvook.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ewspjhxg.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163uppopdhz.html

Java: class User {}
来源：http://www.aibaodan.cn/163qskgsfkr.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163genzrngz.html

Ruby: class User; end
来源：http://www.xuanzx.com/163tdjigeht.html

C#:   class User {}
来源：http://www.xuanzx.com/163gfpaynzc.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163zgigpdfm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163wxbzrvds.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kiuadwjz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163nlygdqlq.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163oijgsgnt.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163efjbxoqb.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163cnbkhsyl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163mrqepwss.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163chelotwc.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163kkferhcq.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163fzasuknd.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163jfoxxiir.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163nthixrdy.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163vxnubjex.html

Java: private String name;
来源：http://www.sxryk.cn/163edoyjllf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163trlwyutv.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163bxzewoht.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163kxzzepvq.html

[G04] 定义方法
来源：http://www.sxryk.cn/163mvqgtfgf.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163zdwgaitv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163peafwegs.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163rtkkfyau.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163owqsgalk.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163oowtqgoe.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163rcrunhsx.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163gfxmcoep.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163ekywhbly.html

[G05] 继承
来源：http://www.xuanzx.com/163wudrxewr.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ssufarvc.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163ldekwjlp.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ijdyuvbw.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163igbelfnc.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163afiwinwx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163osqakdgw.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163jbptxuxa.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163abhzjxzg.html

[G06] 重写方法
来源：http://www.sxryk.cn/163akojetuf.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163qstlpzht.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jmsxfmct.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163vfkwfubg.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bgzzagda.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163pvoysuch.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163nyjrngqo.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ofgtsijv.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163xxgvciea.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163xqihqbgs.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ityhzlbj.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163uibgnymu.html

JS:   super.greet();
来源：http://www.xuanzx.com/163hxuclngr.html

TS:   super.greet();
来源：http://www.sxryk.cn/163swsgfkdv.html

Java: super.greet();
来源：http://www.sxryk.cn/163pfdslkgc.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163jhhurjwa.html

Ruby: super
来源：http://www.sxryk.cn/163kzeunmtx.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163efalddsv.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163oeygdmdi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163fiqxciez.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163dwtkamoy.html

JS:   static f() {}
来源：http://www.xuanzx.com/163mkngiqzf.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163meyqrblg.html

Java: static void f() {}
来源：http://www.sxryk.cn/163tfrhchfi.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163dreeswef.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163eacjkrlz.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163wimgrdmw.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163adayzocs.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163wiyevftw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163cahecmgu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xbcrawil.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163zzvjvbdy.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163tlphchut.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ienctqqu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163axkcxqxz.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163xvmxbolu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163hxwsvzbq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163snogekyw.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163dinydeqz.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163bhetqzxk.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ejolojzi.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163fckjihif.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163fxuxdnxj.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163qpjcxuzy.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163couvtfwz.html

[G11] getter / setter
来源：http://www.sxryk.cn/163dozpnrpr.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163nzemgujk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163dfqzdsoz.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163tfoitvww.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163dfeedxzt.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163mxmcujzc.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163wepestdf.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163gobawsgj.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163npesovrw.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163fjxszcfz.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163zwxgstcv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163emlmazrp.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163dnpnvjaa.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163murcbzvv.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163usrhovtx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163qhazsexd.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163lnnypknb.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ttuvvasm.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163yfeylrxz.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163wlwlrjfo.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163titstrbb.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163etkungsb.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163kuqrryfx.html

Java: u instanceof User
来源：http://www.xuanzx.com/163geuqjgrk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qnybwtmt.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163csqoocth.html

C#:   u is User
来源：http://www.xuanzx.com/163vvuoorzn.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163jjzammpn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163dlnzedvk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163xhfexizt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163xjpbolub.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163zyiipulh.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163fqxsxtbd.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163aqpkpmpe.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163vgbpbogi.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163sowpfihj.html

[G15] 枚举
来源：http://www.xuanzx.com/163ufhoalvr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163qlxtocfb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163itdhqgcr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163mqitypvw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tajcclpm.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163cgcfkyrc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163pfvktthd.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163zmqqfoau.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bsxpjave.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163bglqcmvk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163sdsvypte.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163lpgmcgea.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163cgsrsuap.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163bolfoczh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163awxzcxar.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163xbrolada.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163avmmnsix.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ypzhbhym.html

================================================================================
来源：http://www.sxryk.cn/163ugybaqgl.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163azbotakw.html

================================================================================
来源：http://www.xuanzx.com/163xnzqyxlq.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163hdjgtyhj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163qubxpery.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163vnnsfwts.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zzjboxas.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163bnvqfblf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163bulnzdug.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ceoljinl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ezlymptc.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163blfwyevr.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163bzagjgty.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163tgxarfgb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jdhyhsdp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mubxwbbz.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163onhcjxue.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163mnvcitjw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163pejewmqw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163tznldvkg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163yuuktmaj.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163xpsxjtmb.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163vxivzncv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163sqlzwqbk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rbrdaysm.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ctrvmjxy.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163wolqzrvk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163gsqmvuuk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163oywgjjiy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163brpqisqd.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163fybvkhwy.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163fxxznoku.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163pbdgfvbd.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163iuzecxux.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163iqzqzymr.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163jpqigbhu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163iktevxgg.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163wyvprdcy.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163gkpzizif.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ozyavapd.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163fxvtuehj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ryaumyxi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cxnlgmxh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163pwqrvblq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163nmpunxgp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163ufzoeyyl.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163gbglfmml.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163fprtraun.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163qnasnmvm.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163wdfyhsgl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163eoqfetbq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zlgwwjtt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zcieeefe.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163vyzlalez.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ipiixnem.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163jfapxsaz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163lxgunmpv.html

[H07] 断言
来源：http://www.aibaodan.cn/163wdlwfqyq.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163myjnaqkk.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163utfngcci.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163yikbobnx.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163djisxsjq.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163dcbtisvx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ricdqpul.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163rebyesbj.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163eqmdsrfo.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163tmlxfmur.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163gphrfsuo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163helzubwc.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163jsltbbed.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163zjevbpxu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163hmmbdxyc.html

Go:   err.Error()
来源：http://www.sxryk.cn/163aalbttkk.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163zfbczmgm.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163vhasnvrb.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163dhmwnbmb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163waqpuxnk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163oynyydhn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163scxgsysf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163qypgsibs.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163lctdhzki.html


<!-- 参考信息 -->