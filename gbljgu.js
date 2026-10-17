外链999!wailian999！

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163xonvslxi.html

================================================================================
来源：http://www.aibaodan.cn/163egiyslam.html

F. 文件与目录
来源：http://www.xuanzx.com/163fwdffste.html

================================================================================
来源：http://www.xuanzx.com/163mgrhhraj.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163plryhqsu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163duagdrmr.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163neufiwfk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163zkwdmixx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163tivmfzgn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lgitwzva.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163lzcdrtsj.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163vyparclk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ltqwonzm.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163vkhviebg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163roxhsggr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163qusiechf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163csgxxaoe.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qoxfrtry.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163mxzqdsfi.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163hbpzsadb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163xvbxwqkx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ixnqlbcf.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163slhicbtr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rndiaikc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163chcolfdd.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163shipsaqf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163cjrwclxn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163kdobblej.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163pccejepl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163uhsjvvbk.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163tbuvpoif.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163tylmrxhc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163azqsvazb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163zbmdlpdn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163jsesnzdn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hiawqusy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163jumjtsow.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ljtqjeuo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ijkqzhlc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163womgtbej.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ooqfcmin.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163raexnqvp.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ikuaryqi.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nihszwys.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ltoropkn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yjavgfce.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163hetyjywk.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163imyenavw.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163yxxfswlz.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ogcqeqfm.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163hoofnytm.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163hcprlnnt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fpdlyasg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163nsmxngvc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ivurdsmu.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163otwoxtgs.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163yaixwkaa.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163qbywwrzq.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163gwsicdle.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163meluuuvf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163rgvadbgo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hkhzjwnd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163hprzxxjh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163clbfuqqn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163zyyloenp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163siitydjs.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163nhtfrcdm.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163hdecsczf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163fuiqorco.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163glymmoor.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163dkgjowlw.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xtmpqyfp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fdybmqhf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163higqoczi.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163egahhmwq.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163krqfwljv.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163yoyebcyd.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163zwtmpsdk.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163tpojhfpw.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163owzkteqe.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163zoavwbph.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ezjonbry.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163cqsxnyeu.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163zpbkgago.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163rkncwyli.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163czsgwtws.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163avrhtblc.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163wesztqin.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163eisinzag.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163dopjkvkd.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163xfzzreli.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163fsexwvud.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yfavqsbm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163uvtwciyl.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163xyamzidd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163oyzgjfnd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163jotwprjf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163icfsjrex.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qqraentg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163igqhjhrv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163mohbkswm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zcmbnpwi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163lopcdlgp.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163fygperlg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163lwmqnjlp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163fdlviegj.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163mwqerpkh.html

TS:   // 同上
来源：http://www.sxryk.cn/163erzzkxil.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163mqnqtlza.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163anqdynkw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163agajrtbk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163qpqedvma.html

================================================================================
来源：http://www.xuanzx.com/163emtgovfi.html

G. 面向对象
来源：http://www.sxryk.cn/163ipcjppon.html

================================================================================
来源：http://www.xuanzx.com/163bhjbnbwi.html

[G01] 定义类
来源：http://www.aibaodan.cn/163qztssdcs.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163rnqerhyw.html

PHP:  class User {}
来源：http://www.xuanzx.com/163cmbvlsyg.html

JS:   class User {}
来源：http://www.sxryk.cn/163tizcszot.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163gpjlrsrf.html

Java: class User {}
来源：http://www.aibaodan.cn/163hhqgqslf.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163xsgcxbgf.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fscgnsxm.html

C#:   class User {}
来源：http://www.xuanzx.com/163ddyajqka.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163wljucsbh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163aqmmsaor.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163nardxavh.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vassxjcy.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ojvknhlf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163clyffjql.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163eiureekl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163pnjcoige.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163hfwmrlyr.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163pljwlxya.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163gkhytxbj.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163xsmovpuj.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163eepeqhvr.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163mrtpihzr.html

Java: private String name;
来源：http://www.xuanzx.com/163bcxshlhp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163kvojsome.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163cnxcttgn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ytmnixat.html

[G04] 定义方法
来源：http://www.xuanzx.com/163ggofmaib.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163dwjgzsbr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163ffhuoxjw.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163srcvclar.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163neffpjwt.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163hestkwsu.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163qwbjuvms.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163qdvtguak.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163xhrxrkyx.html

