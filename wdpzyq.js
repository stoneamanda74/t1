外链999!wailian999！

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163utstzxer.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kvonptqk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kimjglst.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163zeipviry.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163mrefbbzo.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163fxuvpksp.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163fagbaspp.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163rdkaaudr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163asbtqgob.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163lxuyawhu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163jozediyh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163amhfynid.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163htnupyyg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163accmwjjr.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163euzwyiov.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163heijmbed.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163wmyudyyn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163sliiouhi.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163vmhjmhmg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163xhlnqigf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wsxfmpek.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163phisdyuq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163hogveoaw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163uzkplcje.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163ikfqszuu.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ihkksaph.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163gzlmiict.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163lxlapfjz.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ladlindn.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ygecjvzd.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163aawdifyt.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163csgcobeq.html

Ruby: s.lines
来源：http://www.sxryk.cn/163bedjhwgx.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163sgkuxpvn.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163qaousjvc.html

Py:   if not s:
来源：http://www.aibaodan.cn/163txrylbzm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163ietwisxc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ywjvrsco.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163hjbsqdow.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163uznmunjv.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ncsmylxn.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163okqwcjrx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163idqkhrlm.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ntwamyup.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163fagmihpz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163lvryonjr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pjbttimc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pbvmqnja.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163uppvzlfd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163rcqqzjwf.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163imelbxnn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163xfkqfvot.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163rqjbhvwl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163uthuphvy.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163mpzggqam.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163uueiefny.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163bgwopibj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163biyrgwjt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163qdcmffjj.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163egylizyj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xclvqebs.html

================================================================================
来源：http://www.sxryk.cn/163cjnlyxma.html

F. 文件与目录
来源：http://www.xuanzx.com/163zeqblusp.html

================================================================================
来源：http://www.sxryk.cn/163aqenmfod.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163croxzcok.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163dqwzpkds.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163fathxmxw.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163wqzdlkjn.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163dctiderl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rytguhiq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ehmdizlr.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163jtdgjxay.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163kqenpnlr.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163tvepmcxq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163xangplyo.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163fulihepi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lmrlpvwh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ivhmoowj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163wufyqllm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163bpxbqtxp.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163usdsjbxk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163ccevtfjd.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163abozuwbd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163gbuqmxll.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163bzuihvbr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163anvyzkej.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163coqxfjag.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163ejegjmvu.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163crqtccny.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163fmqwuffs.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163fqykkcpd.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163msxqqqxc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163tqhqqcdt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163qofncsvc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163yherefqs.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163mgdyspgb.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163myvdvhdo.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163qmovxibs.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ykdxlvym.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163mbxlwilp.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163dpvhtxkl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163akrkidbi.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163aygdbrew.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xwcvglse.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163losexqmt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xsnkfizj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163hpwbdgil.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163hhbmcuqy.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163abfufhda.html

[F06] 删除文件
来源：http://www.sxryk.cn/163bmvlqpkb.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163rzopzzrc.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163bdaugkgg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vuxrdwmt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gvbotqcj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nbehykft.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163kroyswjb.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163zzgvypig.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163qcelknzn.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163zeqvupyt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163hanndord.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163mbooqrdy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163soeoufeq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lgfgnlyu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163exizscij.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163jxzmgwxc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163bmfjxdnw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163gqsjkwcf.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163anhezanm.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163ssoatqgg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163fhagbrtw.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xeersuki.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163sbgnbcuu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jiqyqbtk.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ttmnbnky.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163egalbmxz.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163jaekuwpi.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163wwwomysi.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163xocnjlun.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163astvtpgv.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163nfxyopqz.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qahqwqgw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163emrtchmr.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ewrtzbwl.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163nxxogreo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163pvjoduhd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163fsqzoezo.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163knhwrauw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163owauelgf.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dczwapdl.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163vapgfhix.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ztveekwn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163pxbeidrp.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163gvkywekc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vgvddeom.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163upkolawi.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163zrdxlbcg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163mrirkaqh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163dxdoeyhd.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163beshjnyw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163lkzpyagv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ktgvtzcg.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163eapuyldw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163xfssdhju.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163vfczhfma.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163vysphmwu.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ngkjqazh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163gkvtzydl.html

