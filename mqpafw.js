外链999!wailian999！

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tpkkvxry.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pefuxxdw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163frwwegal.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163zxpnddbe.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163qwxwcyhf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163jsskqqot.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163sjfpfpym.html

Py:   x in arr
来源：http://www.sxryk.cn/163jaybetrf.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163izcrmjpm.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ubrvlbyt.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163bvmsrbft.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163xkxsiwtu.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163qzhmphsc.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163dznuugex.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163skemweuz.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163aquajiiy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163tuvtrfyx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163obdawufq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163hciaxpnf.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163ganpmurd.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163fbdktysj.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ersviqlu.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163qqhutkjo.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163nfghrhdq.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163wtclaxhc.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163mfhsidev.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163jhrlkzau.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fznjgnvz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ptegoywi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163izxpmgge.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163nbiudixm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163wvximihj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163iecfcrpz.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163tptqivjf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ejblqvme.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163zmvrikms.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163mnrtcuyd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163nhggkbrw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163zjfytxnf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163wgucugfk.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163uqztxfca.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163ygvphcvt.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163vwvokjbx.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163gondgvvk.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163bolaeqnd.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163zsihfzqc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163igbcxzca.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ibxfljwn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163pdasghva.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163dhlrajgo.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163tcyumceh.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163mgggwrul.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163mlmfvndf.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ebnsjkcd.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163wsqonyok.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163lgolcltv.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163qyvoqcpx.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163hiaytvag.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163grvkeutr.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163tbiepnde.html

================================================================================
来源：http://www.sxryk.cn/163yguoumrm.html

E. 字符串处理
来源：http://www.sxryk.cn/163owagoubt.html

================================================================================
来源：http://www.aibaodan.cn/163bxpwkkvg.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163zcobapcg.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163byuuovxx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163vjouqlty.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163xzxgdmkr.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163yyzcbaoy.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163mkmienmp.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163siyyhdwf.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163sxpnlxcy.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163qxceyoxs.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163viguzspj.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163vjbctrrx.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163xsnvlamk.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163dvciboiz.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163nzmphqfc.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163heougier.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163lcwoucon.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163favkgqzc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163gzarsxry.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163enknqixq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163gnzptmrf.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163gxsgnqec.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163oxualvjh.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163hufztmod.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163lhrgssdx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163zntysjyg.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163qtblpgaw.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163wlsbgjim.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163wbybbrlz.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163uaigbefs.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163zqdqhytv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163qwpsbmai.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163clouabud.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163szmonjlh.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163khypaouc.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163dgvnrcwx.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163mwpeeimu.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ekagygiu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163duxapmwv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163trbyukxj.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tygqpoth.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163zrhwgjta.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jjddigaf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163hkqcpimo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163phyknbqv.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163gmgpodbr.html

[E06] 替换子串
来源：http://www.xuanzx.com/163bdpatmfs.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163zpvarbpi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163ujvlibvb.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163rakyewnd.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qfbqvley.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lpxgdjaw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163dbukimdz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163baflpsmr.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163pfflwoca.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163gbeczdqd.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163izmbufhp.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163jyujpwpa.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163wwndzluc.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163hkdmxmai.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163gnrmxtyj.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163kdktmjuc.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163oqqoykrc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163arbnytlv.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163dknmpubm.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163xawvtmmq.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163kjjmqjlt.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163atuwloao.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163povdkehz.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163mfgoyjzg.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163qmicqafb.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163okyyceyg.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163gelgugto.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163vakjqkth.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163oijqzqbc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163olofxhzb.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163jstblmck.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xyciglgr.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163heicvsho.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163jphxsybs.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163pkhfefzh.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163jacxbvhu.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163toqmmile.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163pbevdfqu.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163vxqrqqnc.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ambtisyv.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163yzzvkgjx.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163bftalnih.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163oosrffix.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163wvquzuss.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163yxpbgnck.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163gecfqxwu.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163atfcuqco.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163mhsnxwty.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163lmsjavdh.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163lelhhbrl.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163yurtsddr.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163sdalipux.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163jdjyxwfi.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163erfixabd.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163txjyxztz.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163igvzkjpx.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163wlisffwl.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qnyaoysd.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163qcznervw.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163xduubysn.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163nvroihsm.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163tllfjjko.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163ivgivtrg.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163jpahcird.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163tdgpebor.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163bqkrstrc.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163mohopdis.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163ggxvjxhw.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163qdujqlwg.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163aqipyisx.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163rlwctnkg.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163egelvvsr.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163iqnkljcc.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163nhotahhw.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163pzceghyr.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163oxobjagn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163ajjmlpkh.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163lugccxpb.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163twygidrf.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.aibaodan.cn/163wamphsjt.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163osaoidsw.html

