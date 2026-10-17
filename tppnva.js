外链999!wailian999！

[F01] 读取整个文件
来源：http://www.sxryk.cn/163jpipfmnb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ovrzbped.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163oizlgtec.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163runjmatc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163woqnjcph.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mfzopenm.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163axvvbjqz.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163zcodpkmg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ihinsfov.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163nozkrhhh.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163bqlwtapr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163rxffvzop.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163bsaygvlz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rnsvshdu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163mftkegsh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163kqpwtbet.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163bqsniopw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163koryssvh.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163qgmmvkkm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sipfvijl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163jzljnzpt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hdlmyoop.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163rmitalsi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163zvdboonu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163evmgtvdz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163bevydxel.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163xsqqebrb.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163fgesovmb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163pgowmogi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163keyzdmsr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mnyzivsx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163iqhfulwg.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163nuqjbhwn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163sfytgguu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163crltkayt.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ixeaujhq.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163xqafkgvs.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163frhelprn.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zvuvblns.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tgqqgijk.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163rkwititw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163glfcokue.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163xlvpzvgs.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163nmrbgyvd.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163auqmvlbx.html

[F06] 删除文件
来源：http://www.xuanzx.com/163safwlaaa.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163qwlsapjl.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163naucfajz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163bnwmpyrv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rcumyvzg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163otnepiue.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163hltalmwk.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163aynzahpz.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163opydxoke.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163cmmnfife.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ouwubmpm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zykqyxzd.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qnbcjrfh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163actekfln.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163vmefmjwa.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163rtlmlfyj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163mozyhuip.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ratbsycu.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ofemjnhr.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163nomhnslb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163xfwqwqpp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163icfnxyru.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163igpjhwbp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kvufgyyb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163wjktoovj.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163kmnrescn.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163mbaayzwc.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163gteoigvp.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163wawysdzp.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163vdwheevr.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163smcifhik.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163nqabgqwo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vulfknko.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163sggghcqy.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163zimghiup.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163shsedbqo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163mfkyhooa.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uqxbzzrm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163bfaknsup.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fiotdkoh.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163qtyfnexz.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163fxzpndis.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163mkmtvtkt.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bjyuweua.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163qdxqkcnj.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163nyfspfhq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163spidfene.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163rapjlmen.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163tujviroy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yrmtwgro.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163pjpfmcjx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163xglcwluh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dbhaland.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ezldqfzu.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163esiweplv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163axrmrvtx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163bagoaexk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163umviwrtg.html

TS:   // 同上
来源：http://www.xuanzx.com/163ohonwtxe.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163xdtwydrb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163gnkgespz.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163jkuoooym.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163caavvzja.html

================================================================================
来源：http://www.aibaodan.cn/163ftjkrdls.html

G. 面向对象
来源：http://www.xuanzx.com/163secrmvgx.html

================================================================================
来源：http://www.xuanzx.com/163hdbwfqed.html

[G01] 定义类
来源：http://www.sxryk.cn/163ehrprtgr.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163gowlkuzh.html

PHP:  class User {}
来源：http://www.xuanzx.com/163wzisfymi.html

JS:   class User {}
来源：http://www.sxryk.cn/163fobwwglh.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163nytudeik.html

Java: class User {}
来源：http://www.xuanzx.com/163iftqnfxf.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163jzzbzivx.html

Ruby: class User; end
来源：http://www.sxryk.cn/163lyjgydvs.html

C#:   class User {}
来源：http://www.aibaodan.cn/163pxhmvumi.html

[G02] 构造函数
来源：http://www.xuanzx.com/163strytzas.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163zpanbvmc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163vbqidenh.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163xuafettl.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163yniilwvn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163goyxhvrq.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163iuoznfls.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ykiluqky.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rzmgtfil.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163pouiwgdm.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163wlqsgpek.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163hitrvzdb.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163zrtrzmvb.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163czytgigw.html

Java: private String name;
来源：http://www.aibaodan.cn/163argcbruc.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163vfefcykp.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163ugpvcawe.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163otetovmt.html

[G04] 定义方法
来源：http://www.sxryk.cn/163qgzvezcf.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ijpbalre.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fgxirdrk.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163uvnlvgxf.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163qxcvfzsm.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163lfbyfbdk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163fhrcjltn.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163gybbpobh.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163yvvsswtx.html

