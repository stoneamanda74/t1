外链999!wailian999！

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163oaecszio.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163zctaweoi.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xyitfttj.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163aptbdvnu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163pghqrtvk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163izfdhcrh.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163rifsmbcg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163cwtnlpck.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163zpjczcpb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163yagcjepb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ajbxfhyz.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ienzzouw.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163nbjmvdue.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hkqioizu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163zwpnlnop.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163flmgldvx.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163mfzdhaiu.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163xeyhiltm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163nimaknwn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163tlrytela.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163yxhpgenj.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163dtzmpype.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ngoheufa.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163relcpthr.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163fppkhqgc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ymgspaax.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163lqdlunsc.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163zhnrafgc.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163eeehbckb.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163fllotiph.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163zfybeznd.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163cntwdupb.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163awuagfij.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163divajbhp.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163ggvrwccd.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163gnqbcthr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163fuzbkzre.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163yhvpgprp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ziwftsmd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163gmnseqsh.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163lombuqvw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163zeeweppw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ymrunawt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163yjyahrtv.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163pqqannth.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163qbbsghhp.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163qpmmojfu.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163fkfatnqi.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jgebxley.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163tclorvcn.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163fdxpoxrt.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163krxeytts.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163dpqnnzph.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163yxyqlzln.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ekfwtnrd.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ehacqicr.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163qzmqwjxd.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163ujjjweka.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163rvydzcai.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163zlplpelj.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163tcfejtfy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163znkwznmc.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163ybogxvpa.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163zfddjahj.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163vmuzarwl.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163andrnfas.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163mtlwwjgo.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163naxpithe.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163oqxqfbwi.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163scojdkvz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163sybexvll.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163mtybkrld.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163pmqiyybp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163kvamlfnf.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163petlfcyo.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ttjjfpzo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163moeokmwq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163wjnzrqfo.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163yvtpmfvw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163yykyidhs.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163egajhslp.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163jljrrjoc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163qeaegufu.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163gqawwnfm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ctsbvwtg.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163bxraiszr.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163vjqrltso.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163dxhmbgzv.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163mzfronka.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163efjlzskl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163piugedix.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163dggkzzlx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163pymbdcuk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163rwhkxsec.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163nxjiitsw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163iahqbxlq.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163rsrtklta.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163khnfiupx.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163zuvekqpc.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163jljiwvte.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ffiivvit.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163mofzkbdk.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163asyroprk.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163usdiqmsd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163jutpktdf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163tejxlimu.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163tzgmsmun.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163bxgqqzwv.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163vfjgpuyn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163jfopfqvp.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163sytgqvvh.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163apaggwzx.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163sxwltyvs.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163npttzdji.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163gyiqgcmn.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ijlhkong.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163tfgagvjs.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163qvzqxptn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163qzxbtyab.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163iyedytmc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163zmnpstqp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163zkmcxlsg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163cxhipllk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163vjeazndb.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163woltdnui.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163yhuptqep.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163msxrnugk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163mcexnlne.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163mmpljfkd.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163xqzcddlr.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163qrvvnifa.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163tvipgefe.html

Ruby: s.lines
来源：http://www.sxryk.cn/163jhdufnst.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163tagqyjlr.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163qywjweqn.html

Py:   if not s:
来源：http://www.xuanzx.com/163agkctqaj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163orcojxpc.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163yfklpyqz.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163yedoztxp.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163swsbunwp.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163zqajfdzb.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163zchubyjn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163pnoboeme.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163bcfmzggg.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163zbpslirz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163fpgxvzsd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ychlwhld.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163yvittoyu.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163zjjxhanw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163xloqxgbt.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163plubxsbh.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163rhbyltxv.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163jgjpzdpl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163nfwvgoqf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163boecwype.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mbdlzsvg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163qmsiugbz.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163itafbffs.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163hlinrkjz.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163tkbjzpci.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163wviefdhs.html

================================================================================
来源：http://www.xuanzx.com/163fhksdpna.html

F. 文件与目录
来源：http://www.aibaodan.cn/163yibrxqnh.html

