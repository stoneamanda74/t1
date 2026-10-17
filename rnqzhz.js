外链999!wailian999！

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163valxcmhy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163upbbvwbe.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163xrogwige.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sxxcgwhx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163unomociv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163gymmmdxk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163grpgvxzb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163dgwwojlo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163zbqalsyb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163gnfdqily.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163muuzxruk.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163jtgjrjqp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163xnbhmyir.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163sipjsrzn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163vzryznvb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ugacyevw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163gvgohsto.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163tcshvuoo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163iqobmzlp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163sdxukmge.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163gonxkryu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163apcvzjan.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163mfeghtiy.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163bufnjjye.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vuvxuuir.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rrwrfykv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163mvinsnus.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163grtzanij.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ukntbavd.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163wustscjl.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163rtitozoc.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qhxgsxce.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163lzngczjz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163lgdwvxuf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163shlwmhld.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163zxwtdkla.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hwhpzfxv.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163wuooeaem.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163kgxtsmir.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163wmnifdyh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163kactzjfb.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ctmzefog.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163fetuywzs.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163xsolvwml.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163srruszpk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163sqqavtuj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163pjzxbbqz.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163opmubfdh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163vgjahtrq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163uybjzsum.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163gkiwrqld.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163kzqtqlux.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163rakyktqd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163pekdhjqp.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163gcdcpwvw.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163irvhwxxp.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163lflophct.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163efobsovc.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163mgerjcue.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163mvjtzcdr.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163lewmusub.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vewznfhd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163orpkexpg.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ieidpzaz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163jsrokzre.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163lnmywemw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163mpkktwvy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163xkzdneqe.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163jgkiuffl.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ogbbkwbj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163hdqqkife.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ylhwjlzf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hindwzyo.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163iyfvoqnx.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163rapknivf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jvzgnfzj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163bfsevwpf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bbppmeqc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nqynhwhq.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163szslplyk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163igvzgrcs.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gyiujxpm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ftdzrrqp.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163vokmoshq.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163thbjkarh.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163fmumnvtv.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163gqogerze.html

TS:   // 同上
来源：http://www.sxryk.cn/163jpnzddzw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163edplfufe.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163tsqmmebx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163dhmferwg.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163lzlyjyqv.html

================================================================================
来源：http://www.sxryk.cn/163lpykfasm.html

G. 面向对象
来源：http://www.aibaodan.cn/163fyfipnev.html

================================================================================
来源：http://www.xuanzx.com/163getptihz.html

[G01] 定义类
来源：http://www.xuanzx.com/163frxlvjsn.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163olmqvslj.html

PHP:  class User {}
来源：http://www.xuanzx.com/163jkyptwgr.html

JS:   class User {}
来源：http://www.aibaodan.cn/163oquadybn.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163dnlpkduq.html

Java: class User {}
来源：http://www.aibaodan.cn/163uzvfzcno.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163nsivivhn.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163jilgiwci.html

C#:   class User {}
来源：http://www.sxryk.cn/163chrtyvmz.html

[G02] 构造函数
来源：http://www.sxryk.cn/163lftqusjd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163whchtjgk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163ucxefkwj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163gfdykyhf.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ansxiepf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163bewrzyhy.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163trkarftg.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163pyqogiay.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rotdlqsk.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163hufugtxe.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ttuaqpov.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163gdutxawf.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163htdrwxpi.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163wsxrphra.html

Java: private String name;
来源：http://www.aibaodan.cn/163hquaykjc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163agmfuxxd.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163yfngased.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163udplakwd.html

[G04] 定义方法
来源：http://www.sxryk.cn/163jedotkue.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163jrcqxrul.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163urrjtqze.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163rqlrqwih.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163vijzoryk.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163mwefbleo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163iydfvijk.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163colprjgo.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163zbfofnbc.html

[G05] 继承
来源：http://www.sxryk.cn/163yglnpmmv.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ohyvitrw.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163zleetqrr.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163esvumzxf.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163uxderqex.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163anogiegt.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163lipvafhn.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163djoeedxn.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ndqwocsz.html

[G06] 重写方法
来源：http://www.sxryk.cn/163nnilaqjc.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163blbvkkul.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163cjeglowj.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163pqnrjcyz.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ptkmywsx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163lvnkhnck.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163oqwphjzm.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163svppzcib.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ynbjpvwg.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163mrvpotfn.html

