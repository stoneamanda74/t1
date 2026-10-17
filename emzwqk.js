外链999!wailian999！

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163diltring.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163xkmreodx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163gjteckig.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163eehcmzrx.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163sdurybsa.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163xzrvqktl.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jpnixzsm.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163hwlnpcxh.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163bkrfjavq.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163dirgcjqm.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163vknrorzk.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163rdztddtu.html

================================================================================
来源：http://www.xuanzx.com/163yflcjwmt.html

E. 字符串处理
来源：http://www.xuanzx.com/163dptalurd.html

================================================================================
来源：http://www.sxryk.cn/163zgujagkd.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163nlviuodl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163wtbxytfz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163bmmezmva.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163nnvcwjjx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163owucpsnl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163yqzqjbmu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163sdtgttka.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163wtppgrij.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163xndomyty.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163wbdxiuys.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163lkyonrsx.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163crftffxe.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163efmpfalf.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163fawbatzw.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163qklndbzl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163fabmlbxs.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163crzpkdua.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163pmbftdip.html

[E03] 截取子串
来源：http://www.xuanzx.com/163lkfnmnjb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163icrmtfma.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ofejrocp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163wevgcjpj.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163lppyowiv.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163nduvwekp.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163nqvdcwkn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163lumohucl.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163czjjmxoq.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163oonjzicy.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163khdcokbr.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163rxsqdekw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163nqfajvri.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163mqzumwsw.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163sbfrsbes.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163silpvmrc.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163gnflqgjl.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163fpkbvxrg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163vibcnwew.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163gdiirsck.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163ckhnybde.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163urvwglqf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163mjwvkqwm.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ycmxbvka.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163bteshbtj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163tjatcapq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163wjsdhhrx.html

[E06] 替换子串
来源：http://www.sxryk.cn/163xlnwosvx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163bdzzpysr.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163gkxopdas.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jcredfix.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ucdxqacb.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163pbjqhlod.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163eksdubmy.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163wggohczi.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163tpnfevhn.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163sssygfcq.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163ihpzpahc.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163ousyhulz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163efxoarhi.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163cwlpfqvt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163gquddrnp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163jtnrtsdq.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163dkcgqjrf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163ohkpnvem.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163bvzwpdtb.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163tjvtgdsn.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163rmnyrhqa.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163bpyzimnl.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163sbdbmmqs.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163joegnqbu.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163dqernzyj.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163iogzlvph.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ofuhhlfl.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163vnbrwrzq.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163snagfell.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163gnvfzuxw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163mkcyidli.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163wyqtpbzf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163xgualqxz.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163muukzcet.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163uzlaohzj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163hlsnnutk.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163qgowkwcj.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163gthuvgbm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163jkswbqfl.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ohvugnvo.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ckjdlnjr.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163ylelnqpr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163tvsngnvl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163ichyamsd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163tayvlqyk.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163mihpvkwc.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163musvcmxr.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163arqansoy.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qocglisz.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163nwoahelq.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163jkazaerh.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163tzkijxep.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163zdqcrhcx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163nzizfkrs.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163ycpzyacm.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163rdtkpysl.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163rzwinilc.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163dezhwvvt.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163dzbbjxvt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163qwgcjrkv.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163xnqnvmdv.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163mbdaqehy.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163jprkrypw.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163rzkvfjtt.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163orjmmzhu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ywuygtdh.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163rnhcujsz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163udymrdiq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163jyrhmxws.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163wsxsrqmy.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163rfotggft.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163cboxzlxw.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163vynejgzc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163gygelgvp.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163bmtbyavn.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163cmyvalsu.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ynidkfkt.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163ncdhzfju.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163wnekrtay.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163qhifwydb.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163bagzzido.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163eznnxser.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163afggcspf.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163vxwmjymd.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163uyizjhyj.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163guoinruw.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163hvmshjid.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163htmaijjj.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ebetjhde.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163wsqwgvrh.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163bxsawbvg.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163blhlmzyg.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ernxssnt.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jirpdjdb.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163lndnsgwv.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163asmolzwj.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163pcqxjznl.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163wisnvdpx.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163hbpdoszm.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163gedkfiid.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163yakqnlsm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163lgxtjfxf.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ylczhyrn.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163eolpvysk.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163gmagszyc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163dmojegmr.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163lnesywyq.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163inzuvphx.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bxlfrbuz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163agbxjlkc.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163gqrquvew.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ldpmfhoe.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163hbntoggf.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163rkogkikr.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163psbhoorw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163vkmhiycr.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163pnukvohl.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163risnahkh.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163dnzpziqo.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ztbciubd.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163ozgvepgh.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163tzjjglzf.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163ahdpbqjp.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163oqrgliey.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163lysgsnud.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163mfyaptdn.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163lvaaffnc.html

