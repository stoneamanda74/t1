外链999!wailian999！

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163nfzfimel.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ersematp.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jelrfwrg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ybfuzawd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163lvczgfgx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163njumzzab.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ohlyxhmk.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163vkqzqoae.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163sapanqqm.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163zmmuysbt.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xrsnszno.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fkgjsnqc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163sfymczqz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163zbngdven.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163dbuuhwdj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163pwmrvtli.html

[D15] 去重
来源：http://www.aibaodan.cn/163ndyutsqm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163msfhzowy.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163dgpegpwr.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ntzlxweu.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163cehzoqcl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163wqallhrj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163yrzmtsfq.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163svgejczw.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163mcuvbxfy.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163lcigxmae.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163stmjkjbr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163igioihml.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163flcypuse.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hjgakcih.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163dunthopw.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163lmxtqhhh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163avvzdbiv.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163wkdafgrq.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163inpqsmwm.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163bceaeezo.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163bakkpdcr.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163brdavxfw.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163eiogrkua.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163sdpqfehh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163yqwmgvhc.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163qztryprn.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163glftnwox.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163raymsmqq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163yaiqspfc.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163kcladocm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ckripvpp.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163tghvlhgy.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ozmjinbj.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163oupqumwe.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163nqakvuwg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163zynyiwau.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163hojwtspy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163utenycup.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163tqcvgele.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163rwseeeyq.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163mhnmceza.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163vooviiok.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163qvzxozsi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163auvrtpfi.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163cwhbceyk.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163awvbsmlx.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163tsjqpsgg.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163jnbfquew.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163pdczylyw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163efzzxvuz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163biuawnqp.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163akwoajnf.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163qtemgrch.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163fsrnqjzr.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163eosbbqix.html

Py:   x in arr
来源：http://www.aibaodan.cn/163gollxefo.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ngoyxrpw.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163abghcjbs.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yfmccubm.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163gdmskvah.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163wnrnwqwo.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163lcnozirz.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163jwimkxhn.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163hkbicgqy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163mrejnigk.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163avyxclfk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163gblhebyl.html

TS:   [...arr];
来源：http://www.sxryk.cn/163mmkphwxg.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163indhagoc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163nrzlfoye.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ukrvrhed.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163gioabhgn.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163akgadujz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163haczagsc.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163uzdzthbq.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163docwbqux.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163hobuwytx.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163phjzxyvi.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163qmogjutd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163qhotmppw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163qlzzvhqo.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163uemcmtjx.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163pxruhvgv.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163mxcgwyqv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163mwxnicoj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163cmmbjnvx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163cxomhhrh.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163onvhbdii.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163zpryykap.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163wlfhpuzm.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163fjqjlwzf.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163tdrodffg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163esbklskj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163yetelqbl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ahwefoqp.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ogckkfum.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163ljvngkrf.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163yrgqwwjf.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163dedcnkey.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163wvvpknvt.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163btlwapdg.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163hynceqqt.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163jfosfmrh.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163ykrevgoi.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163ytifrdxv.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163gmkadmxe.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163nqngltnj.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163rhroimfx.html

================================================================================
来源：http://www.aibaodan.cn/163xsafhnqu.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ywpyozpc.html

================================================================================
来源：http://www.xuanzx.com/163lekhxzml.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163irjpsrwi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163isffrsfd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163axdcwing.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163xscpdhnq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163fskqufop.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163srentzie.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163lvzcwhco.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163mysmpnqz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163nnhyptwe.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163grqbatbf.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163qvbvyyco.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ozmsfjpc.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163yypgzozx.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hcxsuonn.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163zjqighfx.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163wmeizjqg.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163uevlwsks.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163arvnbaup.html

[E03] 截取子串
来源：http://www.xuanzx.com/163pinkntwk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163amtswaie.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163tqfjinpn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163ymhyodjf.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163pmtcpstm.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163jhqpmfst.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163lqdzqvzy.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163pnompmaa.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163cmkzjfmq.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163yexxqfqg.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163uipihjlh.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163qcgbjtpm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163kbtqkltr.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163lxrdwxxj.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163niulhojg.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163kzfxhrxf.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163nmjsagdl.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163mhgjxfbp.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163nzcgrjdl.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163ypzjdnvc.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163aibsuewo.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163opuajils.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163jhanoett.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163kpamgogq.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163vmoojfes.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163gnktsboq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163aoupazil.html

