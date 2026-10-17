外链999!wailian999！

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163yzcjwfht.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163jfxzpbhs.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163xmgyohru.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163veeqnvsx.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163qwijzojv.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163nulaqkwe.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163vuxafeib.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163mikosymd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163toeppwqc.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163njkqgbsk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163thlrdhvm.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163udqnxoyn.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163cwvmyktp.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163lagtznhw.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163seyjtldt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163valpewaj.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163kesndirc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163hhenvlcf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163laudluub.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163nmxildzj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163qgzjlqcq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ifqvffgc.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163fvfngsff.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163vdbhcmxg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163rigielqw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ejxjbdls.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ajirgevg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qiwqlhlh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163cdvyjzxz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163sbemztnd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163nxjvmpwj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163tfmizboj.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bwphmndi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163irsxamuy.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163appqzcpv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163rsffpqrt.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163oetvqnov.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163trwunjtb.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163mwrmauno.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163pijkrrca.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163hyrrlkra.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163qwxyepai.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163lxfgksax.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163oasvgcsn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163kkeaawae.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163imztgukl.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163jvplgpdw.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163iwssatot.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ilmktmbt.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163fvemxvom.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163zpwooose.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163cqfqssxy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163xplggeoi.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fmgeyiqe.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163qpuittoy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163gcjgxvoc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ilxpstkn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163lrgavxfm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163emqgcqhj.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163iwqhlzks.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163zpokldqa.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163benynhhg.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163zvmtpwqc.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163lddviiem.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163gcmgcznc.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163rqoghrnn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163nxuwnjks.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ltmrwdhl.html

[D15] 去重
来源：http://www.xuanzx.com/163ptykkmmm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ynhmhgpk.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163rzlhrlyd.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kdscqkme.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cdepanps.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163xktfkcmy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163zxorbuid.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163smhdfjqs.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163uinshcbw.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163hxtytekl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163xghjwwnt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ohmolfmb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xymxzbkb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163zrukuxtl.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163wvfznhxr.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163mnceywwt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163kyaoezjp.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163zahrijuy.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163clxyryiv.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ibgbrycz.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163skjjeaai.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163iquuihfa.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163zbjlqejf.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163nlypebeh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163iuvcmbmb.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163nwwydcwz.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163yuafifjd.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163iyqlvamc.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ntvvmoan.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163xndqaubf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163rciyieln.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163hcqfserz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ffafrfsm.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163mquojtio.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163xouatbva.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163gjvygmmq.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163fchvcmpz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163ltshvess.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163kqtxepmz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163adkxfvwm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163pjhccbtj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163beuxdsxg.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ekafwyrj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163otndalfd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163fljoudxd.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ziuriaeo.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163txldrpep.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163oerbublk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163faqohkoz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qcqcmlyo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ozyoyxrw.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ubkoonqr.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ghictwes.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163rpdqcjbm.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163htvruopj.html

Py:   x in arr
来源：http://www.aibaodan.cn/163eldllmmw.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163cxeefqvt.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163yrmvwtzz.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ykacupnl.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163myhwyjrq.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163wqombjxu.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163gqqrozmy.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163eoafdkpm.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163sphyuimh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163fbxealia.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163tkvsfmtr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163jzxrmesb.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ougqvzpv.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163zvefqryg.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163pnibyiba.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163pyngquap.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163smlsxgwu.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163eqnoelqj.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163kekvegwh.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163dtflhswu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nnjsaqwo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163nkpgfluf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wwgpdvaw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163sloqzjmm.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163ilhhndsx.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163fnlyempi.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ymyxxugw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163jaklifwj.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163tjdwejeg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163ldfhzcqd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163knlaasus.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163hitazycj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163hhfkrhpv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163lawljrxb.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163fzrceeob.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163xlolvmxv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163nqjhwozq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163hxmrkcwj.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163vmunwbnu.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163jsmugmyi.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163ftdzeyxb.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163olmrrqnm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163qubgqwqj.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163pnhxyubm.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163eonvewfm.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163usdlwhby.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163lcvzmldu.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163unawnipk.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163dbcqgswz.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163zugrwspq.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163klupkopv.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163mcbymcea.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163yipbbabw.html

