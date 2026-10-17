外链999!wailian999！

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163honryknn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163expudpgy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163fdowzghf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163pndbdbbo.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163rfjihjpr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163ymqiqwka.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ttksjdqi.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163bpsilfvx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163eszdnwoa.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163deorefvk.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163drtqyxjh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163eoeeoddg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163atevecun.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163hyaeaywo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163cbuxsqnb.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163znljvxuj.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163cqlksxqp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163meypmyaw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163nwenupbo.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163xtzvnzqg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163hsigwbhq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163wqqlbudl.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163xnlyyxxr.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163wvpudwsg.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163cmrtliya.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163bfesydfa.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163lupqvsea.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163ffqkqtks.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163yawarhxm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163mmxwxbay.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ifplejri.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163ehyzzxva.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163rgyzpylz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163jcskmpqb.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163mkfjejbo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163tzbprpwa.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163zzbdxdpb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163jlbccojo.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163wjjrtfag.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163tbeousgp.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163wlrexavq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ikltplpi.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163kscdgcpb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ayhvzpty.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zayhhqtb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163mrpwsfjh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ojumkode.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163afqxpdfq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163jitsxozi.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163nzyjghqi.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163krctkplc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163iknvuyaq.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wiixfgiv.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163llkatdwk.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163rzyvjgzc.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163ybcdcupx.html

Ruby: s.lines
来源：http://www.sxryk.cn/163xfidtnar.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163bjkicdwy.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163dyhopgvu.html

Py:   if not s:
来源：http://www.sxryk.cn/163rhhvaxsc.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163snybmbnv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163vzofikku.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163pmgtimex.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163tzqaenjx.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163kunhbger.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163dxabyvhz.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163tpmiqyxd.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163bwyhskty.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163fhvddbrj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163qfgdrxyk.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163egafhzct.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163oaoptovc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vdghztix.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163xtyxyrzx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163tdakgfdq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163uozbpiun.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163brmnpjyl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163uunbncel.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xfrwzowc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163tkxndfzd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dqeplxjy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163hfddnddo.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163roovyzmk.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ucxzkavo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163wbkvedqr.html

================================================================================
来源：http://www.sxryk.cn/163epkcrboh.html

F. 文件与目录
来源：http://www.xuanzx.com/163swgnytnn.html

================================================================================
来源：http://www.xuanzx.com/163nifqhwyl.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163nniebdjw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163yrrbpzag.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163avepmekf.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163wrgrwyat.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163rwzfrzex.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163fqgcsoqa.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163xdpiikgt.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ctjuscyt.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163hcktcmdm.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163qmlgcvtc.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163tmbmmqcx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163sekcerpw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ntvjeqhl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qidserav.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163yqqgilmn.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163zsoeftwz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163tfumytys.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163piutzoad.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163ogwjydeu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163mjkaghei.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163mwumhwnl.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163cwnncsux.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163xbjuiook.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163sswmizqi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163ebhqhwfx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163uvwizdvm.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163qbvbfunb.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163uegrchkb.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163qopqcsuv.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163veozkdyv.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163baswveem.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163dghlpxrl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163nyrquare.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163eagexfid.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163fdmywwfi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163qkizyiev.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163cokfanyl.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163djazeodo.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163dvtgcyln.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163blptnstm.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ywlzlhny.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163marowpym.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163efrotxna.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163hzdhgfzn.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163lwedsrvq.html

[F06] 删除文件
来源：http://www.sxryk.cn/163hrebmvjp.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163hkbhniub.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163xgymfyfv.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163aiyhlacx.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163lidceeoq.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163oiuhauto.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163zjqrkzyx.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ztbjhftd.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163lyltycfk.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163tfnixtpv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163nznvzswj.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163pekshctg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163pnvxicqo.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lswhnvdv.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163cypibcrq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163vivgtysm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163httmynuf.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163torscbiz.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163hrpckviy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vrgcxtle.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163rmaynubq.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xmgjrwtr.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163rhonlpzb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163yobxnrlx.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163uynwnmvu.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163snmnqnlp.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163pwpcjfkn.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163awokeivu.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163btuhcnrf.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163deqtovrx.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163bgzassiq.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ktncmmkg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163dlinvvdc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163juphfkus.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163sxpdxhch.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163kjdaktjt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163kqqkepcs.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163eihcdjnf.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163gqtoznds.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zapxvywn.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163dtsshpmr.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163rkprkjwq.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163ptqppqvy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ycohixyd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163bejhtuag.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163jquojxwh.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zdetugkh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163amiydpbh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ytmpbprg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163clgldmyw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163vauiztli.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163rphdpshv.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163sydjdwls.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163gjznxqhf.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163nrqayqbr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163stnvdizs.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163gzfsgmwk.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163bhiiukao.html

