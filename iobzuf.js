外链999!wailian999！

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163ikdaqhqr.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163hybpfovq.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ilrukvlt.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ebdqzndf.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163txfmvkju.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163elzcmvqh.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163mduqmhit.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163aawpbekz.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163fyivuyoa.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163zuygzxqp.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163imdobtca.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163uhaaqyqg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163mjlcvada.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163iusqnmiu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163clvegkaz.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163cbotyykd.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rlxyweyy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163yujgmxvt.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163qfjlyqpe.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163dkhjuedn.html

[E06] 替换子串
来源：http://www.xuanzx.com/163aaewheyl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163wmutmybf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163rbchsrql.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163bgavjksc.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hybhrjzy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163recpsinr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163useyzviw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163qhxqglqr.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163oavfhhzb.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163znqhstvj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163pyndolct.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163tflaxtum.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163sapkzsbw.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163qkhjsltq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163inmejchx.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163sjbeyymi.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vwwxxzet.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163kaamfveb.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163lwlyevkd.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163lpfklumt.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163hllppwye.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163xwtlfrwa.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163fdauknav.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163dlojuisx.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163gjjxsecy.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ulsgejxd.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163omaohumb.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163dnowinmw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163uqilnjwg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163nzbfvxhy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163rdbqazht.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xtdmabth.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163hvubabjr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163klcmrmyi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163lboebvax.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163ehymsyjj.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163dquhaqfl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163zhrgfkqh.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163suoientc.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163gspiqntg.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163mfrwbzsg.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ttcfefls.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163htbyooxn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163pntsomsk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163iiibdtxh.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163pgkbuhuk.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163nbwvbaxl.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rtnaeqbh.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163nvvdvzcp.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163cfiyczbe.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163kassqdzz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163boqeupqd.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163fwwbhcqv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163uckghkiv.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163dekuxwyx.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ewhmhekl.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163wchybjlm.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zeuahnyp.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vdruhral.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163itixpkgb.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163zjmfxitt.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163exlwgten.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163vlltvkku.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163rfuignqp.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163jgwprsfd.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163rogaigyp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pxyinqbg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163kckmzewk.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163qbosqlzl.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163tuplcasz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163azcozheq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163fsuoscmj.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163rfkxtrwp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163sekrxgvu.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163djkvhikc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163dhfajwlo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163nmaxumsr.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163fcdquvjl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163sjjdxpou.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163qwmwusob.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163shgtwcky.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163tkrxqoyg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163swqsvdpw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163oucgmczu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163mwascdpq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163aorxzsbp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163kcmzvsrr.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163utamuiki.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ezchlkbu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163soccwgoa.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163vhhxpjmv.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163wxnxewul.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163rdrexgxb.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xndhhfcj.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kdtecafj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163slrytgkx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163grgupakb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163iqunkrfq.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163xfidazut.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163pirxukez.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163yqivdahj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163acawqmwq.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ivnktvun.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fxzdavoh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163zfbdxzul.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163tegxjgvr.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163bczeeowc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163sexzaaeh.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163khzvzlee.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163orvrsane.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163iqzkxhce.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ckhgwbtf.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163izvjaydr.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163qbqskupx.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163olggpclh.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163tulohbvr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163tlwvdgqf.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ijurzztj.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ydkepezc.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163uqwudhks.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163mgdwqona.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163wmjljqlb.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163qhwwtmnz.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ddgfbnkm.html

Ruby: s.lines
来源：http://www.xuanzx.com/163rpmhmzlu.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163ltlqbkan.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163yxmomnkl.html

Py:   if not s:
来源：http://www.aibaodan.cn/163iknjvyrr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163smfdesqq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163lgnhgluv.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163vnvaenus.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163taveddbv.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163axzgdskp.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163crdpktgb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163auuutrdw.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163cmzroazq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xiewrsaz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163eliqibfn.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ibkwuxvv.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hkjvacna.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163zazskewz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163hbhrqjtm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163jefkdhuq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163wdsxqycl.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163yxzmejtj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163swzkjyti.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jbmzqyef.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163aafjpzik.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fhawmtzf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163utqwaodg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163mggoizgq.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163fmcoctls.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163lhhfbihc.html

