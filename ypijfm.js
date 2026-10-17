外链999!wailian999！

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163rkievebm.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163jihjmzci.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163fqtvodzb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163oqzohbta.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163mozfxgjp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163pofrlvmm.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163giodvctg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ryzwpdfa.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163fkerqavo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163owrucdlp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163uwkmwuom.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163kuwfghiy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163nwikdgsi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163pbwynhoc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163zoysyqav.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163tkfahqhu.html

Py:   len(arr)
来源：http://www.xuanzx.com/163otgzghds.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163avkufwnx.html

JS:   arr.length
来源：http://www.aibaodan.cn/163tmsdrjty.html

TS:   arr.length
来源：http://www.sxryk.cn/163pdxrvnif.html

Java: list.size();
来源：http://www.aibaodan.cn/163muvhtfea.html

Go:   len(arr)
来源：http://www.sxryk.cn/163bmidfffl.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ylmymwvb.html

C#:   list.Count;
来源：http://www.xuanzx.com/163atrvmdjs.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163mepkanuh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163euhdkync.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163grmnfxdq.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163pagybyop.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wbrtazpo.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163zpkqkbhd.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163fsbzydrw.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ysrzomrb.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163anwnoyiy.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163pydywxag.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163pjzunxwj.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163tvgafyrb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163rndqmtwl.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ypfglqld.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163hdsabhpn.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163omseauow.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163taomxuoj.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ccodaofr.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163qjzegcyq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163brxvmurw.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163hwqjozos.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163xrpimqls.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163zaexlsdv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163kobhtrle.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163gfedtxls.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163lwkodiod.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ityktffl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163siatsylj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163mztuipjn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163rclcuqfy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nkzwdjfk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ubgtnnii.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163genfryrz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163gqgfhtli.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163cvilxbkk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ftxkukkg.html

[D11] 反转数组
来源：http://www.sxryk.cn/163yjutfdfs.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163zijivuuw.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163psoejmdl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163vxlccvis.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163nsrkqizv.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ibvzpqtd.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163uklnhwqc.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163vvtqbhzo.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163cfjylidl.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xaozroav.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163npykyfoh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163vxbkinye.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163bbtzzulj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163dmbbmrzp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163aczzzeym.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163norqbjyf.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163kargcbto.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163uwcdyfyb.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163fvmvtbvn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163chqpvwsp.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163pamryqed.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163bnbzlkte.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163odsqiqrz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163sitluydf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163jxulvbew.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163vuwkbdie.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163uwwxchzf.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163tasvavqj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163rfaqnpqn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163lhmyepfp.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163coievzwb.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ejrqewru.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163szlaxxsr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163poenkodl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163hfaeshrs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163tseiydon.html

[D15] 去重
来源：http://www.sxryk.cn/163ogdzfetj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xwyepugb.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163tcnxiogp.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nciwrvba.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cdrapfyv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163sdwzxemb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163phivnpjf.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163tqzpqyub.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163tfqosygu.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163mlxyullp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163jwaybibh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163qlfoczbt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163wrmxzoqe.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xrphybfg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ucylgmwp.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163fpplczeu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163huzmnuwm.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163golomspw.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163szjqhojt.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ulcbsauq.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163pjlgpwla.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163dpithlbu.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163iwzhtmrm.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163htiqklmk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163wledppwx.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163erfkcayn.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ehfkettx.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163vijuoaqk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163qkjxrgfu.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163chpbamxa.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163tknbknna.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163jjehmquz.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163teyfktur.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163fuqdlxfq.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163skcybvqd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163eqdsndwf.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163zvfgtpfg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163ltnfpcch.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163horsnrzi.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163sgxdjldy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163uapjrvwa.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163fnyyxkmv.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163moqdatnf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163wqudfjal.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163jtlownbo.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163oxjxeane.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163aflvbbgw.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163xevlbfnu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163jtgwcpfn.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163menksrsz.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163hdbvdenx.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163wcbmboja.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163lsywjyct.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163efnlxdaj.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163yadwqrvn.html

Py:   x in arr
来源：http://www.sxryk.cn/163uqlrqery.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163dpigiubq.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163lhhxfrqb.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dsncmmiq.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163aghccjtu.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163xsopkgqs.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163xaxjymyc.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163wmwyorbb.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163mivvbrdr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163hfhpbzxo.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163iejwxnxt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163auyebjfe.html

