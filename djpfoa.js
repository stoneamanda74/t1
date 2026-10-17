外链999!wailian999！

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163mhvjygtj.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ormgnpsa.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163thcpussv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163equtbstu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163nfvghpvn.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ijiowbmh.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163aqaznfbh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163lteqclle.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163zdipgqjg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163taxyupps.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163zdxissmv.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163jmxenbuk.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163naesqvgf.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163tkledful.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xuhajnse.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163xtugardv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163kfzzbfad.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ligqmkcb.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163fvldwpaz.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163vfnvswti.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163nkaxcizm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163gsbtbmwf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163yakctwvz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163awycgpwa.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ceezsudx.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163mctfolld.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163vcrblztm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163mwlonkrx.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163oxmfhnbt.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163nlxmcnka.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163shqapfnu.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nfbexvoq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rwhfpwyl.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163csmcygiv.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163aaoujvha.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163nutwinna.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163nkvtfoxx.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163wkbpcyor.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163mzjihfkn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163wxoynkkj.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163enfqqkgo.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mtwrmawo.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163mviobzrr.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163xwnizrlu.html

Ruby: s.lines
来源：http://www.sxryk.cn/163slgndvqn.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163urromylw.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163lugwjgot.html

Py:   if not s:
来源：http://www.sxryk.cn/163vxtljrck.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163irdllhfz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163yvzrhtnd.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163abckwavq.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163harpowrm.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163lonagjmb.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163arfkloxl.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163rgyacfxx.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ouhfoksf.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163uichkfal.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163mvaxchip.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zyretnzy.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163rbtfcxmz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163yskgtaqs.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163amxiopay.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163wocwibul.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163mhjpckzx.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163womhklyv.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163nbmzpljf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163pfmkeodx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163dnyagxij.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163xrwixgxo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163nnoxncjx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163afiqlkcl.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163rndwmddj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163argwclzp.html

================================================================================
来源：http://www.xuanzx.com/163xeduibiv.html

F. 文件与目录
来源：http://www.xuanzx.com/163eunaulkz.html

================================================================================
来源：http://www.xuanzx.com/163fpodzkek.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163dqhtsjjq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163sffgryxh.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163vzvvwoar.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163andjekyi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163vspusnvh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vyfscbqq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163vayrddro.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163qlltoyih.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163jiieqxon.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163tugorslj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163xcmdkxqi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163qatcyjzo.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163bdafaplw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ttiiuoxq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163ipnbgovd.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163uyzwpkxq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163juuvtval.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163viyizuwo.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163vjzgtrug.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163bvtdbijc.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163qunepoeu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163kmrukylf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163srxvwiuc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163mqbgtmog.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163fcmtklhf.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163eikjelcg.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163uxkpcrxd.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163jpntvmqp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163qupzrmav.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163zpzhrahd.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163helwhnsp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mhlxfzoa.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163qykyqwxh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163gysgblpv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163cbeczhnp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163imxijmrf.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163hczhzqho.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163rcpznqjp.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163vtkcwisx.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163xtabyvwg.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rqmrhaev.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163chxhltxb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163uibtoxvu.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163qqwcdryb.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163fzhrjxru.html

[F06] 删除文件
来源：http://www.sxryk.cn/163upkebdlf.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163paessyhu.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163luozqnhh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pdilpzfa.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fethcolt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lkecaral.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163sxzkltmf.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163kuszthav.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163qdohqqqj.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163byldwqgg.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163vduzrcdf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163mkqotxdg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163nhkwrilf.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jvawlwkj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163rgimhrtv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163oujpwfon.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163qxmxxdlz.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163qvlmkpew.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163touinoto.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163gskrvoci.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163kyikgthj.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163snresaid.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163jqzsdusb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jusrhkgx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163xcwxbcvd.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163ocyodpoc.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163qfyxyvdv.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163sliqcryx.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163lcrhpgtl.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163rygwrqxd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163azyneyhh.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ywuyahsp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163idzolpwn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163vlmmpozv.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163zscbvead.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163krxltqvk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ppqkphej.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163naurwfxp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ihpkllnk.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lbetgqna.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163jyynghnj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163afeodobh.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163mpcwfxnf.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163yehoyhpe.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163jmytyelt.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163mstvmewz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163opwmpxsa.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163psikzmgs.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163uuztrxwf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163lhmlnrwv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163hkarwuek.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163dwdpkawm.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163djpnnwxw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163cmgcfusa.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163jirakmjv.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163bqmqxtdb.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163zdjlnpsl.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163pkhzcdff.html

