外链999!wailian999！

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163gcfnkpkz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163wcrusnlz.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163xasgxqhj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163rygvddee.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163aqtsizuq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163edizzvmd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163hpsxdxhm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163mbcrxyoh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163gftdclob.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163oyxrtkcq.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163zmlesxub.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163omqqxqvo.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163wsuznmrh.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163nuzxnfgv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qkhjvcsg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163wjmklcya.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163pbjqeuie.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163klaezbrb.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163lcfuejdz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163soosbpun.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163pjvxvplu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163pwnwpgwe.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163prmjgafv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163toyyoqrs.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163nzrpmbxd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ikrzkoot.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163xvepaukl.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163nuululqs.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163xpivyyqp.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163pwurmrra.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163eavmfvdu.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163uhkpuxyo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163gyfvhmio.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163mhqmfzzu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jmztkzak.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163rixsqlbg.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163rkqexslr.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163isbzrxap.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163fxyhqnwq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163mfcrkkvz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163rinlhruu.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163caoyyeqk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ggssuwkg.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163hopihryi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163jqceremu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163pisblqla.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163rntyhzmg.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163zdclsngz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163afgqnbmy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163xqcwzzsx.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163pupnoffo.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jirpmjee.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163gqbjxfkz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163tdewljld.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163snoykhwg.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163bnliqpjq.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163jvuhjlbv.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163vayabjat.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163cbfwfftq.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163owqgdozg.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hkbtcyuy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163eluvllxk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163qmwkbazj.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163vvocredz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163kbxlhzyf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163kklodtuk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163cgmmknpj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163pdipgpmv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163thuwvhhd.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tetohcoj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163xnjweaqu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163dkgwwtwo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163pzyoxhpp.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163wwisncwy.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163fctsroix.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aiaychzc.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163gclcbkdm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163btdfzxvn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vbnpashg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163ftyvnwwp.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163siromvfk.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hiosjzqg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163xydowqqu.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163jzeaydvm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163lnqttnnd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ewvhexuy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163yeblsutu.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ylmlwcam.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ywkfjrhx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163qhpwrfft.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163bxlrmeqr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163kbmfquqf.html

================================================================================
来源：http://www.aibaodan.cn/163pieejthx.html

G. 面向对象
来源：http://www.sxryk.cn/163mupilims.html

================================================================================
来源：http://www.xuanzx.com/163wprfcbym.html

[G01] 定义类
来源：http://www.xuanzx.com/163mnqzoxbq.html

Py:   class User: pass
来源：http://www.sxryk.cn/163etfeqrpo.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163xmqvwmeh.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ctpfrjyr.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163lsvphfkl.html

Java: class User {}
来源：http://www.sxryk.cn/163tsmgjzpr.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163rrwbljuv.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163sqkhuvbq.html

C#:   class User {}
来源：http://www.xuanzx.com/163zleehzfn.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ufolrhiu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163qoienwii.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163cekurxpg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163tdznrdlx.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163tjjpdonq.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163vsgurgce.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163dgjabshs.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163gfrrvfjz.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163kgqnslgc.html

[G03] 实例属性
来源：http://www.sxryk.cn/163odzzxoub.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163varuhusu.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163gxrgagyj.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ohrqvjut.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163pufsjxna.html

Java: private String name;
来源：http://www.xuanzx.com/163seutfpqq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163enlouzxt.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163bbkifyaj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163lpwdutcx.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jrdzxyud.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163gwrgkcev.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163edpbxkdn.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163wacyrztv.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163wphhqpkf.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163pcxjxizh.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163ynpvosph.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163gewznftn.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163kmcbdtqc.html

[G05] 继承
来源：http://www.aibaodan.cn/163lzbdvsto.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163vwlgijyi.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163zbnidsbd.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163drfjlbme.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xrswkyta.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163wkklktaj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163klnzfecx.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ngtuaxvm.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163sxbjoiko.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ktcphrcb.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163luwfmvnm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163cwvbownt.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163zehmpphl.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163tvriekmm.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163wnyezhea.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163tkvdjdpy.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163nilrxewo.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163zftpywht.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163txzkrboz.html

Py:   super().greet()
来源：http://www.sxryk.cn/163cghexijn.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163umqgptaw.html

