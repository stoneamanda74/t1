外链999!wailian999！

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163lcdzspsy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163wtldikhu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163oegyvdjt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mtopvkqf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163sjxswrxz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ypzqpfqh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163dbzdbjzb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163qgozwytb.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163tfgkfwcl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163zlseikxz.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163tedsleny.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tdvyslyg.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163xjgwgpwr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jszxitbz.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163xhlfnryw.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163jgtgqdmy.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163fzrfaadg.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163msipsriz.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ashkqmeb.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163qrcohbyb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163fnqaqgzz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tvgfzagj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fwtujpvp.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163hqluinec.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163hzzmoifi.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163abdgumyh.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ktypymgb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163bikhekec.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163dyddjihg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163wibfuakm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163zgvejygz.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163vmptsupp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163dkspmiae.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163xygovnhc.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163jlvzwwcl.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163yavmjanz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vchkbute.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163slyhwhim.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163eepdwfwi.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ycwondiu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163qwmeqgao.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xsvmwpnr.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163usgzjbry.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163tvwdyxkz.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163fbumvqqb.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163jscuahsm.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163pywkgvfy.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163khhkvdus.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163lnpkbdin.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163juyadkwk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163bgbwegzz.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163srrqtizz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163mrrswjen.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163qighqacs.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jjnumzjn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163jglgearo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qcxkklzs.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163oqkylwgw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163cfxfkajn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163mtjvsiav.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xwrbnzsj.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ejdpefzu.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163cagseuwh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zzgcbuev.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163zwxolwcn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qqihhtne.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hhpaqvhq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163wqvnqvhx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163xvbslppr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163oynrmxst.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163mmrhwcph.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163odzdnkvd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163foqythus.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ienjqdls.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163oivuzrun.html

TS:   // 同上
来源：http://www.aibaodan.cn/163kqrsznyy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163rzqonztz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163dkeidzww.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163lzsnswys.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163kklxzedf.html

================================================================================
来源：http://www.sxryk.cn/163mfuqzlnm.html

G. 面向对象
来源：http://www.sxryk.cn/163aiyodqra.html

================================================================================
来源：http://www.sxryk.cn/163fvhtjsvv.html

[G01] 定义类
来源：http://www.xuanzx.com/163eotygmzj.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163vlknkzsc.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163glhcevkf.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ayduqnda.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163xvyopsny.html

Java: class User {}
来源：http://www.xuanzx.com/163wjsmcbqz.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163saeaeeun.html

Ruby: class User; end
来源：http://www.xuanzx.com/163xsyngvqe.html

C#:   class User {}
来源：http://www.sxryk.cn/163piqtkxhy.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163jkfvnnro.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163cllvdaok.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163tsigpayj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163wbmibfuk.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163jgmzvjzq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163qpfsrcrd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163nbtjvmns.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163karxfxdi.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163hfdqriwp.html

[G03] 实例属性
来源：http://www.sxryk.cn/163wptvqtxa.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163zohorsak.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163iwdcoeam.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163ieqbaofh.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163llgmzino.html

Java: private String name;
来源：http://www.aibaodan.cn/163wocfdajk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163bvvvfjyx.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163oadfyvuj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163bnsptoll.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163twvyvovj.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163fkktbral.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163cpgrbvka.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163hgocxwal.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163wuftcflx.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163erwriyjj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163inypxbyg.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163jdllpzpw.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163lcnujaxc.html

[G05] 继承
来源：http://www.sxryk.cn/163wztptdin.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163mdpbnatb.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163jlxexsfa.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163aevltlhg.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mfyrknwc.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163kufrgnne.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163xkacizlc.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163rdweyeco.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163bewleiir.html

[G06] 重写方法
来源：http://www.sxryk.cn/163busyeiwb.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163sqcdkvgw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163tydwhjui.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163fondhnty.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163onpytaae.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163eczgihgf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163nuhtosqr.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ticlowni.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163cktokntt.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163qulpozrt.html

Py:   super().greet()
来源：http://www.sxryk.cn/163vznwkzor.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163yqvillin.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163zzjshgjk.html

TS:   super.greet();
来源：http://www.sxryk.cn/163yeqydnyv.html

Java: super.greet();
来源：http://www.sxryk.cn/163tnyvsrae.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163biuxwmwk.html

