外链999!wailian999！

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163dndrlztl.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163kkamcvwv.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qtxbunxw.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163opkvrlia.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163rojuaaeu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163cxnflzfa.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163lyklynxq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163foaranjv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163loykxtdx.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163vxneowpe.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163uphlfcdl.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ezepjvue.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dvpmsbwv.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163hiiabtam.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163mqdcrfwo.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163jnllbrvm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163cpvstgsg.html

[E03] 截取子串
来源：http://www.sxryk.cn/163cbapayqa.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163bbdbubyk.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163moymgzvx.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163bonvtktd.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163lmsphywq.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ciicgcef.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163boyxlqpy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163abxgitfa.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163brdrtgis.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163smxepmvz.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163dlxaupvd.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163cmneqdwl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ltrulirt.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163lkrjmlgz.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163qypdprwd.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163xtijkqlx.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163vjoeluhr.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163djveenfz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ktbeufmr.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163pnajdmby.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163iuxmcngq.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163pdxdcaig.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163bzdunidz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rldapumc.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163aerxnwwj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163czkngbyf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163wtwkuqiz.html

[E06] 替换子串
来源：http://www.xuanzx.com/163raakifqs.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163wsjcpgle.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163qxstxott.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163furbtfgi.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163cgwpvlna.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163aifqejpb.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163vvwkrote.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163heikwuds.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163dffygekq.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163lvaflwji.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163urwjkaez.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163yegbykcy.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163zouosyge.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163wlqxxumm.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ddvpcuau.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ykkbnejm.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163eebjeuvr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163lwojtxgj.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ezlqwpif.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163lamxbhit.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163ocmmvmld.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163jgwjloyz.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ldaljcah.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163ijfzorvu.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163cnbbvccu.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163ixkclquj.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163hzujkcrc.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163okyoysqm.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163lczcfinb.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163quopnrml.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163julwodgp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163fpbmuuuc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163ryetwaxw.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163jaibhrzj.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163zxyvdcyj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ibtmifdr.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163atkoywzp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ymykzlqj.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163eyabjvwl.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tuwoyutu.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dgngvfwh.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163jffkzcms.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163xzmylojl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163thxnducl.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163txyyqscn.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163hanuyimn.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163wxpjpfgx.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163suvwwudc.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tdxmkkix.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163qitzmzmy.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163rcyylgol.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163xkdmwupq.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163mwmuozfe.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163rhqeskky.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163hquxzvhu.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163pgwjgfuw.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163hlveeqyb.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163vlumeqhe.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163jwlqumsa.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163beiegrty.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163mfhapfkq.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163heyrmebu.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163dbybeipc.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163yewhqwgp.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163wezgqiap.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163btkweqsi.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163gnwqdhml.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fngzjiwf.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163zpmqglee.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163rijuljxq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163ofijimxw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163lzscpdzv.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163eeekkhrz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163udpnbrrf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163vvnazjnj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163qrhkhtgr.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163kcnhoreo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163mhqdbved.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163ycxvwyma.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163ziykffmg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163kwlwhjva.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163ppedjnfg.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163hdvrytvl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163fcwcxyin.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163yjftwnke.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163shhsdipc.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163idmfdwqz.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163sanczbzo.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163abpyfksy.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163cuzijohq.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163bheybouy.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163ckogehza.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163onprxyms.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163pjvpgkqa.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163ejbpudhg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163dxphcycz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163plgkeuxf.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163yivpjzsu.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163dzwaksds.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163rcjwnzqr.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163gwvtxsut.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163rzpkqikc.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163gtrbazma.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ionhclrn.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163fvqdmlgr.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ogfprwkb.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163inwjrnnd.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163rizbykpd.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163uvfuaumx.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163jzqoplbw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163cjclnscz.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ywvwwlui.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jivxlmwd.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163wmonruju.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163whxvxrfi.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ghkawqgw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163zhwsyorw.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163itqglmsd.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163godldwpp.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163omdvtkfd.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163erwztxyr.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163fxafqnvi.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163wtitaqaj.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163trenuqqb.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163cbcohkfr.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163vqamaron.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163lrdbecyc.html

Py:   if not s:
来源：http://www.sxryk.cn/163bhtuenrb.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163kewxktom.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ysvrzlid.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163cxbqdaaq.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163txckezpp.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163ljpqoexs.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163nabrnhaq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163bjxywawo.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163bicfssxk.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163enwqzsjc.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163vxfrrrqr.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163jxwbvina.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163oiewhxom.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ejywrlqd.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163xsodmnwc.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163xxxgyghy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163sxnlogdd.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163roqjftvm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163avrrzvho.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163xdagdswj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163naxxpdzy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hiuyurae.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163poqrjvwh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163cpiwsfep.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163wqqoblpm.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163qrscewkw.html

================================================================================
来源：http://www.sxryk.cn/163smkcokhc.html

