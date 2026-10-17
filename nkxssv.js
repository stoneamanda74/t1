外链999!wailian999！

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163trufltlx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163fftaosyh.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163oyqbflxy.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163mgiojwqo.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qpjuvjqr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hsyzlmla.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163pyliyixm.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163kmfmkhlz.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ahebzkjt.html

[F06] 删除文件
来源：http://www.xuanzx.com/163xszpwydj.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163wjpyzthl.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163kmhdsikq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hxjhhutj.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bcufrsdu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jdduhwbk.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163xayfmflr.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163yresonsm.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163gsbbnrro.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163qttlntfw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ilgzdasn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163wngcvnzt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ivyoyjwm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pilaempc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163oxnfmqxc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163bloqftgu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163yangycag.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163ksyvjvsw.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163tvftljiq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163zmkboqwt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163lqqenhrg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163yvnafufg.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163gfydenxy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163btbcypvc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163mmrxjfku.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163uxkabssb.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163hnvbsfaf.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163gixhazed.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163aqkyohey.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163rzyigcya.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hkdoshws.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163iskmbmgw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163afojplvo.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163omllbtbz.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ysnmcbqy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163kuikldzn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163vchcosqu.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ldrgqxaw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163nnllaohl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163abiacech.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163rxcaswur.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163wmaegujo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163xensdnvb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kaijakrr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163fyjkpdui.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163snmazgnj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vqqpxfbv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163vbxdxwsl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163snlkwbes.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ubhbqnpz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163gmbthjez.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163dqmdjslv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ibanwxfg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163tvestmty.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163qzcvmvjk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163rjkrmsxi.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163cewtyong.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163fnmptgsf.html

TS:   // 同上
来源：http://www.sxryk.cn/163atcwoiic.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163qcodoczx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163bykytfch.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163nprtkiic.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ucytjitp.html

================================================================================
来源：http://www.xuanzx.com/163bysdyfjz.html

G. 面向对象
来源：http://www.xuanzx.com/163pbwzyzyz.html

================================================================================
来源：http://www.sxryk.cn/163ywpempwd.html

[G01] 定义类
来源：http://www.aibaodan.cn/163grzhxdmi.html

Py:   class User: pass
来源：http://www.xuanzx.com/163fubwqtvj.html

PHP:  class User {}
来源：http://www.sxryk.cn/163zxnvjsgv.html

JS:   class User {}
来源：http://www.aibaodan.cn/163yedqpbaq.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163tvacleox.html

Java: class User {}
来源：http://www.xuanzx.com/163tblzfprj.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163olunrgri.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163odewhlvf.html

C#:   class User {}
来源：http://www.sxryk.cn/163qbtkubvd.html

[G02] 构造函数
来源：http://www.xuanzx.com/163nzzcvrtu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163xlfqwrkq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163fkejesdm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163bocbylej.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163zxrwhdjw.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163rlxwxyal.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163wmphcdhw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163exngmfsn.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163gydgpyzu.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163uxktctnv.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163rtgtstvq.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ghevrbam.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163pamgcxee.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163uqvspsom.html

Java: private String name;
来源：http://www.aibaodan.cn/163ouxkanhg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163osomrxml.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163kbaxmhqm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163wfxchcxr.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ycytyfcw.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163auzzjzml.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163tlribhab.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163dlddooft.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163dolakecq.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163gegtkets.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163dnqylsrm.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163vdxizsjl.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163lseaeylu.html

[G05] 继承
来源：http://www.xuanzx.com/163dhxwbtew.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163rmwgvtgw.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163tixfllrr.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163hmprvklc.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163pduysqbm.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163iigfrrjf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163rtxrkfqf.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163dlthdecc.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163sivdhtws.html

[G06] 重写方法
来源：http://www.sxryk.cn/163sudizwtr.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163vhrrhebs.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vtqsuvle.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163vhqjpceh.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jyafhstl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163arezigas.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163rmmgiqvp.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163pmxtvewf.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163djhfaupg.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163owjzdhgc.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163pqtuaego.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163bqegqbqo.html

JS:   super.greet();
来源：http://www.sxryk.cn/163qtbgxhse.html

TS:   super.greet();
来源：http://www.sxryk.cn/163hvtwfwji.html

Java: super.greet();
来源：http://www.aibaodan.cn/163neemsdel.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163vimkqvsm.html

