外链999!wailian999！

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163qokjfiev.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163yxarfewn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163fwkvlvzz.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163sngilfzg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163gyjpeozx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163nqwepxfp.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qjvhoqmv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mocewiyv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163xwjtktqi.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ejhujsqv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163axbuknby.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163luufsxlg.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163wczzckgt.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163npnsnjvi.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163zunivrqj.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qrtymbtm.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163dbeglfsm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jnxxvdqr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163eawipydl.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163mepgpefz.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ictjshze.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163wybnitzl.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163uzyzkhhw.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163byshzrbz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ejfvlpss.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163mqexutsa.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hrtxlfbz.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163vnnozmdd.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163tiuknmmv.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163sflhktsu.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163zqjfkmwf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163zahlodpl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163eygeclop.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163kxxujfsv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163eaecrccw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163jccuhaqr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qmzdaodt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163nohdxbbf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163rghcrcvk.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163unwtvylh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163awctkrpn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163kubbesdt.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ryxqyxnq.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ldrznayh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163whgawtru.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163aektinfs.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163dnadjzzw.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163haiiodpe.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163jcoambts.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ownrxkhm.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163umjjlevr.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163zlfpjyzd.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mmmdmxas.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jjejnakv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163tjsybxqc.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163ryfdnxun.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163prikbnsb.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163jdycvwmm.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dtrijujo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163hktpilog.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ksfegvef.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163oahfcavs.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163hmzuhhsi.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163fyuslrpc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163utjqxcan.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163dpddhzvy.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163vvdrjoxk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tjopjyag.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163oescbhgp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qqjqtofi.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163itmlolxo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163crkagwox.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163htthumtb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163piwhumuy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163qrirityk.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ingkymqb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163evxckqpb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163xiyiersp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163twnaxtqp.html

TS:   // 同上
来源：http://www.xuanzx.com/163jxxjgybo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163sudpdbnf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163duwqhcxa.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163klcwmiqa.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163cimbaywt.html

================================================================================
来源：http://www.sxryk.cn/163nenimctk.html

G. 面向对象
来源：http://www.aibaodan.cn/163crthhocd.html

================================================================================
来源：http://www.sxryk.cn/163rzkbsrgn.html

[G01] 定义类
来源：http://www.aibaodan.cn/163cvdvoqhc.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163bdgcmvqx.html

PHP:  class User {}
来源：http://www.sxryk.cn/163afifaaxo.html

JS:   class User {}
来源：http://www.xuanzx.com/163rcduhnzb.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163fojgmpyh.html

Java: class User {}
来源：http://www.sxryk.cn/163vpssomwt.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163duoqizvc.html

Ruby: class User; end
来源：http://www.xuanzx.com/163kstcbugj.html

C#:   class User {}
来源：http://www.aibaodan.cn/163uouvgvyn.html

[G02] 构造函数
来源：http://www.sxryk.cn/163kdkuulhs.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163duejmnsb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163vuvevwzr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163krvfzgfh.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163zagnkrzz.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163dnzhpsbg.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163oxxxrpnc.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163pbypexds.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163zonmmpux.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ijngpjcm.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163hamgjrrs.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163uetizmqs.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ncplhnrd.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163kkyoazyp.html

Java: private String name;
来源：http://www.aibaodan.cn/163efkclwlj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163fmimzgva.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ndoccacs.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163hffepbmj.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163whapcjah.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163shhzidpq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nwzzpxky.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163eiuzjleo.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163tgsandrx.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163nhiqxouc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163mjhvptvk.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163weerrfoa.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163iufbcnvx.html

[G05] 继承
来源：http://www.sxryk.cn/163qwwfekst.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163qclneqme.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ffozsggu.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163rjvtdawb.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ankcumex.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163vbsxxzjk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163czwkogeu.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163btyeeify.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163xrukasxn.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163vxjzyslp.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163bskxgwgi.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fqwdxrhg.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163gnuhvqns.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dqgoidxx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163knxjfxgq.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163foxxqvhs.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163eznjqqyp.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163wzppkhcx.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163eqjxlgga.html

Py:   super().greet()
来源：http://www.xuanzx.com/163frhibpjy.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163xppeldll.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163inubcfle.html

