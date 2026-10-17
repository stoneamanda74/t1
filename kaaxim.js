外链999!wailian999！

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163avwygwoy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163pzonbequ.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163mexmmvny.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ytntmazg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163cfnfbdmx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xwjryiii.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163rjqfeczg.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163upwwswgd.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163mnacwxvw.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163pwlufyyq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163okrnlooa.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163azwdbzgl.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163ekemajwf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ixvqeaqg.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163jakelpvn.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163nlxeywpb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ibfkmzyq.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163lzcgfjhu.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nohzkjqm.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lkpoaofj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163frypcebs.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163anuvkuin.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163cmgwbbor.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163pclvvjup.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163wvauvbhc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163bsleqopo.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163xqbfyjot.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vyunmlym.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rfvzofyk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163pvvwrxae.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163jbegrsgs.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163cdhmxlaq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163nmcwsvtx.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163sjwfurxf.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163xfpzgoqd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163pdzkalyw.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163impdbyms.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163pkzofxep.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163zxjrmjmz.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163etpscqtt.html

Ruby: s.lines
来源：http://www.xuanzx.com/163uwliqulf.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163foxubxde.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163excttzfh.html

Py:   if not s:
来源：http://www.sxryk.cn/163mlftuhlx.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163lmieyzbe.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163nerrtwhz.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163mnedjrch.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163mrfbzfzq.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163nzeimsig.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163uphbnnob.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ahlesmcr.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163lhoxndgz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163wgddyqwr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163usonqopp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pafvbmgl.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163qoxxhcld.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qavurbrd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ifhwzlnx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163ycvcigkh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163xeoostqs.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163ykejkezm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ynmizuje.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163udehsevc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163geablmew.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wozlmecz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ciqfxakb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163fhuphzmg.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163szhinvdw.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163gwijsotp.html

================================================================================
来源：http://www.xuanzx.com/163xtizncii.html

F. 文件与目录
来源：http://www.sxryk.cn/163awmbmhuy.html

================================================================================
来源：http://www.xuanzx.com/163psuespbx.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163osffnodo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163sbixtzzm.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163bnnbezic.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163mdirwoxu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163bpvtwnse.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ditspyvl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163jhijvetj.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163dwfettrw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163kqezvkfz.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163jrgvgotn.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163rlcygsrd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163nftmvwtd.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163vpnibipw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163yahittcu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163nnwmspmw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163mcloazze.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163rlbfzmow.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163liyieidp.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163bhhagmyh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163shfkokmb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163digqnwob.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hrnjexhc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163bxpemlnz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163rucsqmrk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163nqbquiyx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163btvjbiqh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163nkptrfkt.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163lvclnecz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163qwgwubrk.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163isrzkvia.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163cxkammxd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pidctkyl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163ymtvypjm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163svkyipxa.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163zbvwkwgf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ybuhgssi.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163tyxxscdu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ytxyergr.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163wydoaovy.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ogdawksj.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163rmscrznk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ouauusol.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163tqfiwvuj.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163unkccigi.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163kshvwtia.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163giexxtml.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163aacbzmgs.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163btkrtmil.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zpwmzmgz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zzgxoxfn.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jgedfopp.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163oeneslko.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163tshljjck.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163xzwptxzh.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163vgrmsbnq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163bfebyzsc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163zdcirjov.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163nudqxizg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163eqdhnazm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163wwbpovtr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ynbcdlty.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163lklouyvi.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163bvgicapv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163srvbfibq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163fbnlmchw.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163jaajnivv.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ickfzidk.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163lhjfcgdh.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163cuxdpvmj.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163kukhkkwd.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163yskiiyem.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163huxoibwa.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ibdoysmb.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163skhnnejd.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163zionjouj.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163lnxcxpfo.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163sbgiztzz.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163cyibrivj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163jsmquqpc.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163vgdvblcb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163prhijmsp.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163wwhozczn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163chknlstm.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163zjyxhcdl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163upvmrwcm.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163zwopiaxv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163qzabfubo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163fnzjhvqi.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xbnoyxsd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ehzcbkhq.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163qwfgqgki.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163umbmhttk.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163tfijtzoq.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163riynltzh.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qyiwnjlp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163tljjtkoo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163kkopcedx.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163swregpfb.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163btojqlxm.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163syyjyocb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163zyhnzdex.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163mwxuozai.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163jxutnxxk.html

