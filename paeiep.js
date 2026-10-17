外链999!wailian999！

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163iwsgrvzj.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163fkaxpnkg.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163fxwiwylk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ruuvnczt.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163jsctvooo.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163gxtbsafp.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163xqunnsxn.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163rmcwwzpn.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163rvzmlozt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163qvwhtmqr.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163wiktsbjw.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163tmnqlsig.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163bytrllgd.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ljgjqilz.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163hqdhycir.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ribosrxx.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163dquapdye.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163wvdrypih.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qkpggocf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163niqvpyeu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163oqpzmvqm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163mhonlxaw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163kbtcheeq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163glxnzrbs.html

[E06] 替换子串
来源：http://www.sxryk.cn/163ylnyrpod.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163pirnvrqg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163kfsgbowa.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163finjqnow.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163dhtashzi.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fnfizxcj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163qntadfsh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ghogifhc.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163kztpicph.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ojurokct.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ffbwhmya.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163ptqkwrnc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163qnqvavvp.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163tvjjhsmm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163wdoltway.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163avhbdbqa.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163kehrpfbg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163bfqughre.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163crvnwmrp.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163ipeptijd.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163kjrwyoez.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163otdvjeha.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163qdcepqyf.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163zhfhfhrb.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163sgthdmtv.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163gsbzyqdr.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163qtceszri.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163opoqhhsu.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163khcsrwgj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163rldijial.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163auobetxw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ucdqccer.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163eammffgk.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163jsjreeso.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ztugrwqw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163caomffeh.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163dokdkaqy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163zaostqeo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163pdytkhfx.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163kmduquif.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163eikkxigi.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163zakuixpm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163xmjjbbmy.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163hbvgxbrp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163dyarzapq.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163wcphxnvz.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163jcqekqso.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163wjbhqkjb.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qclrylfp.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mdqibwyc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163rkbqkkhl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163cpwnrioi.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163dtweweqk.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163wetsfeww.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163otjdzvxm.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ypcclpur.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163ubnjecff.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163uultkmct.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163tecaxeql.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163pazbmqxx.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163vloyqirm.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163zmxwqobc.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163vecikidc.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163xibhvjjs.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163qeoswjvs.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163temqwwng.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163blxnwooq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163luajnrbj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163cwovqedl.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ylqftcfq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163almhvcnc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163isvtncnw.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163fusxvspi.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163qdweknht.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163jfxfjhwr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163hwbeuffm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163kbgpoqtw.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163hmumowez.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ligtmyef.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163tbcsftwl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163mhqcdzbz.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163optuyfqh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163lawurvwv.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163smdatomg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163bphduxrl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163bgngufht.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163mlpbzgff.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163oaefzvnv.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163efzyblrh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163anorfmyw.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lbnvicdo.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163qxcyumvh.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ozhfahov.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163rzbistfq.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163hlebtush.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163nptaeqqf.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163jvkusotg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163yckyuytl.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163agmiatov.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163gubqlynm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163wqdldcxg.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163yvexljme.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163kgbfljlg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163nvgoqmoc.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163erczttqa.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163khkxeurd.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163rhvjsxds.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163pltldnvo.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163jysprnzl.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163czhypqtz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163ncnnnbrm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hjxzldxs.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ujtfmumg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163gvndubcr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163iqkhlnar.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163hjyexhec.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163mvzskpma.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163xilecpav.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163ddvnhpvg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163zdiyyewp.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163mupnpszc.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xjpdauvr.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163qnvsncgo.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163jmhpkkcz.html

Ruby: s.lines
来源：http://www.sxryk.cn/163khgqkgfg.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163apmvgrss.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163einwltws.html

Py:   if not s:
来源：http://www.xuanzx.com/163blquebih.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163xjvlfrap.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163zqqwgbil.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163jwrdkeop.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163cwjkhrkt.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163cadqtzsm.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163xfmofrqh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163olmpxuup.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163heeycqxq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163fmuhnhka.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163mbtsogqd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cevqgkqd.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163iczwmwor.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163wftkesbb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163mrzxqean.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163fqcpmvlt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163fomhmpcd.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163anykcrcc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163nqjoiwph.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zoouasua.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nypjinlz.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nkdrxzic.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163jdhauhns.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163uhqwcdgg.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163kpguveom.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163iqjrlmyl.html

