外链999!wailian999！

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ndpxzfke.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163vjdfoork.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163lnqqlcox.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163okxrvwry.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163hlkdnejh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ckjptggh.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163fvrvxauk.html

Py:   x in arr
来源：http://www.aibaodan.cn/163tdchaxtj.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163bpjycofq.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163cswaenft.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ekvxzusu.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ecrcieta.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ozruomdk.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163abexcplo.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163tbycduev.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163qoluaaqv.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ffwqaycv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163rjukzlxm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163kztodslc.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163cbidlakx.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163pzynhbhw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163bdbynkak.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163gedifnlz.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163swqzmdnf.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163clrmfqii.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163fjqsrfxf.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163mwqsnxhh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163dhwathmj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gxlvhppz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jzjfmpqv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163cunjdvcj.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163kmqwtutf.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163cdykdech.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ckhrxbcl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163aygqzfkr.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163lnrcpnki.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163khulmdjr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163mcfiohso.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163xutlmpvh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163vxzgqqoz.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163slfvixsk.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163tyderkfe.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163kdixkapx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163hunaigfn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163lypnrsdb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163tnhdnycj.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163iujcvart.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163tfrttdia.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163lidacbba.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ehepbhru.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163opcdnzfk.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163avdthdrf.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163arolpxup.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163intbflkl.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163cyidcmwv.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163gwdphnev.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163rdurmvdd.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163hqwrlbgz.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163zylfpoqt.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163lkbtzali.html

================================================================================
来源：http://www.aibaodan.cn/163vaeultjy.html

E. 字符串处理
来源：http://www.sxryk.cn/163yrbwuoww.html

================================================================================
来源：http://www.aibaodan.cn/163zlpcvyzm.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163qbrvkfgz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163kkqmdosj.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163qupsqmmb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zjebcfoh.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163dmxgwmvn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163rrvgjjmv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163okzqhger.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163fclpqgul.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163axkbahit.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163tthudlpc.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163szilevxp.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163npckuwew.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163bzyxljky.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163tbvccmzx.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163dpsuwelc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163deevuokc.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163lbzhrfoq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163axkmjmoa.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ycvjzqrp.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163drdtowve.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163qptrmmgh.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163hsvaebio.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163puzqlwik.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163kyjepkfl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163nogixevz.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163eoejfqsk.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163gduuqdei.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163nnjgggmh.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163olkmbwcx.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ciwfpldu.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163zniiidry.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163nyvuwpsb.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163zzknszdx.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163rihopmyz.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163bliblgbv.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163ngptsczr.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163plzajzml.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163epzbxqtw.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ghpjybki.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163nrfarmnr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163gawtspzy.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ytiksqyk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163zabewtyv.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163vgffiivc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163gjedqvan.html

[E06] 替换子串
来源：http://www.sxryk.cn/163gkskxlyw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163tzcxmhsq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163gkafrnro.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163whsutjxt.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163twxlenhc.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tbsnqjcf.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163eafhcryb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163lmcqasdp.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163mjabsosr.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163otoftlmn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163offxjeuk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163xfrgfoaw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163gtabomkb.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163feyisndw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163nsednchq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163rhxjiafk.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163dcjmpcem.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163ppwmcsyu.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163wgtdvibr.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163lcfzbspv.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163bqxlvhpl.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163tuuzujoo.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163mtgzwqnp.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163gjniqdzn.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163mqeoaohe.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163eoalevyu.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163hgimdqki.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163mmjpbuyk.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163mhfmqxqw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163bdpdekqn.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163grfoolwx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163lsfaxish.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163zhilfqpm.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163stwbucjv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163hyavtxse.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163tdjhfrzz.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163erumlwqp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163okktyzot.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163uhjuclzt.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163uhggimui.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163tuprrote.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163lawfdrci.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163snpinkjg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163qhozfgri.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ayeqibqu.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163iapzkyqn.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163saehcgqn.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163hpigzzdy.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163nsvhbmri.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163tcuzgrzr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163ksmmqzpz.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163sckpbopt.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163bvznanvp.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163edykgxjc.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163qklgveml.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163ohdlvsaz.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163gbdktpad.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163kemjmzvf.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163axiuvusm.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163afgrhscy.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163nwcbmqxh.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163jferfmpr.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163lyiirsiu.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163nflfqkqr.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163hnazxcuc.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163rahkuopp.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qqmscfjl.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163hiukdttz.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163rpzzkilc.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163fjihzeeb.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163bpzbtdyw.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163jwabyefi.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163ptwhdvey.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ozlinmmk.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163iagmwjeb.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163gvcgqidp.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163zhcsqqmv.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163looigxzm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.sxryk.cn/163riwsocko.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163nehxeltg.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163ummkjtnf.html