[E06] 替换子串
来源：http://www.sxryk.cn/163gzivhylu.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163kpbrcxad.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163bkooluuo.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163pmnpqysj.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163lrsnnqua.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163imlrleyg.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163gpqmgpbl.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163wxnrlbqi.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163yybomeym.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163uzkdywrg.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163njkzhlef.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163ackdupof.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163ocewkncf.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163tvaduyhr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163pebuljhv.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163quqwtqyc.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163akdkthsd.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163fxjzwvfz.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163nzyaxmqc.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163zlwtckih.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163xohddjfm.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163tmxrbitp.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163rgcnbmqt.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163zwxgrouh.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163afkflaej.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163sinibmgc.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163uvcxfykf.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163tzczhbsf.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163wlbuezqc.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163ytdhuyle.html

JS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163rewclwqi.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ktjiuytu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163susyqdeh.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163fynvanqd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163xyvcpeyl.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163jsqxoteb.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163umovsljp.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163qhomddjw.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163fidwcymu.html

JS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163hgexopmw.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163gbsgqcgl.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163qtygdzyl.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163rqrbtnom.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163yetbeutg.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163pomyyolt.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163phvtypnq.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163qfwsxett.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163rasgsqkz.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163pmsdutyx.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163kqmfmhyd.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163nbgiaqjl.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163khtxbnia.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163daljmyfz.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163oembjwaj.html

[E12] 统计某字符出现次数
来源：http://www.sxryk.cn/163canltnma.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163gzfujzzh.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163vauafdwb.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163chleoche.html

TS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163azecqvaj.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ybumrste.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163kddskyhc.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163qzsavphx.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163exnhxbbj.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163avfqrzps.html

Py:   for ch in s: print(ch)
来源：http://www.xuanzx.com/163pzbepnot.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163cgheutip.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.xuanzx.com/163fvhvpsch.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163kfgaeake.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163wnjmbcmt.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163mumopnmr.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163gphvxvpl.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163jnbmqpjm.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163qhuwspsk.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.xuanzx.com/163neqzykpn.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.xuanzx.com/163pnuhciah.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163nnqzsamt.html

TS:   encodeURIComponent(s);  btoa(s)
来源：http://www.aibaodan.cn/163yxiuvrhy.html

Java: URLEncoder.encode(s, StandardCharsets.UTF_8);  Base64.getEncoder().encodeToString(bytes)
来源：http://www.xuanzx.com/163bcwcmrlm.html

Go:   url.QueryEscape(s);  base64.StdEncoding.EncodeToString([]byte(s))
来源：http://www.aibaodan.cn/163zkllwcoe.html

Ruby: URI.encode_www_form_component(s);  [s].pack("m0")
来源：http://www.sxryk.cn/163zloiwpex.html

C#:   Uri.EscapeDataString(s);  Convert.ToBase64String(bytes)
来源：http://www.sxryk.cn/163ddbitoff.html

[E15] HTML 转义 / 反转义
来源：http://www.sxryk.cn/163ifhdwgoz.html

Py:   html.escape(s);  html.unescape(s)
来源：http://www.aibaodan.cn/163ifjihvaw.html

PHP:  htmlspecialchars($s, ENT_QUOTES, "UTF-8");  htmlspecialchars_decode($s);
来源：http://www.sxryk.cn/163nswqvcqg.html

JS:   // 文本节点自动转义；拼接 HTML 时用 DOMPurify.sanitize(s)
来源：http://www.sxryk.cn/163pmhuockx.html

TS:   // 同上，务必做 XSS 过滤
来源：http://www.aibaodan.cn/163hmoqhkvm.html

Java: HtmlUtils.htmlEscape(s)   // Spring；通用可用 Apache Commons Text
来源：http://www.xuanzx.com/163qywrafod.html

Go:   html.EscapeString(s);  html.UnescapeString(s)
来源：http://www.sxryk.cn/163pgnarzvd.html

Ruby: CGI.escapeHTML(s);  CGI.unescapeHTML(s)
来源：http://www.aibaodan.cn/163mzpvwhfn.html

C#:   WebUtility.HtmlEncode(s);  WebUtility.HtmlDecode(s)
来源：http://www.aibaodan.cn/163gjycbqdl.html

[E16] 数字千分位
来源：http://www.xuanzx.com/163vvnkhegx.html

