外链999!wailian999！

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163oedjsctz.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163zjrjdjzo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163rdqmvmns.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163eapqyemd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163mvxrafdi.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163vznbstir.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163lcinervz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163nyyztuym.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163rqxgaivh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163spepcqcz.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163xxwczfsw.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ikgvwcoj.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163cfoxhwvb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ztixowjq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163mwqapudb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163nlvkcedp.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163sfqbfzzj.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163krsloopn.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163mluyzyrm.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163yzonunyb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163ivxzehjb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163hdblmxiy.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163frmfogrg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163umhxpbkm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163zekkgmnz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163lryypzue.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163hebzsklc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163qpntxfnv.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163gyfutlko.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163kxpzhmzp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163iqofwagq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hlovrmoa.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163gbtduudd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163rgtbjeln.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ncdfkudr.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163qvyqrnad.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163rsyscwwg.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ljszstox.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163gsjdavny.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163kuwiwtpd.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fnlkdrrp.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163yxflpwgm.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163wtylnpnt.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163pgzmzrju.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163oeohbzvc.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163miwwgluw.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163vtstdiwf.html

Py:   if not s:
来源：http://www.sxryk.cn/163dfuyvcce.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163seiuomgl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163zzflhhmm.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fwczemgj.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163oxkjhxyw.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163crceyuma.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163taapznwh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163vvgoaslo.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163jwrtqrfz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163fjvbqubp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163hvmwsicn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163abletnvn.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wagmesuo.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lyjtrkmk.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163gwrqobcr.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163dwfswlsy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163pmtdiwwx.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163gqjamxfr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163gcgkbkvq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163lacouuol.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163maelciih.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163upkyggqt.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163pxejktyn.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163gcomlqaa.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163ztlvolsa.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ympglqvl.html

================================================================================
来源：http://www.xuanzx.com/163wpebnsac.html

F. 文件与目录
来源：http://www.sxryk.cn/163zgvroked.html

================================================================================
来源：http://www.xuanzx.com/163nazbeish.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163lppvckcu.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163hanbybro.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163bysrnucy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163gknghxfh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163wqtplfsb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rvbqnaja.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163tkpmzhzu.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163uavkcdrq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163gqwclszw.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163kwpjswjl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163axivbbxp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163wdjpykud.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163apgqrqmb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rzcsfzad.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163czahuris.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163jtkjwash.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163eggdlvjh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163tzjpjuxg.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163jlveehcj.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163tnfrxmgq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163exyhazvx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ayblssxx.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163yirvoyur.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163xxkpnboz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163rzkohwzz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163tytujieh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163dybqjnim.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163pyzzjavq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ddegmtyj.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ildchfgi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163wdbywopf.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163gkbgdzpz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163unlobupz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ufebfduv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163bhscmfjy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ajwqulwg.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163zfjkoywx.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163skrngfvw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163nxflxkbg.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zjnuyjpj.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163zzzpwxty.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bbeqqzno.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163jpkkhtzx.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163qxalwubx.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163snsxczuk.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163qfhzynty.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163nktwgifp.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163ctaqvbur.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163amauqrwv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163xusasqjx.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163xycncfnj.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163idslkbtt.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163hcnetjay.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163txrourux.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163nrxandcv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163kilggjxq.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163idkcwrzj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163yjtokxap.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163bowerdew.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163pdnhqrgs.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163qpgshpqt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163upqnpidj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163nkrpqcea.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163jtqcwjod.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ckobquca.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ciefnevf.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163qujskunm.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163lswpdbrq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163bruvkrei.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163rlnhjxlz.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163dleodnxg.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163icbvvwjs.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163rtvevtpl.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163khbvxbpj.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163heypnflt.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163dmonvunk.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163kcnwqmhg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163srqogzda.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163fkvpzpuh.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163hsosrrhp.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163hybetmps.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163txpsaqmk.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hpryjfmd.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163hgwwdtql.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163kxinpnen.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163efxpzwtq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163nwbggioq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163bqcuxmca.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163pnqykeje.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163hkmaozlg.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163dqluedoa.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163pkgrexqt.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163nblpcgtv.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163yjnyjkdj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zgjkvglr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163rjckhrar.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163jccxbwuj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kueipfen.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163adlnshiy.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163cdjcgqpf.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qnnwbuyt.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163yyshxrmh.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163pxxvhpcy.html

