外链999!wailian999！

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163aqvofldn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163zdkyhwbq.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163lcmhmqvc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163obzfrfnq.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163xfvxtygn.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163qjnivakp.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ymfaxshj.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ayzzxkxk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pnnggnkb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kjbkyeyo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163lczzpjyi.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163zlmqaznl.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163wqnrrzck.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163tsnoevqk.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ikszzaeu.html

Py:   x in arr
来源：http://www.sxryk.cn/163aynvqxww.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163fuzefzwu.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163xjmjgotn.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163hedhbpxz.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ygamfulv.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163veubklpa.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163lidzonnf.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163qdfijnyi.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163cumizutn.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163afqkhmfc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163prugkswx.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163qmktqonk.html

TS:   [...arr];
来源：http://www.xuanzx.com/163pvfdqvpg.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ixkyemms.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163kzypvlrx.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163kmcwnaje.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163fonzihvh.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163tftsenjv.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163jkkllclz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163pkghghvs.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163teflrdmw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163muaatjvo.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163yadkteuq.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ybttdtla.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163bxtstyhn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ebakwwrf.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163jhggggpj.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163ufqaheko.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163xejgzqqy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163bgnznmov.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163wiuvxtzd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163nwblxfht.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163isxrxsza.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163qgkmqvbf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163mjqyllpz.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163yotvwnlo.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163zprgvbzj.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163kjqnozez.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163umkomdjy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ybgsrgzq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163pnwqibds.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163gcxmxzgu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163wjgaurrz.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163lwcelvwz.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163svjznykh.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163odklyeys.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ctzafbwz.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163fvvqynsh.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163dptpwwwd.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163itvowlth.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ixemadzg.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163unxblxxn.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163dnzvnltj.html

================================================================================
来源：http://www.sxryk.cn/163kunjgkhm.html

E. 字符串处理
来源：http://www.xuanzx.com/163wesbhhgv.html

================================================================================
来源：http://www.sxryk.cn/163cztmummk.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163dswnjuoi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163blhzdmix.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163nbsdddzs.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bxllgyat.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163xvezwzko.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163hyzbuxib.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163srxboouu.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163wgindzss.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163eftllirg.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163wihpfagz.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163bsrlhsos.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163nmksnuxb.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wpddiony.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163pgdndpit.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163mphjlyus.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163xbrbybmz.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163gpukslwj.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163spyhsgng.html

[E03] 截取子串
来源：http://www.xuanzx.com/163wpvzzmvh.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163wrdhfwuj.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163qndkxhxj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163czdlgtvo.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163tnjbwqfz.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163ppufhabx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163fyrcrosp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163fpsjbcqw.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163qgtktjsm.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ylcchece.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163vxcxvobc.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163qqzjjhuo.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163nmgvsbaa.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163unqczpfx.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163xilzeebf.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163dezetrkk.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163oiuwgmyw.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163dpcsyolg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ladmdcrb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163xgksvffv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163bwnitwmn.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163frvgtahm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163ufrrhctr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163koxcvzhn.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163zoemdbxw.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163okotwiqp.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163rifstguk.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163wprajhgl.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163perbnelb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163rpckazyt.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kedbvafs.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163emfyvagp.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ecdnacrp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163buuydoaw.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163hzxwwhiv.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163qsxzidja.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163pykbpamn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163dzeteoby.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163zmjlxsrl.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163rynwzbve.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163fepcnjoc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163bitbyixa.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163wcxxtgjt.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163rsaulntg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163hxpwbkgn.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163fsnybpvj.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163gijextzb.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163zvgqpucq.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163pvgshckm.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163gsmwexlz.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163wfbbpjny.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163qoubkdel.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163tqqeslsr.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163ehvgweth.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163tdvcnriv.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163dvncyosw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ngztxkga.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ifdmvjzq.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163xdwnuimz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163kwttknxp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163gzlcbenw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163ujmqwejs.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163wibwlkcg.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163kjrwrrcq.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163kvqfvtny.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163kwzyazcx.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163zloprnsz.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163roxtfbsi.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163kysmmyje.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163rtjktnim.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163vebdvxgx.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163wopxkhtz.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163rabrkcyq.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163irfbblto.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163bfzboygc.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163efgvbctg.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163wgaruxhv.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163pqtocxjn.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163jluabhyz.html

Ruby: s.reverse
来源：http://www.xuanzx.com/163mejjxuhh.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163upaihuop.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163fjsmkhsy.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163pdceewmc.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163gtavwvih.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163gvvjejfr.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163cbflmpbg.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163jtrtlahw.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163djqmlyln.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163pvjctkvj.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163auhrvcco.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163zopmwomz.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163szhbudre.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ygcdgnwo.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163utmzsnkv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163yixsyvvr.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163wsycazky.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ngxteqrp.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.aibaodan.cn/163hvqhlarj.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163bqmsakzk.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wsharlcn.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163jfphfnbg.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163slnblhfv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163lmxxrrhv.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.xuanzx.com/163rrlyyarn.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163pdzktvlj.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163fmydoggs.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.xuanzx.com/163trtnlbar.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.xuanzx.com/163lvnkjyco.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163vpgqhwcw.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163zilzbyue.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.xuanzx.com/163gtsrrryu.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163zjonthld.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.sxryk.cn/163pjknfjtp.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.aibaodan.cn/163phaxxctd.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163sqtdtskw.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.sxryk.cn/163untgaotr.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.xuanzx.com/163qnuiapwb.html

[E16] 数字千分位
来源：http://www.aibaodan.cn/163uhytzcil.html

Py:   f"{1234567:,}"
来源：http://www.xuanzx.com/163bghpowln.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163rsuxmnki.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163hyocjtte.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163zfhplkcw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.aibaodan.cn/163ngzraxzy.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163wmfdihgv.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.xuanzx.com/163olkoeiin.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163ifiemowz.html

