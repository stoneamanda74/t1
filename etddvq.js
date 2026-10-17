外链999!wailian999！

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163zfospiot.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163onacvibg.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ooppekzh.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163pcscnuju.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163lhmhjtop.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163morunndm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163qnmumhzg.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163pdgrgafs.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ksmkfhyq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163wxvqwqtj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163kagycacc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163wzifqtid.html

[E06] 替换子串
来源：http://www.sxryk.cn/163rtryelbk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ozulmzks.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163hnscflte.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163durxgkpb.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fvdfhowr.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yuisbwka.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163memrxpnj.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163zvhrkybp.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163gvrswxhk.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ggmphmcs.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163pigaemvj.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163zhhkollv.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163nfdxrsci.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ckvfzjof.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163kiloimdn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163tyltesqy.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163igfbbxaj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163dbmcnuhe.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163jznisitr.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163wijefldq.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163fwabnvpk.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163hoiptqym.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163vlxmqmxh.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163fwnocgdo.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163vsjnatii.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163brjkvvbe.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163fqkxhzwi.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163auqytlmv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ruhhatld.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163dxcnwdko.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163ymbivisp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ijewwlvr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163lahgjoai.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163uszdjclg.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163iqvrpjea.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163bxsdpzxh.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163zydospfe.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163jxjlllzl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163osejupxx.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gaocwsmd.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fykoiyrf.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163myxzytqy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163trfagegb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163amupnlxt.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163yqummuru.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163umriwegq.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163xhzdgvjj.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163xabkjysh.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163dspocteg.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163vznwcwkg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163mwmsyzwn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163jlqjmqbt.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163glnkdubl.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163dszbejeu.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163lazrrzof.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ookftzpz.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163kvngyswm.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163dhewihcj.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163bvprcbxq.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163pdxvbpaw.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163zdkdblob.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ucmszdhl.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163phmachzn.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163boamkais.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163vmsfqnch.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163fumoxeqp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xdxbqwie.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nkrjkmxj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163gfowrycv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163tvlvpktg.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163dhwqycyf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163slgrmkrz.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163crwtxuov.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163adeqwpoj.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163qrmzksmb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163bzbapsrx.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163sovqbrsk.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163wjkcprdw.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163wkpmhenh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163wkvbeckg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163bkqdkgfi.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163arxxmuja.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163taujhwfn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163pfnxvysu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163jeylmbuq.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163lnuhajuc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163qximersv.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163ffhpdyod.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163betqonli.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163xveaotdx.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163fqornfcr.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163xtboqpxn.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163mkxsrimq.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ngkihmyx.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163irzmufsy.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163eryikfzd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163jmwajraa.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163fjionalp.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163cakxqsay.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163tbkeexoa.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163emtjescf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163xbktpqdj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163mpypnmmy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163eollyokw.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163quafdhov.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163mclqtxns.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163ejvfyhwl.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163famtsipx.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163heebfhlc.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ftabuqqn.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163pqdjdejn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163tyxijccq.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163rkhuhyxx.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163msrunxlz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163sjnytmst.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163hhvzhhxq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163irbbznkw.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wlbgozpd.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163mxzxejvp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163mzfflrrw.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163eiezpyya.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hkhtuecw.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163cjybttac.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163kihatuxg.html

Ruby: s.lines
来源：http://www.sxryk.cn/163cszmzfpr.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163qvmetalz.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163jjqmqufb.html

Py:   if not s:
来源：http://www.xuanzx.com/163aisxofrq.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163wrfsswyu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163fsngbxgp.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163zsysykft.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163tsoxpsaq.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ujgzgnbi.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163kqnsblzn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163thntxzhk.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163qsamygjw.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163egffncsl.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163swvupzew.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ndjwuwzr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uqynexap.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163vbeshecd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163gdfoertm.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163hqvnihqq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163ogiiqjtv.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vpxhkyyp.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163vcticgof.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163lurpywsw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163gnecofrl.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163mluzpigy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163wmdfmwng.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163owohlxgk.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163dxxongds.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163ijldszot.html

================================================================================
来源：http://www.xuanzx.com/163lmnkpvgl.html

F. 文件与目录
来源：http://www.sxryk.cn/163dfsamdve.html