Py:   super().greet()
来源：http://www.sxryk.cn/163mazjmomn.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163alqqnqor.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163qvnpocno.html

TS:   super.greet();
来源：http://www.sxryk.cn/163pivmzvhs.html

Java: super.greet();
来源：http://www.aibaodan.cn/163qvvvfmat.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ltwseftk.html

Ruby: super
来源：http://www.aibaodan.cn/163fnigcpaa.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163lwshdfih.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163euhxtwlr.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163vstutxve.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163qagzjiek.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ofawgfnr.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163odcrjvhp.html

Java: static void f() {}
来源：http://www.xuanzx.com/163mdqmgpiq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163twvrjyan.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163vaqxuqsh.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163bdcuqcey.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163wjbzheme.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163mgpckoqp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163guguxkdq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163gslnxohk.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163khrhvxkx.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163rcyscqzn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163fpjjbndn.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163dftnwvcz.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163hlsvldzy.html

[G10] 访问控制
来源：http://www.sxryk.cn/163kuijkckw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163szyghasc.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163xydzzhgy.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163gwhbhesw.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163oujxjjah.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163qbeefkzz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163gfvzwwvg.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163plakohpc.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163yslwwopd.html

[G11] getter / setter
来源：http://www.xuanzx.com/163xjiryaxg.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163gihaumim.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163synaqfxo.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163rzbzblao.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163vrnvuhrw.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163drrzsfoz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163qzczaaoo.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163zkaqidpk.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163skosizds.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163gnxszvnr.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163heqsfrpv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163xjgcdnpg.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163zjcvpism.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163pdlksvvd.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163eyetzinh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163osqawsex.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163fzdwccso.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163pfhlbncy.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163eiqzuifv.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163gcgorjtq.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163dlejmfww.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163zfigzzqe.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163okmwgvmi.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163sfsmjwqw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163mgifoxeb.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ydnkcwik.html

C#:   u is User
来源：http://www.sxryk.cn/163gdfomabv.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163jzqhxcvu.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163bvqdewis.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163fkuhhhhq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163hpnrxqmv.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163vfqxtokr.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163ymdxodeh.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ikfijdvz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163anrnfxob.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163umdtgfls.html

[G15] 枚举
来源：http://www.xuanzx.com/163esawhlvj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163jftemaus.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163nulxztug.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163eiyrfhpw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163orqegoyi.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ftdbevra.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163fvrxympx.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163cudutbgj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163aiekccod.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163jtmbcbgp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ishamspy.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163iwkrxqac.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163cxoxgmzi.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163oitmkpdb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163dhiidfxl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qpivdprd.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163xzhbrtat.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163awtukvwv.html

================================================================================
来源：http://www.aibaodan.cn/163fwknrsyj.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163xnzynbva.html

================================================================================
来源：http://www.aibaodan.cn/163sfnjplag.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163yraajash.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163hdfyiniu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163nafvxtvv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163detxtkfn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163cnysxwtk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163radwuveh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163gcihbfsd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163kxyhfzoe.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163vlqaffjv.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163fwnqkoou.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ahlxznwj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xpuglppk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qtsmdijv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163myoisosa.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ikqpkhmw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163lohuudhw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163vapqnmma.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163mqigrciy.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163uzebefhj.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163gcgluzyz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ftykoynk.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163pwwcfwib.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163byxvklwo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163msfosjke.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163gmexazkm.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163qsmivrhs.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163pzkdwgdc.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163nxykxvyf.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163wtjjuxcr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ygdifiyt.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ublcpmkb.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163shgarcrn.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163eduvilxz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163tutozuuw.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163iyygsmly.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163qvdnszxg.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163idbtrika.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163xmehlaxt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ovbcxnje.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163wojyyjiw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163klztebns.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163rfgeepme.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163bsnbmemg.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163sgjwxryl.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163dzhwbnfo.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163norwibqy.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163kvoegzmf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163owmmgmqa.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ntkraxoc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163dutthefn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163etsophue.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163eiuvbohd.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163usgyvrkz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ksbdrbrf.html

[H07] 断言
来源：http://www.sxryk.cn/163wamvcigv.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163uheshqiv.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163iorjofor.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mnjswmak.html


<!-- 参考信息 -->