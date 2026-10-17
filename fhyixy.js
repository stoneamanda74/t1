外链999!wailian999！

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163nlucskbx.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163cggrcwdo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163vkdzxkgd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163kqenoypz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163avftrhce.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163moogdhoc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cqqjvxib.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163yiifwztk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163rztzbvoi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163yqpfmgfg.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163bwhsxnjc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163epoolzza.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163esmvpqhs.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jmqwgecs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mqpwywkc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163kgmfxfjb.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163kufgzzef.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163wxwoeerx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163urhfgdds.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163uaykuabx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163zrprwtsj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163jseblalx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163fuyndidx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lnfnrrjl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163gnkxmyse.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163fvypybvp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163sklkvqdy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fgnrtiom.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163jvjiqhhw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163fqwupauz.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163optniikg.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vfgctpyd.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163fgdcjojo.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xvrxjnms.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163hxfnptbj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163tihrvhgm.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ktjwvdkh.html

[F06] 删除文件
来源：http://www.sxryk.cn/163epfucwve.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163urcjwikh.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163pbytlkmd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pgltxkmb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xyolxdqv.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nruqjwbn.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163yojnpqwe.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163zevhmbgx.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163tnuppbcp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163hxaoowup.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163smtijisz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ytpyowjp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bxzdgxhy.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163xgydnfld.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163aaaphciz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ngixrutl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163uwjyjbwh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163hbvfplmz.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163epastzsf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163fnaaueas.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163eucohrxm.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163odfbeufl.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ckmhiiry.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163bdavhuap.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163nnwyodwk.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163icoytslz.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ijegcehq.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163vcmhenai.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163artrtefu.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163mxcmfvjb.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163snoioyfq.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163uwfacslv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163wmdwgjlk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163tzyerfmj.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ahanvxmd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163kzngtewe.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163sgavqofa.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rnneqrbr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163irhsboug.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ktgarlvv.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163imksmknd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163ienaanbp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163kdcxsstj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163sthkvorv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163oqtvcntv.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163cdjewley.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163trejmdzu.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163rjmqrhai.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wqdqsmlh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jmblnlll.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163xzolkbxn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qstkgiux.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fbeeekkh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163qwyuutix.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ugstsogv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163pvjywuxe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163borxszcx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163qsjnjjyx.html

TS:   // 同上
来源：http://www.sxryk.cn/163vaslcstm.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163xxsulrqb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163urgkrlpx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ntwhlvuc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163vveetmbu.html

================================================================================
来源：http://www.aibaodan.cn/163akrgjhpv.html

G. 面向对象
来源：http://www.xuanzx.com/163nqxxkwsb.html

================================================================================
来源：http://www.aibaodan.cn/163zxbdlsnm.html

[G01] 定义类
来源：http://www.sxryk.cn/163qyqczrpy.html

Py:   class User: pass
来源：http://www.sxryk.cn/163omlqpokd.html

PHP:  class User {}
来源：http://www.xuanzx.com/163gakknbzq.html

JS:   class User {}
来源：http://www.sxryk.cn/163outhjicd.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163vgdoracy.html

Java: class User {}
来源：http://www.sxryk.cn/163rkriyzzd.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163srabmvii.html

Ruby: class User; end
来源：http://www.xuanzx.com/163voaiogxb.html

C#:   class User {}
来源：http://www.sxryk.cn/163fxosoirq.html

[G02] 构造函数
来源：http://www.sxryk.cn/163sibizxlk.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163esoahlrv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163tuoeksbm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163tttwvvvh.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163ardrutqf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163qagxzazs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163cknxvccf.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163fuxpoenw.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163eenfbjsi.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163ymkethkh.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163usfgbwra.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163gncocqxz.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163kyfeyjdr.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163tzbmexcy.html

Java: private String name;
来源：http://www.sxryk.cn/163fmeedyzt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163wkugklav.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163wytgukhg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163teslkvbf.html

[G04] 定义方法
来源：http://www.xuanzx.com/163bvnjuwmi.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163nbpulhfj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163stysjbee.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163irpudhyj.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163hfgbrdya.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163jwckffcl.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163cmfpjnwr.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163wfvplrwn.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163qbrfhqji.html

