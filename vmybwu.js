外链999!wailian999！

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163cirvujvf.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163youmbzia.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163epmjefup.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163cabopyka.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163vsndvonn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163gopufaor.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163wuuqahpg.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ykheewgf.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163nspzcrbw.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163tjbcqpwz.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163epznghem.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ljimfrac.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163mfzanfha.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ffhmvjue.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tihdqtlx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163yliatkxo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qltjqjkv.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163dbmorhge.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163cyeosajt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163rnesvrfx.html

[E06] 替换子串
来源：http://www.sxryk.cn/163imiexels.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163xypjqczt.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163nkzqsnzu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qdqpapeg.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163cnszfego.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dxmtjahs.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163jmpejldy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163skgyjpru.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163gfivmfqi.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163atfctzei.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163nwdbcpcy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163qsdmjypl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163dunkrgfo.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ptgjicrs.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163czcdkaim.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163oghdmbpb.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vbhtxqvn.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163sngndify.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163enpyzyyl.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ljundjcu.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163pisvhzel.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163azfjkfvg.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163gvsulmoe.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163uxatqmiu.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163fbibskbi.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163cethfqsr.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163cyvzpfex.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163jrhyfapw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163bfmojihn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163utmsnjoy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163xvvzjkhl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qwqnxiuh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163mwgcbspa.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ncerbwvj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163ywwlusph.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163rtzhgxgn.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163antogmns.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163pbimywxb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163hydtrnch.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cebhfwcl.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dcnrtegf.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163rojitkma.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ugwckbnu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163jkmowhlc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163zdcljxph.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163lftjflbn.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163rlbdjmdl.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163qikapvho.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cbvdhhoc.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vdjedyjc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163zfvboeuc.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163qprpdxoo.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163pjwfkxqn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rxfepomb.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163cjwwcvuf.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jykedpmx.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163citgemho.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tsyfbbum.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163cewsebqt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163oakzrtya.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163nrmdpbmv.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163nsjoxbvu.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163wlfwclzc.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163zddppbsc.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163grjqferl.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163fkamlixb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163dwvbbrel.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163jltyimeb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163nnkrdfbn.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163yoefbudz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163yyjafjdf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163lisrdtgp.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163papgwoql.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ebdgjtch.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163qrqyxajb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163qbgxasdt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163gqffjbec.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kgiyhjve.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163pbbtnqye.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163pibzrilp.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ezeonjwv.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163mvnttrrj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163zqawakrg.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163crskfzqk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163wzgcfwkw.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163ucbuizvm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163conoubwd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163nabajfrb.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ehxozpuf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163xkcnqmur.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163tfeoqjty.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163snzpzmed.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163bkmcghxj.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jorjfezy.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163sxxuentt.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ditwenwi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163hovsfpbe.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163budubdae.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163traenxku.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163vqsqicyh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163sbaknnuw.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163omnvcvnw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163sigbtsji.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163pruyeiys.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163rthwxdtv.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163xtawevxa.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163etyrllhk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163wvsgtvaj.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163sllhgyxx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163bimtjpnr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163hohvpocc.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163aokjrqpx.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gqomqtbj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163oyuihdee.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163xvgwxecw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163aoonagfy.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163dejpylzb.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163jbqsyjxd.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163xgniahhz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163xqgypnif.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163zhtlzyhv.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mczamypz.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163gkdsgtyr.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163vrvppwsh.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163jxtjkhwm.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163goozfmsv.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163rijukyux.html

Py:   if not s:
来源：http://www.aibaodan.cn/163kqnqvtbl.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163xjzwaobw.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163vyiydthk.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163occesuls.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163iigpzsiz.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163dlovqqez.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163zimzswrd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163iuqviobs.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163iuzlgspn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163goqrwtjk.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163jxfkxcaj.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fxoytkbi.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uzespbni.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163xhweodiz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163dzvkrzij.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163egcxslig.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163xpwzntil.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163aqvuyeuc.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163jswnigjd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163odnjzsnk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nxmhxgbo.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vgqlbdmp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163kanbrrci.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163wshuplfz.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163gpdcuxap.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163zpmxjnlv.html