TS:   // 同上
来源：http://www.sxryk.cn/163pfudalbe.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163ocflhxda.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163izfarskp.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163hsykrsra.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163owfnicie.html

================================================================================
来源：http://www.aibaodan.cn/163muttqjgb.html

G. 面向对象
来源：http://www.aibaodan.cn/163copquczx.html

================================================================================
来源：http://www.aibaodan.cn/163umccvnak.html

[G01] 定义类
来源：http://www.aibaodan.cn/163ajofpsik.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163uowefwrd.html

PHP:  class User {}
来源：http://www.sxryk.cn/163zaqzhavt.html

JS:   class User {}
来源：http://www.sxryk.cn/163kkzpicco.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163tyhdxhwu.html

Java: class User {}
来源：http://www.aibaodan.cn/163uiddobjg.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ywxzlauw.html

Ruby: class User; end
来源：http://www.xuanzx.com/163obespvhu.html

C#:   class User {}
来源：http://www.aibaodan.cn/163dclegque.html

[G02] 构造函数
来源：http://www.xuanzx.com/163vhcyletz.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163zczbwmkj.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163gkrxvyah.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ettjhnwl.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163aqvpdadn.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163rohyooun.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ysxlbmtv.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163jxvzrphl.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163rmjgtvem.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163mxebpzuw.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ttppeijf.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163iwieijys.html

JS:   this.name = "x";
来源：http://www.sxryk.cn/163wzzatgdg.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163nyvwkzvd.html

Java: private String name;
来源：http://www.aibaodan.cn/163hbmdving.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163sepdzvrb.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163ychgrmpp.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163uoizdyec.html

[G04] 定义方法
来源：http://www.sxryk.cn/163ihnfsoyc.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163nmwzuztz.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163kjmxbyio.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163uixmrucg.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163chzqxxga.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163jnviokig.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163lixupoff.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163llgkcyde.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163dzsquzqd.html

[G05] 继承
来源：http://www.xuanzx.com/163fsmruscz.html

Py:   class Admin(User): pass
来源：http://www.xuanzx.com/163phzldqgh.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163qjqyxbtk.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163rasunwwm.html

TS:   class Admin extends User {}
来源：http://www.sxryk.cn/163zmfopode.html

Java: class Admin extends User {}
来源：http://www.sxryk.cn/163xbpyirtc.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163tbrzivbg.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163hemovysl.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163nvkuxzjx.html

[G06] 重写方法
来源：http://www.xuanzx.com/163zmpbxkzv.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163lndrccay.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163cgyxtgjm.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163rflglyvh.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163gnecgpbg.html

Java: @Override String greet() { return "admin"; }
来源：http://www.aibaodan.cn/163rjtzgfam.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163ticnetkb.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163kdhlwosp.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163nkudciie.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163mpoxwrjt.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163fcftnakk.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163mvtpilmv.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163puxfepju.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163zvzugpuq.html

Java: super.greet();
来源：http://www.aibaodan.cn/163olskxkml.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163dgetwtod.html

Ruby: super
来源：http://www.xuanzx.com/163fyyuikfl.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163rcfjjhbm.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163gxmnzpbt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163nlxigoyq.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163cppryvit.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163kwvjcppo.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163cdtceagn.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163mszzkbpz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163wornyexu.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163zodtgajo.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163kckqwnlr.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163biwifbwm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163mmdgexzn.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163flrvyikb.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ytreflcn.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163umrxdxzr.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rxzlrftu.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163giqtldif.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163fprgumsn.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163jmaqjmqg.html

[G10] 访问控制
来源：http://www.sxryk.cn/163dgsudxdg.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163hbkqbkny.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163sfgzplcc.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163rmonbbjr.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163pskpsxuo.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163dpnlmimd.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163gubjtrrp.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163nbhnxqhb.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163olwdntur.html

[G11] getter / setter
来源：http://www.sxryk.cn/163ledkynqw.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163ehsxeayx.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163fcsujtzd.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163nwmqfzap.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ihvekmey.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163cthlxziy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163nouguxdz.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163adcjaxnr.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163yeqhrheq.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163dxprssdw.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163gygaxofs.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dekxkcyh.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163vmqgjbtu.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163pzomffvf.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163kmthgsgt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163jlnsneld.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163yvtjivsc.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163pkldgzbt.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163otkegkme.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163wcgdajxt.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163zylcvsdl.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163rjspemfr.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163kityocki.html


<!-- 参考信息 -->