[G05] 继承
来源：http://www.xuanzx.com/163urftksys.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ilenhdgr.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163zngcggig.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163fyahkldr.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ucgkknzy.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163dyjygrzh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163sgtjmcgv.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163lwaqhtwj.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163sloobvge.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ooiaocov.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163txfvsksv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163iboulxha.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163lvbyvlee.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163glrkcizd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163qtrtrmlb.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wrgszkzj.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163hfdlrhid.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163rlwjrici.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163zznichyu.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163cgvbuitn.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163qpbuswaz.html

JS:   super.greet();
来源：http://www.sxryk.cn/163owmxvady.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163kmhchody.html

Java: super.greet();
来源：http://www.sxryk.cn/163xrbbhecm.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163vhampnzb.html

Ruby: super
来源：http://www.xuanzx.com/163btddopdr.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163qucowjfc.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163tajhzzme.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163suuzfwdt.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163oiqeatid.html

JS:   static f() {}
来源：http://www.xuanzx.com/163dmgfjbon.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163pngcpkwq.html

Java: static void f() {}
来源：http://www.xuanzx.com/163ogorburw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163wfjwuszc.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163typglcem.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163lmhjvdgn.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ytdbncfw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163mjvtrjia.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163uydbhdzf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163mjgzytgi.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163ubrwatwi.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163pxzqbfxk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163pykgshhj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163rbjpcpvb.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163guvarcfw.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163sjeqorbr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163gjucblbm.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163bocshzwn.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163trymhver.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163cmbcticu.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163jybqfcho.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163smapynsh.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163uombzayk.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163bjvfcien.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ybofwegw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163pvqhukhk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163cnxzwdot.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163kdakuekw.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163fhvjrngg.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163smysapdz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163acknhffx.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163czapmwbl.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163dktyzsgi.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163zalyfmcn.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163xgrkyyva.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163lkrnnnkl.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qjywrtrm.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163sjovznth.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163tjyzibmb.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163lffxtqvk.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163xtearbcj.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163nidavzbr.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ananryps.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163uhvsefzm.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163uznybxia.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ernwmpxf.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163unziskri.html

Java: u instanceof User
来源：http://www.sxryk.cn/163eqhztzub.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163wnnmycus.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163kyxgdhco.html

C#:   u is User
来源：http://www.xuanzx.com/163dejddfgi.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163mbhzjtct.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163enxgcjmq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163hfuviwwy.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163xoljhunl.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163mktjqpkg.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163sgpkqket.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163milaxyyk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163wufxkqcl.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163uidrxcyg.html

[G15] 枚举
来源：http://www.xuanzx.com/163khzaualp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ccntvvqg.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163engsggrb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163uirdbqwj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ynsqilyc.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163nyirvcbm.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163wjsojzyp.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163myiawwkh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163xoatndvr.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163catwyrnk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163gjancweu.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163erkodaaj.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163mvbmhalc.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gqgpbrem.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163guowrjyt.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163twrvchez.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163wzfizxys.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163wjvdvmzu.html

================================================================================
来源：http://www.sxryk.cn/163urizvedx.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163gaxyqbrh.html

================================================================================
来源：http://www.aibaodan.cn/163rnxxocjv.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163gojemqny.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163lwwzcgwm.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163msjixiys.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163atufngfu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163erjvgtlt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ndkfdmju.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163iydtnaen.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163opjnyvyf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163bpnxfflz.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163rglqtxeb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163sleiypuz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zkjbnirg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ouvlzzwl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qosvfhms.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jyeaxals.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163afohcytq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163pfexasdz.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qmlhvahb.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ojqsjymz.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163gcpantkz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bmqqdswq.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cnjyqtyk.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163wpgjxnac.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ornynerl.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163atzniyqt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163wjpsntgl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163jxewzbsr.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163gyjwksxy.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163tdauszek.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163gtltkboo.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rohylhpy.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rmrzivff.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163gtvofdqx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163bkpuvixm.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163nwnznnvz.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ointsezk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163wcmdrrca.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163hinjcczj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163sewkytnu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163lehiewzf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ngveebwb.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163qddpkyri.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163aplepqkf.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163azrbnwsg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163cbobgjrg.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163mxjrvygk.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163rkgdxtym.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163wzukajtx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pdqpzspk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163iiseftpx.html


<!-- 参考信息 -->