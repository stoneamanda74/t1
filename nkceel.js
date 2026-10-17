外链999!wailian999！

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163zgqlxwxm.html

================================================================================
来源：http://www.aibaodan.cn/163dxmoqrcg.html

F. 文件与目录
来源：http://www.sxryk.cn/163llgwstyt.html

================================================================================
来源：http://www.aibaodan.cn/163gbcsqfih.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163xfsyejsq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163cfitlkua.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163zqmenkgn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163demftkdj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ddcqeirw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163efwfmtyl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163mwukhtmz.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163phbntvdr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163mqfnyzwc.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163qwzjkvkz.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163cxnbqxdc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163wdnqzzfb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cbjkhbil.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ticanpsc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163woepqjkk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163afcxlumg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163jptwtgqp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163moiwokrv.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163jtspxlfq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163kvtllfnc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163majevifq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163sempjxat.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zibfugsr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163wlarnzjg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163vhxuqtyj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163cfcljnwa.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ictluzrv.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163indwihhl.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163dfsjmjfv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163fatvrtoq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fenhumtr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163lovjxpcv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163vnzoagmc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163hbulaotq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163bdyblxda.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163xdjtrgpu.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163dmhgrjcg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163bekqolpf.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qdvuxqnr.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qbqcoiir.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163rhpipfus.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163szrjxpfl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163jfponfdv.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163tuydydgd.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163kbgtpkqm.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163uhgxalrv.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163stzetjyp.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163rhldhzej.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163quufpjal.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163hvkjmgwx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zvvhvgyk.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163xgtqancc.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163renlrdjl.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163tpgzebmf.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163oiersmoc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ilrtbnju.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163kqunwbil.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163wjoxwopw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163veciebzu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ijxfmhkd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163gniflonp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163qlqnioah.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163etemftiq.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163vtacjdpw.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163csqavhgn.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163busyuofu.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163dnuaxeyd.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ehswbvzl.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163oskvbhzk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163afosmsgm.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163odgdvxwu.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ekwemjbm.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163kdbnewqu.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163olrlplss.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163lxgvxtif.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nhccndiy.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163snzgdqje.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qlhkpatf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163epbvwftg.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163oywltsnp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163gzgynjcu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163xqmarekg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jdkyylvh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163nnuhhcja.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163haybgwba.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163asiccipq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163edpflnbc.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163vzclmkdi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zyuyzyzm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163iqzxzxrw.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163zxmjvgbf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qegmiqbj.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163xlqrhaaz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pfokfktd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163eckxkmqo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163odqgvtqn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163vtonmtqb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ldnogpjh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163engofrxc.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163bgtjipbf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163rtoycgof.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163cxkdzdto.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163jrjqfnqg.html

TS:   // 同上
来源：http://www.sxryk.cn/163vrfzlcih.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ukcooqla.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163drrrmckd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163nnruybeo.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163nbzhpukd.html

================================================================================
来源：http://www.aibaodan.cn/163cjnbdlmb.html

G. 面向对象
来源：http://www.aibaodan.cn/163uchmramt.html

================================================================================
来源：http://www.xuanzx.com/163cwlzyodh.html

[G01] 定义类
来源：http://www.sxryk.cn/163xemoktjo.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163efoqxvio.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163mkxxtzfz.html

JS:   class User {}
来源：http://www.aibaodan.cn/163uxoqzdkz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163djnxdfrb.html

Java: class User {}
来源：http://www.sxryk.cn/163rkfdiyko.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163bfpsbrsm.html

Ruby: class User; end
来源：http://www.xuanzx.com/163dgnsfcyr.html

C#:   class User {}
来源：http://www.sxryk.cn/163oauwewbl.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163yicygqyz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163qhtirbjq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163uscsqgau.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163iqyhkwym.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163sdpayilu.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163nqyzpoaj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163jwrkhate.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163kupbosnh.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163abpbkjoo.html

[G03] 实例属性
来源：http://www.sxryk.cn/163hschtpem.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163uoqvmxvc.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163dloeeaci.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163qwthfhen.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163vdiikism.html

Java: private String name;
来源：http://www.aibaodan.cn/163gntsgyap.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163nzertsjw.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163wugnrspe.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ttblhrjc.html

