外链999!wailian999！

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xfshihpm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163atpnvwou.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163eozpcpkl.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163qqlmksbh.html

[E06] 替换子串
来源：http://www.xuanzx.com/163framwjih.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163sjctuxvh.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163wewefill.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gyadnedr.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163drhpumgm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163udhhrcdz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163jyrgqkvf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163sdvmezif.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163rdijpifp.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163xfllbskc.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163kqumywgx.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ykigshnm.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163fzelqcnx.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163ceffzkgr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163blxuvjzq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163xluotpri.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163pblenonk.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163eyrccdmy.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163oahnohcw.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xyzokiry.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163fidaugjl.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163igkqlain.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163qavutpzb.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163vbgysazg.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163qxckmrln.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163wqqdpqeq.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163xbbamwnr.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163lnmdycry.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163yvjbawib.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163dcwjddhp.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163oltyavva.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163vyewrswx.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163xmbacxdd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163kbmstpaa.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163oauqwouc.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163iyykcwvi.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163tbwissqt.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163gfnzwzuj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163jahqxghw.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163gnnulpzi.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kpinouiv.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163azocogrq.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163vgqqwfuw.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163vluazglm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163wmlfvhvp.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163ebtejiuo.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163njmwyttd.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163wcsafwfp.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163ympizlzz.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mkoibyyw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163unjbncnw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163imhcnjqi.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163oabezgdt.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163jwdpmhzc.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163zmdqsfcw.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163novwxusg.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163hxlelpyj.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163xkirmfrk.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163mfmacvxd.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163lmaqlntx.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163dulxruza.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163atmrrbxs.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163tqcrksxs.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163zmhzmefl.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163igvyyqzw.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163kskjcnjq.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vzpmzxon.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163eqnnkgxg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163ritwtzjv.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163xomawlxx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163welgzxbf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163bfwtybsm.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163lxarworu.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163hmmempfe.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163vjfgjcpc.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ugqafwfn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163lclrqlif.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163foymsxfl.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163bgfztgfs.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163easvkvga.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163tlxewhhq.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163dywixitl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163vgiqpkpt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163jwsfwrjk.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ijexwron.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163meobvfbr.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163bfxfxxxn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163qndfebgf.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ivjegtwu.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163mckxlihc.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163etnhqzyp.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163ubtbyvlg.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163bothokop.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ierdlpah.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ucqfloan.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163elaeregv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163hxlmvlrb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163qwsijcmb.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163uwzdksrt.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163vaxszaol.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163hgypzypk.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163pepiynwg.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163zqrfofcu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ppbnjxch.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163grvjbzfh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163scgrrrnw.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163jtdbrqtb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163gnogqibq.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163lqxjmhmi.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163iempdtna.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163bbztpojn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163mzamkfiz.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ahhwllme.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163jvuzobqp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163ebkwoniu.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163dssctexr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163wwrigrui.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163uqgqzafp.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ibejulpz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163mgnozvmn.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163rjqnzawa.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163rffroces.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163kqfeinyp.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163vidboejd.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163frkmbzkk.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163jzweryza.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163slhxpabm.html

Py:   if not s:
来源：http://www.xuanzx.com/163jscvwyrk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163cbgjbrlg.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163bkwsldno.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163uoxkioim.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163gygslqgq.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163sotdnccs.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163uadyznmm.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163cruxbfni.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163wbivqnec.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163xjyrqowj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163gbxsbzmb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zwenwcgc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wfwrzclk.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ttyfkhmv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163cqjfvaej.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163hnvisjfx.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163smuomllx.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163uinuuipr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163sarpwyrn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163hbgdtplh.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163fizhtgkk.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163vfoitkio.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163vxthkfsb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163blfiidzr.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163eehhqiww.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163knlbasbg.html

================================================================================
来源：http://www.xuanzx.com/163mndudwlg.html

F. 文件与目录
来源：http://www.sxryk.cn/163cfterbvt.html

