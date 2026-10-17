外链999!wailian999！

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ktnslnml.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163lejghpmw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163spyarwkn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163bqxagmkq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163gluwgwwd.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163yvqvtphi.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163uvbuompy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ytuhhcfc.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gqsnxyjc.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163rndbelaz.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163infptxir.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163xxqjkeue.html

Ruby: s.lines
来源：http://www.sxryk.cn/163esnswnbd.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163nqiyvuak.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163clghacml.html

Py:   if not s:
来源：http://www.xuanzx.com/163jreojrxj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163urrjfzbx.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163hshovezx.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163xwzcasmn.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163pboawouq.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163gwvfcnvy.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163myxcwxjc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163wtuhauyu.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163nhrtijni.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163arbyqrmb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163uidvxlcm.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zjwkyvgh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hbyubulc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163iovejvpp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163yofpjrru.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163irahvolv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ykxrlyku.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163tqfdsddr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ngbqkhtd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163omiryflf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163edwatljo.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hzmhsvaf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163xldylgmq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163gnryqjvh.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163rrorulso.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163iatohbhs.html

================================================================================
来源：http://www.aibaodan.cn/163gqvnqhph.html

F. 文件与目录
来源：http://www.aibaodan.cn/163vyysnnxw.html

================================================================================
来源：http://www.aibaodan.cn/163hizskkvw.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163pknapsyn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163aaaytdsd.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163advuwufm.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163nhzrrpva.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163jrllgbwv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nywrzyxa.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ynmqapvi.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163oomsgbwb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163inidlrsl.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163dvomxxkg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163vnqxdkdj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163xsxfasiy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163aatgbvxz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bvvodxlq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163iprpieml.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163vohvwpwf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zevjrevs.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163opoidvju.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ymwbtpes.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qkodofax.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ttrvfyog.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fevxkury.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163pliqydvv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163anjigexo.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ovqwkeuu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163vprunpul.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163kyeqvriq.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163fggyrjay.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163casswnmq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ibuzotkr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qsmwgbgo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wnnwzbpl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163xbdagdob.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163vsuugwiu.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163extsdtbh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163axbhrhlr.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163wwdxuwqb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163lqdzgmpl.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163xktnmnuw.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163miqrykxa.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ltjikzko.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xxlmaiqq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163tjvjdpbi.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163uzgmcfvh.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163fallgmuq.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163xkzopaez.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163owjobtco.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163bnmlvyct.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163lkuuzayb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163moucgcir.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mhzzqeus.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163inwtjdqm.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163padzpnsg.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163lnkwblrb.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163jgtzkukv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163avlnttwc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163uiyyoyra.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163txfygzlo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bkllokjj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163uifexxey.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163lzvxkrnp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163bqzcjixm.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163nsrjdrce.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163whkwadtf.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163gwfjzhgx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163nqoqytml.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bhimtzym.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163vwbrqzty.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163cejhuvcf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163qgsxjfee.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163rpcffkkq.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163gxadzdon.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163locbqcgy.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163mafsviuu.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163khplerwd.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fxnjwbmv.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163zmkowznn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rkpgdfaj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163lqphxdpa.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163rcbwdwdo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163nbuexgea.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163oozazevr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163eahjmonu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163yikuffkl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163khgygstj.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163bilxzzav.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163cecwftsq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163kljyeanm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ktijgboy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163mjmugqzn.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163pgbzhtjr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hsquzcos.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163rvicikaq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dimjgdya.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ydkjeyku.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163zmhqcriw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163mygjckek.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dciooalc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163qsltxlrs.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163pfxdrjbd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163akdqtxoc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163pzbkjcol.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163xcfahggn.html

TS:   // 同上
来源：http://www.aibaodan.cn/163onvtgojf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163wprfwbfd.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163adufdwzk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163nmqcrshs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163kdkcnjpf.html

================================================================================
来源：http://www.aibaodan.cn/163gixsehvs.html

G. 面向对象
来源：http://www.sxryk.cn/163nynhoefg.html

================================================================================
来源：http://www.xuanzx.com/163qfookbyy.html

[G01] 定义类
来源：http://www.xuanzx.com/163gytcevyp.html

Py:   class User: pass
来源：http://www.sxryk.cn/163wrtntirq.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163gbxmirrl.html

