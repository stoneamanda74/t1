外链999!wailian999！

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163kpdtzczz.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163nhqxajep.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163hunqueyi.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163eljmsvua.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163pbjfuyas.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163rvlmhymd.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163lriyimyf.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163eumezpky.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163nktxefir.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ehihxsgk.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163fodjcoxc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163yshzbjsz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163lrgepkop.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163hjzlucqb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163tgouwckm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163umemdphw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163qkmhjeos.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163vgjqqtzk.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163siqmjxws.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163jooevfqy.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163czszmibx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163nclppzyk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163rrbrudll.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gsxcmbfq.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163oijsyllo.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qtjzguaq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163fwfdapqw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163vrpvgvww.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163gesvctqa.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163bztzivhc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163xrnxshsa.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163cpgirgnv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163zaqeyglb.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163tukjfbdu.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163kqovllvl.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163stsdyoxk.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163zenaebxm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163gcikefvf.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163akgvcvhc.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163xufvmwel.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163rkgqqcop.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163lhncqwna.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163gwcxjvhm.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163blzzlppu.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163pyrtohuk.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163tpekvcfr.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163rgmbclxb.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163bynqgabi.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163qivmwtfo.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163irfcaqnt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xbvzobwh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163wxdpyoaa.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163llzgyqnp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163cibkbwxx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ulmmfiqa.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163hlvgckne.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163gfnyxbdw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163scglglxi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163slwgwxmp.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gwjsdoqj.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163pjncwkxm.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163fvjtafkn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163uargnril.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163goyvonqj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163xyhxrjhh.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163gmzimoxu.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163sanqkqgf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ahiehlii.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163gvwetfmb.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hmchdprr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163jhyhdvcv.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163kjgpqzua.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163lxnuoxrp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tznfogtf.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163xpqxbobt.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163fwwgjxel.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163gojkjsgq.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163khvktosa.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163bihqrdna.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163yyipream.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163wwztygxv.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ybtbalwf.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163iiwvrvhf.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163przahjzz.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163tfmnoxsu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163kwkvmvgd.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163mrygfgjg.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163dymlpjaj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163dxytlkle.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163qhcrrbcu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163pvfkognx.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163dpygzmgs.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163pyvdjmbr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163nzyywgzl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163rupfheol.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163byunwoua.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163mcrfomyl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163xsmtdlzz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163neqlylqd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163ngjiljjv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ebitvxvn.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163xexikkgi.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163jtrpiqzj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163nqfrfirz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163ullsvrhx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163vjrgwrza.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163geheyglw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163bhtsbnwz.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163ylzbrrac.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163lzdbbyav.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163lhrmdpna.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163tqfdcdkj.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163zddhtlcz.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163uvrbnogm.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ozxxetwx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163nljazfte.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163riyjggea.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163urvzlikg.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163eowasblr.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163nglldmty.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163mnomdvry.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163djaxwmee.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163qwoayfvn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163nlillypk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163vxiwbvkt.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163wekrbkrh.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163dmrlapds.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163dkkvbzsw.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163mbkileym.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163elxjuipl.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163zxzchuvo.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qyslvyzg.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163whfhismk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163bruwgdvh.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163weuynlbu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163gsoiddrd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163pdmikzfp.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163wmovjvsh.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163wredwzwa.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163pkdqtpkq.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163oxafiwji.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163adjsugwp.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163taqyvylb.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163szweukio.html

Ruby: s.lines
来源：http://www.xuanzx.com/163puqssxhr.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163khmpayrc.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163upckfizw.html

Py:   if not s:
来源：http://www.xuanzx.com/163ozxlvtvt.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163magfqivv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163rfxkenrj.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163oqpgiuft.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163ihtdlize.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ooeawfyn.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163bxsxrnta.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163vneofalf.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163foujgxkq.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163dhrqfioo.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163itfyrkfe.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jussivea.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163fpfmkcpc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163hburaggb.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163pboxbmja.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163aldslkgc.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163bmawufhb.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163huzqvejz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163zeiyhfhu.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163drocwbaj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ugrymahx.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163wagbsfoj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163czgqrtrt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163porllket.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163pvvqqkkr.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163nrcgoffd.html

