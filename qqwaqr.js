外链999!wailian999！

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ouxgepjm.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163kpnpbhbh.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163budxuhev.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163zeihtobs.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163lumwslkd.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163rxyymqll.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163llfbcyyo.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ghjvrvco.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163arlnjsft.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ncmafvgc.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163tiqhhgzh.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ixkzpkyo.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163xohvxiqi.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163rypttvpn.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163xlnepnrg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163mbpgoryo.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163niemppcg.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163nmjkphdt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xhhtcion.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ghonaoue.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163khsqxicl.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163qmyyakpj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163tgrwlepx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163zhxucwyj.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ljmxnurq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163wwajunxr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163pjjueidv.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hwtlyaek.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vgqfqxdw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163snnlnpmj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163nxsjmeku.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ahmvpisp.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163dfyzrkmm.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163wjcezemh.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163zxrebzbw.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ahapetvn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163chmfozdi.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163dwdqsgrv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163wvkiofik.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163otqnqvbs.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163rkqvlkmv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163rbmhbmpy.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163besicyjd.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163vqoyaodz.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163fguoypce.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163aesbysam.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163pvoidhhl.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163sgrlcyxh.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163sfvkmroq.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163urioenbr.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163mbuwovmi.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163kqavejdz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163zlzubvsk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163qflwgyph.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xhzhopmw.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jafwcxbj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163ztjgcdhl.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163zbpnaapl.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163pldqmueo.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163nantlqmh.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163hcehnlib.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163awnqtbzy.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ybwdlnra.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gnkvclak.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xkbchmpg.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163hjkhwhdy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163iraztesv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163vsbvqoog.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163vfuuskqg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163crlaaeis.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163edbqpucj.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ndxejevo.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163vteqcmok.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xymtwuer.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163oxbolwhs.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163osdogsdt.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163jnkuhzlx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163pupzefgu.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ffwwearx.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ixrzexxy.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163npsmrgnw.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163uyakokvg.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163awffzlod.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163yfcbsgph.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163qstkttxs.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163mswgmzhf.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163cblfgucg.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kjimldcx.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163retkwjto.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163omvgpzvx.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ohqgtrim.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163rwzpxcgg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163udjjdrqm.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163tdnudtoz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163dyrflrob.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163nxyzykve.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163vkeelqhb.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163tuajqhzl.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163jopayxbq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ciucxxhs.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163yuacycpb.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163auziijex.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163gtcrravg.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163hpgpwbyf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163dlhqjbes.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163opeomkvg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163prqbmfib.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163xsrwgfod.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163nstrcflb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163pnztxmth.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163fotjbwtw.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ebgvhvge.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163hqavgnui.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163tbziqiqk.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163ksmzscob.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163ejklwiuw.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163qxvusazr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163rwsstxxi.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163smitrhvb.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163vokqocxx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163vutkyhdh.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ovghhums.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163bsmirokd.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163upqavmlk.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163ivzdyllz.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163jfjpzbbk.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163cqhnhtpq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163sxpataai.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163lqsmeudz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163mdvisthl.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163ynazezgb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163yuyybvdq.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163vomtmyfy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163xrxybswd.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163hmstzswd.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163fbblirak.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163yefkjoie.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163ftryujvg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163tstemlah.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163bcztwtaq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163uejuevgc.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163shqwtdto.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163htjnqghk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163rjhuqynw.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163tcpmqmkd.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163jmkkspti.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163homdqfym.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163qvbheobm.html

Ruby: s.lines
来源：http://www.sxryk.cn/163eqqmbylv.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163funwmtbj.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163sygaqikb.html

Py:   if not s:
来源：http://www.xuanzx.com/163uamudebi.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163veedszmu.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163rstotpvt.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163lnganvoh.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163gegborbq.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163edbwknhk.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163xnnwpcfb.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163nijhgtvi.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163sqlddfbe.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163gelmfuyv.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163vsdbzxkx.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163prqvbkdo.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hjokysbj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163wywrhrky.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163unlkrgwq.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163hxthwsht.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163uwektwov.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163xzugqier.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163eljefrzl.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163wvergbut.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wmdobbml.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ppkrzmqf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163kiqlirdi.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163njqqkksi.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163zerrdbsk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163yqtvdfrd.html

