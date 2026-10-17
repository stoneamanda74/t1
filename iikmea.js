外链999!wailian999！

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163jgwecknf.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163kdjjbnwd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163erivwtjp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163fdofslcv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163mffotsby.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163yuxijwbu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163hswqxqly.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163myhgwazo.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163vnprlvin.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ofuxzhcm.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163xezyvyha.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163nlbbzqzm.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163ctlkrxfk.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163hfqmjavr.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163pjbxjdst.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163vrijfipo.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163ibzvcoer.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163oyjreyms.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163lddptkgj.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163brreuvab.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163mfssgbwz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163vvzabgdi.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ztmuxjyo.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163zwrgrjgp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163xvamtawp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163bfjhcauj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163xhkedhto.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163oftbcgrp.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163wnfvbajy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163fpphbkze.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163yejkgmug.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163nbhryxhk.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163vllbileg.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163wgchbnxq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163vhhdtezd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163luvkupql.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163ycfjosxm.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163mljdnlhn.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163ydhegvdl.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163hckxkmer.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163oinityfs.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lfossfgr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163xyoxxypt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163lqfahxnn.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163gqropcez.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163eajnakdx.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163obbikefs.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163fgpobziy.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163midckpcb.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163oiolwcju.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163tdfnhupw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163yklkqlgd.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163emdlpxjo.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163hgrszzxy.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163gklysyix.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163qxwpiagu.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163bghdoszv.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163zuqvdyjn.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163mktcgvan.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163eqgipezv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163btwyyfcz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163zzkxvxbr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163xvmtvwwq.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163expoexhd.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ammlzdat.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163flvlxtxs.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163rjyfckaz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ccoyvsuj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163wymwcfrs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163gubxbwcp.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163xujjpuzf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163hrftgxtu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163qmgvgqsp.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163reytdvuo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163bsvznzaq.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163fauuvwyh.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163diwtrogr.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163upavjvwn.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163wrjvwqac.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163qqgsrumk.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163yeuxvjqt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163vywegsyx.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163dcjpnywc.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163rmjgsool.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163wchtvaqo.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163wprynkdk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zkauvnxr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ecrqnjzy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163txbmbbke.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163eabfdxqi.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163zfikmrwp.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163fgpqltpv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163srmjjhmd.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163qmthpkkm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163btiopxrj.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163tpbouxul.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163umxkykjh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163vlgrnnai.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ccpuwqru.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163kkmeubfm.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ycjklkzv.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163rqgwwoqc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163sdiwvqbi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163icekafby.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ahbgmoys.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163wsjqowmf.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ztiuitwk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163idfzjrtx.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163phgroatc.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163bfvvyjaj.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163jnbznhdq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163uprjhjqo.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163drorlqnc.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163swjdgshw.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163jfdnpvgh.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163aspaultt.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163djzuvyzq.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163elkfxphk.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163urbplzan.html

Py:   if not s:
来源：http://www.xuanzx.com/163onxeedoi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163tixnzzgl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163zspcymgm.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163gxurhbhc.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ocrxldxc.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163ibxrkqax.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163yeqldqhj.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163bdvnlhzk.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163tohapnph.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163dyjxtnjg.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163vsyzqdzp.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163pndfrihq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163sbbfqcvr.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hiqfxyst.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163riyyhsqj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163seqcupgg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163dqvycedw.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163ikabjomj.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163yfetcram.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163vsvnmymu.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ctslyvkg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163igpqnaso.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ofyspcug.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163gcidjagl.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163eufyjnyt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163zjqlqsgl.html

================================================================================
来源：http://www.xuanzx.com/163mdtjpgpa.html

F. 文件与目录
来源：http://www.xuanzx.com/163uwzfcmlg.html