================================================================================
来源：http://www.aibaodan.cn/163gzofnfra.html

F. 文件与目录
来源：http://www.xuanzx.com/163uheodwmf.html

================================================================================
来源：http://www.sxryk.cn/163mnannkrt.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163qftylizi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163yajkwecc.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163fdwuwoxc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163vjikaeho.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163wtywrdkj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vqijzobf.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163dtjjdkjk.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ovnwvlpy.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ztxbscxf.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163lbfxjhsp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163grxaxlmy.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163hqnswtne.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163okwqtwyh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163arxzqdyu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163cakiviql.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163mncyjvrf.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163lpuhevxt.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163dkdmnxfy.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163sopwbkkp.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163yjlgfgng.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ihhjuonu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vcptknlw.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ygwbpxda.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163iuzdfsmv.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163aspapwxg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163iqpgfolz.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163lddnmxvp.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163ghqdmgbg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163mgembjlx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163umwzocxj.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163lsutzozo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163yzbiponz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163lhwdxhfb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163dqtfkoqj.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163hdgaeazi.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163ahvvvlvu.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163mrhcnwyq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163xdgrpmwt.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163rwloevhd.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163wpsumghi.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rnbvoizj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163bkltklhp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163lvvqhake.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163wtraterr.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163aheprpyl.html

[F06] 删除文件
来源：http://www.sxryk.cn/163abbfkoyg.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163ftgjshvc.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163dhtwnkqn.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163juikzzpw.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163htftmrjm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163bqxszdlo.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163hoopfire.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163yzxoxaww.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163rbxvawsw.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163dvzgfizl.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163xxjiidtc.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163lulzpfdn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163grinzucx.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163sxuzqpha.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163twhopgfd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163gkmthbhf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163uqodgmcs.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163hgsbcmdf.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163qkhcvyfu.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163vinkjzzt.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163anhtyuld.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ddsmzmyl.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163elefylak.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163evhytvto.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163wqsfbuui.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163tmfrsjio.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163yzipxgam.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163flmpnbrv.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163nwkvjwvl.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163gjwflouy.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163qpalxgjt.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163eyzfubvj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163vfiqxzbc.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163nlqetcmo.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163lebtzudt.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163vqmqzasn.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163kvetigox.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xuuqsxlo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163ewdehxpj.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163uaywunwn.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163engxkfvy.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163fedjyggo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163yllgcdoe.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163qoocagko.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163vzkcajap.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163mawxydog.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163qaiqlgea.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163ksgmvrts.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163lbdaxevp.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163fpzpcoek.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163sivjqnje.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163tmanttgj.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163pcppvlsc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163amvhkpdt.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163dxynmiwc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163llkcjris.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163sucmorko.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163sldtiwue.html

TS:   // 同上
来源：http://www.xuanzx.com/163nhyhohhd.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163rrxohrky.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163xrpgqexp.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163dhlsjkst.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163jzelaouv.html

================================================================================
来源：http://www.xuanzx.com/163mikezeig.html

G. 面向对象
来源：http://www.xuanzx.com/163oixvgaje.html

================================================================================
来源：http://www.xuanzx.com/163rqqljpth.html

[G01] 定义类
来源：http://www.aibaodan.cn/163xbhmdatu.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163bsvqidgz.html

PHP:  class User {}
来源：http://www.xuanzx.com/163lksopnuj.html

JS:   class User {}
来源：http://www.aibaodan.cn/163fvtinysz.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163pmdcrggx.html

Java: class User {}
来源：http://www.aibaodan.cn/163ubnnxlbe.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163jqhfznsh.html

Ruby: class User; end
来源：http://www.sxryk.cn/163apcdqwau.html

C#:   class User {}
来源：http://www.sxryk.cn/163uholsvkr.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163ngosqwbg.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163obaupoip.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163awyuogcp.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163qdmqzkre.html


<!-- 参考信息 -->