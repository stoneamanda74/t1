外链999!wailian999！

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163gjqdvtwi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163hzpbymqu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163rdvqxiaf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163nexlwksp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163woeeaatz.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163oqbpwtlz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163rxadgpxw.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163zklceidq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163sxksmrer.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163koinfsjl.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163gddixwsx.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163afibbqyc.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ghxvlptb.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163vejdvnzv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163mvghfajs.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ltqzzngu.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163isdsuzkc.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163mpfinidi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163gvxppaxm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163zfgbngzt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163zbrphxeg.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163fhxbngrr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163nrjmcvzc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163glgceaqw.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163qhxquzft.html

[D04] 删除元素
来源：http://www.xuanzx.com/163fgmwclpg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163rzgmpwpj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163mqrswhxp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163lhybzfcn.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163rvwbukvl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163hpykeadf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163jjbcxxaw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163kriijxix.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ysxhvjcp.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163cxpzrmhw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163eafdufka.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ldxmnays.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163sqhrnmxd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163gfxwwezy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ycnksvhs.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ypaikheo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ynddjujy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163kfccwgxk.html

[D06] 数组长度
来源：http://www.xuanzx.com/163naosufzv.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163pmrxdnzh.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163hahqgwub.html

JS:   arr.length
来源：http://www.sxryk.cn/163ycypdnsn.html

TS:   arr.length
来源：http://www.sxryk.cn/163ofjlhpsi.html

Java: list.size();
来源：http://www.sxryk.cn/163sdhzauax.html

Go:   len(arr)
来源：http://www.xuanzx.com/163jckpkqre.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163okgvxbzl.html

C#:   list.Count;
来源：http://www.sxryk.cn/163nbwnlsgf.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163xctozkyn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163khdfwjbi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163zhzidrkf.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163uxzyklzz.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163wxhqsumo.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163otejdrbw.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163cboiygzc.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163qjtcirzn.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ahajqetm.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163tgobtcfp.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163xnxcsdap.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163trbsbdxm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163cogycjsk.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ybnmfwet.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163uvahdfks.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163wabjukkr.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163joqsezbn.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163tutinneh.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163msbnivpv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qlpgfvlq.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163futmojdo.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163licgwoyk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163rlzsvqjt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163pjyptitg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163srseewgh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163amwilxmw.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163tzupxmck.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163phsxpgrx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163meyrccbc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163welremep.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163eqqszfxv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xrfyyzwk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163slymvlga.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163objmcyto.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163qbqkauch.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163bmkxmzhz.html

[D11] 反转数组
来源：http://www.xuanzx.com/163fahcxudt.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163drpnyhap.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163afkrlrkk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ghydpnkj.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163jkakidyn.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163cuzlkghe.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163lqahnvgf.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163tiyulzty.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163vnddnxxj.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163nepbvvoi.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163uoajosxu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163abrfjhqb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163pybwynbp.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163cmmfkaye.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163elqyasjb.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163dmpyhmpx.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163iucbxmez.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163epxcrkoi.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163witmwksm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163ypghjqlt.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163dyyoxyue.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163cgxmfbto.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ssxlbreg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163riaqkpvu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163hxfsryey.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163atwcpuvw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163phuvrzul.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163vblkkszo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163rckdslcn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163paycczda.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163oibmhozq.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163obeaaeej.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163ggysvxft.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vohubyyy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163tmgmtxzz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163qmrgifor.html

[D15] 去重
来源：http://www.sxryk.cn/163nhyogqee.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zyktdyga.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163zubejvro.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bjfquctt.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163szlznosp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163zwbylvas.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163hxjktulz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163nondjhwr.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ntbwfrrx.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163uvodbhzz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163okkzvujq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163qujqakmc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vvaogdvi.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pcyexopn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163vmlnkeem.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163bkglohzr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163otyaplmh.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163iliqqylm.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163bgjnmmgj.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163ivhebrum.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ocnfkexw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163taqgwwsw.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163nevtgcuk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163jehmrsct.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163qjtpixpe.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163hioqyckg.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163bpybufhk.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163whdqwvjo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163fqjsbqby.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163woctjcdd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163dqybwhru.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163rwuckadx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163etlrgbry.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163grqsztbz.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163uhmstxmp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163vtzdwjkt.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163nbceuewm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163tdlfjhqa.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163svrjnjql.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163yiakoezz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163lgizxtvs.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163tsexlmqp.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163jmiiwaxc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163nekbzvxm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163iulzolue.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163kwmnwtiu.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163fawnnlps.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163atgsmqkb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163uhnhyxum.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163vlgjvnch.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163vgmhebuh.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163cbbglwgp.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163dtmmvbyh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163aphbbddv.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163dsyjkkuy.html

