外链999!wailian999！

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163efviytkx.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163wsxvpsfp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163pvyshlrd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163urkmxtwq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163gydhkvkj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163swnwwuxn.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163eahimmgd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ugupgsdp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163memdyzxu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163avbkfqqc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163zziespzk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ywdaiuda.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163fhscrgkt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wcvlocpl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163dulatfpq.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163yolydakf.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163jqdytnmg.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163rsyjdljs.html

JS:   arr.length
来源：http://www.sxryk.cn/163lhipakls.html

TS:   arr.length
来源：http://www.aibaodan.cn/163fzocciqq.html

Java: list.size();
来源：http://www.aibaodan.cn/163wtefipur.html

Go:   len(arr)
来源：http://www.xuanzx.com/163vuixqkcz.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163gdxqnojj.html

C#:   list.Count;
来源：http://www.xuanzx.com/163yppbanue.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163kibrximr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163rnrmavpj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163fqcwxwew.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ixranvjr.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ywguklpk.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ymnxumbn.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ffihblbn.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163yvmbrevn.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163mmlnsped.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163arufamef.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163nfvgstiq.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163sugvhlii.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163lmnrzleg.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163grhqecoi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163cyjgutbu.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rahgjrbc.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163lqpzdojp.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jlyfovyf.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163lbgvmimk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163nqjjwoyv.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163idakkdzw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163uyihdokm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163pjzipjpp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163jexlfili.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163fvchnhyh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163rqhahkdt.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163rwzrdqeg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163oiicbzio.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163hauaqugo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bytmkfvf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163eaqahcjc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kxlueusx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163qgnayqbu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163jqnabvpq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163tpizlvin.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163gijlgzgh.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163lzcfhgmh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163omxzivud.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163unubnukv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163sbgbdspi.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163xxsncngb.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ztzpsfjf.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163jnzuoeit.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ltfgxnzb.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163jexxujho.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163vvhjvttn.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163tgswmhev.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163crbqofwc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163gxupnfpv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163tddeqpiy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163oihzcqop.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163fjcjgzax.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163pfiwolrx.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ijyynawy.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163nubyfjca.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163wruwcbon.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163fjzezydb.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qisoacyb.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xtokqvnq.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ficjvwbq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163oaswrzqd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163nlpdxpzm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163irwirbjn.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163qqrlyirb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163twiwroqa.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163rkfbbzsb.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163zrgizwlq.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163rlgdeusz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163tuxdlgyp.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ajttocqs.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163ploqwyls.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163vpwlpnfi.html

[D15] 去重
来源：http://www.sxryk.cn/163ljafsbzs.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163tetxkjux.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163gnxuteiw.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163psjtuhtu.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163unucagzw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163jkymcsrh.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ysrgjtnk.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163qdinfbke.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163qdikwuqq.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163bvgphyrs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163lpezczij.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163rmawklpw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163klxilhty.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jlalpabh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163xjivkara.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163piaexebb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163tyffzlcw.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163pbspadbe.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163awnwdhpy.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163aayohqiu.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163jtwztegp.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163mfrygnpu.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163uxamphht.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163pgazxqal.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ygkcjwzx.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163zmrdenfi.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ygarjdsb.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163yxwztshi.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163xaobopqu.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163cxuxlxfs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163krwuwbtj.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163yqkbvuid.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163jdjbaloe.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163keseqcvl.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163khipnrxp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ykmsumkg.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ezbcaddm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163uevjgzgg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163qtqralbh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163rxjgdrxm.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163cuytdpvq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163fwlxhmep.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163swjmrgii.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163jupgajmg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ppyifwpe.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163amibzijq.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163izfshejo.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ackauher.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pwmpdfrt.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163otbznxcu.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163smqftfpt.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163mgorvhwy.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163vlmdhtma.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163vsnzrcjg.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163yzvveomt.html

