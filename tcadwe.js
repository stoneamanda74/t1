外链999!wailian999！

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163chuydvau.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163zylvtcxc.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163poycnvkz.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163yaenbkfl.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163usdtluta.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163rtebmfop.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163oershqfa.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163cbwwoflv.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163qmibeghh.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ervtmgtg.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ausemmnx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163hakkauus.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163wfftfrid.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163aippnzyi.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163scfdpdam.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163bfbnpqya.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163mrznumbg.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163pnakrwdc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163jnlcjyfb.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163ayayiexc.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163hrnesvpf.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163hdijhyty.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163mhcjdhbp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163rtbbcadw.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163zrsjltld.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tnhwlqwa.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163iykdejip.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163loizdgof.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163okrdolhc.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163fgdgxzam.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163tzcmplrh.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163pcewipzy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163ihwrdggt.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163vpktsgvh.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163cphufmpr.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xoxrxdch.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163kkqncydy.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163pwccyxsu.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163gbkbrhxp.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163ksevottu.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163tvghacid.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163bnbuogof.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163fuagfuhp.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163pasosqwn.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ridwliwn.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163xmjivbqh.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163wabjifem.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163qbijiteb.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163pyfnhwmz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163ttihvyyv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163pwldsvzx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163tdyxxrvl.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163xhynvzfo.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163ejlxtpyx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163npjzssqe.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163zpuairnx.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163pgqtxxal.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163bzavbtcj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163ivyeyyzj.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163psowzpgf.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163xjimtwlu.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163dvzqhivo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163dgjmokmn.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163dcazbmaj.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163cvnpfqmf.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163rszxvcba.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163cjrspnjy.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163yxsljusj.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163grdtdaxz.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163gkhsnqdg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163pahfnblo.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163dygfnrqe.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163mwijmvvu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163ezcvmxhn.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163xywxnkud.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163zhdkgssb.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163bwyyjntb.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nqucushz.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tvhtqjkz.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163qcurehqm.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163wpulqyil.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163axqwcsmv.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ukujbtuw.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163myritlcj.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163ivqiiitf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163tioyceaw.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163vemviavp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ienjajce.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163oinbbirq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163tbktgjcd.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163wjhhubjr.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163fmrziqnu.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163jsstqavf.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163fsculrhn.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163zbbgwrto.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163nwbbfncy.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163yrdkxqfn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163vauouadd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163gdmynxfb.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163vrysvpjn.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163lkpatmxq.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163hubxelrp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163tejtcgdl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163intrxrib.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163hvwhnfst.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163xkiarbpu.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ijlfjgck.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163iwemxuuo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163lbnblues.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163zdhkzkcd.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163nvwlxyow.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163vxrqxsrd.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163whqsgwtr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163wnyortjr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163eknejdfj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163lpftziod.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163qrgkikng.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163ckymssmu.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163xgyniuqs.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163zmarelea.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163iskfdpwb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163wucoszag.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163auuqzjgp.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163dbnkmqoh.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163jbdqrtbr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163setfxutu.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163xmndpuke.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163joyuwtvs.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163eemmfkvf.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163ltqwvlxp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163pilljqbs.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163hxswhahn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163qvjiinfb.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163xebwlspp.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163hwvoujlc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163dwarduei.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163ccxdvsic.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163ioajjlzl.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163kfcnuewd.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163nodbtnop.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163lpnazomv.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163dffevwov.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163ymsivbvd.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163qrvaelar.html

Ruby: s.lines
来源：http://www.xuanzx.com/163zmuiuxip.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163uojdkrnm.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163zixlzkwm.html

Py:   if not s:
来源：http://www.xuanzx.com/163moadktah.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163mgfnirjm.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163mdrogcrx.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163iyimhisu.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163dqaaagna.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163zvwwtnpt.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163opvokuuh.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163cyxgcrcz.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163ysfabadx.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163ywsofhme.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163nzpsepgy.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163cwqrdyad.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jhrkwipa.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163eunahnwv.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ogyuysoi.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163jhcchxqr.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wtgfmblj.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163nxwwgefz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163cpvjtmvd.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163qqipfwgm.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hmppuyye.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163zucgcaxp.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163emlnghkr.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163vviinsqb.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163hlsbuovk.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163fvxxccjt.html

================================================================================
来源：http://www.aibaodan.cn/163wtcwalvo.html

F. 文件与目录
来源：http://www.aibaodan.cn/163hscxgksa.html