TS:   super.greet();
来源：http://www.xuanzx.com/163sjducdaq.html

Java: super.greet();
来源：http://www.sxryk.cn/163ptrfqjqk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163cymqvqrw.html

Ruby: super
来源：http://www.xuanzx.com/163grentanz.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163idbfiury.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163eodywzop.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163ehcttaqm.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163actxemed.html

JS:   static f() {}
来源：http://www.xuanzx.com/163zuozlmuf.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163kgqclwdu.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163fkkxuuaz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163fcdmqrgp.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163fkcfmncp.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rthshyrg.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163egualawc.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163bqcttndt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163cbledkjh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163egqaxfcj.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163fzpyjefc.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163artdxfop.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163znvlwjmk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163wtnfgokp.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163uwkduunu.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163xsfeznzw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163omiqspax.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163qqkymuwr.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163cybyawbx.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163aytfsflr.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163nxozgghy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163zonydodi.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163axoptfuh.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163wncnotxm.html

[G11] getter / setter
来源：http://www.xuanzx.com/163kukcanct.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163prqnarbw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163bxspzqif.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163povthgkj.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163hwicrkmi.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163dzebjzia.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163nhjbygdh.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163yeuahlvu.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163tpwujtfg.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163zvaaebym.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163wzcnxunq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163lvghdrpu.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ptomvplm.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163bzoamtxa.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163gdxlkemx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163snafynem.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163bqezrsog.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ullltuev.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163wliculrr.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ebiddawv.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163cebbgikp.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163gqfbepvo.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163lhircega.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163yhmhctak.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163lrlzmovj.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163tsdxzwam.html

C#:   u is User
来源：http://www.sxryk.cn/163fzlufwcj.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163beowatii.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ssxjwxqn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163zpnanwfc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163whssubsj.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163vgmyevqn.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163bdixfhfn.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163sbirpelw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163sskvtbxj.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163lcexabrn.html

[G15] 枚举
来源：http://www.sxryk.cn/163scntninb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ojqvnlnp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163trfndkmk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163dgebpbdl.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163brzhowvy.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163qtgdscbl.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163hqgblwjr.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ozwfwbkp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163niibsicf.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163uoykiget.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163hnpaeekc.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163fbaciowx.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yahrsscs.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163evyozbij.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163jcxwwalt.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163hixyjire.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163omiimuee.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163yyuqhnyg.html

================================================================================
来源：http://www.xuanzx.com/163uvjhzqfb.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163edwaahed.html

================================================================================
来源：http://www.xuanzx.com/163xnyxvtyb.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163zypgqoxp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163fwbrroms.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163szcpfacg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163yemrnwpz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163oovscewm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163zylahlis.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163foctugbd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163tfqvbryj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163dexiawug.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163fttkiykn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163barchqvj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rufxxduz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rwapkkrk.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dcaquxuj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jkvabszi.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163pljtnugd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163jdgzfwyx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163kejmlguz.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163uvqwbeoz.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ocjwlrhx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ebtobolz.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dxhxihhd.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dkmtwesc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ejxmldvv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163yieayeuy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163vbiizfnt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163jyubxqew.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163bgahonbi.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ptksrfav.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163rqylhohb.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zjvlfwdv.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jdnngyeo.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163jdquyswb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163liwbskjr.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163mmxldzpu.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163koosrnqn.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163gqdbeajr.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163jzvpabla.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163qgekzxmf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qftqtcaw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vfkeucma.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163nimmfsae.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163bgmnkzal.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163dlaowbfx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163jolthwzi.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163oizaovrs.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163fmjzrrqe.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163vijoeqyh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163qvctbjia.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163yxjyxuvt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163qmnshokh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163aurfyduv.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163pdxgpnms.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163wdyetrcr.html

[H07] 断言
来源：http://www.xuanzx.com/163ijpeqqhs.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163fsfusylp.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163rehzjxhm.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163keedbfgu.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nzpghlay.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163dqqtgqot.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163kddfkxvk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ggvkiwye.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163bvgmcqqu.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163miizdgbc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163csndzkoi.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163qwxpmgqh.html


<!-- 参考信息 -->