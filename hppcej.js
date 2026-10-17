外链999!wailian999！

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163cpfyfmlc.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163khphwhpr.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163wjwughnp.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163lzafcnwz.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163jepxxhdo.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163xoxjxvkf.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163xroyijic.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163gitomplu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163dhpqsfml.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163lnfbbvgg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163abdbbcpv.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163abpunpvk.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163dyhjuhxy.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163osequdzj.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163vshpramx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163faadtefh.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163hpmzjryt.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163axitdlcj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ncbqwovc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163tzaltmgi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ytjsvvwd.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ueakqhfi.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163flvvclxy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jevyngtd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163xlftugko.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163kxnvfnkv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163rtijwamz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vvxygccv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163mqldwpxs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163jmtuyfqb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163bxncrtbr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163eezasfwi.html

[D11] 反转数组
来源：http://www.xuanzx.com/163hcyowhad.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163djolmhcd.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ajchyhmp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163syqrhplc.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163yywwkmez.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163gnzfbrgu.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163emwskajm.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163piwdhien.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163quvguahl.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163kprxybaq.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ruijegvg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163oxclmuga.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zpkoqfbn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ciqboevu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163hjjqhejz.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163alndrxrh.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163wpqjhngu.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163lcnuhfkh.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163clyowkjm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163vgxyryxx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163jbzqzmki.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163iovikuzg.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lakhfhyk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163dxnzfcwi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ablgcfpa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163rjhkccxb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163hlzmzjhn.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163koujnidv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163vtoxnsdf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163wifpmdvi.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wqwcykym.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qkwdgkej.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163sggevhoz.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163tvpdamll.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163wgszskxn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163tducnlfy.html

[D15] 去重
来源：http://www.xuanzx.com/163zhoxbjik.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163lvxhhkdj.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163istlnyww.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bywzvzdy.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xhccrbub.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163bdaaqpys.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ziklxojx.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163kayxxeno.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163oeahjpyw.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163kudpkrnv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163rmulfwng.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163bnuaykoc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163psxwyeeo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163tkhwrfqn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163basmgcle.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ebgzjtjp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163xdevzsxg.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163rjiervzn.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163nvlrvbsc.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163igoqhbel.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163rghxtjih.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163djxoxzqn.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163uhfaycly.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163yfyfakac.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163efaoanpg.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163kvejsqvd.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163kdsooigm.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163dauwmoop.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163dhxzaufy.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163lxyrlabi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qsgyxsgf.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163jahprste.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163qqgpmgoh.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163exuhircu.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163covsrlbc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163vrupxmuo.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163mvuuenrj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163rgdiqiud.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163bnuucsfk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163epolposa.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163gzddoebx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163zgiuapux.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163spbuqhjz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163nhtrdsnz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163jegnaiva.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163syoqcula.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163bgkoddck.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163orcdsdnk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163wxwegkea.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163djpztiha.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163umomwfxi.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163anhovefh.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163dlifvmfe.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163qigvyjbf.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163ogyckxai.html

Py:   x in arr
来源：http://www.xuanzx.com/163finkmoku.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163oqzybaco.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163apfrsdry.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vyzxkahm.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163cjmupiqf.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163lxddetdl.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163sigxqgzz.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163lrgtngms.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163taljrnqz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ngcxdnhp.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163nrockbhn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163hjqkxoqx.html

TS:   [...arr];
来源：http://www.sxryk.cn/163dfwbzlxu.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ncmzjphs.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163pdyrsnsw.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163rzbptlws.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163vaagznfe.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163qdijghok.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163kubteahq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163zsswopzc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163uuklpbap.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163yagdlotl.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163ftrkecfo.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163fivzyfar.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163oehqzmrr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163jicsftne.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163xneklzbc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163rxnaoinu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163srapzntg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163dppbfhdd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163edacbrsv.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163rdbhxhul.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163pksyzost.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163xsbqdfzl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163fqigcqjg.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163qtgzuitz.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163mshsibay.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163xowhrara.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163ztbkwqri.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163tdnscknb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ymesylww.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163hgzkrcou.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163fbvodjrh.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163ivrhbvjl.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163yibpzfjl.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163pchkbnzu.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163iazlfcmq.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163xjehiuvc.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163kpfbckdw.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163poqmforu.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163hmgxgjlc.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163rxpfejdi.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ngmmruhc.html

