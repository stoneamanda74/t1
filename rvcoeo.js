外链999!wailian999！

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163fnkyqviw.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163lmpksykz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163daccknjv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163rktfacsq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163kqlhlfrx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163evlrtkax.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163dslnerii.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ezfulqxq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163lvowjhqq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163pjpefwyf.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ruwhrqev.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163rawhrgpl.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163edafxmgs.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163xxjrqroo.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xlrnnprj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163avubjjdy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163kxgyrznm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163dnnxazjp.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163zaeqnngh.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ghosanll.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163qsipjfbe.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163pcpcafvj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nzxrdkcd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163pmqchgjm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163psuriocl.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163fhklljzd.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163hevboham.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163aikexvot.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163fetezjry.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163pisiwzpv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163osthvunx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ffihqoln.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163fgwymans.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ilvohgzj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163pbqyxtrq.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163xxwygfzr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163scgllgfi.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ehmbcjhu.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163uehzxawu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163tsxqoocs.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jwjuumar.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163ehdeojcg.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163fuktilfp.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163pjlrkkqx.html

Ruby: s.lines
来源：http://www.sxryk.cn/163spuujzxx.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ogugibde.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163lcxfggbp.html

Py:   if not s:
来源：http://www.sxryk.cn/163vfstbubl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163wbevmepy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163stfqjpfo.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163nowqiclc.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163zgepoeco.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163devzjaqb.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163tablaqtw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163jhgnoglm.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163lydxnmkl.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163hamrhewi.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163urwctrxb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163utpalpgo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163kvyeweqt.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nrkxxhcn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163bqreocei.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163cqecxnxs.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163hcbxeptb.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163zqaolebj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163yetiqxhm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163isgjmgjs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gzxiwbrx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vjszmzui.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163osjdysqf.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163umxiehar.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163fcjqqxig.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163txnwqzvl.html

================================================================================
来源：http://www.aibaodan.cn/163pvbmjvcj.html

F. 文件与目录
来源：http://www.sxryk.cn/163opfipxco.html

================================================================================
来源：http://www.aibaodan.cn/163dgdrzqqq.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163ibrfdzon.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163eilocybv.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163fyiqtmuy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163xsmptfdm.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163prjjbjjr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kekanhru.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163sidglvua.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163eqeinlkh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163mobdqbcb.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163exdnambo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163xlstptiz.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163gjbgplqi.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xiedjoes.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lkxuzqem.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163unekfetg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163owkvrxqy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163vmpgypeh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163quuwxxdr.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163bhnbthix.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163ykxiyssp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163nvfvootz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163grwrmqej.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163bdmcnftu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163evnktggx.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163mgtuylwf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163abmluvzy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163iztgjtfm.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163rgnnsgzi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163dmowcpdz.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163qlcnjhsf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vjsndkeg.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zckfudtw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163oyovfaik.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163nkedjban.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163zfbhnjen.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163rmnptmdt.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163fckauhan.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163vxxxdhqj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163yphoylvf.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163fpehdlwb.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qpnpaeah.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ehjpjarh.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163tfhjckzb.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163dyucmnnl.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163iizuwmkz.html

[F06] 删除文件
来源：http://www.sxryk.cn/163hgbqfycu.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163tddzhuvb.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163pomuoerk.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163snmjeoah.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ozaelmxz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lsjubtlk.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163evlxmnwc.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163yuwmkuaj.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163oouqyows.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163iufyrfzc.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163cfeawxxq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163oelleuqg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163muwscjoo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rzqoyfii.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163rbjfqith.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163eexcpfky.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163hdgxvhde.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163rpaityfk.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163pcwmivgx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163enzibkel.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163bkwovslc.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ibltzjpl.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163bzufuinb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ilbrrwtw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163tdfqydru.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163kyilxofr.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163lcpjiffp.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163iewsweyt.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163ggqqwpfj.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163evujswbx.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ogyiueoo.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163vqnzqbqs.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rmokcamt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163emhopiou.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163kxiatije.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163ysjgqmrk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163uqfwlftp.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163hegvwmgt.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163bfmkxqul.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kkgpqgpy.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163aucvffox.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163lrjzxcps.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163muadypbm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163noqbphmm.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163qmdasatn.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163yzkhyzyr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ueqlmebo.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163vqpmrgmk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rpxoiyfs.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163fseekufd.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163chanirmi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163jximxphj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xbplvfbg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163tsxpgcau.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163mwebymvc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163rrqwpecv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163zauhqpht.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163luqhdiwj.html