[E15] HTML 转义 / 反转义
来源：http://www.xuanzx.com/163rulephjf.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163jcmgfirw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.aibaodan.cn/163mlpedgup.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163brkbbvmf.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.xuanzx.com/163ysgpwpph.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163gvehgvbp.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.xuanzx.com/163jhjplbjg.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163pznluctx.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.sxryk.cn/163wvfyomdi.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163uvpknxxg.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163tyabcegv.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163ymiyecgm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163zfojdwtu.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163jlybogkj.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163cestjbhu.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163wpwqzwzr.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163btjvkxdo.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ljwpstef.html

[E17] 首字母大写
来源：http://www.sxryk.cn/163bdektiki.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163owgmqhgf.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163smhhdflx.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163gcuittkg.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163udwabqak.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163cxjtxztf.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163rzgmtwci.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163kdbbqkzr.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163yapzromd.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163bkwmjlmu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163indzndcj.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163qwbbgado.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163btugqlic.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ginbkijy.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163haqogggc.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163toihxbop.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163jkfmafrf.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163weqyhbna.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163syhfrsub.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163qwsipftu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163ohbbxphz.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163vbflolpb.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163qlmsgcrn.html

Java: s.lines().toList()
来源：http://www.sxryk.cn/163mdxytdjs.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163zqgxkhqb.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163ywqycqcy.html

C#:   s.Split('\n')
来源：http://www.aibaodan.cn/163wutxuxur.html

[E20] 判断字符串是否为空
来源：http://www.aibaodan.cn/163aacwtlyt.html

Py:   if not s:
来源：http://www.sxryk.cn/163ashpksso.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163xwiarfyr.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.xuanzx.com/163mybqnqtn.html

TS:   if (s === "") {}
来源：http://www.sxryk.cn/163knccpvsx.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163zongcfco.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163syhcrerx.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163mgqjbluf.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163egdwozre.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163zzfnnkgr.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163jvdcheaj.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163kngeqkul.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163reigcgav.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163coelkrzy.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.xuanzx.com/163trozfdgl.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163huubnwvy.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163bqcltqvq.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163jivjxfku.html

[E22] 字节长度与字符长度
来源：http://www.xuanzx.com/163mlskccey.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163eantyktn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.sxryk.cn/163tuywovdv.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163hmaopozd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163fudrgqyf.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163ufpjbnas.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.sxryk.cn/163eaerfxvz.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163iujdegmp.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163ijpgkqqs.html

================================================================================
来源：http://www.xuanzx.com/163plzsftdl.html

F. 文件与目录
来源：http://www.sxryk.cn/163dgrvcqsv.html

================================================================================
来源：http://www.sxryk.cn/163bxkivrjq.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163fkorhpeq.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163vifxzhtv.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163wrkuiqmk.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.xuanzx.com/163xtjngakf.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163dzatltux.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163lyxxqizk.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163risaevrs.html

Ruby: File.read("a.txt")
来源：http://www.aibaodan.cn/163ztwohrfb.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163rnfozeah.html

[F02] 逐行读取文件
来源：http://www.xuanzx.com/163maepontm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163xyfqecar.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163ibkhxxdp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163omsnuxly.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.aibaodan.cn/163qxvlagra.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.aibaodan.cn/163pjcadygb.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.sxryk.cn/163lwdwudll.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.xuanzx.com/163oszdmixu.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163ggsvpeac.html

[F03] 写入文件（覆盖）
来源：http://www.aibaodan.cn/163aabcycwf.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.xuanzx.com/163jiatajyv.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163jwbdbtwc.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163mysfuhhs.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163lfmupfxp.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.aibaodan.cn/163qrfqunmy.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.aibaodan.cn/163diwvzjzg.html

Ruby: File.write("a.txt", "hi")
来源：http://www.aibaodan.cn/163yunnukuo.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.aibaodan.cn/163ywutbpgc.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163cmcoyygd.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.sxryk.cn/163wpslzhej.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163gdseveis.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163qceiywai.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163enumnbhs.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163jxwozapd.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.sxryk.cn/163ahuifxsy.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.xuanzx.com/163pgosjqpt.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.xuanzx.com/163tvconxgv.html


<!-- 参考信息 -->