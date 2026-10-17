外链999!wailian999！

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163merwetkv.html

[E03] 截取子串
来源：http://www.sxryk.cn/163xpbbjtuu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163yakdezko.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163tbfahpjs.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163nuvkolni.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163ptdmtkrj.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163deskrqrg.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163vcfcgcih.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163yvdxocbl.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163bofsrdxu.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163tzynzvio.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163xvasldpq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163rqhevhhh.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163qjfmrvwf.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163rqwjxnba.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ebkbroen.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163ubkubqih.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163tbruuenz.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163qlzysplu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163lxldcdft.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163rwqdlxkt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ouoitgwb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163reaqgwny.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163rycnyvkq.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fdezijnr.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163wgabffht.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163kabyhnaf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163minunivr.html

[E06] 替换子串
来源：http://www.xuanzx.com/163qzhemweb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163lqofuqmh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163kjmnpkhz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qkjlxaht.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wabmbyau.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tcnndnoo.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163dnxelswh.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163bmyviyib.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163aetfpkqu.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163xroijded.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163zyxmmbjv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ibqerkir.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163dqxrcwfl.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163okfzqcnk.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ktnckoet.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163tsknewpt.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163pcalakhh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163gdootjam.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163fbwtrhuq.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163pxbarory.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163dtfupwfa.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163ocsciouc.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163dwqrsrbd.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163kczqhfmv.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163yqbcqbuy.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163sdnleris.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163octlrtby.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163hwhocrly.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ejhkckwo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163mkqjgtsc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ujkmlygt.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tpdauqmz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163coikueft.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163jylrzirk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163llmlkynx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163akcsmmwa.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163pywstltv.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163bnbcycnv.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163vulxofck.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163xtoodezo.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ojfcmasi.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ghszdzvq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163hwwtdtgo.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163uifvgmzw.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ihxgnkhd.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163asgzaxoz.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163vvpizalp.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163elljzfqw.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163cqqimrmg.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163dafqyoih.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163fmmbiyqw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163kustlbfk.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163koepqqcs.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ztgbpgyh.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163cgullcxa.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163jkjqpdaa.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163mqbxosnp.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ngjqiojx.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163rghfwvuq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163txwsqupz.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163yceooflu.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163bxhqotey.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163ntralvje.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163qznqwkmu.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163bbvlihfx.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163vcmmmoux.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xqjdfnkt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163gdwvmexf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163sotowuhh.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163osfwjtap.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163qqeeuwnk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163kpixdyys.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163gslpifsd.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163bpeokjno.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163xgbdutkq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163yrawkxjg.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163lkjkovfx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163umnmntmt.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163ifiupklk.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163zbtgqypm.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163sewdutgk.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163gzpjoomt.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163yzieixmh.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163vccrppsb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163kovzdsgl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163siwmmctk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163ksholtah.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163lldoizji.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ihwzvghf.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163tgaetfdn.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ssbjucrq.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163gepqkpds.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163jlrrpdsu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kmhxrhev.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163rklzjtoi.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ceaoomra.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163yjozekjh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163eidjxzbb.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163dajhuetf.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163clowlswh.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163jvnjjpcs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163bzxfmhjm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ggkiifih.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ryjhsayv.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163gitjuqvn.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163lqiruitg.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163hvacircv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163vqdymtxt.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163cvqyrdcb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ediqbldb.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163cosddvvg.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xntaxsnv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163wevyhmhe.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163vhwwcgrh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ivjaquvt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163kleaztlm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163bqqizhrd.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163mhiqrpnz.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163voctkerg.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163wsejcdum.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bzgjltvs.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163divgzwzn.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163vynfkyzw.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163hxtksjxl.html

Ruby: s.lines
来源：http://www.xuanzx.com/163myebxdku.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163wozphqpd.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163jmwonalb.html