JS:   super.greet();
来源：http://www.xuanzx.com/163nzkfqxer.html

TS:   super.greet();
来源：http://www.xuanzx.com/163savgpeus.html

Java: super.greet();
来源：http://www.sxryk.cn/163nidyvvwu.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163phjnmjwb.html

Ruby: super
来源：http://www.sxryk.cn/163atpxawzm.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163kdmbbvjy.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163gfxzncxu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163iwgaothi.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163kvlcvvol.html

JS:   static f() {}
来源：http://www.xuanzx.com/163qehwilso.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163uovhirti.html

Java: static void f() {}
来源：http://www.sxryk.cn/163ujvnwbag.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163vwyjmhfw.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163prqxorug.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163bssikfpc.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163wymiugtx.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hbhnmipc.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ouctqskh.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163tggzlpme.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163rrjsfike.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163nfikbumi.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163owglcuoh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163sldhzhuw.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163swnqjzpt.html

[G10] 访问控制
来源：http://www.xuanzx.com/163aazydiay.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163fszleoea.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163lfmlvtuy.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163okmbomgy.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163qrnmfxob.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163vfijsjna.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hdzqqdec.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163nycpnhwz.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163rmlxucuc.html

[G11] getter / setter
来源：http://www.sxryk.cn/163kcunjcre.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163sbdrzrki.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163vqwaudhh.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163bhlyjlol.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163mmjztdjs.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163fpdobexy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163tnuusmdl.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163wcnrmlwz.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163zbtcpyze.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163pzhjoesn.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163fmjgntgm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163gttfcuvk.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163ccjptneo.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163eraertjg.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163nvxmhhde.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163umbjbsid.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ahyabfcn.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163wirzczep.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ewdmbach.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163xjuucjoc.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163czvqhuei.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163nsxpexov.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163ipltggzx.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163qcgfsafe.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ijrggroi.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163mjbazqly.html

C#:   u is User
来源：http://www.sxryk.cn/163jlgkekax.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163jaiddkoh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163gcxvrjdn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163hnhliccu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163fvgxwvaz.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163cksatvdp.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163gwoiiodh.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ojquhigt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163kfpdwlkk.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163wtlbxbps.html

[G15] 枚举
来源：http://www.aibaodan.cn/163xjrsabhv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163rcyvccyk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163hktnqbvd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163icnffvkh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163oisoyzdl.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163amspxqvn.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163yloeaysk.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163xrahtdyo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163szthxery.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163xocmdkcx.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163mkhwbqjv.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163nqmvugmp.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163obxglbwx.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163kdgtwwmw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163cypdsmfw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163slsnouap.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163glaxxvoi.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163uomkcqjm.html

================================================================================
来源：http://www.aibaodan.cn/163cgconllm.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163zooaopga.html

================================================================================
来源：http://www.aibaodan.cn/163exvtbftu.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163koiolnih.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163pefbfxos.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163pwzeuorj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163iyebwoqd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163krdrlbgm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163dsekmrlg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163mmsaaowy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163tuhsuoqb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163nychkxae.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163tpwelckg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163hztjgtoc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yeeiozrf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163redatpft.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163diqjowdg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ybootwuy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163bdahwxpe.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163woevvpro.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163whnzewdo.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163imvytiyt.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163yiitogqy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163vxgljypy.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lwezeadg.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163hccaykdp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163luzlicxi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163fagcwhta.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163nvdlcvhh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163bfiwndpk.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163owwdtspg.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163gpmclrwp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163oomsydvl.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qiwswsff.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ayofkxhx.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163dwcggxsd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163jfutpnct.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163vksljkta.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163wefvafdh.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163okeefrjr.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163igvjjnaa.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163nipnrnwa.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wtrtlgmz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163uyxnkjhz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163jwyxdkoi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163pznirbba.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163mcexntxj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163qzbtnlya.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ikgrdany.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163acqlnjsp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163lwrabwtv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163gehjcqmz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163maaovorf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163wkcnbqkv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163iylrpaey.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163clqbmzxq.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163cjvbwucs.html

[H07] 断言
来源：http://www.xuanzx.com/163sallaspm.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163auifyhkg.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163vquleqcr.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163etcutjoa.html


<!-- 参考信息 -->