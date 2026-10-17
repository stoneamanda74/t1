外链999!wailian999！

[E06] 替换子串
来源：http://www.sxryk.cn/163zltzmiol.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163ksygwkxs.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163agxvdaaz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hrlkscrb.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163tmyomftl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163xfbpjluh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163tgnahopj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163dcgbmcaa.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163uzdpmsnh.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163rlejskbv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163rcadzlkp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163etllognd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163ewdhqdza.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163grhjnfcj.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163hklkwxlv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163xbowuijt.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163qtqcirfb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163vmwuforf.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163xkztrjtg.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163fzrvzjmz.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163ceekwydm.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163kunajcco.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163zeodcoqs.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163iikknlqa.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163jgwyjpce.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163whkwwwyx.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163eqxicbax.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163cuhadfjo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163jzryzkna.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163nanuoejx.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163pcxrwrqm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163nxfbsdny.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ruhyfshq.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ijdiohat.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163mroaorul.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163zuskcrae.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163hsfiomsm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163nmwtqdjo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163pulhskvr.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163vwbnklij.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163phvqxrxu.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163pwocdkgb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163qblpmfkg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163qsmabmfx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163cqpwomdq.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163yqmbaziz.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163adxphyju.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163ymipflly.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163fuqwjzuu.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163txzmxyhb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163gjwbhjmd.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163jkasmzqo.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163sfpmeuvn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163ztjkqgdp.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163zjvcmbeb.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163qvjoummo.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163pnpnwwho.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163kuebstat.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gasvfzkv.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163qhgezsyd.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163pgrjynuq.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163sdiykfti.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163cetlcajg.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163zsvikkcx.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163valmtkzj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163fgzbvhfc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163fjviedeg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163gwguvxyl.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163yvvkyzyu.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163awgsjugc.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163htdslczw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163qlvetlcx.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163atgepzqi.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163gkfvsbvl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163xvfryjpu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163izrelpzi.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163idmznxju.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163ffiagyla.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163girpwyfs.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163cpzonxwz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163nfyvhhdf.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163tiiadcbp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163cxnsfaqd.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163zbwscltq.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163avsgngoy.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ibclqcmv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163pqafxion.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163vgrzbufw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163fopgiixk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163mhkrvjil.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163zfogfkmb.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163fhprkhin.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163iswrtdog.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163qezwtggd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163dphbuibm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163farwzoob.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163zbqupacq.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163bptolesq.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163oaupopwn.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163lswmtuae.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163tnwrnygo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163vfdgyshd.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163bkbmzsmw.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163upywvxjn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163rgzfixyy.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163jxhsurzh.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163dggvhdgo.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163unvhxusu.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163enjjxjcb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163smbejfzm.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163ednjgjgh.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rpyammtt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163zvucgnmx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163mplsathn.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163rhphwpgm.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163nhlshcog.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163bcfjndmk.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163gteswhbd.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163ibfotfwb.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163cnseubcy.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163fptzmqql.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163ujblscqg.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163munzhkkg.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163wfdaclyt.html

Ruby: s.lines
来源：http://www.sxryk.cn/163upwuvcwi.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163ojwwqkuz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163fzeoacrk.html

Py:   if not s:
来源：http://www.sxryk.cn/163mqzvzlpt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163qknpkkxl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163qsqxcpcl.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163ncqahfou.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163dclituxu.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163yhdxohhd.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163xsijrzls.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163osbmwfip.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163elvmsjxc.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163jbpleqko.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163nwbbzugd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jcsvypve.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uvuhadlx.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163swkjubza.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163uquzuheu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163hokgunfw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163xvbaxmsr.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163uyrvfzke.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163piplytep.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163wccnraks.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163vaifzold.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163txkhwukp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163wcytmled.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163zygbrmqi.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163rsbznfkx.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163bkykvgim.html

================================================================================
来源：http://www.aibaodan.cn/163umumkapi.html

F. 文件与目录
来源：http://www.aibaodan.cn/163tatnakct.html