Py:   if not s:
来源：http://www.xuanzx.com/163izwtkskw.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163wkqpwzxt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163hnuvyxfk.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163huqkbyph.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163snhyplzc.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163abwuzqpg.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163dlydhdfu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163txyhxtqt.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163tdqzbduj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163isqznudn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163kwfpjver.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163hauiuios.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fwvvucma.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vwphcrgt.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ipqkyknw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163hihlvdrb.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163catkarfl.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163tveklete.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163aveovkuf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ydcefsev.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163exwqqduo.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nwkzvzwc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163eyjxxegi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163pmjoumpb.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163hgwaarks.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163gmcsbgyj.html

================================================================================
来源：http://www.sxryk.cn/163kculqwed.html

F. 文件与目录
来源：http://www.xuanzx.com/163edtutzab.html

================================================================================
来源：http://www.sxryk.cn/163jwiogtbh.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163dhqzhdta.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163bnnfnzrw.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163sfvzapol.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163wywguurh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163rszonrso.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ydfiajqw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163pjgbctid.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163lzwanama.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163vnxtlfra.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ffzazyet.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ckpuwdcq.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163dglibehx.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lyrygkqz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ekgezzea.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163bxmxkvxh.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163zurqiniu.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163epdytzlf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163oxszqoxa.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163iqfshdjo.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163dagmgqxo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163twmlseln.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163crcfizvn.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zclldqrl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163jeottkyi.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163kilpspzc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163gpkyyowi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zbdhbghr.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163kkvsklik.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163juhjtssy.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163erjevrzt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ccgeagvn.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163ipptkpow.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163qdilzcrg.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ufyblivq.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163seukqchd.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163oqsnhuqm.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163kogsmckd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163wkwrizzs.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163yxtjxkql.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163hekdsxbo.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qbfskylt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lrrjvjtf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163kixauysy.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163dicmvyis.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163fgxzjgbt.html

[F06] 删除文件
来源：http://www.sxryk.cn/163mrjxmbig.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163jalgiwyp.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163vekjsvbg.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163afdqtsez.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163koctbewp.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163txchpjcj.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163wbnvqoag.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163ovztbnin.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163jagqpeqs.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163gulikhyz.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163neeeptjt.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163bjiduqwn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tqrpclye.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163tcxwuopm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163mnelnmic.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163wfluzhvl.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163btxjwbfe.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163mtymungq.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163lgxgpoxy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163vkbstytf.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163ffsxcoqy.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163fxdhvccx.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tbhniwas.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163lpiuxnhr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163uwmudjuw.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163nfjpdwow.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163avnwodpp.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163urrxcudb.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163wqaijggn.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163rglvmwhf.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163msgqxbmr.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163adndljmn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tmpuoluc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163ygqgcysr.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163ipmkkwtz.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163xkkjvyke.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163nmjxoldn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zwelzdrw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163icpzltmn.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rmvokrlv.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163uxqvgekj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163zhhfhbcx.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163axvhdemn.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tgkslumu.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163zhldnbjn.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163doisudag.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163solqspfs.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163rjsomscz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xfjkzwtq.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qsytulon.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163nqvzovyh.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163bgbpkrjr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163igogomqu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163anqjcasx.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163olrxahig.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ftmsyvvx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163dzlpjaxs.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163fkmiutve.html

TS:   // 同上
来源：http://www.aibaodan.cn/163focogkbw.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163myjkkapy.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163hgsopprh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163htgpntuk.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163fbijwqbi.html

================================================================================
来源：http://www.xuanzx.com/163ztgvusvf.html

G. 面向对象
来源：http://www.xuanzx.com/163itapteyl.html

================================================================================
来源：http://www.xuanzx.com/163vcxdmwpx.html

[G01] 定义类
来源：http://www.aibaodan.cn/163gdkmsray.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163fnzfzmru.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163bdeugazl.html

JS:   class User {}
来源：http://www.xuanzx.com/163pgmykfrm.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163cnloxjqq.html


<!-- 参考信息 -->