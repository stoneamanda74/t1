外链999!wailian999！

Ruby: arr.tally
来源：http://www.sxryk.cn/163djgkctks.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163frhzxnsx.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163knycarqh.html

Py:   x in arr
来源：http://www.sxryk.cn/163lzdqafee.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163tgyvrdva.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163zzgtexok.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163qetdmtgu.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163vifdvixn.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163dhvcnwed.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163hgrynfwi.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ltprscmj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163smusyene.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163nxumaosp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163xluecvfr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163kpdlkoam.html

TS:   [...arr];
来源：http://www.xuanzx.com/163dlgusyrx.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163nregycdh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163azdcljzn.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163xsudocyo.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163ggtuzeyx.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163akijxzkl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163rmosdcqu.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163huewczgq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zgcitzdr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lbzmtpma.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163twhxilwq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163hdnqiesv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163uryqborq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163tegedowj.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163qcvfffnq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163doprpajl.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163wsgztnah.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163cetrwbof.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163mvghszff.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163iizkvetf.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163uampnnbx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163xmzztgej.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163vtvplvlb.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163krfsxbyb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163kkjytvxo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163roawzqpm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163qdjjjaxr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163zfuzphoq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163qxtxuscx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163libpxjxu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163oejihwfg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ocdamqjr.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ksrnisbu.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ohfukmpr.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163vzhlzwit.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163lmjjrifp.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163adwvbndy.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163cgsqbsbq.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163kqrytjjn.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163xrnifabj.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163iypunzgc.html

================================================================================
来源：http://www.sxryk.cn/163nbtrfvdp.html

E. 字符串处理
来源：http://www.xuanzx.com/163ueyjnlwh.html

================================================================================
来源：http://www.aibaodan.cn/163lvmdivps.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163fhqxkfev.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163qvhribpy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ryakykrd.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163qbuhnald.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163bvccpcpf.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163jjsglifv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163lajibkli.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163nfczfjbo.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163zvefxslm.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163dpchwldd.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163kdspijnf.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163yejzmcxm.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163zeqbwpxw.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wvuhqhkf.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163dyxzkdaj.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163psskjpor.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163tyfuaxyb.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163rzkqnyal.html

[E03] 截取子串
来源：http://www.sxryk.cn/163ddvnhfvb.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163gotejyis.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163ftprxrvu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ohnacydc.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163crfscwhq.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ufbbmtuv.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163urjowarx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163gosnhgat.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ikvjxqhm.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ookajjpx.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163urnbotxy.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163mehlmmob.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163uonhvuob.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163lhaelrgh.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163zohhojsk.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163aubbwizt.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163sreckgcc.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163pzrxkdto.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163zzkbxpwk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163eqmrjyvh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163shyseihv.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163quwzrnkl.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163uzcylyvo.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163igvartwm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163eetwelkw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163lyqafqtj.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163xbbyjcsn.html

[E06] 替换子串
来源：http://www.sxryk.cn/163qsnqiypc.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163xnisifab.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163skxacdla.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163yumvepab.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163wgnwnlya.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163vkkarnzc.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163dkpwczld.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ditvizaf.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163cgtonmqk.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163xdhlznmg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163rjoauhxk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163qazjwbnz.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163hlcgkhoj.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163fblessux.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ntvbggat.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163mtcutamn.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163jtepmucv.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163afjtcsrr.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163aqirhutl.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163qnwjfasg.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163iafsufjm.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163qmgfdfsm.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163soyqscqc.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163cwkrhewb.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163wbfchwnj.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163yimwlmwv.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ncqrddpq.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163mykwopik.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163ayzktciz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163mzsyeviw.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163nlxgafyj.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163wzlufwuo.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163pwukrvbd.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163nzichnqh.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163oinmitfs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163mmfamqhk.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163wyrvmvsk.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163esbygozz.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163vcjvszlk.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163mfclcfxd.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163aelheozk.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163jlwyfelo.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163nepunvtv.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163vdmotuat.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163arxurqgp.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163aheboypq.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163ghcjpycw.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163olxlyzwl.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163uvwwvgob.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163rpjrjewg.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163neruxdgn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163sxhelvxp.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163anehpamy.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.xuanzx.com/163xbnafnhk.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163kpouecdx.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163xeveezps.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163shlyxudu.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fmfzfvst.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163sdptdbxa.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163vsnuckfl.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163ucatgwbc.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163qiyamgxa.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163nwthvdmh.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163qybytqyd.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163iesqciag.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163drqwvvjk.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163msmtuobb.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163qjwnoghn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163idnhaqta.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163uxnhdups.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163qkvuzrxb.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163rzqhjbie.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163syrxsyua.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163vjboxryd.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.sxryk.cn/163vzntriaw.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163ytknchoc.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.sxryk.cn/163fgtsqxdm.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163ursqkaar.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163rftitdvh.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163reetqukc.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163cxkiooov.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163dfmxhvuo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163cyhpourz.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163stswfkjx.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.aibaodan.cn/163gymdicsl.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163tkubcsev.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163qmzbcqtn.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163tyttfcjw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163czzsarvg.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163mppehtxs.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163zgrgplbu.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163tswvbfbj.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163iqmdezhp.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ojuuwbzn.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.xuanzx.com/163oxfdzkrm.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163wvjeauog.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163yrkcayvp.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163euvkddek.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163qwtkepco.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163wubhvqij.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.aibaodan.cn/163cnlbugow.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.sxryk.cn/163uzcpvcfn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163dzzcqbmr.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163knypkvgd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.aibaodan.cn/163dgtcavit.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163hzubcvje.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163dfguxkzi.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163vgqqdksf.html

