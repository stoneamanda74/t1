外链999!wailian999！

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163pwdnyovb.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163ptfohcpg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163qgcukdde.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163gncomnqg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163fmowwuor.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163opfnrcbo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163fdurugkx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163xgijskdw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163tmeqwnkv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163wpcfpmvc.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163rgwxhdmc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ftnkstnn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163fbhdtxfl.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163lygyezbm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163tccproah.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163xmrpwsiy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163gdmdyxab.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163erjulicq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ejqdtwvy.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163tosgtwbz.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163mmvtblsm.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ltaphrzl.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163voshybdu.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ehwhnuco.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163dykrgnkv.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163dubuztqu.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163nwhdxxdw.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163jsuwtelp.html

================================================================================
来源：http://www.sxryk.cn/163nvycxxkh.html

E. 字符串处理
来源：http://www.xuanzx.com/163abotgqtm.html

================================================================================
来源：http://www.xuanzx.com/163fupbrtrm.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163iikdtyzo.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163tsyiqmrr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ewpnirvu.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mnhmfavc.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163okttjdvd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163adffkonv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163hpmeqgbo.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163qobgwzrl.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163iwovysuy.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163rqltitsc.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163kvlpigjc.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163fjoufigy.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163oxeliaao.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163vunluoqw.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163vzfnqtth.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163jqddptdx.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163qgbnlmkr.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163jhrwrovy.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163vyfzahgr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163tqgazzke.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163pxfagivw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163buylrkux.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163fqxhpicm.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163gooyeviq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ohluimaz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163krkhvthm.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163tpfqnzfj.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163cfihhywe.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ofdfnury.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163hdrbcyct.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163uzghsgeo.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163zwuedjft.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163gcovmxur.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163pkanrjps.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163jblejqcj.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163dsbwxivx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163nvadmzqv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163yatixwkn.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163zaglpghk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lseblfbo.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163nyckhykb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163tiqiwasp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163xvcthhas.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ponjdvfm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163uuvoubhn.html

[E06] 替换子串
来源：http://www.xuanzx.com/163dmgqjfgw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163dgchtrvn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163gbmpczhw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163twkhqwhc.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gtnwkxxa.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zbgfzeng.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ufxkjgus.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163gbikfhle.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163mgtgvllo.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163nuhgnyse.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163kfuyzoft.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163umvmijwu.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163zrmbgpng.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163fcasiyel.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163wkasalee.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163msosehuk.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163sfefdzla.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163lyljrejw.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163rgexwenf.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163euzuqtbq.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163wfueixya.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163fdlsveoy.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163xryvzpqy.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163fqnwbhaq.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163yglcflyt.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163jtzxihsi.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ldbeybnb.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163kofvgopy.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163esoylprn.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163msqtevpz.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163etrqqddc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163nkegmnzp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163aizmbbiu.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163goludsxi.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163poygtmjj.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163yclxeiaz.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163oxxeevst.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163btzwlyth.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163kbsbhjdl.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qgivstpm.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163rnpmldcd.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163fbnloefm.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163perxyfhs.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163eqxoospb.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163jvdjzekx.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163tcojxhnk.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163utnzbmru.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163rlajnelw.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163bufsbmvf.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163airladwg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163lqmfrsev.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163gtcdtdgz.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163vewehufc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163sjaaxzki.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163xdphastg.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163khzfoppm.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163akezaleq.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163wyqxncef.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163jnlxqlos.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163bdbdtpgu.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163mnxgekfd.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163cpwxlxcb.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163hwqbbehl.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163yyqwkdvh.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163ctigipyj.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163lqywjsij.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163dvdznzka.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163zgxtnvlh.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163cpmrxacl.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163gwkajduf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163sazjdhbo.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163dvuirlxh.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163hfaygfjz.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163mwntckaw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163llmoyfax.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163pnuwhibh.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163mtmxjmxe.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163kbnlrqqx.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163xxhyiibm.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163msorifuh.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163sgwnlelq.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163qkjgvnrp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163tubqpohl.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ogyaaful.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163mcjskacp.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163crlbxueb.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163jfpadmzp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163klrtctgw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163tgxsczeh.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163jgdhcrqs.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163enhwvnda.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163kvqllwgm.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163eqmfzopl.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163pjtbgktr.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163athehkvg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163olvporbt.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163tsuugaby.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163jdwraumq.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ounwrccp.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163adsxpisd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163fwuaunoj.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163shovxrbz.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163gutttack.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163uukotspg.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163xctodoxc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163mplacijs.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163dfnluswg.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163zerqujaq.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163lzzdzdmk.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.aibaodan.cn/163cmzpeeuy.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163faftnvhl.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163vlyeqybk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163jhzexxjv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163ufiyjvoo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163losugdcb.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163yjznrgcs.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163cmdkkxbm.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163eicdluus.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163rfjzoaud.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163ibvuhypn.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163zelggkdh.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163xytvhtwp.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163vajzhxxk.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ugdfjzqx.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163sbgxuayp.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163sgfuiqrp.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163ickreadh.html