================================================================================
来源：http://www.aibaodan.cn/163dogbeulm.html

F. 文件与目录
来源：http://www.xuanzx.com/163ktgftvda.html

================================================================================
来源：http://www.sxryk.cn/163esmztbzl.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163gwnkedvw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163hekxnkpc.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163fjzalydc.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qcvaixwq.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163uhiomwsq.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163npdbmegr.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163sqzwnfvd.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163auiprdkz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163apaidsbn.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163nqrdsvrj.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163fakstoai.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163duyidkde.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163nnnvylzz.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163jqfrilzn.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nigprshs.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163ywmgjekr.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163skjsdhxk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163hnxhyuaa.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163uedytpcy.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163gslzgvia.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163hiqjmwrr.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163aqmokjsr.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163sbowmmky.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163gqpubuww.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163hxkzcufw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163lgukjscf.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163mmvmzgqm.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163wyoxnwke.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163rivtjwvd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163zkasxrsb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xtcoyora.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163uylqsmtt.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ybxriepn.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163agcewrrv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163umkxllls.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163ilpggmzw.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163qwhhrqvg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163oamsbcsn.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163bgdpoorr.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163rbolania.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163xpuqmlls.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163sulitqws.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163xsaetczz.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163adnrdajq.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163umeyrppd.html

[F06] 删除文件
来源：http://www.xuanzx.com/163arhqyxie.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163mzmblfrr.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163qizelcfb.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qvydlqva.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163azhdaleu.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163izmpkkdc.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163diynywbj.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163xnvinaxt.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163nahzclyk.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163tqlmmlwp.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163fsvqrhjo.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163ukskrtff.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163dhpyznga.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163kgdrrulc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163tdlkphjn.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163talkszbk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163pawxvnug.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163acqvicvk.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163askvnrdi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163yscrqtra.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163zwjuhpaz.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163oqhssoeb.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163ekzmtvcd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.xuanzx.com/163wmvinatm.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163qmuwxmoc.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163hxrvrkwb.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163maadpuhk.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163axmxnieb.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163rfuvvmbz.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163zncvjlct.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163ewocjtin.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163tkmzquat.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163rvkeabdx.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163xjyihiye.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163mpbfqxmj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163fpcfcvoq.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163wvalrizv.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163lkfnaner.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163ravrdfxm.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163vhehfpgn.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163ccecrpsv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163mlnjacad.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163gqfyrleg.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163xensypwc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ksgwivrw.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163uwbrwczw.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163gtnhfrsd.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163nqgoprjh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ftulodnx.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163nfjokcpu.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163ftcdgrfa.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163facmxyru.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rdclkobg.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163mmkpwqpj.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163xdezajft.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163prisrnwp.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163rojsxhlm.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163ifqxyvdn.html

TS:   // 同上
来源：http://www.sxryk.cn/163kfwzcjho.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163gcyrlbsq.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163qqfrvgpk.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163ixemqdma.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163fxkkuuon.html

================================================================================
来源：http://www.xuanzx.com/163sttuigum.html

G. 面向对象
来源：http://www.xuanzx.com/163hwnelyvt.html

================================================================================
来源：http://www.sxryk.cn/163jdatbbob.html

[G01] 定义类
来源：http://www.xuanzx.com/163efwhodnw.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163mbcvysrv.html

PHP:  class User {}
来源：http://www.sxryk.cn/163adolbpsz.html

JS:   class User {}
来源：http://www.sxryk.cn/163hlovczpd.html

TS:   class User { name: string = ""; }
来源：http://www.xuanzx.com/163zdgcyzne.html

Java: class User {}
来源：http://www.aibaodan.cn/163zyuanynx.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ppnhbhbw.html

Ruby: class User; end
来源：http://www.xuanzx.com/163irjhaibz.html

C#:   class User {}
来源：http://www.aibaodan.cn/163mnmhhwgg.html


<!-- 参考信息 -->