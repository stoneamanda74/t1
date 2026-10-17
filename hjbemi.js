外链999!wailian999！

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163zcxmugbi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163qsvdbxat.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163vxriijfe.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ncvowpvp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163uivmzsam.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163qiqrskup.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ypfoyhlm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163vuttisvf.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163acnizyqx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163sjvodxmx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163oddsrdex.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163nrayvwru.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ahlanhvu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hucsmujl.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163zqformyf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163bqxhswph.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ojlrcjwh.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163thvsvvcg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163iudckdij.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163btxcvkiu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163pdcajris.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163mssevdwg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ewbhgqsk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163qhaiimal.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163aapxkowr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163kxqfyajy.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163cwzexcdl.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ebdfqqpx.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163xrxburgt.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163brsjvvbt.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163pnsdqifu.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163erstvjsc.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163jealzjcc.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163mmlshtaj.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163mlhrkpzu.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163egvgkoxe.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163wollantg.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163awehlidy.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163vpcnsfjj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ljfladmd.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163zpikvxkr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163qpajmgpp.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163isekyqza.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163urtgycli.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163ducfylit.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ajphoewx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163rndmxmxl.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163zwpkbikh.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163lyxfzvqt.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163xsoiorbx.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163wxfclkgl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163kstkxkhg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163hltnhzca.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163ltbambqa.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163oayuwkhp.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ytfcmgdf.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ncnchwrv.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163undqgnej.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163cahuclyu.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163holfahhg.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163coeiulke.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163uwvqqmyi.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163dcrkzcoi.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163oqfulrqn.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163cdqjlqpk.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hvpxmqjm.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163sppbefxs.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163tnmediqo.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163xmfvrrlv.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163qwojkgso.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163uvihclbw.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163aarddcjd.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163imalkuwp.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ppvgosfl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163odgcwwao.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163xyoefvnf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163wtpzidva.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163swdhcboh.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163ryezwzij.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163exjicvck.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163mqzuvgfr.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163fpxfvqky.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163yoluouil.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163ucmuynbj.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163lhdgkjih.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163fcsrawlg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163utdvhfis.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163vgcipaqb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163czjntpkf.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163pwrntozs.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163humjiblp.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163yxbxhkhk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163vetvnskt.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163efyriafm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163negoreiv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163zxgmksxo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163tyuacfeo.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163guextgfs.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163mtekurlm.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163pwxvnurx.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163yocrywdu.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163oguafvkn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163gcyfucuq.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163zqvezook.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163ldukelzk.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163lmrscyoh.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163fbuutbyz.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163frjrufdk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163smfxsxzs.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163sferrnin.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mmbeygqu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163uhvepres.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163rztkrcuc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163gquviezj.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163xycfnbmw.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163iqgkwxij.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163bywyeqsb.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163vchbtimd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163dnlwsdzb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ddytliuv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163rlcbvcyf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163mayqvhmb.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163drvkjvld.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163njovffhn.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163ubemggeu.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163mtsszayb.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163resqwizw.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163tdwbhlsv.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163cvpgkkhq.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163sofutgfi.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163gxygrgbq.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163lccrmodp.html

Ruby: s.lines
来源：http://www.sxryk.cn/163jknzpsax.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163xmrkbquq.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163wsomgotm.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ytuahkex.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163bjjywmic.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163sajcnsvm.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ashhjzce.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163nnbirjxx.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163xuypcjxd.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163ijtprpnf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163bubyaymr.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163rzycezxb.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163tncxkjhx.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163ntzejtzr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163odibygkb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ybqtcazw.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163chqzpeeg.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163wkyvcgue.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163htabaheg.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163xbonmbrp.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163bjeoyhzo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163hyhgsnnm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dsprlomm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163aoyxkuue.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rjhrclhs.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163accbzrjt.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163uryjrtid.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163elriwjfc.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163wsglrmds.html

================================================================================
来源：http://www.sxryk.cn/163edwkiwdh.html

F. 文件与目录
来源：http://www.xuanzx.com/163csagwvkb.html

