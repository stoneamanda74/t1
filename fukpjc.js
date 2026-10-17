外链999!wailian999！

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163iohvhjgw.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ahuinwae.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163yqbgewey.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163xhlyspru.html

[E06] 替换子串
来源：http://www.xuanzx.com/163midohlmg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163rmdxueok.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163jtxtswnh.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wtioybjq.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wdvhepeh.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vgbkgegj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163vgysnrvn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163yjcosjrr.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163wdfwbnft.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163zafspytj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163cqfkozzo.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163cazihwqd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163kjjvrwuc.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163gizpyxhg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ozxsjkkc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163wdnuqspm.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163oazmiefz.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163pmxwvgwd.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163pxdqohzl.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163mjrnybki.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163lusxvdgq.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163zobnnwqm.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163kxjqvbmw.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163pgrfgbjk.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163minurscl.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163opummqid.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163jeppoqqf.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163nogabzbc.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163nzgiclpo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163hqhqxgii.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163llwacqvl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163tiqwzptd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163aefonrjg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163kuresvkj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163arvnftxx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163mdecfdwy.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163bcejvgld.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163zsjcbdjm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163dwkpywko.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163azlkieyx.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163oounaels.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163wjgaizus.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163yqrjlptp.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163tvxapsoj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163qyejvist.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163gejeczjk.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163xxifzily.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163gknahcww.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kuciiyft.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163strvsxgu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163piiauzpl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163obxvfabm.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163nhcniubq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163immuqvds.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ppxjlnjl.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163vexzuxsl.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163qhtpgfny.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163mhdomzup.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163prgzljyx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ajbbibwd.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163jmvrerwd.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163icusgrhx.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163pxgpykiq.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163jpmaayqg.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163hxmgarbz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163ygpsyyre.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xrmyzwpd.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163fcznkmre.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163jyiqcmyy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163flqqdxwy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163jaaskrno.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163lpkjstvu.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163hkmponvp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163phvkfvjj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163wvpcyptu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163brlhjwos.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163vcxeemfv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163qlboadxl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163lqjckwvr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163xpmkzgza.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163xqupduqs.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163qpplppwr.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163qkyhechd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163mrgfjtfa.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163pjjtkswk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163brnxeycz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163qwmatqxv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ssvmhomq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163cgfzhvas.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163vegblmgd.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163ihtutaaq.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163wuwemrru.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163rqzwgdrf.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163oiflblih.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kdqjkbns.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163dyskfzqm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163lacisnex.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163qggbpnzb.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163wkfzhhyq.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163scgbrgrs.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163kdeuoogn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163zjrslxbi.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dydebfga.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163cxnxgcvh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163qnyywjhy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163xnkfzizc.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163imatjfxc.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163elbcdjzb.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163xugtcdhf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163hsnjeysm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163aysrmxpd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mgarnutv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163loofvwtj.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163cggmfsik.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163rzifsfos.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163sbzithcg.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163phoyivjo.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ttzlwxam.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163wcmmtuhj.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163okgemmqn.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163cdxxkrjf.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163nwrcwplt.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163nofuffzn.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163rjumeoyq.html

Ruby: s.lines
来源：http://www.xuanzx.com/163mnkxwgxp.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163dvznllnc.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163xnnxrlvj.html

Py:   if not s:
来源：http://www.sxryk.cn/163rygbsmiz.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163dvkqusfa.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163tvsvdlvn.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163mhjsbwbb.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163tquawqrn.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163xaabuqei.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163ktcsnvlc.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163jwunuyft.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163pwqddess.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163fjodsszn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163apmdeyds.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nbbnzftz.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163gezfwfkn.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163alyffqql.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163aohrtdtw.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163hmrgvuwz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163nsvbiulb.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163kufojvzi.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163zlmoqywt.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163qmdnvikx.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163etqinemu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163kauscjyz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163jfizmbwx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163gsxhahax.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163aosiviao.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163buwatqhs.html

================================================================================
来源：http://www.aibaodan.cn/163eqgmjwwc.html

F. 文件与目录
来源：http://www.sxryk.cn/163fbbwjxsu.html

