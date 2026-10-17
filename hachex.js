外链999!wailian999！

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ksryjxbf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163kvvvfceu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163cbtmxovb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jtksyvul.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163oiafikib.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163wiggsesu.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163hvwilayq.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163swirwvuc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163qxhkuqnd.html

================================================================================
来源：http://www.aibaodan.cn/163pzbsoabl.html

F. 文件与目录
来源：http://www.aibaodan.cn/163epoaovec.html

================================================================================
来源：http://www.xuanzx.com/163jfmwtjoy.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163jnjijbpv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163cwyvybqv.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163owsjaeeu.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163kpxgxlfh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163tcckuith.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163noyvzlmy.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163byealpcf.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163kpqqpslj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163okpxhqdz.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163jjvxtkoc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163wfxdkhea.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163tdmdpsou.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163yhffekto.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bcpqlhcz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163tqqfxesy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ewonvijp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163tnivongd.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163nlkjrvpd.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163eclfhnex.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163bessesva.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163askkokvv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xtqonalk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ulwkgiyn.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163dzgctuwy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163zfklktek.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163wfjxhhpd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163ywsbgcvt.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163yfswokac.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163fwxexkap.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163epsbbkqs.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163tzrnqdka.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163xiybwylc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163jquzddbo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163vpybmbjx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163rnsyjcxb.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163koszltip.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163rclxftci.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163myuxlsbj.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163aakvbhxc.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163mpgmbogk.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163uotepmvq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gixvlqnh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163bpfvfmqv.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163kbuivbuc.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163yuhmlpxy.html

[F06] 删除文件
来源：http://www.sxryk.cn/163xvxheueb.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163gelzytea.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163lgwlfysx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163afiaokoo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fvhtmium.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jinvpdnj.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163txunbmer.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163trykwvhd.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163rqedxfhg.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163onfcptyd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163kaulukfc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163wbwjqgca.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163fnnwrqmq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qimmrzmh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163roapfjnn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163iqgqgbej.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163qjhgsrpr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163xjpppruq.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ksyfksrn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163jddcjtkg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163rqfaenkm.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163acezctjf.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ooubnkeb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dywpczsz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163hevnkmxa.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163zxcerakx.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163dvwdtyfu.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163tqjbwozm.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163kqxcgkns.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163qnotoqwl.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hlulppds.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163hppsubuz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yopbbrwk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163yqcvalsp.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163hotpxbpr.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163hsbndhbg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163tfedwhha.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ftlwfbcy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163rcrccssg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gooaqfrg.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163spsucpei.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163zguuypod.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163mpyueklp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163nlpaapek.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163lcbjxsip.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163npttbfip.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163twxfvlfe.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163qlobqwsh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xjqbdenq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gbokctns.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163lmfrldap.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ulszcptt.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pjfmghdz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163cejwkzee.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163xrfkbjxc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163tnkhlkof.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163kjioexjm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163lmymwmwc.html

TS:   // 同上
来源：http://www.xuanzx.com/163xkyqtkdu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163vtehfiwy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ogfoxmuw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163sivpqcpr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163wemyorkl.html

================================================================================
来源：http://www.xuanzx.com/163gawdcftd.html

G. 面向对象
来源：http://www.sxryk.cn/163dkvrcoxs.html

================================================================================
来源：http://www.xuanzx.com/163aesjulvc.html

[G01] 定义类
来源：http://www.aibaodan.cn/163lvthnnbp.html

Py:   class User: pass
来源：http://www.xuanzx.com/163nlvkwaqa.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ykmqtzod.html

JS:   class User {}
来源：http://www.aibaodan.cn/163keibhvhn.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163owrtivqs.html

Java: class User {}
来源：http://www.xuanzx.com/163eidebpzp.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163wmotznqh.html

Ruby: class User; end
来源：http://www.xuanzx.com/163rewndbkv.html

C#:   class User {}
来源：http://www.xuanzx.com/163lyjsdxtr.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ulvwyqzk.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163kemmggrz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163rrekyyrx.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163icqyqzab.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163kbvipqim.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ylzvhkgl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163bncnlpev.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163nizhpaxt.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163wjlbktlv.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ftwmxqtg.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163nloposdj.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163pctefazg.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163hmxfyhav.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163udugyatm.html

Java: private String name;
来源：http://www.aibaodan.cn/163qczevzrl.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163rkcklklf.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163hsneqmza.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163cacftuwe.html

