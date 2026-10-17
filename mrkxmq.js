外链999!wailian999！

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ynxwtkfq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163rnubvqxl.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163tcwjmmga.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163suvltkuy.html

Java: list.add(4);
来源：http://www.xuanzx.com/163pplbjkfc.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163hwpyioss.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163fgmqlisv.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163okahpgqr.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ukgkdpfp.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163dehffdld.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ghrigxaz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163izxggweo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163cajzyzxn.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163sjgcwjki.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163mjbtvjct.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163eechultq.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163aiwfigrx.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163jxabbtaq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163afhndhkb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163pudfhypt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163sdpnlbrk.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163kmwklkmh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163pmuaqwls.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ekxgiucs.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163gpjzlhkq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163cvblqiyr.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163kzcqssjv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pvwjrpyd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163halsrfud.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163qowboxyp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163prrtoxjj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163pgweeueq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163tqwgwxyf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gqsacbyu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163pugzmnki.html

[D06] 数组长度
来源：http://www.sxryk.cn/163trgsbzut.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ukbdhmma.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ctmdizom.html

JS:   arr.length
来源：http://www.aibaodan.cn/163gzulmpjq.html

TS:   arr.length
来源：http://www.sxryk.cn/163xymoovzg.html

Java: list.size();
来源：http://www.xuanzx.com/163wqoprylw.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ygmebpah.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163yoyculez.html

C#:   list.Count;
来源：http://www.xuanzx.com/163pplmsken.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163oissrofr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163pwpztnqa.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163vholdpuq.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hyobzmjo.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163mampvitj.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163jfrssyjw.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163dwrefjer.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163nxfalihj.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ubfwrcjx.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163loxyryzk.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163vesruody.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163rvfkkrhn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163pcgejmwj.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163zywsjvxm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ymlaisev.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rjfoamws.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163jnahhiax.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163cpxuudyk.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163jqsthhcu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163uyzkjrvz.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163kfhwcuht.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ulcchwvs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163fxeyuhji.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163gghfqerl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xaawfiwg.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163kmsgdaoa.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163bzccyxfj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163gymrfdqs.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163yjwabdfl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163pedfrahf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vidssolc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tfqtdkjh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163bawbdnar.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163zsvrjiku.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163hmsuqdyy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163flwdlogy.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ngjmdsiw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163dgtmujgh.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163tiiicmyi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163shkzevqc.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163xmjvwkxz.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163voaxazkp.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163zynsemtd.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163mncvsetq.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163iirlufky.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163akgyvadi.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163avlnyejy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163jmvhfajs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zzbyszfs.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163bqjvuukc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163boithhhp.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163rorzlnjk.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163oqdfwjyv.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163okjhhkce.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163wujpjgbc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163hebeetgv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163vricuqdz.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163phztuuml.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163sfxsubfz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163hpjuinnq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ngrgolqn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163uoinullu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163dzgyonoa.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163oddhbugn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163tzufhqrm.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163welhicpo.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jumfrswe.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hciwjntc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163smcxigbd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163fzcqpgjv.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163bunrtesi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163xlkpvqdw.html

[D15] 去重
来源：http://www.aibaodan.cn/163plrlpmtw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lekxwrcy.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163zcprsnwe.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xelztaod.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163oxbuwata.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163vketfiqr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163adoxqilb.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163suhahnyg.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163syumusty.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163vsbixnyi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163zcvfszrd.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163pvigabiq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163apkurhfy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163zlftgpbv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163dnqpjuls.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ozggfaup.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163evtkxwgk.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163rxhdegta.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163meefbghn.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163wzuhlneo.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163jvtqdjna.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163jsiulaxr.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163ipajqgst.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163amymcdda.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163slsfnywh.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163xkygyabc.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163pfptccml.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163hygyfrcl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163oahcrqzi.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ttqoncsh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163oehzrspc.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163uvrbyezq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ciqabyxy.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163asuxaseg.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163mirogpzt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163lynqrefz.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163vnjxgjwc.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163pzdbylmj.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163javiacrv.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163lgavwqmy.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qdobxizj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163rygrvjcp.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163vfwetzdz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ubcluusl.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163xbnutzwl.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163yjiygigv.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163fdxzossy.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163hbbwrayy.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ohtqakau.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163pmjyxrhk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163grqtxmqz.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163nyyqxjte.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163gevmyvlu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163vdxtfscc.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163fsjjnufb.html

