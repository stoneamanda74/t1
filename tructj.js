外链999!wailian999！

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163usnmyiwk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163flxdltrj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163emvxjbnm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163dbkemjfe.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163dlulmbga.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163piwmdbbz.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163xsbkfjkn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163gystbdov.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163vtwzqeao.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ubwtsxes.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163huhkxpkp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163bxlnmsrj.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163uqrcecip.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163dkrtoqlp.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163axkxauwl.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163xwetvuux.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163gkmearif.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163vhjoswew.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163cvyzwtht.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163ybifzhci.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163xarfgxch.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163esiqixwf.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163kpoeqmhg.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163thjqmtij.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163xywojaaz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163qtnrwukw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vslyhpzx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163rdsokntv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163lpmjmkgw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163tjhxnfzh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163zzwdehbq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163uranaxcj.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163kzvbdnbo.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163kstqwcdn.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163hvajuafg.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163iiipuzmj.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163pxqfvomw.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163jvdvqhyl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163ecpuqefn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163rwtkfhus.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163avahlapu.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163xjeiwlaf.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163szsyjgox.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163hjkxbgek.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163lhnonqdg.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163xaocgmry.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163jqfrfnmq.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163sjdkvpqk.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163jurmvfln.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163gbydffea.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163xsmwgryt.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163mzjarcop.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163oxkyghyt.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163iavbaufg.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nthrsjuw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163wlerqvcs.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163bhpbcibd.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163wydlmwsr.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163bslqgyxa.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163ylvytyon.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163rlzxcpby.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163zzqtpxoo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ficassiq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163kqvybzqs.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163nhzwnchp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163rhbnuoqk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163lxiyeetl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163nrthwfrr.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163vgimdasz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163qqbgqlkq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163tcxzdkfv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ayxjdeiv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163fjvjbpcn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163awyysdhc.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163usnrubae.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163gwumgoip.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163jzpifpbk.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163ghklubfy.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163nnxeuqsd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163mpsohxrb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163bmgtqhzb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163pkfzqvjr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163vigvzmec.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zrlstvlt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163kdebyafq.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163vlegkggr.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163auljgyrl.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163qzjluimm.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163pajkbcqr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163fmhtibik.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163tivxwqog.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163rjzwcnfo.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163rkpstpsm.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163alkxhbsg.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163cpzqlssh.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163ulvquofb.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163yrgzdvdy.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163rudyyptj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163rbwxqabp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163mpvovuve.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163tnpmgyoj.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163tkvhfako.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163doqpsfds.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163ewkxxlbo.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163jertqcmd.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163xyhwnrnn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163hottqdzi.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163zjjybjrt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163fanhjasb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163houdvaaj.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163jslzvuml.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163vnnakjxw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163wqswjfys.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163xuehnrgr.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163vpuazqpx.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163cehphbqj.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jiocuuow.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163vkqnuvyg.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ztybhqzu.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163gsyxotje.html

Ruby: s.lines
来源：http://www.xuanzx.com/163emmcljgr.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ifzgmrlb.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163pvdvqwkg.html

Py:   if not s:
来源：http://www.aibaodan.cn/163dsxugzna.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163albgoely.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163fobueour.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ofccbbxh.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163nsxtnqoo.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163dbpwrdgw.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163osebffkm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163xbbneyqf.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163ucnqrrsq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163fvvubeoq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163vzddrptg.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tiuuaffe.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163xviojglc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163qqxxjmat.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163aucjmhie.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163ybtgqahj.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163ozvyjlfl.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163wauwetdf.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163pnlkkphg.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163zgvmlwjv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163nhtllbfp.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163fljtnijs.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163cxmrwwje.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163pzvnmqoa.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163nvzxctle.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163zvhalmoj.html

================================================================================
来源：http://www.xuanzx.com/163nfmzhdkq.html

F. 文件与目录
来源：http://www.aibaodan.cn/163rkfyjxpn.html

