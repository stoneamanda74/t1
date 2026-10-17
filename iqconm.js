外链999!wailian999！

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163rcxnxlcf.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163tijuxntn.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163pynahnrf.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163drfscxqo.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163elwhjxrr.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163yucxldec.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163kwkhqslo.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ipxxtbif.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163rwmpotsr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ycdnwdqz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163wgpyysfo.html

TS:   [...arr];
来源：http://www.xuanzx.com/163bhbunjzo.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163mgebgohd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163shfltqvn.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163lwngkvks.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163nlhmrqvc.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163vfkizjju.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163wqfntaht.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163scvofcrj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163tckwwmjh.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kakgrsfr.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163xainobwk.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163dounaefm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163dorkhlqr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163vbcptpwa.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163czntqwqk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163ykisxjth.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163jrstqpva.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163oxiqvaej.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163donlpfav.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163jvwhbftt.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163kcpzecle.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163vrsrynka.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163dywdeylk.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163dztgulkg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163nemzuzsj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163jwyqzjln.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163yzakgvit.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163upxerhqf.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163znjeermh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163xvxtghog.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163prwxhoak.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163hdhhhuql.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163qyljolgo.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163vaerpiku.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163atqyvdtf.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163baxtgdvi.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ksrwahzo.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qpxckqqv.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163gjqrbvnv.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163bgktzqhr.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163bxxmsolx.html

================================================================================
来源：http://www.xuanzx.com/163lxqhwyhv.html

E. 字符串处理
来源：http://www.aibaodan.cn/163bnbevszo.html

================================================================================
来源：http://www.aibaodan.cn/163dwggpmoc.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163fldywtrb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163vhkbtnwi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163yzkyyxgn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163lbhprznb.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163azmmwotp.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163izizknpr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163yuxejrha.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163uljcwoew.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163fowavsfo.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163acsaajcs.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163thpshfsi.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163iquxftpv.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ryzkaysm.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163qrbmtlxe.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163qtyelgmy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163einfvyom.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163jepjkjgz.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163bzcbkuxd.html

[E03] 截取子串
来源：http://www.xuanzx.com/163owwxfnre.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163aebqijzq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ziyiovny.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163fpkiwkoh.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163fhwapjpk.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163wzvwqzoy.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163nrzamlqx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163xirjvpkf.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163hadvkjqc.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163wlutyhrb.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163fqfvxlws.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163mrapzixr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163rpxdmbyg.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163lnbpvbld.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163ybwlnqrl.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163vhphswku.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163jdbttich.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163bhzpfwlb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163phwyosmu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163tdsdwiec.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163zelezlnc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hjcingim.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163hhamkdvj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zahxtefj.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163zqpzuwop.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ajblkllx.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163iytdnvzl.html

[E06] 替换子串
来源：http://www.xuanzx.com/163dqmrjpwo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163iyluiyws.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163mwzoomad.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qyzugnnl.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163upuwpfrv.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rdvaacjs.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163dhxcnvaz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163tukjwyvk.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163fgjcahti.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163twykccdv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163jqmfmxyp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163gmytdxhx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163kgyldhdk.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163xlhkfuzf.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163igrbxexk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163suwwyoqy.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163qemtazrt.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163phnwztkw.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163zfetjeug.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163vorwpdlo.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163bhxtdahp.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163cehunawy.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163cuugnvxc.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163syunlbhy.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163zqxekwcu.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163ogwhykmk.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163gmvzpgwu.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163qedeveho.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163eamhqucq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163dfzxytjb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mfijljet.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163txjnlwtv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163guoucofn.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163mmiboznk.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163wkezgech.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163gtogwcsx.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163itwquqqu.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163rwtcizxq.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163upcepwcb.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163hcyfbmeb.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163yajhghbv.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163lizetheb.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163bqzwpeuc.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163cjhgwneg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163uhbgeudv.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163mzlzbjhm.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163gslfsozc.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163lrduwmwg.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163bfzuqlyr.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163avabkaht.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163dwgrvqge.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163uezdmeyd.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163tkeqvifs.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163tuiaoayz.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163peprbjze.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163hfdlfnou.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163hrqrouqg.html

