外链999!wailian999！

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163hlpkkuct.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163myghthnk.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163eckmdtfq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163vshchicm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163gsnavwgt.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163simwgklf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163eywmvplq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163gfkmrxyo.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163jtqwwkyy.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163vfaqijpb.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163oucokjfx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163wqdkaeav.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163suasluhe.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rfkmgyxa.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163loagvqjr.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163yvzselzk.html

Ruby: s.lines
来源：http://www.xuanzx.com/163ielafiit.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163voxhxlzc.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163phoxciut.html

Py:   if not s:
来源：http://www.aibaodan.cn/163mbczvfdr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163vrqidkro.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163konbdgta.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163yjoeosnu.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163vxzophia.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163xbxpxxru.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163xikrchii.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163aphfkvbc.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163ghtzsmjp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163mjkmulev.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163vhhvljcf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163mgmcdrsq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kageaswd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163xaazyufe.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163cqoyprpr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163jgvpykqo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163aslxlvge.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163lsvirtnc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163pksbpvfn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163wscvwark.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163aezsjkqb.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163pavsdivu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163dwsyyjxv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163mcccxiap.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163yhixoagg.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163svkfrxtq.html

================================================================================
来源：http://www.aibaodan.cn/163zeaygwnh.html

F. 文件与目录
来源：http://www.sxryk.cn/163hwjxhbou.html

================================================================================
来源：http://www.xuanzx.com/163hbughvnn.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163sknwjdhi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163cpxmcotd.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163dmmfbekh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163sdolwjmr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163lbsdvamo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163pykvhurn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163glvspkkf.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163kjpvitxu.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163vstpsggf.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163hcuqicpu.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163stlknzmf.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ojgpmziq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wfwpuudu.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nnmguexm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rfexchee.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163dceoxafs.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163cblyninj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163jmzrrrng.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163rltmyjdk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ghqwoyft.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163zejgxbmi.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mzphzwig.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163qjifymhh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163lpmvlofh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163fxfoviiu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163oyswqhwu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163jprknmeh.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163lyrzwkob.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163zzlawkqt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163jfmjevgc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163yjowhvim.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vjnyenrz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163izrmlisp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163dgvxzeba.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163fucjwmmc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163asgntuiu.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163bcvpjejd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163oyzvwgng.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zoawdcqv.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ckjuwmpu.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163zwuzajde.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lrfutmpp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ljmtauzw.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163hbrqqdww.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163cgsfochy.html

[F06] 删除文件
来源：http://www.sxryk.cn/163mjerwfje.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163gfhaibtz.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163anyilvhk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163duohzjiz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163cqqrqldg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163crfkccui.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163emjmsjmc.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163phftjpei.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163jaobbbux.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163fohwbgfm.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163prxwogsm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163wflgtplh.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163xdaievan.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163aowohfav.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163drgebhxv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163uemumqbi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163prnlvioo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163aqopxjev.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163ivijuxkl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ezwpwtzx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163vbcgarhf.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fcwnxqdt.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163tlomtgbf.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bzoouhff.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163heeyjfpi.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163izmifcbk.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163iynuowhk.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163ocjliyph.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163bkhnryej.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163cugyjjbk.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163erjaezsf.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tqbniicn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wydrbqii.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163gapbabou.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163rppljywo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163wiyqjskr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163zhmviagq.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bytwhiwx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ybuoanof.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qugckvvy.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163scovgswy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163rnwulkkf.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163qhhpqmvb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hkdluobe.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163csdxwrus.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163hdrmainz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163iopnpdez.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163aeyvjlem.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rsbynait.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163cfoibmmt.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163bryaxkxg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163vhebpvsm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163mfknjobv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163mtyrrxjz.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163sejigacm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163wzvwprlu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163zhutlvqn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163tepgojcw.html

TS:   // 同上
来源：http://www.aibaodan.cn/163yhfexzlr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163uloyzicr.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ljtpztcw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163copiatgt.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163pieihdsp.html

================================================================================
来源：http://www.xuanzx.com/163zzhcotow.html

G. 面向对象
来源：http://www.sxryk.cn/163xwgyvqum.html

================================================================================
来源：http://www.aibaodan.cn/163xuyvxyaf.html

[G01] 定义类
来源：http://www.xuanzx.com/163yejptaem.html

