外链999!wailian999！

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163tnkuxqzc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163nhoqmkuk.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ptwzqmce.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163onjpffbq.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163caadjbok.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163snbpastn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163qdemplab.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163saohhzle.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ugthpoaj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163odnejbtv.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163nqmpjtzw.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163aqkzcwmv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163jmpguarq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163itopeycg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163roxlcsxs.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nzplhudl.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163wpkuefiw.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163whhyxzzf.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163arujctag.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163pulaswgp.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163cjjfzxul.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163drdtqcwm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163vubhesnw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163astokhdc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163lsijnfia.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163sgxvktkd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163fdqyjcms.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163hrvmvfla.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163sjqmmzag.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163hxvpbrhk.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163djtihbfe.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163vujikbtt.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ctxvbmcw.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zqvtvdid.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163jqeiffcf.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163xqgykpme.html

Ruby: s.lines
来源：http://www.sxryk.cn/163obnlqtcg.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163mdkkvhir.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163wrdefuda.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ltveohjz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163movzdyax.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163qouskpuj.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163qpqpzbjs.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163jgeazrxv.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163vtavycxh.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163relritfd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163hqfhlqni.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ikirvrdw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163eadvgwvd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163uxkshwob.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qzvuqrht.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ibblxrfs.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mgjitwcg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163rtjbgvav.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163lmgraeks.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163plxcwkqb.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163zhbbhdck.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163wyoqfvup.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163bntjnyks.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qgorgqpp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163txdhwlft.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163qflxmuty.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163bkquowpe.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163gdhgzxfb.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163nhsuhbuh.html

================================================================================
来源：http://www.sxryk.cn/163ywrfcytp.html

F. 文件与目录
来源：http://www.xuanzx.com/163vsuieudl.html

================================================================================
来源：http://www.xuanzx.com/163fegttlzv.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163zescuasc.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163nzfxmwui.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163fpabohfa.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163gztxwoia.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163hrcrmsof.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ftxupurn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163jqtkoths.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163wcpdgnks.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163buwyssic.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163cxcgyjlc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163lezhcgyz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163kzwuidan.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163xknirnis.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163hhadkase.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ubyfmixn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163knjszgkd.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163oeleksgg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163evnnkcpl.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163hfjaoitw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163anhrhysd.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163vxohputa.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kwpogaum.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163mxmnrffv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163krweypwk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163xarladji.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163xerhrbsw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163zzrhnoap.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163ymawkpdn.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ulqyivls.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163drwiqmbk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163skhwdlae.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163dgsrxdel.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163gkcdaajv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ytwrqzfi.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163uoaknffw.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163topaugat.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163pbgcpvis.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163bfgxgbkc.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163lzvjjmyd.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zlnjioey.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qpmtigtg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mrplwoqm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163vzrzxuad.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163uwkdhgsz.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163ygblclih.html

[F06] 删除文件
来源：http://www.xuanzx.com/163wrzrhkel.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ifoiofsn.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163dfongkkv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163zhzvzzrx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163iuvwybtq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jsdedvwb.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163vsoyvvkr.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163fquyzwmy.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163bozeqdwp.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163nlgbrhsx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163zevostfq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163jhygzunk.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pxixvblh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163synotzst.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163dgpajsdj.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163eavimnuu.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163mbzvldur.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163tzmtnwck.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163cxemghdp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163focvrdxp.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163aaoevcnr.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fyjrmejm.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163zjjwksau.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163rnytrhgh.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163kufuytlq.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163wwackxxb.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163hdefcyus.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163lofaquli.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163ygcolsii.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163fhqcjqve.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hezgvcsl.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163xwtlbbkb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163enrsvxos.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163edvtdrev.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163qesdlebq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ilikzzzd.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163lheoowky.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vekbnouk.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163mldnvhdy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163iozekpjm.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163mjzslvzc.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163fgvpdkft.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163icccnxnd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fghlwxwv.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163cczvqyff.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163cikchsmp.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163igptnbmf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163kdgkkkoi.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bwispnbc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nmtsnjwo.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ohrpxzmv.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163atyatgfr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zzsrasst.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163spfbwklr.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163sbvmsfwt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163ucboihkm.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163tpsnblix.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163nunfzoyr.html

TS:   // 同上
来源：http://www.xuanzx.com/163jgwosyxf.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163rkxjkdun.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163yagofioe.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163xbirzngj.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163nxiqpxcj.html

================================================================================
来源：http://www.aibaodan.cn/163mtldfnxb.html