[E18] 模板占位符替换
来源：http://www.xuanzx.com/163juknimpu.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163mssgidbv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.xuanzx.com/163enanabsn.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163ieevelmu.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163pyfvccad.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163yvmnjfcd.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163jxyrozdc.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.aibaodan.cn/163lhircbhc.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.aibaodan.cn/163vkogjzku.html

[E19] 多行文本按行拆分
来源：http://www.sxryk.cn/163wnyizrbh.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163zicvhrgh.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163mmajrgrn.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163mwpzrzuv.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163kpwjiihf.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163khhhyhsv.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163svflgokk.html

Ruby: s.lines
来源：http://www.xuanzx.com/163seaesfad.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163zqaqnymk.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163rhaaxttp.html

Py:   if not s:
来源：http://www.xuanzx.com/163vqcnqsml.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163oifbmndt.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163diqcbupj.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163jqfnfsit.html

Java: if (s.isEmpty()) {}
来源：http://www.aibaodan.cn/163uczerbxt.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163vwlkyjak.html

Ruby: if s.empty?
来源：http://www.xuanzx.com/163hagbgprv.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163bhmrdssn.html

[E21] 超长截断加省略号
来源：http://www.xuanzx.com/163aagfomxj.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163xjcwfyax.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163udvgbtjv.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163tfkzulgr.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163pzbgawax.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163dogrjvgy.html

Go:   // 按 rune 判断长度后截断
来源：http://www.sxryk.cn/163igvrorha.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.aibaodan.cn/163itqmtcyu.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.xuanzx.com/163wdlfuyok.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163kprzqlib.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163bqcvcatv.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.xuanzx.com/163sezbcrmj.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163ieqrgfrt.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.aibaodan.cn/163obuxssga.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163bwjmljwz.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163jkjjpybw.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163xobvvxys.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163uioslxqm.html

================================================================================
来源：http://www.xuanzx.com/163bcffchzx.html

F. 文件与目录
来源：http://www.xuanzx.com/163hrwerhoo.html

================================================================================
来源：http://www.sxryk.cn/163zwxnbgeg.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163njlrvmjd.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.aibaodan.cn/163zqgpjkdw.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163ebpvgqju.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.aibaodan.cn/163lebxwhze.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.sxryk.cn/163tottqqkt.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163trmqmbxl.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.sxryk.cn/163zhdqocwb.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163ocqaambq.html

C#:   File.ReadAllText("a.txt");
来源：http://www.xuanzx.com/163zulmbdvv.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163vvwwayqo.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.xuanzx.com/163prahvyfc.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.xuanzx.com/163irolaegp.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163kzdxlylm.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163fphabhgw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.xuanzx.com/163icpjkjoa.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.xuanzx.com/163xjlbbzfa.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.sxryk.cn/163tourlenn.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.sxryk.cn/163idpaivmv.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163xtanobkr.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163rupmfmwo.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.aibaodan.cn/163urinukev.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163opbxbctf.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.xuanzx.com/163erytmwbe.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.xuanzx.com/163zotbvssc.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163ktszfotb.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163jqxexwon.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163qfjrtazq.html

[F04] 追加写入文件
来源：http://www.aibaodan.cn/163bxirkozr.html

Py:   open("a.txt", "a", encoding="utf-8").write("more\n")
来源：http://www.xuanzx.com/163yeffshar.html

PHP:  file_put_contents("a.txt", "more\n", FILE_APPEND);
来源：http://www.aibaodan.cn/163byaxjlet.html

JS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163aabyboop.html

TS:   fs.appendFileSync("a.txt", "more\n")
来源：http://www.xuanzx.com/163ktttckyi.html

Java: Files.writeString(Path.of("a.txt"), "more\n", StandardOpenOption.APPEND)
来源：http://www.xuanzx.com/163mjkxynzr.html

Go:   f, _ := os.OpenFile("a.txt", os.O_APPEND|os.O_WRONLY, 0644); f.WriteString("more\n")
来源：http://www.aibaodan.cn/163vyxjvfrx.html

Ruby: File.open("a.txt", "a") { |f| f.puts "more" }
来源：http://www.aibaodan.cn/163xrvezoke.html

C#:   File.AppendAllText("a.txt", "more\n");
来源：http://www.aibaodan.cn/163gcuzvrzg.html

[F05] 判断文件或目录是否存在
来源：http://www.aibaodan.cn/163djrrkklv.html

Py:   os.path.exists("a.txt");  Path("a.txt").exists()
来源：http://www.sxryk.cn/163kkqelple.html

PHP:  file_exists("a.txt");
来源：http://www.sxryk.cn/163jyqtxgxc.html

JS:   fs.existsSync("a.txt")
来源：http://www.xuanzx.com/163qshgutxz.html


<!-- 参考信息 -->