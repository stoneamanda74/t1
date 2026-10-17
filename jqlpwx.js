外链999!wailian999！

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163hvvlnhck.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163yxscctja.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163fabvtriv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163hbrrqbxp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hfycdjra.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nacatuuy.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163fnvxelxe.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ctacczab.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163bbxzsatw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163yetmejxn.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163rcvtfbky.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163jtqmkyaf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163vhqtntwk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163qwqxbcer.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vhptdyoo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163facmhlwz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163vxoigfrm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163xpmkgcpk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163qpmtvnpj.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163pglaolhy.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163wlmcqzvp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163xnsykomh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163nkjmnusi.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163kvxrcpdh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163grqwflva.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163guwfqqmj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163fpmltaxg.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163xyfgszgl.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163jkpsxzvd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163rnthvodd.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163pnvhvkql.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ancrhopa.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163iqzavjog.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163unqlkgqr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ayjqpbnm.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163qlzgctql.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163pffzieji.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163suchnapr.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163vkwgawva.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163yygdtsiv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163rgwsyrwb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jspmdpec.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ewdzvxyn.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163hnaddzbc.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163wtpibssd.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163qaqfqngn.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163ftzjftfp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163qxetfvkz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163kqdwfzcr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163auetfwrg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163iyhbkcnu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163kyzhbcsn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163puvajmct.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163jrqwmdid.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163biosjald.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163wawlzedz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163jfsasegh.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163wexhsfxa.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163jwfoltrj.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pbkicthw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nqzkzmfd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163lhxcjkyo.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163mzpjtyfd.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163xegivjip.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163udrkrkfc.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163beghfgqv.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163tshhdvbc.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gfgzqsrx.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163sfqyyzhf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163avcsknow.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163behsgovj.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163skhtdxle.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163pveuearc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163jisudghn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gruicuft.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163pnlszaer.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163oyoprsea.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163senfqwot.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163gauoksdw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163sgoojasn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163lxpcrugr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ehojobda.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163lkoshrhz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163cowilrkl.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163rolsiaeq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ciaffilt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163aomonntd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163iezgwudi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163qfwcvbpx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ohqkqaoe.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163zsmqiaoh.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163gavialzy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163rmnvwlye.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163byaltyyi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163pjzqbksl.html

TS:   // 同上
来源：http://www.xuanzx.com/163qizbkywp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163vkekujwo.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xxzxrivg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163enztiafn.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163hsbpyaxf.html

================================================================================
来源：http://www.sxryk.cn/163avrazace.html

G. 面向对象
来源：http://www.sxryk.cn/163bfosqwuk.html

================================================================================
来源：http://www.xuanzx.com/163ybehstoo.html

[G01] 定义类
来源：http://www.aibaodan.cn/163lyuogkcl.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163rxrspxws.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163dpolmpsf.html

JS:   class User {}
来源：http://www.aibaodan.cn/163kctcufyp.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163dbokzpne.html

Java: class User {}
来源：http://www.aibaodan.cn/163esifyunt.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163bikieojl.html

Ruby: class User; end
来源：http://www.sxryk.cn/163dftqwvol.html

C#:   class User {}
来源：http://www.xuanzx.com/163fhdqsont.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163icgamitg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163rdmapewj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163elmrdtja.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163lqktqqjr.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163elxynbkq.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163jnbxtbiw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163bmppqshh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163dhqorgsy.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ctpcrwol.html

[G03] 实例属性
来源：http://www.xuanzx.com/163wbsilufn.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163naupfnoq.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163rithvjbo.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163fvhrplij.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163ieabiipq.html

Java: private String name;
来源：http://www.aibaodan.cn/163jodookjf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163bwngrkec.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163lslutweg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163adoyyyqd.html

[G04] 定义方法
来源：http://www.xuanzx.com/163hcwyoxcg.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163usnnraji.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qrcpzhkr.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163hltcrbkz.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ghsayjfu.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163vpshdzdc.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163tmwxjtaw.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163bydqcksn.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163zajppzab.html

[G05] 继承
来源：http://www.xuanzx.com/163pxelqhkd.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163wvuymkwk.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163oirypnwc.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163muurdwdn.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163cjpnhliq.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163zzimytfg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163kfiszevm.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163gvszmgxf.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163nyutinfz.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ysaaasmg.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163akgazwmf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gphtxswx.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163danyuolh.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163otshrsoy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163vwbdfvxo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ddyxiiyj.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163invleryd.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163fhyvpfme.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163dljmlzjt.html

