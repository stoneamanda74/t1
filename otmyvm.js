外链999!wailian999！

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163lekosmyv.html

================================================================================
来源：http://www.sxryk.cn/163afcimxho.html

F. 文件与目录
来源：http://www.xuanzx.com/163gqsqjcch.html

================================================================================
来源：http://www.xuanzx.com/163hjoxdqvf.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163zxmnptpt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163qgjbytcc.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163mmonymrj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163mepdyhsg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163noorjlid.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mbgvidan.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ywupfuyi.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163xnabazug.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163hykicrgv.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163hfoeivup.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163uljgfduo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ypnjabsm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163trevbywc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163zejgpuco.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pamrmnnt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163oqhquigd.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163bpyrqlot.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163xokyhrth.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163vdkxkglt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163teclyckl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163nlhtnvdn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163rghpcjpd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163tpeukkio.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163luvpxyxo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163aymnhzdu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163hznaldor.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163uapxzvjl.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163qrzgwrof.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163pnyunurw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163iflbgccj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mpgmmfqy.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163lsfbyhyl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163bdojmlwt.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163ddelbgoa.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163qicmaogu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163lgsllnfq.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163bgqwxbpn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163isrzqhkf.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163igvrvhui.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163nffidudl.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163gabasquu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oxjpfyaa.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163qvjvjatf.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163pvemtjai.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163wydhdpxz.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zibfhjps.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ntkofscb.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163hcfmrunx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163kmnurudh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163cjuibfpk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qerqkpac.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163gynzxdpb.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163dwgsnatp.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xkfdkrlb.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163jkgshiyf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ddqmnqap.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163ahzvenwr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163gxwdxzrm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163dtullwjm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163qqwdqdyi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163vfblfynb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163fumlahvr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163etuwtutq.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163hdymzpmb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163zqzmybnb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163fsvnzxvm.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wxnhxyvq.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163peeuqvce.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163oeobhlpa.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163fgwagzbh.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163reilbuth.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163mwnfdwdf.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163toqqkske.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163esjqwiyk.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163teuwzrvg.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163umwryfdz.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163wugqefxy.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pinhusme.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163javqlotu.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163cfthzdeh.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163yomdjnki.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163hvmaujga.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fhtlnbdh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163eaqzynmb.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oapwoirx.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163qxaixdbm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163szldtiea.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163nquoxfyc.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163hghxoixt.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163wdazmvcw.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163biobsqoi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fgfyesit.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163eiqfkvjr.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163rudsrtnt.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uuflepye.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163edxiumzm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163knulrerc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wzpnqebv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163acjidbhq.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163vgcfyyaf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163mmonkgcq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vmozfsmi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163asxvwuav.html

TS:   // 同上
来源：http://www.xuanzx.com/163dxzskljg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163oxrblhwq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163tyqzhvvv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163fbmdomdv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ehlhcjqy.html

================================================================================
来源：http://www.sxryk.cn/163qpxpjqwr.html

G. 面向对象
来源：http://www.sxryk.cn/163emnxrekh.html

================================================================================
来源：http://www.xuanzx.com/163vagiydvb.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ejvhhzru.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163jthkdzmn.html

PHP:  class User {}
来源：http://www.sxryk.cn/163bwhjumkx.html

JS:   class User {}
来源：http://www.sxryk.cn/163ivnwshva.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163hbsaptmj.html

Java: class User {}
来源：http://www.aibaodan.cn/163raxwctlx.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vztfmpuz.html

Ruby: class User; end
来源：http://www.sxryk.cn/163iocbdcdo.html

C#:   class User {}
来源：http://www.xuanzx.com/163phhyuvdb.html

[G02] 构造函数
来源：http://www.sxryk.cn/163rjmjqznx.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163pzyaukge.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163lkzywljn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163hdnessyt.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163urcaoihc.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163ibibappx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163sfhbxeoa.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163bvvjwomy.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163gtyndloi.html

[G03] 实例属性
来源：http://www.sxryk.cn/163tvftrxzh.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163peucdong.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163gtwjbmdq.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163mledgixb.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163fphqhgss.html

Java: private String name;
来源：http://www.aibaodan.cn/163vvvddtst.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xcyokjpf.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163rnzclooy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163hpntikim.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163zlfuvtlt.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163rmmbitya.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163qksmcutb.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vijnumbh.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163owdnecow.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163hmagyqzm.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163qohxigsr.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163wcnyoeur.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163rxleofah.html

