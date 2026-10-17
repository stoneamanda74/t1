外链999!wailian999！

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163grmewlwe.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163xyobpdlw.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ogqcqold.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163hrhavqzu.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163rqbwxcpg.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163flsvfgwr.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163eijhmyzm.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163oakrohdh.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163zzxnpjga.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163dgidtqqq.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163tlvxztwt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163jrvqbvoh.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163tswscyjv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163cdxcslwu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kvtitmln.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163ltkycsnc.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163dlizphzo.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163myrhnpaw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163coicvuml.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163hymfyguq.html

[E06] 替换子串
来源：http://www.sxryk.cn/163hoqmlacb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163fijwtxpp.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163nrufehcn.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ueluvlak.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163nowrvpjq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tgnqjxxq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163idelnsof.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163zaivvjkj.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163cuhlgzyz.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163drqwvcvk.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163btssugni.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163yzneyelq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163troditsd.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163qcqphkbg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163nciluznt.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163fnymxnpa.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163sqoqwqkm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163jxqooyah.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163clthlynt.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163wbitbbdu.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163pewoofpe.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163xsprwqel.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163wrffngdc.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ynlnzejy.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163cxyqaqhw.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163uvruljzl.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163otmcoyvs.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163jnqesugf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163gjnunyve.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163fbupgzcm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163apghbpyd.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wswndfqb.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163cnrnfole.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163wndvoryj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163dsmmihhs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163pbrtivjg.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163dkqjzcnf.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163qjwslknb.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163swapuvhm.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163xksbcgdb.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tekqjmao.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zflaclne.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163yjoztblj.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163dtsodogg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163xurmotxh.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163gpanosik.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163lbcscwxm.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163cxepyydi.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163wexddjyz.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qnfwbcpq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163hyoobfxe.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163ondzjdzy.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163ouqfqexe.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163addmfjpy.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163mdmrwaiv.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163ftrbwhon.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163xoucqweo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163uzvhvgpb.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gcnpfvys.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163pzqqlnpx.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163cqxtouox.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163bngjdnaf.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163puwqbzws.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163zcsmicab.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163quwkboty.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163wvktapzc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163eblmsxtb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nxwglgbj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ufyvbgda.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163jgveptrf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163ictsnqzt.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163whpqbrbn.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163xhygoqwq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163torhiddw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163jsptengk.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163tpsjtvsm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163fsybrpot.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163usrsnfyj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163iguebqrr.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163nhmofzyg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163byaictka.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163aeqzrufs.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163buequfrt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163fdfuevfe.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163fzlpmzyx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163rjmwngcd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wqltmbya.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163ffcszhpg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163mgouudoz.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163dyoxkyxx.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163ksaectue.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163moibnhtf.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163slyautwg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163dckvhtki.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163maytizcv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163chnmmonv.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163nozpqkdn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163mdhjbfhw.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163fopokztb.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163wuhwsswy.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163losafuvn.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163ksubpuck.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163xsfkfliq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dnpcjroh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163qqkunvmh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163uncbhgms.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163xcmtinqi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163waumeswv.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163dqbdslqn.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163bbpbacyz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163aucecnjq.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163rkydnzyp.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163tgubpmuk.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163ylviirku.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163owfjjrry.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163qqumwkok.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163omzkonze.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163jzywvtno.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163ztqhokjh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163wrvqnelj.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163otujyuxi.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163rhcfasva.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163wajhnpdv.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163jqwgunhl.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163zfpkbdjf.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163wlvoztrk.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ewpawuhx.html

Py:   if not s:
来源：http://www.sxryk.cn/163rgvqbhbk.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163shjufrxz.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163sdlzjocq.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163exvxewul.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163tgoyrwoe.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163igydmzez.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163skesccbd.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163cjdrgncl.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163kvzlszwk.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163faljsscs.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163qbkgpbom.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163fctueoud.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ceprwzmj.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fqhmmblq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163cawbcxnn.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163adfxilaz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163jtqwagje.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163qjshsndz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163nmfkrpsp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163emstisga.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163vldthuci.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163zquperec.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163agjddhns.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163vfpqshep.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163pivozviu.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163orfcjfim.html

================================================================================
来源：http://www.sxryk.cn/163jebiqqrs.html

F. 文件与目录
来源：http://www.aibaodan.cn/163gugvynvm.html

