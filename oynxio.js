外链999!wailian999！

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163bvfkafiu.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163pnttihwd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163ugvfpjqg.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dwxxezfr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163tcuahbst.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163hkybthwp.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163vncvtfxe.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163fbzknwmy.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163iumtprim.html

================================================================================
来源：http://www.xuanzx.com/163gimbgugl.html

F. 文件与目录
来源：http://www.xuanzx.com/163mblaxkdt.html

================================================================================
来源：http://www.aibaodan.cn/163vxvleqge.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163vovsuijk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163cmtyzuva.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163cjooukgc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163cwqdfisa.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163cqoyplad.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ehmmovnq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163wffrfidy.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163yczxbuly.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ngucrztw.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163qmuwvzbc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163odtrqxwk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163kaxgqpsc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163vpqumbns.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gpxolosg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163daxugtfp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163xpgtfpnx.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163fxsrdkfu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163sqhctonb.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163dhbricgp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163rjlzuqog.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163xnvnchkc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163zoozhhub.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163htnepike.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163rzgrccln.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163pzgsymbh.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ihbzncse.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163icaihlil.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163efyugcdr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163wtuszlvo.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163aaxgzfvi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kkeygiym.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zuthfelq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163nblksows.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163hlcvnqvh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163fpvylyqi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ekdipygy.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163trajdhle.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163iuihvlpp.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163jwqjrscg.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ecgtqifh.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163hadwcilh.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163emtantjk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163uglusfid.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163lypupjru.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163wgcktsne.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163xtnapbii.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163knwrlkqn.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163txybkkgh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ioqrkqzl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pclruuee.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hcjgeexl.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163wwumupws.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163asabnxjc.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163qaviomul.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163pjbukmcw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163sfbmndsh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163qouusclv.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163oqpdbzgg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163msrhdofn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163odokciwf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163yyqflosa.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163tekiqpai.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163bgdtcihs.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163pfgoomiz.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163lfapitrj.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163gnquujpa.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163hkocjyhn.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ttkewtlo.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163syvoyzqz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ywyrbrop.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163qpimhhhw.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163sgrurlqg.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163vvsyrhiy.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ifxktlsj.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ibutslwd.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163coewkwcv.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163okzhffrf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lovsvuce.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163idqjjpff.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ebuoavmx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163tirervrl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163bttdaauh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163flplmvvh.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ydhfdbkk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mcfvrqbz.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ezybdlbf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163voofsurt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163mulzxnve.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163abcykzlu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163htstlnen.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163jockqgke.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163hadpgoeh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163mwdkmmis.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163twtzltrf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163gixrauaz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163afprqssv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163lodpwqvd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bhdfontm.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163iaciuvdj.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163obdcssgx.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163nhovnfov.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163vbjwykvp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163bmggnbse.html

TS:   // 同上
来源：http://www.xuanzx.com/163yphqjzug.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163svhhmkiv.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163dxzowvtd.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163tqelfngs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163skdjihwi.html

================================================================================
来源：http://www.aibaodan.cn/163cifruoar.html

G. 面向对象
来源：http://www.xuanzx.com/163caqaezyk.html

================================================================================
来源：http://www.xuanzx.com/163esmukpxw.html

[G01] 定义类
来源：http://www.sxryk.cn/163drfyynhy.html

Py:   class User: pass
来源：http://www.xuanzx.com/163xarmmitq.html

PHP:  class User {}
来源：http://www.xuanzx.com/163aztnwyah.html

JS:   class User {}
来源：http://www.sxryk.cn/163xjepcimt.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rzudueow.html

Java: class User {}
来源：http://www.aibaodan.cn/163pkmoovzh.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163dcwrddmi.html

Ruby: class User; end
来源：http://www.xuanzx.com/163vanriyar.html

C#:   class User {}
来源：http://www.sxryk.cn/163furbmuur.html

[G02] 构造函数
来源：http://www.xuanzx.com/163xlutyfcc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163aooaeebm.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163smfkridk.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163dselovih.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163rjcizcsm.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163tgtnboek.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163wbyqzkfl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ewjosadp.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163uumxtnna.html

[G03] 实例属性
来源：http://www.xuanzx.com/163vciahohh.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163qxogeucy.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163jsphkhgg.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163xgkpqfct.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163uznjlffh.html