Py:   f"{1234567:,}"
来源：http://www.sxryk.cn/163rtkxbcre.html

PHP:  number_format(1234567);
来源：http://www.xuanzx.com/163gmhaaxwm.html

JS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163ufvzikhd.html

TS:   (1234567).toLocaleString("en-US")
来源：http://www.sxryk.cn/163jeatvgja.html

Java: NumberFormat.getNumberInstance(Locale.US).format(1234567)
来源：http://www.sxryk.cn/163qtggxhxd.html

Go:   // 用 golang.org/x/text/message 或手写分组
来源：http://www.aibaodan.cn/163virqemns.html

Ruby: "1234567".reverse.scan(/\d{1,3}/).join(",").reverse
来源：http://www.aibaodan.cn/163ismgjubn.html

C#:   1234567.ToString("N0")
来源：http://www.xuanzx.com/163eihkrncg.html

[E17] 首字母大写
来源：http://www.xuanzx.com/163zqxlqnbd.html

Py:   s[0].upper() + s[1:];  s.capitalize();  s.title()
来源：http://www.xuanzx.com/163lbkkoqbb.html

PHP:  ucfirst($s);  ucwords($s);
来源：http://www.xuanzx.com/163whjnzejr.html

JS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.sxryk.cn/163snnryyqk.html

TS:   s.charAt(0).toUpperCase() + s.slice(1)
来源：http://www.xuanzx.com/163fixhaoly.html

Java: Character.toUpperCase(s.charAt(0)) + s.substring(1)
来源：http://www.xuanzx.com/163rvboglnc.html

Go:   strings.ToUpper(s[:1]) + s[1:]
来源：http://www.aibaodan.cn/163qmzfsrpz.html

Ruby: s.capitalize
来源：http://www.aibaodan.cn/163srtjdpcp.html

C#:   char.ToUpper(s[0]) + s[1..]
来源：http://www.aibaodan.cn/163xqzzahfa.html

[E18] 模板占位符替换
来源：http://www.aibaodan.cn/163vpuqcrsz.html

Py:   "Hello, {name}".format(name="A");  tpl.replace("{name}", "A")
来源：http://www.sxryk.cn/163aqcywuow.html

PHP:  str_replace("{name}", "A", $tpl);  sprintf("Hello, %s", $name);
来源：http://www.sxryk.cn/163vxqkhnnw.html

JS:   tpl.replaceAll("{name}", name)
来源：http://www.aibaodan.cn/163jnjtizlm.html

TS:   tpl.replaceAll("{name}", name)
来源：http://www.sxryk.cn/163txnsvpyv.html

Java: "Hello, %s".formatted(name);  tpl.replace("{name}", name)
来源：http://www.aibaodan.cn/163sjdgzwvw.html

Go:   strings.ReplaceAll(tpl, "{name}", name)
来源：http://www.xuanzx.com/163lnxntcat.html

Ruby: tpl.gsub("{name}", name);  "Hello, #{name}"
来源：http://www.xuanzx.com/163nblydlrs.html

C#:   tpl.Replace("{name}", name);  $"Hello, {name}"
来源：http://www.sxryk.cn/163sblfgpmc.html

[E19] 多行文本按行拆分
来源：http://www.xuanzx.com/163lonbeodo.html

Py:   s.splitlines()
来源：http://www.xuanzx.com/163frzkahzn.html

PHP:  preg_split('/\r\n|\r|\n/', $s);
来源：http://www.aibaodan.cn/163adyauyyq.html

JS:   s.split(/\r?\n/)
来源：http://www.aibaodan.cn/163gdofxtau.html

TS:   s.split(/\r?\n/)
来源：http://www.xuanzx.com/163uoywliwu.html

Java: s.lines().toList()
来源：http://www.xuanzx.com/163kohxhpsh.html

Go:   strings.Split(s, "\n")
来源：http://www.sxryk.cn/163gsfmxxwa.html

Ruby: s.lines
来源：http://www.aibaodan.cn/163knikebum.html

C#:   s.Split('\n')
来源：http://www.xuanzx.com/163jhjcxkhl.html

[E20] 判断字符串是否为空
来源：http://www.sxryk.cn/163lrejaoeb.html

Py:   if not s:
来源：http://www.aibaodan.cn/163mueezryk.html


<!-- 参考信息 -->