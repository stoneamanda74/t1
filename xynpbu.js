外链999!wailian999！

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163bztklkqs.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163dveohlrz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163doxffsgw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163gmofdado.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163vwwornmr.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163hmotszwu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163hllflqrv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163xentdjfw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163yoqwrqma.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163oonnuvoo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ouqqrajc.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163qmiutxya.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163bireqtgs.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163htaxgdoy.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163fecqvuer.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163tlhwoudl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163gayaijnj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163pqimjpai.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163pkbntacs.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163azewvdov.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163bmaprxzh.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ypflhcpp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163xbybiukr.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163nfyotklu.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163gujktwun.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163rmcgoaxm.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163tqqmfclo.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163vaescvsk.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ooiyhswu.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163xeovstim.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163duewueqk.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163huoiljhm.html

================================================================================
来源：http://www.aibaodan.cn/163baxthkdz.html

E. 字符串处理
来源：http://www.aibaodan.cn/163qrwzmmgt.html

================================================================================
来源：http://www.sxryk.cn/163ofbwwnzj.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163kpnobfpz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163cmsfeqtc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163qempbnsf.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jxdyddkp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163elfgwycw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163erivpagp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163nbldelle.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163tluinhbz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163srmqkskf.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163nywmkbnr.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163bfhbnxyt.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163wgkmlsib.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dyxxlhly.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163mvylylfd.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163qtwfvipn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163tgvhmfyw.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163vuuokuer.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163vimzumqb.html

[E03] 截取子串
来源：http://www.xuanzx.com/163afgavarx.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163trbjwjzi.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ienuuojd.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ljxczdah.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163hyfforzw.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163onczihpe.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163xtjspjie.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163uxgakpln.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163uryhteop.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ssdciyyc.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163yuvjxykb.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163edpesotd.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ugrmenjb.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163yrfrkthc.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163pmxpopbf.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163dpecajyp.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163hbiakdyj.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163yidlkgpx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163zcwpgvct.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163mroouxud.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163bnqshubz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163vmqqhehn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163aujogsra.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163ldjugkpm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163zpokwajr.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163hkoirlyf.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163fnfzyzwg.html

[E06] 替换子串
来源：http://www.xuanzx.com/163pyzbftno.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163wsyoygqw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ukmolabg.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bwiihjoh.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163sxfqdgab.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163vbrsaqfr.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163ulnfyguz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163pramuqcf.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163lhvrhhgc.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163sglmopkm.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163etabahuq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163zchnnizg.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163axdrehlr.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163gsytfqwg.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163xjdymzdm.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163dkulswwd.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163nwucaudf.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163tnbxwkpx.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163puxixxwj.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163ojnzsbtg.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163jydxtrbe.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163uxnetmgg.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163tqzuppek.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163zsgmohuo.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163crflyiqx.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163hfmcnggy.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163yayhvksj.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163xzhsairg.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163rgtwlewf.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ocfhctpl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163sjqdfkgb.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163jbbiwyep.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163rfdclfte.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163naeyewzo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163joybonjl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163binkyhob.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163thrkxhgi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163vmhkaopm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163vjgjphmb.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wznmdeoy.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jexqnfxs.html

