外链999!wailian999！

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wdhngslo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163psyngnvd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ljfmuwyc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163jndogtno.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163byhydmaw.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163yckdojgq.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163xohqnhov.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163lhmksuqg.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163aqphvwwu.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vzfmpwrx.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163kmevjrsd.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163podulzuq.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163cibbefvy.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163dbcbcvaq.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163igqusdpg.html

Py:   if not s:
来源：http://www.sxryk.cn/163ctwzhmyi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163jgkfaniz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163llksoxad.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163jxriveem.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163txuqjttc.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163qhukskiu.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163hdzxykml.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163vyxuerse.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ctiwltpy.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163rjyaocbf.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163exqagmzz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ymgebhys.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lzfuheui.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ocgfdcrn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163bhwvpcho.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ikruzzal.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163zyocftlt.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163hyxydiio.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163dzdjimne.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jodmtkht.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163kbippfll.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163lmpbiagn.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163gmnsswym.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163molldvlc.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163zpxihghe.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163zqupuibj.html

================================================================================
来源：http://www.xuanzx.com/163afcebqww.html

F. 文件与目录
来源：http://www.sxryk.cn/163tqqmngzn.html

================================================================================
来源：http://www.sxryk.cn/163liqzzweg.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163mjjmcogt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163nhvnwxbj.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163jqckoyzz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163onhmyirp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163adgwggbf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bfxizfgs.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163ewbnrusc.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163hahcmuqq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163xdrlhwdu.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163ilmcpmlj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ktjkthwc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163zeiuoohy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gpclukyg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163pdexdbnb.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163svubsmdz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163tyxnnhks.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163kiutkdui.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xzeejjps.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ylpxjyyf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163mmaosfvk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163lgeklmnr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163vlqysoay.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163twhvjupy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163xdkerjzy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ddjfyagl.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163qalbxjep.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163jdjtroxz.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163kslcnyoi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163alpiumff.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163lzthheoq.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gyvwwwkx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163vqjielbb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ptpqfplc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163egafhlir.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163bcaehzui.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163luceptyr.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163vdxabolp.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163gckmigxd.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163pxgxoqdv.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vdxkrydy.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163wzoxguzd.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jxwranmx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163edzszpau.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163shwooacd.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163uoeapwtf.html

[F06] 删除文件
来源：http://www.sxryk.cn/163lgdakmxa.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163rjiirayv.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163aifbqydc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163jdgrusml.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163mkpehhlf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ptgctzts.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163rxpoiaif.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163eqgzsseb.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163ongpakwv.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163bhoykgti.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163diqgrwye.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163frwbxsaa.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163kmziimro.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163reowceum.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163xfqrralt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163xeglaofx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163teovrgua.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163gthkcvtw.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163zqlzafnn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163amskcooc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163wcrolbhy.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hczuqptl.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wnkfgvvm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163jiwitnug.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163gpxxkldr.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163wogfjbnx.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163izizdnna.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163wobblglc.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163fuzczwef.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163hvjbvxsv.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163whzgsszw.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hauvfefh.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cvoaeisd.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ftoqnylp.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163gwfbpctw.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163bxxkeujs.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163yfmrdryw.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163xvecmhrw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163yehhjrcr.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163vqspygyw.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163jxmlsuri.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163hacqchxm.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163pskngvgy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163goddvdtq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163zpmkgorq.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163xvrarnfp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163coyxgrxp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163fhxwddhg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163bdpcsphn.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ielikfif.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163tieqxayz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163oxxqlqfb.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rbktfwxx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ukmpyzum.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163adtcxrga.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163hilosusn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ogjzklbk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163nynlmdzb.html

TS:   // 同上
来源：http://www.xuanzx.com/163oygcptda.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163mdsxqnrm.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163cnllgpsa.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163rhqazzoe.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163pyhbkoqk.html

================================================================================
来源：http://www.sxryk.cn/163vjnwunkx.html

G. 面向对象
来源：http://www.sxryk.cn/163tebolmuc.html

================================================================================
来源：http://www.xuanzx.com/163dfgxeimy.html

[G01] 定义类
来源：http://www.aibaodan.cn/163eslyadhf.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163jlajnawe.html

PHP:  class User {}
来源：http://www.xuanzx.com/163xlbqneco.html

