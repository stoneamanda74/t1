外链999!wailian999！

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163emaxkxcl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163dhyrbgwc.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163tejgximl.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163odkanohn.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163virzbzvg.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163unjotoyp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163tswlywxn.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163tgchbmjk.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163pthxlogt.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163rawuhugo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163cynzbvxd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163cribrmbh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163sgbzwquu.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ojrswhdo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163kjchwpkp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bgdmlyff.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163sbfruuxy.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163lzkvbinh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163kkwhpxum.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163fdzlpozb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163uuuyxazy.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163brfjekfz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ykcobyxh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163fzncfguj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163idwerjnr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163shwarevx.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163qbaoiduh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163dxmjrlbp.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163vlekjmim.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163jilvsdcl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163yghwxiny.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163duuwvfwl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163dykbunod.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163axdryywj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163opumowyl.html

[D06] 数组长度
来源：http://www.xuanzx.com/163gxawzhuz.html

Py:   len(arr)
来源：http://www.xuanzx.com/163kthslrqa.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ikqtvwje.html

JS:   arr.length
来源：http://www.sxryk.cn/163mjwshvrp.html

TS:   arr.length
来源：http://www.sxryk.cn/163maktcjyu.html

Java: list.size();
来源：http://www.sxryk.cn/163iksswaxn.html

Go:   len(arr)
来源：http://www.xuanzx.com/163tebpbxmm.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163glirdhzp.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163qmjipyqs.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163vrpkoibl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ykugzwix.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ogstmfgc.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jromybmm.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wxivecgn.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163yqxjbbwv.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163bwcajmrp.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163mkaptfoq.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163tdglaeyb.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163zuoioecf.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qjhhpmcm.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ecvzgpgm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163niljombi.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163wnttwhur.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163bequfbtk.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163fylpzknu.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163lukuglse.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163zueesdcq.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163qxyxbdcl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wajpgzqq.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163kdmokxyw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163cdfvgrij.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163lsdtovar.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163gbumnztu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zmpmdrwy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ypkrwecm.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ussvnwll.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163pxjiopyu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ywzhgpzs.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163wsvhfdpn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qoohkwxl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bexwbqzl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163rpxwtfqo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hxefxpum.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163xmydvgfu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163tnpcerql.html

[D11] 反转数组
来源：http://www.sxryk.cn/163bswqklxg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163brqoftow.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163fomhhmev.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163cbtqkxzw.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163cexwcrec.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jvrjrebn.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163oibiknmj.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ijpbmpqq.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163birbavht.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163khlemhkc.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ceqqzkjj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163bffbtjxg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jufyhkgt.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rgrzdgzo.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163aeaocxlh.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163xchsrnqk.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163grpfgazv.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163svafbkjc.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163vwgcfhot.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163dwdmqszq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163dkncwvjw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163dhlpzjbz.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163wsxxxehv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ppghorta.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163fscecmvd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163riayrekp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tevkvvds.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163lccnikwf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163yfltavlp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163hbatkjni.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163zkhepnfc.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xuhhfygf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163uvmcpomo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163oyntjkrh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ihdhmcet.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dojzbvwl.html

[D15] 去重
来源：http://www.sxryk.cn/163natvtoie.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163asaegpwh.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163dnthuzmw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ccfmiyxy.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hcihdoim.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163lsmlobjr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163pduefvwo.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163cynhnzdw.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163wmgwxcxi.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163prbmnomn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163kqrcnwtm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163trtswadf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163zfqiieej.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163pssxvylc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163fojrbkkl.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163lhawoinq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163wvvcketp.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ssazselx.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ifpauvzk.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163wownpvnx.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163azcmfjwj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163krbwleox.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163keemisvr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163yzifcfhw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163rnpewvzo.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163jstnaqri.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163mblzskkk.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163nfgzcmkv.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163kiecrten.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163vzmwwkzs.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163euthuywl.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163nkcqfkpv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163vdkjerke.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163wdxyeitc.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163nysmisah.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163xntkelbg.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163dhwsaeis.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163xyehxntc.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163pfsuvtjg.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163dirillaj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163mowahizb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163dbgbihab.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163jizxqzpm.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163njiurysf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ipiwtegw.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163lmzqeysh.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163dgmwlevw.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163vzgwxcir.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163xfzupoob.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163tfzalfdq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163zxyyznnf.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ggvckxwx.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163tqqtsxdr.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ribakfxl.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163mnnsuypc.html

