外链999!wailian999！

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163wyimzjpr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ayggwwum.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ngmsgkjq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163lpggimsd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zjjevvsk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163bptgqbbv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163crxokktd.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163nfoqibse.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163izftdbaw.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163yrdoaapz.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163irnpeday.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rnpzcvtr.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lxyoefwo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163miucnqrh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163bdvfixeb.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163obgqutxq.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163aoyzpfcb.html

================================================================================
来源：http://www.sxryk.cn/163oiauuutb.html

F. 文件与目录
来源：http://www.aibaodan.cn/163odpngogk.html

================================================================================
来源：http://www.sxryk.cn/163rshktzbq.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163gdjiutjm.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163shnsuasi.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163hbshgbnl.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ryjgwtzy.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163wyxaikru.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pffkllis.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163vhkictrd.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163lqxvzmio.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163qeghpjdf.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163rxpslcre.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163tplpeeve.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163hzkhlxbb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vrnbnkkk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qknhqxeq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nbbvjqll.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163pqxjwmhv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163lhafaeee.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163kwyohkdg.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163opqnjiku.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163qvtwiann.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163gvdfefyu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ukmoxdun.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163khkhbrvd.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163eukaqndh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163jsmppiyu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163apxggduf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163emcgfrmk.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163movwsmam.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163vothwipv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163dwausjst.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163nrgprpgw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163zxzddstq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ezuqcbtb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163oycylpnn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163unjoilgm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163vuhkurvn.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163awftdfgy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163cpzvvxha.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163alprbawg.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gkstrotl.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kludkbll.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qcwgtbnh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163qhepqpoh.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163iufyxfkh.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163rcjrlkhw.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163jxbekwpi.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163msmtriyy.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163fhzrflgt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tlxqtckc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hnjdbakg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vlqmnicy.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163maiosbss.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163fsppbyqw.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163htpemvct.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163jncliftb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163mxrsyzks.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163fwrzjoin.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163optvwhkv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lcfbzgxh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163gpcsskqt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163kpjpkiqh.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163dcwumlzq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163wxnbxhjh.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163nuqqplap.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163jjixbpez.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163bolsnduk.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163mpyyulsd.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tiybrbfm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cwliglms.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163hgztiagh.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163rhylaqeh.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163yyrifoov.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ufbzqefx.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163kfamdaky.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163xbgmpruv.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163lyfwdasg.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163vmotqxnm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ndrvsyvj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163sokmtuxq.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163xfwojdlm.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163yfjgwecy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ssokxevs.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dtomvsaf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163bhoktxnu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gycdfnaf.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163ebfsetpf.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163jbqwzpmk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163dofxrrgp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mijjyvqk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ddgmwygf.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163yvuoknkj.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pgiakykd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163vrnsvhcd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xjgvylrm.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ltqimrod.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163snhnhnzg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163gqdsdhjy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bjtzosre.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163fivsxcuh.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163jiccnqeh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163gisivdgp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163hrcuanej.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163osduyeds.html

TS:   // 同上
来源：http://www.xuanzx.com/163kmyjrzik.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163mezoszix.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163uluazaoe.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163obshkwia.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163yrargcql.html

================================================================================
来源：http://www.aibaodan.cn/163smjmbfdj.html

G. 面向对象
来源：http://www.sxryk.cn/163wixwxens.html

================================================================================
来源：http://www.aibaodan.cn/163rdlkffts.html

[G01] 定义类
来源：http://www.sxryk.cn/163lhuqzhcc.html

Py:   class User: pass
来源：http://www.xuanzx.com/163yavptlug.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163lhypytls.html

JS:   class User {}
来源：http://www.sxryk.cn/163kspixjml.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zogqtunz.html

Java: class User {}
来源：http://www.aibaodan.cn/163pygiqwaj.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163xzlngvrj.html

Ruby: class User; end
来源：http://www.xuanzx.com/163lfdgfafp.html

C#:   class User {}
来源：http://www.xuanzx.com/163vuusduis.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163vpegbabi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163rixoabsk.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163gkoyzkoy.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fzwthzbz.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163asqslysl.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163culkfepk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163vhbmokrz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163ugsohjuy.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163hvhicute.html

[G03] 实例属性
来源：http://www.sxryk.cn/163qhbpyelm.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163tapszacv.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163pjsutvrv.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163gmdsldxn.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ysoxlqxc.html