Py:   class User: pass
来源：http://www.xuanzx.com/163kobetfaf.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163klwiuwnm.html

JS:   class User {}
来源：http://www.sxryk.cn/163jvnxrqfj.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163fnbpextr.html

Java: class User {}
来源：http://www.aibaodan.cn/163dvzqeuis.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163abpekjfu.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fwgglmoz.html

C#:   class User {}
来源：http://www.sxryk.cn/163ptlcsbhj.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163uojhkkey.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163natnuvhe.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163msdfcnlz.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fhawbyvf.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163jthsykhn.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zrvvfxut.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163sgqifoqh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163jljgjdjd.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163ugbdskzv.html

[G03] 实例属性
来源：http://www.sxryk.cn/163bvfaowvr.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163ikxyfmvp.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163izkzxajb.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163mralehhd.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163qgezxllo.html

Java: private String name;
来源：http://www.aibaodan.cn/163qkmdhrpp.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163xaeilnqe.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163nqbzxgoh.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163jblyvqqc.html

[G04] 定义方法
来源：http://www.xuanzx.com/163gzqypwyf.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ipwdzrft.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163dwbtemos.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163owwwngvz.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163wmkthzsj.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163ofrpvobv.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163ousaxvxk.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163keqpmwzn.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163dwjlvcuy.html

[G05] 继承
来源：http://www.aibaodan.cn/163cmssqvfw.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163adkuscdv.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163jpvrpano.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vephaxzy.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163restxehk.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163dyuvtrvl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163abaijhol.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163zdqtkgfv.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163fiyxbkrz.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ndmixtny.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163mlpnwyvl.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ltkzhbqi.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163etwguctf.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163gcnfjjmw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ludceigp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163hodtbyva.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163rqqhkqig.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163ruvnbtou.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163xkofjnvv.html

Py:   super().greet()
来源：http://www.xuanzx.com/163vupifshr.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163vtihsanf.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163etfyjiae.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163eiicpmwt.html

Java: super.greet();
来源：http://www.aibaodan.cn/163gfrhobcz.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163wiortdto.html

Ruby: super
来源：http://www.xuanzx.com/163kmsadoma.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163ekhdozxj.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163edtlinsq.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163xwriozfu.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163zegdwztl.html

JS:   static f() {}
来源：http://www.sxryk.cn/163kirnxqei.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163xvcclvky.html

Java: static void f() {}
来源：http://www.xuanzx.com/163lvettwev.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163iwnrmkqa.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163qbuosrvc.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163rmqqbfye.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163cbmshxyt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163nxnabyye.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163twgegifj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163bztkbizs.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163ufkstfdi.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163hampslki.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163roqpvwlj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163navgehku.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163xttopmcm.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163jtsqqhgx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163wqcpyvsz.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jycdqonj.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163segjucvu.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163josywicf.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163uhpbzvnq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163rzfynzhm.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163xfmaehsf.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163scbzxdkn.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163fnszwrxb.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163fwlhqqxv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163fteodrqn.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ybhprawv.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163gwlnxlgk.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163chyywfhz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163dlpxxqcp.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163gknubgbn.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163vrdkpwtw.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163znfybjzz.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163fwwtwqbm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163fgrcimnz.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ehhougpa.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ngpawjmf.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163btztmruw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163xvlygtsw.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163dppmxgnq.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163xbvlvnts.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163fnzkcuvt.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163xijookic.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163nliogqts.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ztzreqxd.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163giaztaal.html

Java: u instanceof User
来源：http://www.sxryk.cn/163ebszzncs.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ndnkrvxi.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163mzcpuafz.html

C#:   u is User
来源：http://www.aibaodan.cn/163vmnszhqn.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163mtwiknkc.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163chvqhrwg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ubnghtja.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163pitmvxux.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163zzsgweks.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ervbdcep.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163azfdgqth.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163zphvlyoq.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163omzqntej.html

[G15] 枚举
来源：http://www.xuanzx.com/163thtmzyyq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163vqvuvtzf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163nkzpqbco.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163cvspcsga.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163opkdzmpe.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163oayjkqrd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163tghafsoa.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163eevmpujs.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163cqyatddx.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163lcryxrkr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163xpbpuygb.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ypbzkneo.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163prfalvlm.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163lzktvmhu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ttlqlrga.html


<!-- 参考信息 -->