Py:   super().greet()
来源：http://www.xuanzx.com/163rnvcoano.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163vxcsufcv.html

JS:   super.greet();
来源：http://www.xuanzx.com/163iaxmxfep.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163iprknvrm.html

Java: super.greet();
来源：http://www.xuanzx.com/163exwagjtb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163rukdpqah.html

Ruby: super
来源：http://www.xuanzx.com/163iejqfqtr.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163uhimrira.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163hmwkukst.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163bdertalw.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163iufelzzg.html

JS:   static f() {}
来源：http://www.xuanzx.com/163hpgbrmzz.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163qnpspkem.html

Java: static void f() {}
来源：http://www.sxryk.cn/163jytymniu.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163gtpxmhtq.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163qdtocvss.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163jfalaszz.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163hwzsqmcl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163xrnthmfv.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163uxebwopj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163zikrqsnc.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163aeiurwas.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163bzetwuqr.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163lanaroml.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ehbaroue.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163lpqzkzpj.html

[G10] 访问控制
来源：http://www.xuanzx.com/163cwokcnlm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163nmjwbmgj.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163gqqehhia.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163fetqhnxh.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163cleqhotu.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163hjhelxdt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163hokxfkeg.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163tdrzdxvf.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163sbxkoihr.html

[G11] getter / setter
来源：http://www.xuanzx.com/163onuqmkvq.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163tnvrvlcu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163eiklthpg.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163tzmjqzlg.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163hlyrhjew.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163imibkncv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163dukhvxpf.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qgrdkjjd.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163hbxdlnsh.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163yvqyuwxh.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163eaecrpog.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163kzflgwwz.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163oawiceyc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163kbvswuqd.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163qqodlkda.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163cuzkhmft.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163fbcneoht.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163vpcevmwz.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163tibmtjpe.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163rhdgfiwh.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163qvrnjihr.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163kxchvmjm.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163adoiyhew.html

Java: u instanceof User
来源：http://www.sxryk.cn/163odoeoqbq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163dmehkowr.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163sdwzgurx.html

C#:   u is User
来源：http://www.xuanzx.com/163rthachnk.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163tyecttpa.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163hnlponxr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ahcwrtnc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163bmhpzcst.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163pvfgibar.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163zieeslya.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163hpnxlopi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163mytecpdu.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163wfpihdyd.html

[G15] 枚举
来源：http://www.aibaodan.cn/163xxjdjhld.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163spkiucox.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163slwsniud.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163fpwpmnty.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gssyxjtb.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163hzosdyne.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163pwiwnlqb.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163qoerzgni.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lleejchz.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163vtymxkzt.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ldrlhwwp.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163cbwdeecx.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163eskhnqir.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163yqnhxikl.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163dqkgbufi.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163xrnvpbvz.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163rrcpqqop.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ioczusit.html

================================================================================
来源：http://www.aibaodan.cn/163voujjoca.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163zpztmoak.html

================================================================================
来源：http://www.xuanzx.com/163rsjscwfr.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163gyybbdoy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163xwwbisos.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163kcnqkbjq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163hloaflub.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163dvgsskue.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163jbrjixrn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163rvqudzsp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163klzfznzz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163utlrclfm.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163rlmzuseg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163qjdehche.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qkreclrz.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wdzunwqt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ifchtqoc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mvechwpa.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163zugahojn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zemqoxmp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163wjirzsml.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163yrmcgwju.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163qbuvzbpi.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163lrvqrafh.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jdgsjzgz.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xxnzgevj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vsiqvwer.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163dqqinkud.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163xhmmakzx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163hkmyteeq.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ayftevec.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163yjxnymqv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163xosyinni.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163unuhrdax.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163stmirbwm.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163sgbihwjt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163msucqdct.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163iuohyawg.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ehcfkqpg.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163rjfxdfwa.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ydkuuaxo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163xijuuoaa.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163sjifzjtt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163hfelnyae.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163lfdyisgi.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163cslnrjtj.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163mppapood.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163bsvdoeww.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163yssmhvuw.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163nlhcadbj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ghwnpsxx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ornwhnha.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163sljmcjev.html


<!-- 参考信息 -->