TS:   [...arr];
来源：http://www.xuanzx.com/163zzdjcnry.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163tdfhvsqm.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163deudlzli.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163sllhoced.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163gtdebaaf.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163xddjlcoq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163vrsbsyld.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163nfyezjlc.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163nlllnjjd.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163misjcecc.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163negouhwl.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163mqfqmjlp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163upmjvqqq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163tulzmpeq.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163qwfeojvd.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163uqiemnwq.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163zxnxyijd.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163yknbywpe.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163uyzsmnmy.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163lgcuoekv.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163denbyajy.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163cujcwffz.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163dbqidnqi.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163pcojkkvm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163uibfzjfe.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163kujmcpjh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163xflpqdgb.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163wreskapx.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163jatlwwcf.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163niaaczxo.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163qmamdlhq.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163qbqfljjt.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163webrbwpk.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163vofomecf.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163spcqmdxa.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163eokdchcc.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163tlkvjcii.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163cmwbvnyf.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163tjxslqxw.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163gvggylxw.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163qdjwssqh.html

================================================================================
来源：http://www.xuanzx.com/163kdnoofcn.html

E. 字符串处理
来源：http://www.aibaodan.cn/163ufmmfdxj.html

================================================================================
来源：http://www.sxryk.cn/163uzdiifql.html

[E01] 拼接字符串
来源：http://www.xuanzx.com/163zqdzpjqe.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163cvtyqewe.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163vwjywrsg.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163ipvmoqee.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163xmgpcvqv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163vscilcbv.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163jmbiamgi.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163dtxsqbqf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163ugdmeohg.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163zegtcxhs.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163fvnujoog.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ilckguce.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163mojgfcjo.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163cjwnxwon.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163fktjfrer.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ypybyftd.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163zharvjaf.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163uhhknwyf.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163qmblyrym.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163qlhtqpyr.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ksjmhrdj.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163dploakrh.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163sdmfnegi.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163dljombyx.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163hzutegvk.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163zpokwqxq.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163jtasvuwp.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163xefqrhyz.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163dmqzusur.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163aivmvacs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163xjlngtqt.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163plyzvoeu.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163swyanagw.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163rmlvvlki.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163titnjlkn.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163xlrscttv.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ypcvozeq.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163qpxnvxjj.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163exavutfz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163lztpklzx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163hrtsfvzx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163evcfoaxt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163nfrtxlze.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163qnuxgfde.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163vrpaiecs.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163mhkwbgvi.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163utconesk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163ublurour.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163wgkkoxix.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hgvihsqm.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lobyavqq.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163stasakqt.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163qeglslbk.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163myolfdgv.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163lnibwxjl.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.aibaodan.cn/163sislndry.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163cfuleqou.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163jffyzvkg.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163tdigmsqw.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163rjqsimun.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163niyjstkj.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163mgymrbwr.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163vaqnqthx.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163jhtgvbvr.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163cwcskrzm.html

PHP:  implode(",", $items);
来源：http://www.sxryk.cn/163exnajkxw.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163qarpnbfc.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163yjkabmat.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163zjjcwwis.html

Go:   strings.Join(items, ",")
来源：http://www.sxryk.cn/163nflgjidj.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163tbjfstwz.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163okbxqxdi.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163dhgdycok.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163gnmhmqvj.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.xuanzx.com/163nuqnvmdv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163etolqgxp.html

TS:   s.replace(/\s+/g, "")
来源：http://www.sxryk.cn/163yhmokalz.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163xwmygmrr.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.aibaodan.cn/163ejhjzkjd.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163birhxekr.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.xuanzx.com/163wqglizhk.html

[E10] 左侧补零 / 定长填充
来源：http://www.sxryk.cn/163ngjyaioi.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163crdmwpwx.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.sxryk.cn/163koealyaa.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163heyphfil.html

TS:   "7".padStart(3, "0")
来源：http://www.xuanzx.com/163nwmfouqw.html

Java: String.format("%03d", 7)
来源：http://www.aibaodan.cn/163jbxwbpbi.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.xuanzx.com/163plgyrvfu.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.xuanzx.com/163avxokepy.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.xuanzx.com/163nhrlkihb.html

[E11] 反转字符串
来源：http://www.sxryk.cn/163zgpuypqb.html

Py:   s[::-1]
来源：http://www.sxryk.cn/163ykfxbtrg.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163vixkmrdk.html


<!-- 参考信息 -->