[E17] 首字母大写
来源：http://www.aibaodan.cn/163jdvmwddw.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.sxryk.cn/163xpoacywu.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163unuikkxn.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163cvawocuy.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163iyojmubd.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.sxryk.cn/163ailsggog.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163xtinpwgv.html

Ruby: s.capitalize
来源：http://www.xuanzx.com/163hhnlsgbh.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.sxryk.cn/163esospkmw.html

[E18] 模板占位符替换
来源：http://www.sxryk.cn/163ieqxteum.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.xuanzx.com/163cydthcma.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163vfwlcklv.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163qcbccqeo.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163dmcopavh.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.xuanzx.com/163jgehhbqo.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.aibaodan.cn/163onfemjfw.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163xhnkikms.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.xuanzx.com/163cuxxnxjk.html

[E19] 多行文本按行拆分
来源：http://www.aibaodan.cn/163vrfbbicl.html

Py:   s.splitlines()
来源：http://www.aibaodan.cn/163kxgvetmv.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.sxryk.cn/163oukpklut.html

JS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163udaefnwm.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163fwyejtce.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163eshadysp.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163etrbstsf.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163eckxyxad.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163xhvscnnx.html

[E20] 判断字符串是否为空
来源：http://www.xuanzx.com/163ogoquljx.html

Py:   if not s:
来源：http://www.sxryk.cn/163ehsktxrr.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.aibaodan.cn/163vuhuhalk.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.aibaodan.cn/163pntkrmzz.html

TS:   if (s === "") {}
来源：http://www.xuanzx.com/163hxydcjvl.html

Java: if (s.isEmpty()) {}
来源：http://www.sxryk.cn/163vptwdxrc.html

Go:   if s == "" {}
来源：http://www.xuanzx.com/163qyunhazx.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163dwlkalki.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.sxryk.cn/163ujcgigbu.html

[E21] 超长截断加省略号
来源：http://www.sxryk.cn/163xpvrunvp.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.aibaodan.cn/163dpiczyvr.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.sxryk.cn/163rxcidkpd.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163ramjqjbw.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.xuanzx.com/163nopyipgm.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.sxryk.cn/163bkxnyfbz.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163hppfdija.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.sxryk.cn/163fywkdtoo.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.sxryk.cn/163hwmlqvjb.html

[E22] 字节长度与字符长度
来源：http://www.aibaodan.cn/163cixafslo.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.aibaodan.cn/163qebulwmn.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163yiuqthcn.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163wlqdqebv.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.xuanzx.com/163uwhdmcow.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.xuanzx.com/163kfkptymg.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.xuanzx.com/163mjsqsnsm.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163twczslet.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.sxryk.cn/163qrblwxxs.html

================================================================================
来源：http://www.aibaodan.cn/163fshavjdx.html

F. 文件与目录
来源：http://www.sxryk.cn/163xxcitkpj.html

================================================================================
来源：http://www.xuanzx.com/163cpjpsgkq.html

[F01] 读取整个文件
来源：http://www.aibaodan.cn/163eadjyvsj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.xuanzx.com/163zmydvflz.html

PHP:  file_get_contents("a.txt");
来源：http://www.xuanzx.com/163rqbbjair.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163utxzehxl.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.aibaodan.cn/163swmywevp.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.xuanzx.com/163tpdaphhb.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.aibaodan.cn/163bxumctni.html

Ruby: File.read("a.txt")
来源：http://www.xuanzx.com/163repxwthm.html

C#:   File.ReadAllText("a.txt");
来源：http://www.aibaodan.cn/163ulhcmlba.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163hhwlyljm.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.sxryk.cn/163nfrkrvtx.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163xlzdtjbe.html

JS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.xuanzx.com/163ryiwmguj.html

TS:   for (const line of fs.readFileSync("a.txt", "utf8").split("\n")) {}
来源：http://www.sxryk.cn/163yyjhxrrw.html

Java: Files.lines(Path.of("a.txt")).forEach(System.out::println)
来源：http://www.sxryk.cn/163jtlpxjif.html

Go:   scanner := bufio.NewScanner(f); for scanner.Scan() { fmt.Println(scanner.Text()) }
来源：http://www.aibaodan.cn/163xlxqparz.html

Ruby: File.foreach("a.txt") { |line| puts line }
来源：http://www.aibaodan.cn/163sadtlnaq.html

C#:   foreach (var line in File.ReadLines("a.txt")) { Console.WriteLine(line); }
来源：http://www.xuanzx.com/163arlzijce.html

[F03] 写入文件（覆盖）
来源：http://www.sxryk.cn/163aovoejgb.html

Py:   open("a.txt", "w", encoding="utf-8").write("hi")
来源：http://www.aibaodan.cn/163gphmjxlp.html

PHP:  file_put_contents("a.txt", "hi");
来源：http://www.sxryk.cn/163qnloilfs.html

JS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.aibaodan.cn/163lrkxfrha.html

TS:   fs.writeFileSync("a.txt", "hi", "utf8")
来源：http://www.sxryk.cn/163tbjezrdc.html

Java: Files.writeString(Path.of("a.txt"), "hi")
来源：http://www.sxryk.cn/163syfuzvjb.html

Go:   os.WriteFile("a.txt", []byte("hi"), 0644)
来源：http://www.xuanzx.com/163uirckzei.html

Ruby: File.write("a.txt", "hi")
来源：http://www.sxryk.cn/163qxgwotul.html

C#:   File.WriteAllText("a.txt", "hi");
来源：http://www.xuanzx.com/163ynnvcjlt.html

[F04] 追加写入文件
来源：http://www.sxryk.cn/163wglyvzxq.html


<!-- 参考信息 -->