外链999!wailian999！

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lwatkqtm.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163hpithkwf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163qrkenyfu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163klhwgawa.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163errhtude.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163zkpwprie.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163avyvldgy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163yyikhxkq.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jqvbirxv.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zmekuppi.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163kmwmcvwy.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163bfizhfnd.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163vfhfmbtf.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163adfaszmx.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163hyitxjfn.html

Py:   if not s:
来源：http://www.xuanzx.com/163zzpvjbci.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163nixswfoa.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ukuecslo.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163cwbltklj.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163mkexkwsx.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163snycvvvh.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ajnditja.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163dtmfxxms.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163lnvlxjkp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163bpmksjak.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jygfzhwv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163eixqgyyc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163asotxzcy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fhfbnzns.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163dgovcqvv.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163xaszpfmb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163repmxnzo.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163mzlidbhe.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163xjnirnpc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163gzupnawz.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hhvixdtk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163twcurhvg.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163mhjhkahk.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vzrtythj.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163erichmwc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163fkzeckot.html

================================================================================
来源：http://www.aibaodan.cn/163squqhlvn.html

F. 文件与目录
来源：http://www.xuanzx.com/163bbbsuelh.html

================================================================================
来源：http://www.xuanzx.com/163uwuxiphn.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163mvqxheav.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163ctehycwi.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163eumtdryi.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163cdwfrwkl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163xawtcyho.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zhhmrydn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163slbggjrh.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163xptwepni.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ehqscwgv.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163tmrunipr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163mlhnrlmo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163bvjgqzpa.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mxaczkbn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163vycqkcni.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163fwmpbhti.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ycbrjiwy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163agxhghgx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163eemukiem.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163hlngvzkk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163kkdhvajz.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163ecxqosdk.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163pysgxttq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163xrakwrcl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163tmnpjxyz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163kttykosm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163qqpcwmom.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163tjpejwed.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ssddqgww.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163bspmqpkt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163iosdxxdv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163butxploe.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163plzwiolz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ydmrdhbq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163tnuqpezj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163yamxexqa.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163aijyxmkx.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163sfncimzg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163klebadtq.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163xxhfruzy.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fkbuzimy.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163sbqrzmnm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163phnvytmw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163tmyhmvoc.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163wofnmarj.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163sruurzst.html

[F06] 删除文件
来源：http://www.xuanzx.com/163vzwzdske.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163irgmmxnz.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163bcgccwau.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xcerwgvi.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zhrtxwpi.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kqiqzrlc.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163tkczosue.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163akdhngeg.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163olqyzded.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163izlfldwb.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163kljaghrk.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163sapdsmdm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163chfqyvkb.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163imkvcasd.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163koazkjpr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163xzzigjec.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163wexuvykw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163konmrrij.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163dumtntuc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163inbccdqy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163hehzpwpi.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163gavbnale.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qvgweamq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163raioblvz.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qzrsohnr.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163qzuaagyj.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163fdkaljrb.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163nwredzxo.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163pkighqkm.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163dzaitbcp.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163obgwrwuo.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163qrjwnjuq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fxxxerhp.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163ifybmxnd.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163hsujtald.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163iaysdcvm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163ubfdlyov.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jobgobgf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163iichjaii.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163obrcetas.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163csfxajtx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163mbrcuggn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ocsxwvwq.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163pfrkvqyx.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163iznlyprz.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ynuiqryh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zzsjgmoa.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ygmltyja.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dibxlapr.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kavyqlzo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163pcuvnbug.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163iuvckcmz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pibgznvj.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163bushcptt.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ioswoigd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163qcajzcge.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163fbzpaaqn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163pktcluiz.html

TS:   // 同上
来源：http://www.sxryk.cn/163qahimxbl.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163qgglkoma.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163tpnvtkod.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ergdizop.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163bxdgachw.html

================================================================================
来源：http://www.xuanzx.com/163lbzarfxr.html

G. 面向对象
来源：http://www.sxryk.cn/163gfxtacjw.html

================================================================================
来源：http://www.xuanzx.com/163zdnqupfv.html

[G01] 定义类
来源：http://www.aibaodan.cn/163fcyzuebf.html

Py:   class User: pass
来源：http://www.xuanzx.com/163lcbqiwhe.html

PHP:  class User {}
来源：http://www.sxryk.cn/163yykczmrh.html

