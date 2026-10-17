外链999!wailian999！

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163aeerisfv.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163kohcavxa.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163peenrnzq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163eeqifqsu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163bvfnibhi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ifftosah.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163fuwlwqum.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163fsphnbkz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163vszrvzrh.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163gcpqrpth.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163iapllikz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163oetdzbja.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163lyokdacu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163gvpsozsv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vtapbkey.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163wpwwykzv.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163klwcrvpz.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163kczbhxhn.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163zcxfcsio.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163hddcgosb.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ndoyeyig.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163zddxlznf.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163euplzasp.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163tluwcosj.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163piijayck.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163vgknhvha.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163rmoqvokv.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163stlttlaq.html

================================================================================
来源：http://www.sxryk.cn/163armlpyjx.html

E. 字符串处理
来源：http://www.xuanzx.com/163muywjoug.html

================================================================================
来源：http://www.sxryk.cn/163frlktaea.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163icionrln.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163rejdjdge.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163vpeefsco.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163rkmppxch.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163lozprrwl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163sqyprvhh.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ntzubjxq.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163tnlphnnn.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163lhuuujlz.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163cdwzswnu.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163tfqoronk.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163gtadszhs.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163gyypzdqy.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163zbbvytmu.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163xczeafqf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163sevticev.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163rwdcyryk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163ehxbmofa.html

[E03] 截取子串
来源：http://www.xuanzx.com/163jomdtfxx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163madanbgd.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ymdpcbcq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163bkrdrjmv.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163hmsxzrjx.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163jvpiuiyk.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163bblcklxq.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163kwfebosp.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163pyttqifp.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163rnxtawqb.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ztvvrmzq.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163quaeigij.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ubhtmacy.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163fjtvukpj.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163psoelvod.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163dijxkayt.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163slduvjls.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163sfojcins.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163rzzzxfua.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163jnuboxyo.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163mrwggyfi.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163pueavtbo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163kuydkemn.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yeuvilro.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163ayfqtolb.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ftxczqal.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163gdxwjlnc.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ownwxusx.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163uzdxetdg.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163skfkgwwg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163yhjedrlv.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jozmspxw.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163iaapzdns.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163yxzfilet.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163zohjcazn.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163dtknlouf.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163yvuihrso.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163jyhopyfb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163xiatqyvn.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163fncmksbp.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163cpyvrrsn.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163adixnman.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163eduiqssd.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163geyqkeav.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163dokycuyu.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163zaervidz.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163pcdikoxk.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163mrksipeu.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163yyutievp.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163ysukvwiz.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163esvyzmxq.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163qeeocfoa.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163irjokbkh.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163cnbuname.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163kpzpmwci.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163mbiqasse.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163yffkcjiu.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ehcofzip.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163eualglal.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163rtgalvlg.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163ihhphxtx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163jpnwcymh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163tzbujdkv.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163mrkruyuw.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163uturflbo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163wztxvvlx.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163kracmvng.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163fpdmzpwm.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ewfixxlw.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163rmmofydz.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163emezhdwm.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163mgzgujru.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163jubtbifd.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163pylcpbsf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163zpgdmopa.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163iujiatda.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kyigwsdb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163wpxpnxui.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163fkrfxdyg.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163ucxyngrq.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163bchnrlxt.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163jtcvjncy.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163kscvxnhk.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163cjqjnowo.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163ejujbirf.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163ahkppvua.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163gmmcgefi.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163tzoodzwd.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163htbwwiqz.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163akgvfkqr.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163kimsheqf.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163womqvjiq.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163mwrdjjqp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163rcondbvv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ouizcqhj.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163qvnhxzrq.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163xgipschq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163qaojcfpz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163pdochvix.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163pqwvdalw.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163fdtioeyf.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163rdmmplcx.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163iixkldai.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163mozmdmyx.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163zzmxyghd.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163smprawto.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163qyaiwwio.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163jiajzwas.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163dycljdlw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163erzjqxse.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163grswuwav.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163riqunjhz.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163sbvvgojl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163fbxyrxgb.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163snqmlkfa.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163eysndlkv.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163cjomcght.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163nxtxdjje.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163krpiqten.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163ysjlqzng.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163fmarbqqg.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163jlydyjrr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163aezncwne.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163thpvixsn.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163ddzrkcex.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163ingkkkia.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163xbzlrmtg.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163dhndkjcl.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163rpkrvijd.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163xkophipl.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163acqudrom.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163yakafxgh.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.xuanzx.com/163edyuqmkx.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ougvupyt.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163pswjqyjk.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163otgzjwof.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163lluybogj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163nvucyvst.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163ewddwigt.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qcjaeryn.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163cnmoqnhg.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163kuqpqlkp.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163bsanhvkq.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163jtpbromn.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163ionsobgn.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163whpmjvjy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163edutmetp.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163epjmkrjm.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163abixxarm.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163tabahiiq.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163gfqgqbbf.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163atuvduaf.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163tdxedqwq.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163qibtirxq.html

