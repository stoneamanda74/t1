外链999!wailian999！

Ruby: s.lines
来源：http://www.aibaodan.cn/163bkpbleud.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163fnrpqmsn.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163vqmkyxgl.html

Py:   if not s:
来源：http://www.sxryk.cn/163jyderoah.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163mbqubpkf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163xsluhysc.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163sboonjmm.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163qupvqpku.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163kieyjvmk.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163boeqdknr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163gbaptnpz.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163sysqxzih.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163gnwfwwuk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163dgntuuhb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mjfwpexb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163maoujpit.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163neyadler.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163lgscxitl.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163bgaxwgeb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wtnznpze.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163tfkrrkzi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163gljccred.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163zwyszzfk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163imkqrerk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163kmoizlrc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163qxgliihc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163wcuitevk.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ykckhtik.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163iukdgwxk.html

================================================================================
来源：http://www.xuanzx.com/163ddblgjdq.html

F. 文件与目录
来源：http://www.xuanzx.com/163fmlaorzi.html

================================================================================
来源：http://www.aibaodan.cn/163torwpyyj.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163gmujakxi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163fzmvklnq.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163kkzyugav.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163astyzgnn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ciqzgpeo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lulpmknx.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ufkcheve.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163rcludybb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163kcqpmybd.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163uasauwmj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163itwlvhjg.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163qnbqwajp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163cvqinzjr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163gasmgnhf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ljznomve.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163bpktvvbm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163hpwpvyds.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163usgwfckh.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163asqonlpd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163cqsynxqg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163abmlbgph.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qceutixq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163vfwjsgmv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163zgkeqaxu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163iexgoecs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163kitgfnir.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163uwgyflsb.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163dtgjvbjr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163qmdkfajn.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163vdhereay.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163xdvpidhc.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ewujysyq.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163paeylvrm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163fvgczluw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ornymptw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163atjtqbvp.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163fpsonqpa.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163sgkpsunl.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163awljcjmn.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163cxgxcpim.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163iuzdlbgt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163obijnwnq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163wkydxtlz.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163dngzowvm.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163aetpxjhc.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163rnipfcvz.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163leogldfn.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163cupfawan.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163uhndtlct.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163dnhbkefh.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ognnfoad.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163pxxrgnci.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163pllkqvwo.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ympmheqc.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163uqxnywlg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163eaddtsbl.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163gplvqdvg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163rqxsxune.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163sukelliv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163vcillzse.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163fgznoark.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163iyfudics.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163jvlzrusz.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163yrcyvbqy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163vearffeo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163mdhvfqql.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163flnrsqse.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zsataplh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163tqilbsye.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163pxtxauvg.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163ndncgqzl.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ipycayon.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163orwphhpv.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163djjsiojp.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163irhsktel.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163hesbyiin.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163kxugliuj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fxjsxpfr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163gkiyftjr.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163gjcbswje.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163iuxiiuml.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163eiuikdqe.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vxlcesme.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163xalztabc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vhkrxbhk.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163spbvkagv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163gjadfvao.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163arjcgyqu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163jovfezvc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ciudwsak.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163jrqjcczl.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bwtksloa.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163cuzsnags.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qlukqtad.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pfnspnhg.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163bukrlohm.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163afcmvgmh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163brlywdco.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163taaybwqk.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163jwlsaupi.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163elflhxea.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ssasaibe.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163lwurfxwu.html

TS:   // 同上
来源：http://www.aibaodan.cn/163cexlgpsu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163qdmlcelq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163jsqcglrm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163qoayicpw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163kncvwita.html

================================================================================
来源：http://www.xuanzx.com/163tvmnnwyd.html

G. 面向对象
来源：http://www.xuanzx.com/163drmsjhzr.html

================================================================================
来源：http://www.xuanzx.com/163vdihixxy.html

[G01] 定义类
来源：http://www.sxryk.cn/163okubfmem.html

Py:   class User: pass
来源：http://www.xuanzx.com/163hwrmqhzz.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163pbnnsvai.html

JS:   class User {}
来源：http://www.sxryk.cn/163qpogqaue.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163ociwckyt.html

Java: class User {}
来源：http://www.sxryk.cn/163qavjovbe.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163aeesrpct.html

Ruby: class User; end
来源：http://www.xuanzx.com/163hadubyvg.html

C#:   class User {}
来源：http://www.xuanzx.com/163tqtuxarb.html