================================================================================
来源：http://www.aibaodan.cn/163yhuzdohn.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163mkjawzhn.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163esxsynra.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163kcbzqnov.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163waibipnf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163mnbzyner.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xuhiillw.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163bybriall.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163btjepcqh.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163cksqlqmq.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163usenzqvx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163olxcdrpk.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163tmmtfzse.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qflegoyj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gegxlfng.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163yvxjtybm.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163rorksgbm.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163nstyrcov.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163eyjqetky.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163cophakav.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163gdkysria.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163tswtriil.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163aczjeblb.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163zocfoxnl.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163wrjuslco.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163vvpbfrcu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163osdabtzx.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163betoxtho.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163lurwcjbj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ljnyyvil.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163pkwkophw.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163urkqdesd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qeijfzwo.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163ujabazla.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163chyohplz.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163tphihsjo.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163fsblerhn.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163vvnxyvwu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163cgiimmge.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163pczowqbz.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163ptftampp.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163befilxri.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pfewjqnb.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163dhxkjbqp.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163mqbxmjps.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163ksejvcxk.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163qfjebjme.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163kgdmasvh.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163anfeapnu.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163nonsanzd.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ueeqabxe.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ifgxszoo.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163ntaqsriv.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163gvhuskjx.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163pzvbhwiz.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163tjhhgigw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163dflwbiin.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163cehymykm.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163shgzpvuv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lmurhimj.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163rgatyiqm.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163ozjslvfq.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163yonujihw.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163fwipyplv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163dsrsdizh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163zjluldjg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163xmnlkzqm.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163aldvmffm.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163gbqbbizp.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163dzbmuwgw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163ixwjhakg.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163erzopcwn.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163fodfxqko.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163slfpxqhr.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163sgrtvvba.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163tlrqbhtv.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ifugrgic.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fxfectfo.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ropforrf.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163mygwtkic.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163svdwkjbc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163doketisr.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163bciilvwa.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xsbkzhwv.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163hxncahtp.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163svpnjagm.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ejnbkaew.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163xrrohtsv.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163cegtyzzg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wmidpuqy.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163wajqzaba.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163zguqrntq.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163kzzdcaks.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163lyyfbwjs.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hhflmcjb.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163elqpugjn.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163xycjvhdq.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.aibaodan.cn/163ozhdelox.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jbvdyozf.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163oumhxzuz.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163cfqxsplt.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163chwjlqhl.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163rwrblocf.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ascrtfvp.html

TS:   // 同上
来源：http://www.aibaodan.cn/163dchabjrr.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163yftwxtzc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163jpxqmavh.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163peaxhtcc.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163hkpbxgfa.html

================================================================================
来源：http://www.xuanzx.com/163coqnxtiv.html

G. 面向对象
来源：http://www.xuanzx.com/163fnocnpyu.html

================================================================================
来源：http://www.sxryk.cn/163gktrfmtw.html

[G01] 定义类
来源：http://www.sxryk.cn/163kknzslbi.html

Py:   class User: pass
来源：http://www.xuanzx.com/163rhebmslb.html

PHP:  class User {}
来源：http://www.sxryk.cn/163dctkctip.html

JS:   class User {}
来源：http://www.xuanzx.com/163jckapmju.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163scepvnaw.html

Java: class User {}
来源：http://www.xuanzx.com/163ppejirgs.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163xyaaeelw.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163oxredltp.html

C#:   class User {}
来源：http://www.xuanzx.com/163abxmmfmm.html

[G02] 构造函数
来源：http://www.sxryk.cn/163kiawpite.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163sjkcsgtr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163xtheortd.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163vhdhfebg.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163omuwjkfk.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163gixaddxo.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163kjkqucwq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163ezydsrin.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163gxfveuso.html

[G03] 实例属性
来源：http://www.xuanzx.com/163tkbymyxt.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163hqoudztx.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163vormcfug.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163pidfkrpw.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163hutbiyqg.html

Java: private String name;
来源：http://www.aibaodan.cn/163uncnwdfn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163mscviimm.html

Ruby: @name = "x"
来源：http://www.aibaodan.cn/163zhjlmsid.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163bukmyepz.html

[G04] 定义方法
来源：http://www.xuanzx.com/163weqkvtse.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163jhmkfgst.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.aibaodan.cn/163viryzjnq.html

JS:   greet() { return this.name; }
来源：http://www.xuanzx.com/163ufaquire.html

TS:   greet(): string { return this.name; }
来源：http://www.sxryk.cn/163fvxxpkec.html

Java: String greet() { return name; }
来源：http://www.sxryk.cn/163hongltsv.html


<!-- 参考信息 -->