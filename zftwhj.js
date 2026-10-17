外链999!wailian999！

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163hlwhahig.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163nwdbjndf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163akvhkugx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163xqmvhwls.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163swwgttzc.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163xnpppihv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163duupikil.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163hjzquyko.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ofdtwjom.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163slrkoyqs.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163tsuxwqpy.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163mlhbkqjl.html

Java: list.add(4);
来源：http://www.xuanzx.com/163coqrlzho.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163corlxhyz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163fragznut.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163cbnmvbrm.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163cnoeyohi.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163bqjzddkd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163oyfhckgx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163cmdewnuu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163saqvthga.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163bksnnvgo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163qsyvjvtn.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ckvkgvwc.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163qgnytmyy.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ehagxkua.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163mapokpoj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163qqvvvepr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163rcyzuhhp.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163tedwrlgt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ejivkmuq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163xlhvuebi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ejvlebow.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163hmdcdhgi.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163epclozoh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ltuyvqyv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ponkydyq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163evmxiodo.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163epqnesbk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163jylidnhn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163zgvbzjku.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fvcezdny.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163kixrsbid.html

[D06] 数组长度
来源：http://www.sxryk.cn/163mjzeojdd.html

Py:   len(arr)
来源：http://www.xuanzx.com/163dttmfyzv.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163cxnynafr.html

JS:   arr.length
来源：http://www.sxryk.cn/163giqrjmlx.html

TS:   arr.length
来源：http://www.xuanzx.com/163xgtlljug.html

Java: list.size();
来源：http://www.sxryk.cn/163mpxfcfkr.html

Go:   len(arr)
来源：http://www.xuanzx.com/163izmgfwfc.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163dvmpnbsc.html

C#:   list.Count;
来源：http://www.sxryk.cn/163zbhaaiyt.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163eynxjzle.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163srdsmdqk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ktxlpxkh.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vfvttrnp.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zaypyish.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163xnlblurd.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ismbmnaw.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163nmjntrfr.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163svkugdtx.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ngsxnkzc.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163qztvqehp.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163odovrfxf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163qlaetjtf.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163xvdiddct.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163wljsqwum.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163hfzpctcc.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163lmrtyrcb.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163webrstio.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163uylsfvft.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qersxhoi.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ftuvndiq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163stnvpmas.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163zvfknrtu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163idlkjjrs.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163lsqfvdrl.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163bstrtpja.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ozejiosl.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163urlxparu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163txuvudzk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163qbjyjdlf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163rxkjrpbc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hxsksfbu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ezfeztgu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163olxiqnjs.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163yfptytyn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ptgfntax.html

[D11] 反转数组
来源：http://www.xuanzx.com/163qjtlamcv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163itogusws.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163flmxncvp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163fffehgfn.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163sthsouou.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163titboubz.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163jletuwox.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163lmlbatsq.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163kdbggjxz.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163fpbibocd.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163kcoddvxp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163qumhxhps.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163fuibzlwb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163eezlfqit.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163pbyoqfdl.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ahhtglso.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163rmpivydz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163mdihwuqo.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163sjiedpqs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163bitcnyyf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163htytfknd.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ijkcwtmu.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163fzgymgxk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163zjkaecze.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163wajerqyt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ifyctubp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163izahgbyv.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163kolgwwpd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163eozgezza.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163jiacgrtw.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163wtneajoy.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163llrqqvys.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163xxhvohwo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163imqldvyi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163gaiqewnv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163klckrucg.html

[D15] 去重
来源：http://www.xuanzx.com/163yaeayjdo.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xeldolnu.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163nndtujhh.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163slbghjzu.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163itbvysmo.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163fjvgwojc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163mkurciub.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163zhuyltec.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163zwuejzbf.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163lrokmkrk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163yymfmzte.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ziunleaa.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qnlqqloz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163wsssefai.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163syimszir.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163hqlftkvh.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163xaridoft.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163wghdqkqt.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163aqlpydsv.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ycvtmghj.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163cfqktoyl.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ktkuiypg.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163lckhzseh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163oqgdmssn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163mttsxikr.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163xwlodtwz.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163mhiyyaoi.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163tqihjole.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163qzmyzhwa.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163jvyxwxkx.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163cwmutgca.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163nemacltj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ogsjlune.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163uavdksum.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163tlgnhngd.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163aopmigdo.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163qmnsnedh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163vbobjtel.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163otbvjzbr.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163boiwmkvc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tvrdegdm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163guvyioia.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163sfddgjjx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163uihchsxo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163andlxwvc.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163kfsrsbqn.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163mqokwauo.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163zobyjyoh.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163isdvcush.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163slecjfdv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163mwzxedmq.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163nhjrbmlx.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163vgigbrth.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163tutworqy.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163jngfzuww.html

