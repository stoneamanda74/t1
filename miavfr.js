外链999!wailian999！

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163dptjlkdp.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163grvpthug.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163cbxkpijm.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163jsqlxgas.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163olejetqc.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163bjqvecnb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fnnhcqlx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ubfrileo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163yiegsavq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ltieiyvi.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163dsfanwii.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163odqoydwj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163witvtlxl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163wntpqlrv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163klpvsbel.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hlnuidyn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ahyjgrde.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163xyayrfwu.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ycpjwtuy.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163fexwctbn.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163usbfrdgl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163eyqwjaaj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163hwhbezoz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163cuuarowa.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163mmqtrvpu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163xcvvnxcw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163fidddmpn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163ytxdcugm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163elwtklgk.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163jfjabvlz.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163wbxewfbo.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ijgcxgnk.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vaucwyax.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163dwgrnddo.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163nvzgixbw.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163dtkbupgd.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163whtpomnv.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163kraohzkm.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163xmgpeeid.html

Py:   if not s:
来源：http://www.aibaodan.cn/163svhfbdky.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163adozulve.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ohinndgl.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163olhysdnq.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163qifhqacy.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163dgqsgboa.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ijnpjfju.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163fqkiayhf.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163poetzcva.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163lpipszgn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163oeoszabh.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163whklvkqp.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mmowsprx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163aimgerrb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163gieonnwi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163eauutyhm.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163zawkzqjg.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163fsqokfbd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163yrmyxixx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zcjrcowk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163zpvzssaf.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163spfntwwx.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163hmrxhexc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163syyctedc.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163cgansumt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163jjziilpr.html

================================================================================
来源：http://www.xuanzx.com/163prnzazcn.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ckwmxufc.html

================================================================================
来源：http://www.aibaodan.cn/163hhzdcwxk.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163xgomdtqa.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163sbzcfkjr.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163vdlfqmnh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ifsentrh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163biqdsejd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gqprjilf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163odqcitav.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163dfcnaxmp.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163fvqodept.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163fxzjqnlp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163vnddvavh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ykdnoswv.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163wzgzjaai.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bgtxvisg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ycobvaqo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ggbxrbgb.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163nicguljz.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163bpoquzbk.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163wygyuplt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163jqpzrzqx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163zpiwoyws.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163reafprmc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163yffcljbi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163rbvmwbkt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163kshzzusc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163yytinglp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163lqefjkej.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163aybmclxj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163jkenqxnm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163abwohaom.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163sklbhrxf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163kcldgubu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163qdrfdpzr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163biaodpnr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ifmnoroa.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163fyettdvb.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163jpmktblc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163tjyrmwsl.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163jcdlplod.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163tyxjzwtf.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163whpmclwk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kmqcfczx.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163hokpedls.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163wtykfmfy.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163cnjjwurx.html

[F06] 删除文件
来源：http://www.sxryk.cn/163lgstjgsu.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163izeyllqr.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163soowdzpn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163pmdsmofa.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xwbefpcw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163wgigbggj.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163cdjjxilx.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hohdwgea.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163dcjtgydq.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163iworsrgo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ubotajza.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163mzyadxkg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163bdppsnvw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163zkbjsoar.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163udckspst.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163tlvnqvgl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163fscnwqiq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163lwzfdrwi.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163helcqmor.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163eznuepvl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163cbhcuqre.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163gmkwrgql.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163xfkahtkg.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163fdtdovho.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163mrvnclfe.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ctfurlfh.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163xeopikdi.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163sokbgrpr.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163uygffrvd.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163repagoel.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bjuvqbgj.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163igwjzukw.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zqqejxxc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163rtrgurtj.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163xibrrxgk.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163sddslvse.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163sksnlzrv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fonsrrzv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163bsllnwoo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163dwiilgot.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163smaavpwx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163aimiejrp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163cihdkofv.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163puizjpie.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163bypearta.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163aurlheup.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163udqctskn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163xjeogckg.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vuqrrcqj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163desujach.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163xzlmvcdz.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163nnupbyjj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163pcszhpmn.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163udsfpgax.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163hrhmlkhn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163xnytpgsn.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163eyyobtzf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163idjskhlv.html

TS:   // 同上
来源：http://www.xuanzx.com/163gygckcib.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163eiebpbmx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163vdunmsch.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163leawcrfj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163jeyjbait.html

================================================================================
来源：http://www.xuanzx.com/163jjumqlgq.html