================================================================================
来源：http://www.xuanzx.com/163bltyznnz.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163epckddof.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163jhwnkeum.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163hshwazyq.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163mqonuzpf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163ugyommag.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163kjaamgii.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163wzxynncg.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163vvdwuept.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163jhwqcxrr.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163wntmfaol.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163kuwphgpj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rhbzkvdl.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163aajfnrlg.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ohkucymr.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hrabtqqj.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163lhnoagbz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163cmbowvmf.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ugdwvlgw.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163cygzthvd.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163hfrtuxro.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163vkmwkdvv.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mvtfhtfd.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163ulichrsg.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163uhpftcnn.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163fkksxkai.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163nlcaygcp.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163svazfcci.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163qotgrpve.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163rmobjkri.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163qxovelef.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163idimzmvm.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163dbrntnhu.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163ewccovdd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163qmgsavvm.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163bvikdxxt.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163yyszolpf.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163nxvfhgcu.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163yavqtxvb.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ivaojlvv.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163oujtkckc.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163uqqbwhrm.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ostqkdxf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163ojsyhabe.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163ebpkhuwd.html

C#:   File.Exists("a.txt")
来源：http://www.aibaodan.cn/163qlbiyoxr.html

[F06] 删除文件
来源：http://www.sxryk.cn/163ybyfccaw.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163fdegbnzl.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163uqsydplc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ahggyirs.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163pztginyd.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yydoobqw.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163qvvsbuap.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163tykouchh.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163ymrjlzjf.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163rvuczyqv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163kgzjhxij.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163wtpyywxt.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163ytwnnrjg.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jeqcnyon.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163cietasxw.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163npjjougk.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163iuoidjfh.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163oaysqvuv.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163mabmszas.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.aibaodan.cn/163pzslhnet.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163uyumsikj.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163yhucagqy.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163vmivtzhq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.sxryk.cn/163umknmduw.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163ksuksihy.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163hsxzrjua.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163hrlsduun.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163hotpicge.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163alijzdsv.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163sqtozidr.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163kkndvcma.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163yscuzhfm.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163fidgnuce.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163lmyzkccw.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163yczzywbb.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163mrklptxk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163cvydvhkr.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163eydsbini.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163dncbuhwo.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163xkxupzhl.html

TS:   path.extname("a.txt")
来源：http://www.xuanzx.com/163vymonevv.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163svtdeeca.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.sxryk.cn/163nijxbjwu.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163fdbsfsuc.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163zmspmyre.html

[F11] 复制与移动文件
来源：http://www.aibaodan.cn/163kelywvtz.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163htemovcs.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.aibaodan.cn/163rdhjfevz.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163paqsefsa.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163nabwdjtw.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.sxryk.cn/163ybcdkuxc.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163arcdvorz.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163vrsywdmh.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163mxkiqyva.html

[F12] CSV 读写
来源：http://www.sxryk.cn/163oxezjjlb.html

Py:   csv.reader(open("a.csv"));  csv.writer(f).writerow(row)
来源：http://www.sxryk.cn/163wfxveued.html

PHP:  $rows = array_map("str_getcsv", file("a.csv"));
来源：http://www.aibaodan.cn/163lxfudtpa.html

JS:   // 无内置：按行 split(",")，复杂场景用 csv-parse 库
来源：http://www.xuanzx.com/163eyabumsy.html

TS:   // 同上
来源：http://www.aibaodan.cn/163zoqelvay.html

Java: // 无内置：用 OpenCSV / Apache Commons CSV
来源：http://www.xuanzx.com/163lewqnill.html

Go:   csv.NewReader(f).ReadAll()        // encoding/csv
来源：http://www.xuanzx.com/163oftytzqc.html

Ruby: CSV.read("a.csv")                 // require "csv"
来源：http://www.sxryk.cn/163kdzlrbts.html

C#:   // 无内置：用 CsvHelper 库
来源：http://www.xuanzx.com/163xutcstmz.html

================================================================================
来源：http://www.aibaodan.cn/163jxdedvxm.html

G. 面向对象
来源：http://www.xuanzx.com/163wabnruxf.html

================================================================================
来源：http://www.sxryk.cn/163htlsivbb.html

[G01] 定义类
来源：http://www.xuanzx.com/163tgypnrzg.html

Py:   class User: pass
来源：http://www.sxryk.cn/163wayhvsbq.html

PHP:  class User {}
来源：http://www.aibaodan.cn/163hykmcmed.html

JS:   class User {}
来源：http://www.sxryk.cn/163wxyvunqu.html

TS:   class User { name: string = ""; }
来源：http://www.sxryk.cn/163rmlyeieg.html

Java: class User {}
来源：http://www.aibaodan.cn/163mssaahzp.html

Go:   type User struct { Name string }
来源：http://www.aibaodan.cn/163ampfkcyj.html

Ruby: class User; end
来源：http://www.aibaodan.cn/163rcceztvq.html

C#:   class User {}
来源：http://www.aibaodan.cn/163qxnwaszq.html

[G02] 构造函数
来源：http://www.xuanzx.com/163lxmarjlr.html

Py:   def __init__(self, name): self.name = name
来源：http://www.aibaodan.cn/163jhmzzjmp.html

PHP:  public function __construct(public string $name) {}
来源：http://www.xuanzx.com/163wumpsiym.html

JS:   constructor(name) { this.name = name; }
来源：http://www.xuanzx.com/163kafcgdry.html


<!-- 参考信息 -->