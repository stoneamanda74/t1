外链999!wailian999！

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ltimoreq.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163yjnxgegz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163bxvgebwg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163gabhhnaj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163mgukgdxq.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163prxtasph.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163paysqfxc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163kpghlfed.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163whtooapq.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163niorydkh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ezcranaj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zpmdupgp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ngxajauc.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163uigqkszj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163umfdqzpe.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163qasexlux.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163vcwzglzs.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163qyqyzkzp.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163mwzdbknn.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wulosyeb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163scirjhad.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163thgimyfk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ubbnrrcg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ujjdzolp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163xpgazfit.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163nhrsqyaw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163xcadglbk.html

[D06] 数组长度
来源：http://www.sxryk.cn/163fztaqyyu.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163zljpjfoq.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163qltkskit.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ikcgwktu.html

TS:   arr.length
来源：http://www.aibaodan.cn/163mynmjwxm.html

Java: list.size();
来源：http://www.xuanzx.com/163gfkbhlqw.html

Go:   len(arr)
来源：http://www.xuanzx.com/163apzampxk.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163lcjnjujk.html

C#:   list.Count;
来源：http://www.sxryk.cn/163tevzvyuv.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163nfsplwcm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163esnbxscd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163sbouqnaw.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jvwfmife.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fpzfidts.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163fioujfqy.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163pcxrxzyp.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163atmowztg.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163tznbvywd.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163xrdgwgye.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163beeviwct.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163xqeqwlxk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163bnurdagw.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163xsgrfjta.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163vvrvldgm.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163uasrtqlh.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163acfjcwow.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163sylrgxvd.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163bqcvevtn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vorhmwip.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163chgkbibf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163prmpxsrd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163zaqnbcfg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163orldmjgv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zcabffsk.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163sltclggl.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163vjlqmvcu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163avqmkhug.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163dmiynoeg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163axxsfqii.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xqsszvva.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163dwdbfrfh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163bqzomhiu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ktqfdpmy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163eqadtpyr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163nohuzxok.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163gsjbrnjv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163drtwctzd.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163cfvbabhf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163mibxqywb.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163fkdblkoq.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163vsbthysi.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163oyboadvt.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163luyglojo.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163uamezojr.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163dcvjgfjt.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163dtwgflkn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ocwybhwb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vttgrjki.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163hievpesx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163dhenmffq.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163mcjeqamm.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163acrxgbjr.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ubuqftks.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163sgmmutgu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163vknevvep.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163optbvsdc.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qgdcqxkv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163tgxleznm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163emkyjlmd.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163mwgpebck.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163yxidbckq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ihygfagz.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163xkictset.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163xprpylny.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163lchgrgqe.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mjhfsxya.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163nfvtkqki.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163oebppmpc.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rwvwirao.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163cymazsap.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163cnwcltur.html

[D15] 去重
来源：http://www.aibaodan.cn/163dlostauq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tijuadub.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163qrbzmcbw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kiuvkvij.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ekuhggip.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163idyuqrxx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163hqnqjkkw.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163pnntgrrz.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163nfagtupw.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ntypxktf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ujblktod.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163rauinzup.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163yrzsghmw.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163sopzqoym.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163jsgzkrcr.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163vkizfvvl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163jbydziku.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163irsvprym.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163bnmftpsx.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163pkfnfywv.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163awtvdiga.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163mqeeqksf.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163dxrcxofr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163epiprpdt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ooniakpv.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vfhvcyoi.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163qsoonetf.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163bxkyiqgt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163xdgfzemo.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163lckjpjfy.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163gthypgjy.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163gphhmjep.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163oumncnei.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163qgajkynr.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163lmramhcz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163nawzeoyp.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163qxozpaii.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163omtmmlff.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163nmnfhpso.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163itiyfsrx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163gteegbbt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163mcugerbp.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163wvqiqgjz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163wwxjklqd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163uvgmxpfs.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ofjlmybh.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163cckcyflr.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163kwsgdlax.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163raspvmbb.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ujqfdfmk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163btnuiukm.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163lkkeggbt.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163zdccgqfs.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ktlsopsd.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163mdlstvul.html