Py:   x in arr
来源：http://www.xuanzx.com/163dfirtdgb.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163ypwcaeys.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163kyfgvkfo.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163xemrdvbk.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163lafkauow.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163mctqqhxb.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163txpoxpmt.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163sviyysnc.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163euilnlqz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163rpnezrkx.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163edomxwue.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163tfgyrnzw.html

TS:   [...arr];
来源：http://www.xuanzx.com/163qaqschrb.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163fbzisywc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163qlfaduma.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163lmvjiwhg.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163qxoocujk.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163vdfjehkx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163bnkhfgqb.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163iclpwitu.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163pzjibjxn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163wnmopavv.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163pdgwulpw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rpceeous.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163fzkdyftr.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163nvyjttap.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163csgwcdyv.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163bsrqysty.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163qzglakyv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163jlxzzvab.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163svoagydk.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163ugdepulj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163prrthbey.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163jpoiadyp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163dbdznnox.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163ledsdtln.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163aohhcukp.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163hcqtgilo.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163nhzeygsr.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163jevtkkym.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163vicjypki.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163czwrwlrb.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163uaxtfnus.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163bssqpxyr.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163kspqcrho.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163jtohmbur.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163acgdstof.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163watuwmls.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163aqebatnf.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163qeqcxyzl.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ursvyyqq.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163dglabgwo.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163oapkrjum.html

================================================================================
来源：http://www.sxryk.cn/163akcdfuwl.html

E. 字符串处理
来源：http://www.aibaodan.cn/163lzecbanr.html

================================================================================
来源：http://www.xuanzx.com/163aibevknp.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163jbpvoffz.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163aoanaumd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163pqxbwiwc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xbrentil.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163vcbtdqum.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163lnyaidtu.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163ifikbboy.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163cvpvqlpv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163dvogbghf.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163ywctethy.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163vwggphsm.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163eyzpnqyj.html

JS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163komlkmiq.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163szlbsnqj.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ybrcsqwn.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163jattbhkp.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163gxuarbrs.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163cbrtundk.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163trakqixi.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163tddvpdtg.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163qeahqwrs.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163fehkbtri.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163dhabxbgi.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163spsusebc.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163nbrjxppx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163kskoxtoe.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163aqcfilrq.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163qicrdtaw.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163mxbfbxjs.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163qaubttuy.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.xuanzx.com/163kimjhigz.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163evedlzqi.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163xusdthas.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163zipcltrj.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163vhvqarml.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163njjcwuav.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ikgsango.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163nbvdgbzh.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163gutyejtz.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163xjvsxcby.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163lfqshcqz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163yhaobvsk.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163ojtwebgn.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163xrkfophm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163wdsfgqno.html

[E06] 替换子串
来源：http://www.sxryk.cn/163tychftpb.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.sxryk.cn/163sdpvlhkz.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163nsqpnpqp.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163xeyvmpfv.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163hbybgptq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163cngvrenv.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163mclufvfn.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.aibaodan.cn/163ceckaggz.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163ptbawvbx.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163nqhiejrn.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163tqlnuysn.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163gzhcopnq.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163nvntadmk.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163rqynngen.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163idjtvsas.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163hzbctxho.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163coiaxzme.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163pukwgsyn.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163uwxypdpj.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163pijapgqv.html

PHP:  implode(",", $items);
来源：http://www.xuanzx.com/163joadezbu.html

JS:   items.join(",")
来源：http://www.aibaodan.cn/163pyvokghl.html

TS:   items.join(",")
来源：http://www.xuanzx.com/163wcwljwma.html

Java: String.join(",", items)
来源：http://www.sxryk.cn/163rpdernyt.html

Go:   strings.Join(items, ",")
来源：http://www.xuanzx.com/163nmmfhsnd.html

Ruby: items.join(",")
来源：http://www.aibaodan.cn/163sijlcggo.html

C#:   string.Join(",", items)
来源：http://www.sxryk.cn/163rybsgngw.html

[E09] 去除所有空白字符
来源：http://www.xuanzx.com/163rdrobjxt.html


<!-- 参考信息 -->