Java: private String name;
来源：http://www.sxryk.cn/163riefbknt.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163bxjsuris.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163sgzciyhl.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ieelnthe.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163fcmtimtl.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163ylsolqbf.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163asjhxpgc.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163xkkfvrsq.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163zwqmcgnz.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163sejogqxk.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163kclsahbp.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163mhksyoje.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163crlpsvgu.html

[G05] 继承
来源：http://www.xuanzx.com/163jxadxxvc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163rtuwdxix.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163mkubyczz.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lystwrtr.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163jpejmkpx.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163rznlfroc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163yobvgfff.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ifpifxrg.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163behidlov.html

[G06] 重写方法
来源：http://www.xuanzx.com/163riqmyjti.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163vknipzsw.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163cngvjixc.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163nzszygwz.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163zycdluex.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163udjmhsff.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163xqtflmgk.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163pacpfzvn.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163dxullivm.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163chgpztdq.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163cogeukzd.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163mkavripk.html

JS:   super.greet();
来源：http://www.sxryk.cn/163hpkzapsi.html

TS:   super.greet();
来源：http://www.xuanzx.com/163fnahifgo.html

Java: super.greet();
来源：http://www.aibaodan.cn/163zspvmwsd.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163smwyvlgx.html

Ruby: super
来源：http://www.aibaodan.cn/163usnmevrd.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163dwpnwosz.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163qkiukyks.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163sesuaavv.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163tjuydgty.html

JS:   static f() {}
来源：http://www.xuanzx.com/163xfdbjpjd.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163ofpttcdi.html

Java: static void f() {}
来源：http://www.xuanzx.com/163neyfgkjd.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163siuxfiot.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163pttcuyvo.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ntgloegq.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163dgoiotxq.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163zdhgynsk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163gqhxbqjx.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ljnbtmhm.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ksgewghy.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163etkqtgxj.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163fihmutfz.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ciwfroin.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163rgvvzhhm.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163elfcovez.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163whwejxwr.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163xoodrqrw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ronowzqu.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163iajizfyc.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163tbbvvaou.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163wgwjpjsm.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163exegdyil.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163zzzadeau.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163hocxbafz.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163fjavabph.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hydkfduj.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163rfwshkwb.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163aosqokwc.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163stzdvcoq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163pycatwbf.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163wfjfjeyj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163eqbmqoou.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163bcaujscr.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ehoumzif.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ttbxmhrb.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163okceugqs.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163jwjljrlg.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163lnypojhq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163xoszrcpj.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163gbjxjuxy.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ggxsuunr.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163hgmsgyuw.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163lifmgmof.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163lsxaioon.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163xnxlyxqf.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163rhctblev.html

Java: u instanceof User
来源：http://www.sxryk.cn/163zwdbjrvy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163fzjckopu.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163zxzxikaj.html

C#:   u is User
来源：http://www.sxryk.cn/163qoftjyph.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163tzxkvxbk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163fmrceppr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163qeqehafa.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163gxwndoxn.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bptmxjxk.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163kbxttiur.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163qdfsgefl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163dbdynacx.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163carrrgrn.html

[G15] 枚举
来源：http://www.aibaodan.cn/163vdolgcrz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163hnqjgauq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163xafblqga.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163cajvzucs.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163viedlysu.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163klhbefif.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163gmmufsae.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163hoqxopps.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163wuczzeev.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163dqxuewlf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163trvcypnz.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163tiyxmfdr.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dwrnqtyl.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rfwdwkmf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163igznsnbj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163pyajnbjf.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163muuegtru.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163gnypgsaa.html

================================================================================
来源：http://www.xuanzx.com/163pymkwyxz.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163jykftgqa.html

================================================================================
来源：http://www.xuanzx.com/163bjyehwyw.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163cisnujko.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163wzrmuvef.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163sivjijey.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163iwvbfukh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163kabzgkdq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163noefcdcn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163venxdzvb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163yfutymjj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163zcbgttxn.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163pwoboiqt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163euwbvvkn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lrbmasyq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fmidcogy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xwhccnof.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rbhenqtp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163lshhjkwc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163clohgchp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163kyywzvqw.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163ngeeiuhu.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163sfvpauij.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wvlwpbap.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163gnsytiow.html


<!-- 参考信息 -->