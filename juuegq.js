外链999!wailian999！

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163datjxqcm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163qvualvbr.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163eeikanqt.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163pkclwdog.html

Java: list.add(4);
来源：http://www.sxryk.cn/163qpdvpnhy.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163sjwckupw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jjxmhlcl.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163vehykktu.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163bfwbqtzz.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163mglbwiwo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163nbhirbhw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163qllglbgo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163zwjddrox.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163rhmyqkdx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163dzsslpnh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163teazlnhy.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163mpbynfps.html

[D04] 删除元素
来源：http://www.xuanzx.com/163webwdxri.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163zmknwhob.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163xeeegdyt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ogeikxda.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163zeefttsf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163wobuvpxi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163fzpwtpoh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163mtajzich.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163mxrcfccp.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163rokzcycb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xdoyrkvk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163imsebysw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163cbyeffbk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163dhlzsvej.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163lureljqc.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163bzuewhgh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ahaapkff.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163omsriwku.html

[D06] 数组长度
来源：http://www.xuanzx.com/163olkwowok.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ymzlfvum.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163wvuyqcvh.html

JS:   arr.length
来源：http://www.xuanzx.com/163xdptevkz.html

TS:   arr.length
来源：http://www.aibaodan.cn/163wscfsrlr.html

Java: list.size();
来源：http://www.xuanzx.com/163kokpqyik.html

Go:   len(arr)
来源：http://www.sxryk.cn/163iqcyjlyu.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163chlelbui.html

C#:   list.Count;
来源：http://www.xuanzx.com/163qvppzwag.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ftatknfa.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mxqiohti.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163unpwmwze.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kdgenain.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jyllxpnm.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163kovsclqf.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163qspqjorz.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163asuwskro.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163cuqeumzx.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163nonvamus.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163rsvodelh.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163xqhcqrfq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163xjvgnddl.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163rmtbvrvk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163wfdgzmwb.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ozqrzaoy.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ccgwwagp.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163oefupxwy.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163rziipstx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ctxlawzv.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163pyoflrms.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163hfmjpgxj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163tnabfwbh.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163uldhmutz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163tlcowlnu.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163iqgeaebp.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163urqxhftj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163mpeskyoa.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163acolosti.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163eomlkmue.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ayfawpzd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163prjznzmp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163pvawxxxn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163feanhbqf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ebdkawed.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163axhrfpgc.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163gmzyvhdq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163xgfgdydu.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163swdxrbus.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163euhujbli.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163hilxtkbi.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163wdrtmkde.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163wrnrhrhs.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163hosztrwg.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163qalghfka.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163uyossoud.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163imfcrqdt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163xpkztmrd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vmcoxexu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163tnrlmuxs.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163gbyodyxi.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zinxairc.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163yubqqxst.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163oazfcjxr.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163foglfgpt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163kvswxyar.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163kqyqkvgm.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qwxelgqd.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ljbizosh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163qkfwrrqu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163wnbuptyc.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163txtzywvz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163pvmdquvw.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163bwfvezbz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163vpdteehx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163nefttzwo.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jgljrnoy.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xocwvvkl.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ddjsgteu.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163dyuchrdq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163jiteokpi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163patzsxhk.html

[D15] 去重
来源：http://www.aibaodan.cn/163mcuexigz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xcstzwmr.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163asrkmpzt.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dohdshqe.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163szylbuqc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ryxgfypy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ekroktii.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163audefbit.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ytqvrfcv.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163wndzekrm.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163rumpxevq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163xovwtxrh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163yozayrxk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vsogqxol.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163gmsxfutu.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ewikdrpa.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163iudoqzgi.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163iukelhyr.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163rwbpydju.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163djpaubky.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163rwnuvyxx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163kocksacf.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163hjylgyjh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163kledtqlm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163rjlrtmtf.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163huxzckye.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163qtkfknyk.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163yqrihddr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163vzhxggnn.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163eyexzpku.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163dzylklom.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163wkaweqgr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163tokpibsr.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163lbtsdqyq.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ulzvqtzx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163yqzcadja.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163jhgvuazr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163agisrexi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ciufygne.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163uqrxplos.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163flxrdatx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163wvjcddrq.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ngprvzqu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163tbdpkeul.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163xvyifbml.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163thlmtlnq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ghlrcpfg.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163wvsmpxfw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163pzeqrpsj.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ouspqfhd.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163wlwroslu.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163jxazxvsj.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163bqqsablf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163eihfnogm.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163vgsuueqf.html