Py:   if not s:
来源：http://www.xuanzx.com/163uhsrtbko.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163hvvsvrnn.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163wppuvwke.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163mjdjuhik.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163fqyxbobx.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163vuxkbolc.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163bsmitxwq.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163tkzfcfab.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163xwzpeyce.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163ukycfrlp.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163fabicevu.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163kusnvxhf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163vhgxfopi.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163jajronqq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163dytaaafg.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163qwandupw.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163xqjbpqgn.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163vmezhgmd.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163nkfwalkk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163miuohzpk.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163dvlorhrg.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163glhbjdjo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163nyhblarx.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163qedrchep.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163pvoepgek.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.xuanzx.com/163fwnheboz.html

================================================================================
来源：http://www.sxryk.cn/163qcnhrdfe.html

F. 文件与目录
来源：http://www.aibaodan.cn/163mkmnyglp.html

================================================================================
来源：http://www.xuanzx.com/163ppbjbyds.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163ronwfgas.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163nnltnfhp.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163eayktgtj.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163hihuletw.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163pvzorltn.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163ygqsavor.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163yscecjou.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163fbkbaypg.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163rmwyqgkj.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163yezrfipk.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163myjofsos.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163rzbutywz.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163hzsnkiwr.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ocwjdbju.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163pqnukjrr.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163xxjetgca.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163bnfktwzk.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163htvglsms.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163fosqxmrg.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163gmpplvzr.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163jmsmbtjp.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163vvdtmumc.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163qbvvosgr.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163vxgykwmy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ytoasqwi.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163mssxypfi.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163icxqalwz.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163ivcjakpc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163ojipwgqb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163ozzubfet.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163qnqzakbd.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163aphwokle.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163zjndlwap.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163hluoneos.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163epsbhndk.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163maepcpkv.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163mfkprzgw.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163sxsstnvp.html

PHP:  file_exists("a.txt");
来源：http://www.xuanzx.com/163rugpuuna.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ekgnzzoj.html

TS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163nqwalyrx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163vnpaduhf.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.aibaodan.cn/163mlhjutqg.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163kmkxlxbh.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163zizruaoj.html

[F06] 删除文件
来源：http://www.sxryk.cn/163zeklptqj.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163fqoqyypu.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163hghzzjzd.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163ynhheuzh.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163hnjhasfb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ugcakbmg.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163iskwzhhn.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163pmrujbgc.html

C#:   File.Delete("a.txt");
来源：http://www.aibaodan.cn/163xvnmmfsr.html

[F07] 创建目录（含多级）
来源：http://www.aibaodan.cn/163xnpolfck.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.xuanzx.com/163azjptqjn.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163uecwpfiy.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163otwmkbtv.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163rdctqzfr.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163jksfddhf.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.sxryk.cn/163iomzrjos.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.aibaodan.cn/163urwkbaee.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163aprijipi.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163ogsfbnqi.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.sxryk.cn/163tjnepsqk.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.xuanzx.com/163daixbsem.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163sswmzqqa.html

TS:   fs.readdirSync("dir")
来源：http://www.aibaodan.cn/163tmzjdxgq.html


<!-- 参考信息 -->