Ruby: super
来源：http://www.aibaodan.cn/163pioteptq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ylmbkrpg.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163adrzfivn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163tehnlbqm.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163htpgqmmj.html

JS:   static f() {}
来源：http://www.sxryk.cn/163kbyiidnx.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163gqipahmu.html

Java: static void f() {}
来源：http://www.sxryk.cn/163syhssrir.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163qoknxnlt.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163axedqvlw.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ucuasllc.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163zuhiudkg.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163sniqhfjg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163sndemwyk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163ejxwgkwc.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163gnuhutcf.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163snocstfy.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163exzumsvh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163cxctltfk.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163wwvjgvbb.html

[G10] 访问控制
来源：http://www.xuanzx.com/163zwnfruza.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163wzrbhnkl.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163xeyyzbrx.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163uueteuvi.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163fnlvtjem.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ivhzmmty.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163qocdhrqs.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163eqaudpou.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163rxaykbgr.html

[G11] getter / setter
来源：http://www.xuanzx.com/163kvxysstp.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163wmrxeauk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163mihkoycz.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wvimxbnu.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163iuokhhje.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163bsvhjkek.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163pnhzjgah.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163rluuothk.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163fhbwiqxq.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163otmioecb.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163yodwoncw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163lfsqeglk.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163woltfoxi.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163gdvspalz.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163qvuhruqa.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163slusxvhk.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163svswfigx.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163wdstusyr.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163bykeeeiu.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163oeggaasi.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163pdqtfwiw.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163zbeddozf.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163efbktgeq.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ueipxrqo.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163dojdeyis.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163uufvkeeq.html

C#:   u is User
来源：http://www.aibaodan.cn/163xbrraqfl.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163yhwbmeuu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163nowvlpwv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163pbujrbsw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163okgsoeqy.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163kjxdkmtm.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163orhoglkd.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163geegbsma.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ehffledm.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163swxxwxca.html

[G15] 枚举
来源：http://www.xuanzx.com/163hymhtbuo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163slmkogvh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163rkesdbqa.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163queacupl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163twyxsvcg.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163jevsjjmy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163qvpzlmnp.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163gtrebptd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xinjhwvt.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163agtjdlct.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163rgplgjos.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163pfvuzsfd.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qvalpkiv.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ppcocdki.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163knsklzjh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163juyianol.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163pdjtxqdr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163gdabpkze.html

================================================================================
来源：http://www.sxryk.cn/163fkjctdrb.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163iqswewyi.html

================================================================================
来源：http://www.xuanzx.com/163qxumbkwb.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163mpvrqbor.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163uliioygb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163htruxnsb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163cgwzrtow.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163bdmouzst.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163mwyrnbru.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ipnddrrj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163uwvgqcfr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163lawgmqtl.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163yyvowtcs.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163hrjbvphf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ofoccfmf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sixwfxud.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ylkdodul.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pdnqvbmd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163yumsisco.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163hoanorov.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163kaazzyrg.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163pezrdkam.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163obqlqxtx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vueduvhk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163phuugdwy.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163iikvbfsy.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163zufbjqhz.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163hdmiqdea.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163heiobaao.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163iywrqhnt.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163emzzxntw.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163gvtigvrf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163oirxansr.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163prhhkhaf.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163bnrnltyk.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163oawfrxou.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163mpkyuxou.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163nngkujes.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163smvmcesw.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ahwizfxi.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163zmtfyzyn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163pexupgef.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163gwuxybec.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kdgsovwz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163qcmvhcoj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163bsldqoox.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163djvlujee.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163lracneed.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163jhwxxvau.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163qqvjxroq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163reiymaub.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163venmzotw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163shgvlgzz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163mvtgdtwg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163gospeqtz.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163oakpgwmd.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163iuhtedgc.html

[H07] 断言
来源：http://www.aibaodan.cn/163rpuapmpt.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163xryjnmuy.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163qnrcuqgp.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163vtdfkqqz.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163bvvngyvz.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163pyktrcls.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163tlprbfsr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163jgynohgd.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xeodhrdc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163qkmsnfdt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163scdldofp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163hvorrrak.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163nvhlqseg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163yrquxvoc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163jtjpepsp.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ylligvbo.html


<!-- 参考信息 -->