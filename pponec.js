外链999!wailian999！

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163lcznctca.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ylzqjfdx.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163onkmepnl.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163gtlijugb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163pzlitbnb.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163gwobfsku.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163nfmucjrw.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163wpuqqjrl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163mrtdqvff.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163rammnrku.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ijvsbudl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163qwjxzkeh.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163stozuyjj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163hxvskenw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163kxnlpqbr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163pdmithnq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163rqskgehc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163owzvwaiq.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163tipqbazb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163keiamvvs.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163nolcwisx.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163hztkgfif.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163rcrlrtkw.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163jehgfhyd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ccffxdvq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gguiuekk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jhzclxyd.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163dggcudjy.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163zmzwnepl.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163zfwhjwji.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163qfudkihd.html

Py:   x in arr
来源：http://www.aibaodan.cn/163yhouchvx.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163xojgkbtc.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163qjumsatl.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163uagadyah.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163igfrxxvc.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163udzubwcj.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163zlpreagf.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163sbvrjpdb.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163xuormjqb.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163ewlfmcgc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163idvoadzy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163kmhoeukz.html

TS:   [...arr];
来源：http://www.sxryk.cn/163gomctpag.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ioupnxlp.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163olcpnnxp.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ntuovpja.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163jlbxgbmv.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163iypqodsj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163ixwflcql.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163xvclgrla.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163owmkkolz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163uywanmsh.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163tmjrwpgr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xvxjtpvp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163mxyarpuk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163sulcuzcq.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163hpwekehl.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163dmjozhbw.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163mrhgwkxo.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163peuiwahx.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163tywrwazq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163fvbdvzdo.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ajbpssuq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163vkdlfvnp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163bgzvuygc.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163quwvuzvb.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163iamujyaa.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163rkmxbmaw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163wrvkcnkx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163rqoxplfj.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163zryqbuwa.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163fstyqleo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ugdlawwg.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163wwdvagqt.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163kbebyqzl.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163ulmjpwtf.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163xjicerdi.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163zoewbzxz.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ncqdfzyg.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163hudnqogs.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163weoslnhn.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163wyvwowye.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163gffrjyfg.html

================================================================================
来源：http://www.sxryk.cn/163dsjmhlfb.html

E. 字符串处理
来源：http://www.xuanzx.com/163voycqfgm.html

================================================================================
来源：http://www.aibaodan.cn/163wdpnxayu.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163wwybnpib.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163gjnddvvh.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163epvejjoz.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163luwbstan.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163bmflvgym.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163puocltxn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163hhncozbg.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163qgfeazqf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163wflejdms.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163pfnomhfr.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163xpiedhtm.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163flzhoatd.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163olbaguyy.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163lzbgiwwv.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163kciupduz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163xniddzru.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163arbitooa.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163wotqykjt.html

[E03] 截取子串
来源：http://www.sxryk.cn/163lnzjuhfv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163kpzgzspq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163hawibvtu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ubnzsuem.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163bzvlrubs.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163icradvtr.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163wahkdirr.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163avxfncmh.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163fswhudle.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163szxghqsm.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163lhxnyoym.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163azdtmlhp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163uwramuxv.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163tpnwqsyi.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163lyqpqmwq.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163pvretgdm.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163difeikfu.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163byohanph.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163hefjeisv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163zckfqruo.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163qkppeskm.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163tbgmgjnn.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163vnntakkb.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163vgroihrk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163jwmubqks.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163gduyodyc.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163jvgsqwjy.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163stphnspr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163mhaysoqb.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163msalumxl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hnxhcymn.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163kjfpkoon.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gsaavwlv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163kioivjkd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163allieyes.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163xfvprcmx.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163ldxnnsrn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163bbmhvggm.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163fhlsxycd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163hkayikqn.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163cxiwnxxz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163puuyjwoh.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163rvjrwciq.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163usxztife.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163dtnunhvq.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163tgayivki.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163bubldhlk.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163amvswssp.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163swselwxv.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163svvizexj.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163vmpltwcz.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163wiialxge.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163kbwowphs.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163wcjqqyls.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163jubhmgtl.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163tbmxjozd.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163uhprncsg.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163eczeotrc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163cnjelftp.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163gowtutxx.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163fwonexdw.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163ryruyuts.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163wtfnxpwk.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163ynstvtov.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163gssnpnry.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163hjyfxblo.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163qbenajva.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163rhtbpmdk.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163kmofdpgr.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163wlxxswds.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163cedhngpt.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163ayvcoyzd.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163svkoujvj.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163pogkzifd.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163xmtyldow.html