================================================================================
来源：http://www.xuanzx.com/163rwntgbkw.html

E. 字符串处理
来源：http://www.xuanzx.com/163ottccdtc.html

================================================================================
来源：http://www.sxryk.cn/163uaszwskf.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163spmjitxz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163qaewayum.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163xjlexben.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163riigceyx.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163niyoqsdd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163vgfqolfj.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163tzeyackj.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163pfaagtjk.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163xxtmjyba.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163eksczbtx.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ckuzcgfy.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163aufqhdfg.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163tgqtwvaf.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163pkbvxvsw.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ynnwiagy.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ahpihetn.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163dgqlwvhu.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163ypyabgtc.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163aehhbswy.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163uanmdlfv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163seoloxrq.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163nzybfmkc.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163vooeavvy.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163vcrrjrmd.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163gmywshxa.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163hcsywmur.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163hhjgkfzv.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163ybsssjxo.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163udcbdkdw.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163afhivqhv.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ieayybfy.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163fwtzitkg.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163tmgyxkoc.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163lctsesvk.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163ilpsgjua.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163phqpuxsc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163yylqgjky.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163xsudoeun.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163bdevhsya.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163rijhllwr.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163vgrbvisv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lhvokaue.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163amkbsvww.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163kzvltbng.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163znjqikbi.html

[E06] 替换子串
来源：http://www.xuanzx.com/163zmgqeehq.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163icxxsjuq.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163iidmlvbx.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163vzmyyygt.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163dcqzuanj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163aghiksdi.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163ptvvdido.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163hhulqbyf.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163qdvnaoyt.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163vovyuywa.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163faosffaq.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163kgydmlti.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163rqhfeptt.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163mmttkumy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163dqlwbmvq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163boaflqaz.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163gpjmcotx.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ckiqeenp.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163unydgobv.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163jldkkyoh.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163lnbjsytl.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163mvgxlpsg.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163kwmgczgp.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163tlgtdddo.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163nszlijcw.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163bhvxemfz.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163wtdtmwnk.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163owimlpze.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163kmsrwkiy.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163rivwoezm.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163zfsqktzu.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163hjerqzdl.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163nlttgcir.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163zfcqkdmd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163dohcplfq.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.sxryk.cn/163rtldojur.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163phmduvwd.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ljdodnru.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163yflucbew.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163fwhffkid.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163yumeypbr.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163zqtbdbvh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163nfuyobge.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163zhnktyez.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163rqbuvaiy.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163mzxwpapu.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163iyvrviys.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163prhpsvbi.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163qapbjdds.html

TS:   [...s].reverse().join("")
来源：http://www.aibaodan.cn/163tftwhhpc.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163zgfotgjx.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.sxryk.cn/163areafzcs.html

Ruby: s.reverse
来源：http://www.aibaodan.cn/163wkknwdkc.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163gfpjjktc.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163rspvkgzc.html

Py:   s.count("a")
来源：http://www.aibaodan.cn/163wxjkross.html

PHP:  substr_count($s, "a");
来源：http://www.aibaodan.cn/163vzfggerd.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163jkewmrgu.html

TS:   s.split("a").length - 1
来源：http://www.aibaodan.cn/163ddrvinqt.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163vdmggtui.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163xouluvjx.html

Ruby: s.count("a")
来源：http://www.sxryk.cn/163pvnqacpk.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163vvfmgsis.html

[E13] 逐字符遍历
来源：http://www.sxryk.cn/163zplozofe.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163wfyohepg.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.aibaodan.cn/163inurycas.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163xjgzavil.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163wkkpkunt.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.aibaodan.cn/163kfvoaytx.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.xuanzx.com/163vajmndoe.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.xuanzx.com/163pynzbroh.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163wybazupu.html

[E14] URL 编码与 Base64
来源：http://www.aibaodan.cn/163wmmaozwa.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163xnvzeqia.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163iglxgchm.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.aibaodan.cn/163dmejcses.html


<!-- 参考信息 -->