外链999!wailian999！

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163yfdpeonk.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vrnoycid.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jxhgnvxc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163roxviibk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jhkxewtq.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ocdeqfrq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163palabnly.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163hjndlgtu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163esvnbfyf.html

================================================================================
来源：http://www.aibaodan.cn/163unrkqhnd.html

F. 文件与目录
来源：http://www.xuanzx.com/163fjbhlxta.html

================================================================================
来源：http://www.xuanzx.com/163kwgbwkjj.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163pfcutzyk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163yfnkciqq.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163uuflltdp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163ewxzohym.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163vlxpznbd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zjrnciae.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163yoxtxjgl.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163wmgbycfw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163cegjmvsv.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163aoxgxyca.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163lpgisrum.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163tddxljbw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163rmeizpjm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163vxeqasqs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hdaencse.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163nsmrtgsu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163uqfidbhh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163khyaikab.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163kdxwcjaq.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ninqvolf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163yfoadgbo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163psjyavqm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163kxydzfdi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163aumsdznf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163iqkslzwk.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163prmwjvzt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163vudxwerg.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163isrbocxb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163dtsngddi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163fcrmqrto.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163fkekkmft.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163dgwejikj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163rzscbgmh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163chhhcrvq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163tgrptflc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163kohcqthw.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163qhdbrugo.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163zxilgivj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163kkfftjcu.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163gdqkcerk.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qxzhdplq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lzucaozl.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163rrhvutgb.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163bmttnzyn.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163drmtuxbx.html

[F06] 删除文件
来源：http://www.sxryk.cn/163umwzzsnu.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163tfcesqht.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163uzwyrwyv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163heacrhkk.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163grsoecti.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kczttasr.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163habztixb.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163yvfpmnlg.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163svgoshse.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163fxifakjj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163bniitcub.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163xmxodqkz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163mqvhyvpq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163stphdgiw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163asbecoqp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163dwhokrxb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163tdbsptns.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163kawzohyt.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163vymrmpsf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vuguiasv.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ecorxqcs.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163actbdbzq.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163hhcvwirr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mtcqeilj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163tkxkoisb.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163trvknwjm.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163abibgayw.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163whwqyurz.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163qxyihsmg.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163jcqbpqls.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163irrwlkpq.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163nafrrzgc.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xnwqwxzc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163yvjgkmrn.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ljbegusj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163elycsxjh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163smruideo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163valetxig.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163zfpbjjuj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dtnfnurz.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163pjbcijfm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163kqathues.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163zzolvwek.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163gyixpqsv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163mxqtbmbz.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163hyehpvuk.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163looybgmy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163zepqwgqp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163penbigtu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163keqhrjnc.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163zyszgtwy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163bhbfvztx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lrinkigi.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163vnxfniik.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163xpsoayut.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163fengojtt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163etuifojp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163nccdxpbq.html

TS:   // 同上
来源：http://www.aibaodan.cn/163umbbzhog.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163eblzzjoh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163cihvvggq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ylxpbwnz.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163qovyaccb.html

================================================================================
来源：http://www.aibaodan.cn/163npcxiwqf.html

G. 面向对象
来源：http://www.sxryk.cn/163rzjpeezk.html

================================================================================
来源：http://www.xuanzx.com/163xmwzxzlb.html

[G01] 定义类
来源：http://www.aibaodan.cn/163akunxrze.html

Py:   class User: pass
来源：http://www.sxryk.cn/163rkvmnrpc.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163qznwvpxj.html

JS:   class User {}
来源：http://www.xuanzx.com/163jhmrpxyc.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163vjtwssxf.html

Java: class User {}
来源：http://www.aibaodan.cn/163mnplhckr.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163cqzrhvyn.html

Ruby: class User; end
来源：http://www.sxryk.cn/163nvqbyjha.html

C#:   class User {}
来源：http://www.aibaodan.cn/163hzricsev.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163fdubdecz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163ygmtukkw.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163uzfegeeq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163gsffcxrz.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163jebefyjq.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163pitqmmcs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163xmmpgxnm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163cegnclkv.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163nckfquxs.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163xyejlypp.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163bfmiacze.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163vctasguk.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163elfblppp.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163dnqspcvv.html

Java: private String name;
来源：http://www.xuanzx.com/163bvhiqmmp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163gndzpijn.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163njypjzzp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163ryuywvdn.html

