外链999!wailian999！

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ficzffzf.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163lduqrjkc.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163yqkgnqbx.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163nogkncyl.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163xeukrzyn.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163hnevkqcy.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163gumlesam.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163sdvvwedo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163zpwnzhvw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163crwjzobv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163mzbbukdg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163szyepaix.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163fagvyxpe.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163lwklsrue.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xywjfjgt.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163pommslwh.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163diburkux.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163gsqjwfdq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163jnrhznbt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bbnlfsiy.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163spvhtbyo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ecjhjnra.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163hxjzrplf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ocnielhe.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163tmthlnft.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163kwqrlnzo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163fsslgnfe.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163lnufrpvs.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163qotwrnyx.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163yjbyuwqc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163hfhmzvxh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163silghgsm.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hiwdpqvh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163dhpngogz.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163dokgtoyn.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163hbzxavyi.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163hptgjkrp.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163ybuhhmuz.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163hrtcmayt.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163bdwusfls.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163xuwscitc.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163dkbctgly.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163nnyxsdlw.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163fhhndvls.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ioisjwvu.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163frhrczue.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163elawodpl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bmtfvqrr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163duquxhjj.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163bkdgrkeu.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163dmcgywnu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163sajbdakr.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163nnaaikcg.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163wmsetgei.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163mdwhjnbr.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163wpepiczn.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163jkdnystj.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163hhaazyqx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163wztdytmv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ikisagnv.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ezxwhiyd.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163xdwjdaww.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163erkezvll.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163yeipmjwe.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163cvpcqywl.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ayiwevcq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163buioqvga.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163wzbyccfh.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qzpikznw.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163gsfadkbi.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163smywqaft.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163asdvwwlg.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163lqknovcr.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163palaubpv.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ysssgxri.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163vmsnetne.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163dvergyvx.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163kombjwlh.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163jcfyuvxw.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ykghwcji.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163jjjicrol.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163hxgcbuzj.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163zcxkrkpn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vnzvcort.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163lhfxlbfy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163kqvdkdqj.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163bxpxokfe.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163nhobmdzz.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163dtcqkwnw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163ulcydnug.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163mqxnnvxu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163khgnkdvk.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163asfpkovs.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163jcfscigo.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163uapnmsrh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163kqximpcx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163tqbyavas.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163kdfubjad.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163jxdailii.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163oksfrrbk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163dlouqgru.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163wdpyrtzt.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163rbilpmiv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163fhgwfqyz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163vospugkm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163qtbfromx.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163jsvlvhuh.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163xigyujkj.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163rrbjlhjm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kzuhkzpu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163eqfzvxpb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163kxcwgsjr.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163unygdiwb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163hgcvrvax.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163rwxmcvmj.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163nqcwndhu.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163zikxaxzk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163ocejmswx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163snfwujyq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163tdqmkxjs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163hjlpgljc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163imcgsldy.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163mklyibsg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163hlbbosod.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163idazofpf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163yvxcxexm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ggzdflss.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163mshtjszw.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163fehjupzo.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163oonxgggt.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163pbishncv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163gjcufqef.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163wzjnmocu.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163nohemcjt.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163hzvuleoa.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163bcchpfqr.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163hilnotli.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163xitbpofx.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163yptqkalu.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ajevjqrl.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163bviwquho.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163rjigmpgu.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163wgmyiqdq.html

Py:   if not s:
来源：http://www.aibaodan.cn/163aspxqtvm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163kjrqahzr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163zoroxpnx.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163eilohags.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163kdroepdu.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163kzrurnax.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163ojuaziks.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163foftqutj.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163gnxaztae.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163cuxrdrxm.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163lgepvahq.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ygwctdoj.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163whassypf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fuuolzfe.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163fhabmjhj.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163uxvstxmo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163fhuevgpc.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163bzqvjllx.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163eozldzzk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163lckenkjs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163gioevkzd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ddfuhohj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163yjbcqrqw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163ylegnauv.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ffwqtiur.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163kabapphm.html

