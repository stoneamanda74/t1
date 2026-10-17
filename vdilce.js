外链999!wailian999！

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163zkryvlct.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163annggtfw.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163fkxoaudf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163qsehjuge.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163bsvvhudg.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163akqwfbgi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163mldlezch.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163logqrwuq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163zyultvkb.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163gqsllykv.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163tpvohoor.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163hrorkgfj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ofngfuiy.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xysbpseq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163yuycbrin.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163jpihuxph.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163kaqgwnfs.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163blfaajug.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163zlomqwxy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163wccbipqf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163qkgfcbbu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163dtnnlytp.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163wieyrltx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163jdnjunrm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163iengdgcq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163pddxqfyb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163jymnfrmy.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163nufnbrqm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163nblshffl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163xiadncqn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163fgxhqczd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163rrwpywwr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163itbfqnvr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163tfisvizp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ulsvnvce.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163iycofhbs.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163fxwyagkd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163yhcepabh.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163iypwfzeh.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163xtvkfecm.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hjwrbvbc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hmxhowwq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ygndfsmf.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163wxcuodps.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163hflpgqyy.html

[F06] 删除文件
来源：http://www.xuanzx.com/163srzppfcc.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163qwuqonch.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163ozdeurlq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gryiqkvy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163lmvxvizk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dxdiieco.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163hsikcqvb.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163rwyxzfaj.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163qnpiuzcu.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163fqkecovh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163yaiepooa.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ujnzvrrv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163tblprqvw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163yzpzhzde.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163mokthlpu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163gvwgnfxx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163togxaxfg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163wmyjkcjy.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163bvvzqjlg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163rhvdkukt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163uiupqocx.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163kekdtkss.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163nutamxar.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dlphumwv.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ppzoceyf.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163faliudgt.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163xizgalbr.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ytfxvzeb.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163zmwaoqte.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163rqfyspmz.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ixaryzpg.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163oeqecrim.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xtpwemvm.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163btumypdn.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163qnumafll.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163wyozvxth.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163wncacunc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yggzcwpi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163epkcprxe.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163qvsvuysm.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163sncbcrjr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163jnszyzfx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rqdvodwa.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163oqiiuayk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163lobrxcdk.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163hbmiudow.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dyxfkkri.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ldpjmnwx.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mfqtbpzj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bdzzbvbc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163rcoewqov.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163mswsyhpb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gzzlglad.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163kiykatka.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163gvxnybzs.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163pzvqxghd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163vsxogkyo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163kabsztum.html

TS:   // 同上
来源：http://www.xuanzx.com/163tfpvlajb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163xwtodtjq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163epezgdld.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163znjhdqts.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163esvixmti.html

================================================================================
来源：http://www.sxryk.cn/163bwbxvmtj.html

G. 面向对象
来源：http://www.aibaodan.cn/163tcjptglt.html

================================================================================
来源：http://www.sxryk.cn/163nljsgvmm.html

[G01] 定义类
来源：http://www.sxryk.cn/163obalujmd.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163hjndweum.html

PHP:  class User {}
来源：http://www.xuanzx.com/163wrrhhrfm.html

JS:   class User {}
来源：http://www.aibaodan.cn/163rmxgkhsc.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163nagfdsdw.html

Java: class User {}
来源：http://www.sxryk.cn/163osdcfsej.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163xadhlxxz.html

Ruby: class User; end
来源：http://www.xuanzx.com/163cbogwjiw.html

C#:   class User {}
来源：http://www.xuanzx.com/163toinsdwz.html

[G02] 构造函数
来源：http://www.sxryk.cn/163xdpcnuqw.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163qcnitior.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163pgrpykri.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ulrrvixy.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163oydcdnkd.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163dzaeqafl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163guzzsniw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163vyxvmytj.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163fhpuckwg.html

[G03] 实例属性
来源：http://www.sxryk.cn/163yjlwhgha.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163kwyddnis.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163kqreykji.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163fjmoqxyg.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163wdxuuwxg.html

Java: private String name;
来源：http://www.xuanzx.com/163vrlrqpzd.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163auwapzoq.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163llqefxck.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163wrvdhnfa.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ugkgeeda.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163suejodun.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163jiytroow.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163yfgqenem.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163oitwsdro.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163bouccoyr.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163memnzann.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163roroypon.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163phthoyph.html