JS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163uyyyhuzs.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163oxffxgig.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163uyuayvif.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163arekrpeo.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163oorcubvv.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163eoxnnqeb.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163mnkelrbg.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163xeoiorui.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163amgioewy.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163tgofftqp.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163nlsdkbiu.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.aibaodan.cn/163cvzfzviu.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163jkmqzory.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163pbshnsds.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163bqzqcvqx.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163zgcvclsb.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163bueoiovm.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163ffxvmbim.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163sqlkgwhr.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163eennusoo.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163wjcluzif.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163ukfskbwz.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163lflbhyrk.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163unqyuihi.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163umcosvim.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ufyxnqht.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163cfaxmwmv.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163oemhtutn.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163tkjpzbgo.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.sxryk.cn/163hqczodyn.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.xuanzx.com/163kiicxqfd.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163dyfgpyes.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163kufewqaf.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163rlzsgjxo.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.xuanzx.com/163irbkgmtw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163zdcwpgve.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.xuanzx.com/163apmhpvqx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163gazehjzz.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163nfxugxti.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.aibaodan.cn/163chhwkrdi.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163ehuevefc.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163cglsyluy.html

[E16] 数字千分位
来源：http://www.sxryk.cn/163sdblyxiu.html

Py:   f"{1234567:,}"
来源：http://www.aibaodan.cn/163gtxxrnbl.html

PHP:  number_format(1234567);
来源：http://www.aibaodan.cn/163wuxooins.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.aibaodan.cn/163glyhfhlv.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163rtjsdzmw.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163jplfgmoz.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163hkzuvttc.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163bqhxejgb.html

C#:   1234567.ToString("N0")
来源：http://www.sxryk.cn/163gurferxg.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163iocmnlxl.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163nxexsixc.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.aibaodan.cn/163hwkbejyj.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.aibaodan.cn/163jrpwudds.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163yzkrqleu.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163yecprmlz.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.sxryk.cn/163ejawccpi.html

Ruby: s.capitalize
来源：http://www.sxryk.cn/163otgyztlm.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.xuanzx.com/163gzsxuaez.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163qhrtdkgm.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163wddbwcfv.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.aibaodan.cn/163gkuytwtx.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.xuanzx.com/163cvzsddpk.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163rnzfgfyu.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.sxryk.cn/163kyshuiva.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163ozrmmegn.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163pmzzpiud.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163caayvasj.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163wzlsqbwv.html

Py:   s.splitlines()
来源：http://www.sxryk.cn/163hjheexxu.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163idicwzhv.html

JS:   s.split(/\r?\n/)
来源：http://www.sxryk.cn/163nxsswdcr.html

TS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163kvddcbdf.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163osmdzeze.html

Go:   strings.Split(s, "\n")
来源：http://www.xuanzx.com/163xjucvbmo.html

Ruby: s.lines
来源：http://www.xuanzx.com/163myqosuuj.html

C#:   s.Split('\n')
来源：http://www.sxryk.cn/163gryjuyqh.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163appgayyb.html

Py:   if not s:
来源：http://www.xuanzx.com/163samafqcf.html

PHP:  if ($s === "") {}      // 注意 empty("0") 也为 true
来源：http://www.xuanzx.com/163surefbis.html

JS:   if (s === "") {} 或 if (!s) {}
来源：http://www.sxryk.cn/163wgfwccyn.html

TS:   if (s === "") {}
来源：http://www.aibaodan.cn/163prymflkl.html

Java: if (s.isEmpty()) {}
来源：http://www.xuanzx.com/163qpwteogt.html

Go:   if s == "" {}
来源：http://www.aibaodan.cn/163vxprmvnr.html

Ruby: if s.empty?
来源：http://www.sxryk.cn/163jsjhmdqu.html