================================================================================
来源：http://www.sxryk.cn/163yexkilof.html

F. 文件与目录
来源：http://www.sxryk.cn/163zkaxdkoj.html

================================================================================
来源：http://www.sxryk.cn/163jithqxyh.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163wjxbltjq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163axhhihnb.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163rnrgxqlb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163zbxvvjvc.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163lqoewvdk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163nymhzrww.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163cxjlsvvy.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163spocfpzb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163spcydwlm.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163aykjtjut.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163oguvgqha.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163qnwijdlj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163xycssvgg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wazoepcp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ncckdklk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163skllmyzn.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163ijhpttcq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163wpptepqp.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163xyhpoxqt.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163zoqzaiwx.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163rcfwfevn.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163fcleppqa.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163rxsfnmsu.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163hkbnfrrh.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163kdscytfy.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163kikjqwtu.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163zftfopzi.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ihjphxgp.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163kvqhmgwa.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163yarylvpm.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163raejqepl.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163edtkqqqh.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163encqkjxq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163bnuseobf.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163luufsftm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163lwxfmkxp.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ikxdusqj.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163uidbevvs.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163edkjjczl.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qnpyhaqy.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163yknsslfe.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xgfwsibp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163fhrxbinf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163phrkeqib.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163ggflvsvu.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ufjmndfv.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163kaqaxrqd.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163uavgycsl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163vcdnuvmy.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163fopahuqw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163njiahxaz.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163hkplcsbv.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ziroutyd.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163kcubygvz.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163vzdibyoa.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163mciszkcc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163eyognylp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163fyduugcq.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163qfbjofiu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163fqqwvuih.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163jzaxcycf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163yhjlepkd.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163teginuvv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163bssfbcsy.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ifztggip.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163zwjrkgii.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163eikaqlnt.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tklkzdje.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163svtfhrnf.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163oqvwbhav.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163vasrfzeq.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163ikgtagxi.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163fflrvxje.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163poqsphop.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163dzjmherm.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qfnoamwo.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163uxlkrqva.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163txekoabu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163fvyafysv.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163bdmuywqf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163slaukvzg.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163rwnnxtzy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ttqgbtjz.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163uetcdjui.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163wvycjitx.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163jarcaodq.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163kibmtcsb.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163uxpbptjy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fdilcoky.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163mtbufxwt.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163xksszymy.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163oqxfhmsv.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163jsbovend.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163lsjezyaf.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163uuorlhpx.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163kpnyrgqo.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163kuwzscpe.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ztdwxkgz.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163taxqzbig.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163tdcdmdxu.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163qpratevy.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163fhgnjvjx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163jukspjos.html

TS:   // 同上
来源：http://www.sxryk.cn/163zgjwkeet.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163usanmjnb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163otumqlvc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163dtnygmfd.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163jpuzjivn.html

================================================================================
来源：http://www.aibaodan.cn/163quddplqp.html

G. 面向对象
来源：http://www.aibaodan.cn/163cnzqyxft.html

================================================================================
来源：http://www.sxryk.cn/163macnnqjj.html

[G01] 定义类
来源：http://www.sxryk.cn/163dwloyzri.html

Py:   class User: pass
来源：http://www.xuanzx.com/163zbfocrep.html

PHP:  class User {}
来源：http://www.sxryk.cn/163ujnfdxnw.html

JS:   class User {}
来源：http://www.xuanzx.com/163ebmzjgnp.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163hqavvbzp.html

Java: class User {}
来源：http://www.sxryk.cn/163ubrqlezu.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163piihfksv.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163ofewqmif.html

C#:   class User {}
来源：http://www.xuanzx.com/163odxwhyym.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163aychfyns.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163wqogheex.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163kvunvyir.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163kbqemwav.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163nvmfobzn.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163uduodowm.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163afzhqlxl.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163boydqmhx.html


<!-- 参考信息 -->