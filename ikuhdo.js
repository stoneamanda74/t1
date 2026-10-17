外链999!wailian999！

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163jsaxwcvu.html

[E03] 截取子串
来源：http://www.xuanzx.com/163ngiyfxoi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163gzilucze.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163vkifqnlg.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163zyzxtztg.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163yocapkts.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163xetrsjal.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163zsprcvuq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163vsvlefyh.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163wmfphomm.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163vmwcripo.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163onzzcufg.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163hrwxwtfa.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163idsfuamo.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163evnovzgi.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163cnncedds.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163gnhngnqq.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163mylcelox.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163aokhyhin.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163tqmukqgj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163cqyoncde.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163putggeof.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163fwilywpm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163cqxtonkm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163imzhqvby.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163dyddbgjm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163yfuhchst.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163stvdpmrh.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163xrclmshu.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163spoxqqcn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163jbmuhyta.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163fsqfvlgf.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163iwqbjcsr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163fsliyjhv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163wzednudm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163jycqplwq.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vbbrefgd.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163jhawzvov.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163azevkonf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163tqoimqyt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163qyvkkxlt.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163sutxshwz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163smpkgqin.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163apgrttgd.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163qxicvkuk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163tbmceqfy.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163spaqgkmi.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163vlaoendd.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163gobjgavm.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163mpdotjfg.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163oseonwga.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163emspeuod.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163azhqueah.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163ymjhoxln.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163jnklpyop.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163znwebcnn.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163vbtlxnzm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163klzgkspd.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163lznzelel.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163fygmxqhp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163qyzsdkli.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163cpfnvnzw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163raahbofj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163cbrclppd.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163cjkijnav.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163xzlbcupp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163fosoqvoy.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zyasgurl.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163cjyhcpce.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163gtsctiek.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163kdsthwuw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163ohmkfiao.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163pxbrjegh.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163swulzaeu.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163vncuynae.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163jetlhqry.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tpmjwxxf.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ceifwhgp.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163dbdiitjw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163fevbdtzq.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163shjgrxuj.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zhissbht.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163mfeptygq.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163zmhqosdh.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163djpjzvnd.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163jbryrfyi.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rrssmryj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163oiwnangq.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163nddxdfkc.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163ryfzpkok.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163iochddrb.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163uoscgrrm.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163iipvhuxb.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163vjdzcnxx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163nmaxmslt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zzigpazf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163yyqxebcu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163nualdnex.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163tvfthspn.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163cptzjbnk.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163bcvoxlwt.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163paevidbd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163ozcumrhp.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ojfpwail.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163fjhdxzcj.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163cnnhsexz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163rxalpubq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163kmbapiiw.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163zdorlwqg.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163cypunrgf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163sjhzixci.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163jqxtzgsi.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163txgpxgkd.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163kadjpide.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163dlllgesh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163bcyjtgzp.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163htxqajol.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163xtmamppf.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163zkmljjgc.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163xoateeff.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163pxznrroi.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fzvrxvpr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163fvwhfchi.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163wiprmwry.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163weggqhsb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163dzkbqmea.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163nsobhpro.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163eojdhayf.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163vcamxwyy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163ojmtfsul.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163addrqxjb.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163wwohpsot.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163yqbcgdpb.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163lcnonztm.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163cxndafrq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163abvbfbrp.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163qgcyrswq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163eyzpijti.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163tdzhvipi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163eqktvtnn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163irggkyci.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ugojxtog.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163qyffuyha.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163bnfbbmal.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163yhmjkacx.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163hxdnxkty.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163aunxoxtr.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163rudtmklz.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ljaghsrm.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163nracmpqv.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163clurojxn.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163lyklxige.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ohnqhcds.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163upfpxyig.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163rhcnznos.html

