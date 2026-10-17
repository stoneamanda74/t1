外链999!wailian999！

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163illxftzs.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163bjqpopas.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163xnxwpuyx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163agqckoah.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163jfttnmns.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163hiukndmw.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163rjrqqipu.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163xhjpabvd.html

Ruby: s.lines
来源：http://www.sxryk.cn/163afalgnky.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xgkwfqus.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163cooupdkj.html

Py:   if not s:
来源：http://www.xuanzx.com/163xiufcudv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163zsgeemdp.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ksllqgim.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163aokclokf.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ipzrkfwe.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163akdbhctk.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163swsasnkj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163rjitifcu.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ooaqhxgt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163dltirekm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163guobjzfc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ipjjqntx.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163rdozosqu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qlwryxiq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163dxxclqrj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163vydcrtaw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163tqbfbjyt.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163qqohdodj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163bbdyhbza.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163fryantsu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fagfqsge.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rwremiuo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163gxycywrw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163hqpfazuo.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163hxvueare.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163dbitdcoc.html

================================================================================
来源：http://www.xuanzx.com/163kvfuzxmd.html

F. 文件与目录
来源：http://www.sxryk.cn/163uhkqtjzd.html

================================================================================
来源：http://www.xuanzx.com/163lwcqshal.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163gwidefzk.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163fkiupfaz.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163kdrajojc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163uaqhglvp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163vaoxrnuk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jwkskrhv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163fvvtiyxw.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163gsappbqn.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ngyzeuvy.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163fpenzswf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163uedarmgx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ceritxaf.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vnaozxlu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163vutfmife.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163siuzwjeh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163cwdhahrr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163clnbuzsw.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163qvsfkmjp.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ygnxukok.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ybfgrpvx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163tufxszye.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ztfrlooz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nqrsbsan.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163hfbbcfil.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163rvequhkc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163ulhoiqis.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163zbvowutw.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163pscqlbbb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163sjcsnrvy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163wnuaxjvf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pcrwkuao.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ndvczomh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163yoklcrjw.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163cgisrmtd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163omncdihm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163wyspldim.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163vockeudt.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163sakgkkjn.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ynrdwubs.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163kwunefys.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163khxprrxz.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vykwaktr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ezoazkxf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163mcwtpykt.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163jdwlsbac.html

[F06] 删除文件
来源：http://www.xuanzx.com/163vsxqluhf.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163dmkwskyd.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163igdkfvda.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fsnxgrks.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tstwtbki.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rovfpctw.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163fpikejoi.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163fqiqatdl.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163nemkhjpy.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ohybumwo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163zioqnknk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163wjxjxoos.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kglzzono.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163slnylpcc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163eduypchb.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163zukjruny.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ydlphpwb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163wioricyk.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163xnvvcdtj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163gquwoqnq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163kqovyyoq.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163ubphmyxm.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163dffhudty.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wblrrsrz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163wtwuguim.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163bldbdsfw.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163tlqcewtm.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163kxunscqk.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163qciurtmz.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163pdrdeeyj.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163oigfprud.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163jbjjrhob.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bxkwhlav.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163wmwkztqn.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163hsffrulf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163udtlezdz.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ucpprdzv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163yqqhzhxi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163vmlmfxpd.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qdxprnpo.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163bubkjkhs.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163kmgimeot.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163uaxzgdfx.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163edksslrm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163vghssjdr.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163okujuinh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163auxoagni.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163embfazcu.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fuanuhnn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163akddoljr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163mjffyxei.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163tyrwoddo.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ireyyawv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163hieppuvx.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163csudxctz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163yvnbfkmm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163rypriqtb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163vowdlrfp.html

TS:   // 同上
来源：http://www.xuanzx.com/163wacqszii.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163unsauaaz.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163owpopejs.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163hdczanbh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163rbtxbhtl.html

================================================================================
来源：http://www.xuanzx.com/163zkcrxwfo.html

G. 面向对象
来源：http://www.aibaodan.cn/163ccndrnjy.html

================================================================================
来源：http://www.sxryk.cn/163byasefmo.html

[G01] 定义类
来源：http://www.sxryk.cn/163pcmobuhv.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163xvafautx.html

PHP:  class User {}
来源：http://www.sxryk.cn/163hdrxjldl.html

JS:   class User {}
来源：http://www.aibaodan.cn/163viuupuss.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163rthrpska.html

Java: class User {}
来源：http://www.sxryk.cn/163saoqnjna.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163npfidcxk.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163xdxtaawh.html