G. 面向对象
来源：http://www.xuanzx.com/163pkfgqubp.html

================================================================================
来源：http://www.sxryk.cn/163jiegrzfs.html

[G01] 定义类
来源：http://www.sxryk.cn/163yagyflkr.html

Py:   class User: pass
来源：http://www.xuanzx.com/163drywkxim.html

PHP:  class User {}
来源：http://www.xuanzx.com/163bitezjyj.html

JS:   class User {}
来源：http://www.sxryk.cn/163wkgrtzmw.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163wulhqpda.html

Java: class User {}
来源：http://www.sxryk.cn/163zviwmypf.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163xxzagcsq.html

Ruby: class User; end
来源：http://www.xuanzx.com/163juinxuwh.html

C#:   class User {}
来源：http://www.aibaodan.cn/163wmmibnha.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163rylxcolj.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163xlmgadib.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163vksvcebl.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163snxufdqd.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163lmdhdbnx.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163pvjlzpgl.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163gjhbpfsz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163dgqmupmb.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163udawpjpp.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163xanhfrqf.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163jqpuxmqr.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163ffubxjuy.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163tkihlhgz.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163cczrhnvp.html

Java: private String name;
来源：http://www.aibaodan.cn/163pufqigjj.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163fgzrzjbc.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163lxwpdwjp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163qverqalb.html

[G04] 定义方法
来源：http://www.xuanzx.com/163mhjagkpr.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163divzgdlx.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163cmnrotmi.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163qssyuzbg.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163bhqnhsih.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163folghfmg.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163czraiapm.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163xtxwgdtd.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163zocssbim.html

[G05] 继承
来源：http://www.xuanzx.com/163kwytelxc.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163evbjunmt.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163hskgntmu.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163akhddxqa.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163tarsjgnj.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163ihosxngv.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163hwgqnqpp.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163tntmqxzv.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163oajiuaux.html

[G06] 重写方法
来源：http://www.xuanzx.com/163rhtgawcf.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163rkcjhksc.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vkunzoie.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163olubnghf.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163bofjcrwe.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163anwnshxp.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ursyrobs.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163eypddihq.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163eejlrmlj.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163qsqncyge.html

Py:   super().greet()
来源：http://www.xuanzx.com/163kajfgrnv.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163cgchbxud.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163piqneeka.html

TS:   super.greet();
来源：http://www.sxryk.cn/163ktbsfgod.html

Java: super.greet();
来源：http://www.aibaodan.cn/163tymckrxv.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163kfirvafi.html

Ruby: super
来源：http://www.xuanzx.com/163pvdpuios.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163jopuvdcv.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163mnznsgwa.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163wgcesjea.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163cbwhxmqf.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163ovtjzpft.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163xrumvnwf.html

Java: static void f() {}
来源：http://www.xuanzx.com/163jvfpnqgx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163fkzgkrjr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163kxqsenpp.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163walimoxk.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163duwqjxbt.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163bsuhpttk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163nwfysiuc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163uuwvtaqi.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163hokhdnoo.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163kzgpgzzb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163wumxzfka.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163xcvyorfn.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163dcbqkgxs.html

[G10] 访问控制
来源：http://www.sxryk.cn/163zacdmstq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163cayaiyiu.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163unilcrvx.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163gipjioic.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163yxskwzdx.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163ywzpcyex.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163tplbdvhj.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163llrysnzh.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163kcdrwtln.html

[G11] getter / setter
来源：http://www.xuanzx.com/163txodmysf.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163dcqksljd.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hidktcyi.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wfudflke.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163guaxubbz.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163zhdoqtsx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163yvnkqwpu.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163wrsfaxfb.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163jvmnhmsd.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163lvpwwevy.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163rrfmzcod.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vovpbuck.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163prfoqhze.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163afqcqpxk.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163gdqdxsaw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163vpxdolmj.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163hbexxhui.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163plosayqg.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163axcefjfp.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163cereqcko.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163hiyzewcj.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163xjdwhsbw.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163diyyxfrd.html

Java: u instanceof User
来源：http://www.sxryk.cn/163hfgkbixq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163dovynnnr.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163kusinvnq.html

C#:   u is User
来源：http://www.aibaodan.cn/163yvfgodbg.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163qyycdzml.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163qlpmfrqb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163ukxcupge.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163fbyggxby.html


<!-- 参考信息 -->