[G05] 继承
来源：http://www.aibaodan.cn/163wohniydy.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163wmqfljod.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163zsmacajt.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163urnoxble.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163acshdtzs.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163umwtndsh.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163hxhdcmkh.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163xlbjugyd.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163rwnbfkcm.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163uxyuxyrm.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163gwqzfrtj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163zdmiexqq.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163wbgqvtfw.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163squdqylv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163alcyrqhn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163jcixpweu.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163wbdbbpwo.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163cydbudzo.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163ztsvluyu.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163myfvrvjm.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163rlhodwkt.html

JS:   super.greet();
来源：http://www.xuanzx.com/163xjmgixgz.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163rpnginny.html

Java: super.greet();
来源：http://www.sxryk.cn/163sihbxqxp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163jqqvsxrp.html

Ruby: super
来源：http://www.aibaodan.cn/163yjueydup.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ejchnygy.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163tbgrsbhi.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ypckazmy.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163dcixqkde.html

JS:   static f() {}
来源：http://www.sxryk.cn/163rnvogkex.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163pwfoajvb.html

Java: static void f() {}
来源：http://www.sxryk.cn/163fdpdtuwj.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163aetcnktz.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163mpgblyec.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163hzafzasb.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163bxpwsldr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163mqioftsx.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163nnuzhvcs.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163xyxwlbqu.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163smextndh.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163mvyktkbq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163eejmzyuq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163tgyhmydk.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163hexlqvxm.html

[G10] 访问控制
来源：http://www.xuanzx.com/163eubaecqm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163etyavwxi.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163dymglpaa.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163qyrgoqkv.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163wkopilwj.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163eqxnsxzq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163jiwqltln.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163zauscpbw.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163czvgtrff.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163yvsoyplv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163hzknddci.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163habvcqfj.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163iyiffonn.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163llfhinfl.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163tgrsbtqe.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163bwqrvbds.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163qjkklgww.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163bjqsvpwm.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163sebcpbqe.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163lsekspzu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ydaarzoc.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163xbhpbgbi.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163lcgfsiwl.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163naijzrmw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163pemmekdt.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163nkccimjj.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163brxtayld.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163cgztomsw.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163sumfeqzg.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163lhzdwfgs.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163spgwnmkx.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ikdowyrr.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163vjruppoe.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163mwkuonwd.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163dljwstxm.html

C#:   u is User
来源：http://www.aibaodan.cn/163csckkwzd.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163ymhaqtyg.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163pcpsfwyk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163haznmink.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163wxhmimnr.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163iqmmasul.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163xufrpzth.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163sqezjbtl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163gzvpiliu.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163bprerzdv.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ayporqse.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bqolyaar.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163zygqrudv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ybmzzjnn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dlfbwbow.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163xuowsucf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163qlfqdral.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163lvhtggtj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163njqomyzn.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163oqnujlax.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163rqklbvkx.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163idbsoykv.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kkgxrlba.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163aehqjkwf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163dkfvhjol.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qnaynmqq.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ztqgryyh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ovvzvuzu.html

================================================================================
来源：http://www.sxryk.cn/163romkblsl.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163pzdwjseq.html

================================================================================
来源：http://www.xuanzx.com/163nyvxxbtu.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163yowytgqh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ptqxcnqe.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163hnzqncsj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rvlfayje.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163vwdvjohr.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163moqkspel.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163vqjdmmck.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163rdocadrq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163kqtkmvhn.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163xxflfxyh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163yoqpslfo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nbzrbzhw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jguumasv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zwyscrry.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pylcunuu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163acmhqzbr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163jrcnwwxe.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163iwqscgty.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163rasrwfri.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163xqadxpol.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163xsuhisrc.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tvwspzxs.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gcpfchzj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mywwquyq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163rwkswsrp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163iypcxztc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163dsfdttlh.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163hqkifogc.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163dygqfzrw.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163fkqpoecc.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163djcdaizf.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163scfbxams.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163quqsuhzl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163toopibeg.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163gfactfvs.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163urguldgi.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163zfkotsio.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163xzrmtuzk.html


<!-- 参考信息 -->