================================================================================
来源：http://www.sxryk.cn/163pwhfbkmn.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163byyphuip.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163dtuboock.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163logjibie.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163cdbmjyvu.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163umllolba.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lqocpvkt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163mzdgtxtk.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163knxnjkeb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163dlcxouys.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163idmdpwac.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163oseykymp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163fygjenyw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163kshawoip.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gqiuiieu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qwikfdki.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163plvoikuw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163jrsspcgv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ohleqwzi.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163mfrfqcnm.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163rrryanvp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163nbkwjbun.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163srtpzmdm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163npwywvmo.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163afcoeuif.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163fnwemior.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163qjhypbhi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163gkxjdonm.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163bmgzpjny.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163htwfhjei.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163pouxrqqo.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163fgualzar.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163uarrmahp.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163tlxdqvqm.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163bzugiwfw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163znypjuov.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163lumofzlt.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163memrdehd.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163vxbwvejo.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163ifuahkmu.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163dywpsxer.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vybkscsp.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rzlgfkig.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163mdazicdg.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163mwmqkuyy.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163grfcnazr.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163dpmuscdt.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163xeqepzbh.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163fgdbjsaa.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163kmsgrtoa.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163taihmvzr.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163khrlzajh.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163tngzruim.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163uotzlbxp.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ttzxsgmt.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163poihfogv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163ijkkcmbm.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163vulgnraz.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vtbyzfji.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mrvtrcnn.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163ymguevtn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163dbsdnkbq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163ynufnhwg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163sqrmhdvu.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ziohcuqp.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163gtqnhjjs.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163xyegvnmt.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163bsguavof.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mwgpszgq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163pwhjbwmu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qhnxgwnw.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163gvjwtupv.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163wdcdtnzc.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163oetbhcqt.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163dwzojyni.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163icgyuniu.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kmbilcjz.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163fqiktuok.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163kysxxtup.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163rhbkkidc.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163zufjtvwx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163iokzqwsm.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163xzrbkehe.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163lkjlavvb.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163xdvvcjaq.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163gblkzvpz.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163wosaadsl.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163lhsfrkuo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163rzqwssmr.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xtaxnfps.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163zzbbhhlu.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163wwmrcxtb.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163guiwagqa.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163vwcdgwkf.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163bxdelnnc.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hzxaacsp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163tvfuaedw.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163xkqcvrzc.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fbbflreh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163ulmtzecc.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ktuwzwvk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163lvgqwczg.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163tpcgmrjn.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163hhthgdmm.html

TS:   // 同上
来源：http://www.aibaodan.cn/163hkmdzqej.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163vcaatxhh.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163ptsefsmg.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ueghhiga.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163fvtuhrec.html

================================================================================
来源：http://www.sxryk.cn/163gteibdsn.html

G. 面向对象
来源：http://www.xuanzx.com/163onypyxlx.html

================================================================================
来源：http://www.xuanzx.com/163qndqpcwp.html

[G01] 定义类
来源：http://www.sxryk.cn/163eotzjocr.html

Py:   class User: pass
来源：http://www.xuanzx.com/163hmtgzasw.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ysairowx.html

JS:   class User {}
来源：http://www.aibaodan.cn/163duvycjwe.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163zqomllbu.html

Java: class User {}
来源：http://www.aibaodan.cn/163doskaing.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163slxqzsjf.html

Ruby: class User; end
来源：http://www.xuanzx.com/163yacleqak.html

C#:   class User {}
来源：http://www.sxryk.cn/163rnfyrlaf.html

[G02] 构造函数
来源：http://www.xuanzx.com/163tsfyxbte.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163yysnsfol.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163swnawcqa.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163sswpezbn.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163ixfzllts.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163hafooohx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163qmhbobcs.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163aldtejxy.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163dtrmoysn.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163gnqfkjjg.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163cmnhjjyc.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163uvynyjyv.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163lhgxefmi.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163deusbfei.html

Java: private String name;
来源：http://www.sxryk.cn/163ckyllfpi.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163ngnsgcsw.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163yrddtaol.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163miycsnmj.html

[G04] 定义方法
来源：http://www.sxryk.cn/163okxepzeh.html

Py:   def greet(self): return self.name
来源：http://www.xuanzx.com/163wrcoebud.html


<!-- 参考信息 -->