================================================================================
来源：http://www.sxryk.cn/163dsaxlcdg.html

F. 文件与目录
来源：http://www.aibaodan.cn/163hfjnintz.html

================================================================================
来源：http://www.sxryk.cn/163scgyvumi.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163zxmpoamq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163jkenlumm.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163mpkghreh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163abrfsdza.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163czexbfjj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gqewpkyy.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163uxurqman.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163vrcqmkrz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ikgcnfpa.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163rcxzatkd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163szbcrscu.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163hhittnyq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163udggkeie.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163czyhtkam.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wfgzghqz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ehavrrrs.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163cmkambhf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163mwhglmyk.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163yzomwvhg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163tokggsrt.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163dbxgavhb.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163emgvapiq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163lznwkgqz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163gxnzwwwi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163lnzplojv.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163gfrufjuu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163onrzywfv.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163efxnopcl.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163pgjcsfdd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163sxazyrxl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163kbxpcqzt.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163lpkpbzmz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163guokwuqi.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163pxvxdhht.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163apjjzwfm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163wguezgqr.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163scepstju.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163cqtpdoll.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163lirhgmeo.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163dcprscqi.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hwnldznv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qxxvqueq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163jwosbaps.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163xodgmuva.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163tusccmst.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ixonvgqa.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163wsmcykzj.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163pfjihshs.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163sdlberkr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163behjmawz.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163aszvkads.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163exwribub.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163kyedpfix.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163dmoaaqji.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163qlxxcvvq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163uuuvgdya.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163njasxsqm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163bzkkfioi.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163chsoxjto.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163zpvyaptu.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ofmlozbx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163nzghvcew.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163jvapmdty.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ijqxsejd.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vdssayeq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163ciplrxex.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163mgclgchs.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ouinieaj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163sfmoukkm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163vtsndeup.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163qaibzpjx.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163ouqfoyns.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163zhdoagdi.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163crsjqnrv.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163zwycrexx.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163clvcjxsj.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163grqgmqps.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nvtrggxk.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163tgfbmmlj.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163flzogiqu.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163avbwlsbu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163uanynwjh.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wgupfufj.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163zkhcusgc.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163hofdrhio.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163tfphwkjv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163dwbsacok.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rptypamw.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uzrkpczu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163frpvjqsu.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163jfslkcqx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163iihhxdhd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163owfapkxy.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163dhxavyci.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yrgujxkw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163tacdvcci.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163aahquawd.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163kjqcldky.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163rodsjumq.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163umyvmqgn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163bsnyoasv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163kvpsbuay.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163cxltfued.html

TS:   // 同上
来源：http://www.xuanzx.com/163azexaoke.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163hozytxth.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163boakxzbx.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163mxxbbvgv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163burbnjqw.html

================================================================================
来源：http://www.sxryk.cn/163odpyohxp.html

G. 面向对象
来源：http://www.sxryk.cn/163gkuqxnqe.html

================================================================================
来源：http://www.aibaodan.cn/163wagqimph.html

[G01] 定义类
来源：http://www.sxryk.cn/163haxjrjrr.html

Py:   class User: pass
来源：http://www.sxryk.cn/163rxhkpiwk.html

PHP:  class User {}
来源：http://www.sxryk.cn/163qdjyehso.html

JS:   class User {}
来源：http://www.sxryk.cn/163txfuishe.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163eerljtrb.html

Java: class User {}
来源：http://www.xuanzx.com/163yimyvbny.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163fwxtdyqx.html

Ruby: class User; end
来源：http://www.xuanzx.com/163ijughyqa.html

C#:   class User {}
来源：http://www.xuanzx.com/163asvwksgp.html


<!-- 参考信息 -->