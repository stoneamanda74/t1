外链999!wailian999！

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163xoupbcym.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xezlwfkg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gzsxcztz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163jlqrrjhi.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163kzrxhmto.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163iiwnllwg.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163efhmgaow.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163ggjjratc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ibcvdpgv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cagnwaci.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163pgiqvivv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163tpsgzfod.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163hxsmjowe.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163qpdpobik.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163qdgqvfpy.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163piixiffh.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163ywxdqtjc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163yjrurxwn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qzxwmixw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163sfnggpzo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ckdnivrf.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163vylustwv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163clvcpupa.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163jkoxigry.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163mpyqzlrx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163wbcujsuk.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163sclfmomr.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163psllyfvn.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163mlhinrlr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vqvwjcle.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163iyjfipso.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163djhvaemm.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163gnrnqoan.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163blrisnql.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163lvmtwsmf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163mhlptrsa.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163vuchrmfd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163yjcltmlt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xizjhyub.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163nuhefdgc.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163fdspblbi.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163okhfkrgq.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163ifqkcjdq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163dsnpmpnz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163lnkwtutz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fgrxtdug.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rjkjyusy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ubwhaufc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163jlkcljpt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163tgpwepga.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163xzxzqztj.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163pmdouiuu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163pnhrpcdl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163jovkwvzm.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163kdeacmhv.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163iobnrpkq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163eouhfsrp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163tnggphyi.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163fmeswbix.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163rzemaoif.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ptsmxbqe.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163plyvpyfr.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163vkqftjph.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bjdehgdx.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163gshptzac.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163uswbmhey.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163fwvnxavl.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163rrkefncu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163anvvtkhf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163sjcbmxvx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163aguqhaqm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163kxsrzktr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lxbipznp.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163dehibyzd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163uxjijpiy.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163tzmpxzic.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ztgmnpba.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163hdzbepra.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163htrvbrdy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ypdpxpin.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163raiewrkp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qhncdllj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163xlbbeyer.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163wcgtvnuo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163oihxgnav.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163usnhzgwh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163uwupydas.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163hakdludb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163lrjkfpbm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163xtjiafjw.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163cuimlmfp.html

TS:   // 同上
来源：http://www.aibaodan.cn/163htaktqtb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163zszgfkjl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163vxsqlkys.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163uaohtlnu.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163kvpbsflz.html

================================================================================
来源：http://www.aibaodan.cn/163amtedjpw.html

G. 面向对象
来源：http://www.xuanzx.com/163usligzfj.html

================================================================================
来源：http://www.sxryk.cn/163xhirkkjd.html

[G01] 定义类
来源：http://www.sxryk.cn/163xkzplipr.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163fblollre.html

PHP:  class User {}
来源：http://www.xuanzx.com/163xaxpdntf.html

JS:   class User {}
来源：http://www.xuanzx.com/163vyazxmks.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163bnvzhjod.html

Java: class User {}
来源：http://www.xuanzx.com/163wzsueiro.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163altouduw.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163rbnwoijm.html

C#:   class User {}
来源：http://www.aibaodan.cn/163qxzpbmfl.html

[G02] 构造函数
来源：http://www.sxryk.cn/163gtsmwesy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163ztowspbo.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163adtxwxgn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163qwcnuolo.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163yurcodai.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163lvvbnvgi.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163nxjxxcdp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163mzgmeagx.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163fqikrdxz.html

[G03] 实例属性
来源：http://www.xuanzx.com/163emwgoxoz.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163zzdvnboj.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163nsntkhlm.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163whlaurrz.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163uminsdrz.html

Java: private String name;
来源：http://www.xuanzx.com/163jliowtic.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163zlepdfxg.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ykscxclm.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163mqicrgjs.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ftalouhw.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163szgnzxxu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163upbysjpo.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163bqylylyc.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163ootxyzlz.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163okmpzpmb.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163xchycimx.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163xpcfkoyo.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163yrvqqbpt.html

[G05] 继承
来源：http://www.aibaodan.cn/163rksunwyq.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163uwfifmlj.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163tyoffekk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163cyjtawrj.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ltjermlg.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163xqzdrais.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163jbefkpbd.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163bkujkddj.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163pgjtuodq.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163pfdvvzct.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163iqvjdddh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163xbvcvanl.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163yegowjam.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163ubywzwnu.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ggfhvtao.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163ekxljkgs.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163djlazeyk.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163sczesckq.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163dpvebiyv.html

