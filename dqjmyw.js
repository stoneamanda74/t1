外链999!wailian999！

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ygdgzdjb.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163iypiivic.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fhnrfijh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163nuuoexiu.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163suqvwzsu.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163gmwygoek.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163qmgguvub.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163uuwyqbud.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163xhvrzhqd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163edqhpmuj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163hbqactoi.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ljjitony.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163tzppkdnw.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163rdrsbunr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163zheoevbz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163svvffsfa.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163dyfcqiyo.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163nyjzvifn.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163lbemtydm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163bwhmlrmp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163xqzygvkf.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163mfkxpkfm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163hfuiowxu.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163xrmkehil.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163vlxrvdkh.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163xwokhahe.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163keamtqju.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163axwalnfu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163csoonfbc.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163wxzapujx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163zlvvknvy.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163lmetqkus.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163vcmgxeke.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163fcgreoqp.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163pbzeulsc.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163fxsvmcut.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163rfmxosek.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ochlknva.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163sftvldwi.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163jkfjpvro.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163qzwcevwb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163rzokjuwq.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163zxbkufmt.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ydueoubw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163vgkbicid.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163lwiqsjyt.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mmrcngxo.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fzlfwnpm.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ffhypmym.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163rebcakql.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163wrkixkek.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163jcyyobbc.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163xurbjjik.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163wxomtfsr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163wouhsemx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ddzvmsbj.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163idhllesg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163jbpnujji.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163plvrnwbm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163odigybnl.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163uahigkmg.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163fwsppdsd.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163jnqiozxy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163yodzpflq.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gmhwttvg.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ptgmdvhn.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163fkcchajr.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163fwbwknne.html

Ruby: s.lines
来源：http://www.xuanzx.com/163yjtrhaqg.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163wjhyvnau.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163cyomxscx.html

Py:   if not s:
来源：http://www.xuanzx.com/163tkdcigjn.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163txlkgkzy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163pcyjnsss.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163dsanohwh.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163coonqkpm.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163rrhtvpbt.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163twzduaou.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163nkwpvqct.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163wmaexvoh.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163yujjsfrl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163bwuqscnx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163tmoduxln.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nrdsgyjg.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163bbllbvpw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163tvgjpgyk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163chujikhe.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163vvbjztmz.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163izamdxvg.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163fgohxckx.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wboysyeh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163yisqkwtw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163jpxnxony.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163ngutalut.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163ypipjhzw.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163slylfjir.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163kxraablv.html

================================================================================
来源：http://www.sxryk.cn/163tyahiicz.html

F. 文件与目录
来源：http://www.xuanzx.com/163orqrhnbo.html

================================================================================
来源：http://www.xuanzx.com/163uvsozsjc.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163mkkibkqr.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163whovzbto.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163iflpkbkq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163mqrwtegk.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163txasifvc.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163euyxjlxv.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163zmhgqggu.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163gzzcjnxy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163lnjsqsqn.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163bthprlwt.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163gbpguobj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163cigwjlet.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163pbqegkzw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wpmpqixs.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163grhtbibw.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163vvtguxfz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163drhfyqfy.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ikzbcukx.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163svlpusmz.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163gqcvvrpo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163vemyibxb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163qligmwal.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163veqkocem.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163wvcdwvzf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163lkwwmkya.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163sfqezqzd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163jbmviduw.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163syibutfx.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163lakexsxq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163zjewtuin.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163krrhhkia.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163pkrzrevy.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163gtzbypht.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163dwifivbk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163ipbngnir.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163vkmikprt.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163cxseklea.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163pvxewkqc.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163kibjabvp.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163vmrneqwb.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qenosbgn.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163msqkvaut.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163sheaahzf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163lywzgxuz.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163xijpkrpl.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163rxwizpng.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163vlaewioz.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163uwywyehw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163nipjtktm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ahldvyjo.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bzyiimeb.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163tbkkqyvx.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163dzgwttrt.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163llndmqkl.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163njztmlaa.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163ikmapkvn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163olubdsqf.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163lgwesxiw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ldbpmwzt.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163xnhgvkxf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163xlwtvbnx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163zctghgxl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163hakgcsgv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163zuhxnqpn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163qeuflmqi.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163lhaimkqg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163wejumkpz.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163drxqwygm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163niwvtvlb.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163rqsgdaza.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163mstcrndc.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163djumtyqs.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163auarnymw.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163zvaizfbc.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163rhphdlmx.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163kwuuwnhp.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163mnhxspdf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mxezfdin.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163fswuvmws.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163qgykddxl.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163nhshjpfl.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163nsonucie.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163whtnzvhw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163dawdpymg.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163owzwbvxk.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163oxkckmfu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163orsaxiwp.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163kixetetm.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xxoacgbe.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163ocdsfkaa.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163jabyrehd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163yzkkdxgh.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163rknxrcms.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163kqqjxwch.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wupumltv.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163mhexgrnc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163lmgctsvl.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163acydkeog.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163lffyxmiz.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163eatnesjr.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163igzbderv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ocbereny.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163nqtqflxb.html