TS:   // 同上
来源：http://www.aibaodan.cn/163cmmstxfx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163hbhthgep.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163sqzgbdql.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163mbjnmtmu.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163pfcdkzpx.html

================================================================================
来源：http://www.xuanzx.com/163ncigscbm.html

G. 面向对象
来源：http://www.xuanzx.com/163olffzkih.html

================================================================================
来源：http://www.sxryk.cn/163welfoyhd.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ihcpbzup.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163nksutndn.html

PHP:  class User {}
来源：http://www.sxryk.cn/163fmxwjxrd.html

JS:   class User {}
来源：http://www.aibaodan.cn/163bxkvdmhs.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ecalylsi.html

Java: class User {}
来源：http://www.xuanzx.com/163usvbtgbt.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163kykcwozj.html

Ruby: class User; end
来源：http://www.sxryk.cn/163tgirsuin.html

C#:   class User {}
来源：http://www.aibaodan.cn/163volvkjox.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163wckbemrh.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163fxgokcng.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163bifmhruv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163kqgucqhz.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163fkjnlwch.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163egxioozm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163rhnrttpx.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163wvnvupvw.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163detdfzko.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163htitwevv.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163txpkfnds.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163rhwopldu.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163iiycpgsg.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163zptectkq.html

Java: private String name;
来源：http://www.xuanzx.com/163eopuckem.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163arcodjgl.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163mdmllzcq.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163mpgdexhp.html

[G04] 定义方法
来源：http://www.xuanzx.com/163rxarzeer.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163iakmjqsj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163njkcazjs.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163quugtusj.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163symcohgh.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163yryxaohx.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163sysgbqmy.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163wljjaqdl.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163btoreoid.html

[G05] 继承
来源：http://www.aibaodan.cn/163hodgwhhy.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163bndoapqu.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163sqlhkykg.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163bvklpydr.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163uviwurzq.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163mpixroxd.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163tlplqzow.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163kmldined.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163epwgfqql.html

[G06] 重写方法
来源：http://www.xuanzx.com/163oswqmlex.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163sdsycnyk.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163rihgswts.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163zvsivorp.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163fuxydhzy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163pwzrdcoa.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163wifacdnt.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163eeoxllcg.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163xllymlhx.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163osqnfmmi.html

Py:   super().greet()
来源：http://www.xuanzx.com/163otzoppdl.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163nollhtur.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163trnimsjg.html

TS:   super.greet();
来源：http://www.xuanzx.com/163dqsmafnk.html

Java: super.greet();
来源：http://www.aibaodan.cn/163kwvzhaxr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163bupsbyvr.html

Ruby: super
来源：http://www.aibaodan.cn/163zosmcumf.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163bcqtvqlk.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163owvdkwnc.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163owsabvgs.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ehyfwbmx.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163cvsairfg.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163dhppbgnv.html

Java: static void f() {}
来源：http://www.xuanzx.com/163igpcqvrh.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ddzctdug.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163hdmhipro.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163onfhywgr.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163zidhwbyu.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163oddzeiuw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163mveeyhaq.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163tvepvpxu.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163lxzmbnld.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163tdayvzfa.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163qsdyqzoc.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163htepaood.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163nexxhjor.html

[G10] 访问控制
来源：http://www.sxryk.cn/163zvefmbzp.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163fdfmnwyv.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fxoxkcbw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163duwpdcmi.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163qkhawfyi.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163puofersl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163wrgiecfs.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163pwuysoky.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163fkfqhhdp.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163iidiqcck.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163npdizdmf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163mkvsgkep.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163pdbkwmcy.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163nihvjzxw.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163wbviblij.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163dluniaci.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163hquofusj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163wssizhpm.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163olpwkmbu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163jrznzhfv.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ffiuibfn.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163gxnqkesx.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163qoguvbtf.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163trkqajiu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ccfpxrjb.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163jomrsxdd.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163uimoemmv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163bkfidfsp.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163oacdmjkg.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jcujcxei.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163timwlkyz.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163wapwqciw.html


<!-- 参考信息 -->