C#:   class User {}
来源：http://www.sxryk.cn/163zrycccug.html

[G02] 构造函数
来源：http://www.xuanzx.com/163kftqerbn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163vrkdepwc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163zlltnsje.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163tmjkdyhf.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163kglivtdt.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163bponcqbh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163ntetgxbj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163kupsngex.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163xmnoymys.html

[G03] 实例属性
来源：http://www.sxryk.cn/163uisjaxtc.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163qxegrlyn.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ejssizae.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163dznhuxxj.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163gxgblrck.html

Java: private String name;
来源：http://www.aibaodan.cn/163pxmkobke.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163hbjsaipr.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163izwbtpde.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163drekvfbq.html

[G04] 定义方法
来源：http://www.sxryk.cn/163hqdnhxiy.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163qkoqxuoe.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fmlgzvqs.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163kcifbhtu.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163ikvzxthu.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163xxjlypbz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163zouiswda.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163fplldygo.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163jhegzcqd.html

[G05] 继承
来源：http://www.sxryk.cn/163hnqxoday.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163wfceeqrh.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163tbfsfvvc.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163cfzdvqsd.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163hxbmvdqx.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163lstpwpql.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163icnlazzb.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163skklhwrw.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163sofhxpwh.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ypxhheal.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163xoosokeb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163mqonsxqh.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163waigwpzw.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163etpgxuko.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163qgapimmx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163gwqnirwq.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163kohheysa.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163goiyqtno.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163mfmxnmie.html

Py:   super().greet()
来源：http://www.sxryk.cn/163asktxusp.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163anraqixe.html

JS:   super.greet();
来源：http://www.xuanzx.com/163fhqsvfab.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163crljelux.html

Java: super.greet();
来源：http://www.xuanzx.com/163pnfmpmyn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163qvdrxhqo.html

Ruby: super
来源：http://www.xuanzx.com/163avegxdsb.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163swxdykbb.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163znfktubg.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163qffbkvfc.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163tqxnqhln.html

JS:   static f() {}
来源：http://www.sxryk.cn/163awaqehvr.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163cgujmlfm.html

Java: static void f() {}
来源：http://www.xuanzx.com/163amzymnbt.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163eifjymmq.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163widtdxgz.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163xsgugutv.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qlnrjdku.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163qttyodxu.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163yyfrckko.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163gznypazp.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163gyudkvlc.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ibbcelrq.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163quaarvho.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ussfmybs.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163sbkucfzj.html

[G10] 访问控制
来源：http://www.xuanzx.com/163kgyekzwd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163xhrrpssy.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163ecaulezn.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163iaxfhfsi.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ywxpuvzq.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163fjuhshra.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163talnbpep.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163lxzycoxv.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ejxqtmbo.html

[G11] getter / setter
来源：http://www.xuanzx.com/163kxswldzz.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163kcsirjyp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163gbfjykvq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163trpiolkw.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163bveyvxdm.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163agnqfviq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163gcfmwdsy.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ybphxqgl.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163iiibwmso.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163wxqluxac.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163duojldxw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hdwrvxfg.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163rqbwzhfr.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163aqycwcjq.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ovpeskgu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163denrfzna.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163iwndtvbp.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163apzcqkgl.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ljyjolkn.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163xwkfbnhs.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163dgjbwdvc.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ywrwzagk.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163gxwpjhfk.html

Java: u instanceof User
来源：http://www.xuanzx.com/163kphttqgf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163mjxbghfd.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163gdntdbyk.html

C#:   u is User
来源：http://www.sxryk.cn/163jsmhoffn.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163atnofwql.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163hdgkkydy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163clixneyx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163cqgsxzyq.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163wiorwwgi.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163oihiaqei.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ghwiswvv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163kchuyzjl.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163sdudveye.html

[G15] 枚举
来源：http://www.sxryk.cn/163xocjkiww.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163ernpbotk.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163fhmrybbc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163qmvjaipj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163juhvlnjw.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163uldhqtut.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163gxqouduc.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163ppzdosbl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ansxwkqo.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163tjkeoesk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163kjbflszx.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163kmsnmkti.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163azkjdtrq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rkecuqeg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163owihtxzb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163gzrolxlr.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163woqjeune.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163chjwczvw.html

================================================================================
来源：http://www.xuanzx.com/163laugvnxe.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163nzzqoehu.html

================================================================================
来源：http://www.sxryk.cn/163muudhvkj.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163djuzwjqo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163bwipxphp.html


<!-- 参考信息 -->