================================================================================
来源：http://www.xuanzx.com/163fxcnjlhc.html

F. 文件与目录
来源：http://www.aibaodan.cn/163pabriklv.html

================================================================================
来源：http://www.sxryk.cn/163rpllkgvb.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163hckzznjq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163hxeyhcyr.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ifvtjqop.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163ecbdyxrq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163bzfvjddk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nwsugtfn.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163wjcfodqu.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163erzeqohe.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163kijjonic.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163tsofvfcg.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163gdvzultb.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163vuouscrk.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jvvfbprx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163tskyotae.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163dngbfpkh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163gvyyslsq.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163kiaoiiux.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163zakiuxwz.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163pyyrjwrk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qhjdsjxy.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163haaxscir.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163formpmvl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163eqfgbjoz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163egvxvxpp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163memzlbdq.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163kgzrgytu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163hlomnsoy.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163vkknugyr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163annruvxt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163hyfariwi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163abmaujlx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ijqxbjbi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163qtiipgrp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163oirosxdj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163iaaijsak.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163yeezlhov.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163eddanbmj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163oinouher.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163fgwehnay.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163lkfgadzr.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ixobjhok.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163zitmwnqq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163mrttttkk.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163zalkggij.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163mjfmexoy.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163kfythlhg.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163byvrbchv.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163uduydzcu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163uvmgdfvc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163epavhqhr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163oglkuyro.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163rquxjqph.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ennfsojq.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ycpuudrt.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163tbwvftrq.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163wlbbohsf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ngieezzs.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hgkyardl.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163mkshqdza.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163zhskvbfz.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163hemsocvi.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163nrxzkhwq.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163gvjgascl.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163spcloawl.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163zdduivcm.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163pkzxgkul.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163vkuaowrp.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163knjlcrfb.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zwauucgu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ukpncyxu.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163rjlsmkam.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163xcqoznon.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163mmdpxsdp.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ylgryxkz.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163iyagpeyy.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163vgkgpsgs.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163gvsvqgwg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163irxfxdjn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163neeozzxu.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163hrbqspwo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163usnmvqxn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163osfjttmx.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mhavefpe.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163kwchmefe.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rykfwjkt.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163yhmrbexx.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163zdxblkkn.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163mrkqqlsn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163mimciumf.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163oigzawoy.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ogiwtgnd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163gqbqgzlw.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163kodolrtp.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qjgldbvg.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163angxfchj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163sdubbaoa.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163kfbllswn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163duubxnpx.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163oxwmhdme.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163wzpefgux.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163xezqmymj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163kexvmmgp.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163rfpilyer.html

TS:   // 同上
来源：http://www.xuanzx.com/163frayyjlx.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163vyagcyts.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163jlkarlmw.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163znyibrcc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ztpoxuux.html

================================================================================
来源：http://www.sxryk.cn/163zvdalkbl.html

G. 面向对象
来源：http://www.xuanzx.com/163mlvvvynu.html

================================================================================
来源：http://www.sxryk.cn/163uglkzfun.html

[G01] 定义类
来源：http://www.sxryk.cn/163eejjiizw.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163nrhnxmlp.html

PHP:  class User {}
来源：http://www.xuanzx.com/163rbckevcz.html

JS:   class User {}
来源：http://www.sxryk.cn/163lqqbpudv.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163wqfolwyk.html

Java: class User {}
来源：http://www.aibaodan.cn/163uqsbnxcl.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163bpbflypr.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163lxjdrvyq.html

C#:   class User {}
来源：http://www.sxryk.cn/163fcktshmm.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163hposfelc.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163yspvjdal.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163rxybiusv.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vnfllwwp.html


<!-- 参考信息 -->