JS:   class User {}
来源：http://www.aibaodan.cn/163sqjjobyk.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163qugywvkt.html

Java: class User {}
来源：http://www.xuanzx.com/163wiohncbp.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163gllwoyen.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ojmotkda.html

C#:   class User {}
来源：http://www.sxryk.cn/163ribnyefo.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ajmlbirl.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163cfjiffji.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163dlzudcwb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163igvespdt.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163idavtdzk.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163qwvumemp.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163jdncbhsd.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163kwvqfngi.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163ngvtryma.html

[G03] 实例属性
来源：http://www.xuanzx.com/163gmlquagm.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163fvrgphuv.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163febbgutg.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ergfxttm.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163wdywhmos.html

Java: private String name;
来源：http://www.aibaodan.cn/163dsyxbhuv.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163bcbzwtcf.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163wzhcynct.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163fkswshzs.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163omjfrffm.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ccaryjaz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ryhuetrw.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163oszhallc.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163eyjtnkpm.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163bpbxexpy.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163vtivgvjq.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163anvplmqg.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163kgfuwlxi.html

[G05] 继承
来源：http://www.xuanzx.com/163qgwhxuhw.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163wejhawai.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163pqgtxmrl.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163mkctynxm.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ahiiaqte.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163udizqxtc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163thwfezdi.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163sanvoamf.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163ksaayuxp.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163ncshwruv.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163gfbxszqb.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ettljckg.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163mttdnsjk.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163uliylckz.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163kbxjcmwv.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163snsugguv.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163nmmksavq.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163tibfnymq.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163umidcyjj.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163pflwxsrh.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163hxjxfnva.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163fdwvlnmd.html

TS:   super.greet();
来源：http://www.xuanzx.com/163chkdqwgk.html

Java: super.greet();
来源：http://www.sxryk.cn/163gzhgmagy.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163ezpmtfaj.html

Ruby: super
来源：http://www.xuanzx.com/163cwtacdnt.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163vnzszugq.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163injefksa.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163zhnihfro.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163zuichpro.html

JS:   static f() {}
来源：http://www.xuanzx.com/163arxhwhix.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163tznovycm.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163erqbjjvf.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163uxrejcsn.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gchxkmbt.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163niipawoy.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163qtsjlylj.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163hkbkqnfj.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163tyqgnejf.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163gpwexizx.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163cyjgtilq.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163mnfmvtmm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163qgcgfkuc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163uqfbmmuz.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163cylffzgk.html

[G10] 访问控制
来源：http://www.xuanzx.com/163nbkkqavb.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163ffeyjxjm.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163bmgyploq.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163xbqmeugd.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163jpvctwek.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163zpgzcuap.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163ltcpspim.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163dvciyeoj.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163vdbrhuhe.html

[G11] getter / setter
来源：http://www.xuanzx.com/163eogvimom.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163lixftqdw.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163swswwvfq.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163wrnoteky.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163uutfgyoq.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163ovwckkav.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163goenzvma.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163pszxlpft.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163hsnjnhmr.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163plyzxgjz.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163krwvqswp.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dimlnnop.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163pmwgmjva.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163eidasnre.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163qspgewqt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163mldpzecw.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163ezyiiwde.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163ivrylcrx.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163aplhqnom.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163wocfmeis.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163savavniq.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163jdvxlcjb.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163bnzzcggv.html

Java: u instanceof User
来源：http://www.xuanzx.com/163gqbnulio.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163eukgxsrn.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163lhznezsp.html

C#:   u is User
来源：http://www.aibaodan.cn/163jyhtpkrv.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163pbedmnwz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163zchztnhd.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163vdqocsfg.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163britetws.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163jlzngkul.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163xjnlyjds.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163hchiodhp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163xghijevm.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163mdxskxoe.html

[G15] 枚举
来源：http://www.xuanzx.com/163wauifyzp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ljymvngm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163gebmowag.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163cotmpifn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ysckswrr.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163mdwrzdso.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163pobknevo.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163ertefcdw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qwhutrbd.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163uqqxqtgk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163mzoqgrgo.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163vhckihpj.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163sqvokmei.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xijalnha.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163dejeqvgf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163lypatavi.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163paqnzvvk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163qijlzgmn.html

================================================================================
来源：http://www.xuanzx.com/163uznfmxpj.html


<!-- 参考信息 -->