Py:   x in arr
来源：http://www.sxryk.cn/163ilblpkjr.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163vyegazmx.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ixvzrepq.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163iflqphjs.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163fsnvikyp.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163ibpphdic.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163lsfqrxls.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163vnwidxjd.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163jchjhanr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ftmlrmof.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163pnmychvm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163hrogzhgt.html

TS:   [...arr];
来源：http://www.xuanzx.com/163brqbxssc.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163tsojqzhu.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163kvdeuxbd.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163blrpathg.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163smkxtgxn.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163rzomdwyl.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163wohooixl.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163kfmjszym.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163mpcvekif.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163ygkavqjw.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163egfynlxz.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zekmfmnp.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163pspmgzmc.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163rgvyrdch.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163ecnhdkcu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163vefqmmoc.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163dmyockdf.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163nqziobbj.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163tackkwfr.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163xekbknlr.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163ikbqbmjq.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163mnpmghoy.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163gzcdgyjg.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163miuljdst.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163bpfacgrt.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163acbagkkb.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163egsqsyiq.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163purpggqq.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vlgvqnhg.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ykvsuvsv.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163ivkqqvpw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163cjyzlrqd.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163uaylrxix.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163pqcsxphj.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163hzinbkdv.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163yvijbwcb.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163jvtjohzj.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ismbdvai.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163okfwtxmx.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163wpvhnlfj.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163imyekemq.html

================================================================================
来源：http://www.sxryk.cn/163wtewrsmh.html

E. 字符串处理
来源：http://www.sxryk.cn/163dpdiugeo.html

================================================================================
来源：http://www.xuanzx.com/163nbbayhbg.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163ehxbutij.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163eidlohdv.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163zuxbpovr.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163dwgqfmwn.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163yxitlrbo.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163homlhdxg.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163liumcfst.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163hnxmzioh.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163qaxptabe.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163egywxdto.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163gyzmtwgd.html

PHP:  str_repeat("ab", 3);
来源：http://www.xuanzx.com/163eowkbpqz.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163avyomomq.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163wcreaeaj.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ovxkltkc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163mjnuclty.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163mpogweej.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163mrptpflo.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ufovywny.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ypaieyvp.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163mgxeeexn.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163aigisnms.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163tzyflmfa.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163gkobfbrs.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163gnocwrmn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163dyiclvwc.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163jvdemozk.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163ifsvfagt.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163njvqpwfz.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ibvzgmwr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163medwaszl.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163qtgtwtks.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163yteackxs.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163bmmzffnu.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163dqwrbpef.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163walnvctd.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163ksxjaoyb.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163nqefsacr.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163hizueflu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163eajbvwsu.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163khjilahp.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163dttkavnk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163eavkgrke.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163mebxuuas.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163tfwdxdou.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163ktytpiyg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163gzgsksqe.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163wvzohorl.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163rklzpkuo.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163ejdglbus.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mnhegqrt.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163kzrtnrfs.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163ixvxetcf.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163hcidhofr.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163ywtoqaig.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163lhsobqpd.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163hmfvqnbc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163cgduqapp.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163bdnlbfir.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.sxryk.cn/163dffgzxps.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163ntzcqnwe.html

Ruby: s.split(",");  s.split
来源：http://www.xuanzx.com/163xwsmyzvg.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.aibaodan.cn/163avszacru.html

[E08] 数组按分隔符合并
来源：http://www.sxryk.cn/163eiabmevy.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163gbypjbbz.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163mxyutkms.html

JS:   items.join(",")
来源：http://www.sxryk.cn/163wooxfxdb.html

TS:   items.join(",")
来源：http://www.sxryk.cn/163vmietepy.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163fssclmme.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163rtsitdiq.html

Ruby: items.join(",")
来源：http://www.sxryk.cn/163fvjyqeov.html

C#:   string.Join(",", items)
来源：http://www.xuanzx.com/163byvbtjbu.html

[E09] 去除所有空白字符
来源：http://www.aibaodan.cn/163shzzeudx.html


<!-- 参考信息 -->