Py:   if not s:
来源：http://www.aibaodan.cn/163zesltkfv.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163crkkpvhl.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163kwmzbnkc.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163ikzdxuvr.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163xhtdpplv.html

Go:   if s == "" {}
来源：http://www.sxryk.cn/163vfpaoryz.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163pskkorbn.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163dczkupav.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163fyaqvmha.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163axswfurh.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163dxkgehxc.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163ydjrqsfq.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163uhjmehey.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163tkjejjks.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163ckzyqykp.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163qndvtozy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163buzxiupm.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163pkhdqika.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163aclodtts.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163ekafehsw.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163kajdzvov.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163lbdzfyyi.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.sxryk.cn/163bykynwnd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163mipmquyt.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163ojytqgct.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163otarzjxl.html

================================================================================
来源：http://www.xuanzx.com/163scodxuoy.html

F. 文件与目录
来源：http://www.xuanzx.com/163efxzmlmq.html

================================================================================
来源：http://www.aibaodan.cn/163iztfnteq.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163wutwkvgm.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163cubsclyu.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163wmhdkcep.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163hebudthi.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163ktjzzepf.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163rezmyxly.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163kpwigiky.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163chquzmst.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163casdzacn.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163tlgpjyih.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163pbhsvlkp.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163aidwemro.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163mwohaqax.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163hcjnvrdo.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163szrxuaty.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163epgkicwg.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163daejdgzp.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163fyctvrpy.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163zyoapfyf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163oouwhbjm.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ynjxzwvf.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163gizethfv.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163henhfibz.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163piynaqkf.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163jpqhdfhz.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163txwzrnof.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163pgkimjdj.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163poelahdq.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163ygfobrgd.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163jnuzbspy.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163zjzzfhax.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163rswtutki.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163pxojmmvb.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ycugyvei.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163roycuiqj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163vnvwndbb.html

[F05] 判断文件或目录是否存在
来源：http://www.xuanzx.com/163xhwlsdrg.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163mvqthjld.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163roezzuwd.html

JS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163qhfuqfho.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163ufnumuek.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yaioyhuy.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163bjyumirh.html

Ruby: File.exist?("a.txt")
来源：http://www.xuanzx.com/163lwnapioq.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163uqhahcoi.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163ftahpkzz.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163xubphqwv.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163vcxewonz.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163wqauhzgv.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163tcqvugfc.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.xuanzx.com/163kglqchig.html

Go:   os.Remove("a.txt")
来源：http://www.xuanzx.com/163oicrsvvc.html

Ruby: File.delete("a.txt")
来源：http://www.aibaodan.cn/163njvmqxew.html

C#:   File.Delete("a.txt");
来源：http://www.sxryk.cn/163pddzdiue.html

[F07] 创建目录（含多级）
来源：http://www.sxryk.cn/163ajfvzxmo.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163ywpueghp.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.xuanzx.com/163akwpuzqr.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163hwsifspj.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.sxryk.cn/163vxqbkziy.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.sxryk.cn/163rnpwzzht.html

Go:   os.MkdirAll("dir/sub", 0755)
来源：http://www.aibaodan.cn/163ufcpkpci.html

Ruby: FileUtils.mkdir_p("dir/sub")
来源：http://www.xuanzx.com/163nyywssbg.html

C#:   Directory.CreateDirectory("dir/sub");
来源：http://www.aibaodan.cn/163ygkwaqch.html

[F08] 遍历目录
来源：http://www.xuanzx.com/163bttaufol.html

Py:   for name in os.listdir("dir"): print(name)
来源：http://www.xuanzx.com/163sqwvkgfx.html

PHP:  foreach (scandir("dir") as $f) { echo $f; }
来源：http://www.sxryk.cn/163lmtnxyze.html

JS:   fs.readdirSync("dir")
来源：http://www.xuanzx.com/163pdiqvkem.html

TS:   fs.readdirSync("dir")
来源：http://www.sxryk.cn/163lelcayjo.html


<!-- 参考信息 -->