[G05] 继承
来源：http://www.sxryk.cn/163ouomhfea.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163qoyomcxo.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163dlmusabx.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hnczrsal.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163bcxftqfs.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163fpbwlhbk.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163lqbvndqk.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163jfdakjur.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163xtkgjphl.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ogtvzunz.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163lvnqmsio.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163dzrvffrn.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163sfepwdxz.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163yxwculnl.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163nhbnygcd.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163bpltjllc.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163vueajrzn.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163anfyapzu.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163rripsjnb.html

Py:   super().greet()
来源：http://www.xuanzx.com/163zhxlhsoj.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163cgnfihkn.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163lxvoukyd.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163duwdbzwq.html

Java: super.greet();
来源：http://www.sxryk.cn/163xikqnwck.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163kcxzsptl.html

Ruby: super
来源：http://www.xuanzx.com/163gcrtkrpe.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163zjtthmit.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163jgxcgdwd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163itlagxca.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163ijmroucv.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163pufjyvib.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163xjwvwhhu.html

Java: static void f() {}
来源：http://www.xuanzx.com/163juwkelth.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163iqayxchw.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163wtgocwau.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163pytvxkiy.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163jpwrcxsi.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163xdwtwkfi.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ytwlkiab.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163svdifrjg.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163jwzcitbp.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163fmabbmwg.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163axspvdej.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163smlqgzxa.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163dinbosgq.html

[G10] 访问控制
来源：http://www.sxryk.cn/163gkpzxfqa.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163hgilvweo.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jvfrhyki.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163dtrzhqgo.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ebdemtam.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163sxrqyrvx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163wpavfkso.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163kxajwkmt.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163quzrjoim.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ppzofjwl.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ueoxfmtz.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163jpvqyzqk.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163nwdbpxkx.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163lnewermi.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163lgdcwglt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163xszuapjt.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163rwzpqjbf.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163qhdjdztw.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163kfnsaxql.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163yarthpjd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163pdxtzedy.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163xkkfbgjh.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163vwfgjcbr.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163einljbjl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163yrifnmfo.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163uusczrps.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163pkueecmz.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163mdjnblkc.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163nejltuqn.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jpswdtmu.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163elmtocrk.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163vkuabwzr.html

Java: u instanceof User
来源：http://www.sxryk.cn/163wifuauiw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163qkjiurja.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ezjwudap.html

C#:   u is User
来源：http://www.sxryk.cn/163llokfndm.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163ylhfoufk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163thyxqqbs.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163dynfndkp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163qxuvdpzo.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163grrqcvzr.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163mcrxrrsz.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163mbmpgiga.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ihnihfdx.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163qoxzsjks.html

[G15] 枚举
来源：http://www.xuanzx.com/163yjclagcy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163jhkgqwqm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163yhuzeyhn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ooingnwn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zpolskpu.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163vkogyyfw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163dlsutnop.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163kxjjetin.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mtcqstjt.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163lyoeldau.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163ndjflyeg.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163apvwtjvu.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163njutqbsv.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163arkbmmgp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163rlkketon.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163fyomvoxo.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163lwicypdx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163qpfaudap.html

================================================================================
来源：http://www.xuanzx.com/163szylxxhj.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163esqvaanq.html

================================================================================
来源：http://www.sxryk.cn/163kjkjycbl.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163eksklhgk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163fmbypanl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163xyatidqn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163pwcmolko.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163yignphpz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163afzqspmh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163yvamrhob.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163qyfugzvd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163tyxtjppn.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163kkqrmulu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163hgofxbpf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hsyzbwmm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fafbnrmp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ckaxzgvl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rlanldvl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163waqfedsp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163rsqscpxp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163fpfslkwk.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163itsawlwl.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163rxuodooy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kjdzkski.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163zszxgmoc.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rmbawhxw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gdjrbsyg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163rkvxlhrs.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163jhmrfljg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163bcwjcsta.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163snymfrku.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163aemqzfmp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163oznqbmco.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jhmmebff.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xfocewoo.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ypyzvmfd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163qoctuhja.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163dpjjglxn.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163nvrrezox.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ujvvtsgi.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ootmzknf.html


<!-- 参考信息 -->