================================================================================
来源：http://www.xuanzx.com/163tajkbhpv.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163znknivjq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ahxwvrxh.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163ksrrfdaa.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163rtdrgxda.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163hiliuvxs.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lgdshvje.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163uecvcnpm.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163pkrmyszk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163fzfijgzs.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163nvordmyi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163lvywamli.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163hwtpxfsj.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bqbdlzzk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163lppsiyld.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163mxzbvztg.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163hjvdlkji.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163zfrqvdkg.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163ejgrpicl.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163pqzunklw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163jlngtbss.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163xmviyddp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163gzxbfxfk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163egpfynal.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163svutlssk.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163gsqiqntm.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163mycljylo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163dcynmjjq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163gtlzzswz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163vuklbtna.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163wtzthxnr.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xlxkeaab.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163ewhjzmor.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163phzbeliy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163ndvozetk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163bzaqymhj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163tkuhgsrc.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ytdlivht.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163isqenuuj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163fdjdsfww.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qjbbbcxc.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163avhtsgqj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kjwusyqi.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163qbhyvyef.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163pdtabkbq.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163awirxtmu.html

[F06] 删除文件
来源：http://www.xuanzx.com/163ufiwfqpu.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163fnkiprig.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163akypqalp.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163gdpcjghc.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163klugxovy.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163tvetlcxs.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163jtvxyfel.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ndisctue.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163grmbtzac.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163gzsvbcnj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163hwdnucca.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163uxsuunox.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163dlweavar.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ojjwyuhm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163mjzeycsx.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163dcttwskf.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163dgmxssuv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163falqnnos.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163vhzafrmc.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163ysackuoz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163bpydwrvd.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xaobvexe.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163nqjyyrfn.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163zxzvdaul.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163eccflxxe.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163gpvyoleb.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163nrimqthh.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163kmyprjno.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163vacecozc.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163woeqkxle.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163mxoxxcxz.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xlupzgfk.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vrmsiiyt.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163jfgsdlqe.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163bpooxbpo.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163siacnoeh.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163ocavalik.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xzvxftax.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163rfpshjau.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ghtyqrvx.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163iooysblp.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163iuxwgail.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163zdlfotna.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uhhdoqjz.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163ygmchocz.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ejclsdgd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163aoxiywus.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163wbklnipd.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163huvobdjz.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163jgqzlpwi.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163uuuldkus.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163fztgcokn.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yyjthjdq.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163irwirygx.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163uspvxwiz.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163yzokdwfc.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163ayeacyqm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163tjuyzmve.html

TS:   // 同上
来源：http://www.aibaodan.cn/163pbfghmaa.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.aibaodan.cn/163waglrdpc.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163eguiqjle.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163saieczig.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.aibaodan.cn/163aqwfovtr.html

================================================================================
来源：http://www.xuanzx.com/163qwudmzhz.html

G. 面向对象
来源：http://www.sxryk.cn/163exlylvka.html

================================================================================
来源：http://www.xuanzx.com/163izdfhyrv.html

[G01] 定义类
来源：http://www.aibaodan.cn/163obbksjxh.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163kodejovn.html

PHP:  class User {}
来源：http://www.sxryk.cn/163erifmydw.html

JS:   class User {}
来源：http://www.sxryk.cn/163swmmveki.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163scqsoott.html

Java: class User {}
来源：http://www.sxryk.cn/163exjzsbfe.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163xbejuorm.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163zrrkuoxn.html

C#:   class User {}
来源：http://www.aibaodan.cn/163dgowzvqn.html

[G02] 构造函数
来源：http://www.aibaodan.cn/163axkttdjf.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163qpbtdnzb.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163nbvqfbug.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163aaclffqo.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163nytauwqf.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163dulrfguj.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163negqpqec.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163ttybvobd.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163tfbiqcuu.html

[G03] 实例属性
来源：http://www.sxryk.cn/163kmjisgky.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163bilyupxc.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163rwsdwjyj.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ulosdryj.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163pysqmzoo.html

Java: private String name;
来源：http://www.aibaodan.cn/163ilfpagay.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.xuanzx.com/163rosahocb.html


<!-- 参考信息 -->