================================================================================
来源：http://www.sxryk.cn/163otooysry.html

F. 文件与目录
来源：http://www.sxryk.cn/163qxhjeouj.html

================================================================================
来源：http://www.xuanzx.com/163cjaayuua.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163mfptmjym.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163pbwfsbrs.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163yexgzldb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163hqtmaknd.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163cgklxcyy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ggvhpoxi.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163iuklbtwy.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163ezdpgyun.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163hoiejqtc.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163jiqybvaf.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163hvisuwhk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163oleqckme.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163rnmylwcg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163rpqtsfzz.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qktayyrb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163ifoylehc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163bixadhhp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163nqspggli.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163dlwkozsg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163xkdptmgr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163qfxeuuei.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163iughvdtw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163tdhqmalt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163jnizyjwz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ibjnalhb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ocjlbdlh.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163oqnfcdid.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163dxakxivi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ghynoaey.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163gtkjsgri.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163lmcvbzkb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163iqidrfoc.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163dojjylwm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163luvikeun.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163ihtnppeq.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163hivnbumc.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163qwscnaxh.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163cefqtbgs.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163idfufvww.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163yonnitiw.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163divezuvv.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kjgwjrdb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163nrstrqje.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163bjklumwx.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163cesuadxl.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163riqglqxh.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163lylqrzlf.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163nwjzsizn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163jovzuigg.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ozqwuxly.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163qnmnrccn.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163hnwvhllr.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163paglffxx.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163izntjsyo.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163jtpxbqot.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163tsjswyvo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163mtehtjtp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163uibhfmkh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hfubkfab.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163srcbbkmm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163hwmvgaga.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163yummqjyu.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163smsrfltq.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163adxqfqdq.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163joeummxc.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163eodxygjl.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163taqbutuf.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163zxjpvswn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163oakdiqri.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163qlvkteti.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163lxtvtdfa.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163btgoiwef.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163ssfcjiac.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163wfbkclev.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163xhrcvylv.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163xwjoficm.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163ubtcgwxm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jwofhmln.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163lororbek.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163pdhkaaof.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163umanlzch.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163ilgksqgg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163bqexgwgr.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163byqmjafy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kgjospbh.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163vsnwjypw.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163wahqvnhw.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163yaeoaeym.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xdbcdkuc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163yftglhqo.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163vzqaxhoa.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163aggzuljg.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163mdrljhpw.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163awbodcox.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163otmaqshp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163wulnpkhi.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163gdahgpor.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nnwoakoz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163limeblam.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163betmxnys.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163hhbmphfv.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163ktnmjrur.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163fobpvmiv.html

TS:   // 同上
来源：http://www.aibaodan.cn/163jemcfqki.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163esjqsoab.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163jpdqvvwm.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163wzrbqwtv.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163ulmrqwcp.html

================================================================================
来源：http://www.aibaodan.cn/163iqgqdwzu.html

G. 面向对象
来源：http://www.aibaodan.cn/163anzmekvr.html

================================================================================
来源：http://www.xuanzx.com/163qqtdgsam.html

[G01] 定义类
来源：http://www.xuanzx.com/163refliprk.html

Py:   class User: pass
来源：http://www.sxryk.cn/163ozajkocc.html

PHP:  class User {}
来源：http://www.sxryk.cn/163wmyyzuvb.html

JS:   class User {}
来源：http://www.xuanzx.com/163ogiudsfi.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163ltfuhbrz.html

Java: class User {}
来源：http://www.xuanzx.com/163rsmwrgsp.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163osxyhmff.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163lbrtapkz.html

C#:   class User {}
来源：http://www.xuanzx.com/163iaesrzbp.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163vumgukbo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163knsamtfv.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163oipjsbui.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163ufqnzrib.html


<!-- 参考信息 -->