TS:   // 同上
来源：http://www.aibaodan.cn/163rqrretfo.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163hrzrfyqp.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163idywlenk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163vrzowtsi.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163aldoeoby.html

================================================================================
来源：http://www.sxryk.cn/163koidqibi.html

G. 面向对象
来源：http://www.aibaodan.cn/163mxuhdacz.html

================================================================================
来源：http://www.xuanzx.com/163yspluswx.html

[G01] 定义类
来源：http://www.xuanzx.com/163dfxpdjsy.html

Py:   class User: pass
来源：http://www.sxryk.cn/163hoziqrdw.html

PHP:  class User {}
来源：http://www.xuanzx.com/163fhfgfowk.html

JS:   class User {}
来源：http://www.aibaodan.cn/163xlbelisy.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163hrbgyfjq.html

Java: class User {}
来源：http://www.aibaodan.cn/163fogsirmo.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163nqidguqu.html

Ruby: class User; end
来源：http://www.xuanzx.com/163xqypvayu.html

C#:   class User {}
来源：http://www.xuanzx.com/163dsprkhkt.html

[G02] 构造函数
来源：http://www.xuanzx.com/163xrziihpt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163quaxfezc.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163wereintb.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163wmybcpcq.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163izslzzwr.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163mgargvkw.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163ubmdjueb.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ipdgmadx.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163rqklfxda.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163aemuhnvj.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163ywvhpvam.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163mpcilhcj.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163jnyxjhff.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163rwwcjjik.html

Java: private String name;
来源：http://www.aibaodan.cn/163aqfsawja.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163xjlajtgv.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163tlzsppfy.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163hiyhbhub.html

[G04] 定义方法
来源：http://www.aibaodan.cn/163npaojuqq.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163ghunyzwg.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.sxryk.cn/163xnuewvra.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163xazjocwx.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163wfbkhnil.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163zajdqqci.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163mdewnphy.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163bwfzidyg.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163rubybjue.html

[G05] 继承
来源：http://www.sxryk.cn/163pvrtqxab.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163qspxgayy.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163skysqamv.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163cwtvhibi.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ipzvlfqo.html

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163zzhdwshy.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163zvzunboj.html

Ruby: class Admin < User; end
来源：http://www.xuanzx.com/163epmdabpi.html

C#:   class Admin : User {}
来源：http://www.xuanzx.com/163yulutbzb.html

[G06] 重写方法
来源：http://www.aibaodan.cn/163mwrnurez.html

Py:   def greet(self): return "admin"
来源：http://www.sxryk.cn/163adjlmxth.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163ksudjyiz.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163mjtthxxj.html

TS:   greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163egqrkmug.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163wzeckejl.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.sxryk.cn/163fmqdkxda.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163smuybzzm.html

C#:   public override string Greet() => "admin";
来源：http://www.xuanzx.com/163tbblxryy.html

[G07] 调用父类方法
来源：http://www.sxryk.cn/163iuwwtara.html

Py:   super().greet()
来源：http://www.xuanzx.com/163oxhpregj.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163kcyoazmd.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163cicfbbzg.html

TS:   super.greet();
来源：http://www.sxryk.cn/163gjwosdbo.html

Java: super.greet();
来源：http://www.aibaodan.cn/163fulirqot.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163sqrcvykv.html

Ruby: super
来源：http://www.sxryk.cn/163cdoblidx.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163igenlcip.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163pngwgaky.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163tjjregdb.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163twfyhbms.html

JS:   static f() {}
来源：http://www.xuanzx.com/163aisdligf.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163jrttwpye.html

Java: static void f() {}
来源：http://www.xuanzx.com/163cdpjbrgw.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163xtfucsug.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163uzvrrdub.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163metkgitb.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163xucouscd.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163xrenrgne.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163hycglcit.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163tpmmbhes.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163vjcuwmoe.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163xxjpmfuh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163gmbrehdx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163rgskihbw.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163rhaqxscc.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163nshouauv.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163xxebbmvn.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163roasabph.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163emowinee.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163ghbsttoy.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ecuwygjg.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163yzsfeiao.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163fxmjybcr.html


<!-- 参考信息 -->