外链999!wailian999！

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163gefzkifh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163kwacvodq.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163xucryavg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163mihbihxv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163jsnvasua.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163trckadsi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163lpjcrict.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163dvrbpmwf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163mdnevduo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163yxkcyggu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163yjmhoakk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163anzihmlh.html

Py:   len(arr)
来源：http://www.xuanzx.com/163beuhbzrh.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163rquevacr.html

JS:   arr.length
来源：http://www.sxryk.cn/163vsgehefl.html

TS:   arr.length
来源：http://www.xuanzx.com/163qnnsttho.html

Java: list.size();
来源：http://www.aibaodan.cn/163nltuweeq.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163buxenbff.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163dfznbeey.html

C#:   list.Count;
来源：http://www.xuanzx.com/163yzszdtna.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163vtooahtr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163nvcmvsrb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163mhnazura.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bfxlqpfq.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163wxdxarxc.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163iwjsgkyc.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163jyasojxy.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163dknpdkji.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163clrxxdoy.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163nwqzsvsl.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163wmryzytx.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163bfabkebz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163avlldkzf.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ipwycatp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ulcklglx.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163jxoggdpl.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163nmfigjlg.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163wybtbwwg.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ojcctgpm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163utabzifj.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163oyfsdhti.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163bmcwienk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163qddiloak.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ofybhvqi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163hkqjodxt.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163dqohvnpd.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163elsplybk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163vaggwsaq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163mjefsfwz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jbienlah.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163oxefqbvu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163wcdatpvd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163vcamakjh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163faolyjin.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163syrxojbs.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163frrknuuk.html

[D11] 反转数组
来源：http://www.xuanzx.com/163kfdlkpwq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163kcpusjfq.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163luivwdcs.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163azfezucx.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163bijzbsvz.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qretbbnm.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163lsuudqvm.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163spczawyv.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163coxuugbz.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163dmhjkfea.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163dggfirep.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163tvnnormd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zydsibcx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qxfkymkg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163jqfnpzyx.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163nliwjarx.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163rnsngwng.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163gqchvwhk.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163hrghwkhe.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ncxhqoko.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163jcvxhbxw.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ugdltoca.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163hdwdsvqe.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163rfnulolo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163akzclsry.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163gsqwtqqc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163pckochmu.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163wrningwp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163gmwzojba.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163dpasrxeb.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163prkvlutz.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163bpdunwyz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163nqlvwnom.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163okjlwoxi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163rhgjnwox.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163hyvzkhnm.html

[D15] 去重
来源：http://www.aibaodan.cn/163yqtqqdhi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163vuvmhoxp.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163vjldisnt.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163zdjeuopj.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163uburquas.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163zoqgzuck.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163rpnpfdrg.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163zeptjlmh.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ywaqfexc.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ltgvmcbg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163fqhybtlk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163icvlzsaz.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jixtsdfh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163frhdvpnk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ckjkwoss.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ajohszot.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163fzyckjgg.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163hctctpqs.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ljhqjqda.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163gzptuxfq.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163psnbxgnt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163altcyflg.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163kklwvuzg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163nqnvjyyr.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163epmaocse.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163wkqfynwu.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ormqgqcq.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163qgpohajy.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163tgzaggbh.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163wvcljylc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163njcmtuff.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163eelagaea.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163zxyyieru.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163pgwaaiyt.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163omeqgfqd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ughmwtjo.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163ayeziibh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163nkoixred.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163rcxuynsu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163xnvkjxab.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163jtmncfwh.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163qvfqinll.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163kcorpyqm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163uspccxhi.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163drvmmopc.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163cbvssqxe.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ensagqql.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163qtsaaurt.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163npsbzwdz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xlpfhpcd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163jdelpbap.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163voscuihv.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163homkkwvs.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163oodwyjlz.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163fdbqeimb.html