Py:   x in arr
来源：http://www.xuanzx.com/163hzixxnvy.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163ozqrivpa.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163csuirxty.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ifvqkntf.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ydxsfbfq.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163wawqybhu.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163eboewcvx.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163awqpoyca.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163vrbgkkdi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ocpeqbfx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163owqhdrco.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163giymovwi.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163mvegwvoz.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163epmglfou.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163qsrajwzf.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163gxjlmzsc.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163vzfalyrx.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163pbijiteq.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163jlukxybr.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163bjdhfvpi.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163gfbmnmsz.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163gxlxaagq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163wgimytqs.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163acewibxo.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163qgzxrhpu.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163vjrrgzyt.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163iwmwflmw.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zgyckylz.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163ndjtxfya.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163srtwkclq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163yavwlyic.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163qavhoqrg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163qzmeptlx.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163ifanhhep.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163vfjbxzbg.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ahznzhrn.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163xnxzalpy.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163pfpttmmx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163biqdjbdn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163ghewqtbn.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163likbykbw.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163urrhnmen.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163dwtcbnvw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ibblpwwe.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163xklrasxi.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163lbojyguh.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163ixyuqfoc.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163zymlpbao.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163ifwwxabl.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vheqthvx.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163bxtbweem.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163aeyqtyqr.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163eeyqaxve.html

================================================================================
来源：http://www.sxryk.cn/163xacmeoaa.html

E. 字符串处理
来源：http://www.aibaodan.cn/163owjjllcx.html

================================================================================
来源：http://www.xuanzx.com/163vnlwwbwe.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163sqrpmnqb.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163xceixuku.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163dcxiugjn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163gmvmljbt.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163frisiuoo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163fgpwrvjr.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163zbumoapr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163jibwvghj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163tklwgcuf.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163mnvxmxea.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163wlypgorw.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163bwcnzpkt.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163xyaxltbv.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163uemroiwx.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163hnpwjpiu.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163fratvykc.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163dchdluvm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163lixdctdg.html

[E03] 截取子串
来源：http://www.xuanzx.com/163imvjqyzq.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ylusrwvc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163ttpzcsvs.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163tjhvlctq.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163jiwfukoy.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163dhpqoxby.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163dferhkpe.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163btplyjki.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163twzfcsov.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163wwkppvva.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163pykmsiof.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163pazcbjhp.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163eygmorvm.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163obnqaaab.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163jeavuhko.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163gqezqmfg.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163sskgihyz.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163hwmvqsjx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163jrtoeelt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163lppwvnpr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163ywirxofh.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163souqbsqx.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163vgxcizdp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163iivwpnfy.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163igrqbrgi.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163vfkmxfin.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163oiuzgwbx.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163eerjckmz.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163tgvwgfyn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163sxgohqck.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163hqsbonne.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163uhzvcmbu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bbrmmmyu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163nehkxega.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163jzekypai.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163vgxyceot.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163nbebqkiw.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163qqwwizuk.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163vkgmdopj.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163vukjckof.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163piaaytqy.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163acybtyyc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163iaeelsmw.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163ofsrovtj.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163xtmmazhn.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163afyrqpry.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163nadtocjp.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163sxfylxhq.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163nwkxlguz.html

TS:   items.join(",")
来源：http://www.aibaodan.cn/163wbutwxzz.html

Java: String.join(",", items)
来源：http://www.xuanzx.com/163wubkynyq.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163yiomroki.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163wweslprm.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163bjpocbrg.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163meutgdgy.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.xuanzx.com/163kpsattnz.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.aibaodan.cn/163dmblhqnv.html

JS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163hdrwkrww.html

TS:   s.replace(/\s+/g, "")
来源：http://www.xuanzx.com/163xmmuelje.html

Java: s.replaceAll("\\s+", "")
来源：http://www.xuanzx.com/163nbrfxeac.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163pkepldyo.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.aibaodan.cn/163wwvlweyt.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163bfwtkxrq.html


<!-- 参考信息 -->