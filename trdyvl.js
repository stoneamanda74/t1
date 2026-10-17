外链999!wailian999！

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163dncpkqfn.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163umtozgku.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163rddqcxei.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163wbqzkhsu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163onzsghld.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163rvpcdzis.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163sfnbqheh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163eafxmdvm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163lwmgdnzf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ojhzmela.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163oaubhmdo.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163fuknabog.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163tnsayjdp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163muhktoea.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163uyxieogs.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mrxauyjn.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ohjigpih.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yjiigxgr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163posdsnjb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163gwppxqma.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163uvokwhcm.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163xvwsrhwv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163fewvslmv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163izmhbhoz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163abovvjsi.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163zuivhzjs.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163osvpkyyn.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163yvojyvje.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163yxnpwngg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163mtxihbfq.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163roxnvpfv.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163eujehvwn.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163bxnrbbge.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163eoyhufwe.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163oazofyyo.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163zmcvmvve.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163oqeilkmf.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163udxqafvy.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163mrwaginr.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163qxnlvosf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163qdpyoqaa.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163mkkqknhm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163gykxgion.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xwhfnoye.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163tfrlzjps.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163vlfdolch.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163lcuqegoy.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163jrfcaiwq.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163echugfmd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ksccrtzl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163gczednue.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xcxfnpke.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fohvpesn.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ubkycalz.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163ajojzewu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ayrmbdtc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163wqaydjzz.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163zopwddul.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163msofwvyq.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163bzgudfct.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163mlrxueqm.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163atwzfccu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163esppsepw.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163uzwtjtwy.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163tnaorxmq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163outholtf.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163rfvpvbbi.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163giynjdlw.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163qswslwdw.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163azzelviv.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163wgcmhnih.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163gamnhdte.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163zczzywnb.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163xcsynllp.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163hjfgecsr.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163xpavotxd.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163vdmgaath.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163wzncapxw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dxowzxny.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163nqbuxogv.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163aoyrhgun.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163vmbehydt.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ibsgjyaj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163dycvrusq.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163unxcbcow.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163tolfcryh.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163btgivjdm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163mbxhjbvm.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163hyjksqkm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163uiovivfe.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163buplwoxw.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163jarszehf.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163vqfwekof.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163qnviafrl.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163erefikyt.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163fhvngbte.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163ggqforzb.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ekavpwkv.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163gkztvgks.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163oteygjhg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163sxaihimv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163rbvkmhnp.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163axfmwvzh.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163cocpkopm.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163prvqoryg.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163ibmrthma.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163scdtafes.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163vpqunggi.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163cqsjsosr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163dvfgrxrs.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163vsellsms.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163hguyfeql.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163evpricvp.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163gpswtqxm.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163uneinbtd.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163lbpzaiik.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163ygarrdbg.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ljcjymcs.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163zibqctld.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163vrvjklbv.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163fccqmzjs.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163sjpkevaz.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163xvcmpbrl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163vbshwvxv.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nxrhqobq.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163inthbmhk.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163ighncljl.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163hrervpdi.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163wvzcgmhv.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163skwusvqm.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163klugqlxs.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ahnafeku.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163wcgrffcj.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163hdrabmme.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163hzqjyjgx.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163cellspdo.html

Ruby: s.lines
来源：http://www.xuanzx.com/163hxtwpjxm.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163icdkmhzm.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163harspucs.html

Py:   if not s:
来源：http://www.sxryk.cn/163qmidzglh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163tdqqkpuy.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163hckndrfi.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163fatnhzjv.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dbbcwchr.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163epmbwgah.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163kjjcnahn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163qqfvhyag.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163uxoxmwjt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163sbdadytr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163efjcmzcv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163khtndech.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163nggyzeov.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ncmxuvcu.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163cjxzfnzz.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163euoubkpq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163uaafcqkt.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163zfgsiujt.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163plsqiztq.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163pgxydwzw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163ydxxiith.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163igdwzuyd.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163rtagiflc.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163fdgljndo.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163dvotfkat.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163gwpfemgn.html

================================================================================
来源：http://www.aibaodan.cn/163arrmcmpo.html

F. 文件与目录
来源：http://www.aibaodan.cn/163bnxqtsjf.html