G. 面向对象
来源：http://www.xuanzx.com/163kcapswys.html

================================================================================
来源：http://www.xuanzx.com/163hzwhefqm.html

[G01] 定义类
来源：http://www.aibaodan.cn/163fwhbpfhc.html

Py:   class User: pass
来源：http://www.sxryk.cn/163eccilwaq.html

PHP:  class User {}
来源：http://www.xuanzx.com/163jokmrsjs.html

JS:   class User {}
来源：http://www.xuanzx.com/163gnfdwost.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163bftvfwyi.html

Java: class User {}
来源：http://www.aibaodan.cn/163ojbqjbex.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163spubypgt.html

Ruby: class User; end
来源：http://www.xuanzx.com/163fqsygcye.html

C#:   class User {}
来源：http://www.xuanzx.com/163wfgupsna.html

[G02] 构造函数
来源：http://www.sxryk.cn/163soaznujv.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163qieipzkz.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163xnksanxp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163cfneqnmc.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163vnlarnvi.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163zucmjnwg.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163mpzktpdj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163rnedcthj.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163jtdpocvl.html

[G03] 实例属性
来源：http://www.sxryk.cn/163dghvcpuf.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163wznnnxyw.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163dexdexto.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163ylybimxk.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163lyoeqqhz.html

Java: private String name;
来源：http://www.xuanzx.com/163okqngfbk.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163lkxkbpkh.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163axitojhg.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163jfcgzuew.html

[G04] 定义方法
来源：http://www.sxryk.cn/163pktzvvks.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163lfupekqu.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163josqdzxg.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163chcibyxf.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163wvdqnqja.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163xzbwoigp.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163kjjgzpdq.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163wxnghnwb.html

C#:   public string Greet() => Name;
来源：http://www.sxryk.cn/163qhjbitea.html

[G05] 继承
来源：http://www.sxryk.cn/163ihdzefqp.html

Py:   class Admin(User): pass
来源：http://www.sxryk.cn/163ljmhutiq.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163jerduxzf.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163fpohqcpc.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163tuqxlaml.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163fksqztil.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163bxdapelf.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163nythpvzx.html

C#:   class Admin : User {}
来源：http://www.sxryk.cn/163ftaswuwb.html

[G06] 重写方法
来源：http://www.xuanzx.com/163cfqvsqyo.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163ecxltncv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163ygumqzqk.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163fwznmsfx.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163uwakovzj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163jqnidhrf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163uytxxtvi.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163lylezslp.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163tqfmrgwl.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163sldngbve.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163mqldxnbs.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163jmnshigg.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163wdenfkxn.html

TS:   super.greet();
来源：http://www.xuanzx.com/163zhphyjdn.html

Java: super.greet();
来源：http://www.aibaodan.cn/163gkwntfcw.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163hjqcmgxm.html

Ruby: super
来源：http://www.aibaodan.cn/163lxnutrvi.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163zznprjiw.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163tnubgxvv.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163eqohkrws.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163hmkbtifb.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163mfpxmbru.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163sovzjkee.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163tdbimbba.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163mqycqgax.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163kyaamcto.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163fhscfptu.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163bdndptbk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163txxdegik.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163kjcgdmum.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163bapgjzxs.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163npeytxvr.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163dgcfoevw.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163eiiceixj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163coanrsrn.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163vqhvtums.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163uhbrdnwo.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163lnnnhjrc.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163rnksyupf.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163grhsrtac.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163mujkntzm.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163vfpadcpr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163doacqmrq.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163iindkysv.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163wnifiurk.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163bnmywfan.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163lvgpzltn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163xzknmglp.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163kayypred.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163tjwsjbxg.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163nlwdbowb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ghbnwgvo.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163soakmcdt.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163oubwooym.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163qygcagsi.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163yvnprvxa.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163aaewzzqr.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163eivwpfuv.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163sjuhhjdu.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163exuaxmep.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163jjiernao.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163dpdwpxzi.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163jececwcn.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163htrfoahd.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163avtpnmhd.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163vtffzgvp.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163lilowvzo.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163wqewhncv.html

Java: u instanceof User
来源：http://www.sxryk.cn/163qfnhwvrn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163jjkpgljy.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163zijyeynw.html

C#:   u is User
来源：http://www.sxryk.cn/163guwflsiz.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163sstnzonr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163wgprpqkq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163tozxqure.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163jeropihs.html


<!-- 参考信息 -->