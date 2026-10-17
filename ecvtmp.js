外链999!wailian999！

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163ptnoiccf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163kckguwow.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163tgubkamx.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163zzrdjhdo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163sgvycfbq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163nrsydcxb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163uxrtbhtg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163azhszxch.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163kfmtkpdk.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163uzfovtsj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163lkfptpbv.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163tiusprxt.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qdkfogxk.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163dofrqhhr.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163oqhhmmom.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163svsqftqd.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163yfnbadkq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vxcgzvek.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163flnkjhqu.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163dbaqsgdy.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163vtkiuiys.html

[F06] 删除文件
来源：http://www.sxryk.cn/163cbaahzyq.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163tczarqwm.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163xqeenlwp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qefrgoxv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ialpreux.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163gyqexcrc.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163retbtobo.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ffysmhxt.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163gaxqqkgd.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163trpltjmd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163toowmfto.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163uhzjfwaf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163wmgfmzpv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163gnphjzan.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163prbpqrbn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163kkzrggjz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ogspmkuu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163orywmkrw.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163reynpzja.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163fytinvbe.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163qdvivxww.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163kvytclbw.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tmlszkjc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163afdmwqap.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163zxgaxlxd.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163awwmcvfl.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163urqocoop.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163wbbkybqn.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ttkevvul.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163kyzqpamr.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ryqtnvlj.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bqsjxfgm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163orsiviyg.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163rzlimsts.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163amkewkdb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163vormzqik.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ndqzimhe.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lvjlztlz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163lxwdbglo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zszylzut.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163mlutaeuh.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163xetwmlpd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163uecitcqz.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163nzxjzled.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163sjmslbyc.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163kdzwfbew.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163zdqdgurx.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163guocgtqk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kokwfcut.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163deaikhrr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163qjmvylxd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163cnotimhv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vwxymwlx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163eoarulqi.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163qjgybfev.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163kbtwwedv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163dvcbhovi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163qcvrjyve.html

TS:   // 同上
来源：http://www.sxryk.cn/163eqnwgven.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163hwysmcws.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163mjalqydr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163heyvotrs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163ruyqybxr.html

================================================================================
来源：http://www.sxryk.cn/163whssoymf.html

G. 面向对象
来源：http://www.aibaodan.cn/163zifyeezn.html

================================================================================
来源：http://www.aibaodan.cn/163mkmsodwt.html

[G01] 定义类
来源：http://www.xuanzx.com/163szykdlul.html

Py:   class User: pass
来源：http://www.xuanzx.com/163klfdvzhh.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xdsyabre.html

JS:   class User {}
来源：http://www.aibaodan.cn/163yzdjlvbw.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163lraljior.html

Java: class User {}
来源：http://www.sxryk.cn/163khuuliea.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ujmzkahv.html

Ruby: class User; end
来源：http://www.xuanzx.com/163tsndpvsr.html

C#:   class User {}
来源：http://www.sxryk.cn/163ibxepktj.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163esitjtrt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163awhyawye.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kijxccqb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163yztyrdow.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ijmyanvr.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163dopxeryu.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163gzyklzro.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163eifjdiki.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163qbyehvsu.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163pacejjsa.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163mlrravgh.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163mkpescgd.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ntakcwdi.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163bayrhevx.html

Java: private String name;
来源：http://www.aibaodan.cn/163uxaiozdh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163cwcmqchy.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163vawwbrew.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163cmvpbcyj.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163hihxglzq.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163lmlxzpnq.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163nneebydh.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vbrwryvb.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163mwqaevbh.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163mbxdqojk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163xvcypwsz.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163qwwkonsc.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163fusywffg.html

[G05] 继承
来源：http://www.sxryk.cn/163osiawuay.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163xmsbudtg.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wcezvgzp.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163uzcparxf.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163mfornnep.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163kfhxdkhu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163kquqtpce.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163inspzmkk.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163wchuuebh.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163bbvtttyu.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163okmfwfmt.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163orbnhboq.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163iezlenhp.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ypzkpzqd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163dqfivvte.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163zmsdbmvo.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163nrjgwpxu.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163nazgykwx.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163uemtsdun.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163zraeghfk.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163htikszrk.html

JS:   super.greet();
来源：http://www.sxryk.cn/163dqcpfxan.html

