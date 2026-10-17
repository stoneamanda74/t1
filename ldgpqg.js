外链999!wailian999！

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163fwbszvgv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163buwbymhb.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163plynareo.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163iwbdufya.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163htkzergw.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163dvqkamun.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xrivrhfl.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163xvxitkhk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163diwqfhnc.html

================================================================================
来源：http://www.sxryk.cn/163qlgohefh.html

F. 文件与目录
来源：http://www.aibaodan.cn/163wkwfmlcl.html

================================================================================
来源：http://www.sxryk.cn/163chcxvbtu.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163kmhkeuwd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163iymdlrpf.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163xdueqlhn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163gslhopyj.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163gfpkartd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zvttingx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ebukojgy.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163jcagzcdl.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163nnkuxqta.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163apxksigs.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163aopbaetr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163kvceaajf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163beefacvx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jznelhld.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163zlhgkxar.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163utbkrzlh.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163yvvzwjij.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ejgecejw.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163mdyumuge.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163kixttolj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163hylhppqk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163rcamcjmc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163opxzoezf.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163raalzxqm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163vsdbdpng.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163vyykxafy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163njipjtpd.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163lruhtyqb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163feernutg.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163jjmvbedz.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qvymgqeb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163dozihxre.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163yevxfaed.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163uorkhzov.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163rmxajtqc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163obdzskkx.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163dlawnpig.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163lcztbwgu.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163byzgzlsg.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hyzhkphx.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163oskbaztg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xxkhjcyb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163hsfmfopb.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163rxniboyk.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ybcubirb.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163rwpjbmjq.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163xheavfpu.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163wsuwsoxk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163rtjrzaan.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163bdbmkgnp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zpcbfbkw.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163wfowhoyj.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163drkgcmbw.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163scffwztt.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163nniiwnpd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163rsybcruz.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zfvibxgy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163sfszlxxm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jvhyjvvn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163sbnrppxy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163vfagfeyw.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163rfcsqcfg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163nqvzgvzw.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163fikeqrco.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163viruavbu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163odozlxwr.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163gmhqtrem.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vnubkzfk.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ezrucgdk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163mqjlskml.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163rpwcbxam.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163qtqjliub.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163mrfvxxgk.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163bxuinhnz.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163jngpxudz.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jscrwmrl.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163qfdhknjk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hlrbjtly.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163aktusfwu.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163nzaikzdy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163ptipvlfo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163pfhmxnzt.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nkjpubxk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163lvnmaucr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163clyjsjhd.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163cumbmoiw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163tehlloku.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163qvsjgfmb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xpduqzie.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163tqnorzvv.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vzlucanc.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ynlsxrpg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163uumzwixj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163iwneblse.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ioyyyrxr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ipvgmlus.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163qxnxouts.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pcqvjszz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163pvgxmrnz.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163vascddrp.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163yewcrlri.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163lbbtnewq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163llewkrar.html

TS:   // 同上
来源：http://www.xuanzx.com/163ptrojuuy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163kbjomkre.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163thgxnmwe.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163fpifvmjv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163gtbqkuxp.html

================================================================================
来源：http://www.aibaodan.cn/163zafhzugk.html

G. 面向对象
来源：http://www.xuanzx.com/163mbyfnhom.html

================================================================================
来源：http://www.xuanzx.com/163probbguh.html

[G01] 定义类
来源：http://www.aibaodan.cn/163igzuipsq.html

Py:   class User: pass
来源：http://www.xuanzx.com/163zlnljdvd.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163vxjmnufn.html

JS:   class User {}
来源：http://www.sxryk.cn/163wpwwbhyc.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163nfwimvml.html

Java: class User {}
来源：http://www.sxryk.cn/163colpjvvy.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163rymnnbfn.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163jwdxsuui.html

C#:   class User {}
来源：http://www.xuanzx.com/163ndznslvg.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ruzvnrla.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ksqqnqfa.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ndfuuyfg.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163bnuodpmr.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163dextzofs.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163nrhmfbhm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163grymlofb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163urbbznci.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163xbtmskyl.html

[G03] 实例属性
来源：http://www.xuanzx.com/163etahoncs.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163wmlbetbe.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163nvxpigft.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163xbjnaeyh.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163nmindrdb.html

