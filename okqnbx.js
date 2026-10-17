外链999!wailian999！

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163yqhueqwb.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163vnbylhtu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163qxrluagf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163jpcavkme.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163apmaunas.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ntwbhjjt.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vkekqsou.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163knnlzrss.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163mbqyufui.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163lyrzzhfy.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163hipohdot.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163txubuxze.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163flwgemem.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163kvlszgsl.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163nqrnafpw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163uoccsmih.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163lrcjayvc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ssxtaeve.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163bojzroeg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163rnhsdtcy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163getqryun.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163bybexhlz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163vsiqzjhm.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ksnwhjla.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163iutemjva.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163tyowocpx.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163pjduacfn.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ieuhzdkb.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163xjgkeqto.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163qfoewruc.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163polxzfvv.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163pduewthc.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163sybgrxuo.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163rnxapnjp.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163hllboqpp.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163vtnbvxgy.html

================================================================================
来源：http://www.aibaodan.cn/163rrcsxpjl.html

E. 字符串处理
来源：http://www.sxryk.cn/163onhszjxa.html

================================================================================
来源：http://www.aibaodan.cn/163zuijzrum.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163tfijrvws.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163mkqgcpvw.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163sdelsxqj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163fvllbexi.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163uvxlsnrw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163gtwgcwra.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163iqjtpcng.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163pnepsbko.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163leotfvis.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163bfgnttkz.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163jlpgbpgx.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163adgxlxuj.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zzvckkzl.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163pbrqanso.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163weggxfnn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163wuqjpumd.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163vdyolwna.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163objnspma.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163mvanpfum.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163hadhphjm.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163njcadzwr.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163afgmpdop.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163docsznlv.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ifnutiog.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163nwnqnrax.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163lskfvayr.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163uxfgzivt.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163khstxzvl.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163yhmhxkli.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163odoizzbo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163ozkusuls.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163fqlbnyzl.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ixzggkxg.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163vhpxqmlp.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163tegsehtd.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163tqshjtzb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163zmbaeesz.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163ytahfpsy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163aogbnwpv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163uinuhcmr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163zimxwkmz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163iokzejrx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163pnobnngo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163deapehpk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163newqxhvq.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ykuztuex.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163rjtdpozo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163woweyfei.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163zzlhljbo.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ttxgjdrk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ihesqrba.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163uxxbohqt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163cefcknuf.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163pnxdoqgw.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163alitprtu.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163jdqnxjre.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163rqxpmjml.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163gwcfqwvd.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ljhxzltw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163mbuaoqji.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163jokxeuvb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163hnqoenxw.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163igimomun.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163ydugfjyg.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163gsxgpooz.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163tncwiiup.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ydiyqvzv.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163nytdcfkn.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163qswnqdml.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163dfmdkqux.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163pavxskdy.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163mhldtxax.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163xvohxiem.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163ioxvzstk.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163hduqwalc.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163dblaotap.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163bpxzqrvj.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163dmpkfsua.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163orrgfxsq.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163tfjrgrbx.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163ksxlpnwy.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163izeockxb.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ideuqioi.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163hozwfjbf.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163ydsewosg.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163qalcercb.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163rxniekpy.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163afdyjneb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163fpybdgdu.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163firzencu.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163kcfajrmf.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ypioucjj.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163ekuyjxtn.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rinmyepe.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163babwwruz.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163vpmbkiqg.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163lalvunbh.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163fskkhtnr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163feawmovd.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163gdepydfi.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163ngyskcrg.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163oqjazwwj.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163exnzozog.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163mcjtxegh.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163vnyuiesc.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163fztcdiry.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163acfgsdmx.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ueurffmf.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163qvhuwqoe.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163gwkmwzik.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163yswaputt.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ddevgxwt.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163uqfctonc.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163jxxiyuzp.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163cyxorgwf.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163gsucclhm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163rlovphxs.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163gxuadelq.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163lfqpvllc.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163qtyaehzj.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163tawsvinv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163ozaaoian.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.aibaodan.cn/163gygvwmsa.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163gadzcpqq.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163cyihtgqx.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163qwxsedom.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163kemmzemd.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163srgpiqua.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163ttfcayiz.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163wzxvhacs.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163wzizngsl.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163wecfvkzc.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163tuzqmlkd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163yfabkimk.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163hnjcmdnd.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163axwpmfwe.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163khqcvhxl.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163kzomorbr.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163lmaqqvec.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163wmwtwcwg.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ilzkffme.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163svuiltgd.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163iozpshma.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ylhsdbmz.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163upqtshcc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163pzyxyfkh.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163fhrurnho.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163apbikoyc.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163ysjwmfcs.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163vvcncilm.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163dfywoxqv.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163ylsjuzdh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163pbalnqgd.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163naemeloq.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163yhwqjxqs.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163ridvjqgp.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163mkztcwtk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163smcpugbh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163yvaxjick.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163gtjxtcqk.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163cnvifgaf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163dmzwtqmr.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163vqfkiubq.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163jwivoysz.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.xuanzx.com/163nmwppfml.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163iybdblfq.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163kupvhfdl.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163vcsgcvlr.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163ikulshwj.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163kcqxlnww.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163lugqmyhf.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163rkhtjyow.html