JS:   class User {}
来源：http://www.aibaodan.cn/163axktjqer.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163butojgqe.html

Java: class User {}
来源：http://www.sxryk.cn/163yhqjkomk.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163tpbwyleu.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163aamprusd.html

C#:   class User {}
来源：http://www.aibaodan.cn/163latdfngy.html

[G02] 构造函数
来源：http://www.sxryk.cn/163xeplxkua.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163najxwgbx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163logirxab.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163vfvjyppc.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163hmnmstft.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163kkobapox.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ikjghnsi.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163uuqrnvqm.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163vnkbshmr.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163mlhwcfim.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jccjhsiz.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163kuuslyny.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163taaifsye.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163hflobuoe.html

Java: private String name;
来源：http://www.xuanzx.com/163dcmgwnng.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163vjyldmyv.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163sqasviag.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163jwtxgvwh.html

[G04] 定义方法
来源：http://www.xuanzx.com/163gbmxfyxw.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163nnxugkiu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vfwrrupp.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ajuzknmb.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163vsneszch.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163iudwjnaw.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163wtenspzv.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163bwiotowb.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163xfntcnos.html

[G05] 继承
来源：http://www.aibaodan.cn/163zhojpppj.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163yqmunkni.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163gzfjpvwj.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163ybcscqix.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163wbzntmgn.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163zhpyhlry.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163trlskiwd.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163kxsykosm.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163wrqbirst.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ymsmxzzy.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163pgppyrqm.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163oyhspnmq.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163vvyaqlhk.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ktlqtbzq.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163lyztsbsa.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163xozifdvv.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163mddtbvme.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163jrwvrtmj.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163uwxiqrwd.html

Py:   super().greet()
来源：http://www.xuanzx.com/163dcafuvbc.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163sdnembqm.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163rewxlhqv.html

TS:   super.greet();
来源：http://www.sxryk.cn/163enwwiqgk.html

Java: super.greet();
来源：http://www.sxryk.cn/163sfcmkqca.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163dwwsmfnc.html

Ruby: super
来源：http://www.aibaodan.cn/163xqcdfncn.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163yigdptrs.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163wsyriejp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163zctzoedw.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163lkrramkg.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163osvchxoi.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163uacckqko.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163xxzfarsb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163dxuhchrc.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163lfdegjyv.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163qmxkjpbi.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163mkcanotb.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163nrbmxtqq.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163pidtrxto.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163encfvoja.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163hfpkjdah.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163zchxzltb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163rczwivwb.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163tynwbfky.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163lfqpsryk.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163znuzqldr.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163usblddou.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163yyntzfla.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163rhsvbygw.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163nyjkbruo.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163lpazgpcg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163pybxggqq.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163ghyjjlty.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ghjdzoxs.html

[G11] getter / setter
来源：http://www.sxryk.cn/163yvenpwpc.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163lbikljjv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163iaegxoka.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163josdewft.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163qcynpeco.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vlpjidyg.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163evselmkr.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163dntcbvdy.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163mimfpzhn.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163zgbdjywf.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163hpqzafyy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163bsfkhkpn.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163mqbepzti.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163trrqppeb.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163njcotmtq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163xzbqmryx.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163junndapu.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163baaahjqv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163kjndohlg.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163igrqstkl.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163uyeljkri.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163erlvedos.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163gmzigdxw.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ezqpxovn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163nkwjrzvc.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163ksfjtijx.html

C#:   u is User
来源：http://www.aibaodan.cn/163mpbgmpel.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163knagcomf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163btzrgdmy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163rumrjzrw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ggskkomd.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163vixnyvti.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163hdpxkeag.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163zfbfsfom.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163csoljnrf.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163erklnvod.html

[G15] 枚举
来源：http://www.xuanzx.com/163qsalfrgx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163ubelqgec.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163jjkxtawn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163zdapayhz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163qaocvxih.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163jzyqrexc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163unpgwovw.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163jnspgcfv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163fauptegj.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163fgjtybiw.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163jfgiyxtw.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163rrrahyge.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163sasgvnmx.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fotjvcas.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163ulboanpl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163qxwywznz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163gthnzmgu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ioxogvgf.html

================================================================================
来源：http://www.xuanzx.com/163yiatqfft.html


<!-- 参考信息 -->