Py:   x in arr
来源：http://www.xuanzx.com/163uqyooqrz.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163lovcapcp.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vdqfgtan.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163zddjlnnr.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163johbzqgb.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163ljkissxi.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163meajmawl.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163ypyscrup.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163dvywscpo.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163hdxersdi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163oigotykr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163eeugfvlt.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163pclwecgt.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163ugtpqkjo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163xvjcamev.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163bwxrnskd.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163nvlizceh.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163dpsemjbm.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163vjkbcbyo.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163lldhyryv.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ghwkhfvv.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163obszuskk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163hwdbfrgi.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qprljodi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163tlixbmzg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163ekzgggrg.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ctqdweee.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163otoebkor.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163ooakhxcy.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163achexpni.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163qagelglj.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163fugopxcq.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163qfuobgmi.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163kkkqkuvc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163bvdkwxih.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163uasowdnu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163ynkhjwur.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163dmczggmw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163uhmwgruw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163hwtqqktg.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163xjvzzsgg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163qbndkffc.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ypckhnwt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163vonhvikx.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ephhbodl.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163bgdqtqnp.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ctekjdzr.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163qaplmksw.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163txdzgzqc.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163gqcbzobk.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163fujwdtiv.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163iembzbie.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163cadtxctl.html

================================================================================
来源：http://www.sxryk.cn/163gigmeivq.html

E. 字符串处理
来源：http://www.aibaodan.cn/163mnvfxhrz.html

================================================================================
来源：http://www.aibaodan.cn/163argeppxy.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ebhoabhm.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163hdxnutzn.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163nxboxrmo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163jqxhegmk.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163vxdghqqg.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163dgwzzdzt.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163liffkuua.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163hcxjmizj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wbzlpcte.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163pgnkdsov.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163pvbtbkdd.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163jlmbnmny.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163pmddvyld.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163lctzkwnt.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163xjiqkkpl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ujzugnnn.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163hxtsijbe.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163qeurglmq.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163epiclnty.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163vuvlxpgg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163hwssfaba.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163hderapcv.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ejsedbbp.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163zgyyiaup.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163miqsvyzl.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163gjmicidb.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163snydnfqz.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163gpnwukrw.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163dbckjamc.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163tkiwkics.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163gjkpelma.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163bwgnlmwv.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163lgkgxawn.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163gyddyaed.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163fbgfywoy.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163rfpsumcm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163mhhfspuk.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163vwqukozv.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163wsqganrt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hmfftkzk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163yhuoxjyp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fuirgmja.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163plyhqonm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163cesimsoe.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163nnixshii.html

[E06] 替换子串
来源：http://www.xuanzx.com/163cjqiqwfk.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163kikjdutp.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163kaipliwk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163arobmllc.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qkshdytm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163jkahvwzp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163einxjmue.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163ydhrqznm.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163jwypvcps.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163jaoeqhbw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163oscboqwf.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163wywtzcas.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163iihcqkxz.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163voctenyt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163yzcrfmvy.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163lgbpekap.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163mqbrqbha.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163mviterpk.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163nofnfgjv.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163nzdnedry.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163sjmneedi.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163lsigpthk.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163erpbsetu.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163yzzdzyuh.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163tdaowqrr.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163hebheslh.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163lgvavief.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163vjvlpuxo.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163jtlmcpbw.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163elwbptgj.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163bdvmyksf.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mvaxrzqu.html

Java: s.replaceAll("\\s+", "")
来源：http://www.aibaodan.cn/163xygqhsmf.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163udadbupr.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163xcocezta.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163lcyncdhr.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163gsbvlmen.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163fmjtsavl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163cieyyxvq.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163awaszbhx.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163sabtrgok.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163kieuebaj.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.sxryk.cn/163zovkrwnd.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.sxryk.cn/163rzvamobk.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163arcqntnj.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163vithegcj.html

Py:   s[::-1]
来源：http://www.aibaodan.cn/163gofkcfse.html

PHP:  strrev($s);
来源：http://www.aibaodan.cn/163evyjchml.html


<!-- 参考信息 -->