Ruby: super
来源：http://www.xuanzx.com/163lyxxisne.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163gqfnkgmg.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163oqajdfwc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163rqbdkxwn.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163gtwigadp.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163diyjkivx.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163ukzyjgqu.html

Java: static void f() {}
来源：http://www.sxryk.cn/163gaokcpps.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163vszqkken.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wvplvvan.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ouczjroz.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163jtwaquju.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163bevxeoek.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163doxgqegf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163xpbkjydk.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163dvyqhhfj.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163xjkivgcc.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ewvqkgix.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163duciegmw.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163oclteccg.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163kratoykh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163xffvtbgc.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jwmayzpb.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163vmtsnzjs.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163hhmcaxwz.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163apgwxxgm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163rwwyaghd.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163olkwyytz.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163iklsgkky.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163gujaztzv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163dqtfhifd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163uxxqrsci.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163lxtapwdu.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163rmlwflgg.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163wwnqefos.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ovipqugb.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163yqfqobug.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163dynqluik.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163pqpzkzcf.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ljvmiyny.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163wuwtsywt.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163uqgedpga.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163zzseexao.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163lnwcotzn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163hecktrzy.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163osxhqohb.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163gkxxkghz.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163tehgslhc.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163afkwhcrj.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163tkzcbxll.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163vcoallwm.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163djlfpvrw.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ylbvyonm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163doseycmu.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163wrsgmmdm.html

C#:   u is User
来源：http://www.aibaodan.cn/163gesgzfqg.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163xihfeyoy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163xzfcscoi.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163tybfyzio.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163pibjhwdq.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163wmjkwprh.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163wngtargq.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163errdxkzx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163mchemwbk.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163tndzlfln.html

[G15] 枚举
来源：http://www.xuanzx.com/163kvbnlzis.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163nkrjsmho.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ybgnouhb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163rrmjpqwq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163mqkmpfdn.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163uilxlbpg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163pwflthjj.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163egdikqmw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qamibxuc.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ahcqmymy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163onoceduk.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163rrhngqzu.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wiiqojdw.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163dmvdtfqz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ouclwegv.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163rhlsnpwl.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163dghdjvot.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163cwdgetep.html

================================================================================
来源：http://www.aibaodan.cn/163kcxrpdns.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163wpmzuhbt.html

================================================================================
来源：http://www.xuanzx.com/163xggnfogx.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163pbycyqgr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ckufnwml.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163bcfwajqm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163bqiburrs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163pjlezzhg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163mcsxobik.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163cxweyjga.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ysdyoail.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163dofopsop.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163zerdjnoa.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163zqstvfjg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vqybrcwj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cisezbwl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kwxaciub.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ckhauwyv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163fuskafsf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ggtdsizw.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163orjxngwu.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163lidmaerl.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163jftbiigh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163aspinqqv.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163sbvvwmul.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163uvjfjjsk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163yycqxqmu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163fxwgddvm.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163bxpvyhlw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zwfaebge.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ymfkwnef.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163fsczamnm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163lomhfdle.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vvjgtqqq.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kjknrzmm.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163jhuebhtr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jpqvsiwx.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163vjhczfhv.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163lsawbfgv.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163tgxaozww.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163poxjzpro.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163aqlmrtzy.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rmdjtdfe.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bgztpshl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163koxuwhhb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163mmwbdxal.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163fuejpwnt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ijuhsbfk.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163kievnwvm.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163bnzngsls.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163sveqdzbd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xcpwzyvh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163oqwktutc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163yfpfxtph.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163nwnabxwu.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163dgurumnc.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163tgcgcyue.html

[H07] 断言
来源：http://www.aibaodan.cn/163dzvdlwbq.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163drtnqtzn.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163hlduzxta.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163vtgmndpb.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zqozyfgs.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163rbfuwqsq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163xgsswoti.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163dzchjsmo.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163vbkvzabl.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lkiqtpuh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163gxybkdnv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ilaxnhpw.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163tdvfthse.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163mnhkejbc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163jkxdrahe.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163rbygxjls.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163yosqzchw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163aohthqof.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ycyvqrxl.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163anhakbvb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163gikwbxuc.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163uulcbpon.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163odmyqnfl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163icgjyivc.html


<!-- 参考信息 -->