================================================================================
来源：http://www.aibaodan.cn/163eptqycbj.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163faxguodi.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ylkasomw.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163uxdoheqs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163zphqgiwt.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163opfksmsj.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163drevmlph.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163hvrqggyf.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163juurkzpz.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163zkpzuofo.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163yfylummi.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163ydlleope.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163shabbshy.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163qwstfmfs.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163lfjvemnm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163oirqvnxz.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163pfshjuko.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163ujmsdabr.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163agiyibak.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163wkzrjxqv.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163wmupicaw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ufisnukm.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jkriidbk.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163aswaecod.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163potlswvj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163bjwtsxbe.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163taolswrt.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163vttlyqle.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163vkweulrw.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163gagclihi.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163rtspfldh.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163sjoyjmyw.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163yzcyawxz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163pmaewxju.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163zwgpqgvg.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163alhegjfk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163eycwaswn.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163cgnwpeug.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163tnuzghkm.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163pfonochd.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163tlfyuojx.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163sbfxcpnr.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163rktvjxyk.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163hidbzdaf.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163mwxxjyob.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163yiqclkrq.html

[F06] 删除文件
来源：http://www.xuanzx.com/163kmzkffns.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163udilwcbi.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163pnqrdebm.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163gnypccnb.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163btnjxdtk.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ftodkjmx.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163gzvnnxnn.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163pgbglcab.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163bgwqbogv.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163tvagkxsd.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163wjhrskzh.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163mbaavecp.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163iqcmzuur.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163azxajpxw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163dxuflwrc.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163bnfgqzpt.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163ddjirprl.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163hqtydocm.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163gbujfdcg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163mhsixong.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163pfaounbf.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163mjzsqbak.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163fzobwytd.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163jumdsdxy.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163yewxxafo.html

Ruby: Dir.children("dir")
来源：http://www.aibaodan.cn/163ucuufeci.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163llitorhc.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163wioercuh.html

Py:   os.path.getsize("a.txt")
来源：http://www.xuanzx.com/163shozozad.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163bqlzpslj.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163svnloptu.html

TS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163jejoovnm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163uhbfbuxj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163qwpudctr.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163zpmedfrg.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163peirweza.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163zcjdvqmy.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163kbdxptgn.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163hiwqhafh.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163qhprkvdd.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163icfaxfcu.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.aibaodan.cn/163fdmcwkpa.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.xuanzx.com/163eyeyoqdu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163cnygmvuk.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.sxryk.cn/163ogpbuevt.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163yovmwnwf.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.sxryk.cn/163zqpnfils.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163depcjryk.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163egmbpava.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163ecivjzac.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163feapxros.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163pbrxpgic.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163rcffhged.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163iovzbune.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163fzficwez.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.xuanzx.com/163vmzcgdlq.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163ncflbzie.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163xahyqmhz.html

TS:   // 同上
来源：http://www.xuanzx.com/163lfdwroxc.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163hsqsaxbs.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.aibaodan.cn/163avbbhzns.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163vfeutqoh.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.sxryk.cn/163uqvblnhg.html

================================================================================
来源：http://www.xuanzx.com/163vgctihld.html

G. 面向对象
来源：http://www.xuanzx.com/163slrpytwn.html

================================================================================
来源：http://www.sxryk.cn/163momigsdm.html

[G01] 定义类
来源：http://www.xuanzx.com/163wcnvvjop.html

Py:   class User: pass
来源：http://www.aibaodan.cn/163fbhjaacu.html

PHP:  class User {}
来源：http://www.xuanzx.com/163mgabngla.html

JS:   class User {}
来源：http://www.aibaodan.cn/163eqetklvy.html

TS:   class User { name: string = ""; }
来源：http://www.aibaodan.cn/163iqnynykb.html

Java: class User {}
来源：http://www.sxryk.cn/163kltiwiay.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163vddvylny.html

Ruby: class User; end
来源：http://www.xuanzx.com/163urherjfb.html

C#:   class User {}
来源：http://www.xuanzx.com/163eibbnylm.html

[G02] 构造函数
来源：http://www.xuanzx.com/163wnsvcibe.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163tesqovxq.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163qkbsdpcq.html

JS:   constructor(name) { this.name = name; }
来源：http://www.sxryk.cn/163fiezegaw.html


<!-- 参考信息 -->