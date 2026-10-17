外链999!wailian999！

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163zmvncmzp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163pthatewm.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cjrxuskh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zkzpzrmi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163rjkqetqr.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163jniufaym.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163fwixgqhc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163xgmzlfbl.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163zotqguns.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163jimxuudd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rvojklru.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fgbpyrfd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fgdelboh.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163imejvxud.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163brjltxgf.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163riijkqfu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163igvgzppv.html

================================================================================
来源：http://www.sxryk.cn/163ekhinvzb.html

F. 文件与目录
来源：http://www.sxryk.cn/163vcussdeo.html

================================================================================
来源：http://www.aibaodan.cn/163hbsyzvzd.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163udaetakr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163iyvjhfbs.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163tphkpmoq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163zxoezvxp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163zuyjtbwt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mayqwcdd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163pzblikxe.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163gjywlvxr.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163qdjrveqr.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ejdziwns.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163hpbqzcds.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163gtosfhaz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163iqhvlrvi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163kvebrlgc.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163oqnbmmzs.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163obmuillj.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ofwqqtzi.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163gqikowte.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ckctpxms.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163rhyqwcil.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163kbumtegn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163edqgyfra.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163kujpvaky.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163riijahyw.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163yopblubq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163jcbtozjz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163kiqvnjzw.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163jfeistir.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163qqzudwgw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163qufamntq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163eyfyxggx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qhqharoj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163bezedugj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ztcnqpkp.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163agweyewr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163baorzoge.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163rinlmcpw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163erhlxxcg.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163qvmavihh.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ckvfiqtw.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163yhuwqwlw.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163budmoupn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163jeycnooe.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163yuacflbw.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163geeodywa.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163pxizcxgb.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163podbyaqj.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163bevslerb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163nqczbrvc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163owbdupna.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dnpnkwex.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163veslwflr.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163zxpmxvcb.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163pbkzwfbb.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163mlgnljcr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163rgpmaxfo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ikwohnvj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rumtfeir.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163mfkofcoj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163vvszyudl.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163jgjuhrpc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163espcxknz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163dpbgyhda.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163bigtbxgm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163clpzcswf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163tanhhwnn.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xcrxzpan.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163kworgovd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vkttebnd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163gwdzyyzi.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163vxdysmug.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163xgkgzkxs.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163eubuutri.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163uthswzkq.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163bcfwssvu.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163pluetryg.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tikpfrom.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163bewkjpyy.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163vcrhrrct.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163gglfqpuy.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163tagubqbx.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163yhkonpnr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gruwnuyr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163zzfauvin.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163forofvhl.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163plpcbxdk.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163qhrcoadd.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163kvjicjoo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163fqbxuwdi.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163vnheiuws.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163mmohuguh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163onfiewiw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163cxvqbhvk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163goelyvkq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hlhxgqsz.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163veyvaptn.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ywhqhitc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163psolypmh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163herklxxo.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163kfjhhkwg.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163uvrwwwhv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163cyoedvqs.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163iykabndd.html

TS:   // 同上
来源：http://www.sxryk.cn/163xxreqqrp.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163rbziwbhq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163rjotjblr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163enzkjsjs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ipsgzrgc.html

================================================================================
来源：http://www.xuanzx.com/163eazsblqm.html

G. 面向对象
来源：http://www.sxryk.cn/163xazijiqw.html

================================================================================
来源：http://www.aibaodan.cn/163tzoqkewf.html

[G01] 定义类
来源：http://www.sxryk.cn/163jywydyai.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163bvfibajg.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163fwgbwvof.html

JS:   class User {}
来源：http://www.aibaodan.cn/163jeeajqao.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163hgcrsqts.html

Java: class User {}
来源：http://www.sxryk.cn/163aowhwdlx.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163aueooilx.html

Ruby: class User; end
来源：http://www.sxryk.cn/163eqlqtqoj.html

C#:   class User {}
来源：http://www.xuanzx.com/163weyqtgzs.html

[G02] 构造函数
来源：http://www.sxryk.cn/163wnryfboe.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163eaqwqqse.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163kghgeiqv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163afpazvav.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163jtwxudsl.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163mcdoztof.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ggpianxu.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163gpbhurtu.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163rgmanaoq.html

[G03] 实例属性
来源：http://www.xuanzx.com/163rrglorvg.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163bnweuucr.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163uyscuvuo.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163vgsozwll.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163lncarhhl.html