================================================================================
来源：http://www.aibaodan.cn/163ionkndfa.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163catozsvm.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ktbikciu.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163aactnrem.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163dksbogag.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163htzcjlxh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mgqpktei.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163oouozqkw.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163wxdolcez.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163pvdvcqhu.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163skhgemai.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163riuyndow.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163yqkhosdb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qrqelyqi.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163tqbjdkgu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vkguwnmp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163kwtyajna.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163aunwosaq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163czeaaczh.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163hvrgrwmp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163dizqzjrf.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163lqqpizef.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163feftbayo.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163nfjgwxpp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163yzdnmqmp.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163yrkeizqs.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163cuszfcsr.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ikvfjeka.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163dsmytvsz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163yblgcumc.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163dbsseibc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163tybbgibx.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163hngtroja.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163gpmslump.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163oijmbadr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163umsszofy.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163bahpoctl.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163eijqmwct.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163uqvuqxwc.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163zwqkemes.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163gfmyqsfg.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rhouepgq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rrdvyhqv.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163jflrrsfk.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163witglydf.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ywyxmeal.html

[F06] 删除文件
来源：http://www.sxryk.cn/163tidclidv.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163wxmydksf.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163eewgqkyl.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tkqxcsya.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163qjjfemnl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hedripso.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163loafglqv.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163oosqrcks.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163nxqkxhdp.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163qfayejco.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163bpsdohtb.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163ijzhxjmq.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163wxbtehaz.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163dpgfynqm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163bzpfzfgp.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ugnewuvd.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163txvniyau.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163diiwfrmm.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163somtpmvu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163ckbocbds.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163eehqfkvv.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163rwkyruqw.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163qynkbjmu.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jjxdnzha.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163zamqeive.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163gubfjqmc.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163fbqkdcvl.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163tsgxvhct.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163mxjkhntu.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163goihfypi.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163pelfaigl.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163itduilfb.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ggtieebu.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163grhvixmf.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163przhcgrc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163zdsuavtt.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163arfkrdtc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163jlebneab.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163bdgplwia.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163txvtuhkq.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163czaxnnzj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163dtsvsmbj.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163ylzyyhyy.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163vwrxyazd.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.aibaodan.cn/163vaecpqmq.html

[F11] 复制与移动文件
来源：http://www.xuanzx.com/163dctnngxt.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163euessnzn.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163ovywmaxm.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163urlcvxeu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163fthinsck.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163xshgokgg.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163skgzzxnw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163nvwcecef.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163vmzsoees.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163gaulrzjy.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163bytzmzjx.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163mislefvx.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163gnqbajpx.html

TS:   // 同上
来源：http://www.xuanzx.com/163bsmsuojc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163ligqxjid.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163lzhdbddk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163scwacxrs.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163rqbzymvj.html

================================================================================
来源：http://www.sxryk.cn/163xqiuairx.html

G. 面向对象
来源：http://www.sxryk.cn/163hmetrixc.html

================================================================================
来源：http://www.xuanzx.com/163nmyipnlm.html

[G01] 定义类
来源：http://www.xuanzx.com/163qebyinli.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163menvylgb.html

PHP:  class User {}
来源：http://www.sxryk.cn/163woogpfda.html

JS:   class User {}
来源：http://www.aibaodan.cn/163mcigywtm.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163oeyekngi.html

Java: class User {}
来源：http://www.aibaodan.cn/163whyupdou.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163vrlzvgsk.html

Ruby: class User; end
来源：http://www.sxryk.cn/163dgqrhhzj.html

C#:   class User {}
来源：http://www.xuanzx.com/163cmmqcpsp.html

[G02] 构造函数
来源：http://www.xuanzx.com/163nbkzscpy.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163bbjfvvli.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163zxumhyrm.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163yylkpviv.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163iiymghsf.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163mntvhczi.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163zndxhalw.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163vuajeqla.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163vskoqvge.html

[G03] 实例属性
来源：http://www.xuanzx.com/163opcztghg.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163rhnyrncu.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163wdkvmvnb.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163yntucdvh.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163emtehgqr.html

Java: private String name;
来源：http://www.sxryk.cn/163jdfcpqvm.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163upeyrjkr.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163cnqkxqld.html

C#:   public string Name { get; set; } = "x";
来源：http://www.aibaodan.cn/163npeojvbe.html

[G04] 定义方法
来源：http://www.sxryk.cn/163wwyybtds.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163gkzqqzlp.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163hoxnsevb.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163wfoggaot.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163dptiyxmi.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163hccbewgz.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163jvhiwijc.html

Ruby: def greet; @name; end
来源：http://www.xuanzx.com/163phunfgqi.html

C#:   public string Greet() => Name;
来源：http://www.xuanzx.com/163hazurkbm.html

[G05] 继承
来源：http://www.aibaodan.cn/163djgihhwf.html


<!-- 参考信息 -->