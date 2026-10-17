外链999!wailian999！

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163wkcniair.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ejrtibvf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163horryekb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163rdwrkvjr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mizrpbtp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163urikjfio.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163chqudlkm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163qnfsjxeb.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163luedpaqp.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vunfseok.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mqbjhlyj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163raildjgf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163andgukhl.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163bhcnnatd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ewifjgpd.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163jhimreoo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163reoeikrl.html

================================================================================
来源：http://www.xuanzx.com/163gczikigm.html

F. 文件与目录
来源：http://www.xuanzx.com/163kmhurcin.html

================================================================================
来源：http://www.xuanzx.com/163loscuapw.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163tpyyhnqg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163axmcvgmv.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163eguuxtps.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163fwltekbk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163wxptdute.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163frdyfyjq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163koqloduk.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163xcqrxldz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163afvgykjo.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163mpxrhekd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163obuyvjpr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163nyupyjdw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vnakomst.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163sjxvgoxg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qjgqixen.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163eoighyhf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163uxbbyrzz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163zlpjvror.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163yiprqlmi.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163sgmuqksd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163vhmvlsqu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163qgmycvoh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fdwxihxg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163shugbgdd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163grstizwz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163dxeryshh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163zerfmwax.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ecvlnjew.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163rklhxbfj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163mxbnikrn.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163bcjrrsch.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ecftnvjk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163lbtkcymr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163dnvsjlfj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163bxwzownm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vlajptmu.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163igelkhxl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163osbvgoef.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163rdmfwsdu.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gwvewpye.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lcmixyjn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163absbtvjt.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ukvlecep.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163rsomdgvm.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163pougspqe.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ydyjqtbe.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163irlabhpl.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163fphqirwj.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163ohrdblqd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xafffbvc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tupdkatp.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163ihoyonyt.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163yffdszmq.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163zjvlnysc.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163sqqcpqwj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163cmsvlblk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ibzamdkx.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jksnluyf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163panntiqy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163lsbtzjxi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163npijcuzy.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163lizxhlkf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163dqhhlhej.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ayhcoxkb.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163iukkjoxs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163amsjeglo.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163otjkzmsa.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163wxgzwqzw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pbeqwvxn.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163utiobkum.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163msbhdudb.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163wamqniwy.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163cuyarpsz.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163msnlayiq.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163kdtjchvh.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163wizmxjeu.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bctijhzu.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zcjobbug.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163aovgxynu.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163fbuymeqg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163tmtbqsvc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163lpxlbbhw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163uiuorbru.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163dxlmswzh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163owthtqaf.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163zctkbbmj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163sjoooqjt.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163rzpmjbnh.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jjyhjwey.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163rohbtzyp.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163ovfhfojv.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bwgxbcqd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163fzosrbwg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zubtrxoo.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163spvwvpua.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163pxjcnqsd.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163yromfmxf.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xappiltx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163frucyeba.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163weemmgnn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163xoowqiwy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163lbnvjiet.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163qgbcdytk.html

TS:   // 同上
来源：http://www.sxryk.cn/163nmjeutkk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163cfmrlvji.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ibnomobv.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163tkjdruxc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163kaqzecpe.html

================================================================================
来源：http://www.aibaodan.cn/163mrajelnm.html

G. 面向对象
来源：http://www.aibaodan.cn/163seiugggl.html

================================================================================
来源：http://www.aibaodan.cn/163xvifpljr.html

[G01] 定义类
来源：http://www.sxryk.cn/163whixbazm.html

Py:   class User: pass
来源：http://www.xuanzx.com/163poxqpdji.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163nwocrdej.html

JS:   class User {}
来源：http://www.sxryk.cn/163sywnjsui.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163oszhncza.html

Java: class User {}
来源：http://www.xuanzx.com/163xuratqcy.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163yvcnipjl.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163alxaxvlm.html

C#:   class User {}
来源：http://www.sxryk.cn/163rtysdcvn.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163tsupyddu.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163jdnlgaze.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163rnezkkqf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vrfyleii.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163rolohfqg.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163bvxpldcx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163lbgmuyqd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163hflemuaz.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163nocnwagt.html

[G03] 实例属性
来源：http://www.xuanzx.com/163scxifjis.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163twfdkjac.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163ljirqfdc.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163kbezspfb.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163tojscxqu.html

