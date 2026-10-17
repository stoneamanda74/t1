外链999!wailian999！

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163zxcaxavu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163drasptby.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163bqjrqend.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163eullywnf.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163dodnysjc.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163iglgxcli.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163wlmjfxot.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163pnpyyxkx.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163xvufpkdt.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163xtbwzpqu.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163yfsqnrmr.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163gzybyhcw.html

================================================================================
来源：http://www.aibaodan.cn/163xnixltwt.html

E. 字符串处理
来源：http://www.sxryk.cn/163eobnqhdh.html

================================================================================
来源：http://www.aibaodan.cn/163pffqlsoy.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163yqetkyjl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163unngttxb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163oxvvkuwg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163vbvkquyo.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xeqyvkgj.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163puoffxcd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163cdauwvnz.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163bwggbpfi.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163kcvhbmlo.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163deyvdzki.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163vuqrdbik.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163gmallybn.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zoiagkmp.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163snovaycr.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163jlkqzbri.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163vaxzxini.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163vuybdtwz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163oojdbcbq.html

[E03] 截取子串
来源：http://www.xuanzx.com/163dwhcnzty.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163cvfkqjjq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163myftletv.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163jermntyw.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163vdhwfkpm.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163jgifelhk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163vkzrpadv.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163dcadhdaq.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163kmszvqfc.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163fhvzxwud.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163eylxuijk.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163osxjrjdd.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ksepnolo.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163olfvbcwm.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163qsuemgid.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163kowtmlni.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163mjyfympr.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163auzhyvxq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163tsposhwd.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163inopbpdh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163mpetyygh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dvxoivev.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163cpwjddzi.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kqcloffs.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163vaauisxx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ytwnecjs.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163cdromhli.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ytcqsndc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163mginxvan.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163weowhevr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jifcsfzj.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hkrjsauy.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163jgsauggj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ubwwrzda.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163vqnkajmr.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ilfhqmma.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163saudbmcp.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ykhfksvi.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163zejgvypn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163hvnipuiz.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163dcjwptdh.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163mjwvrnra.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163xmwboomu.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163tdansovl.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163xvoswrwx.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163xtcllkeh.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163feddfyym.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163acnhwzhi.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163pejzwptg.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163sficiunb.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163gtjotfmj.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163uphadshg.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163dlqjdawo.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163rznvwioc.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163osjnotvw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163psjaghza.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163npzkjmne.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163pxlkbpvl.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163nfxwvdfn.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163wdgnjlel.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163zerpfejs.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163picsyryu.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163vykdouyi.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ujqqdfwb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163jyiczagx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163psvhizbv.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qttevtil.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163dzjmeqgl.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ziclujup.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163xccvzvzt.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163zipxdbmc.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163xfgfpsou.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163olhrqdva.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163rzvddrqc.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163zktpzdfc.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163ycdnouqk.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163zdlghqzs.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163sudaarit.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163ldjcivyg.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163bwechmpu.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163zbocsdtq.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163jjbcabdt.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163lfxufkxh.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163yhohozvi.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163biscpjhh.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163uliodycc.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163aqhyfvcl.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163vgwfxmkw.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163pkmcybrb.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163ouwmsawd.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163tamsndty.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163liitnbml.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163gbiidpaz.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163qpeudcpp.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ksovplex.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163rxsgselb.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163nzljihyu.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163zablagxk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163ojimtzlp.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163mthaafhq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163gfojbgct.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163hudiarch.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163ngfvevgp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163gbtgiotl.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163vlepdqof.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163salwykpj.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163gdiiowxu.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163tbyaopet.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163vtbuoxfj.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163gqginvyj.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163ttufjeqr.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163djmmzbru.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163psyfceng.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163ruvmrtzd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163rerpzcik.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ylrzsazt.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163ryamrqby.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163uxtvnkot.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163kbpubnwu.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163dtiywvix.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ijjsywqv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ldfldndn.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ogdijzvx.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163hnowtoej.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163yphppfzd.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163ahjmpoip.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163nrkegdko.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163xfcaluyx.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163lcrlafaw.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163sunoipww.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163haikouia.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163mnhplthd.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163ljnjcxrc.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163orjpigcv.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163iwiwxdlx.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163fjrramsp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163ulumvtzr.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163sxfzhnog.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163ytdslonn.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163jfifxmxg.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163uilcmdbz.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163idsawytt.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163ykszouvw.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163gyftcbat.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163jgruobav.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163bxcsmcjv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163lbutbnrw.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fdflrqtm.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163qoocmxsi.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163nnwztide.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163edpmlagc.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163duocuwdg.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163xmezjwjg.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163ptsadqqp.html