TS:   // 同上
来源：http://www.xuanzx.com/163qskesnyg.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163efkduelg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163rpiioumn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163woubrprw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163kmwfxwuj.html

================================================================================
来源：http://www.aibaodan.cn/163cowoxkug.html

G. 面向对象
来源：http://www.xuanzx.com/163seadbvek.html

================================================================================
来源：http://www.xuanzx.com/163wufgcpcx.html

[G01] 定义类
来源：http://www.sxryk.cn/163cshcvqzs.html

Py:   class User: pass
来源：http://www.xuanzx.com/163wuoaqgty.html

PHP:  class User {}
来源：http://www.xuanzx.com/163ozplylet.html

JS:   class User {}
来源：http://www.aibaodan.cn/163sdblcgou.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rkibpyqj.html

Java: class User {}
来源：http://www.xuanzx.com/163wtxchtgh.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ivaeqgxw.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163opjzxcpg.html

C#:   class User {}
来源：http://www.sxryk.cn/163gvopjkhq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163flifnfsn.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163topvrpie.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163uszcqmln.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163zdoaiyny.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163tytficwy.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163qmfmustd.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163mdhxngrm.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163texxgtba.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163zzfjblmw.html

[G03] 实例属性
来源：http://www.xuanzx.com/163pywxanah.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163dqyztihe.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163uutzdruv.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163kbloncrr.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163ehhpegtx.html

Java: private String name;
来源：http://www.xuanzx.com/163ptyixkjy.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163vxvcxdtj.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163yxrkiegc.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163tikiuilq.html

[G04] 定义方法
来源：http://www.xuanzx.com/163xghkutme.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ltakvcvj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hgapjsyh.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163lqnjqqwb.html

TS:   greet(): string { return this.name; }
来源：http://www.xuanzx.com/163hdtyvbzn.html

Java: String greet() { return name; }
来源：http://www.aibaodan.cn/163zgcexcec.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.xuanzx.com/163qwxwlked.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163lzvynpmv.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163xwmmlfgz.html

[G05] 继承
来源：http://www.aibaodan.cn/163uqbddkne.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163dbrwdmje.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163nsmppxxe.html

JS:   class Admin extends User {}
来源：http://www.sxryk.cn/163jhkxsttd.html

TS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163sjwsbgsr.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163dizhswuz.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.xuanzx.com/163ugxcjsfa.html

Ruby: class Admin < User; end
来源：http://www.aibaodan.cn/163xpmvyjtk.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163cahqdezk.html

[G06] 重写方法
来源：http://www.xuanzx.com/163dfgmbkxa.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163gymmtmum.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163dmzzcucz.html

JS:   greet() { return "admin"; }
来源：http://www.sxryk.cn/163fnscneet.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163obfcjppj.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163xxozvkmx.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.aibaodan.cn/163ukuyefon.html

Ruby: def greet; "admin"; end
来源：http://www.sxryk.cn/163jkqtmsng.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163crwummls.html

[G07] 调用父类方法
来源：http://www.aibaodan.cn/163fvzuvkdx.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163jieohlbd.html

PHP:  parent::greet();
来源：http://www.aibaodan.cn/163acrflhuq.html

JS:   super.greet();
来源：http://www.xuanzx.com/163cxnoajqg.html

TS:   super.greet();
来源：http://www.aibaodan.cn/163muzvrnhy.html

Java: super.greet();
来源：http://www.sxryk.cn/163abofubtn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163zkhjkjmn.html

Ruby: super
来源：http://www.xuanzx.com/163xniwsulr.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163hwlkoyka.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163lvnegztn.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163kaytsnre.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163gflftehe.html

JS:   static f() {}
来源：http://www.sxryk.cn/163phkpcfrv.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163zdralycv.html

Java: static void f() {}
来源：http://www.sxryk.cn/163sapxexxz.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163slztoriq.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163pjasyrcg.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163ltdsupva.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163gomgsurz.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163mkkivoxa.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163gonwjrcj.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163ozfrwngo.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163wjrriziy.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163jozncpwv.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163dmsrmxxd.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163yqrzdtfd.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ctpvuuhp.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163kkyjwhlx.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163pxqyygfn.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163rwqrbcpd.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163xcxorvro.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ixclxhxx.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163vxnpempo.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ndgsxicz.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163kxatewmb.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163njhuvypj.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163qxiymkin.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163yjwmhxmm.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163yfmzmwuc.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163bloslidl.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163jmmfrzhd.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163vittyrqf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163bootjxrq.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163bkcajkym.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163sqjyiyoi.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163kgewumqh.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163ipcbwsqe.html


<!-- 参考信息 -->