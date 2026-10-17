外链999!wailian999！

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163knpyrvsu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163yqqgdlwm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163jurwiyxn.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163jsuktofp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163nqrybjfo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163dtshqqgw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163gitbzfck.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163bnwrlmlc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ntxadpia.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163uayggrib.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163utxtdxbn.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163lkkwyhgp.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163wvdgvlnj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163jizjkvxb.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163djlwjpxy.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vtkvoukp.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ojikwyvy.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yqnstlig.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163wwnycysj.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163tmpdpcbf.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163vgfftjrd.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163qiujwpai.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163ggurhjff.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163oquoncde.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163eseqlzos.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ixhyzoys.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tqmoukzo.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163vbhdhdqr.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163oyyxnzki.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163gmclstho.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163whllbgoa.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163yeeolnsd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163socvdxay.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dmjqwcqx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ygkcmybr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163qimfpcfj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163dckgclmz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ozvjobnm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163mwqtrboe.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163wxyvrefr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163lzaewhei.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163nwmmiudo.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163sehlpzvs.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ubsmmkgm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163xbnbwfbu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163rcbbtsms.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163thlixpmq.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tpiaukio.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163snwcgxap.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ixmyufws.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163ygfaxghm.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163optqdtfm.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163fvvpxzzd.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kblkzpjh.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163okfjtpnw.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163slkirxxs.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163dpgdfuhb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163fgiagtqr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zriqzvhc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163frvgyval.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jscfvqml.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163gxxabyfr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163bndxpwpi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163wkjrkivm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fyhqomyz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ozatnfpu.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163mtpztoke.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bnspvhzs.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163xoyldxcy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163sedwzmaw.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ukzmwbdk.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163tvqbsycm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163giqhpwyy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fxnbqlds.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163texibibm.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ojgjwjwl.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163btigigoy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163qfusxoci.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163akmpvljp.html

TS:   // 同上
来源：http://www.aibaodan.cn/163cticsnuc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163lvcnztux.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163mqsokirl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163wkzwddcu.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163mgplzbxf.html

================================================================================
来源：http://www.aibaodan.cn/163cxbtcbuh.html

G. 面向对象
来源：http://www.aibaodan.cn/163exhmsire.html

================================================================================
来源：http://www.xuanzx.com/163cusvijhr.html

[G01] 定义类
来源：http://www.sxryk.cn/163bkepkldh.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163vzwvuupk.html

PHP:  class User {}
来源：http://www.sxryk.cn/163bqubxaun.html

JS:   class User {}
来源：http://www.aibaodan.cn/163lxfzdysr.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163xmqzvsib.html

Java: class User {}
来源：http://www.aibaodan.cn/163fgwnviow.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163iybyugsr.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ocgqqjdn.html

C#:   class User {}
来源：http://www.sxryk.cn/163mxjjjzzs.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163axthlboj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163wlvhkqjf.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163jojovfzy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ffbotrvk.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163cupvrfdx.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163ubygjyxt.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163pejxhsdz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163dyzndlnl.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163uprzcgbc.html

[G03] 实例属性
来源：http://www.sxryk.cn/163ezygmefj.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163akmmpnte.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163saxgzppv.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163erntxhgp.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163mjimscjf.html

Java: private String name;
来源：http://www.xuanzx.com/163mjlbsrcn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163jpfumbhj.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163crpoocbi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163obamgoat.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xcoqpqgv.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163hurieqos.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qmwsdxuq.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163liguibbc.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163lumetqlg.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163jotquyaa.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163iiyebcxj.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163tkkwdfto.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163bawamwbd.html

[G05] 继承
来源：http://www.aibaodan.cn/163ewhoiotd.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163mfaghhwr.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163kszwunvo.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163uqmvubgt.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163eltkchjh.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163blzhjzmx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163bfcfnccj.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163mrolhcuv.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163jcpfrgdq.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ugntjjcj.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163hcxtbmhy.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163necmwnba.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163rpobgbxk.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163olgwchur.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163vegkuwsv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163omnwpchg.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163lytgrkka.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163pfdlswwe.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163xwwkkidf.html

Py:   super().greet()
来源：http://www.sxryk.cn/163uwlogful.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163wakqaulm.html