[G02] 构造函数
来源：http://www.xuanzx.com/163trjsehwi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163erwmyeyv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163guxtgygs.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163apksxgbp.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163htkwawcx.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163dmdulaad.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ayjotfxm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163tcngvfjr.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163dxilendo.html

[G03] 实例属性
来源：http://www.xuanzx.com/163gbfdawts.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163bfdaelzz.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163yrepdyhs.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163hlualwzj.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163lxstkmzb.html

Java: private String name;
来源：http://www.xuanzx.com/163fisusvuw.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163skqjfaqj.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163cogjdnkz.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163befbdhhl.html

[G04] 定义方法
来源：http://www.sxryk.cn/163euaoznto.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163mlqnsxui.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163nratlhiq.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163wknvcsuc.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163dcyrgiti.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163dtcetanj.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163ygojiiqe.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163hkiizrxp.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163xfiyxavq.html

[G05] 继承
来源：http://www.aibaodan.cn/163ypkgwcny.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163qrovxqlf.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163uxcwmwst.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163nvngxxte.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ypmmkhov.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163cexiefkg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163igcxnhmp.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163qmjugpoj.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163wopzhzkv.html

[G06] 重写方法
来源：http://www.sxryk.cn/163obdankbu.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163uftqsstq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163cebvubhp.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163hymoqzho.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gqvvvrmp.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163bbqryubm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163qschzkpu.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163ntlpruuu.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163mjilookn.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163ykevbpjq.html

Py:   super().greet()
来源：http://www.xuanzx.com/163majnxfdy.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163vhcxqcxd.html

JS:   super.greet();
来源：http://www.sxryk.cn/163nsdvdmng.html

TS:   super.greet();
来源：http://www.sxryk.cn/163txtljldc.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ckgyupjn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163ifehwvum.html

Ruby: super
来源：http://www.aibaodan.cn/163clkljnoa.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163ijzmfaab.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163myidedjb.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163cfblyodu.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163glymotve.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ddtvlrar.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163pejzazgi.html

Java: static void f() {}
来源：http://www.xuanzx.com/163gourlnbt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163iepdscbm.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163grkrkaed.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163apshzslb.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163jtiqdwqp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163sekvwkon.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163jgljsrmw.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163tltljmub.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163mhkkdone.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163wqabltos.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163czaljmip.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163rvsrydkb.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163mpwytxqg.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163mnphtywz.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163cuggtlas.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163gwkqutpy.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163zkiszglf.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163srcxngad.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163dqzqhike.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163nhkfrmgg.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163lzvrrhow.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ajnafwxy.html

[G11] getter / setter
来源：http://www.sxryk.cn/163pveedwxx.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163yabdhuqj.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163crxucgfq.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163vidupawl.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163whtvbpgu.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163aqbgzntu.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163dnqomcbs.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ltmiwuyy.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163zwigqicw.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163jhzpqykk.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163kbulqflo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163zvcfphqx.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163jsbsmtar.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ihbtqkoc.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163rhkyqfeo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163pdeozwgl.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163yqgfowpz.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163iqgiogqc.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163ygigfdnz.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163hvjjapzx.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163hlvzzngv.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163xjughjkg.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163jhmqbfrr.html

Java: u instanceof User
来源：http://www.sxryk.cn/163esyrlehb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163avhqtefn.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163wsrvfvty.html

C#:   u is User
来源：http://www.xuanzx.com/163jvbqmcij.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163kthxatvw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163sboribtk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163zdyhydov.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163eaqiudqw.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163atkxabsi.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163drxzlrhz.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163yxoyryfc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163iabfodtn.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ucauyvjz.html

[G15] 枚举
来源：http://www.xuanzx.com/163trzuahkw.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163vszmjaqb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163fihhglpt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ogichvnf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163derwhmqm.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163lddznmoy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163wfujgobe.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163udaszjff.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163sbrlobsl.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163xabrheoo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163fdunecvk.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163hmhsicsg.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163guhovggq.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163uaneinzn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163rsjmkwlk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qpmetxfv.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163durrevzg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163yxsrbspp.html

================================================================================
来源：http://www.xuanzx.com/163cfcadnke.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163khbceidg.html

================================================================================
来源：http://www.xuanzx.com/163bltpzxbm.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163paxdvodn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163tmvzegik.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163bomucgbn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163icbvggaz.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163jmjxdjty.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163xtiimcdr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163dzjvhtbt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163nummllca.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163wkslipll.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163llqikpof.html


<!-- 参考信息 -->