================================================================================
来源：http://www.aibaodan.cn/163tckbbowl.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163dpetcsrh.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163jzwbonrt.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163omfwjgbj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163vncfkxnx.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163kzcqkvcv.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dgshyxkr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163fesytlmr.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163gemmgamm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163rrlikopc.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163bxtnslke.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163tsnqibjj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163zrxexest.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163bwxlkhre.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163uegwzjpj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ejtwypik.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163medtyhmf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163kzvvjdny.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163wyixbyjr.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163yksqpokt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163mjasnlys.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163cwtpxhxw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163ghtbydcq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ccioljxy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163fhbjljhf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163crxvxypi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163gawrnxqn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163xfndgvze.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163dfubwzpv.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163mzvoxtpd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163yneyyqki.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163yuwjbmna.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163rbbrebfv.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163hwiqyvhz.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163lgvhkmes.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163aooqjggr.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163nhubcckb.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163zhxihxhc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163crkronyw.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163asaaknro.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ghfcyhoy.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163pceimxpt.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163mgvtomzb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163ujjlaxoo.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163mjitorby.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163hdwdxxyh.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163zqslfhrq.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163wkabehyz.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163xlllecgh.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qargehhd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163smpyqoaf.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bdlfdshz.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163obqeufjd.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163krpaxamo.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163xnqvsigv.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163lioqjadl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163uxdttfws.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163mehqdngw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ikfhdwch.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vdepflmh.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163qqseisnp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ecwomahb.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163gsnvjexg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163sikucmei.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163twjrxuhu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163zgjjhyyo.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163hzdfhzqc.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163vfsopybt.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163uwhjnrfc.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163scfkpufi.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163scakpaqj.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163fkgtzsol.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163hsjewkds.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163sknnwewk.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163gowkovkn.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163nitmfohl.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jyfhvuti.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163opwrjcau.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kbngiqax.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163frzewemz.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163zuorbwer.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163wibttpmy.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163cdmymufn.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163rqmzmhcp.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163gwfxezag.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163whkymemk.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163gyasbhjj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163yfdflidr.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163yucsbkly.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fphoexlh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163umghrylk.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163dsfvbrfs.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163dpafupea.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163yjsozcdt.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163urnfaczy.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rvbdudft.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163vlwmkqtb.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163afchlztw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163enyvjqpu.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163fenisdwa.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163mzrfevuk.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163iyyrznck.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163qfvcovnd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163ftzubypb.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ugnyatuu.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ihjtenfq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163gtwpkepk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163jouqwuat.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163waqdogov.html

================================================================================
来源：http://www.sxryk.cn/163bnrejoup.html

G. 面向对象
来源：http://www.aibaodan.cn/163sejsnxnt.html

================================================================================
来源：http://www.sxryk.cn/163xfwldiuc.html

[G01] 定义类
来源：http://www.sxryk.cn/163dksoutgk.html

Py:   class User: pass
来源：http://www.xuanzx.com/163advdewzc.html

PHP:  class User {}
来源：http://www.sxryk.cn/163mepzhisp.html

JS:   class User {}
来源：http://www.xuanzx.com/163zftpndzz.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163ppwxirwb.html

Java: class User {}
来源：http://www.xuanzx.com/163lyhiczdl.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163opkhkfiq.html

Ruby: class User; end
来源：http://www.sxryk.cn/163xgyovfxd.html

C#:   class User {}
来源：http://www.sxryk.cn/163cprjjmmo.html

[G02] 构造函数
来源：http://www.xuanzx.com/163obihwlzp.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163nzuxzoes.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163xtxizfth.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163tqlzdbfz.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163fpdfunsd.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163cttnquje.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163izyjvjiq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163gxpbepis.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163cggotwle.html

[G03] 实例属性
来源：http://www.xuanzx.com/163bwovrhaf.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163pdctsowa.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163hwvbhgyu.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163zsizqrcw.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163rvkogdmm.html

Java: private String name;
来源：http://www.sxryk.cn/163vnzqzosu.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163behmkdno.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163cjdjzbop.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163krygjwvf.html

[G04] 定义方法
来源：http://www.xuanzx.com/163onbrapbg.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163drlrcdld.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163qpgqfnbl.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163resmhoqt.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163flirscka.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163rosdztwo.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.aibaodan.cn/163jhvptnid.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163ujeaufkt.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163fwxlenxk.html

[G05] 继承
来源：http://www.sxryk.cn/163kbaulcbo.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163hqhznywk.html

PHP:  class Admin extends User {}
来源：http://www.xuanzx.com/163gbbhvazg.html

JS:   class Admin extends User {}
来源：http://www.aibaodan.cn/163obdhmvjj.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163vrzxzbnn.html


<!-- 参考信息 -->