Py:   if not s:
来源：http://www.aibaodan.cn/163ksabwkkj.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163djibqukv.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163qdcolxpc.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163kpvmqbfs.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163cbuoclhx.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163zdsyynmp.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163xxwyyoav.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163vrkjphtj.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163fjcrehnv.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163emfzgnqq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163feevtlfo.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163mjcmbjub.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163qjxaihxh.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163atzqcpyw.html

Go:   // 按 rune 判断长度后截断
来源：http://www.xuanzx.com/163pgzrpzrb.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163llvaahrq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163yqyrtndk.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163cbxxjgjb.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163vykgbecm.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163nngahexl.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163oywovjiy.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163uijswprc.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163dhaijsuh.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163fefjafka.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163uyrppgwi.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163xxozxrhe.html

================================================================================
来源：http://www.xuanzx.com/163excaktvr.html

F. 文件与目录
来源：http://www.sxryk.cn/163hmbzjtmu.html

================================================================================
来源：http://www.sxryk.cn/163ormpfgzo.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163qpawunbt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163zfudqvgs.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163zjcidjfn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163xmvykpio.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163xbogjwej.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163mxgsdmgh.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163hftpzakf.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163zindpits.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163dbrmegpw.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163dyjvtbma.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163xpwejauj.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163sparbfay.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kxgdonir.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hjzhuznm.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163nccopwzy.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163kcbuwini.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163tnqlhyxv.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163sxetxwxr.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ibnsqcrh.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163pyzhyxan.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163rwzppnlt.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163quqejpis.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163nstcdjho.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163lxingxjm.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163zsvgjwfr.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163asqrwiwy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163qduovmeq.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163payijcom.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163zhfwzeiq.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163mgvzrasc.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163rvznzxuv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163qfjxtdlj.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163jqhcqhxj.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163obpmqavo.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163etfcbpxz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163qgmpkqrr.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ribycula.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163xuqkabxc.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qwifmfpd.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163pqxarijp.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163lbbwtpqj.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163vvdabynn.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163cvlbdpyh.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163lbgljnnu.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163nrmyhnlw.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163fmjlmfpa.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ofaesrsp.html

PHP:  unlink("a.txt");
来源：http://www.aibaodan.cn/163cwkxcrak.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163kzfkxfbl.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163bnjryzvg.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163coavsgmn.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163dvbmbxib.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163kkshytej.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163ctllsotc.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163dodyqlhv.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163splmchjd.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163cbpyddba.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163vlmvferv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163kvrvhuiu.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163pgwgsrfi.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.xuanzx.com/163uwflvmuz.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163cbblnuyr.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.xuanzx.com/163tfzlphrv.html

[F08] 遍历目录
来源：http://www.sxryk.cn/163gqufgjdn.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163egedidpy.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.aibaodan.cn/163nunvtavj.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163ditmrvhe.html

TS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163lzydomdm.html

Java: Files.list(Path.of("dir")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163uiciuttl.html

Go:   entries, _ := os.ReadDir("dir")
来源：http://www.xuanzx.com/163oismelni.html

Ruby: Dir.children("dir")
来源：http://www.xuanzx.com/163qbdnjvun.html

C#:   Directory.GetFiles("dir")
来源：http://www.xuanzx.com/163ikutvmzt.html

[F09] 获取文件大小
来源：http://www.sxryk.cn/163bbwfsenb.html

Py:   os.path.getsize("a.txt")
来源：http://www.aibaodan.cn/163dvlxinik.html

PHP:  filesize("a.txt");
来源：http://www.xuanzx.com/163xnvergvy.html

JS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163jtoqggxb.html

TS:   fs.statSync("a.txt").size
来源：http://www.aibaodan.cn/163ftqwgxmr.html

Java: Files.size(Path.of("a.txt"))
来源：http://www.sxryk.cn/163xibypaae.html

Go:   info, _ := os.Stat("a.txt"); info.Size()
来源：http://www.sxryk.cn/163onbsprcl.html

Ruby: File.size("a.txt")
来源：http://www.sxryk.cn/163ujedbfbx.html

C#:   new FileInfo("a.txt").Length
来源：http://www.xuanzx.com/163nlbtexzk.html

[F10] 取文件扩展名 / 文件名
来源：http://www.aibaodan.cn/163qqlwqeeg.html

Py:   os.path.splitext("a.txt");  os.path.basename("/x/a.txt")
来源：http://www.aibaodan.cn/163tpehaewu.html

PHP:  pathinfo("a.txt", PATHINFO_EXTENSION);  basename("/x/a.txt");
来源：http://www.xuanzx.com/163jiyrzbdr.html


<!-- 参考信息 -->