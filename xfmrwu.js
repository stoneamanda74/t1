外链999!wailian999！

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lowhpiol.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163morqyadi.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163chlpvphc.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163mcltyqgz.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163gsjaklno.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163fzgcrqgm.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163wrkydiby.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163xbrqbwty.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163dagjmaat.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163wmpuoyab.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163rxnnqfcf.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ssllafsg.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163plqhanir.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163wbifhnpp.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ldcmdwia.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xpudednh.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163mksbeycq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163cctfenyt.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163wwlluthr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163cdwbcecs.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xkqmsxce.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163dsvlfpjf.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ollyjyht.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163tvnjzuzd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163acpkznae.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jhmlrrqk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163swzdhazb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163gdajyrnf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163dfvkuqvm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163cqybfvag.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163khivxusx.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163nrgttsek.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163logzspyk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163hqypgbuy.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ntgiyyfk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163rehtcoqd.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163bfpcmvjm.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163mbynqueq.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163vhialxgw.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ylxahmxe.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ivtpbjqa.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163bgryrheh.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163gwcrtjuf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163qhwjoxhw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163cdicrzrf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rvhphowl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163svwugeej.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163lprsyjtf.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163zelnohhe.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163uuyejhow.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163hgawuaob.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163fjdyjzhk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163lrdyxavy.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163yipuxxfv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163olsfdmlw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163kjnaatfi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163tiivlbgt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163bykxoatr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163neqhgcxv.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163bvuzeirg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163gbfiontb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163eigrrbdu.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mogygete.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jvmcrqox.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163qmpluecs.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163whsabtxc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163eridafgh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163exjforvc.html

[D15] 去重
来源：http://www.aibaodan.cn/163fmxcrzof.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zyxpdekm.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163qhjuiabf.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163drezbgoe.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163kocmwoym.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163zczepdqy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163javmbgie.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163lixrulzm.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163efcfdgqh.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163tpjawhvn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163dqljgfva.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163oxcfvwqo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163qcjopnsm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163bywbimxl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163hmmftzin.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163jrbjfhqr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163nsopwsqs.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163kwwabqtv.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163evgthxqh.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163jirbitvn.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163gedzeqdo.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163uginlmlu.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163svwufwhs.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163rjhllayi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163cntlintv.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163febmlzrk.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163cmffgqmf.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163qwpaqaye.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163wymjsada.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163umgsftbl.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163zfqapmca.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ftzceifo.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163yhsvwgxt.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163gykxmbhm.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ajvieiwc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163shhcgtty.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163jcdyhyqt.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163zugmlcik.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163xprbtqha.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163tqliebew.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hmpagiuc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163uwigniqx.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163xydhpkec.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163rwrwcgls.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163ouvvgmzu.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163hwpabpla.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163pgewynza.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163kfdldghi.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163drlmyptp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163wooibnaq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163qxmzicau.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163qisxfdef.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163znyspxhj.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163qpfgcphj.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163mgowbszy.html

Py:   x in arr
来源：http://www.xuanzx.com/163krylalhw.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163xpjagvep.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163vxncyhxs.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163kxnrhivf.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163ylqteswj.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163tdydzukc.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163mbftcerd.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163msodqbgn.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ekozdyxr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163pdtrhilr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163teyqfgvj.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163ocmgrxww.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ozuevtgv.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163rbchefdh.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163okjvldqq.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163mznalwaj.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163lebnhgkv.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163xqevmwxq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163yxfanbku.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163aelkcbsr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fqpldcwz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163jvcjyojd.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163rspxwgtc.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xlvppyza.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163otbnsneq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163xlkiepon.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163kevluadh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163razqhsgi.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163ssacfzxp.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163wpoxpqlg.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163tlsvuemd.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163dtcltvnx.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163khgofiia.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163amulftgy.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163nfcnoqst.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163cuhibmap.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163vnzwjxxd.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163mjnntdgq.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163kgpzdicd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163mzwcwmlc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163sabxattr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163bpbhifat.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163ghczemue.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163wfabadli.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163phxvvniy.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163byjdngyk.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163dyfpcknj.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163xguddwzk.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163wsnqzojt.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ufwokrfq.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163vzgcagsm.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163squhsjib.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ojesxoul.html