Java: private String name;
来源：http://www.xuanzx.com/163bhgvfulg.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pzcbnwoz.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ebzbwhlv.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163bzliijxw.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163uqxcqjqp.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163toduvcra.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qzejibck.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163fcrinoxh.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163wdkgnazf.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163etegntfs.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163flcpwwyj.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163wozhyyuw.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ddtcoyxv.html

[G05] 继承
来源：http://www.aibaodan.cn/163lkvpgftz.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163rvgrnqxy.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ckjxuieq.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163yxomunhn.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163cyvfsnyy.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163cxvfzmbj.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163gfnrhzhb.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163kkjsezwi.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163kwvirmql.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163qkpcwcaq.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163vosqbnpg.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163wagqqynu.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ewfllzcp.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vlwtsfrd.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163sjvgaenr.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163zfyjnxmb.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163fkeharag.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163bohqqgqu.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163okrwgatb.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163glqrfwsi.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163ttzxkfae.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ktzpntab.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163iqbprewa.html

Java: super.greet();
来源：http://www.xuanzx.com/163qmoqxmwb.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ooqnmbyh.html

Ruby: super
来源：http://www.xuanzx.com/163vgudlszq.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163fcgclaad.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163uiffgpry.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163rxhntqxm.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163vuseopdb.html

JS:   static f() {}
来源：http://www.xuanzx.com/163hcurywzu.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163lbtpatzq.html

Java: static void f() {}
来源：http://www.xuanzx.com/163qwxudykz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163jwiqhxoa.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163cauivssf.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163acscdwwg.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163ijzyipii.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163wkosddvn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163pduboyto.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163cksmjscv.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163zfytmybv.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163gfzqtwlm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163pbrjlbfi.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163yzwqdayl.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163oryevzzt.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163tqdzfygd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163lnzwalne.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163wjvzemsp.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163hwryixnd.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163bfsyqagr.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163iyjcwauy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163pepskatb.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163zvvclzyz.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163reekpvde.html

[G11] getter / setter
来源：http://www.sxryk.cn/163mnnemulg.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163uhvhtcag.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163auddwsud.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163mhlvsprf.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163wuakdljb.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163nkluhnkp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163eqvjdqwo.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163fqrobpeo.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163puntqzsl.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163steztfoc.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163yvyisbfw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163krsbreig.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163dahbtkhz.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163qfsyyckm.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163qxujdmwl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163nzwcpsvd.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163lnhncudo.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163jmctsqck.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163wuxfhssc.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163ayitowzg.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163rifgudzx.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163qtjccswo.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163hiofusrb.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ankdzmmu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163bkjdhyvn.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163sgivkngd.html

C#:   u is User
来源：http://www.sxryk.cn/163zwifogys.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163unpuskec.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163kadctqjx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163cmfnqsnr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163fcrpgcrd.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163kzvklnit.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163avyeypmj.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163lrxnoegg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ayqkhaiz.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163nnetzkkf.html

[G15] 枚举
来源：http://www.xuanzx.com/163wmatacrr.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ttzvimiz.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163kfhabggv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163zyujjqar.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163uvkifkgz.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163omxlrqci.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163phaplddk.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163socjiqzh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163gvdpanes.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163peqbfeqt.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163iciuebkz.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163udpnwofs.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qsyeochn.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163pgtokfgq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ppntbvzs.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163zdanvynw.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163brfhxbqj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vocuootw.html

================================================================================
来源：http://www.sxryk.cn/163oilmmvhr.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163bnthvnde.html

================================================================================
来源：http://www.xuanzx.com/163hyobjziv.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163xzbkaxlr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163dvhmhqls.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163aooxzybm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163lccexkuw.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163kvnwwcjk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163atmjolzf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ilfgjhlh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163rbbacezj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163hjgiiaug.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163pzicxyoy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163lqomtjba.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eftcnveq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bmoycqkp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wgqavgdr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163iixjrekj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163zkktqurq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vflvfomx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163bneapviq.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163kwbachxv.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163evpxlcpc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mctnsdjz.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xpjenhzj.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bgarynms.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163gwgcknex.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ezkawzgx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ympzcplj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ceivjijv.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163avbvzmtw.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163qxhkbkxa.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qyabexul.html


<!-- 参考信息 -->