TS:   super.greet();
来源：http://www.sxryk.cn/163nialbwul.html

Java: super.greet();
来源：http://www.xuanzx.com/163vpbmrwlk.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163njikxydb.html

Ruby: super
来源：http://www.sxryk.cn/163dobqdzvz.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163oxvtkzwr.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163hmyceceu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163evdxhrnq.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163wnarmhwl.html

JS:   static f() {}
来源：http://www.sxryk.cn/163dgeykxfv.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163jjkdikud.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163ukirksfx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163hndwbujo.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163junbsecd.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163bltoiifp.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163xytxbqpl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163cszjifif.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163xyukkeha.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163xckbkrni.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ahmnifkk.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163gitrfziz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163pmdbkrrg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163lfnelldf.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163tbbibxgj.html

[G10] 访问控制
来源：http://www.xuanzx.com/163nqvgbzrl.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163kaxgrnis.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163xkzeprno.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163fwhhdkyt.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163cbjjvbxl.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163fymjixey.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163eznuhghd.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163lqjvtqyz.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163vpwzmxjb.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163hpdjkstu.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163nyvvlzlz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163osbhccfw.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163rcgyqpfs.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163hpyxfijp.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ajwttjal.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163btuqclhb.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163pfobplts.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163atrraxyh.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163xvpcpnxu.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163wvlzkyez.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163kyyqrwia.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163nkjenard.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163jgzmrswv.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163vuzprosm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163izfcbglh.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163tsyqgfga.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163yoecqpnm.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163pqbkbvpr.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163nemdwpfw.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163pfsuzzzz.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163swistgqc.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163fyjctogs.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ndxsukuv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163stbjovmf.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163mzdnymtp.html

C#:   u is User
来源：http://www.xuanzx.com/163mvtqzqha.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163uxjqdrke.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163dlbgsgzi.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163vxdleokg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ifmzgnvg.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163kmwulakl.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163mfvrewqv.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163zotbazvq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ojsclbhp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163whploxxg.html

[G15] 枚举
来源：http://www.xuanzx.com/163aouikyua.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163fgprziuy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163thxoswkq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ghtbngwc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163beanwsqp.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163hnwvrnrh.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163swivnjtj.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163llvclwqh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fctenzvt.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163jzfbnzxr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163cpgoogfb.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163kcmcbvda.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jnmygvap.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dimqiykd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163dnntychm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163rvqwgtdn.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163sshpzajo.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163qoarmmjb.html

================================================================================
来源：http://www.xuanzx.com/163uvktdwtc.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163yutfodqr.html

================================================================================
来源：http://www.xuanzx.com/163pvuvbcub.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163cwjyftci.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163qingyyyq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163tuehxgqo.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163kkgsgdhj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ovbymdml.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163scubeunh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ulznmyls.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163vpcksnhj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ffrnyegt.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163fjsfcnxx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ykzvcqdt.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zutuuzlm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zlujxmmp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zixusuyi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ognqsrmx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163hokrofdc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zarqrgrb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163kyxbbddv.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163twxxytqx.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163elljpxne.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163lkkykxhb.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163sqxzdicw.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zbfawwhh.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163qhfmdpze.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ctfzlysg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163zgevsimo.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163cfhjnjoe.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163qbvqfjnc.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163vevouerv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163impjdrbx.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163kaofjmzy.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163skazuscc.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163kxzfothe.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xojnemyt.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163pgwjohes.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163pvcfeqkw.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163zyyjnycj.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ohoqfoqx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163xpakltmj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163iuxuaeav.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163arfrtozs.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163jelvjhji.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163bxxiccqc.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163cdscpxyr.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163wnpbivwx.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163dnxpggat.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163moiscoam.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163rmxaikjp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163dfywmhsd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rlmtosfb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163lwacfkxg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163tpjfqsut.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163xtlhwitv.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ynbhxkki.html

[H07] 断言
来源：http://www.sxryk.cn/163swqhxdha.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163iahdlezm.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163uofxgloe.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163pesrvzbb.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ebypdesn.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163dbmlkyom.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163qptmfxpu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163xrbmhjsh.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jaevzrev.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163zdvsgvzf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163pjqedigg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163rxshgtjz.html


<!-- 参考信息 -->