Py:   if not s:
来源：http://www.xuanzx.com/163yvwqbdgo.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163sewaiuwq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163hyfvucrs.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163qwbkcnvd.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163uafcghxe.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163lpzlfyou.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163sotbycuo.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163eddennmi.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163xfgyuiol.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.sxryk.cn/163ufmrgjmb.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163umtctcuz.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pnauizrw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163fyzgwgtd.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163iuxvxpez.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163evvqfzsx.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163muicekwz.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163atgtqsvc.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163mpmtrbxe.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163ifhzbplp.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163dcdbjcbs.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163igjcenco.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163esgombgo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163zhdvtaud.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163cxcebyuz.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163osbvqtrt.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163yyhmtvsm.html

================================================================================
来源：http://www.aibaodan.cn/163ovcwwwxn.html

F. 文件与目录
来源：http://www.aibaodan.cn/163dujukymn.html

================================================================================
来源：http://www.aibaodan.cn/163wldhbyww.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163mhdlhiiv.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163xmuuxmuw.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163qarejzjk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163zmhkddqi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163dykarqsa.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163woxenrtt.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163waajfskh.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163moxehvyd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163frchvhcu.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163ocqhjmvw.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163bigwkpjs.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163ygwedgri.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163csnlqrzx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163aobbjdzf.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163exadsyvo.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163infrpnjy.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163bawiftrc.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163xprbeuar.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163ggbfcasl.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163xbjfqpcv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163yjrklcpo.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163plgbtqkm.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163jksulxqi.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163lzftlajj.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163qzwkkvpt.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163szzdeuiw.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163tpvsuiak.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163vrujqqxz.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163coqyqlps.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163rhrlhxls.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163joopkdtp.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163uimxreyk.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163lbsggviy.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163vfnfksxd.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163ebzgollc.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163jidmmffd.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163wpyduuwa.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163ydhncogi.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163jyweqxsr.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163cjioxsld.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163cugwjkqb.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163szcwwrci.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163qjdzcthb.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163mxbrcsft.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163jlmbguub.html

[F06] 删除文件
来源：http://www.xuanzx.com/163unccoszb.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163tnkibbab.html

PHP:  unlink("a.txt");
来源：http://www.xuanzx.com/163dglcfdog.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163cqncgzmo.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163ueevjoqw.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163xmulvlro.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163yxmwstpe.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163lgqsyiur.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163oliaitkj.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163meeokukf.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163zhisiamy.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163prblbzmn.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163lbauympk.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163qxrafbsw.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.xuanzx.com/163pubrecyt.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163wfhibobn.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163uboiprwb.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163pnkbwyga.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163xbqihfqg.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163drcrxwhl.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163dmkawrjz.html

JS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163lkealmlt.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163howccxwq.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163qdkusakg.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.aibaodan.cn/163kqqiesoi.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163vsxmiqox.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ezxmqfpd.html

[F09] 获取文件大小
来源：http://www.xuanzx.com/163otpkyeuz.html

Py:   os.path.getsize("a.txt")
来源：http://www.sxryk.cn/163kctfsnon.html

PHP:  filesize("a.txt");
来源：http://www.aibaodan.cn/163vpcrsswu.html

JS:   fs.statSync("a.txt").size
来源：http://www.xuanzx.com/163brzjkbfo.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163yjugctfj.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yufldcdj.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.aibaodan.cn/163tcacbqww.html

Ruby: File.size("a.txt")
来源：http://www.xuanzx.com/163ikfsjctj.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163fizdluys.html

[F10] 取文件扩展名 / 文件名
来源：http://www.xuanzx.com/163kiyyllep.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.xuanzx.com/163bidgxugx.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163avdzxcbo.html


<!-- 参考信息 -->