Py:   x in arr
来源：http://www.sxryk.cn/163scfsrezq.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163eaeskato.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vnalutsx.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163prbjqhmc.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163higgrcoo.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163tyqpzjch.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163novvjznj.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163jjvisnec.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163zlneexiz.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163cinejqai.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163trqpdpdy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163pdstwxyf.html

TS:   [...arr];
来源：http://www.xuanzx.com/163jfhadsno.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163fzushzbz.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163cviuzghs.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163myvktfzx.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163dveotoxj.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163iqdffuih.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163hrkzhuju.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163jtbzljaa.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163gqezveev.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163clmtknct.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163mfzyxirq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163lqrfwxht.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163fdzpwjli.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163yrfwmvrd.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163lmzuwini.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163avjiwfmh.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163vzhpveaq.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163mhdkxpvy.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163sjnnhkmi.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163dtaxrpvj.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163skwqfpvv.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163idfypkyc.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163xqozzxwj.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163efqejiqp.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163aqrxjsbl.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163tjmknjlc.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163dmnzhfvl.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163wbobcbdv.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163hnwqtebc.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163nivbcvqm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163hzsvlrgt.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163xciyaujz.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163xckiilfg.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ahojgdmb.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163ferxohtu.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163sgyepimf.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qzflmvtx.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ivjrqvre.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163sqgpxaia.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ufoovbsc.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163nlfpzxak.html

================================================================================
来源：http://www.aibaodan.cn/163helciqjz.html

E. 字符串处理
来源：http://www.aibaodan.cn/163smwybybk.html

================================================================================
来源：http://www.xuanzx.com/163dmaznfim.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163acylpmss.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163hkicfttf.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163eyzfjqlo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163wvqoiesp.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163vkecijnc.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163gsoqjpep.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163fznryhnw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163qxgvybsv.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163tzuqndkv.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163pnpltexb.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ztwtofqh.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163ltofyfkc.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163crfuqhmn.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163nboeovab.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163tmacvqaa.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163xjogucjh.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163swzowwqi.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163arbdozqg.html

[E03] 截取子串
来源：http://www.xuanzx.com/163lmlqtumm.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163xvrpizsq.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163tmvdvfip.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163eaycyssj.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163prvdnnyv.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163phruxxlb.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163iomkxvys.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163tppawoez.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163ppsyvqmt.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163nyyatzyh.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163rswsffii.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163phsfsoab.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163tqgrsbmd.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163dldfpgkk.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163wgjcxyks.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163kldvhzgr.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163wzvqqted.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163papvxinc.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163zhrqqwmi.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.sxryk.cn/163styuqlez.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163yuixpaek.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163lzvngazi.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163vblfdubr.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163lelrwsdt.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163bgdlkcve.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163lndzjmnm.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163utoiflgw.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163pldwiuyg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163qszikqbi.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163atsoynmj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163ahenrlvg.html

TS:   s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163sgopzhos.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163lzwqoomj.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163huddfqxb.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163kadmwdpn.html

C#:   s.Replace("a", "b")
来源：http://www.aibaodan.cn/163olhdlyhk.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163aruxitqo.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163hiabpjip.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.xuanzx.com/163mdjrrkpc.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.aibaodan.cn/163aewmdhxo.html

TS:   s.split(",")
来源：http://www.xuanzx.com/163nlteumty.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163tajvcvwc.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.aibaodan.cn/163fwzalmsw.html

Ruby: s.split(",");  s.split
来源：http://www.aibaodan.cn/163uulocidc.html

C#:   s.Split(',');  s.Split(new[] { ' ' }, StringSplitOptions.RemoveEmptyEntries)
来源：http://www.sxryk.cn/163kdhcfvgn.html

[E08] 数组按分隔符合并
来源：http://www.xuanzx.com/163krtruqby.html

Py:   ",".join(items)
来源：http://www.aibaodan.cn/163zmhpkzid.html


<!-- 参考信息 -->