[G04] 定义方法
来源：http://www.sxryk.cn/163djeqnluz.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163zwfkhvqs.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163lqalkfoj.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163qfhvguiq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163bdbuggcm.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163rclzrakd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163fzkzrsmj.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163nvoardpe.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163khahcfpf.html

[G05] 继承
来源：http://www.sxryk.cn/163ftokjggo.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163inbssuxl.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163qvcxupvz.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163kpfwfkpe.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163viewpeiy.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163pphzsdnx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163yiobkacs.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163bthadvdi.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163qveogufc.html

[G06] 重写方法
来源：http://www.sxryk.cn/163xqsqmcfz.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163pzfgzrua.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163shqnemnc.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163juvmwzyz.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163iqoiyqta.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163ebwdjvjp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163jzccekuz.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163mgbfnqhl.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163kemhpzdu.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163pwgniwhp.html

Py:   super().greet()
来源：http://www.xuanzx.com/163ysdjwska.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163frywgiso.html

JS:   super.greet();
来源：http://www.xuanzx.com/163lfjxrxpi.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163tnefyiaz.html

Java: super.greet();
来源：http://www.sxryk.cn/163gsuokqvg.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163trzcehbw.html

Ruby: super
来源：http://www.sxryk.cn/163xodwfymu.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hpawymdy.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163lqixzwsz.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163pqlwrcwp.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163yuedyeum.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163tewqgzrk.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163erzabstq.html

Java: static void f() {}
来源：http://www.xuanzx.com/163glywrlgt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163wzfrhjdh.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163unspuatw.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163eudnufgb.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163uuwlwlow.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163weuuiros.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163dmncorlo.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ngonyjwy.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163zfwjusum.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163yndkeeid.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163vikanpfq.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163qsurlnuy.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163nydhcchw.html

[G10] 访问控制
来源：http://www.xuanzx.com/163kbyyowmf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163yekaewva.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163gjanepth.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163jlswrwel.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163puymdqyb.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163fwulnfsw.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163cwsqfwbf.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163odyvbmnh.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163lcfvjjpj.html

[G11] getter / setter
来源：http://www.sxryk.cn/163avyuzjog.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163aqrahbfi.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163qyldklql.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163rlhryapv.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163zzqywbdp.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163iyimyoor.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163durytijx.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163byhspevv.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163bjjjezsd.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163tglpsmgm.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163emgriokq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163axxrhnwb.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163fxaszpkc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163eucwuuoi.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163zaqiroyv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163awnizchu.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163xpxnbguf.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163dadeedku.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ezhmwsyk.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163adcjghrv.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tuyztwgz.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163yrkprgos.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163flaappdg.html

Java: u instanceof User
来源：http://www.sxryk.cn/163qedyovdr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163aqdjpwpm.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163vaeywnys.html

C#:   u is User
来源：http://www.xuanzx.com/163kfuntgks.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163qvciwcuo.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163bftgwatz.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163jlbrqmuj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163hvpoondt.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bmlxmqua.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163tmtgtycy.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163oggcgerk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163exfezpqb.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163gjmnzflx.html

[G15] 枚举
来源：http://www.xuanzx.com/163fdkbetch.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163siriuvqq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163kkmoeuma.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163affmdbnx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jnndhtsv.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163uikqgthq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163lhloycqn.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163emadugzs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mwvzqqmh.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ydnhtctq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163xcxpchkz.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163dawssatr.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qdmjuurb.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163gnzryosp.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163fzbfmemx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163hrijqubl.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ljdflpwe.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163grgftumw.html

================================================================================
来源：http://www.aibaodan.cn/163nrmcwcwc.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163bflsvqwg.html

================================================================================
来源：http://www.xuanzx.com/163agdjnmez.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163stshywlb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163srvihifd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163expnoknu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163aozrnrav.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163xrabblcu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163byahuvhq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163otdeqinp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163eikbvgav.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163gnnkhdgd.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163qpnvfumt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163kokmzfpd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gwpfsgvd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xazbwndn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rdgakzyv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163nscdpajb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163tmkvjtaa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163fneiyial.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ghcishgd.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163vwatpjpd.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163lhvgkrcs.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163emgyrows.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dduhnsll.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163gcohnswl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163blwcabpq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163jerahntq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163cfsstvlw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163fmnhzxri.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163jleqsqkm.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163siekncro.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163diakmknc.html


<!-- 参考信息 -->