================================================================================
来源：http://www.sxryk.cn/163uusaevif.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163gbrasuku.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163dxxakzcl.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163xoltjjdq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163owtxqwuz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163vleyfdoy.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163hbvvrqad.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163bsdjhlmp.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163dqsljkyk.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163guyzntcy.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163dobrltvd.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163pybiluvh.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163hnxhlpid.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163jjasofqm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163qeczxtdf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163vsgpvsic.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163nasfypnc.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163mjtjkwza.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163jygyxqic.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163gfppouku.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163iksodpoj.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163vmzkmary.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163fglnkufh.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wyjavnfi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163irflimno.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163vymoehtj.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163quhkdzox.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163hwrssuxz.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163qrfeppza.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163rnhbjwgb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163crqltppt.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163vmvbgxib.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ctafpggf.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163tscygvtp.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163pajbgodw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163fpordhpe.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163mkknhyzn.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163iywssvbc.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163uorjhhcb.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163njkkrxhh.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163hjtfwciz.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163xjdwkpyu.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kjrehcye.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163kwkfgjwb.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163awvupoak.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163rcudhjil.html

[F06] 删除文件
来源：http://www.sxryk.cn/163soqnhceh.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163xoxbwoxj.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163rnxewgjo.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163esxcijqz.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163xolzlhmm.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xrqzhnwu.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163xwvzelhh.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163bwanklcs.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163zvhcznec.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163wmbsrnjw.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ftukwpqf.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163fewzootw.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163tbjupgna.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163vkinyfny.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163wfbzceqa.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163akocynck.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163hsqbntfk.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163ssukawqs.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163fgtrwcxh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163axxgvzao.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163uimjdwgp.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163nieajthq.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mwftpcuy.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163kykvalpr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163kolbwegf.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163zrwakncf.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163crfwxmtb.html

[F09] 获取文件大小
来源：http://www.aibaodan.cn/163nkchgrfp.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163cajpmqus.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163xhfuedce.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163bxreiypt.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163fkzgfarn.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ggcnptvv.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163ubnnmuhw.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ogsswlur.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163bbgvgwzk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163nctigket.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163uudafqch.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.sxryk.cn/163kvuqlesy.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163fvcogzqm.html

TS:   path.extname("a.txt")
来源：http://www.aibaodan.cn/163jzoqxkpj.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.xuanzx.com/163abugdhpk.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163rzwbkjge.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ibkbabhk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163zpfovtws.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163ddovxjqx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163vbhtqeus.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163tbsjyiag.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163ekqdyqjl.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163eaqcwfhm.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163iewhphus.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163paruosio.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zdoykeie.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.xuanzx.com/163ztkgbigr.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163ytmofqmm.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163pshxpgxr.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163yrepyxiy.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.aibaodan.cn/163vxeilxwl.html

TS:   // 同上
来源：http://www.aibaodan.cn/163laqyscud.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163gowaymkb.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163zhyupews.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163ahueqgrr.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163fufvzsmb.html

================================================================================
来源：http://www.xuanzx.com/163fugjixvj.html

G. 面向对象
来源：http://www.aibaodan.cn/163ryifdmhy.html

================================================================================
来源：http://www.aibaodan.cn/163pwjvjdrm.html

[G01] 定义类
来源：http://www.sxryk.cn/163betvqwpc.html

Py:   class User: pass
来源：http://www.sxryk.cn/163iatroaxp.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163qzmutcss.html

JS:   class User {}
来源：http://www.xuanzx.com/163ztaozziw.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163vwazlqfv.html

Java: class User {}
来源：http://www.aibaodan.cn/163ydxojexo.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163tyvfzwtc.html

Ruby: class User; end
来源：http://www.sxryk.cn/163jqlhnbcw.html

C#:   class User {}
来源：http://www.sxryk.cn/163pwanxwxs.html

[G02] 构造函数
来源：http://www.xuanzx.com/163lqdzjndo.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163hndfuwni.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163xwizjpns.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163elpvkcym.html

TS:   constructor(public name: string) {}
来源：http://www.xuanzx.com/163xgglvhuj.html

Java: User(String name) { this.name = name; }
来源：http://www.sxryk.cn/163xmxmiifs.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.aibaodan.cn/163qesdsjrj.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163hbdytosq.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163pvzgkjsj.html

[G03] 实例属性
来源：http://www.aibaodan.cn/163akhapuhl.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163ytqvtlap.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163colrnmna.html


<!-- 参考信息 -->