================================================================================
来源：http://www.aibaodan.cn/163whkohmyi.html

E. 字符串处理
来源：http://www.xuanzx.com/163kfjeoork.html

================================================================================
来源：http://www.aibaodan.cn/163xihgnldk.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jhytletl.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163qgqzjfhq.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163tuncktrq.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163wqvneexu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163epxwyqei.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163ticmkgpz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163neeywmqm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163qehwjdyz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163rgdntgvj.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163orzrmzew.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163slrpqlwi.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163wwewiduz.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wvvxzzkn.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kfcqugjj.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163uwgxmskt.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ieppgukv.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163pfwcqvdq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163bgcpzifn.html

[E03] 截取子串
来源：http://www.sxryk.cn/163oursroks.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163njbjquop.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163wvzrnzgu.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163jicervij.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163mgqwbpbt.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163mrbtwkfu.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163ycmlxohc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163sipyetpz.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163znylttzi.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163pyncobvk.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163ifckecze.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163sotuqrao.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163porglauy.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163pxlmrmfi.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ezgygtpq.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163worpmgzg.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163iukaymuj.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163tqdkzmhq.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163escqeaux.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163nacwqtqy.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163bqmsbvod.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163fdxvfnzi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163fxomydlw.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163akygsyjt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163zsbnallj.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163utcsitdr.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163dpvlpihq.html

[E06] 替换子串
来源：http://www.xuanzx.com/163qzyrcyjs.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163vjgtykyi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163icsvanpa.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163btxmptcr.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163joozmdrl.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163ilyoupsh.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163tfdbyues.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163poghspex.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163gpenaqif.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163xetedvzt.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163kmlusfxu.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163pfxghqgo.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163nszncfam.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163wfibhsyc.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163agjczchq.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163dxewzhos.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163gwqaclns.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163zkqjbvfx.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163bhncjwqi.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163trzokgor.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163cjvtziwx.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163zcamvjeb.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163lwndbbmv.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163srvhhiue.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163ammythyd.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163oeygbfxs.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163iixtpjpr.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163szohmpon.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163dgyseexm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163whoxqbob.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163sgapjlix.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163sjqbnahf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163rriiisoo.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.xuanzx.com/163vzbeuoda.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163lvtebnsw.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163whdftuqs.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163rcknuktr.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163rjljcfuo.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.aibaodan.cn/163fjxtdxrw.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163zizmgcsc.html

TS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163psqvpkzs.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163jcbmqpxs.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163swhmvyzb.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163kdfaiiit.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163lvfuvzzm.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163krpbjxfu.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163bsgbcrmh.html

PHP:  strrev($s);
来源：http://www.xuanzx.com/163szbinqpq.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163riixahsa.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163szkmuzum.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163odnfdxou.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163jgshetnw.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163vjlmlwhm.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.sxryk.cn/163tymfmqxe.html

[E12] 统计某字符出现次数
来源：http://www.aibaodan.cn/163oiqmkmfk.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163syieanvj.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163pefagilh.html

JS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163vehujvrk.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163dppngalp.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163lkbadnqw.html

Go:   strings.Count(s, "a")
来源：http://www.xuanzx.com/163aoxnusvh.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163ctpvtfhl.html

C#:   s.Count(c => c == 'a')
来源：http://www.sxryk.cn/163qeuurzku.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163hutvdrpv.html

Py:   for ch in s: print(ch)
来源：http://www.sxryk.cn/163eoyrklfu.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163uqqpfixa.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163lypnovyv.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163oxdtiuoq.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.sxryk.cn/163vxsszdvy.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.sxryk.cn/163nwdojggs.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163deeazswc.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.xuanzx.com/163nhywxevy.html

[E14] URL 编码与 Base64
来源：http://www.sxryk.cn/163ybmjenut.html

Py:   urllib.parse.quote(s);  base64.b64encode(b).decode()
来源：http://www.sxryk.cn/163ltylnlpq.html

PHP:  urlencode($s);  base64_encode($s);
来源：http://www.aibaodan.cn/163jmwacuaf.html

JS:   encodeURIComponent(s);  btoa(s);  atob(b64)
来源：http://www.xuanzx.com/163haexrtsv.html


<!-- 参考信息 -->