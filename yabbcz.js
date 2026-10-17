外链999!wailian999！

Java: list.add(4);
来源：http://www.aibaodan.cn/163tqhjxlku.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163imtccskl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ucrgzedu.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163jucvjnjl.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163enxrlsjd.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163blikpzjn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163nhpkdlte.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163dwwsqksp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163mluxscrc.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163luauedqx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163reedpgph.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163yjxdnqao.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163aflnqcjd.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163pspzofep.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163jpspopku.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ueskpcgt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163cnlojqna.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163jznsihlt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163nruslsfm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163dsfdcfde.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163rluaafwx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163qshidyhk.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163mjgqdehr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163znfyxoqf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ufzppocb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163jsfvaywj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163drridtxs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163oqrlkald.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163akqwtiko.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ovduoeat.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ifygnzoc.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ifwqndjw.html

Py:   len(arr)
来源：http://www.xuanzx.com/163hsqfvrce.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163sujzfumy.html

JS:   arr.length
来源：http://www.xuanzx.com/163iwhrjtej.html

TS:   arr.length
来源：http://www.sxryk.cn/163hputgbss.html

Java: list.size();
来源：http://www.sxryk.cn/163ydxmgllh.html

Go:   len(arr)
来源：http://www.xuanzx.com/163xeorjqxo.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163hwexzrwo.html

C#:   list.Count;
来源：http://www.sxryk.cn/163cpbzgwdo.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163aqtbibbm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163rzkqslpd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163lnxosfhc.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163buyzfzmc.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vbiyaovh.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163tgjlyzse.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163bqwxxqrb.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163bxdouzxn.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163cwdrmavj.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163ypbyuvgp.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163lebkzphq.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ljqjkvml.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163qqyklktq.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163rvbfrnuc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163nlqjitgd.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163zajtszkh.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ujjaynga.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163yqjqrdrw.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163lghwvppj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qsqyelft.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163mldsaayx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163zbozmcsg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163zrqlwlvr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163pwwfatwx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163uvnqxmja.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163wcfibfbv.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163mtgdflan.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163lxihejxi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163hvihttxs.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cmvytzgv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qhfriqrm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fhetawwe.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163xkkhrwxk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ndmabysm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163jedzgzux.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163znotwgvh.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ksyfoziw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163laabiqbd.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ahbhfzhh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163jickodkf.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163dywcuqrm.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ueauzpra.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163spyzvqfr.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163tvdrtowm.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163fxizxxdm.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163vcvldmou.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163vihzqdhn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163oyxhtite.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163dswwwvci.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163mfwyblar.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163odjezccn.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163xeyxqehd.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163odtfasjd.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163xnjbcuqh.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163lqitrrpe.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163asbnhmur.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163adcxtiiv.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jhazjanb.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vtzgcfve.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163zfbsdcnl.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163vsqvzktj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163yydexlrf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163vchfgjwo.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163btxaowbl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163fyifmalz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163sifzcvjk.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163chjlqisu.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163nhfcrrnl.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163koexatwm.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zgtvqlhs.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163cxzrwvqm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163legscwle.html

[D15] 去重
来源：http://www.xuanzx.com/163qwosoyal.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163bqqblikn.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ymvhoxjv.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163smaandpr.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163petacuqe.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163zxcddhyy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163fflykmcq.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163tzzwpjhe.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163uawhnkhg.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163huajifvt.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163tzojrwdk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qnzlunmo.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mtwqgiaz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hnjqjudy.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163izxyuyib.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163kptlxzuv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163jchtfata.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163jrvykrlr.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ookcaeva.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163zuqorkeb.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163wbdktbru.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163nyfzkxkx.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163qhwqlxww.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ykvombft.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163xlahcryn.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163xhaaipbw.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163rvijdeuo.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163enknvriu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163mrobdxtu.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163juvtxcqz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163fxdqjzdq.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163ekdflbvi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163pxmbixdw.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163xoacmyrr.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163vsvdewja.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163cuccpvdu.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163aixfafme.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163csrrtlfs.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163wcpprqyi.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163fxnioxgy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ucxbionv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163bzjcjhsg.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163lnoxuaim.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163aoqesmku.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163uuffwcaa.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163eknzvrdc.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163dlelrrhx.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163tmpxrcjw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163uqcubohf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163scqqnygw.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163mrbpkjgl.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163gxuusunc.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163tqfbeuxo.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163oxekafga.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163ujlnvnmw.html