================================================================================
来源：http://www.sxryk.cn/163jlxnwjrt.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163wsgdaycx.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ktlbctzq.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163zxfzbggn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163nhpfbenz.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163dmrhooey.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163dbuscapb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163otsmqhgv.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163gcganlur.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163zribqdmi.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163qpqjqnoa.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163tjxcysue.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163asnrhayw.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163lbfwpedn.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163shvmlecp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163tblltmjk.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163imjsoaji.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163hvczccmx.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163wklobqfr.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163zvfxzdik.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163jeyclplw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163ndimgkjz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ovwgvhxc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163gkqwjsqi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163ptemgwdt.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163rmjfbkie.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163wyrkbtup.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163majdzwhk.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163kmnunmvg.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163oznzmcfx.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163dnikuiqf.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163sbhincfq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163gukkejap.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163zwpdyozs.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163hfjkrvlh.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163sxgarxhz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163blhexlwe.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163reiriaar.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163jidrsjba.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163cmlaxjot.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163cxysgcqp.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163dwpdcwyc.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163njzpgslk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163pehlnnyz.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163icafycin.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163tnumsbde.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163hazzseju.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163saetihwr.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163xpcdinoz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163edcmdmfq.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163seftwope.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jwzlidvu.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163tzhmdvqt.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163estqwiec.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163tlhpacai.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163kzcfychj.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163gvydzzij.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163onmllgiy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163mhbboqll.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163jwwsnovb.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163mzfkqbpy.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163udctfple.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163obthdqhn.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163gwxhbnby.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ugmxchfv.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163oczuncvg.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163guoxivvh.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163odbwbhzf.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163adaoplaj.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163zvzobjhr.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163dlhxsovs.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163lhxoprac.html

C#:   Directory.GetFiles("dir")
来源：http://www.sxryk.cn/163hkaevvih.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163ymrgknvz.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163qnqdcwtj.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163oagdjznf.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163pwvtmkec.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163okekuvtg.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163eqoamdtn.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163iyxvqrca.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163mvwmdskd.html

C#:   new FileInfo("a.txt").Length
来源：http://www.aibaodan.cn/163rzxppqzo.html

[F10] 取文件扩展名 / 文件名
来源：http://www.sxryk.cn/163vaqsxjct.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wxbwoaxi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163xfatpgxs.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163zmodkshi.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163vwhjwdgt.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163olfyagio.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163uijokdti.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163wuqqeqov.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ljcsqxat.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163wgxppkne.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163klqhnsbp.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163hrqkguob.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163hhdxiyoj.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vegaeoun.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163iciwtyji.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163xeznhdkp.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163wcfohulc.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.sxryk.cn/163fkuiznkl.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163nrymnzwc.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.aibaodan.cn/163zjuckgwd.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163pfztaymg.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163deqqqbdb.html

TS:   // 同上
来源：http://www.sxryk.cn/163musycorb.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163jnufxzbi.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163yosuwmgl.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163clgslslp.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163cpectsiu.html

================================================================================
来源：http://www.xuanzx.com/163wkeyuzsi.html

G. 面向对象
来源：http://www.sxryk.cn/163fktavilv.html

================================================================================
来源：http://www.xuanzx.com/163gmxqpaes.html

[G01] 定义类
来源：http://www.xuanzx.com/163swlklhfa.html

Py:   class User: pass
来源：http://www.sxryk.cn/163rrmviqmy.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163ipebcvje.html

JS:   class User {}
来源：http://www.xuanzx.com/163hnopuees.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163dgewdbnz.html

Java: class User {}
来源：http://www.sxryk.cn/163xsmovinw.html

Go:   type User struct { Name string }
来源：http://www.sxryk.cn/163ccfioioc.html

Ruby: class User; end
来源：http://www.xuanzx.com/163aniyuays.html

C#:   class User {}
来源：http://www.sxryk.cn/163pombtycq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163nkluwbxm.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163zyjayejr.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163gfqfamey.html

JS:   constructor(name) { this.name = name; }
来源：http://www.aibaodan.cn/163vqacorhv.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163oaqorcei.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163qzkfecgh.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.xuanzx.com/163ohhmzhjo.html

Ruby: def initialize(name); @name = name; end
来源：http://www.xuanzx.com/163zjffckxj.html

C#:   public User(string name) { Name = name; }
来源：http://www.aibaodan.cn/163mxpqtpey.html

[G03] 实例属性
来源：http://www.xuanzx.com/163xcfuvqym.html

Py:   self.name = "x"
来源：http://www.aibaodan.cn/163kvpanuoy.html

PHP:  public string $name = "x";
来源：http://www.aibaodan.cn/163yiypdejp.html

JS:   this.name = "x";
来源：http://www.aibaodan.cn/163ubovswlb.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163mgkwvgdk.html

Java: private String name;
来源：http://www.sxryk.cn/163dmrwyghx.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.sxryk.cn/163vhzqxlhq.html

Ruby: @name = "x"
来源：http://www.xuanzx.com/163jbypqiix.html

C#:   public string Name { get; set; } = "x";
来源：http://www.sxryk.cn/163rfwagvkg.html

[G04] 定义方法
来源：http://www.xuanzx.com/163zgyuhbbc.html

Py:   def greet(self): return self.name
来源：http://www.aibaodan.cn/163vavyaars.html


<!-- 参考信息 -->