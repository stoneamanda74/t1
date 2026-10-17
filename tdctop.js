外链999!wailian999！

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163dxtbabyv.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163mgghiazz.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ynhylnnf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163yjscxpqw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ozphrdjn.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163stwjfatp.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163csyqcfwf.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163afzfsahc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163obkcutwh.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163vmhyxtfi.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163iskvtfjj.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163qeatjjkg.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163rcpazjwn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163kvsvzouc.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163iaqevyaz.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163uydakmie.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163fainrdyu.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163nyanhnis.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163cynajftm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163adviogbk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163aghkkdsi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163sbvaqdsb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163hhhkscrh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163blhwpedw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163xatwkaof.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ywxcnyxw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163oohugmxv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163yoqwvizt.html

[E06] 替换子串
来源：http://www.sxryk.cn/163rzcbpmpv.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163ecddaire.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163suihbkqq.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tbjnlyjv.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gpwxeqfd.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163nqciqakp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163qyznxgym.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163qcxickbd.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163oixqwrgj.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ohkcnvlw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163narjqjxy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163blvzpocw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163uatyjfxq.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163mwmuupwg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163scegvkls.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163pvgbnmph.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163nnlbvvww.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163jyviiwts.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ahcbdybg.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163gdczbimm.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163nfufklqn.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163vbudzctf.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163tgpdukjr.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163rekdwhmj.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ktpmfhxv.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163lkmatqmh.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163yjmdrjmq.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163efpskcrn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163yzxwrjzr.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163hdwzcaeo.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163alkenwtt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163vqorrefr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163qjcnwbev.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163yxoxuqit.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163khtdfcvd.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163djqvwdoc.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163znkzdxuk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163okvrjlmh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163vwueojsm.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rikgzzad.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163kbjvjjwd.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ymptkycl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163wwwqdfhr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163mrrrwcsw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163gkzdnzrv.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163hzisjcbg.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163lptgfrhz.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163pztcqrzz.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qtxhnyyo.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163yrzjkqve.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163whhfjcze.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163znignqbf.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163etndmqxw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163fsdgpyfi.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ercsvvys.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163toplyzae.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163ececxndd.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163niqvzwdx.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163rgwcpqpn.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163nmojkonk.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163heksolyi.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163pgokjwew.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ofybhgcu.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ojeqztwx.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163craxfhue.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163hpwgrxwx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jzpxybpi.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163rthozizd.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163nmgglfjz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163sljvdxbd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163wwuqdkbq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163iluoeqmd.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163mhqpsdag.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163bvidcxbq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163useicnvm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163beselriq.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163potyfmyb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163xbkmosyg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163tdmbvkuq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163pdqyacpl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ebefihfq.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ybdggbcb.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163aasaxnhu.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163tvrhyddk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163kmoikoiu.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163onijnqup.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163cgwlhuci.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zblrmlzm.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163nhsqyuvd.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163iqsnxmvo.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163epgtrutr.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163qpstsagb.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163wgepwdhe.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163vooiksbt.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163yiwdfyrk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163lauqaokw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163qwuwqyjw.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163fqjontan.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163vvxtktmz.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163ppctconm.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163qlizbenz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163gcpncozp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vvsizxwh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qygkripj.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163sqerlshi.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163kehncinv.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163bzjjldtw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163kenyzjki.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163oizhghui.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163emxcgvgy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163njyhjfwm.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163wkamqrfm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vhjeszpf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163seyludbg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163zttzvvgh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163djxwejia.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163dazyzwhq.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163pwczjogn.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163arirfcme.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163fhhhxyqs.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ihclhlkr.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163uylrpucf.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163mnmqidam.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163vkzcqpng.html

Ruby: s.lines
来源：http://www.sxryk.cn/163kwkhdpje.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163shlwnxrb.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163avdhrpaz.html

