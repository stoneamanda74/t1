外链999!wailian999！

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163adfcceuz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163vqnqxqfn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163xfiypdcw.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163qjlctphh.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163yjionasa.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ozwsywoe.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163utowrnbq.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163vufdzknv.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163wrwguocu.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163toexqrpu.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ipztmxta.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163cesxaoso.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163pkumpxor.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163kcdlrajt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163cslblauk.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163sjbgrrvi.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163vfjtekvx.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163qukkfeif.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163blftzyup.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163joafnwff.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163qnxjvqon.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163zzwquzpo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163qfadiiee.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163oaapkmki.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163iwuanlnx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wthobsfq.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163rjxnqgoh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163gzochowz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163wtdvjiwj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163dhfzqugz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163uwjlplni.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tfxgskmd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163unwwytst.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163kqhzizex.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163tfcqouot.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163agvsseoj.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ptogmcyx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163qzwjkmvv.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163twnpsgpc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163jpvmcdpc.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ummpyoim.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163vxbfivhy.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163rorpmhmh.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163qjovrher.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163dzedluki.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163dimksdfp.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ygjhhcow.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163qsobixeb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163csjmsrvl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qboijmyr.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163rhzilobj.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163jmuietrb.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ytfrepws.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163pchocizd.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163nzbtseha.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163suyquqys.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163kmnzyhbz.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163rvhmqstx.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rdmtsvxu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163inuzkqgb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163icwnbvli.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163vhsufvzh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163pesclzwm.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ozjmqdny.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163rquittiu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163kmukexcl.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163pzunlynk.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qhtwlpcj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163fsmpfapm.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kqzsefjb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163klccfrpb.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163zhqjgqba.html

[D15] 去重
来源：http://www.sxryk.cn/163emgzaytg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163meipujny.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163akjefqii.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dzebheyc.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163iuibjaif.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163pstltriw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163wbwsjbgj.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163rjvcfifw.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163kzwimctq.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163epaaotig.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163mlmsyesh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163qdywlmow.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163eyrqxmne.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ewqqilog.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163nurwigzf.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163aszhumyh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163iywvuvep.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163vgtmmpce.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163woonuqgp.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163vmjhmzld.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zioyxgrm.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ooxyabcn.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163jhxaioel.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163smechdim.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163kilqimif.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163woghjqpd.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163tuiqmzlm.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163akjrxzbe.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163taszjmtm.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163wufqkaym.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163jcjficis.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163ylupljdn.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163phckmiqq.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163lduijdyw.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163vlqoqlek.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163jddwiemu.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163gdwexvpq.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163lydchwty.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163rxowqjqm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163oaoojlvf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163uixlktba.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163ywcfcwcv.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163eqowcyff.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163djndkwch.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163mtttdkhd.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163zmfoktzy.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163jatdmvqg.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163kexikrwu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ptohwlgx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163aisbbslo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163nfqgsodp.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163felhimtm.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163leohfdwi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163wjtmhhuy.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163vyjtdxwk.html

Py:   x in arr
来源：http://www.xuanzx.com/163gfbpggei.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163gmxctidl.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163cxczzxeu.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163eyeubczk.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163msqgclyp.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163cyxyojle.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163jygndgca.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163uwesiczt.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163xowyvswj.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163pimjagnu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163bqqbwgnr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163xgqavuya.html

TS:   [...arr];
来源：http://www.sxryk.cn/163wxkjijng.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163iejnnfwl.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163glxyoqyc.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ukhynoxq.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163bfchbaqh.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ojkabqkz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163libfgjrb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163phqwkwla.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gejokcpw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163eelkbero.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163rtqwuzyd.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wgrskczq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163bpzzcrfq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163fdfolqqt.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163augruljh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163stnphhsd.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163cpcafezs.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163laggyztd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163wutyrjcx.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163gkojezsk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ndlgaibh.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163yppdcptd.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163oenvkptd.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163lulwgqsp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163copsokqa.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163diygvajr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163dyipsxla.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163racauvpe.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163voscwnoy.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163hbwseyxr.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163pkvwavgb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163epbrxkew.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163sxsjuema.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163qzmniszg.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163auetuglb.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163pvxfecna.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163afnhmqbj.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163qwxojzgh.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163tqguvbnl.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163gcnpyvsr.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163wybqbizj.html

================================================================================
来源：http://www.aibaodan.cn/163mrfnwrck.html

E. 字符串处理
来源：http://www.xuanzx.com/163ccjhmpwp.html