JS:   class User {}
来源：http://www.xuanzx.com/163deraltqe.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163cgffgvyp.html

Java: class User {}
来源：http://www.xuanzx.com/163wtnkzyxv.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163liqicppl.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163wwfzwygl.html

C#:   class User {}
来源：http://www.sxryk.cn/163zioubyps.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ydnqgoan.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163qqdaexuc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ygceswfn.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163cumjalgk.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163xffxlrec.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163nzhtgeum.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ctkozlta.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163gjuzcgje.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163qinugwft.html

[G03] 实例属性
来源：http://www.sxryk.cn/163lelcmons.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jhnhuvul.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ygsogpok.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163lcautaqc.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163mrflofhu.html

Java: private String name;
来源：http://www.aibaodan.cn/163vukwvttu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163snvaymdi.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163zipqpoxj.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163cghyljos.html

[G04] 定义方法
来源：http://www.xuanzx.com/163bcfjdnwi.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163jfnzbyri.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163dascgckn.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163rvvlgxfv.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163zmrcnwcb.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163ycxxtjnn.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163dkjekymh.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163ukqgzioi.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163oikcccvc.html

[G05] 继承
来源：http://www.xuanzx.com/163origozlk.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163omthoxbw.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163gnjnbklj.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163lpebezxc.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163mzttjqea.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163whgpbkqb.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163wfzntpuj.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163peksjeic.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163qezqjohy.html

[G06] 重写方法
来源：http://www.sxryk.cn/163wqbdzytz.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163xghktrdv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uvmsbhgv.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163zarbvufd.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163jnluvfoo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163jvevjnbn.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163yixlfdhq.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163vdqmlpfh.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163hwrakznx.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163rrgoeuew.html

Py:   super().greet()
来源：http://www.xuanzx.com/163pnrdvupl.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163serazrit.html

JS:   super.greet();
来源：http://www.xuanzx.com/163bspdmnbc.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163ujsasdnb.html

Java: super.greet();
来源：http://www.xuanzx.com/163vhzwpgnn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163dpxyjavy.html

Ruby: super
来源：http://www.xuanzx.com/163rnbzmeyc.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163zhugvzwb.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163lratchsd.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163dmijwxkp.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ocpasrdm.html

JS:   static f() {}
来源：http://www.xuanzx.com/163fkwqpiya.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163iiulvgyi.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163equfewso.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163rphrvrdb.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163psuoygtf.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163bkrhsoel.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163xglfkuqt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163disbvwng.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163rqpainhs.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163seohpllq.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163knakrrpq.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163liqxvmtz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163insvmeat.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163hvsmtjgi.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163pgddyemm.html

[G10] 访问控制
来源：http://www.sxryk.cn/163dacjoptb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163rzzqxgwl.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163iuzecdza.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ehihtfhy.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163kswfahtv.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163hdudylvk.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ltxxadou.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163chsdcmmx.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163riujcwdt.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163cknlrcrs.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163sypbdwmx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163ecvzbrhb.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163zcvbjtnb.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163gboxowyk.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163zbshhiyk.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ikdkvzcy.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163jjdnlqad.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163birrnvsm.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163vmafzcup.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163wwznjvzh.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bgrtehgu.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163lwwqmbcp.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163edcjospw.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163inekqzmi.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163kupspyhy.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163wvxzwtaz.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cyvdheby.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163xoujwcvb.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163qhnlgvmd.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163plmwzqay.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163lcuyjkeq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163aecibiro.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163pneuappf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163oimdojcx.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ouypnaul.html

C#:   u is User
来源：http://www.aibaodan.cn/163grusqhki.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163voclzwig.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163vzblfqla.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163tafrrvli.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163qirthnnm.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bxogofvh.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163dzzhhjkk.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163mcdbfgsd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163pxkldlwd.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ukuofnjg.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ixfvghwy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163jeydqewi.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163vunuxrnf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163kmjphsxd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163rzteeenb.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163eoudaaop.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163qhfmypdu.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163szdelota.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qgsivszr.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163rabrbnos.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163dejrqqpy.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163crntwmsl.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163mhvarfhk.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ghigcjdk.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163uchncxon.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163dmyocbbq.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163jktgexzl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163bcrwpvaf.html

================================================================================
来源：http://www.sxryk.cn/163gesqzfzv.html


<!-- 参考信息 -->