================================================================================
来源：http://www.aibaodan.cn/163shwscssy.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163axstyzxj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163eijvtxrn.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163aaiequio.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163febxqqls.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163wrxpfvyw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163zsarcgab.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163kkbgktpf.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163hpsnhary.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163pdehorey.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163pojylhyd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163unmojhul.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163onjtbejb.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163jdxlpqhl.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163brancyxu.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163klsbifjl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163ykwnvobz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163wureexsm.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163kiyypxsr.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163rpdsfqnr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163qqhjblng.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163olhjgrgw.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163iszfijkh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163izglghzz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163plrvanss.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163umxvbyjb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163djjchzvd.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163msjltayy.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163jfeemitg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163wdehujvd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163dbqtxqoi.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163yfqmhxzo.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163eiteqrbw.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163xngtiekv.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163davrmvzl.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163vvehlhtt.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163fnjkvujz.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163nyszxngq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163otbhkgxw.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163tcqqftzy.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163xpzkexss.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163zhcgveew.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163yowbdytp.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163sxltxlad.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163xgbaxedr.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163wryvajdh.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zigmgyzq.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163spkgnjzg.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163vgfsfjyc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163nzulurgt.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163zrstnnpk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hhshbsbj.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163hxdewjpu.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163fsaqkxvm.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163qsbvfcgo.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163hiflddao.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163jptfmord.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163gfnyfoly.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163ssovionr.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163noddfgvb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163xlpkhutq.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163umqshxjx.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163xxraoqjo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163larhijrd.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163dzvgnhud.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163eraiqhij.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163xuimkhth.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163bfxetdny.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ewtrygsw.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163gafjdejp.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163qzakhbyf.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163jadxtoll.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163mobscftl.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163zrqbazzh.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163jvyzahfv.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163uzplomwy.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163kgxdxrfv.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163zjmitbvv.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ogmacrmn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163sbnmsfox.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163srlytcxc.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163brrgqugu.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163kxrzhqdg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163eyyakqeo.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163sasbbnjl.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163rdlajqks.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163cebfhsop.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163ylesxqim.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163lcjdnwfj.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163ohrtnsce.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ndsrknnt.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163nvetizwd.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gtvpkpit.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163vgsfuacj.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ybjirouu.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163tnkpboaa.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163mqoybnhk.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163ubolasmw.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163wueqgjcy.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163vsxjarkx.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163nyeehzdh.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163ohkvegzj.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.xuanzx.com/163gxfywmte.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163zzmszcmk.html

TS:   // 同上
来源：http://www.aibaodan.cn/163ecfhirgy.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163hsytmawx.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163fxtjbsbn.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.aibaodan.cn/163eslhheof.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163jisstwfj.html

================================================================================
来源：http://www.xuanzx.com/163ucanlfgt.html

G. 面向对象
来源：http://www.xuanzx.com/163jgmoporw.html

================================================================================
来源：http://www.xuanzx.com/163ncyehjjh.html

[G01] 定义类
来源：http://www.aibaodan.cn/163lpqpgkwp.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163bxuytxrr.html

PHP:  class User {}
来源：http://www.xuanzx.com/163mutguexq.html

JS:   class User {}
来源：http://www.xuanzx.com/163ganminjq.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163bdzclhao.html

Java: class User {}
来源：http://www.aibaodan.cn/163dqzyyzxn.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163yfitwogu.html

Ruby: class User; end
来源：http://www.sxryk.cn/163pliwmdvb.html

C#:   class User {}
来源：http://www.xuanzx.com/163ixwmifmf.html

[G02] 构造函数
来源：http://www.xuanzx.com/163hoiadbep.html

Py:   def __init__(self, name): self.name = name
来源：http://www.xuanzx.com/163woxdwxcs.html

PHP:  public function __construct(public string $name) {}
来源：http://www.sxryk.cn/163yosxncuh.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163qqoyfozf.html

TS:   constructor(public name: string) {}
来源：http://www.sxryk.cn/163hyvheile.html

Java: User(String name) { this.name = name; }
来源：http://www.xuanzx.com/163tcqklvwz.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163jjsyinto.html

Ruby: def initialize(name); @name = name; end
来源：http://www.aibaodan.cn/163znbbdjyx.html

C#:   public User(string name) { Name = name; }
来源：http://www.xuanzx.com/163klytidaa.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163btdqalna.html

Py:   self.name = "x"
来源：http://www.sxryk.cn/163xkujxmqg.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163ychsptni.html

JS:   this.name = "x";
来源：http://www.xuanzx.com/163lwqdwoxm.html

TS:   name: string = "x";
来源：http://www.sxryk.cn/163miadbfbm.html

Java: private String name;
来源：http://www.sxryk.cn/163xovxwhtn.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163xgqshjba.html


<!-- 参考信息 -->