外链999!wailian999！

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163jnertafg.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ronzrawv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163hpzfgxad.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163oynckbye.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163uzwuucnk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163maowkqhv.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163bfyvwkyc.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163tmcqpeqx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163lyxqdkbv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163oudhicri.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163jevdtadx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163swgetbad.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163giuusykv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ktadwjtp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ajcbndix.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ufebqpic.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163klxdhyvb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163mphtbsyb.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163fzyjtnel.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vuaunuhb.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nwbkgzak.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ytsoslrv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ytduunbk.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163djqzryqp.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163uahwkonp.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ckztgeyk.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163axjvimdd.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163dbbzlrvi.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fooqfkkg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163blhqulpb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jiejhadj.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163wonzydll.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163hpptbpjh.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wmcydgtk.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163jlqlycqe.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163hkcrsudq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163tuhhhque.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163fhdqsadr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ecovksgf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163qntvfjaj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163pfoxdhcd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163tmqbkmhy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163fxuwbpyr.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163qyyxnxxt.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163wmosdjbz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163yyjsjirb.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qpqimasn.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163owmmlkbn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wssmtajc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163jsybjfkk.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163tlnlrupa.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163wsgwnqvl.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163gxnmrren.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ijqzbhte.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163zkbnevib.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ahvcalua.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163fyfuweif.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zfiuksrb.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163edznfpcd.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163fhbpyawd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163ydizbssv.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163yotnoidw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jdffchmp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163biyoyrgf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kiilrrwq.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163pypvovgh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163mgdwqchd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ljdhcreh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163czvnrjqa.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163eckowsyl.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163zepzrdlq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dmepcfkp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163mvznblfl.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xzezwmap.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jyvvwfqr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163tsjwzjzq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163bgpzncqf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gvsblbtt.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163nbbaacqo.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163iasffaqr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163lagfgelr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163pxnphgge.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163bgmcqlxo.html

TS:   // 同上
来源：http://www.aibaodan.cn/163dkzwqndv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163esgyhfda.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163zxltofig.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163navtksno.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163eptglheq.html

================================================================================
来源：http://www.aibaodan.cn/163jmskogxs.html

G. 面向对象
来源：http://www.sxryk.cn/163szwjpzrt.html

================================================================================
来源：http://www.sxryk.cn/163cygwknlj.html

[G01] 定义类
来源：http://www.aibaodan.cn/163cjjuevtz.html

Py:   class User: pass
来源：http://www.xuanzx.com/163vnevdfke.html

PHP:  class User {}
来源：http://www.xuanzx.com/163cvhaeywh.html

JS:   class User {}
来源：http://www.sxryk.cn/163vsdubluh.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rhyinphn.html

Java: class User {}
来源：http://www.xuanzx.com/163kzouafgc.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163gyzeulld.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163kgliawyk.html

C#:   class User {}
来源：http://www.xuanzx.com/163zihklehl.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163irppsnqm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163nrifwesu.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163acuztqdt.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163otpylwah.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163kmgwqgss.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163fmlyhwhw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163tovzqhpg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163gwtghqrr.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163asxddmfe.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ogxuxlst.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163kihtxaqj.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163mrhyzyxq.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163lhzoohic.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163encshush.html

Java: private String name;
来源：http://www.aibaodan.cn/163mdvjbglw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163cpvkhpjh.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163uckaaufk.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163frpcfqjg.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ruyglvxb.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163bgluggmk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163pgjcpawl.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163yumddpqd.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163lzolzvcr.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163lashtupi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163cvcwjqdm.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163lqwmpwxb.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ziippqap.html

[G05] 继承
来源：http://www.xuanzx.com/163vgudqesx.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163dycceujb.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163mpajoynu.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163oakaoodj.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163bbichjfd.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163rzrvtpnc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163kpsgbfja.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163iojhvqlk.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163imvfgqpz.html

[G06] 重写方法
来源：http://www.xuanzx.com/163usesraba.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163fptvolub.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163fmmleuyw.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zqkwfuon.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163mcypluem.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163jukjoipk.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163laihiwny.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163gzphfhns.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163cylpngrl.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163wguinbjg.html

Py:   super().greet()
来源：http://www.xuanzx.com/163irtsykfw.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ukpdkdxl.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163ybyfbfep.html