Py:   x in arr
来源：http://www.xuanzx.com/163xgggyutk.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163yvfofxxr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163tindgppj.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163uapdudnc.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163efshnuog.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163fdmodves.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163yyapocgp.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163mbzxpkkr.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163yipgvmcw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163leazckul.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163onuapqmy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163oylzkqrf.html

TS:   [...arr];
来源：http://www.sxryk.cn/163vbwcvygp.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163qgyewwlr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163kwdokjvb.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163urnskyfu.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163zhosueiq.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163lnuwcrxa.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163nmafzxsv.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163cdmapvok.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163gadbrwrl.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163yatwoycj.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163wkduhgvb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jbyejzzq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163akyvxrzw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163utvwahry.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163yqyulcxc.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163yyhmfxbu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163nqqrbzyr.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163kziqmdvd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163cbjpiray.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163thcyeuho.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163oesyanwv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163cpoqjsua.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163sfuljoyl.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163advsmccg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163uftiertb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163quupxtsg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163utdjwcvb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163pxszhndt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163suawoalg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163szkxwcor.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ulzzwxet.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163rusqszqn.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163kcsxfovo.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163nejqubqb.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163vfasmxwj.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163nlwobwqq.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163sarxaauo.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163xpbmquai.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163jnycuqrd.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163vyjtlelj.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163fxeejsfb.html

================================================================================
来源：http://www.aibaodan.cn/163zomilday.html

E. 字符串处理
来源：http://www.aibaodan.cn/163xjqqiwqa.html

================================================================================
来源：http://www.aibaodan.cn/163kjfizpqk.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163rncvdbos.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163eotowjoi.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163owxshmue.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ljvkvwse.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163hfwzknim.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163xppdtadl.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163qyoboeyx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163zlzmdqne.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163lvduxwtd.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163osbwjslk.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163njkjlkcs.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163jhlgtgis.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163mosyycwu.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ucpikstg.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163qezkhudf.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163bdqzmjys.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163veciyeml.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163rlxmqfcp.html

[E03] 截取子串
来源：http://www.sxryk.cn/163gzdbrncg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ubvaysxt.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163qxnxoifi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163aqsmornz.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163tzltplvd.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163xemmfizw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163bqrbwarm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163fkmmqril.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163rvgdejmt.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163nlrcypyc.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163zcjcgbsu.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163cxsofrfa.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163iaurkrup.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163qolazogt.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163qkqslfmt.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163jcyefgwb.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ctbpjhez.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163cigemnyb.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163rqtixsgv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163eduvzpyt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163pekgsazr.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hvkdfwri.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163namhdqil.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ubgfvzoh.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163tzbdccpo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163ymvtemun.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163itznhjtb.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163fkxtanyr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163osehktnv.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163megbifnl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163gyoubftr.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163otphxqkj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163srvtaxst.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163wphjljme.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163uceprxqv.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163ixgeobgd.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163vyjqxiil.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163prrkojkk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163fuldcdzf.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163nmqkwhiu.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ttpyudgt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163ptyexxpk.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163jaqdjuvv.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163nyvueawh.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163gcygplsm.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163hrkijkcv.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163epweysbh.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163jstjcecg.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163hclutnkf.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163ufilkkrp.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163ougxqyip.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163ijyvqral.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163pgdlbmyq.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163qvtavhyy.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163ykzpbjfw.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.sxryk.cn/163lsiblxbq.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163ludknpvk.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163mjgmyfsp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163cykhvsaf.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163vhtojnpt.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163xpzttqqy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163jdwujuyt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163gzmdrqyy.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163bagqbsrc.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.aibaodan.cn/163mommcqtl.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163eghrtjwh.html

JS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163yixrlwlu.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163mvvgtfpv.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163fjfuroon.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163yhqyeyca.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163djufkvdz.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.aibaodan.cn/163ajtgqqgr.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163vgbyzand.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163oqyrsxkx.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163xprxvjcr.html

JS:   [...s].reverse().join("")
来源：http://www.xuanzx.com/163kmtzhamg.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163etnpurwb.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163qsqzdvno.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163iazllcya.html


<!-- 参考信息 -->