[G04] 定义方法
来源：http://www.sxryk.cn/163yzdjbwfj.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163gumujybe.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163nicvzsel.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163ztgsfkyw.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163eirfosyt.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163yrkxhjkg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163cidimazv.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163losianbl.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163pwcplbse.html

[G05] 继承
来源：http://www.aibaodan.cn/163uckbogkp.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163oljhbrje.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163rzpdpkwh.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zttyayoc.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163jdksvzaw.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ycxyigvu.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163ehvopuxy.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163bzqeapzl.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163yreontlv.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163losnglzg.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163jnemxpfc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163rckgyqla.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163eoozzlmf.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163pxhxjlyv.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163chmaqgci.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163gibmxzcw.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163qijtvvaa.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163xkjvkulh.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163xxinhhpf.html

Py:   super().greet()
来源：http://www.sxryk.cn/163gywpluxy.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163ejlnnaah.html

JS:   super.greet();
来源：http://www.xuanzx.com/163qnjxjoqv.html

TS:   super.greet();
来源：http://www.xuanzx.com/163yixynoee.html

Java: super.greet();
来源：http://www.sxryk.cn/163dhjdfghe.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163jxiteyzb.html

Ruby: super
来源：http://www.aibaodan.cn/163oaleshvx.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163lglfsxug.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163ajmuudnb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163xzlmmpna.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163kcfwgjfx.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163lsswcnup.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163khsejjov.html

Java: static void f() {}
来源：http://www.sxryk.cn/163wpvkhufi.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163ecodkats.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163evyzvisp.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163fblhhpvo.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163vtgbyuyo.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163kbawspqq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163cgmdswsb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163gfgafafo.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163tzbafdko.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163qfmwnxwn.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163ycpvtctu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163hpdcgxbh.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163jltsvula.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163bzcspkvt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163iqfnnaoj.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163nanytttb.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163oivyghvx.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163kbaosdug.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163mbpltegh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ugktxhld.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163cpdqodas.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163wseqqbyv.html

[G11] getter / setter
来源：http://www.sxryk.cn/163mxjmexej.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ditqmoxw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163snuctopc.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163dbjwrsmj.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163giathsmz.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163mdorgrgb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ytbgrpxp.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163orvadlhd.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163vbfzfrdc.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163ferihidr.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163obgwlhdl.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ifovrryv.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163bwwchyed.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163zoamywxe.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ugkoymsm.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163bbogoafl.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163wpedoelz.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163vydxxapp.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163icnedyyc.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hhdypkes.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tmjlydly.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163jhwpapjb.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163nzbuaoji.html

Java: u instanceof User
来源：http://www.xuanzx.com/163hvebknzt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163voykdicm.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163pkpfbppe.html

C#:   u is User
来源：http://www.xuanzx.com/163xuyiqphs.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163qsnfvahx.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163ytxbstwr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163rtusnejv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163peyapatx.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163wrwpkynz.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163cijtputn.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ctnajzej.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163emezznlu.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dvqczchq.html

[G15] 枚举
来源：http://www.sxryk.cn/163drsthlkr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163lslizbiz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163twsidlkk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163wxvagtah.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kqqyjriq.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163atusebyv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163ixlpahcf.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163zktwnssb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xtencghe.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163koxbbbfa.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163mpiqlheo.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163vnnowwap.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rgprrxmk.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163hihxdvev.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163rllqwxau.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163hgaqmjwl.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163tczenjpz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ennibvmk.html

================================================================================
来源：http://www.aibaodan.cn/163mhrfxkdw.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163gqxoqllc.html

================================================================================
来源：http://www.xuanzx.com/163wgbbsreu.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163bncfljjw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qxxlvbzj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163oobllawu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163aptthfne.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163xspjozyb.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163stwrxiah.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163aqceoyjb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163lpepfsrw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163pjimpgfe.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163mpscikse.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ewatktcg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gboruogy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163igtgegph.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yelnrnxh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zessjnmq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163tmxibkid.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163obppjedx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163zoygpqva.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163zxhfired.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163qlladbrk.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163omgcfmno.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vfysjtnc.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163euuwpxbq.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163sbiiswce.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163rojamtqg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ovowyufq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163yxgzvqou.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163pgkxmikj.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ulenxnmo.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163jeourdko.html


<!-- 参考信息 -->