================================================================================
来源：http://www.aibaodan.cn/163fhwtyckd.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163tlgteqra.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163xujysmju.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163pmufhdzs.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163vbplspru.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163nzuhgghd.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163awbtjkrt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163ewprzojk.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163mrfajsym.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163qmtyiswn.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163drbwghws.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163dzynapiv.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163bjqglrny.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163cciragau.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163nykhrsuf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163oitpjpdl.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163msymnpha.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163yrpmnaid.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163zkrabxfc.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ywqsfooa.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163finffarv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163pcydpcwu.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163bgixuwmg.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163wuylzkqh.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163oxkadwyz.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163vnwwhgjx.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163orjrkfth.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163obftpwls.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163fwmedryj.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163nuivdkhr.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163zoonwlwb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163zfpxbdeh.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163btvyeyxr.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163bgeswygb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163mbotckyk.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163oimzvgha.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163qrnzahaa.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163ozjnyymb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ahnqtclo.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163mygimktl.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163dfetwaeq.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163gbiqcqwq.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mcrkypkm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163foyrtedx.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163tqbnknws.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163lrksbyls.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163pqfyhiza.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163xktvhruh.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163wghlepaw.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163qluxhfez.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163rcbzfzox.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163mievlfhq.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163zqnvwmun.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163fedqfyqk.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163tdyritcl.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163agkuloql.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163qfankars.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163rpcgfigg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163qploweoh.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163lqpwrgnm.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163uomzftym.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163zoetwmfo.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163ddcmplpj.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163hagszvxx.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163qychgegh.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163xikumapz.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163inajtfbg.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163qmmoylya.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163voobrhga.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163ivibittd.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163lyazpfkr.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163qdvmzbku.html

C#:   Directory.GetFiles("dir")
来源：http://www.aibaodan.cn/163yruxoncm.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163wpenmfkg.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163tdssafzl.html

PHP:  filesize("a.txt");
来源：http://www.sxryk.cn/163uanutztn.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163cbouyfms.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163cdmdgabp.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ettmowob.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.xuanzx.com/163avjauxuj.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163libnoxld.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163lvuctiyf.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163gwltkmlr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163msqovpie.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163wbbvzdsv.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163uuecotct.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163aazqctnm.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163hhlnpevo.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163hambfgls.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.sxryk.cn/163dqufjovh.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163whztccxt.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163synvajwr.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.xuanzx.com/163opmoweto.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.sxryk.cn/163nhjwgruh.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163qbzsysxi.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163yhocrdkp.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.aibaodan.cn/163zwjfhpgt.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.sxryk.cn/163hyyskobh.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.xuanzx.com/163hoyztftw.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163gxpjpgvm.html

[F12] CSV 读写
来源：http://www.xuanzx.com/163smlwxopw.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163ixxncfud.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.sxryk.cn/163dfvavczd.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.sxryk.cn/163zlfaygkm.html

TS:   // 同上
来源：http://www.aibaodan.cn/163afvpoczq.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.sxryk.cn/163mjdvicnj.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.sxryk.cn/163tmpkrlre.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.xuanzx.com/163raeuhvet.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163ivvacrhg.html

================================================================================
来源：http://www.xuanzx.com/163knbhdcnj.html

G. 面向对象
来源：http://www.aibaodan.cn/163vjerkhuo.html

================================================================================
来源：http://www.xuanzx.com/163vtfnhzme.html

[G01] 定义类
来源：http://www.xuanzx.com/163ouasdmet.html

Py:   class User: pass
来源：http://www.xuanzx.com/163vorjbhcg.html

PHP:  class User {}
来源：http://www.sxryk.cn/163zabeqyff.html

JS:   class User {}
来源：http://www.aibaodan.cn/163ybyfmcok.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163vmpntrlr.html

Java: class User {}
来源：http://www.aibaodan.cn/163lltguslv.html

Go:   type User struct { Name string }
来源：http://www.xuanzx.com/163flnjdmhj.html

Ruby: class User; end
来源：http://www.xuanzx.com/163gtanhcnz.html

C#:   class User {}
来源：http://www.aibaodan.cn/163rqygyviy.html

[G02] 构造函数
来源：http://www.sxryk.cn/163czxwmksi.html

Py:   def __init__(self, name): self.name = name
来源：http://www.sxryk.cn/163zgmzlmih.html

PHP:  public function __construct(public string $name) {}
来源：http://www.aibaodan.cn/163ulgavbgf.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163yaernryd.html

TS:   constructor(public name: string) {}
来源：http://www.aibaodan.cn/163hffmsxxp.html

Java: User(String name) { this.name = name; }
来源：http://www.aibaodan.cn/163gedvvpup.html

Go:   func NewUser(name string) *User { return &User{Name: name} }
来源：http://www.sxryk.cn/163gbblaonq.html

Ruby: def initialize(name); @name = name; end
来源：http://www.sxryk.cn/163kmyafcva.html

C#:   public User(string name) { Name = name; }
来源：http://www.sxryk.cn/163ypmcnnkc.html

[G03] 实例属性
来源：http://www.sxryk.cn/163wzawomhz.html

Py:   self.name = "x"
来源：http://www.xuanzx.com/163efliqxys.html

PHP:  public string $name = "x";
来源：http://www.xuanzx.com/163xucydlpz.html


<!-- 参考信息 -->