JS:   super.greet();
来源：http://www.sxryk.cn/163mhlymlhy.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ovvhuzhs.html

Java: super.greet();
来源：http://www.sxryk.cn/163shtwwssn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163vidfgpsx.html

Ruby: super
来源：http://www.sxryk.cn/163jwqjyzmu.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163sroyltoi.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163gvfpqbgl.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163zklqqnxi.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163yxzdcpkg.html

JS:   static f() {}
来源：http://www.xuanzx.com/163qqxamoot.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163zvwwhuxp.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163knpoolnp.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163tirbglpz.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163vgpkkarv.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163hsxvyrsk.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163rkcwfeyt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163pycipuxz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163fwnpdoxn.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163dlhgaxpj.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163slhxmahu.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163ikumdnah.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163jslzotfc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163fhbibezo.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163meugjrqo.html

[G10] 访问控制
来源：http://www.xuanzx.com/163tujlsunt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163odoeulfz.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163vfnktion.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163pkzlgeag.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163vaxiljpi.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163kwksbkvp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163cwmipyld.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163fxomqxly.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163frynlkhe.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163bdxiassk.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163uxasyqvg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zhpqelxx.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163gmvgvute.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163gkwmjvws.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163pyikylky.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163qqepptrc.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163molvthpj.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163arocomjb.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163vwtqvhad.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163pkbobbek.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163seysxife.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ksykuezg.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163uczetyfh.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163sdubpyon.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163yzoulozt.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163lrpxufke.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163hxbncrfd.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163tscoirwb.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163jkmbyloc.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ztiinnqm.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163gwcyoxmp.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163hbynfobu.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163siyjxbtg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163rbsecrlc.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163multgrfv.html

C#:   u is User
来源：http://www.xuanzx.com/163hfcsmoqm.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163aayckpje.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ddljtsxq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163wrepnywf.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163lgmjykaz.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163uniaosve.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163rvubjotp.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163xuixuoeo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163djwgulik.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163liwccyfb.html

[G15] 枚举
来源：http://www.xuanzx.com/163ggiytxvd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163zvaoiehx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163qtbwupgd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163mopxbmqw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163qzmytvop.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163tgrtxzku.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163krfhygbc.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163woxcdycl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wnravvqs.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163phjhmgjk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163qbmdpsqy.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163clczmluc.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jdiuyrli.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163peevrihy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163urdltaty.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163tretlwbg.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163lnsspnjr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163czfpadcc.html

================================================================================
来源：http://www.aibaodan.cn/163nbggttqp.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163mrtfairb.html

================================================================================
来源：http://www.aibaodan.cn/163saxtypup.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163qdvqmvgz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163gmtnncbj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163gvmccakn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163smsebbvc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163tltpddsk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163rafoqguc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163owygqdrs.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163qrcfqawj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163cswtzjnj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163rlwwhcgi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163osmnsyui.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163unspthhf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yhvzibof.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dtrgzeie.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gyeaeccz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163yaragzez.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vblqioet.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163tmwzzpuy.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163cllreyul.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163wopxnskz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kppuiyqd.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163mmlslxaj.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163wulftnua.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163tgjexjtz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163plpafley.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163fcnqelsu.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163kukduiqs.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163aarenqhy.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163wolxbwry.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163furmxdjn.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163sksvwifg.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163uxdgxvhr.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163tloztlbl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ufjsvjrt.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163clsmylqj.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163fwxqafdj.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163qdztbhkx.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ntaofipm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163djfdncdh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163gqcgftky.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rrlfgtqv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163gygmrsvz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163hchaqqch.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163wbmzjzhk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163tzwftbgp.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163kmoepsdd.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163kfhrjfwk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163uybifbms.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163uonqxfoy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vccrmyij.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163vcyftfww.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163utsmqejj.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ywohddia.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163eklvaebj.html

[H07] 断言
来源：http://www.sxryk.cn/163elfydxqx.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163essrhhfw.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163tkignsxb.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ioslnbqs.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163madpkcrw.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163dxbogxzw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ppxvjmpa.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163xjqtrkun.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163irysalys.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163wmrtlltw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163imhouccb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163sxeofebv.html


<!-- 参考信息 -->