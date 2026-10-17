外链999!wailian999！

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163skqyefhs.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163dgzgidop.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ssvfjdyt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163nlzbxkhu.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163stlzqvwf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163rqdmcyht.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tdhpithl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163toqmivpi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163bitzgelh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163rfonpljd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ysrzyfam.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163kouzrjbr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163csilcrjy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163mmdnfmxe.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rvnzcwbz.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163hwkglhxg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163bsqdwygr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163zybmhgxi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163otbhrtvy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163xbosqsor.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163kxwyxfua.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163llmmzxfa.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163lyzcpscy.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163qqqvqwbi.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hmstmvnb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ivapyihd.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163vjjewccv.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163qaudclgb.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ohjnjigj.html

[F06] 删除文件
来源：http://www.xuanzx.com/163comhmrsc.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ndgwcenz.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163nudqksxo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hcmqqcyr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pdumviss.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163drwtsrss.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163yajfwdmf.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163bvvwdqct.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163cyxjbpiy.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163vnsvwelx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163xxgnydwk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163xdhudovo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163edrptsku.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qowhvczn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163txnjxfnh.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163hvawrdix.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163mujzdmiv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163wncmmuti.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163zeuzncah.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163dxgjbhlq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163vubhlxve.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163doimhrqs.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ihptqbxk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gdiakwmi.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ahdqdxdl.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163qsyujqjv.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163iowdexxi.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ovozpjzz.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163rczdjffx.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163cltconhl.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qiewummh.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mfsylpir.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163hlnnoltz.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163jmvilxdt.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163dxhogcet.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163iqeforfz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163lutydchk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jeitnpen.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163zczgkcpi.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xqilnebq.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163oplpjquw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163gdukzkez.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163czdazsfa.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163typqpsfp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ldvaarmb.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163whvstgzu.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tfdmsnab.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ubkzknkw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ovpoqzcm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dvmozwvv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163oqepuiin.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163zegucpea.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dmgjkxxz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163dnntkcqi.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163qnkcfexb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163xegiwnri.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163bdseuhnw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163xvescuct.html

TS:   // 同上
来源：http://www.aibaodan.cn/163eirmmacz.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163thphdecg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163rmewzjmb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163scagbfxn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163jcvlypoa.html

================================================================================
来源：http://www.xuanzx.com/163zsdyfetk.html

G. 面向对象
来源：http://www.sxryk.cn/163uvbxvfve.html

================================================================================
来源：http://www.sxryk.cn/163wqnykcnc.html

[G01] 定义类
来源：http://www.aibaodan.cn/163kaxmqqkp.html

Py:   class User: pass
来源：http://www.xuanzx.com/163dwekcpju.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163vwoawtlj.html

JS:   class User {}
来源：http://www.xuanzx.com/163gvkhtvyc.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zklqvudb.html

Java: class User {}
来源：http://www.aibaodan.cn/163jgfffqcf.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163kztnpxxg.html

Ruby: class User; end
来源：http://www.sxryk.cn/163uhynspfw.html

C#:   class User {}
来源：http://www.aibaodan.cn/163gsxrszni.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163kvvzdvmi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163mursuczc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163awmtqrsm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163jqpwyhln.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163prltrohu.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163tskcsnnp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163cekdaxcl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163lziryswe.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163chiohoqz.html

[G03] 实例属性
来源：http://www.xuanzx.com/163rncggkjo.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163cczkefjz.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163zlxghnyv.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163pccmfqed.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vjrsygbo.html

Java: private String name;
来源：http://www.sxryk.cn/163ktrpyaoq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163twpbwigf.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163khmonxab.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163wkzvdktp.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ztygozdh.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ywdavcco.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163xyovkfnl.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163komivyoc.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163xfapbttr.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163efdsbocu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163dbwatofx.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163ulspwxfe.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163jnopqngm.html

[G05] 继承
来源：http://www.aibaodan.cn/163xdzyibup.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163pururifp.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163qxamniup.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wxgnqzms.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163futfkrgt.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163xhublwye.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163mswafglj.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163vdlegssg.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xknxtdff.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163palkmbpx.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163eaosavyu.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bfgceley.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163bgbcfopf.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163fxmyqsha.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163hhokfwep.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163hdkcyyny.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163krjkdrny.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163zfihkpbg.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163vpsdvuzc.html