TS:   // 同上
来源：http://www.sxryk.cn/163ahjnuues.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163oywxhcuo.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163ssgfvcqs.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ghuhbakf.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163pxuufayq.html

================================================================================
来源：http://www.aibaodan.cn/163gmjuxbas.html

G. 面向对象
来源：http://www.xuanzx.com/163jsdtbzqp.html

================================================================================
来源：http://www.aibaodan.cn/163rlnqhubm.html

[G01] 定义类
来源：http://www.sxryk.cn/163jshjdayl.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163knhhswew.html

PHP:  class User {}
来源：http://www.sxryk.cn/163jgruhajz.html

JS:   class User {}
来源：http://www.sxryk.cn/163clnurdao.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163xrssoryf.html

Java: class User {}
来源：http://www.sxryk.cn/163lkmkjpeg.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163oqcoybtv.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163apbcjcjm.html

C#:   class User {}
来源：http://www.sxryk.cn/163arczlbsi.html

[G02] 构造函数
来源：http://www.sxryk.cn/163qdivzgwp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163wzwhpxgb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163ptqkppit.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163cgarhlkg.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163iiqsyfim.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163fnknlqib.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163azirhaxp.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163yzcccktz.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163nppxmpyv.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163dqevhhdt.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163unpszrza.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163hmstuvtc.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163eoothbtd.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ufiugghy.html

Java: private String name;
来源：http://www.xuanzx.com/163upunzmqb.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163laydgynv.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163pylbjwkb.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163onjbufnf.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163drhnvwat.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163jtvyibbr.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163fgiouezo.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163bxnmeglc.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163byabaaos.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163ipzjesmi.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163eqsbpyre.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163lorylffn.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163cmfahotx.html

[G05] 继承
来源：http://www.sxryk.cn/163hidbygdf.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163rqekmwny.html

PHP:  class Admin extends User {}
来源：http://www.aibaodan.cn/163ltedfufx.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163qmnxsozx.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ymtgzkds.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163snnvfijx.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.sxryk.cn/163afvkegja.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163ytqqwlbo.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163hnlegdqn.html

[G06] 重写方法
来源：http://www.xuanzx.com/163riihhrvm.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163sambjuuv.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163wzfedlsy.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163shgzahxu.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163vwctcbvy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163whdigruh.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163sxjzcccx.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163baffcdgx.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163iczvggju.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163nwafctjs.html

Py:   super().greet()
来源：http://www.xuanzx.com/163beraxkgz.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163rogujolp.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163nfifglnx.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163revtwiuz.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ovlltwxh.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163tqlgccxa.html

Ruby: super
来源：http://www.sxryk.cn/163qyhnlnxf.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163iscitmsi.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163ocuvktbp.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163wevmyzrv.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163awbzqwqc.html

JS:   static f() {}
来源：http://www.xuanzx.com/163ngfacwwa.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ygfpbqsu.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163tqdimvkq.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163bicudzij.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163rgrlwgcm.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163mrzyjjgv.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163rkwyewsd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163kccuzkxw.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163owhiuxte.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163eknrsvuv.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163hylbayvb.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163jjjrzprm.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163uepolyts.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163hyaxztwx.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163enzochsg.html

[G10] 访问控制
来源：http://www.sxryk.cn/163hldggcjn.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163btdrpkpn.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163modtatyz.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163pqdryhqc.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163qdwzrpxw.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163zvqgvpyr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ydysdlyl.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163jihmysma.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163xbmdbilf.html

[G11] getter / setter
来源：http://www.sxryk.cn/163gpbytqfm.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ytruezyu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163gcwejmwu.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163kvfjqfgh.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163miztparf.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ouwdqeyo.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163fgsrdvsg.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163yjoewwin.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163lotpkedv.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163fpvfbakr.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ktfpuuiw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163qollcmtu.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163lussfkso.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163uatpntpf.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163ndpqxtwh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163mtafzmwd.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163epwihsrz.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163robmolnq.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163ounmxmxr.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163qwkiqxnz.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163sllovent.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163zyguhstd.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163pmxirqcf.html


<!-- 参考信息 -->