外链999!wailian999！

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163woxvatil.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163wtrztvkx.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tddojfhb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163noynczcq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163sdjqpsqb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163fpksaunc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163yuybqiaa.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163rtisfnnp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163jyzvlqhm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163lvztymnt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163wefrxihb.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ousewdef.html

Py:   len(arr)
来源：http://www.sxryk.cn/163fxmwvygd.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163bhutefru.html

JS:   arr.length
来源：http://www.aibaodan.cn/163iiaoxary.html

TS:   arr.length
来源：http://www.sxryk.cn/163dnfhdzhu.html

Java: list.size();
来源：http://www.xuanzx.com/163ufhecekc.html

Go:   len(arr)
来源：http://www.xuanzx.com/163oshkbqpl.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163tzlazcaw.html

C#:   list.Count;
来源：http://www.sxryk.cn/163alkditcy.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163goarnpuc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163svkvyqfe.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163vicurehe.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163lppkibkg.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163gjmxttic.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ahazndou.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163velcyaya.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163deuddfwl.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163dlilhfip.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163oinbupfj.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163eydtihil.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163godofkfi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163uldysbzg.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163pniokkfk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163xtgalwkx.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163zfruqwof.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gswrndfu.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163apksruov.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ftxoppez.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163dzaxlvis.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163fgmhomaw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163eosrlmiz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ttthjjog.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163icadlpnl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ngpmighr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163zhhuybxw.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163qblluows.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ptmranji.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163wljvenpb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163mcgvfuqr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nmhjtdpo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163eliohxqx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163sdtibjdc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163adedgpvo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163qebkbuen.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163zrivztgt.html

[D11] 反转数组
来源：http://www.xuanzx.com/163wszmkdvi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163cytumkos.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163eogkpzky.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163nucgtjhk.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163fjikvblq.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163tyeptgbz.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ducavchh.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163gxaxlnuk.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163oogoepes.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163kzytndhn.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ujamaosw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163iahfimrn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163kmetfnvz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163vjirofvu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ppkefyzt.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163bzfjfwwu.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163djbsuvot.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163tvhhutwd.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163gfskghvq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163jctporlw.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163pumfoxcn.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163bpfeqlwi.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163bjxcmaou.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163tdanvwkm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163sqcjwlnk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163bdhgagzv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163eqyiywge.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163qzecybvn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163itxmcyww.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163yqmoasmh.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vecafpvx.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163sxewejos.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163rttodfjo.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xokrvotw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163vygqvfsg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163npptplxo.html

[D15] 去重
来源：http://www.sxryk.cn/163bojclgug.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gcxmngyq.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163gzrmntou.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163etkphdvi.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163dbnsvcbi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163orhyrxlj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163iwzyztkl.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163xfupoonb.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163hznqmnqa.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163lecodtrs.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163xredfegz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163efksohlk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163mojpgkjm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vvvmdufv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163zemnolim.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163qfuomzua.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163gfvjgwuc.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ggsbllyj.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163tfbvfzxo.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163erkdjxvw.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163cmuvjhyg.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ygbherea.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163gyzffdye.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163zcxyuokg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163afeirbot.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163xhegslcj.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163nlaxzvjt.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163yocvzqux.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163mqmckrev.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163kcuxkcoa.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163znzohttk.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163pjgwsynf.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163nnabonyk.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163rkwlldvx.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163vjhhomyw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ubpczxyk.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163bezkxfsn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163qquynjgi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163acbqpsvw.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ajngwadf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163weywbnbt.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163rsndwqwr.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163mnxlrbpg.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163ksbuhtvh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163bfyizxpz.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163amwjxpnp.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163uxjynbwk.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163xkltoyjc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163tlhrxqvz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163yknpfhxs.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163oqjatsvf.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163uluftiyo.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163kttklyuw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163tzldppme.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163zmceamgq.html

Py:   x in arr
来源：http://www.aibaodan.cn/163brybarex.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163mokzthsn.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163emxsnfrl.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163aqrhnoky.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163dxavvvld.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163wipkihae.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163pytsncsp.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163dpibglwz.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163zatgsemy.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ieoyrpbb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163tqvdtlzq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163emsvzwnd.html

TS:   [...arr];
来源：http://www.sxryk.cn/163usorrpyq.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163pbejgoyo.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163uaxmpnkq.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163bpqfxvkc.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163rvlgeofh.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163nofvzcic.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163nundpvqn.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163rlrftvpe.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ciyuterq.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163azghjohf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163uwznuvcy.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163yuevqvpf.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163qxjnyooc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163xwhkzsvt.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163ypnenmph.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163zxffbyio.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163fsabzpjf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163upaojlvv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163urdziggq.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163quciacwz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163ejwbgbhr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163gjsrinta.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163jlwdcxpc.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163uiwyhzau.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163dlyoouco.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163jeaafznx.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163otpuagxy.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163crvinuip.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163zozheooe.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163hhszoueq.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163iiqcazxu.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163ypuzbsrq.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163lnfdhsva.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163uzqgjoys.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ikfbjfgs.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163sxoimrld.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zqupoqxl.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163gwzxagni.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163mwghmjpu.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163pzlmlyag.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163bdnvburz.html