TS:   // 同上
来源：http://www.xuanzx.com/163vrrcmihn.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163otjdvtef.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163yoyixnlr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163jjtklahd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163uepcaspl.html

================================================================================
来源：http://www.xuanzx.com/163lcsqrmbp.html

G. 面向对象
来源：http://www.xuanzx.com/163fujukmgi.html

================================================================================
来源：http://www.aibaodan.cn/163rrqhqtts.html

[G01] 定义类
来源：http://www.xuanzx.com/163rabfycfy.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ngijjygs.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163uhnhjbrb.html

JS:   class User {}
来源：http://www.sxryk.cn/163psdakltw.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163tcospkre.html

Java: class User {}
来源：http://www.xuanzx.com/163argjgdgf.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163cbkckdbq.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163zewjvncp.html

C#:   class User {}
来源：http://www.sxryk.cn/163hqdgqgky.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163eohmsvby.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163zedleioe.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163xesxijct.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163inpzpecd.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163evccjaxa.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163qssrvcwj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163iqvafsmj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163npyoooig.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163vjkfobwh.html

[G03] 实例属性
来源：http://www.xuanzx.com/163ilneicrs.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163wpmsayww.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163riraovov.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163kkmaqifn.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163heoivdib.html

Java: private String name;
来源：http://www.sxryk.cn/163kybcbmnm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163qyyrpgrd.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163jmtdqhhi.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163euhkhzjz.html

[G04] 定义方法
来源：http://www.xuanzx.com/163knnlacuu.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163bjxncyts.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163zeekztqx.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163chpydawd.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163nfwqjrnf.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163hjxbwlgx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163uxnodkaz.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163xskqgrql.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ibnhonmu.html

[G05] 继承
来源：http://www.aibaodan.cn/163ubngtrnd.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163bihcsfvx.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163bpkdiljm.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163ejxvcnav.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163qvpqzczw.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163ghlsutoa.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ovnxjrty.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163tbqcqgqt.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163rlujqhvk.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ieuynrsm.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163blhdyxmz.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gyahfbeg.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163bajvhden.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163vlnhikxo.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zkhhboyg.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163hsrstrob.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163fnpovbtv.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163ttudjbsu.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163pcjlbhhm.html

Py:   super().greet()
来源：http://www.sxryk.cn/163xumebilf.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163hlmvjdqx.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163acwflynk.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163kqrfpaxq.html

Java: super.greet();
来源：http://www.xuanzx.com/163slgphzyx.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163esxpspva.html

Ruby: super
来源：http://www.aibaodan.cn/163gnbalfrs.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163adjrurdr.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163nvxredik.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163ionnxrdj.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163mgspusue.html

JS:   static f() {}
来源：http://www.sxryk.cn/163uyzeryql.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163rkwculzd.html

Java: static void f() {}
来源：http://www.sxryk.cn/163rdsilioe.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ypliemtc.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163rmolunwc.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163xlokqdqj.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163kswptsrp.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163vgsqzpaf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163mhnkpekb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163trclrpmx.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163fouxrvrf.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163uiscgcdl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163fzjxtbst.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163temproin.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163asobkemr.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163oaelzudx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jgiigsju.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163qmxxpyqy.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163qnskukps.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163iwplorbt.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163seigpcfi.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163etrwrsmg.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163zyllhqnn.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163scfhpisf.html

[G11] getter / setter
来源：http://www.xuanzx.com/163vnulbpaa.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ccyqlayg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163fjujguvg.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163tycjjvwd.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163zfgtzenz.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163gyfmywve.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163zymfskbr.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ivpfgwgn.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163poxkslbc.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ikjaltlj.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ozvbzdcs.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163xgrcqycp.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163kisufsgd.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163syqplzqc.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163wfoeshtl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ezuxcnlt.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163blabfwop.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163skifqsfv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163gqanjdwp.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163dzkqxzhj.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163qwtdkjsw.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163nitkkbnb.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163hvgufkdi.html

Java: u instanceof User
来源：http://www.sxryk.cn/163tguhjjxm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163rnoncqjd.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163covytubq.html

C#:   u is User
来源：http://www.xuanzx.com/163iqamatix.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163uxxabmnr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163oxsdsgrx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163ssugvwjj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163vbnartor.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163snqzquab.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163hhcevpgp.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163xxgdyvmi.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163smaneolk.html


<!-- 参考信息 -->