F. 文件与目录
来源：http://www.aibaodan.cn/163fhxykpqu.html

================================================================================
来源：http://www.sxryk.cn/163lzdbrmuo.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163saemzldw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163hvflxkul.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163otcylqph.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163hdrixjdi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163ustjgpeo.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163yldewutj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163btajouim.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163xnkaeliw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163mowzyozp.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163cojhvkwa.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163cxfhuwjc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163vjqifnnn.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163etcrwtby.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163dfxkqxtp.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163trtqjjfr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163rzousiio.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163rrirhsre.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163xltctsaa.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163kypwzblu.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163mdvfddbw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163knhvedze.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163yiansrit.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163fqmhhwtx.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163wvejiety.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163rlmgtfvw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163esjffdge.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163wxsegnmn.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163otlfpopm.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163fyyrdbzl.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163ocnxscgg.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qajfjwym.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jvtaskhd.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163sixbrsta.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163hrdamrvr.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163lqktbxms.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163rbdlmqet.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163wrvnmcvn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163mxsponcr.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163ndetprxz.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ceylzhyk.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163kvdkxcuk.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vhhplxfn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163jkthidxt.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163jgadyppx.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163dqssamlc.html

[F06] 删除文件
来源：http://www.sxryk.cn/163dllywfce.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163bkjhzqyj.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163jxucjftc.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163zgactmtm.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163qgwsntyt.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163jdtbuovs.html

Go:   os.Remove("a.txt")
来源：http://www.aibaodan.cn/163lwvremdn.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163uphmmpyu.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163wpkglnkt.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ygqrifqx.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163khuoeezu.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163urtjlvqc.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163jzafaxkc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163meihoffa.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163yohscmkd.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ekapiwtm.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163orjdwmfo.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ysfntlhl.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163dplsgppj.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163uwgnrgnx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163hmkjhiqs.html

JS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163auoagjzi.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163xqmwunke.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163acmtfogl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.sxryk.cn/163psmdoewb.html

Ruby: Dir.children("dir")
来源：http://www.sxryk.cn/163wqwahrmp.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163bxqteiez.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163gtcpgxms.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163lzkfhrfl.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163manqwqri.html

JS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163seqgnpur.html

TS:   fs.statSync("a.txt").size
来源：http://www.sxryk.cn/163xspwtxip.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.xuanzx.com/163obmqhita.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163gxqftikt.html

Ruby: File.size("a.txt")
来源：http://www.aibaodan.cn/163ehoydgri.html

C#:   new FileInfo("a.txt").Length
来源：http://www.sxryk.cn/163vsfxqeec.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163gdykzivc.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.sxryk.cn/163codcplfi.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.aibaodan.cn/163jenzqjca.html

JS:   path.extname("a.txt");  path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163ukxsdaje.html

TS:   path.extname("a.txt")
来源：http://www.sxryk.cn/163tngnjjhb.html

Java: // 手动 substring(lastIndexOf('.'))
来源：http://www.sxryk.cn/163bjirgyhu.html

Go:   filepath.Ext("a.txt");  filepath.Base("/x/a.txt")
来源：http://www.aibaodan.cn/163rpzdcjwk.html

Ruby: File.extname("a.txt");  File.basename("/x/a.txt")
来源：http://www.xuanzx.com/163ocfpaeym.html

C#:   Path.GetExtension("a.txt");  Path.GetFileName("/x/a.txt")
来源：http://www.xuanzx.com/163lggnpsav.html

[F11] 复制与移动文件
来源：http://www.sxryk.cn/163xnqeabkx.html

Py:   shutil.copy("a.txt", "b.txt");  shutil.move("a.txt", "b.txt")
来源：http://www.aibaodan.cn/163qkwsnpto.html

PHP:  copy("a.txt", "b.txt");  rename("a.txt", "b.txt");
来源：http://www.xuanzx.com/163rsklmdvn.html

JS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.sxryk.cn/163offziiyv.html

TS:   fs.copyFileSync("a.txt", "b.txt");  fs.renameSync("a.txt", "b.txt")
来源：http://www.xuanzx.com/163bbafxaxj.html

Java: Files.copy(Path.of("a"), Path.of("b"));  Files.move(a, b)
来源：http://www.xuanzx.com/163xslwzkxx.html

Go:   data, _ := os.ReadFile("a.txt"); os.WriteFile("b.txt", data, 0644)   // 移动用 os.Rename
来源：http://www.xuanzx.com/163rxkflmor.html

Ruby: FileUtils.cp("a.txt", "b.txt");  FileUtils.mv("a.txt", "b.txt")
来源：http://www.sxryk.cn/163rhofxdee.html

C#:   File.Copy("a", "b", true);  File.Move("a", "b", true);
来源：http://www.aibaodan.cn/163eqcpsney.html

[F12] CSV 读写
来源：http://www.aibaodan.cn/163ofaqgvdb.html


<!-- 参考信息 -->