Py:   x in arr
来源：http://www.sxryk.cn/163lagrcbua.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163gapmwiht.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163vrnohxfw.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163bkjhpmkd.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163wtjvgeat.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163rlwafrfl.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163alrefokz.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ngoxdjhk.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163yosuimkg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163upffrrsc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163pdwflkiz.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163tnbpsgvk.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163yonhjuwr.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163snirmcky.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163zrihippa.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ydbhcuvm.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163lubyidef.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163cxxsipva.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163sdzauzoy.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163lljyyzqr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163pgtrspfm.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163qqotxwpv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163njkfakvb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163fvlovkxa.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163fpnqxuqg.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163jhkhttdo.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163wkpryhzg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163hmoqpqxs.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163vmicuqrt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163cjervbts.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163ixdgweqn.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163layhbphs.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163hngzzijo.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163sizcurar.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163rrbkdkep.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163cgvpzfro.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163qifwfucb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163nrivilib.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163qqkhojff.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163ygtsqetg.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163nhbjwizn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163vkaabelm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163oawqsyqm.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163dkwvatuf.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163ndogrtms.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163qnwmjrnr.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163dsgqiinu.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163hrbaeusr.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163oyvrotwo.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163xxmwchsl.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163hbtwozkn.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163lelknkgt.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163hwychnhb.html

================================================================================
来源：http://www.aibaodan.cn/163zoisehlm.html

E. 字符串处理
来源：http://www.sxryk.cn/163jvdochpe.html

================================================================================
来源：http://www.xuanzx.com/163smjbkdcw.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163dfowdtzr.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163upbdlyre.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ozhzdbof.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163hmbtrxbu.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163sgxrifan.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163fsxyjhco.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163dtiurska.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163xqhdiekj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163nuaebtpe.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163iqwaouhk.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163xzhtrmqg.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163wuxeanul.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163ldmzfhoi.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163aicdornx.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163scrtwxhb.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163krsfsbrf.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163yveevecx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ouqkugye.html

[E03] 截取子串
来源：http://www.xuanzx.com/163czbckxxt.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163hvaovmce.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163aarhwvcp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163rejlsmig.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163plsjdrpp.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163qpvhcqss.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163chieoqca.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163tpnksvza.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163vygxpcrq.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163hrpfqumn.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163fyovaqbf.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163nktillxs.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163jproxbzk.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163kxowyqkp.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163xfgfydsx.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163tfblrpqc.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163daeyoswu.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163rnzoaqzm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163yilaqjby.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163zgshbpqa.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163mgxmevjt.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163bkeazcpi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163eakmojmj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hdbqioho.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163zpttacqo.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163mocjvmgk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.aibaodan.cn/163qtdmyqfq.html

[E06] 替换子串
来源：http://www.xuanzx.com/163xkdqgtxw.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163kluphikn.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163osaksvkf.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ekjassgk.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ldgnvvgj.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163mqtyguto.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163vxxouiki.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163gqbmvmtx.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163etotkyli.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163gtkmcmkv.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163nljtlcxy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163knkohapt.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163uhguyeft.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163jphczvjz.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ghjydriw.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163nodjleuf.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163xadrtgce.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163tkfhtntn.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163gostxmed.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163nsnrylig.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163bhtgvbey.html

JS:   items.join(",")
来源：http://www.xuanzx.com/163ioejzmhw.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163bxwpbczo.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163pyfibhrd.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163xtdpqnec.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163mfssfmff.html

C#:   string.Join(",", items)
来源：http://www.aibaodan.cn/163fiadgniy.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163kavthvgg.html


<!-- 参考信息 -->