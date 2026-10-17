外链999!wailian999！

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163vavtryfd.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163mjwvqokd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163mijomvcb.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163mpqsnogg.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163cfxxkatk.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163fllxikez.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163gsrsesvf.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163nmhwgcec.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163hxlyzkuw.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163zjlvcykv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163mgpnpqlr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163fnsyvdjj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163kppcrbef.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163kjtiucaj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ohbsfiop.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163efqmlsyn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163cfcpjfai.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163fshuwgkn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163dftcoiap.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163gptlwfcu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163defefspb.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163xgxwukxm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163knwrgrss.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ryqnneyh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163vbutsckm.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163xxlroknk.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163zawhanjc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163suzrspnr.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163jcgtkalb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163jeymimsd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ifpccszf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163prutvtyl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163nroqlxzd.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163mpoclzay.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163jyqzayco.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163bhbmtzpm.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163lohrassv.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ercgxzrp.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163oatafooa.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163vvkmsfxg.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163pkxjdphs.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163neejrlyp.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163kptcryrd.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163jcrvyaxl.html

================================================================================
来源：http://www.sxryk.cn/163rxahmfko.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ekyafygg.html

================================================================================
来源：http://www.xuanzx.com/163wofjhuhv.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163ilrkpnti.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163hcwlcwec.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163tqsqfvxk.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163uvlgjxiq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163bjosdlwt.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163lbudiowz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163bkelzxci.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163glymucwb.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163mmkrmcha.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163txqqhyfj.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ppopacde.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163iojddrde.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163awcdlhpo.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163tpuzzyhz.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163rxvsmkju.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163qlptviar.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163qlwnebnz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ndbdnvke.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163jyvohsvs.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163rrjolgfq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163baqomsjl.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163wsevyure.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163spcmhfgz.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163kfswbquo.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163xajwdhlo.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163ovachlsu.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163zrpefuog.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163elyvuglh.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163rzezqwbh.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163afawbhqt.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163yoxhmoby.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163enbhawii.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163fqfnsuyq.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163zbwjramh.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163jfmammtc.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163glypzhmq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163octmxyzq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163qretzrbu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163rjwzzdlw.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fmwfuhyu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163mkkttlhf.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163xwayywig.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163zyzkcamu.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163dhpnxrqg.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163rtrpslqi.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163opcsioun.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163yqinpsvw.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163ipwdvveb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163uinwszpo.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163qgwztotx.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hoyfdjbz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163gjzvxvqz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163oeuxmdzo.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163kwjmkjpk.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163guakjjee.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163mlpfzpzy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163rfuahigj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163bqpfbctk.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163izbimtut.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163zrcgiror.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163szzocqxj.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163skpberzp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163vqgqnljc.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163gmpkinff.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163fswskhsf.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163qchjawiz.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163zhatdygd.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163vrecsktn.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163lylbnkdq.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163gbvqwchn.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163zsopwers.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163rnmamthe.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163wrwtilpl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163bkbesibv.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163oflkdvoq.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ssvjrmhh.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163qvzpjwsa.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163lkgqbqge.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ablsooac.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163yuekfeph.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163scszrvqh.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163vimpzzic.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ienvsmue.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163soxmostg.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163crmfpmct.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163yqsyvhsc.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163zyjphvjs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163kpbsehyc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163xeaqbcmr.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163iuwqbfei.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163zxlzxkoc.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163igmqdgtm.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163yimomcuk.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163hlvuqzio.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163kdmubsqu.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163fvaiznin.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163zgpturek.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163fjnzopxd.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163oxkldinb.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163npquhyrr.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163zqbyhlgn.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163kvjzdjni.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163rzaumzwj.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163eyucumjk.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163bnhsgzpy.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163rvspcvpc.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163apjcjuqv.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163eeixnori.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163hxrrdmmn.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163mimylitf.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163jlodwtdl.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163douoogbq.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163vuebljlr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163dlqnzwns.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163nghrwfjl.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163iegzvqrw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163eumjkkxo.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163zvrvsqbn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163dkeaflda.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163prwqmnol.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163tkxblauz.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163vrtrmpix.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163qbomhjyg.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163tutvnzrs.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163vrdgkrbr.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163wiinfbxc.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163jvbnttwp.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.sxryk.cn/163raiszztz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163scqdsmwf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163cywpbhof.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163fgfvbfum.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163tpnzeyjh.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163nqtpkixt.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163niblxfnj.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163ntbqqtwj.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163wgqucdrb.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163bovxilyg.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163zmhtsvzy.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163iykupfai.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163njqxkead.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163djrdrfhz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163bdezntel.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163mbwuqnhr.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163bmnpnwlm.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163bkxximlx.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163krskssyo.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163jukxbnxx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163lqdzwjko.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163aufegbep.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163flwumxse.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163iwmljyrd.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163scbnvqml.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163bshthjzd.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163fsdkyghp.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163duhrzekw.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163oeklwsrx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163xjlqtynk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163bijqjhyp.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163vlcfvpsm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163rvgqncap.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.sxryk.cn/163tqmkkzht.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163konnmgfb.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163flfamkfx.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163jfxgsmcy.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163ctvixlzr.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163sjbhxzwr.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163gsoqrhqw.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163irxaawns.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163pgzwbzsn.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ltdimevx.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163qnavvukl.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163cmaccpqp.html