Java: private String name;
来源：http://www.sxryk.cn/163ubomumjh.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163qdnszwhb.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163oibyvgud.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163ubvkcmai.html

[G04] 定义方法
来源：http://www.xuanzx.com/163wetfbdrm.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163dcbfiktt.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163gxiixyws.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163hijddlqo.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163fygakwsz.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163jcsquwee.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163apqqkbpg.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163sqgmanog.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163pjtubscn.html

[G05] 继承
来源：http://www.xuanzx.com/163ldagzeut.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163sfvujllx.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163xkylulyk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163aqazbuia.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kcbuzyfn.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163uxhkpdwc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163nzkhlval.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163eiyjrhil.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163xxjefwgm.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163rgkrbrmw.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163mhkfuiqf.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wfskcanf.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163hlknnuas.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163lwguuucs.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163odnphggm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163dmovrhvv.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163zqtauaxe.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163jnkasbpo.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163lhhqywfp.html

Py:   super().greet()
来源：http://www.xuanzx.com/163cbwgwqtj.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163unozveav.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163bhfrvfzf.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163qujmfurz.html

Java: super.greet();
来源：http://www.xuanzx.com/163qetulxpa.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163hltfkghi.html

Ruby: super
来源：http://www.aibaodan.cn/163omtzdwcw.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163jgphutup.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163hhegsrzq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163qsbekgat.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163kkdgfljx.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163jzlmnpkq.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163deyfknls.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163zeefyshf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163vuuijani.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163jvkuamlv.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163qdbyrioi.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163oocoucuq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163xagsuoxl.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163kardfptb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163lyhvklmr.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163xfggdsfw.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163uqgjbgfh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163xwieieox.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163xrhawzel.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163ryikhzfl.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163fuvjpmoc.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163hvwleveb.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163mxqrsajg.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163fcedzchb.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163dkhuvhqr.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163ytcpkuyp.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163vqlwuhip.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163hixhdjto.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163asjgtnsp.html

[G11] getter / setter
来源：http://www.xuanzx.com/163bwcbmgjb.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163rqrutwnh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qeidvbkc.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163snjpuhzi.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163vtduggqg.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ehapnruo.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163dolqxqei.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163clwpoqux.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163lwiczyhn.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163umxonjxm.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163ziupdhmt.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163iyktemsa.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163awqkrmye.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163ljrywgdt.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163lsrzcoak.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163yfrdjpxh.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163iyxqwwiz.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ofmowlow.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163khuzgmlw.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163fyhsquay.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163izzfscic.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163gxnbszzp.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163mzbypwlx.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163hguhitcr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163wlzcgwzo.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163kaueuxmy.html

C#:   u is User
来源：http://www.sxryk.cn/163wcnueenb.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163yflejrfq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163ecrcphgk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163fukvfwds.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163szpfnzxk.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163qhticknx.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163sjschqff.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163hungodfy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163mewyjipx.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163letyqfhn.html

[G15] 枚举
来源：http://www.sxryk.cn/163ezkdtmfq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163qqjmbfrq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163wbrdmdmt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163igetkczc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cdugctyj.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163aaltxrls.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163pjyjzbqg.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163aoyqadmb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163fafuevol.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163prvubyeo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163abqhppzl.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163dpayurvm.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yserytjf.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hoajxtgk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163zndkebdf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163zmmzeehu.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163thdkdwcx.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163bqlnytaq.html

================================================================================
来源：http://www.sxryk.cn/163kktpkeui.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163ptzizsvu.html

================================================================================
来源：http://www.sxryk.cn/163svsvklqi.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163iewshart.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163grkyupfe.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163wbwjfizv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ahoxbibw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ncrpongt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163yndtgasf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163uocmhcfd.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163vfvnpigv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163thkjiuhk.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163dqwttlco.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163smgcsccr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fwrgzjnx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tpovadyo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nmykeifh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gogyxdxa.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163luodtttd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ttghldfv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qytkelll.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163nniujbvw.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163yyenjvsa.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163tjeaawur.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163cfdfbpgs.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cdzxgzvz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jhbduusj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163bmqdlnpb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163wiavlgsy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wektejrp.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163zaynubxj.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ectycrnc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163eptwsrcq.html


<!-- 参考信息 -->