================================================================================
来源：http://www.sxryk.cn/163nhxwiapi.html

E. 字符串处理
来源：http://www.sxryk.cn/163xkscvlme.html

================================================================================
来源：http://www.xuanzx.com/163yamkzjwr.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163tlzbvblw.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163mbzymrkd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163ubcwclyw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vzhwqayq.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163qydztnwd.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163mswphyvk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163nsfnlvfr.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163lhkwamal.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163esaheexy.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163naqgccpc.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163sczmvjir.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163fpolnsjy.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jxoxkqkv.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163lpudpqdg.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163pjrftanp.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163ufaiyuee.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163hzojfayx.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163bhcsvyqd.html

[E03] 截取子串
来源：http://www.xuanzx.com/163bdlfgwyg.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163ihdozdii.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163flkeuaon.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163sjdnaozq.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163wdllbyyt.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163umfeuliz.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163kpwvfizp.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163vwwqxkhl.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163nuyqrpvy.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163djoaytol.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163hygyqqxi.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163drczjsap.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163xczzmmaz.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163eszmdmgs.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163iadmrtmn.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163bhoflrjq.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163twskrckg.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163rsvjwuwz.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163cljzdsdt.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163jakzzcrt.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163kaexrfyu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163lnwfbnxv.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163iojhporx.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ttwdcfxz.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163rdqpyuav.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163iyewnmqq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hobtvbxo.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163hsrzussr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163vhvpolcx.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163fqwrxnpw.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qmmdcuyn.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ajqqrers.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163edotmupu.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163fjfssirm.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163irfoatkd.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163ripcutij.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163imkvppww.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163ecvnuroa.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163wqfxzote.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163jestfqas.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163fawvbjax.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163ukigyrfg.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163ytcvhtjh.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163cccusbac.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163xazfpuwp.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163qlslfdbc.html

Py:   ",".join(items)
来源：http://www.sxryk.cn/163elacryhz.html

PHP:  implode(",", $items);
来源：http://www.aibaodan.cn/163fakphdee.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163aqucjbmi.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163xixqxsky.html

Java: String.join(",", items)
来源：http://www.aibaodan.cn/163gnesjqjj.html

Go:   strings.Join(items, ",")
来源：http://www.aibaodan.cn/163sklcnjst.html

Ruby: items.join(",")
来源：http://www.xuanzx.com/163qwrbuvbn.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163kqnlsbxq.html

[E09] 去除所有空白字符
来源：http://www.sxryk.cn/163kysupsde.html

Py:   "".join(s.split());  re.sub(r"\s+", "", s)
来源：http://www.aibaodan.cn/163vrpxjyzm.html

PHP:  preg_replace('/\s+/', '', $s);
来源：http://www.sxryk.cn/163tfulcqsl.html

JS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163iubhantv.html

TS:   s.replace(/\s+/g, "")
来源：http://www.aibaodan.cn/163grefaxhc.html

Java: s.replaceAll("\\s+", "")
来源：http://www.sxryk.cn/163heozxepa.html

Go:   strings.Join(strings.Fields(s), "")
来源：http://www.sxryk.cn/163zlmrmamy.html

Ruby: s.gsub(/\s+/, "")
来源：http://www.xuanzx.com/163dxvheznm.html

C#:   Regex.Replace(s, @"\s+", "")
来源：http://www.aibaodan.cn/163fbynpjez.html

[E10] 左侧补零 / 定长填充
来源：http://www.aibaodan.cn/163idqcubhx.html

Py:   str(7).zfill(3);  "7".rjust(3, "0")
来源：http://www.sxryk.cn/163ddljppit.html

PHP:  str_pad("7", 3, "0", STR_PAD_LEFT);
来源：http://www.xuanzx.com/163ocsdjkcp.html

JS:   "7".padStart(3, "0")
来源：http://www.aibaodan.cn/163tageddcm.html

TS:   "7".padStart(3, "0")
来源：http://www.sxryk.cn/163xlxunhoh.html

Java: String.format("%03d", 7)
来源：http://www.xuanzx.com/163ogejfmsh.html

Go:   fmt.Sprintf("%03d", 7)
来源：http://www.aibaodan.cn/163zhtnpyfg.html

Ruby: 7.to_s.rjust(3, "0");  format("%03d", 7)
来源：http://www.aibaodan.cn/163hmgkstph.html

C#:   7.ToString("D3");  7.ToString().PadLeft(3, '0')
来源：http://www.sxryk.cn/163zyrerrgc.html

[E11] 反转字符串
来源：http://www.xuanzx.com/163wbcdxrvn.html

Py:   s[::-1]
来源：http://www.xuanzx.com/163sudjtzaf.html

PHP:  strrev($s);
来源：http://www.sxryk.cn/163dambszfi.html

JS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163nvrddzzl.html

TS:   [...s].reverse().join("")
来源：http://www.sxryk.cn/163yzdqjtgw.html

Java: new StringBuilder(s).reverse().toString()
来源：http://www.xuanzx.com/163gpvhvmjp.html

Go:   // 转 []rune 后倒序再转回 string
来源：http://www.xuanzx.com/163ciadlxzv.html


<!-- 参考信息 -->