Py:   if not s:
来源：http://www.xuanzx.com/163ixdhmlfh.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163ifabdbia.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163ybvxxihd.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163voserurl.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163mydwgiwx.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163tzaixtbd.html

Ruby: if s.empty?
来源：http://www.aibaodan.cn/163vmnudvpi.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163bmxuumkd.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163uxwuolls.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163egwrjcum.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163englzysd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163pvuakuzf.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163bgofaybc.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bbgywmvq.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163cllmxrul.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163grsfbgpl.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163shbenfld.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163xmhkugvr.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163twlugwyk.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163rlevacxt.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163mzzbzmpa.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163kdureimo.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163divzpsxg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163vcnwvpvu.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163kmawttvp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163gqhzqgts.html

================================================================================
来源：http://www.xuanzx.com/163maczbppa.html

F. 文件与目录
来源：http://www.sxryk.cn/163dyrlcint.html

================================================================================
来源：http://www.sxryk.cn/163fifghnmx.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163csmndaik.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163bbjsolxi.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163zvsmftsb.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163qmenrhtg.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163yztlrkjl.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.sxryk.cn/163jpagoxdz.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163ouhicfge.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163uflaeiuo.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163nznhkdtc.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163zpcacjcx.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163hvqoscwi.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.aibaodan.cn/163bodknzjg.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163wuqnzpkh.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163mfshdydk.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163urxpjnhc.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163omworrdz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163mhnqzflh.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163gudqfpbo.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163wjgbanhc.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163cupebmmv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163qxodcicx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163jpkccjff.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163facorttj.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163diohdles.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.sxryk.cn/163hwwrsgpc.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163epwrhard.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163cgxbgxgs.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163rvnvmfqe.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163sstscemt.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163hxynfawa.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163mfsmtycv.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163friiyknl.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163haeuaoco.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163qpojpeqv.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163xqelajpj.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163gissnafd.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163pzxyqfdf.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.aibaodan.cn/163yabtqskj.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163qnrqczty.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163vqypbswc.html

TS:   fs.existsSync("a.txt")
来源：http://www.aibaodan.cn/163efyjrvpx.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163lbbaijdq.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.sxryk.cn/163bbjwnfiw.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163womyqwsv.html

C#:   File.Exists("a.txt")
来源：http://www.xuanzx.com/163xxzdwepn.html

[F06] 删除文件
来源：http://www.aibaodan.cn/163zujigvgv.html

Py:   os.remove("a.txt")
来源：http://www.aibaodan.cn/163nwkltutr.html

PHP:  unlink("a.txt");
来源：http://www.sxryk.cn/163orifqosa.html

JS:   fs.unlinkSync("a.txt")
来源：http://www.aibaodan.cn/163fnjtcjgs.html

TS:   fs.unlinkSync("a.txt")
来源：http://www.sxryk.cn/163xfofqkxl.html

Java: Files.deleteIfExists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163nheqbnym.html

Go:   os.Remove("a.txt")
来源：http://www.sxryk.cn/163octpjuqt.html


<!-- 参考信息 -->