JS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ifdbrwpi.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163uutfwtbj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163onefsgjb.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163yqfbuhgf.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163iiwqaxiz.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163dgknbyhx.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163kvznigjx.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163monvqvty.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163cusgrhya.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163dmbdtrhk.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163ysqbhbfr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163dxeyivyj.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163urehqqvk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163eztrfvhk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163ellicsdc.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163kmqwbvvk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163mticqebg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163iazncbvq.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163pyabpsmo.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163emwwbqam.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163nakkdfby.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163sjivkqfl.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163gmkgwxbj.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.aibaodan.cn/163ddirxoba.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163bkwgbtqh.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163htdtxlqs.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163orlkfklf.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163tqbymwlk.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163tiihxcwg.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163qfjcrsdu.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163wdnmsdgr.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.xuanzx.com/163kkatwpbl.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163bazvmttz.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163iusazref.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163vippnhpt.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ggecrqab.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163vklzxuhl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163qwhzqyhx.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163nhbqqunm.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.sxryk.cn/163jdxxbovg.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.sxryk.cn/163cvlcljbw.html

C#:   1234567.ToString("N0")
来源：http://www.aibaodan.cn/163icrkjbrp.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163bkzltyzc.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163yxgxndow.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163mgcptijv.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163pafyyayu.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163cyhpyfxb.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163gcxvcqlq.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163lqcykcoa.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163svlabueb.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163ylmryaqa.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163ulmgazki.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163sofaetws.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163adudqqit.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qtuzhtse.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163yzwljkcv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163bqpsixwm.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.sxryk.cn/163krvlmdkg.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163qauaeijf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163bxrqlksu.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163hrpvulza.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163jlyaiukk.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163wijheotr.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163donnmaty.html

TS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vjysdhnw.html

Java: s.lines().toList()
来源：http://www.aibaodan.cn/163rqlmxuwn.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163cfptnemx.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163thlirvar.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163xhnbblkb.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163iqsayodz.html

Py:   if not s:
来源：http://www.aibaodan.cn/163aokanjrr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163qtqaccaa.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163mekmqinz.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163mbhggkee.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163ravheoec.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163cizoihgo.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163mjxonrne.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163ihxvzkxt.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163caodtvlt.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163amdhqqxq.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163sgigccyb.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163dbiskyrc.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163ildpgkyz.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163unkljiss.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163oaldusde.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163pmsfyinp.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163xqjkbhil.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163pasihykm.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163oudymeot.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163cskrwshf.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163nefjwenj.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163rfzmokjv.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163ayvykswb.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163jhyoixyw.html

Ruby: s.bytesize;  s.length
来源：http://www.aibaodan.cn/163ltonzjjh.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163rvarhtzf.html

================================================================================
来源：http://www.aibaodan.cn/163ifawgeny.html

F. 文件与目录
来源：http://www.xuanzx.com/163iaqpfsrf.html

================================================================================
来源：http://www.xuanzx.com/163eebclnqy.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163kgmivqlt.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163heufccsx.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163jqnogilp.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163arcpjjco.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163fueosilh.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163gafurlwe.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163fanskmnc.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163jnyaybsw.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163czyrlvcm.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163hnwzjukm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163hprhigjr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163ufhxuhjs.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163mnrimhgx.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163bkdeeaqt.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163hsmqcxhb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163zolhqkji.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163ptdjmhbb.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163jqcygspk.html

[F03] 写入文件（覆盖）
来源：http://www.xuanzx.com/163ldwaedag.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.sxryk.cn/163uzxujajg.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163nnwawzhq.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163zsbucolq.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163pcsrhhvm.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163cbckreyc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163xlqxybqu.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163dasawhtn.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163anidxsyl.html

[F04] 追加写入文件
来源：http://www.xuanzx.com/163kajzfxrs.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163hulyrlhw.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.sxryk.cn/163keelgudb.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163xeybfdey.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163jygepofi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163lacnlqxc.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.xuanzx.com/163evlkrznw.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163cmvppemu.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.sxryk.cn/163gnrtlsfg.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163uoxbzrdq.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.xuanzx.com/163ryukwqny.html

PHP:  file_exists("a.txt");
来源：http://www.aibaodan.cn/163jfcfhodm.html

JS:   fs.existsSync("a.txt")
来源：http://www.sxryk.cn/163abczzzpp.html

TS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163pwzbyizs.html

Java: Files.exists(Path.of("a.txt"))
来源：http://www.sxryk.cn/163ltvglbpj.html

Go:   if _, err := os.Stat("a.txt"); err == nil { /* 存在 */ }
来源：http://www.xuanzx.com/163rapmgjca.html

Ruby: File.exist?("a.txt")
来源：http://www.aibaodan.cn/163glwzwcho.html


<!-- 参考信息 -->