Py:   if not s:
来源：http://www.xuanzx.com/163emshnzza.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163oedplloi.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163bmgihhka.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163bndztmax.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163hnxieggc.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163pnengiqa.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163gfdkmufk.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ypwmvzmu.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163howeggbu.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163gljqpwos.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.aibaodan.cn/163hynjjhat.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163vldkjurb.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163hcgloxkf.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163mgbziejf.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163hbgkjoab.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163qulwdkkl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163zgzbbqhm.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163hsoyzgck.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163aiyfgrlv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163nrfqzcoc.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163rhsabfui.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hkcsoysu.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163hsrjgvig.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163qzdgzeqm.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163mxaaqjvp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163kcxmyfiv.html

================================================================================
来源：http://www.aibaodan.cn/163ygqmlkab.html

F. 文件与目录
来源：http://www.sxryk.cn/163nkyffcst.html

================================================================================
来源：http://www.xuanzx.com/163qniwcdhy.html

[F01] 读取整个文件
来源：http://www.sxryk.cn/163zojbempg.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163ttdoarcf.html

PHP:  file_get_contents("a.txt");
来源：http://www.sxryk.cn/163nllhuyxz.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163cujhsdru.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163hnyisxfw.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163pevtorpq.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163bbtbvmrc.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163hvdgsomo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163ctckbvll.html

[F02] 逐行读取文件
来源：http://www.aibaodan.cn/163knbdpkhq.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163lypsgzzn.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163mmfrahku.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163atbcqwdb.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bhzomvif.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163czdkeebq.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163jkxshlvv.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163kimgffgb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.aibaodan.cn/163qftpadub.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163bwyrtlkw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163dcnoqgpl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163ycbhwnfy.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163yqviwwpz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163smvmsxvy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163xnbjirij.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163tvqhgrvw.html

Ruby: File.write("a.txt", "hi")
来源：http://www.xuanzx.com/163lpwzfgiy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.sxryk.cn/163emjrgpjw.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163intcqdch.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163hvchevju.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163lphmttth.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163nyoomjil.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163crqevhml.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.aibaodan.cn/163myjwttch.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163vpqbnnhy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163unewlswp.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163zezpgkuf.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163ilbghygn.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163gxghegko.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163fveakjqp.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163vmwlofax.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163tngtblly.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163ggpzwfxq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163fxsqmikf.html

Ruby: File.exist?("a.txt")
来源：http://www.sxryk.cn/163umwxsfkc.html

C#:   File.Exists("a.txt")
来源：http://www.sxryk.cn/163kiogqvcc.html

[F06] 删除文件
来源：http://www.sxryk.cn/163kyigkear.html

Py:   os.remove("a.txt")
来源：http://www.sxryk.cn/163ffnhunuo.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163exklobtq.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163yeveczwe.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.xuanzx.com/163dnqcmgsb.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163yaoxgniz.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163sbrwqacb.html

Ruby: File.delete("a.txt")
来源：http://www.xuanzx.com/163ajrinzsu.html

C#:   File.Delete("a.txt");
来源：http://www.xuanzx.com/163pvuavjxx.html

[F07] 创建目录（含多级）
来源：http://www.xuanzx.com/163pnchidwr.html

Py:   os.makedirs("dir/sub", exist_ok=True)
来源：http://www.aibaodan.cn/163qjboxnee.html

PHP:  mkdir("dir/sub", 0777, true);
来源：http://www.sxryk.cn/163bdxeussg.html

JS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.aibaodan.cn/163wurkunau.html

TS:   fs.mkdirSync("dir/sub", { recursive: true })
来源：http://www.xuanzx.com/163atkdefxl.html

Java: Files.createDirectories(Path.of("dir/sub"))
来源：http://www.aibaodan.cn/163ygykptpw.html


<!-- 参考信息 -->