[G05] 继承
来源：http://www.aibaodan.cn/163rdbrazwq.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163rbyeleta.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163xftnmqnm.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163nlqvrmyv.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163uyfimhfj.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163tkciuqqz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163nlmezdou.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163djujcyyh.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163fvsxlhuj.html

[G06] 重写方法
来源：http://www.sxryk.cn/163tfuvosqp.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163wdwelwqh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163hxbvgudf.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163ogwbxbho.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ghdbrzwr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163nuwyqylr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wmnhfxbq.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163eskqtbum.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163hrivgdbb.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163unndunbg.html

Py:   super().greet()
来源：http://www.xuanzx.com/163jtwavypo.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163gabbsyvd.html

JS:   super.greet();
来源：http://www.xuanzx.com/163zwcdsrpw.html

TS:   super.greet();
来源：http://www.xuanzx.com/163gpyrjuff.html

Java: super.greet();
来源：http://www.xuanzx.com/163birnssjz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163wqjyxavz.html

Ruby: super
来源：http://www.aibaodan.cn/163nvnozgmu.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hwerzsrn.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163tdlhvtzf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163cnbihfqn.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163iyxkeory.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163gyoodynq.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163yxizytyq.html

Java: static void f() {}
来源：http://www.sxryk.cn/163bejgeiaa.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163qpisqxah.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163eaylauxl.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163uhllehae.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qzwrytds.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163urdvgymh.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163civbetjx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163tgbnagra.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163emlhszew.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163kqwndjka.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163ppkbqmen.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163bvcnfkhc.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ucyhkbrw.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163clvtaoqd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163pzsnsugk.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ofxubvxr.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163dueqptei.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163laigrrcp.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163smwoiluf.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163kpctnmic.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163gwfdnppc.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163pgfanpus.html

[G11] getter / setter
来源：http://www.xuanzx.com/163liutilzj.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163tblysybn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gmwyphew.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ajgiagqa.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163evldtjej.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163heqprztl.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163mjcqdkrl.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163oodnphhm.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163wtdnirdf.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163msjorblu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163gndnqrva.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163eyaojmac.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163poowarcx.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163vkrczejh.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163qzssvijx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163lyppbfxy.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163bycadjsb.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163enxwtyvg.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163rxlougrx.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163xalzolyx.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163znstcupa.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163nirrvbtt.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163mejbcthp.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163xejephjt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163fsxrjipv.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163kmkmkfje.html

C#:   u is User
来源：http://www.sxryk.cn/163fnunobnj.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163rvhircqd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163chudxfwh.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163pbgmpagg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163qmwytgqc.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163mjancxtl.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163dqktqdgj.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163pobxugjq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163wiptbjhr.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ulrodyaz.html

[G15] 枚举
来源：http://www.xuanzx.com/163grgfpbln.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163hqqgtyyi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ovyzaibk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163bmdnklms.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ljqivoho.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163pjdwfoji.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163ewxcyuon.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ynvrpdco.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ouztimxo.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163jzeusdwg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163dwgoftis.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163vmhqjtbm.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mdmtdyfp.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zqjtypel.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163tpaissor.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163gfhzbecp.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163gzphglri.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163wyekrcxx.html

================================================================================
来源：http://www.xuanzx.com/163rjsotrux.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163avmajvxf.html

================================================================================
来源：http://www.xuanzx.com/163qjdazmcb.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163egzhiqnu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163rghmjcuq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163zensosxu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xubfezkx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163nbdghlab.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163tzxzmddv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163qoesijjk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ofayapng.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163zpmfuevf.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163lifdtzfc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163jayhaiov.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163outyznvr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vatmozio.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ufbownwx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tuksjvqa.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163mwhmzhnm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163tsdfnkis.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ixhsflli.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163sdzddvqm.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163ueamofvp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xsjqesyr.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qfakxgsv.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hkwliaob.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xwssbqjr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163vcthfefa.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163knpsblza.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163huhzfrtb.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163siiurpmy.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163bjsjjxqc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163lugxvxec.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mrvaezva.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qrgwgudo.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163tixrjvuj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163nzzkjlrt.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163jvcdhlre.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163yzpokbnu.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163tqtggcxb.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163nonpvmgj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163qdmkkpbi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mgakbbih.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bikkulyv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163rukdrxeu.html


<!-- 参考信息 -->