[G04] 定义方法
来源：http://www.xuanzx.com/163rhhncmdd.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163typsspkj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bhwradkf.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163gqpnnkcv.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163tclgnmjs.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163vtarezbn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163sseqijac.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163himqkrbs.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163izvoojpk.html

[G05] 继承
来源：http://www.xuanzx.com/163wenpofrr.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163qrcgcbiv.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163mnyogdhu.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163eidqdaep.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163uzhzjado.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163wkuxfjay.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163weikslnp.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163tntvaczp.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163tchqdtpr.html

[G06] 重写方法
来源：http://www.sxryk.cn/163okxfyqti.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163olcybpou.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163tpnepyvc.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163jkdcpbbm.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163jcpummnc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163ilwlrimm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163nyrixcpz.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163znkhxcyl.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163sfqthcwi.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163zwnezjhn.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163ubgoyuhj.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163jfkvctlb.html

JS:   super.greet();
来源：http://www.xuanzx.com/163wzicxrqu.html

TS:   super.greet();
来源：http://www.xuanzx.com/163hzotprfr.html

Java: super.greet();
来源：http://www.xuanzx.com/163yohtuvmd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163baafltla.html

Ruby: super
来源：http://www.aibaodan.cn/163ogpgovua.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163frmnwwqj.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163jkxygtxf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163lslcmmco.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163afrsuopj.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163bxgipnag.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163yjwxumiq.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163sfpctnwb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163zkjubuqf.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163xpinnsgv.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163wlvcckhz.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163ijklcufa.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163fypjctdt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163mgorfwog.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163tmqzkspy.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163zofeittl.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163bsmyblyx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163kiajfmvo.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163zdydeqif.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163pgclcykg.html

[G10] 访问控制
来源：http://www.sxryk.cn/163wsbervio.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163zoxmledl.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163eeyeacwk.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163vbanokng.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163rzrzsmoy.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163qgpivuot.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163sdhupcfi.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163qinjwspq.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163tctzyldd.html

[G11] getter / setter
来源：http://www.sxryk.cn/163cdidlroo.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163jtwkqhpy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163unzvxjcw.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163znjabdby.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163cqmhklio.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163smvuefdq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163mzpfraqz.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163vizfdxbe.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163dxdqnyor.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163pfmozxtk.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163cjxznsqd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163zoaldnnj.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163kmymbzfn.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163utdlgygx.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163erfbskik.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163mkpirxxg.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163rywgtxyw.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163eyvhzgci.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163wnxgimap.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163rvipiggd.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163axjtosrn.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163dpqjchkq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163qorpaqkv.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ofdsfjzl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163xhpswlix.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163kvzmtnit.html

C#:   u is User
来源：http://www.xuanzx.com/163ugrhswws.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163xgvblcdb.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ljrfmxog.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ovrsnerd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163mjupirit.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163obapiijm.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163hqiuqgce.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163bbzuacax.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163snjdvwvm.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163xyvvdrgv.html

[G15] 枚举
来源：http://www.aibaodan.cn/163iwyhueej.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163feiwkqwo.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163sqernhlr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163obtcziao.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tpavcswq.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163gviltkyj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163grfyqptb.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163qytfijyf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tzqoiien.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163jfxyytec.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163aylfhduc.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163lrxwzcot.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163qcousgko.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lzpbftbb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163zafdjawd.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ongqcgte.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163lbbxxpkm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163kjlcbixd.html

================================================================================
来源：http://www.sxryk.cn/163mfjhdylp.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163yafcbpwp.html

================================================================================
来源：http://www.sxryk.cn/163zgcwidtx.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163xiueomzk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163nvoleytu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163oyohjonf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zxiksswx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163dbvylzeo.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163gljajbqy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ruvqqhml.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ejkvqnll.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ymgdjmoa.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163fyfvxqbr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163bpdidjle.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163znohtbao.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uvupwrjj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lxlflxaw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163thxyeuco.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163nnzpogov.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163rhbfdrmg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163wdkindow.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163cmwkygwa.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163nrorfvaq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vyaqgwjx.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ancnhnyg.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ogvqzeyb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lsktrzyr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163sxcfcpiz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ctnmhrse.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163lzmrtejd.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163lprhitug.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163bvfhwfzd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163yncnmjhb.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xhhljnoj.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rxooyiux.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163lacaodux.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163jczkmlej.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163yizftchs.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bpkpnjhb.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163yzthqfub.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163cgdevfbs.html


<!-- 参考信息 -->