Py:   x in arr
来源：http://www.xuanzx.com/163axkzuszc.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163bvqepwlw.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163oipmflsw.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163gfosqdmo.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163msjpszgr.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163dnjcpmfc.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163gecpgitx.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163zqzaetcj.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163fqjsaule.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163whwnanjw.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163aqnjfsuk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163oebnudrk.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163tlbzvvpp.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163svkpjefq.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163eaganpiz.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163ynqfetfd.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163qiblycah.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163jzctsyjx.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163hsmddnvq.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163vvpfxmlf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163owaniods.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163wmidstne.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163zjaanzpk.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xftqvzeb.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163cswrbncj.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163mbcmvatg.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163inqitdbn.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163exesgtor.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163frtmywin.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163rtjxenux.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163uujszrvw.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163bzwfjmtw.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163gpvwxgpu.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163qtjnxquf.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163cradatoa.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163kbejuasv.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163pcbzsnbo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163gzojddld.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163zxeoxgtv.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163xcqiqydh.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163khexwrzn.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163enfygadl.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163sdkhwcxt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163cbpvayzb.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ikjnofxj.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163pwwywnke.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163iunuaxdg.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163ijcvdvmm.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163cjhmazvr.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163emxiiazd.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163ddmxsklu.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163xaxifchq.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163ckqjubbz.html

================================================================================
来源：http://www.xuanzx.com/163rwtrzexs.html

E. 字符串处理
来源：http://www.xuanzx.com/163dlmdrzat.html

================================================================================
来源：http://www.sxryk.cn/163sqlcncos.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163qpmpwvbi.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163diymkgtc.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163oywrunhl.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163uvklesla.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163ruffkkjm.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jtxclufz.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163mhzjgyzx.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163rwtdwwud.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ghpfioyj.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163vioxiihj.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163yimcxawg.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163brjfozmp.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163nyicjgls.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163hxcyligy.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163wrqdisct.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ojitvkka.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163emkfdzou.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163xhunicky.html

[E03] 截取子串
来源：http://www.sxryk.cn/163erlqzwqu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163bodlohph.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163iiqblusf.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163tujsbxuy.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163lxefjbsg.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163ujojovep.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163tiuskvng.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163rydjtgfe.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163wqnkmxkr.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163vepqxzmn.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163zhddcpkd.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163yhuoxrtq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163heywxqul.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163pqqzonkq.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163mybqgzrv.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163tpexnipf.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163beidsgio.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163nhvhnwen.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163efaevfeg.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163dxjcdjui.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163stijdsxb.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163jdwuxzqc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.aibaodan.cn/163vhzzufey.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163ivqdhnxi.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163fgldabsc.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.xuanzx.com/163xkxruntk.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163fehmqyni.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163jelpbnwp.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163iaenuyxc.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163zuplqiet.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163refniolw.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163woszqhrq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163obrvfvvz.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.sxryk.cn/163zqwhkfiz.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163povsfzay.html

C#:   s.Replace("a", "b")
来源：http://www.sxryk.cn/163hocchkve.html

[E07] 按分隔符拆分
来源：http://www.sxryk.cn/163nhilqiml.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163rvnlgdag.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163duxrccdx.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163acfcihtr.html

TS:   s.split(",")
来源：http://www.aibaodan.cn/163ucpgnuav.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163tdlaoyih.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.xuanzx.com/163tajqjjzj.html

Ruby: s.split(",");  s.split
来源：http://www.sxryk.cn/163uxfmjnqo.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.xuanzx.com/163awjclmhb.html

[E08] 数组按分隔符合并
来源：http://www.aibaodan.cn/163wxmctqig.html

Py:   ",".join(items)
来源：http://www.xuanzx.com/163qntowjtp.html


<!-- 参考信息 -->