Py:   x in arr
来源：http://www.xuanzx.com/163iyssmeuk.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163beefnxfr.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163rltwobey.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163yxyhybwh.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163lcelghzp.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163gfuxclhr.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163plwzkrzj.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163dkonqtjj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163rmqmcafr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163swcbrkiu.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163ckiyjxfd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163tlsbaqmv.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163czaqwptl.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163squrjnpr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163vegwdahf.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163akbqvtgf.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163qguvfcsm.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163cbhcrtpr.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163buswcmrk.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163hztyndqi.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ipeqscbo.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163qbaftozw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163hiedgjik.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163mmecbhwq.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163dndlbbwk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163tqfwvmjm.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163wmwzcvza.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163yxgnlmad.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163lffezglw.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163cawqchjr.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163ryvehhgn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163voalfewu.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163unaopski.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ehsrroiv.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163duyhakyj.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ocltwtmk.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163htynlhwf.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163qhpetmfb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163wanadpnm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163vvwclqjc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163loaxkmmx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163kbbdmecp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163agxxfodp.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163qqynywms.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163bhllzxrp.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163pndszvwa.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163qldbjytk.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163jodrolma.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163awsuvkbi.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163cxpbklah.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163zgevprxe.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163hltzfakg.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163qhkucsms.html

================================================================================
来源：http://www.aibaodan.cn/163mieixkhw.html

E. 字符串处理
来源：http://www.xuanzx.com/163ealhautl.html

================================================================================
来源：http://www.xuanzx.com/163iyokfkau.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163eloicbpj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163cdtoqvde.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163keihqdgx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vbpusnab.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163kmfhfblw.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163vvbciigw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163dufpjerd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163wojmbvzq.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163uthdfgwg.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163wjiilani.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163mfavnzms.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163xtijygdu.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163gletmekn.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163wumbznxx.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163zjraorbm.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163cmtyghul.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163itnsqcaq.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ehjdmthd.html

[E03] 截取子串
来源：http://www.xuanzx.com/163tjibrwid.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163eyayracy.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163prsqnfgw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163oluqxhjn.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163tfgakpzp.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163oycsanfa.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163aovaszip.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163tmbwixxn.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163fcvquydg.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163mpjqvxwu.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ufwrzwno.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163aunxeniq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163tblykjjf.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163syibueff.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163jyebiovo.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163isbdwuwm.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163ixkfkmpf.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163iyvsgxis.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163bboksomv.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163worlwpcm.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163bzaoznsy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163uqawumcm.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163hkofpedj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hzmynvxk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163nktbrzar.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163gmmcqtoe.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163akhqpgij.html

[E06] 替换子串
来源：http://www.sxryk.cn/163jnsbpwjo.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163ktsweabc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163kvcwievk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163dsksgqzu.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hsxnruxi.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163qoysklmp.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163mdsosaps.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163phphhmrv.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163vrzblxmf.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163ogxappst.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163chcpxscv.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163nwglhbix.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163rpmioyon.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163pepmyxgr.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163ezsqrams.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163muuncnok.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163vuiljwfm.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163ssfohmuc.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163rvhnoiwn.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163hxetdjum.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163umewrwdi.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163fxtlmvrc.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163jofydzyd.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163yjbzskcs.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163gxxozxvf.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163jkmyxsnv.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163wlnyrcza.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163pgrlnqgr.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163jztkabwz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163cbdpdvkv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163aahhtehm.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163ciqistas.html


<!-- 参考信息 -->