Py:   if not s:
来源：http://www.sxryk.cn/163xueshada.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163qpdwahrz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163ttzfsasr.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163bwzqhurm.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163yuylshoc.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163afvrvnxs.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ecvitxbx.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163jxsbgdat.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163unlfalpt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163jdfujcek.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163jarhwiwd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fficvhbf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163guufrcxb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lzzqoicy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163jkmaxkqs.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163ynifloap.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163cgdsrftg.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163wxsmouse.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163uoczgonr.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163swfogwsl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mtrjwjcm.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163bbzdtitj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ehqewzue.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163ivxjebfp.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163uvkzehmc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163lsewnkpa.html

================================================================================
来源：http://www.aibaodan.cn/163wqilpbdo.html

F. 文件与目录
来源：http://www.aibaodan.cn/163mtwjhxbd.html

================================================================================
来源：http://www.xuanzx.com/163yqtwfgae.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163dpancadb.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163slztbkle.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163qtnydkfb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163zrbcsryw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ezrakawr.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vehvkvkd.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163hcqglmrq.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ctanuznc.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163qfzfwqbz.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163aafingsr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163fotdveif.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163gzlrwfoa.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163alkoshgc.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ffsomcek.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163vegafbdz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163rcoqpmwk.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163zmusfdtj.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163zrqgyngy.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163wibknfwk.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163lwtxsiag.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163brxieucr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163hdiellon.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ohtthbph.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163elemmwof.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163svqivpqo.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163nlvcytkl.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163okwhyogo.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163stlpjnqz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163yjmwxawm.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163hubzafjx.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163omeprflp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vcbvrzim.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163yelztoqh.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163okbssqbq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163sprbhmvf.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ybpsaehz.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163wfbgiboe.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ujutkyfa.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163opnqeyjf.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163knzyqxlw.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163ymocuucg.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ifmjbduw.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163ltnzztqr.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163wdxpcdlp.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163xdzzgppt.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163lnjandog.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163dcdpnayr.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163txhxyzdu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qgsiguql.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163dzqjktlj.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bkdklgft.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163wiioolrg.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163ajeajytd.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163tevovfin.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163tnjswlkz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163xjpufgoe.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163udarhjcj.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163pjtuulws.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163rcjxqhci.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163zrjanids.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ijhbpdlt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163bmbhinmi.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163lyvrziwn.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163yzhjzhqi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163zbmumnbq.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163bqmmyepd.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163dcfhjfrh.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163hbocnety.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163mrqpcbuo.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qmlltxmh.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163dpzwjdad.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ngkmfiwt.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163mzjrvxij.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163yjeyossv.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163pfustlun.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163tejaokwm.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dczutrhx.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163tfnvzjtu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163xpleuryy.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163kwmsyszq.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163fkyuimis.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163riinwdck.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163yrrgjhzs.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163nlzmtpkm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zenfyvka.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ehdgghwt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163ufnknvhk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163jgetggvo.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ruabatqr.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163kdxcozzz.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163syjzcexy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163mpojnpur.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163jgltiiyk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jxzwmoaf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wnbubwdp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163tpmmbrgg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163znygvmpc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dmrrehea.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163yqodyhad.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163lfglwsiw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163zdpevddj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163lyvrqqgb.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163ixnvjlxh.html

TS:   // 同上
来源：http://www.sxryk.cn/163btxikibv.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163jiswzyaf.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163zgcvvcof.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163pbydgoln.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163vthovtht.html

================================================================================
来源：http://www.xuanzx.com/163cnodyzmz.html

G. 面向对象
来源：http://www.sxryk.cn/163fbhkormn.html

================================================================================
来源：http://www.aibaodan.cn/163wvpjjdrz.html

[G01] 定义类
来源：http://www.aibaodan.cn/163bvnuxoja.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163qpebdnlo.html

PHP:  class User {}
来源：http://www.sxryk.cn/163dmpmxcpi.html

JS:   class User {}
来源：http://www.xuanzx.com/163pvicrfnm.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163sxlecdmb.html


<!-- 参考信息 -->