Java: private String name;
来源：http://www.sxryk.cn/163obazvylq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163jhhqhlpw.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163owkqhhpg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163sljqgdet.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163tvzctjxo.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ljxrxtkk.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163qilndneg.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163vsmyvqno.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163gtfegqsw.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163xsxtfail.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163mavyjkkr.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163cfagbrmw.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163woqywgha.html

[G05] 继承
来源：http://www.aibaodan.cn/163sskknabg.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163axcbcrga.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163rormhfua.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163nzqajgsg.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qlkdnrzf.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163tasejlte.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163tuypfqyt.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163zgpscahe.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163axgjynbr.html

[G06] 重写方法
来源：http://www.sxryk.cn/163nemqlaov.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ebywbnej.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zxgxyxdl.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163vwkgdytr.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gducesmh.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163clvdxhzs.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163qmxkxhga.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163gsfghxna.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163cnyvfxyb.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163cpjlbywb.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163plulrbou.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163cfnbzrqs.html

JS:   super.greet();
来源：http://www.xuanzx.com/163jgsiqbwb.html

TS:   super.greet();
来源：http://www.xuanzx.com/163qrdrahqt.html

Java: super.greet();
来源：http://www.sxryk.cn/163iqorbyqp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ubuytvck.html

Ruby: super
来源：http://www.xuanzx.com/163bjittppr.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163zkxpgxpj.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163xlejhpiv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163lydnhbhy.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163cttowtzu.html

JS:   static f() {}
来源：http://www.sxryk.cn/163klorzzcu.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163gtgarlnh.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163iatbvcot.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163irzwschv.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163ixxfdezq.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163mlmxgwmx.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163rqebtdei.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163otywdzpf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163pgududoy.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163aaitjyod.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163jkvqdfcm.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163pmlysxdd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163veoshcef.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163bzkzjgzt.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163ubjhewyi.html

[G10] 访问控制
来源：http://www.sxryk.cn/163jxncoeay.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163tcluqzii.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ejvuwbzc.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163usrgtxpz.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163vkniyiwc.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163bahqeeeu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163wivwwwxa.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163iffgwppk.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163rubpiygw.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163mndexwrk.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163avoepvjo.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qdrgvcsk.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ovhtgtkt.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163pqatprfy.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163glkvkmtv.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163qxpfmeos.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163kiqyjglc.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163netdioob.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163tmnyjgze.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163fndjrziw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ccqmmxiu.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163fwfschhl.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163uohjgkuq.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163zqywvbza.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163csnnyfms.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163uakxwekb.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ocnsyqtq.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163kqmpbilq.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163cuwgkrey.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163tolbzvid.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163sytwiusq.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163pcvzocez.html

Java: u instanceof User
来源：http://www.sxryk.cn/163gyturbxd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163wzbqvwxt.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163jgrmqdzg.html

C#:   u is User
来源：http://www.sxryk.cn/163zpmxkpxf.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163osbxzasd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163vqkcvvec.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163iejltaip.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163sgbhwsmx.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163wudefpbc.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163cumtowbu.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163gmdylpsj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163lmlgxbwm.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163rschgcah.html

[G15] 枚举
来源：http://www.xuanzx.com/163boplrvif.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163bugggkhv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ahxlvdam.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163rzrwinia.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vjusoiaz.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ihfowtzc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163pulauhlb.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163nvznuoms.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ujvnuken.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163offnbxas.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163aeamnwpa.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163khkwqcaz.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163sylkptof.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163yjljqtgv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163eacptusa.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163kjiwdvik.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163xburnhry.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163imovsgyv.html

================================================================================
来源：http://www.xuanzx.com/163jfturysw.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163azvnteoi.html

================================================================================
来源：http://www.aibaodan.cn/163efkgxgzk.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ywqdpagw.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163adzzoxse.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163eunylyll.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jqgfllxx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163oosttzgz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163dqgsysji.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163mzwfystu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163qhvjjrqa.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163zdxsekyo.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163evdvdyai.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163rwmgmqtr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gsesnvqw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fgbdgoye.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qpriligo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rpzvjfaf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163izfzwdlw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163hhtnykhr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ijyxilfs.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163srooiqmd.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163vtcfosbq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ffymgfbi.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163psfrcbtl.html


<!-- 参考信息 -->