Py:   super().greet()
来源：http://www.sxryk.cn/163lnhjeaig.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163hnekbfie.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163wihenijt.html

TS:   super.greet();
来源：http://www.sxryk.cn/163qlyfulch.html

Java: super.greet();
来源：http://www.aibaodan.cn/163niurkcar.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ygijczgk.html

Ruby: super
来源：http://www.sxryk.cn/163bwprbkno.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ahbgcypx.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163hyypdrno.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163aahzoyje.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163ywxgctht.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163oltpppyr.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163lgnzovpp.html

Java: static void f() {}
来源：http://www.sxryk.cn/163uqhjmgeq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163zjrhvspx.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163kefjvjqv.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163oywtsukx.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163kcnxixhr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163cyglvidg.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163buadgqrw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163qhjjtwyg.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163tdayclhs.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163mdshpmvn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163jdddbbcc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163glykfryy.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163fdhwiczx.html

[G10] 访问控制
来源：http://www.xuanzx.com/163cvoffvjx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163tklnmqng.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163nsivhrtw.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163rdkhlpkb.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163pbdevelu.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163vspxgqak.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163duuorblk.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163fuutyxeu.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163hubwoswm.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163esdvolns.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163cvjhdbno.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ulqnozzc.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ebnhhpqi.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163wixyftmq.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163aayopcmh.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163qnhluqup.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163mhdnrkaw.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163ynbydiwk.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163qskywcii.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163xvzvjvoz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163tepdvowg.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163kicosaho.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163bqnrfsny.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jeefkfnk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163zlufiwaa.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ukefhklh.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163pnmvgbkb.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163zfhqdsbl.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163fwzqmcli.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163jkxpfumu.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163znxsbrhd.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163jfnwppdc.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163kehqlzsk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163lhstjwzi.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163rznfscrk.html

C#:   u is User
来源：http://www.sxryk.cn/163wqbbtrew.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163rfjgubdz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ehcsppcp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163hmctpwhr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163vrkxprob.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163kqipbrzh.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163vayjkquv.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163nfvjsyhe.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ueokspts.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qwmjaxkc.html

[G15] 枚举
来源：http://www.aibaodan.cn/163avtrmapo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163mffcbltp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163zxvgdxib.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163nrfevcov.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ggmgeakm.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ynqjpfcu.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163wfkawsqg.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163rxxjadcf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ikkngopl.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163mcjybzwn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163velpxywq.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163xvriuzyk.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yxrrmwvb.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ijwlqdcj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163exqpawcl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163zjxenfbt.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163qsxoqfmj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163mtseqfvm.html

================================================================================
来源：http://www.xuanzx.com/163tzhzxwtl.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163qweebwbf.html

================================================================================
来源：http://www.aibaodan.cn/163qmhxunxe.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163bwudbelt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163zizouaiy.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163qgxuyczk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163mrsmxagh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163boobtwpv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163zmxvrxvr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163auybuldo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163mmunalcx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163uzekcyed.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163xlicjfxj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163tyvxbipz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oirbppic.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kzdavvry.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ziglacdv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dttlizoy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163vpgtmhge.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vbkjeaor.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163pgyhrqui.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163cxxkslad.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163tjhvdspu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wvhsrrhz.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163edjshcdj.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163awukxfna.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163npnqpcfi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163pdjixaxd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163pmicetmy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163fpfprdsc.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163hpkrzcio.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163zmvoneyp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ujnktbrr.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xgqovpho.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163dddztpbs.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163vvwpslyp.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ukqfwrqu.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163suygwpyo.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163pfdmxtnz.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163aabmxljy.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163dlssljej.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163fckcljgg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163asumrenu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fnadyqyo.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163zndczayt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163gxspdymi.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163jzgemjew.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163hfgbxrem.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163mbezqeal.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163sdhgtypb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163zqyfuxvz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163bbjpifuh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163dfzezzzw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ubbrmqvj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163bgpxiwuq.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163psbpqkhr.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163olfqclum.html


<!-- 参考信息 -->