Java: String.format("%03d", 7)
来源：http://www.sxryk.cn/163alseuhdu.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163zcujfxdl.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163qagpyfht.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163smdmukmg.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163xoajmcxn.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163pdvzrpbq.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163yhzgizgt.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163huyygncd.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163cteocrra.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163mljlbjze.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163zadudrow.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163qcppxsbn.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163hkzkjbyy.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163mpnrzpcm.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ebyqzqbe.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163zadycxft.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kfwffaib.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163gxqkscxw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163jitewemx.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163rriyslgh.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163ynmrisoh.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163qjydkufp.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163jrhbjpnr.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163nybgfdgi.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163zknbjyld.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163drqqjiuz.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163xtujzexg.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163nezxbyax.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163rcnsdrcb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163jtyiylhf.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163tinyiebz.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163tqazslnl.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163uuuwrjzk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163ppsyfrww.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163kbitgdfe.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163bencmxsd.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kohkzctz.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163itbridga.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163nxnwcjoz.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163tajidxxx.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163grljmonu.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163wzvbtvex.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163zvojijwm.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163ziwjfoyv.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163kmwijltd.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163mhhphtqu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163eyrvhsmx.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163chxavhnm.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163gyurruyv.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163vthywtqn.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163oeitmtru.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163ynidhdus.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163kxdbouii.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jvkeyebr.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163lsqfrrxz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.xuanzx.com/163blwiklhb.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163jgvinuno.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163kptcagjy.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163mlfdfyln.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163llhtzkrb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163zctspyry.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163ncxqffxq.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163hgdtcptr.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163mhcfgfid.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163epfxqukk.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163cckhpcvh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163xcqhlowe.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163txbzmroe.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163bmrmjoak.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163fjojxwrb.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163spcqdhiu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163gefbdzxy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163bclpawwe.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163usvvjguv.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163lsqliaqm.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163yfnphgmx.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163ubsxhpnt.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163vlqtbxvu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163rbwsggkx.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163bqxnwstm.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163vmbfhlmu.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163btmgktxg.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163xdolrqfz.html

Ruby: s.lines
来源：http://www.sxryk.cn/163lqwugjru.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163vuvggjvz.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163gubllkiv.html

Py:   if not s:
来源：http://www.sxryk.cn/163xxgcmpss.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163dqletctq.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163ndlguwai.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163vjqfktpb.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163rrqnxlqj.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163yohblhar.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163oihsetuv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163rxdzubrj.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163stviitzn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163wyachgic.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163zxxtuxpl.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163izucbbkm.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163inrwbucb.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uhtmarjc.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163ttiqeglu.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163fzerdcqi.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163gjnregru.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163vemcvrdl.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163zzibujgc.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163zunktmhy.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163wgiighvu.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163sywhqkda.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163erebxgxw.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163xzgdetzi.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163fcamezmo.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163royvtvjd.html

================================================================================
来源：http://www.xuanzx.com/163rbbhnpcs.html

F. 文件与目录
来源：http://www.aibaodan.cn/163rknlbcpn.html

================================================================================
来源：http://www.sxryk.cn/163xxqrzrft.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163hgnovrne.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163afwrrxrr.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163sifbjqvn.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163xkggjrap.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163jfirdthe.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163jormrkmj.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ugxeshsi.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163hlhipfje.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163ypghszkz.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163nfpcrhcm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163znbclopc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163usfjzgrq.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163salvpmiw.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163luqswtbg.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163uevtnogp.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163frrhpaiw.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ktiggrne.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163jeloeaxn.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163fcjxxuni.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163suhbfvzw.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163pmsjcskz.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yzrrrdzl.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163ylukcqiv.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163bdfbxpsa.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163lhdqrile.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163ntzhhfow.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163bjofwmvx.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163molhrroi.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163yuptfyzb.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163igperrmk.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rsbqnhuq.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163nmtvszdz.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163xchbjdtq.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163thesnlme.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163xrnshkaz.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163gawzkaie.html

[F05] 判断文件或目录是否存在
来源：http://www.sxryk.cn/163jjorwacb.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163ntaxzqvj.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163pwevwugs.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163skxlyxrf.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163dvrpqzra.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163zmwwopcm.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163itxjfxwd.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163rjkxxfvv.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163axpvloao.html

[F06] 删除文件
来源：http://www.sxryk.cn/163nufobpjy.html

Py:   os.remove("a.txt")
来源：http://www.xuanzx.com/163nwvrlute.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163udblrrxe.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wpnpuile.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163leuapmod.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163iihdyivf.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163ipzvzaal.html

Ruby: File.delete("a.txt")
来源：http://www.sxryk.cn/163fdhltamg.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163jarartzj.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163xidmyrbh.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.sxryk.cn/163vhciyhmr.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.aibaodan.cn/163nkfvqsxo.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163iqvgfppc.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163feespuyc.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163gnzskjtr.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ugaiqaxv.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.sxryk.cn/163zkwmomuv.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163jmwqqwmh.html

[F08] 遍历目录
来源：http://www.aibaodan.cn/163ndqizuyp.html


<!-- 参考信息 -->