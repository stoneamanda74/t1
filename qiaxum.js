外链999!wailian999！

[E06] 替换子串
来源：http://www.sxryk.cn/163qsihcbev.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163vzckrlar.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163cuqxbkmv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mqtcznhu.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163agygvmft.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163acmlwbxf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163xmgixswb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163fonymkqd.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163qdkajuus.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163genpvptv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163xjhvypnc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163jgpraito.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163lpfzfymr.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163fmhvdreq.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163rlilcfti.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163buxakjhk.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163gfzubyzy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163djmzisvu.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163wlswnegn.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163somyzkpu.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163tpbpxfqv.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163tyuyfqzy.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163tmxekexr.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163bddprytt.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163pykfdbay.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163zqytzsww.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ljliubwi.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163alhxvjvf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163hcppenon.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163xpqxjgwn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rzotujnp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hkydeyzx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163uqefoytw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163wgkykftw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163vvixnver.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163kvjhudtt.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163aygmhqwz.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163qqowtauz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ywagpfto.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163spdpnrev.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163ekqovfio.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163crgpkmaw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163rzqjkfst.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163pkxsuuau.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163tyogqvgk.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163klepgdwq.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163nnisopas.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163dihyftnt.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163yppqcylz.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163azpioudv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163xivqshwd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ixppwrck.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ckbwndwo.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zehqcmvo.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163mpmsdnoy.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163annwqzkm.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163rgwqtegg.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163fmafllux.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dmokvtyx.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163jacvkcec.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163kggkrpis.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163psipydax.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163wyyjzagu.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163taqgzims.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163faowhwqt.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163dtuhzdyo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qybdfcax.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163smcgqqrb.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163yqrlagkp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163hqvwopza.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163hmnuuuff.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163khexrrdb.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wgmljump.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163gtuimjxf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163zgwzaeyz.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ohdlhdwn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163qorixwfu.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163olzseukj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163zxrxqwwb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163lorkyngc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163egyddoze.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163wttqusxl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163xivwtewj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163nqwhytty.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163axuoxreo.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163uigsxrjf.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163qkejyled.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163ihwhgzgd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163khlbzafr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163zvttecnu.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163lblnhxkz.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163wyxtnggy.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163jrnorbge.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kiadegnk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wadspntf.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163pkifxjnw.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163zdnddizf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163kilswvmu.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163krostuli.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163aqiomlxo.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163xnjnymdv.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163rwymwpse.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163boprpgkz.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163fcyarwda.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163pdlpthyr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163enwfoumw.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163xuvaovyr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163gvipjxho.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163abpgqcxz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163gnxurvlw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163owsouwbb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tttmhvks.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163phifxrvz.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163okdzarld.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163etrkmoag.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163siblizlz.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163vdrnawzy.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163exxtugai.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163mhhmbgxf.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163osybompn.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163jpnhfjln.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cqqcrdqk.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163muwibmph.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163oewiyykx.html

Ruby: s.lines
来源：http://www.xuanzx.com/163mfkyazkt.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163rerjffxt.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163lxzkjcuh.html

Py:   if not s:
来源：http://www.xuanzx.com/163negmtuxa.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163fjkuvlmt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163nkbeijax.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163xqdadbnm.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163qzkeyhht.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163cvewielp.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163crmctqcu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163mxqazesl.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163cxmqicrd.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163oucgxxip.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163deikxcgf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163lsbtqtso.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163avhnalwf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163lmzcivps.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163bmzquokz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163fpjkcmxj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163wrenobeo.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163dvdmezxy.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163pmxnsthi.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163xvxqnsal.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163apkpchtv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163aeilifnv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163caivrjbv.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163mthomxro.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163zhauozfp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163klwuvpkc.html

================================================================================
来源：http://www.aibaodan.cn/163yzbixuys.html

F. 文件与目录
来源：http://www.aibaodan.cn/163ypmvcqdc.html