C#:   if (string.IsNullOrEmpty(s)) {}
来源：http://www.xuanzx.com/163juftokwz.html

[E21] 超长截断加省略号
来源：http://www.aibaodan.cn/163cqgmfgyz.html

Py:   (s[:20] + "…") if len(s) > 20 else s
来源：http://www.xuanzx.com/163qlfewrsz.html

PHP:  mb_strimwidth($s, 0, 20, "…", "UTF-8");
来源：http://www.xuanzx.com/163atvlznmf.html

JS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163wttfttii.html

TS:   s.length > 20 ? s.slice(0, 20) + "…" : s
来源：http://www.sxryk.cn/163uhlssigq.html

Java: s.length() > 20 ? s.substring(0, 20) + "…" : s
来源：http://www.aibaodan.cn/163kgriqyok.html

Go:   // 按 rune 判断长度后截断
来源：http://www.aibaodan.cn/163copsnbuk.html

Ruby: s.length > 20 ? s[0, 20] + "…" : s
来源：http://www.xuanzx.com/163xcrefjuy.html

C#:   s.Length > 20 ? s[..20] + "…" : s
来源：http://www.aibaodan.cn/163hqumzegl.html

[E22] 字节长度与字符长度
来源：http://www.sxryk.cn/163hyibbdoz.html

Py:   len(s.encode("utf-8"));  len(s)
来源：http://www.sxryk.cn/163njktugyf.html

PHP:  strlen($s);  mb_strlen($s, "UTF-8");
来源：http://www.aibaodan.cn/163jfmzzmrp.html

JS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163qkqpnkcd.html

TS:   new TextEncoder().encode(s).length;  s.length
来源：http://www.sxryk.cn/163ovlylpyy.html

Java: s.getBytes(StandardCharsets.UTF_8).length;  s.length()
来源：http://www.aibaodan.cn/163jckrfuta.html

Go:   len(s);  utf8.RuneCountInString(s)     # 前者字节数，后者字符数
来源：http://www.aibaodan.cn/163cxfnqwjg.html

Ruby: s.bytesize;  s.length
来源：http://www.sxryk.cn/163pejhrirj.html

C#:   Encoding.UTF8.GetByteCount(s);  s.Length
来源：http://www.aibaodan.cn/163ntdcnyrd.html

================================================================================
来源：http://www.xuanzx.com/163pohqfgsp.html

F. 文件与目录
来源：http://www.sxryk.cn/163bhzvywqh.html

================================================================================
来源：http://www.sxryk.cn/163aikwedqi.html

[F01] 读取整个文件
来源：http://www.xuanzx.com/163vhifqljj.html

Py:   open("a.txt", encoding="utf-8").read();  Path("a.txt").read_text()
来源：http://www.sxryk.cn/163ohqfktic.html

PHP:  file_get_contents("a.txt");
来源：http://www.aibaodan.cn/163gbjepmik.html

JS:   fs.readFileSync("a.txt", "utf8")          // Node.js
来源：http://www.sxryk.cn/163vuynrqin.html

TS:   fs.readFileSync("a.txt", "utf8")
来源：http://www.xuanzx.com/163htedtmnb.html

Java: Files.readString(Path.of("a.txt"))
来源：http://www.aibaodan.cn/163lrciuapg.html

Go:   data, err := os.ReadFile("a.txt")        // []byte，用 string(data) 转文本
来源：http://www.xuanzx.com/163hlwitphb.html

Ruby: File.read("a.txt")
来源：http://www.sxryk.cn/163zqwvqmxd.html

C#:   File.ReadAllText("a.txt");
来源：http://www.sxryk.cn/163mfzfqmpv.html

[F02] 逐行读取文件
来源：http://www.sxryk.cn/163fjsfcdzp.html

Py:   for line in open("a.txt", encoding="utf-8"): print(line.rstrip())
来源：http://www.aibaodan.cn/163kzoyiyni.html

PHP:  foreach (file("a.txt", FILE_IGNORE_NEW_LINES) as $line) { echo $line; }
来源：http://www.sxryk.cn/163aaiwkpzk.html


<!-- 参考信息 -->