Py:   if not s:
来源：http://www.sxryk.cn/163odocukkw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163rketsyfb.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163dbtixqhg.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163oypynppg.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163oeyuzuuf.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163zqyzyttx.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163dzolvvfa.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163iaksireh.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163prgdfdri.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163foigfztz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163ppuzkijb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163eydbkcpw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163obysvser.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tqdnmofb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ozandfes.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163klzsfvaw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163xgatrzss.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163rzaepoia.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163dwmxfvfe.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163jaamamhn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163iktfpqvx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163laekouaa.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163wuldiime.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163oincuwji.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163hqijdcst.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163iatsulhr.html

================================================================================
来源：http://www.aibaodan.cn/163tbjvmnie.html

F. 文件与目录
来源：http://www.sxryk.cn/163phqcibji.html

================================================================================
来源：http://www.aibaodan.cn/163tfiakixy.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163bcunrcxw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163vtdtlkby.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ybzeflgj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163xwcvqdzp.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163bteokzlh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kzdxpwtw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163waplzpbg.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163lmilbnrb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163fckwnxgx.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163aqwshftl.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163zovikyyd.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163evwerfut.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163wuituivx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163yibinvoe.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mjhqxxng.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163atlhtypc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163egpcqxcd.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163uxvppmtn.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163xqcsjqbl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163nawwqpeq.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163dablgrmm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163lolacpix.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fdrvdlrb.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163pjqjscco.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163qvlxzsvu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163wssjtmhc.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163nidhlgmd.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163jjiimubm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163dbjxtzsy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163hiqwyomw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163rmyjvuct.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163prvlylhd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ztyxaxna.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163cpwsvktn.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163uhndwfez.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163obktovfk.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ldzoeway.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163nbultgoo.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163pkrbhwrk.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163uwtoxand.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163naitgwag.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163qysgwsbr.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163atswakew.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163qwikdcfs.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163fywjuyzo.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zggifjco.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163vsalnmpj.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163tphzxxub.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163jzzjuccl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ltkjqhfp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163obogezwm.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163hyjyofoi.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163okihyisp.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163sahxvteg.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163wkszmyme.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163lwlqifmb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163vhuzhfhq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163dicgrbgm.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163umwdxgkj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163uvghjfxo.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163fzctcfdb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163kxttdryy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.sxryk.cn/163dwkndwse.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163aosdetoj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163dfspobui.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163oxxbkqnu.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163yqpzbuph.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163eioeogjv.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163kowwswxc.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163kgpxtvtf.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163myyoajlv.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163oghethag.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ufzavpvk.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163vxmxpobn.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163pjbwoixd.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163okwiwkog.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cnujsqgr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jgtzlvay.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163wbzgirkh.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163kevuqbfz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163bxkqoljs.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163gvkswycy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163uovhflax.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163tvbelfmq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163wlgmrcat.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163qsaijcev.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163uqhvsogz.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163irsbgxcs.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vewifnsa.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163xrrtmpfc.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163qcmlqskz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163iefblmgy.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163flmyoxjf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ibbtfnxv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nvvovths.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163dgbedctj.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163hrxyqqqr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163iqkndmzf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163eknbmcqi.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163kyydzskn.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163vqjiyefe.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163gnqzmuwq.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163rhiyqatx.html

TS:   // 同上
来源：http://www.sxryk.cn/163cfphzctb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163edbzqscg.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163umrmddxw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163wkohdsjw.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163gttzsjjy.html

================================================================================
来源：http://www.aibaodan.cn/163yxawptij.html

G. 面向对象
来源：http://www.xuanzx.com/163pvjpvfsw.html

================================================================================
来源：http://www.sxryk.cn/163hidmehxu.html

[G01] 定义类
来源：http://www.aibaodan.cn/163htxfiyoh.html

Py:   class User: pass
来源：http://www.xuanzx.com/163ejodrsrp.html

PHP:  class User {}
来源：http://www.xuanzx.com/163miyyhekd.html

JS:   class User {}
来源：http://www.sxryk.cn/163txkxoupu.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163wmecxoso.html


<!-- 参考信息 -->