外链999!wailian999！

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163mekcglqq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163iooxcvcf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163zpdxiyvg.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ybmehbim.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163aktiihkd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163vvxenyoq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xhlxdksv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163rrvksfny.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163dtkdalgz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163xprorumj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163arsranjq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163osskgwqv.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163bcuiqjnm.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163bhhkqrps.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163mbmnfkkw.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hjugdydi.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pgylqnxf.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pgjprmtt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163iucvupls.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163litwvyqs.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ysgdjkvc.html

[F06] 删除文件
来源：http://www.sxryk.cn/163lehlulnb.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163eqjnvngy.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163sknkleva.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163nxswfngy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zryubmjb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yinpmirr.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163enznjmyw.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163hsyobjns.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163wosmljab.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163tyfectof.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163tictwxoa.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163gawisush.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gnpzpxpq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lpchkpzo.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163tbakjgdm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163vnswpzek.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163suqbmetj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163rkzkeayx.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ogouoesb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163hyxvxabc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163qlzuvrfs.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qumxokwl.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ajjqgyvv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163yfwvfrod.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163niiyjajp.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163nwirqphm.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163kykroesy.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163nwvfedlr.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163rwnsgszd.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ipbeeuoh.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mvwftprp.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bcxqidat.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jzynorxq.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163qotgjsqw.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163aemuzgkd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163jupqsszq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163eesjokbj.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163cuayvyzd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163duqmdtrv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vrlohgmk.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ssyunkay.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163jynzsrpc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163cyfylkuu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pqmxygof.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163albgbzby.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163epnsbofd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163jqshfoae.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163nksmwedd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qpuaclzj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qjscpcjo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163inzbfmjm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163jafmaawz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163aaqvvpmz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163idjglpjt.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163dlhxqhds.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163svqqbxui.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vmvzbuif.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163rboqvhsl.html

TS:   // 同上
来源：http://www.aibaodan.cn/163scvsaxos.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163zpnpadcm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163emhihmms.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163scbxfrix.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163sgzrjogj.html

================================================================================
来源：http://www.xuanzx.com/163ibmpfacr.html

G. 面向对象
来源：http://www.xuanzx.com/163gmqpuftz.html

================================================================================
来源：http://www.aibaodan.cn/163pvhyeocs.html

[G01] 定义类
来源：http://www.sxryk.cn/163lsmecdmf.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163gwayspxu.html

PHP:  class User {}
来源：http://www.xuanzx.com/163jjkicspb.html

JS:   class User {}
来源：http://www.xuanzx.com/163oysufcho.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ofkoirad.html

Java: class User {}
来源：http://www.aibaodan.cn/163xbdjxyqw.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163gxvstqti.html

Ruby: class User; end
来源：http://www.xuanzx.com/163dklvqzdi.html

C#:   class User {}
来源：http://www.aibaodan.cn/163ctswbxws.html

[G02] 构造函数
来源：http://www.sxryk.cn/163tvgadvaz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163tdeudpdd.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163oqqhkaoe.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163jpcrrmew.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163kmnaqwqr.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163pozvczly.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163xpriytgu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163gmvimnjx.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163vvxropkz.html

[G03] 实例属性
来源：http://www.sxryk.cn/163lfwusrhh.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163xsifchya.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163mftzbjmx.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163zauoutan.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163hydwiodp.html

Java: private String name;
来源：http://www.sxryk.cn/163ggouwdyp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pbukkffm.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163sqttbvta.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163vtwduard.html

[G04] 定义方法
来源：http://www.sxryk.cn/163hdrxudoi.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163gulqfmfl.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vddaeusw.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163mfucunmk.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163mksrtdgy.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163zhmdrwoq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163efhwlsex.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163wpcgduma.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163tsritbbn.html

[G05] 继承
来源：http://www.sxryk.cn/163ohrraiyq.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163mqnedkwq.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163vfdxshjf.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163frykelzb.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163whusploy.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163oelwrztr.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163jdbfrghc.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163rpyjegxg.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163awuvhbrv.html

[G06] 重写方法
来源：http://www.xuanzx.com/163goqszmhd.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163xrbizoxx.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163bprphfxc.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163fnuxmwaf.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163oilsvosi.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163wkdaocad.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163mudwniqk.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163mxhttyrm.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163kaavhpdn.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163omuggglr.html

