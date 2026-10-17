外链999!wailian999！

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163hwwtsvze.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163fahmtkzz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163nmtxlgxq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163srcmnwvb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ysjpouxc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163vfbqcjtq.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163yhcsyuhm.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163qervkwvi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163bvhaexrn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163pubejlqw.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163knhcfcho.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163fntgmclt.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163gkjmqsva.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163cinwfrjf.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fifecsgz.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163sublllak.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163jeqgoqok.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163fclnlnnx.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163kprnpvzd.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163svsthdmc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163hfhyswzv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163eqfzdwxy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163pmkkhvyf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zhfthlvs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163eucyvezq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163fvlsalmv.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163wfikpyaw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163yjtqygly.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163bfttcniv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163rxyzybgy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163tjdbjozv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163yvqheqsw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hjxhyxvh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163brmkszwq.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163wrhzpejk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163iqeziddg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163dkkfnfki.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163nqraypsp.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163muxfwbow.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163seyqikuo.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163pmotglhj.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163zgosgtxh.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163jruvhpty.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163ifrvfqac.html

Ruby: s.lines
来源：http://www.sxryk.cn/163clnzqzfx.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163pqtwpfdc.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163vtibpakz.html

Py:   if not s:
来源：http://www.xuanzx.com/163jtfhbxbj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163buuohsez.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163rislrryp.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163yovseukc.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ytuaxtdi.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163hxptvfql.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163hkskcvsn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163rciezzse.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163fxayfxnb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ynzujpzu.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163jcvxlydg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163nwazwjwf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ljhoyums.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163yxvypfvp.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163vdqzluwc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163fnannhvv.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163bnkxhqie.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163iinwnljq.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163fzakqeod.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163eldnfujd.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ekxrjerd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vmeprtfd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163uggvapps.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xticwflu.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163sfhtzxlu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163gomcifmx.html

================================================================================
来源：http://www.xuanzx.com/163qfbtxdsk.html

F. 文件与目录
来源：http://www.sxryk.cn/163kqrwsfjx.html

================================================================================
来源：http://www.xuanzx.com/163zsjqdxak.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ruaafrfo.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163jcqtqrvp.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163udednjib.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163wmdemccr.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163wankidgw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jehxcbey.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163fkwrdmfz.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163djokfeiw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163yjblmtsp.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163jtkirdiw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163sqyvvnbw.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163wedsvoqm.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ogrcpznc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163sbutkssx.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163ltxiqgcl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163xojxctrs.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ctoxtijq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163edtsxxcw.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163hflnxvfy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163ewonaxxb.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163lbxihpbo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xvamvdns.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163nxfoolkw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163sykaqsys.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163gzwcjhim.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163tqtoylmx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163mgktkmmi.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163wfruqcoc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163xbpevvaa.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163mpizwiix.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163exiejofb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ztkcwsxw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163jfrpwcll.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163zzbaqfbx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163xewyvfon.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163prpafqvd.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163jezgnlcc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163feommerk.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163byykkhgh.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163thseervl.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163uyrjubku.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fcitjqsv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163rikeatrm.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163lruymukf.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163mzrmgitc.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163qfeyafbe.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163fteiwnon.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163wzthjopx.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163uezicsxt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163blphllzq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tbmidwil.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163nsataqkt.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163vmrqdjff.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163erhwddby.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163hhvhwauz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163szfnbnrc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163kpvxknjm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163plyenpzu.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nrbaflxf.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163qjvnguwa.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163jxxxwkdj.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163taimuzlb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ktxdxdde.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163giymolsj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163kkkoyfvo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163kqwabfle.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ngszdjjt.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163oubrsyok.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163hshldjhs.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163cnwhzuld.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163manmxape.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163gbgiozjg.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163unbjpict.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163iopdgtqm.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163ymtqeypi.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163culvsbaa.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163hzdllsoq.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kblsuexn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163kzwvlotv.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ukynccfu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163hkvbnjen.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163shngzpwy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163repdfcat.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ilylgtru.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163dizxecbx.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163gqwrgjrq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163bedkrilw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rfkcjrfd.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ywaaomad.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163kctawblu.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163bovzswat.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kuhrchss.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163wicaftlt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163jdmywbqv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163chyagpya.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163pbepbiwl.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163abhfudzu.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kamlpwuv.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163mnzabwuh.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163afgfuxwc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163mckeshay.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ehaunyar.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163eyzolpdv.html