Java: private String name;
来源：http://www.sxryk.cn/163pqmukwvf.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163cgdllcvv.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163ioslgmci.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163utsufpfy.html

[G04] 定义方法
来源：http://www.xuanzx.com/163gackypas.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163nuacodem.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ffmhlrxn.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163cxfwhwod.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163jniaisaw.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163lcdbkgyy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163wfiivzid.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ehsfcklg.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163empsoucu.html

[G05] 继承
来源：http://www.aibaodan.cn/163dicilflo.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163xzgqxjkt.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163qopyperh.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163rdxpqdfw.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lxofpqxq.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163dfvrtqku.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163syrdwtnj.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163sofcpdoi.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ujbgxdhg.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163tbzlynjm.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163ruhvizlh.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163spslrhaa.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163aqiohmlp.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163nmgksvbr.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zrbcwuwl.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163jfratbsk.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163cdekzwjp.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163zxavdoyz.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163lqrlozes.html

Py:   super().greet()
来源：http://www.sxryk.cn/163tgbqauer.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163etliifii.html

JS:   super.greet();
来源：http://www.sxryk.cn/163ycanaqob.html

TS:   super.greet();
来源：http://www.xuanzx.com/163sjrfqdgb.html

Java: super.greet();
来源：http://www.xuanzx.com/163rdnqwexn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163evieytlk.html

Ruby: super
来源：http://www.xuanzx.com/163afhhgdbe.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163lxxmchzg.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163jrsmilgb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ypaltmxx.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163zfjlnbml.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163licfbyci.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163kopzayrt.html

Java: static void f() {}
来源：http://www.xuanzx.com/163eflcrzdp.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163nklgpnng.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163roskvund.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163nkvqorhw.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163duduyxrv.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163oqckvmxo.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163zgxarqim.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163iqfrbozs.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163sfzrcvlq.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163algeojja.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163mjjefopd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163akzaejef.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163jrfoapno.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163cejhymeo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163qoevruwe.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163ocsiojlv.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163swocyxdq.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163cokgbwor.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163imgnjfgr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163fsxqqtxl.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163kegwnnod.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163syvovosj.html

[G11] getter / setter
来源：http://www.sxryk.cn/163oudbmmsa.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163zhlgkxte.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163njrcpinj.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163tjmdjevu.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163tkwtzvpw.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ktmbrstr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163scoiticl.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163xofcumhi.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163petxlpnh.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ptwjtrgu.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163fskknxow.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163aiulhpia.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163rsvavbxe.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163tcatyyhp.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163cmycqnrt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ojodsrah.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163laiccvwq.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163xfwrvmmk.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163xynsvkfu.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163cekaybbr.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163sovhdxuf.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163qcrdhivi.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163pjadepes.html

Java: u instanceof User
来源：http://www.sxryk.cn/163iiutdjzt.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163nqbkhtyp.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ykdxfqgh.html

C#:   u is User
来源：http://www.xuanzx.com/163lhhwqzjq.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163wjtuicsh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163wdaitijv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163fudrezfw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163skelyaue.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163wiksefni.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163hkusgdsw.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163jdyqyqiz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163guscyotk.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163abjgcdex.html

[G15] 枚举
来源：http://www.xuanzx.com/163dqallccf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163glzuzsug.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163fuvanhho.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163sfrwvrpp.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163aimiujru.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163zgqwpyvb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163keczlush.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163mdbreigi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tgshlemg.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163wppooiii.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163wxibqwws.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163uqfcdvsa.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vhnafzec.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vnrkwhpu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163mxfntbih.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163ycmtnist.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163kraopymz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163bygbgmpg.html

================================================================================
来源：http://www.xuanzx.com/163zugdnmmc.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163qqrbiuvg.html

================================================================================
来源：http://www.aibaodan.cn/163ceemtkkh.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163pfgumgrr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163gtldlfjw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163wdoggwyh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qxvgbqez.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163bbrnfzon.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163catzvbky.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163byohregq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163umtaggwa.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163fuwditft.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163jykzhtfl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163aankgzhl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uojlnyys.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fxqewjtl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kuzfbdrh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163qrsujvcq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163dyuuvhno.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163kkgxvehv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163zgmqxqae.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163wutvjsxy.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163euqeweji.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163klcrocoz.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163hzuzwvkl.html


<!-- 参考信息 -->