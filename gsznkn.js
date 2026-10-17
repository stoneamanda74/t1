外链999!wailian999！

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xtcqokpg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163giajfupa.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163wekmensv.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ormwphbm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163qipwbhvr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zfomnwpk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163unjdvizt.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163zuaoqaqq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163zhnsuhvf.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163yibktttq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163uyscxbin.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163dqssgvir.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163joifeykf.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163skoxcfoe.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163iqmouuik.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163rzvrheph.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163lenwamug.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163mopglwrx.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ndspogqy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sgsiyfyg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163deixbfsq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163mvafaiuy.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xszcovqr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163cgxyufqf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163begngmtz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163hjtdgxnj.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163tyqrklzq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163njdnyghx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163lkxmbvif.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163lecydzus.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xyhuofpp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163lozjwake.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163apyvhvkg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163quhkjkkx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163kykltnhx.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163slzxuccq.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163svmxknvx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163jczpbvum.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163uacchdph.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163dgnsadoz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163asgaubzw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xowdxpdn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163vlyuqwmp.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163qnykpmdl.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163fvhparmk.html

[F06] 删除文件
来源：http://www.sxryk.cn/163jdgrfvmt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163oyriygwn.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163qudeqhnv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163mnaowegi.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ezrbtqgz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ofmhxnpd.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ewfcelex.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163uofhxyzf.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ehhoiruc.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163arrndlrw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ehdiouew.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163rcqbykjx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qpocibsv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163msxgelar.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163zfmatmyq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qsrxdqhy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ltalelpq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163xxybvzil.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163qmumlrrw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163jrfungjm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163vtzwlbzk.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163kyglkbbg.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bmgyakkm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hbkccqxx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163gfuoudeo.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163gnpvqsmb.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163vtlrfjsa.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163geturwne.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163siptqkqw.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163givedvdb.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163lvaamvze.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vxiuqpus.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yuelddyr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163avydpoem.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163gseevpcq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163cwwomwqn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163dhhkjldv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vnonxzul.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163qozkniwe.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gxaebaps.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163nkvywwmv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163xmoheguh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163enmeetsu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hzxkesdu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163yksevtnz.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163swekqlsi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163wcgdjjku.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163jixcqgqv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ljfzhdoe.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163xydpfdln.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163jwspjrux.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163exhzunyt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gxjdtoyu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163xwdkhcey.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163vqwbfyaa.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ishekjgg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163wjwnmnan.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163zrniduxq.html

TS:   // 同上
来源：http://www.aibaodan.cn/163odblyyjv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163rserpsgf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163rhdgaoud.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ujlxodsx.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163lpyaxklz.html

================================================================================
来源：http://www.sxryk.cn/163bkinotxq.html

G. 面向对象
来源：http://www.xuanzx.com/163hjhkcfbz.html

================================================================================
来源：http://www.aibaodan.cn/163toyzdrad.html

[G01] 定义类
来源：http://www.xuanzx.com/163qglrxaba.html

Py:   class User: pass
来源：http://www.sxryk.cn/163oenzeogn.html

PHP:  class User {}
来源：http://www.sxryk.cn/163qrzjiwda.html

JS:   class User {}
来源：http://www.sxryk.cn/163qjawhpyi.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163cllqspui.html

Java: class User {}
来源：http://www.sxryk.cn/163tezgaejs.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163jodazmuw.html

Ruby: class User; end
来源：http://www.xuanzx.com/163qputwacn.html

C#:   class User {}
来源：http://www.sxryk.cn/163ezwvlbte.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163jfrsptgd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163bpubhbvk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163qxjxjmpy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163bvaxrsjp.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163cjbrphrd.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163fqbdymmf.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163bqcwnqye.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163bjwirwgh.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163pjtjuemf.html

[G03] 实例属性
来源：http://www.sxryk.cn/163raiezyuh.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163vgfdhdgc.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163thknlvhr.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163qfyipzbv.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163qoijzrfn.html

Java: private String name;
来源：http://www.sxryk.cn/163velogcza.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163qhxaglil.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ijjayopv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163eszxqonu.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163jrvojcbg.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ryotfvwy.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163aonnnzeq.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163pwhfdpba.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163omjwntrv.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163tksafuiu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163gkrhnzoy.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163fmhwokfn.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163dtyegmdt.html