TS:   super.greet();
来源：http://www.xuanzx.com/163hkcccyzf.html

Java: super.greet();
来源：http://www.aibaodan.cn/163jcwwkfqf.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163buhpwmdq.html

Ruby: super
来源：http://www.aibaodan.cn/163wczsyaqs.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163sqnmndna.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163jxopiwwe.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163wrhshovs.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163usbydbez.html

JS:   static f() {}
来源：http://www.xuanzx.com/163tdhqhpqd.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163wntmutqv.html

Java: static void f() {}
来源：http://www.xuanzx.com/163mjgiysoc.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163nqrlmhij.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163juucfpse.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163rujqfogd.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163eavtwdsl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163qugyxuor.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163thpttxvo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163bckqzmmg.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163tiixyubt.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163pbpfzawe.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163xidcfcqr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ceyxxyox.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163zropxzmh.html

[G10] 访问控制
来源：http://www.sxryk.cn/163gndtvvnx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163qigfsetz.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163kxxjiipf.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163whjynynb.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163qaizdaqp.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163syinbhsi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163wzkmuusr.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163xvsphsec.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163anwoszsh.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163grkiudek.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163btbjggty.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163usygxfmz.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163dzxubosf.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163pxxvufuy.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163gecjyitj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163labpybuc.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163pukwodxc.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163wzozqkti.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163raafjrem.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163pzffdbst.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163mwkdtpmv.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ztamtcjv.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163hjnrtovq.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163xseilavz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163qypjniaz.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163vmaklpmh.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163qxzroxco.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163rvfshvvj.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ioyuxytq.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163qtpagvuj.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163uexjlhhu.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163jpejvozt.html

Java: u instanceof User
来源：http://www.sxryk.cn/163rqeyynpl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163chkfoyll.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163dxenocoh.html

C#:   u is User
来源：http://www.sxryk.cn/163aqjhzfko.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163emctisao.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163bdnfgjzf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163praagyzs.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163huawdzgj.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163jsgdbejk.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163xmrtnfvy.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163sbsytflg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163jjowjxtf.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163johfpltq.html

[G15] 枚举
来源：http://www.sxryk.cn/163rlgrvafy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163uasrfrbp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163eqjgfskz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163nmpgqnxn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163qscdrlsw.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163rxlaloab.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163bvpqeifl.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163rgsjrkdj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nevokhgn.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ehadncyf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163qmxkfnsm.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163iyubmnki.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163udxtbsal.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163itwwtrum.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163anrvsytd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163oebbjmnf.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163mtoftsxl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163xhmcorww.html

================================================================================
来源：http://www.aibaodan.cn/163xarlxerg.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163cwmgpups.html

================================================================================
来源：http://www.aibaodan.cn/163nnfnylzw.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163tlpjwowf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163pojrzqbz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163lubzhnnd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163chnjgsrx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163vrsubhvg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163lfedbhty.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163virhpzlz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ooikwpkt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163itxpngwj.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163sjpbwwsb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163iawidght.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163shtaiwam.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163brnqezne.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wavcyqwd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xastrrkm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ykbrclxq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163txgdbajn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163uouilqyn.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163kpuekppi.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163vmgusdgu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163mclginbe.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163gonidwvi.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zunemnwp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163sspgqgdh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163hskfuzfy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163kgttxdim.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xlbfgsdt.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163evfofwac.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163dmqaoayb.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163bmhffxdv.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xxgmaata.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wgqfcxey.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163qabprnse.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163apneupmv.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163udhjfckk.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163swhhnawh.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163wtxmbdkt.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163gwpjnyld.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163qkzcvazn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163tuimgeii.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tsidawfz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163morwslkf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163mrewtqdq.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163vsdopggi.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163xgrxddif.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163izpoziaa.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163djnfuyod.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163uttklrls.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mwhrhmon.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163felwqhin.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163qximyzlf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163dtetaiqq.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163qqedlydi.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163jifgpwmr.html

[H07] 断言
来源：http://www.sxryk.cn/163ijvfgqyt.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163agcbvthl.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163ixcnevqy.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lkqwmbxn.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wmgpdjqp.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163dlbxovkt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163zrpflkjy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163hcnpldtv.html


<!-- 参考信息 -->