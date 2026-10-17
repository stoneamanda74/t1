外链999!wailian999！

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163ufelltdu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163nluctvif.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163sllobvic.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163bsdecpkf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ugmmqebt.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163pjjbtqyv.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163sownhlgn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163vrycfboz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163hrmobrjc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163agglvzlp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163tsqbyvle.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163piyszuji.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163asniifez.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163nbexqdei.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163dvbsplts.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163khagnolv.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ckdvvklb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163rlhneuqr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163tzhtlewh.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163flzuvvrp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163iuecwgeg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163wuocvqpu.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163cthtjvbo.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163faxfolnj.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163gnjoprrj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ihaheqyz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ghbeidex.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163jpklqpoc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163wmpbtnza.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163qgvptayr.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163xvkcaqve.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163uaylfcuo.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163eppadfvd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163bkzzwzhb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163pebqlntw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163cfbunpwp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163iavabzbl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163krmuwfzd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163yedvvvyo.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163kqyyewdg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163gvcyjflt.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163aqnjgedf.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163uujxgqwi.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163lkqfjkmk.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wtlkeppy.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vsrfoihl.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163wpqcdcyk.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163akdtphmu.html

Ruby: s.lines
来源：http://www.xuanzx.com/163hrshsibh.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163wfjdrbbu.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163dpzcrpok.html

Py:   if not s:
来源：http://www.aibaodan.cn/163neyxwpeo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163paehcaso.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163czssvqfz.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163vblsrzkj.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163jbahymge.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163heiximhv.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163soqouanw.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163kiihmndv.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163wpoayifh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163uefsgpic.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163dktyaxwl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163iujjpxmh.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163yjipqsnm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bxxvoigi.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163cjsejcty.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163siktfwgn.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163hrgptkpn.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163mzkaoxfm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163vcqnpnko.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dlkfrqeu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vofpakyh.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rshaactp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163gztqzyxq.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xddbyoui.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163hpcefnat.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163cktlzqjw.html

================================================================================
来源：http://www.sxryk.cn/163hdqnifqp.html

F. 文件与目录
来源：http://www.aibaodan.cn/163pzeccibc.html

================================================================================
来源：http://www.aibaodan.cn/163wiiicwuj.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163xeacaqbe.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163jqanhugq.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163tbctzxgf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163woyqyrfx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ukqipxji.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163oaniyjfe.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163jbvvmmpr.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163fougtucc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163lxakeblo.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163ndacmuox.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163zdvuhwrq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163fkenbjwh.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xjghsjhl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ygffyeua.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163dlweoscy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163pdxkhdqa.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163afhvnrrp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163yfpliayd.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163qhoctjbf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163rektymsy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163qzaljoak.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163xwggeyqi.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zbbdntlx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163auyxxehg.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163mevbsuzs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163tqufvzpb.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163dsjwizjb.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163xehyzbig.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163dwgiclkt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163xyciqwyg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163loxjufpr.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ceqnettu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163iblcoyze.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163hntumsad.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163bxuuzzmq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163ggzlusii.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163vmtbadog.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163cymaqpka.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163mlmcvysl.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163oxgfukhx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ttqlxpqu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163qrotwsdo.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163slnddhya.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163legnadfo.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163wgnubitt.html

[F06] 删除文件
来源：http://www.xuanzx.com/163dksjuqdv.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163lwrjquyj.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163mozvvwxt.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wyzdfxox.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wzdwoxjj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163nuhgxuny.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163vomwrmxs.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163tuzzdzfq.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ycuhqfsk.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163zfsrvaxd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163uyjcrhqn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163xjamqoml.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163zddddykd.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lmepaocq.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163wwwienyw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163jjyobcmp.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163iwfcayhd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163yeidsqhb.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163dtnrjapa.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163rcfchxmc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163abhbxmrd.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163fbscsyhf.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163slugywig.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ophgjzyp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163mzdvgxrx.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163fzonebim.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163cbrtrjvy.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ynpukuyu.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163inlfbfqh.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163xbqsgaja.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kbzjunwc.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ggbwejcj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lndebnsn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163tfcozgmo.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163jxwlhjwx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163guutrgoy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163eqphruoy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163oujnkwhw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163xbdyawxq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163niszszvw.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163dekmquwp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163fehxxnys.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163kbswaxel.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lvqpbzza.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163yrpctrnl.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163fbxmfzzw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163samjaxir.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163mneiixdz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ilyxfvpc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bzieagyj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163bdqpyasy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ouywrzhr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nwtiqodq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163rfvjstfu.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163hxaudhsr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163xukfdeso.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163fbwhjcfy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163fsrkxszs.html