TS:   // 同上
来源：http://www.aibaodan.cn/163lfvrtfxr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163qqwrtlcn.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163mnwyzxiq.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163llmulrkw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163fuqjfrhe.html

================================================================================
来源：http://www.sxryk.cn/163xecgbiyh.html

G. 面向对象
来源：http://www.aibaodan.cn/163alzobzad.html

================================================================================
来源：http://www.xuanzx.com/163dgzcsllp.html

[G01] 定义类
来源：http://www.aibaodan.cn/163haiuciwj.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163gojidqgx.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163hsqkdjzq.html

JS:   class User {}
来源：http://www.xuanzx.com/163ngkgpyjx.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163pirjsgnt.html

Java: class User {}
来源：http://www.xuanzx.com/163gdriavkj.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163smjafjys.html

Ruby: class User; end
来源：http://www.xuanzx.com/163xfrgmlrh.html

C#:   class User {}
来源：http://www.xuanzx.com/163wxbmarcb.html

[G02] 构造函数
来源：http://www.xuanzx.com/163avxtfuxz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163sppyuqgq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163zembdmef.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163hanaosgz.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163pketswfb.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163ovhywdrk.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163axnbylsh.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163eikvlevr.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163chifnjrd.html

[G03] 实例属性
来源：http://www.xuanzx.com/163mgyobjiy.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163yspdgryg.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163trwnickv.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163wyonuvov.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163elxmyube.html

Java: private String name;
来源：http://www.aibaodan.cn/163dltwzfkb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163pwtswuue.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163chsdsjdc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163xdkixgbv.html

[G04] 定义方法
来源：http://www.xuanzx.com/163aqekacqq.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163debltbzc.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163ajceapvs.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163pkvrhzyk.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163cseeixqv.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163sxnaspfi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163lhoiscep.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163glmgmoeq.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163cufplurr.html

[G05] 继承
来源：http://www.aibaodan.cn/163leuvfocg.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163lpqgkkgm.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163socwbhst.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163wkeoflys.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163qrcvuqjc.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163cjzqzyeg.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163vuopiyno.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163evfzpmqw.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163yniznrxt.html

[G06] 重写方法
来源：http://www.xuanzx.com/163yuzijczx.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163eqkcqtjp.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163wqymhjzr.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163zesimdom.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163qylimvuw.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163pdsgedrt.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163amaarqub.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163rekjihqd.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163qmxegwxw.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163fdepzzdx.html

Py:   super().greet()
来源：http://www.sxryk.cn/163jyjvbdgu.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163eddlmoqt.html

JS:   super.greet();
来源：http://www.sxryk.cn/163lgnecjck.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163racmifuj.html

Java: super.greet();
来源：http://www.xuanzx.com/163rqrmnxls.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163oixtfxfe.html

Ruby: super
来源：http://www.aibaodan.cn/163zbddkdxh.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163gjjjatrd.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163kyuketrc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163dqicgsqy.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163udwfzkeb.html

JS:   static f() {}
来源：http://www.sxryk.cn/163fdtysmnt.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163nzemfgzd.html

Java: static void f() {}
来源：http://www.sxryk.cn/163xfutisop.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163vvpjjpev.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163zatqojiy.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163kptzugeb.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163anhvhxjw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163lnimghlk.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163yaqebfiu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163erpkurtw.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163emwpszff.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163oljwgurl.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163lenkagdg.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163gwlqokvu.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163slnwivlb.html

[G10] 访问控制
来源：http://www.xuanzx.com/163zgskfgaw.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163gjlajoye.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163pgzixajw.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163pavtdrib.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163xlswbdol.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163fjcfdiol.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163rjdxjazj.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jqwlzsfj.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163effljdki.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ykylxpwg.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163qtuzzofc.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163cpygejej.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163cfrojovn.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163rtvmezxx.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163xfhhkaxp.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163nfgnkgpp.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163mdcxxdqk.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163sgrnntyk.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163hufskjmu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163yrldkkwe.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163faxidrtx.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ybsscvxf.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163mytpvnhq.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ipurhxko.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163hcvmtxxq.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ybgbgqku.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163dcxufopt.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163rwkfydvl.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163aflkxjqy.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163bktmekae.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163nmrprtuh.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163eryjliys.html

Java: u instanceof User
来源：http://www.xuanzx.com/163atvmdixh.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ppclsjpr.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163mkrboyik.html

C#:   u is User
来源：http://www.sxryk.cn/163grpjwtey.html


<!-- 参考信息 -->