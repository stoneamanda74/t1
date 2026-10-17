外链999!wailian999！

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ecprojdj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163tnxoezib.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163rlxtenrh.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vmemqobg.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ufxjczqk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163osolioej.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163mzpqndzd.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zykpjndv.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163yrwkhxzb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163otneijxp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163jmwllcpj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163qzzntzhv.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163wzajrghh.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163qsnjpamy.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163eieloekc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ujpncurd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163sqqxqdsy.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163thweknpz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163vdzwbkmk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163mmnpnfhf.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163mginxfwh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163dwbhdbho.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163auliodlh.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163xmacejqs.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163qvamnhmh.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163zzaupmct.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163optmoyel.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163volkohhq.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163gkwqwkkb.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163pziusmzp.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163dbzfkxmy.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163wcnsunjv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163cckgvkyw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163xxzudzoy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163gbzslesk.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163yzjputcr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163tkarsxfv.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163jzivrowm.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163agzdovmc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163npghvejr.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163rbfbsynl.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163bgzmgckt.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163bxrrnzec.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wpaeflhr.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163caipgpfr.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163kwinadmt.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163dqxhjrlr.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163qulakntt.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ngbmkmwg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163jzsjaefj.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163yyxgaxib.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163byemzvqv.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163gcfoahkb.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163epneqacj.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163dcncxhmd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163tvofmzmr.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163oilxwfjv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163zmkgxzwf.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163joicpuqm.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163azccjusr.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163eqprjteg.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163todynosw.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163zxacjjol.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163rqllehrt.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163prrghxey.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163hphrapbt.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163djutxwot.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163hzzpxgvd.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163xmbcsltz.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163muxjpjyu.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ngovxscm.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163htrnbbba.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163clepxzru.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163vlgtzspg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163tsczfdlo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163jwhwgxze.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163hbmvarqp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163catoqyre.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163raqzuekg.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163hfsxsbvf.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163cxkyjwup.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163vjqeogwo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163oivjxajc.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163iuuenerl.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163pxkpaoxv.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163foveixhg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163biwgfibi.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ppxrjkfe.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163rvxodclg.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163djqathzk.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163uyyugtdj.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163cotijglh.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163zpobairu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163uzonzfzx.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163cqlvsobo.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163zklpcdst.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163htmzxaci.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163avrqyvxe.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163optjqvzr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163agvjtnej.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163rclpnotn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163oynxrcyg.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163bjivjfqz.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163eonbeibv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163jorixjch.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163cfvothdz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163hgsbqtwf.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163vvjfzxly.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163oovyssyz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163jtcgjicd.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163shijbkuk.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163nxyiwyxk.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163jwssevou.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163kjlpyhoh.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163orkzkvkj.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163cwetcurl.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163iaexcxqa.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163izdebagh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163dzmhenwu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163vcyqfrrt.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163fuvnqvuf.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163wasqxfjj.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163glasfhnr.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ujzmhjai.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163dmgqdnrm.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163bbwdvmtd.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163mmjakugl.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163mjmjwnsl.html

Ruby: s.lines
来源：http://www.xuanzx.com/163mmqljhho.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163rygwvndp.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163kxefunab.html

Py:   if not s:
来源：http://www.xuanzx.com/163ipslshai.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163jmnnxrzy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163zyvdercy.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163nqhlhucu.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163nsrupcut.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163jniypejy.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163pjnqqbsr.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163qpsvpfbg.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ewjtxcek.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163unfsmfgd.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163lafuryqz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ypzomjuf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163flxogzog.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163cizsbazc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163gbbbdfhg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163taeiykyl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163avvfxxbm.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163ebtodwee.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163fnercnat.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nnxaoecb.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163qhbyseip.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163nqjynusk.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163hqyjvzbx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163syahlqcw.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ulgwyiks.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163owtytgca.html

================================================================================
来源：http://www.aibaodan.cn/163nnasoeuk.html

F. 文件与目录
来源：http://www.xuanzx.com/163eeongrqm.html