[G05] 继承
来源：http://www.xuanzx.com/163odrfdtup.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163fwleftjh.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xjgffhfe.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lpvexjbn.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163guvesnlh.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163fionbwzy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163fowubokr.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163ujvdvxoc.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163xyoajrgg.html

[G06] 重写方法
来源：http://www.xuanzx.com/163bgefoemc.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163qdrdoewi.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qrcrwlua.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163xdofvyhc.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wugkwfhx.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hexpzczj.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163qlrkwlto.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163aftagfis.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163degwywao.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163jisbspfb.html

Py:   super().greet()
来源：http://www.sxryk.cn/163lawthiwl.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163vnjxtoqw.html

JS:   super.greet();
来源：http://www.sxryk.cn/163hdoqnngq.html

TS:   super.greet();
来源：http://www.xuanzx.com/163idhrjjqp.html

Java: super.greet();
来源：http://www.sxryk.cn/163mxumwffx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163xggcsbfc.html

Ruby: super
来源：http://www.sxryk.cn/163yzjgxdeq.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163yixeoxpr.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163spfzlwtj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163xjdpwxuv.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163qedrzvdb.html

JS:   static f() {}
来源：http://www.sxryk.cn/163dxqlpnyl.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163aruvdkgi.html

Java: static void f() {}
来源：http://www.xuanzx.com/163kxvcgbfq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163qiybitwz.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163xxwswhco.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163akulgvlf.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163tskgjjks.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163rhrjdsxs.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163rvqartfb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163qyzvcvle.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ouowiblo.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163sjijsmur.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163bopalbpd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163gzlntjwi.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163coxmirxo.html

[G10] 访问控制
来源：http://www.sxryk.cn/163eypuwvaf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163acostgtv.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163sqvykxss.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163qeycmslh.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163xxvwdiyq.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163uxvenxwm.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ddipizsp.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163enggqcqt.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163cyuiqcfw.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163lvipmlhg.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163coyfutib.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163akudzzsi.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163oatmxccb.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163zluonfqq.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163qwspmmqe.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163kxiqnlqj.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163hatxwzxc.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163loslyvxu.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163szewxbsh.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163uinxpasb.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163bvxwtyav.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163enlrkhzt.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163oqgskosr.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163zpmwcrou.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163wlhhpfhy.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163pnvpnskb.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163xitjqxfw.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163vdajslpx.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163bdgodweo.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163zonddbth.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163hwxrcxod.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163hrjjahna.html

Java: u instanceof User
来源：http://www.xuanzx.com/163docsmnze.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163dgpnxrxq.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ncorpagm.html

C#:   u is User
来源：http://www.xuanzx.com/163xebuvwgu.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163czznkmnw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163viobfmtl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163wgsaoxpz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163umjxufhv.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163rthqyrxp.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163cdoloett.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ztnhbiqr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163lcuipztx.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163kndosyme.html

[G15] 枚举
来源：http://www.sxryk.cn/163fllmgnxi.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ypdiveue.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163agapijst.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163qoqlhlxq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163cqwlipuh.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163veehcnaq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163hqkumlia.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163syldhjve.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163oitvhqpy.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163gpwygmbj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163jmwglbak.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163qieuscnn.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lwflwfsv.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163tlyqimiu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163asfrmzzl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163xbdtlnxi.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163sapseerz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163eobvcaop.html

================================================================================
来源：http://www.sxryk.cn/163tashovdc.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163eglnwfvl.html

================================================================================
来源：http://www.aibaodan.cn/163sdqzwuht.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163dkpyuzxi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163pwskzkqo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ygtvjhrt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ipuinuww.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ppbrbsry.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163kdovjixn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ataevyzr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163gvnovyqa.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163gaudexkb.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163agiuiwxy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163opzbkxxq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163icrxarlr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pgjzreww.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zununkbi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lrjvwuwe.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ntdfnupf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163xnbymnhp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ljjtkwmp.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163yplmxehk.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163wcrzkdar.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163qjrvvybs.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163txifwasm.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163wlysxfpq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ezmnzjnw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163dbnrsvkr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163drckgajl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163czftccbc.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163webebrtl.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163okqshjps.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163qxwvbafb.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jiqagbwe.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163dnyuzipi.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163tpiegovq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163suqjbeqt.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163pzjivxrf.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163shfgqavi.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163cxizjykz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163uidztdrp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163dighxzzf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zswlauyc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163bxmexlxa.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163tkszkqup.html


<!-- 参考信息 -->