================================================================================
来源：http://www.aibaodan.cn/163vtrtivkg.html

E. 字符串处理
来源：http://www.aibaodan.cn/163zhemfdtq.html

================================================================================
来源：http://www.sxryk.cn/163pwlgwpae.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163xjxflnab.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163symcgjdp.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163totplwpc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tfhkmbng.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gaulafmn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163jkrzszfk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163cbzidwbk.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163xhfpyczu.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163irfrntgd.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163mlutelso.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163pilljnhp.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163qnhmixag.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wfmrpnfm.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163zhaifspf.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163jublhgpk.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163gpwyjlza.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163synhdbwg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163iiyvmkjl.html

[E03] 截取子串
来源：http://www.xuanzx.com/163uznlcbjm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163docbwzay.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163tkjjjvkb.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163jpwatjeq.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163xxxkqnje.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163pzrkjmsl.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163ojhnrxmx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163blxhpspl.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163mdurwxtn.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163tjvzfhbz.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163vnsqkcqg.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163pouphark.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163mocspsum.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163bxctpqrj.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163asmmabks.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163erxxxzoz.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163merdxurl.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163zrhmmxxc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163bunpyyeu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163syiorbwu.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163bznmiqqk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163otnotebt.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163eltwskkh.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ieipdcen.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163gdpbcgtd.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163pwnkbqkr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163swjbmmdb.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ebompozk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163zscnsvsu.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163iyddqwhu.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hmldtqga.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163kovdilvk.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163tddbmsxe.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163ydsrtutc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ovxkwkwu.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163wpjbxpbm.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163lcmmknjo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163gjqhrpny.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163dkjmipdr.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163oocofyvs.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163podkyprd.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163fumcdzss.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163hsdvefxz.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163iqyclaqp.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163uictuwot.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163lljuomou.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163hppmapmh.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163gzvyoeub.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163wlwpcoxd.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163tweubger.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163wiwyrnzx.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163bydebwvd.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163hnxkwtvl.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163pgityyss.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163ezecpqpz.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163igqxskbz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163mzylhqvs.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163jppnaqcx.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163gsytkwfu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163lbfsxwnp.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163htisskqx.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.sxryk.cn/163viaskoav.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163oxfpvwoq.html

[E10] 左侧补零 / 定长填充
来源：http://www.xuanzx.com/163dmukqczy.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163dgcspbfm.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163dqagagay.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163ihowdhaj.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163jddyslry.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163ptpgaohs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163nuwgtusd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163brrramrp.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163tdcwiejv.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163dexeriul.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163fgawjivw.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163nprddfeu.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163mbtxdyac.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163xtbghzpw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.aibaodan.cn/163xwithrnj.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163imtlvxht.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163djctkvfr.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163erazened.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163gvvxhceg.html

Py:   s.count("a")
来源：http://www.sxryk.cn/163htvsfxyj.html

PHP:  substr_count($s, "a");
来源：http://www.sxryk.cn/163qrqjaqek.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163hsfywslw.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163loqlqady.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.sxryk.cn/163ifxlnvau.html

Go:   strings.Count(s, "a")
来源：http://www.sxryk.cn/163dulbhyil.html

Ruby: s.count("a")
来源：http://www.aibaodan.cn/163advguvmm.html

C#:   s.Count(c => c == 'a')
来源：http://www.aibaodan.cn/163rmsgirvl.html

[E13] 逐字符遍历
来源：http://www.xuanzx.com/163xatxxzjf.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163trlxqazn.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.xuanzx.com/163wjxfzfgr.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163ecffgjcn.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163oxokjadn.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163rwfdtoiz.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163ivimezdk.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163txriueqm.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.aibaodan.cn/163zttgdark.html

[E14] URL 编码与 Base64
来源：http://www.xuanzx.com/163rwpokflv.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.aibaodan.cn/163wjcycdpb.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163pyvbijxe.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.sxryk.cn/163pzgceimd.html


<!-- 参考信息 -->