================================================================================
来源：http://www.xuanzx.com/163hrebdtrc.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163cczkcqpv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163vvanghql.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163hxnjkzli.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163mmmhiood.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163vrkvcczi.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ofqkfmqb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ceqaszwc.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163rzzfwxun.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163jmcxovzu.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163xeatlqgr.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163rrvdwada.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163mverccid.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163ruboylco.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163exnrvynj.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163uzsomgvt.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163kzprjmxo.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163jdalupan.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xslyhacy.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163admuhkua.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163sgokabfa.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163zozogzgz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ifquuzdu.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163nrmhhqlt.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163ggxfhzha.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163lilqhniw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163lehvjbuy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163gqrjrmhi.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163udzhmaep.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163bwnckyjr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163ztuxbjxu.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rcnajpgb.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163pshawtkl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163jnfycfet.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163phdfvjvk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163vsmkouqo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163tzainywc.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163xtaanlid.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163bvvenolc.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163eyqrlaqr.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ldgxhfnp.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163maxvquue.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fjygwbeu.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163tmwqqfml.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163lpbnraan.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163vkwwbifb.html

[F06] 删除文件
来源：http://www.sxryk.cn/163bppjjvju.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163wtpghlyz.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163qtlljgxf.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163wziarrqr.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163vdusqkaa.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mpljcsdc.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163zgskvbzo.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163sylookxs.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163bryajdhm.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163kerywjku.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163xclwefup.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163unqqwjny.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163hpjfkriw.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163ttbxupac.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163larvuzgv.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163sdztbhdg.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163cccapwnl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163kgpsuqkq.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163nkmrcrtx.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163aemcgqhb.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163msecofje.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163plhkqqsu.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163spipselr.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163qwmrecls.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163iujhdkyf.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163wiedimqn.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163zqgktses.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163lioeydke.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163ozqqdfle.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163gotfsugn.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163njcirtpn.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163dxcbcdgf.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163dunurmry.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163tnsfabjj.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163xhjimvbf.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163pbjqcbyc.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163kqspvkzv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163mbrbsvrw.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163hdsozflw.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wyyapwkj.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163jhrncuml.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163bpztfsib.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163xtcwlxpy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163amngodvd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163paunzeix.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163osvjukeg.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163okrgrmlf.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163auolxbto.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qlpfwzsp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163asvkqxnr.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163wqzybqpy.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163gajtxtpy.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163xzbrttpa.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163pujrdtyv.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163djujfybd.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ymggplbq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163nleusbsi.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163zrynlqjw.html

TS:   // 同上
来源：http://www.sxryk.cn/163iexzgvrs.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163ytwynlyl.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163sjtbeuez.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163xcpzvnds.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163hqptysfe.html

================================================================================
来源：http://www.xuanzx.com/163vbhkemow.html

G. 面向对象
来源：http://www.sxryk.cn/163rdezaelv.html

================================================================================
来源：http://www.sxryk.cn/163cvfxfaqh.html

[G01] 定义类
来源：http://www.aibaodan.cn/163jjijupdm.html

Py:   class User: pass
来源：http://www.xuanzx.com/163fsqphfci.html

PHP:  class User {}
来源：http://www.xuanzx.com/163lehzdmzk.html

JS:   class User {}
来源：http://www.xuanzx.com/163izekqxhk.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163loflgzdl.html

Java: class User {}
来源：http://www.aibaodan.cn/163cjnimnuh.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163iiwvlwnm.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163fbzfjppd.html

C#:   class User {}
来源：http://www.sxryk.cn/163guizcyam.html

[G02] 构造函数
来源：http://www.sxryk.cn/163uqgwkaqt.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163rykviyxx.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163fzxyoylj.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163xzpvpjof.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163ywrnpavr.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163zjaohofx.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163iiuonong.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163lrszttud.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163latjwnod.html

[G03] 实例属性
来源：http://www.xuanzx.com/163czdwuwgg.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163nhpynyjp.html

PHP:  public string $name = "x";
来源：http://www.sxryk.cn/163qmxsnqed.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163lmnjxsry.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163cskfxhgp.html

Java: private String name;
来源：http://www.xuanzx.com/163yctsglry.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163rfpiyfnr.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163djxdlgck.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163eucshkzu.html

[G04] 定义方法
来源：http://www.sxryk.cn/163sjrkisal.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163nbzokvay.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163asdhdfdo.html

JS:   greet() { return this.name; }
来源：http://www.aibaodan.cn/163ugiamxrr.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163bewurary.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163rxrqqtgy.html


<!-- 参考信息 -->