[E15] HTML 转义 / 反转义
来源：http://www.aibaodan.cn/163tstpdiqk.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163syurmqpn.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163gdltnfhb.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163taaznipa.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163ifiqlqlx.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.sxryk.cn/163eogicjpq.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163vnltzlcn.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163ensizzbn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163qzczrxwz.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163jccuvhrc.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163kymeexmo.html

PHP:  number_format(1234567);
来源：http://www.sxryk.cn/163yzanxtan.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163acletedl.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163xqtvjrip.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.xuanzx.com/163bmxqctkl.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163taexjjri.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163faowaaij.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163dhdpcgvl.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163jixpjyxa.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163bwvohrnm.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163evinvknn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163qzfjothi.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163rjizmcop.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163citaqlxf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163ahanxwoe.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163mfbuyacp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163mgxyqlct.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163oadpdcqy.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163hrhkgkfp.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163jqbpafik.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163nxxcxtmc.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163oqzizdxu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163gcnzjwqa.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163fnkzvail.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163nezgoodd.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163limpaxsn.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163vrpjzjfy.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163azxqjllq.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163tezxliud.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163gqplygmc.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163tcmxtdjz.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163jljjusaw.html

Go:   strings.Split(s, "\n")
来源：http://www.aibaodan.cn/163puyuxydq.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163vwpzscat.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163fwtmffvf.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163sxprbeho.html

Py:   if not s:
来源：http://www.aibaodan.cn/163sfzkzrqm.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.sxryk.cn/163qbdthkxf.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163csrheaql.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163whoaaxed.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163gwkltmat.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163gvzjpnmi.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163mzyddrjt.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.aibaodan.cn/163mvdzpwdh.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163pipfvzvn.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163fxcglwsn.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163xeqagvda.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163kkwmvozu.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163zweeamck.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163phvndztn.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163pvmjcuab.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163qpwqstvt.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163vgylzqrz.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163zvpzngap.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.xuanzx.com/163ahnfuorw.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163leozoera.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163iexbcpmw.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163hqrbzdfj.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163udmvrywd.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163cbxxracd.html

Ruby: s.bytesize;  s.length
来源：http://www.xuanzx.com/163tkmcsfrz.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163jfmqkgfz.html

================================================================================
来源：http://www.xuanzx.com/163iaqdyust.html

F. 文件与目录
来源：http://www.xuanzx.com/163uuztnuqj.html

================================================================================
来源：http://www.xuanzx.com/163mtajezei.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163oiaetepw.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163dybygvfk.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163jbcrgjxy.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163wdyshwvh.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163lakdftbk.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163hqppswue.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163sydxxjhg.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163uzgdbezj.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163mhdagvqw.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163fykydvln.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163ahfrjvzr.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163euicmskc.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163gzpzhczk.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163ezxfxhzq.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163mzhqlkah.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163tbkusgxl.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163pzhyzdry.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163sfpbphpb.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163dzoksllw.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163lwxezlnl.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.xuanzx.com/163hwmnjzgx.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163imqzrfsz.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mzcpevxy.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163apticwfd.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163phtxewcb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163vauoyosy.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163zqqcyimz.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163outbzkmc.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.aibaodan.cn/163orufoked.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.xuanzx.com/163bjuikqyl.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.sxryk.cn/163uqdijrje.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.aibaodan.cn/163pnqcszay.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.sxryk.cn/163hhrvnxfa.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163vmrzwmry.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.sxryk.cn/163jnqxhznm.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163gixqwgma.html


<!-- 参考信息 -->