Py:   super().greet()
来源：http://www.xuanzx.com/163witftjza.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163tyycshce.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163amrknktj.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ruyorpxc.html

Java: super.greet();
来源：http://www.aibaodan.cn/163wdweijcr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163dabqjsdk.html

Ruby: super
来源：http://www.xuanzx.com/163ciwxqpxp.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163uehjqstn.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wpoklxpq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163rasqhpvt.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163rkgsebok.html

JS:   static f() {}
来源：http://www.sxryk.cn/163xenbgzqz.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163dpvqdtck.html

Java: static void f() {}
来源：http://www.xuanzx.com/163vaojoosn.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163blmenvhn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163cmddrnqd.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163qjbigsfv.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ratpvtlp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163jhifwppz.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163swgjqxdp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163pvvfklze.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163cynniwxw.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ukolkbaa.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163xkvdkkfk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163cubradyj.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163aenkzjos.html

[G10] 访问控制
来源：http://www.xuanzx.com/163uamrvzeh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163txwtamsx.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163unnzwgku.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163fjwsyfmi.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ncimqcmn.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163tukdnott.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163qhudnpop.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163sgcajira.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163xqvbsngt.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163bxxuzqtx.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163wneiswkl.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vmdexlxx.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163pgfsfvuk.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163xazbuvww.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163zzypopwe.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ewwgubie.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163hohhjhlk.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163zpmmbhbs.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163dhohbolj.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163kggaaxpp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ascmdgsd.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163cbcoszpw.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163stzpseto.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163cgfeetxq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163cwwvpshj.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163fzhadpyd.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163crjmxfai.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ayfeejjc.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163kvkxlawg.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163fhfymlog.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163thequbwj.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163knvnuqud.html

Java: u instanceof User
来源：http://www.xuanzx.com/163myxowrsa.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163qoxtayxn.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163hqfgaeje.html

C#:   u is User
来源：http://www.xuanzx.com/163nznayrtn.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163axblxmas.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163oybhtwxy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163qhuutgfu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163wjxcvdsg.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163azgnlbaq.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163qxcptock.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163zhwvosmz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163zidyrhkb.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163mbcoonyr.html

[G15] 枚举
来源：http://www.xuanzx.com/163bbmcdvac.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163yyqsoduw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163nymvnxyo.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163eklhjtwg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163japbpyeg.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163kesiicef.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163oqzvkerc.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ywdwkldk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hobgrmam.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163xiaqnrxa.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163flgwpaab.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163yvfjtmxz.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163oaryblzf.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163iimnvxtg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163otpyikxq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163dlerrcuw.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163kbdglcag.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163gywtczak.html

================================================================================
来源：http://www.sxryk.cn/163mvecveiw.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163qwepsgwz.html

================================================================================
来源：http://www.sxryk.cn/163xevjzjdh.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163kfugjntp.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163aftdpjtd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163sfaffvpw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fjwznybm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163cvtjxtvx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163eobzgpyz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163cftrddiw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163pkhqurcf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163tarhmmxx.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163fjpignlx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163nrjkwdcm.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vejfamas.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jrslcyls.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163avapsuid.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tpligdiy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163zakiushd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163bikogxcz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163nmgdclsd.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163uuwzxvxy.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163tbkljdzu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163lbrjnilx.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mcotpkgt.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163koxdcttq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163tpzkwzcm.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163hvrkodvh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163vadqykqe.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163rlcripwi.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163dincqmsb.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163kgvrvtry.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163qpmkmyyh.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zzudzqxg.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163jdmfjolr.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163jmiremcy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163sfhcpzha.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163gjyhiblu.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163evduflkv.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163mbpnnjlw.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163hsbegcgg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ljqczcpx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163afntkihp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ejyjgipo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163lnugjytk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163iiynoxux.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163vhxhbowx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163onypgsih.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163muzfsfgw.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163omsbqakt.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163digfsmgu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zhtupody.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xvhygyrs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163whrdfxxy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163romfpuhb.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163vrxhqfow.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163qmtwwquw.html

[H07] 断言
来源：http://www.xuanzx.com/163tubtztad.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163pmekyjmj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163puosjlui.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163apfakysy.html


<!-- 参考信息 -->