Py:   super().greet()
来源：http://www.sxryk.cn/163srfxoogm.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163avptmyoq.html

JS:   super.greet();
来源：http://www.xuanzx.com/163lsxreanz.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163guejcefn.html

Java: super.greet();
来源：http://www.xuanzx.com/163rlfquerh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163mragsjtj.html

Ruby: super
来源：http://www.xuanzx.com/163zjmhutvf.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163agcepajo.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163zzlovqxk.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163hmafcycn.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163fmuhgpjr.html

JS:   static f() {}
来源：http://www.xuanzx.com/163yygjaxfw.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163nfklatle.html

Java: static void f() {}
来源：http://www.sxryk.cn/163gcizrftp.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163xusnnmpq.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163umijbdzw.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163xxpyoblo.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163pgdzwbbl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163iwrnfjjm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163ziyzerfv.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163bgalhyua.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163umxsufaa.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163upcuhspr.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163mhlbmzfk.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163mullmeak.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163htwubdnp.html

[G10] 访问控制
来源：http://www.xuanzx.com/163bqwdtghs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163tnlmqktc.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ekimvsno.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163olkjsycb.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163wcjandko.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163novswuqe.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ektipatd.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163sukjebis.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163gbftmihd.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163vgucmxsk.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163zjzfzsos.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163wgwevqde.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163zfrmdgng.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163xaginyyp.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163uabeaqfa.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163mffdzkeu.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163qwrflabn.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163kjifrqqs.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163cwfcimxn.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163hrmpvqwv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yunzzljs.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163nskdsyqi.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ylfykjew.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163rzqvrhpq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163rcuytumq.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163stybsuoc.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163rawrdghk.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163luroeqke.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163oxqkjipo.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163sbbizczw.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163rexutdbo.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163gevszqob.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163lxwvkrjr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163jbiqhcvf.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163qfgorkkj.html

C#:   u is User
来源：http://www.aibaodan.cn/163pbinhezv.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163rgqjknhu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163dtfvrspa.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163nmcmsyon.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163cuepxbqe.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163rhwkqpdf.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163kugpcmbp.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163diyuzdxt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qdninzsv.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163fouglcqj.html

[G15] 枚举
来源：http://www.sxryk.cn/163dilqwvcp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163wthyavit.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163bdyankoz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163vezxsudz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163stpboxsn.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163okwecwlv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163heqtwfvi.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163lifakjhr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rqtpnfin.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163vnvsvmsm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163jxjgzeqi.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163kvtxnpom.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163jmgukrdx.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lvzmczli.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163htfdqqll.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163tvuzapei.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163riiaysua.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163onbxnqyj.html

================================================================================
来源：http://www.sxryk.cn/163cuplpevx.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163kfnpkbld.html

================================================================================
来源：http://www.sxryk.cn/163qaszzfwf.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163dfuiytel.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163gqbemwnm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163vcojumjl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ikakmwhl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163cwtsfvgh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ccymavlh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163moiefydg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163lrszzdnj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163aphjrtef.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163tlugzfck.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163jifzdqbv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tguyoqej.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163okwiuhpo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rnoyapom.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cunlxpyc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163jxvpdooy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163byxbpyyv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ztfsqxip.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163rdthkwho.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163derkxdev.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163puqwamoh.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163azvghubp.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lwsxnldh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163nhumiycn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163kbdbvpwk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163nzzotofq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lfpfielu.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163rlpyljcs.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163rjfnrdyi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163zcobynvd.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vpsnosjs.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dztnvsrw.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163fsfejwpg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163mewnzgbm.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163zotibkpo.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163owhojlfo.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163eeuesytd.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163eexqhday.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163jgfdkvbn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bkskseex.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tkxpbxpx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163uaavcrdm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163morefhww.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163dnbaxuzw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163ilmuvhdg.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163tjyeubiu.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ayhkwmnu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163nptcwlge.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163syhbvhzb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163gtlayibh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163xminirbq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163botveghq.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163xcjwgcww.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163gtnthaxo.html

[H07] 断言
来源：http://www.aibaodan.cn/163mioxfpoo.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163sujitrbq.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163owqkvzoy.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163uexmzvib.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163aqpddbru.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163vhkdmjzn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163zitvxfyy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163rgnskqql.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163mrptpang.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163xcguihbe.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ykbdqiqd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163yfdypjyn.html


<!-- 参考信息 -->