[G05] 继承
来源：http://www.xuanzx.com/163btraklmg.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163fsqheoig.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163wzofprrw.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163pxfmodoa.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ukjjiowy.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163gqxtrmqo.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163hmainckr.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163hygibdkp.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163btsfhobe.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163icnulyno.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163eafftebb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163onqvnndf.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163mkkrwhkn.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163cunnsyln.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163sqwvvydo.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163kfamsjjd.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163bhizfwyn.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163froiijpi.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163xjczfltg.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163edxvieio.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163xtppacaq.html

JS:   super.greet();
来源：http://www.sxryk.cn/163dfjruwra.html

TS:   super.greet();
来源：http://www.xuanzx.com/163tkijddkz.html

Java: super.greet();
来源：http://www.xuanzx.com/163bjfuwxft.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163defnowzo.html

Ruby: super
来源：http://www.xuanzx.com/163zhsfrmkn.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163hkjfvthh.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163skybsdjx.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163cpyrtbuj.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ambkacxa.html

JS:   static f() {}
来源：http://www.xuanzx.com/163dowvbndl.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163syfnuhtr.html

Java: static void f() {}
来源：http://www.xuanzx.com/163zykhhixq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163xqjmclpc.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163zrvhhnhm.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163hhkzhysl.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ooxqtyky.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qockcmsm.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163zsmofpwq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163dhehymfi.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163xxndocbt.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163oldvkerg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163wqjqaywo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163gvqatjpc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163lvfukcpw.html

[G10] 访问控制
来源：http://www.sxryk.cn/163uzjlltnf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163ducjoous.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163btkbqeak.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xoetrvnn.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163vrtsrurc.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163rhqmyirz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163bymcdaws.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163ymymdjyk.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163svsctybd.html

[G11] getter / setter
来源：http://www.xuanzx.com/163rieaithd.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163etmylrdh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163sbnavirs.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163hbgzkxno.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163iznknkbd.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163gazumqse.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hsiomftb.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163sdgmzthj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163zjttenab.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163kvcyqdtw.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ippfhxeq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fczltmzy.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ixfdwjwh.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ufmgaxav.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163nvutjjqv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163uaazsiyb.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163hcgexkjb.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163fwyeqedm.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163pwvzxtzo.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163rutkxzbh.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163szsvygxl.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163xtqnftav.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163owucbcle.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163bksyugmt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163hljzdpxn.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163xfdnsggw.html

C#:   u is User
来源：http://www.aibaodan.cn/163xuixyyko.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163reigqgwk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163tibdrdly.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163cnbwizub.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163dlalfmzs.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163jmhnkbzh.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163inubtmej.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163vpqxiuti.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qrksmxmk.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163rkstmovz.html

[G15] 枚举
来源：http://www.aibaodan.cn/163inaiartr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163sstupkqz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163kkbkpvet.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163eltwxnyf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fsjynlpz.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ihwfbokc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163vtwwmshc.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163kojfionk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163rkzznkwu.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163qujnmsmc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163xdkfnvmw.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ezbeyide.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qdtcjrds.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fltteldn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163khgktvyk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163axasfovn.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163pyavsoyt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163tyxzlnls.html

================================================================================
来源：http://www.xuanzx.com/163etinonop.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163khbkmkdb.html

================================================================================
来源：http://www.aibaodan.cn/163idveanok.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163sizmavrn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163swdvusgg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163weklylog.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163jcycwmcu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163mjzvvncs.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163ocpszbkq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163zxaacnii.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ttxtvrpy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163vsvfldok.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163yesiazsb.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163nqxuyzko.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pnmobvzx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163omzfuolq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cozgexfa.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sqhymxms.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163hqmnvapw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163cuxloign.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ingedfsu.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hwxkscuz.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163cemhcaci.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163krsqxvid.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rkazyjxt.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vzfieiae.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163oqbjbdoc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163jrutoakq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163jtnozkvz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zoepromg.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163sirzghni.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163nnzactwf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163mauhemni.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jedmxoft.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163oritinot.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163gjrsnlvt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163btzezqwz.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163liitjxxr.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ksfqdwfm.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ylguyvos.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163jesiwgmm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163duyssohg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163nbgamnjj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rkzfeslk.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163otojjzlu.html


<!-- 参考信息 -->