TS:   // 同上
来源：http://www.sxryk.cn/163rlkxuiyx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163mfhvlfgq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163htvrlurl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163cfnpdivl.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163fcevovqj.html

================================================================================
来源：http://www.aibaodan.cn/163wbcnvjzm.html

G. 面向对象
来源：http://www.aibaodan.cn/163jvbkjnqc.html

================================================================================
来源：http://www.sxryk.cn/163cferisyw.html

[G01] 定义类
来源：http://www.sxryk.cn/163valnclui.html

Py:   class User: pass
来源：http://www.sxryk.cn/163cmrwueid.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163qqpcbvjz.html

JS:   class User {}
来源：http://www.sxryk.cn/163odjflrnu.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163hjqdvpsj.html

Java: class User {}
来源：http://www.xuanzx.com/163pklzfehr.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163lxwrpeer.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163nedawawg.html

C#:   class User {}
来源：http://www.aibaodan.cn/163krvduhit.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163gewpeokf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163tmgzkcva.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163xdeonkdr.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163ucjtnmgc.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163oyolchhz.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163dgusbmot.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163xkvndekw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163aoeksuka.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163xwwsbapb.html

[G03] 实例属性
来源：http://www.xuanzx.com/163azxmwgqj.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163fwvtkzoe.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ypvuxbor.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163krgsccmp.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163fhtceuba.html

Java: private String name;
来源：http://www.aibaodan.cn/163zefbczip.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ehzlpjrz.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163bcgtdwcy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163degjbsvm.html

[G04] 定义方法
来源：http://www.sxryk.cn/163nenpnheb.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163trsvnfia.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163pudgqute.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163vzldbbiq.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163jrsidekc.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163usvkadkz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163yozwxhpr.html

Ruby: def greet; @name; end
来源：http://www.aibaodan.cn/163lecoijyr.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163ddojdwgi.html

[G05] 继承
来源：http://www.aibaodan.cn/163ecytuhjz.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163psvexktp.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163hcbkiuxz.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163awekbbgh.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163xartzofs.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163hycerdwe.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163hiycrkzg.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163mxlnesns.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163lccdqorq.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163tyvqhrzf.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163uhmfgxdi.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163vhfabvkn.html

JS:   greet() { return "admin"; }
来源：http://www.aibaodan.cn/163ievvrdku.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163cupifuoi.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163edxchrxm.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163smbldymj.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163wvvdsrzd.html

C#:   public override string Greet() => "admin";
来源：http://www.sxryk.cn/163tejqcwkd.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163nvdqvaru.html

Py:   super().greet()
来源：http://www.xuanzx.com/163apkaxthc.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163lftbihoc.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163antwjuwu.html

TS:   super.greet();
来源：http://www.xuanzx.com/163zkhksgty.html

Java: super.greet();
来源：http://www.sxryk.cn/163mwaoelox.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163vxpyygqs.html

Ruby: super
来源：http://www.xuanzx.com/163lfjhpljr.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163gpeudlzr.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163zsjcqhdj.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163fsobtktu.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163dfopuyat.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163uocgixkr.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163tkdkpevy.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163fvpxofvm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163aauyylrd.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163dlhyqjqv.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163qsbqgrvo.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163wkyhssvh.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163btgyrfcn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163dmwgzuen.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163fdosalmk.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163mlgmvmdk.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163nqbxnetk.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163rcqsajzh.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163xcuwhgnz.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163wjooroix.html

[G10] 访问控制
来源：http://www.sxryk.cn/163xbutidam.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163jzbzmpgq.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163csrakycw.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163eqmqsppf.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163sjxipwun.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163lotetlyj.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163gsxldgyk.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163tyeohlpz.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163bgawkllq.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163etykkqfi.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163utawkddb.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163aomfuwho.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163ymhoaugs.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163whegryaj.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163mlwbqkrd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163hnonpfki.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163qihmujny.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163fxaulrfq.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ghjbmrnl.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163mbucgxrm.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163apeyrkhs.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163vcxyzwfe.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ugupparz.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163qqqojbny.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163fxsbqwuc.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ewiaxaun.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163sodlpmlv.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163zanhleoh.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163zlrxprsk.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163vjgizqaq.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163mlbdirtc.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163hlhixcxe.html


<!-- 参考信息 -->