TS:   // 同上
来源：http://www.aibaodan.cn/163nyjbjrfk.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163dummwboq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163faewdzyr.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163jofapxru.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163agsjqsdw.html

================================================================================
来源：http://www.xuanzx.com/163cqhgvquh.html

G. 面向对象
来源：http://www.aibaodan.cn/163obcfnqrd.html

================================================================================
来源：http://www.aibaodan.cn/163bgzvcfip.html

[G01] 定义类
来源：http://www.xuanzx.com/163xrtfoble.html

Py:   class User: pass
来源：http://www.sxryk.cn/163elmwuupg.html

PHP:  class User {}
来源：http://www.sxryk.cn/163mletxqlg.html

JS:   class User {}
来源：http://www.sxryk.cn/163eeawnlqk.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163cnvnqavz.html

Java: class User {}
来源：http://www.aibaodan.cn/163swvmolnw.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163jtkjhlav.html

Ruby: class User; end
来源：http://www.sxryk.cn/163mszocpim.html

C#:   class User {}
来源：http://www.sxryk.cn/163enoxqlfz.html

[G02] 构造函数
来源：http://www.sxryk.cn/163ibtxsfvd.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163bsslibks.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163qfykebou.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163xahozqly.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163oeepmlib.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163orxyjdld.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163nbxartnm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163afxfklbv.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163bvazeqon.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163bbbtzouu.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163wcompkrs.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163qtqddvnb.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163wpvfzyaz.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163cvzmmqig.html

Java: private String name;
来源：http://www.aibaodan.cn/163jdwviyyu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163vedvvvfh.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163tcqlswyb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163cpjxqzxf.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163ldbjwivg.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163yncjjcxv.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163fyrkrleb.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163pkimyzpj.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163gfctjsjo.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163odcbwcxq.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163jsunfzol.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163apaperiz.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163wiyrscje.html

[G05] 继承
来源：http://www.aibaodan.cn/163bbfkajrd.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163krblcftb.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163nttifxci.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rwbjvlqi.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163cwzhelic.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163orxhkgdf.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ovgwomti.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163qnfwgnno.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163wvhfuqdf.html

[G06] 重写方法
来源：http://www.sxryk.cn/163ntswvuqm.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163dxjdmltj.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163bflomgmz.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163ljtqzkjr.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163oxkrxkdj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163avdtkbnf.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163pravzkqq.html

Ruby: def greet; "admin"; end
来源：http://www.xuanzx.com/163kaejeolv.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163rodeqnaw.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163njjswehw.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163wperquei.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163rzaxwykx.html

JS:   super.greet();
来源：http://www.sxryk.cn/163lllgtxwo.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163yuvdbiza.html

Java: super.greet();
来源：http://www.xuanzx.com/163kmtpdxrr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163uggdauyu.html

Ruby: super
来源：http://www.sxryk.cn/163hqyamqfu.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163pgeaasst.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163hhturovt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163jgknoeba.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163barcmlbd.html

JS:   static f() {}
来源：http://www.sxryk.cn/163aihqxoze.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163fdbhugem.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163hfweokdl.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163cbwywmhu.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163ihexkibx.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163evoculok.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163yzzrufff.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163eklwjkno.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163roqggyvt.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163kiicbgde.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ixprsyft.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163gulaghzo.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163vvoogevr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163cfseavgw.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163routrfaq.html

[G10] 访问控制
来源：http://www.xuanzx.com/163hwtundbt.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163niwgkxjj.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163hcaqdarl.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163frrnfwpr.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163dgqlbxpz.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163yxlegfxt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163egxgfacd.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163trnckvio.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163bzulgcwo.html

[G11] getter / setter
来源：http://www.sxryk.cn/163hhhoodkb.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163kkippfuf.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163eppknabt.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163pszgkglx.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163nlaxictz.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163uxocctvt.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163wexooknn.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163bgfufeqx.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163vluvnklz.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163mfwvllhd.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163pbhgjzra.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163zavwzgmc.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ufvhfacr.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163cuqzytmp.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163cxkpfpos.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163jhhnxlwo.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163vxvcrpdp.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163vxvyoocn.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163yusniimu.html


<!-- 参考信息 -->