================================================================================
来源：http://www.xuanzx.com/163zhptlaos.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163uevfzvyd.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163cctgmmsx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163tllevwzp.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ujynpyes.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163tgnqurqu.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163dtrkujcu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163yvxnoegy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163mjlltwen.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163nnunwfgu.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163jyarsbsg.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163bacqbepb.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163kxcijorq.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163diyidrfw.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163klnwadjt.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163dfomrubc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163wgbkyvat.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163byslwhrk.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163pweisrka.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163iqjjwmwi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163cxrdkarr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163tcgibzvf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163urwadupu.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163cbhizfwg.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163puwmewpm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163zypcvwbe.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163andpidtx.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163bsdtxwfv.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163dhqxyeys.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163lyscorrx.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163lrtrdsgs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163ezgfokuc.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163ndqudwbe.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163rqwquxjq.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163wlmtpwxt.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163sairnejw.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163jsevccxt.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163lwrhfhln.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163zrursmhh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ixgofgmr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ylmftcip.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163kkbzxpdv.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163eflqobro.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163gckbsvpm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163gmclgbwn.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163owkxroxh.html

[E06] 替换子串
来源：http://www.sxryk.cn/163qmrhyemr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163zyifblbf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163akkizirw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163tidvjpdp.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163akemwier.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163bvhofltw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163anxtfcmp.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ytweowdf.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163nekqfaeo.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163hawxrfhv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163uznlyuxr.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163njaypjol.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163evnvhlkw.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163bcdznjig.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163fxfjgvic.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163jgprjihb.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163bndbrfjb.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163urosmihb.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163ufewvlre.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163gklvmeoz.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163eejedbpf.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163estgyjzb.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163esgpglym.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163wszgsyyj.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163yftrrhsy.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163frevyajz.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163sddaruzq.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163tzwmewpo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163xzcngpds.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163biddmtmt.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163gjkalhcc.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163czmbfqbv.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163wqaczapf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163citysnlv.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163cyejrboa.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163reytjiro.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ghainmlm.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.xuanzx.com/163ieydmsgc.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163slyglcmj.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163wmfufixn.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163upeqnojr.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163pccuxuip.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163ddrgbvac.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163bshfyncd.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ryxecpeu.html

[E11] 反转字符串
来源：http://www.aibaodan.cn/163asubfbgz.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163wrecqeal.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163sovajnde.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163vcpldxcs.html

TS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163lvbalsqr.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.sxryk.cn/163sstlqmbt.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.aibaodan.cn/163jzuxijrb.html

Ruby: s.reverse
来源：http://www.sxryk.cn/163flyflcyx.html

C#:   new string(s.Reverse().ToArray())
来源：http://www.aibaodan.cn/163yhsgiugy.html

[E12] 统计某字符出现次数
来源：http://www.xuanzx.com/163lnqozkro.html

Py:   s.count("a")
来源：http://www.xuanzx.com/163xgwpnzbk.html

PHP:  substr_count($s, "a");
来源：http://www.xuanzx.com/163txmsdqdj.html

JS:   s.split("a").length - 1
来源：http://www.xuanzx.com/163fjftjhfm.html

TS:   s.split("a").length - 1
来源：http://www.sxryk.cn/163iejkmoic.html

Java: s.chars().filter(c -> c == 'a').count()
来源：http://www.xuanzx.com/163sjlqtjso.html

Go:   strings.Count(s, "a")
来源：http://www.aibaodan.cn/163pxikgpyw.html

Ruby: s.count("a")
来源：http://www.xuanzx.com/163uqozbqnu.html

C#:   s.Count(c => c == 'a')
来源：http://www.xuanzx.com/163xfcdkdwv.html

[E13] 逐字符遍历
来源：http://www.aibaodan.cn/163gtimvumw.html

Py:   for ch in s: print(ch)
来源：http://www.aibaodan.cn/163fsececep.html

PHP:  foreach (mb_str_split($s) as $ch) { echo $ch; }
来源：http://www.sxryk.cn/163toyfcjhb.html

JS:   for (const ch of s) { console.log(ch); }
来源：http://www.sxryk.cn/163pkkbplgj.html

TS:   for (const ch of s) { console.log(ch); }
来源：http://www.aibaodan.cn/163pcveumbi.html

Java: for (char ch : s.toCharArray()) { System.out.println(ch); }
来源：http://www.xuanzx.com/163ckzmjfns.html

Go:   for _, ch := range s { fmt.Println(string(ch)) }   // 按 rune 遍历
来源：http://www.aibaodan.cn/163jihhsmhq.html

Ruby: s.each_char { |ch| puts ch }
来源：http://www.sxryk.cn/163otozismz.html

C#:   foreach (var ch in s) { Console.WriteLine(ch); }
来源：http://www.sxryk.cn/163llgwdfzx.html


<!-- 参考信息 -->