================================================================================
来源：http://www.aibaodan.cn/163ieebnupp.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163qvoozhaw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163dhwnndwg.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163ouhasovh.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163elwbeeru.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163jordterp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163cnrikcfj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163snhopruf.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163qcpuorlk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163yeqwbefe.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163zerelojr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163znvbdgwr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163igktlmtg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163djibkfok.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xrxffyrw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163gzudgnah.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163emyottlg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163gwswhhap.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163oyfiwczv.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163jivutplf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163yarwugfk.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163dlwzudgp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163mcildwju.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163tsjlgkbw.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163uijkxgzl.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ccripjde.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163ifcekvxp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163vsdvmmdl.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163enqxhnnz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163yrngdknp.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163tjundyyh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163wxevxwfo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lvvmqpwf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163zrvpyfxc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163xjqvmgil.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163cdajcgvh.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163cvzrkekd.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163kxjdenwy.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ueemjimo.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163yxnchfnb.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163elqhyvkm.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163fgsmcglr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163heahvcsg.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163irqrpubp.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163piugibps.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163csxrpyvz.html

[F06] 删除文件
来源：http://www.sxryk.cn/163vndlpere.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163vapsqdnd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163vxxublay.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163hswgkmku.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zdpygdeb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jogeismk.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163hdvreadq.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ymktgemy.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163qpmnbdqf.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163vomvpyjt.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163taeeilbu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163itsazgti.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163diotyjza.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163yjqfjsre.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163lonmhytx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163cnvujajc.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163zpigewpy.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ljhnnkpi.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163qbawlzsx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163zbwgidvu.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163zsczaltf.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163tqyvdgbn.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163woukjsnu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163keuywvyu.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163ytmwqouk.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163fkkcxrqi.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163wbssvrnc.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163nixvvdpg.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ybbededo.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163yvddzrsk.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163nvyboxxs.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163lxlbmrjn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163swdsazir.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163hcimjucs.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163llzysqjb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163mgglhzcu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163jzrdmyit.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163irlacsiy.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ergfngqu.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163zupqvnqs.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163tyadwxcy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163oiachawv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163bdtshmdb.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163zzkjlsjq.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163tjulmhoj.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163elnkqkfo.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ebmnjgye.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163beawoavi.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163ujolwusv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ikpfgdjl.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163dodogyex.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163qiwjrngr.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nwtuzixd.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163doygfcpc.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163kmmkvwjy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163lvjnktmc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163arljbtyo.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163znzxjfqp.html

TS:   // 同上
来源：http://www.aibaodan.cn/163nmtqjnry.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163tivcriim.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163qwlhsgvb.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ivmbyjvd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163uvdxmuak.html

================================================================================
来源：http://www.aibaodan.cn/163qbtyynrw.html

G. 面向对象
来源：http://www.sxryk.cn/163ltkvtxot.html

================================================================================
来源：http://www.sxryk.cn/163awimpfqn.html

[G01] 定义类
来源：http://www.aibaodan.cn/163pxhveyfv.html

Py:   class User: pass
来源：http://www.xuanzx.com/163iqixiblu.html

PHP:  class User {}
来源：http://www.xuanzx.com/163skwflidm.html

JS:   class User {}
来源：http://www.sxryk.cn/163vqwrhjab.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163tzbtcblt.html

Java: class User {}
来源：http://www.xuanzx.com/163usganjap.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163qymygpje.html

Ruby: class User; end
来源：http://www.sxryk.cn/163zyfiezvl.html

C#:   class User {}
来源：http://www.xuanzx.com/163chhgqvck.html

[G02] 构造函数
来源：http://www.xuanzx.com/163tmsrnrmg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163jcxazoqn.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163izmiueif.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163xphscakt.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163pncuxbzj.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163odyuomne.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163yhfujwuz.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163jlgqbtqk.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163pcspbiwt.html

[G03] 实例属性
来源：http://www.sxryk.cn/163zcxbkxex.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163cmexlzqw.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163wxsimphd.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163duovpndb.html

TS:   name: string = "x";
来源：http://www.xuanzx.com/163cskevnrn.html

Java: private String name;
来源：http://www.xuanzx.com/163kqqcvwor.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163haaiwqfj.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163hjnwoszo.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163ygqmtslc.html

[G04] 定义方法
来源：http://www.sxryk.cn/163kmhbvwws.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163ermyblmy.html


<!-- 参考信息 -->