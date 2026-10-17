外链999!wailian999！

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163wjyopsov.html

================================================================================
来源：http://www.xuanzx.com/163ncbhrtof.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163pomjjhvl.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163qasngrfz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163boxcmugw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163anejfxki.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163lnmabfin.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163hufbyzfn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163wdacdxdw.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163dzidwaeo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163frzpourc.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163qrfqpqhv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163blhghwzl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163lhmebmgn.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ufvbghds.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163pqfxowru.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163qvgsvbdu.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163mzseirea.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ubcvfagx.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163xrjkmeul.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163omyqyojs.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163pxobcdkc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163svbcytbn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163kpatqpfh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163hlfxevjv.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163lgrqutiv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163mhoxprnh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163wnifwsyn.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163aogbiiql.html

[D04] 删除元素
来源：http://www.xuanzx.com/163iijcejfg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163qchsrsgm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ykhqmock.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163zlwqrbkh.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163vxfzaqpe.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163saqiyijr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163semdmntd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163bxwcnadd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163hogrgmic.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163jyfyyqjo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qhsfscje.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163yoyjhrtx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163dvugwewt.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163qrihxxjx.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163xzrpnmuj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163wjvekmyd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tgtdeagy.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163fciitsgr.html

[D06] 数组长度
来源：http://www.sxryk.cn/163pvoxesee.html

Py:   len(arr)
来源：http://www.sxryk.cn/163whkjvgbe.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163qnleudnr.html

JS:   arr.length
来源：http://www.sxryk.cn/163djruhlwc.html

TS:   arr.length
来源：http://www.aibaodan.cn/163dnftarqb.html

Java: list.size();
来源：http://www.aibaodan.cn/163czaivphp.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163gfkuyhgw.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163iqdauqbt.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163wbalfopb.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ieikhbac.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163guqilvbj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163citnwhzq.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jkohbnxc.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163eevoyidw.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163jgprkrrn.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163drygypfn.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163vqifuwsl.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163tnbaccoo.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ngeehxgd.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163yjopjgpq.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163dzypgvkr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163jsuobupq.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163gqzaqmod.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163onriqhcc.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163qgpidsfp.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ofzyavib.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163winavhav.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163volnexfp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163apogmnzt.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163uroxatyj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163hwvmbugr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163prqiortv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163nwrjjooz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ajemotpl.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163eipoqzju.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163nozyvajb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ldhugowg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163lbvyzqmq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163wqmxzibn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tyhvruzr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tqbkbilo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163edgqvwje.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163dxemdntn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gzquebep.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163wesddgnd.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163fzrprgmf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163lauqobli.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163hkoldkki.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163rrwrsyil.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163xtljikbk.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163zurocsnu.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ocxawfco.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163vdafqsuh.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163evympqhd.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163wltcsroh.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163zngksxcn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163zoqekbvy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vdsgqbzl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163tqblgbet.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163thlkpdhz.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163amucdkzm.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163zvqfoyzs.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163wbgjwezg.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163fjivegph.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163fwcacpng.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163frrbptno.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xuffbqie.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fddhdfpa.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163zqshumsc.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163eauizmhb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163gvatjzjo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tsiqgdol.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163rdtyktxn.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163gwildhiv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163gfdxfyqk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163dhvfynkd.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163uayloukh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163losrtrol.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kfxnfqxg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163wbanwxic.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163zmxsgsgc.html

[D15] 去重
来源：http://www.xuanzx.com/163wzhbaapf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ncsomofj.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163iioplkmo.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163kqmelsfv.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ehereiiv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163qhsbmjct.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163praxtycb.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163laovkohi.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163xpbdgdga.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163rtpjqejj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163batbzzvt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163cqnuhraj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ulpmrcrz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163aphymptj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163bpzvhfem.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163dlgbmqbp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163vrxtrwfp.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163irtfupie.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163tufnjjqx.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163mfdwjyxq.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163fylmiewm.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163tososeww.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163lajrdphr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163lsxbmoin.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163eufxykth.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ukomxhoz.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163esrhpntk.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163lvovwzyw.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jrqsfqlp.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163kuphpsgi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ydmmwkkm.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163hoigbcpg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163peeuwxku.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163kbpepfcq.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ipuvfplw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163qzuoljjc.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163vuopnhvf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163cthigetb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163cvmrpqsk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163cfcicrhz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163tghapgnm.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163bpibbjlg.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163zivznhql.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163vybtbgqm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163tzedxnni.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163bkeffurq.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163tpxcqmwc.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163hkhlhjeu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163nftgkess.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163rmlabffk.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163srfjqlez.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163qrpazyzn.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163nxwddvhi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163fqgtfvtr.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163rzbaamvl.html

Py:   x in arr
来源：http://www.aibaodan.cn/163lzsaamhz.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163ouruupwr.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163kubemphe.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163gxrwjhpw.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163ovbrqeyq.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163npeykohi.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163menftflf.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163jkwwgswg.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163niquudky.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ykkctnwr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163agewbnxb.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163szvmwxdw.html

TS:   [...arr];
来源：http://www.xuanzx.com/163xmjxvgya.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163fdeoyucv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163jqylrmzz.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163iasbimei.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163kalwfoca.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163exjuvsyz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163uubturqe.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163jvpbfjjh.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163lqdbesvs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163tvocbmno.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163aadwgmeg.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163dtgaoyeg.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163mtfhaokw.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163pblunbkv.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163zzsbogoi.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163tlxieyyt.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163opnjbhon.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163ynafdikv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163gicsgpmz.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.xuanzx.com/163lcidyghz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163lrwoeedf.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163jkytkkzp.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163pclgsmec.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163wgefjmvw.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163kkodvucg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163muvspbcr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163wduylcpn.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163pqmncwyg.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163oiwmmhgp.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163nqcvvmla.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163poqemeun.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163fqgpnpuz.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163akzuuqbe.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163jstbudvx.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163xitralna.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163uryeiybl.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163qqzvmoze.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163wqbkexgl.html

Go:   strings.Join(strs, ", ")
来源：http://www.aibaodan.cn/163auudskka.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163zbaqkiip.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163voodhpjp.html

================================================================================
来源：http://www.xuanzx.com/163tmfqbgfi.html

E. 字符串处理
来源：http://www.aibaodan.cn/163obbwwdbh.html

================================================================================
来源：http://www.xuanzx.com/163zhtilrwv.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163yjpyrvmx.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163adihiqar.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163yorhbamo.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163bdzqtdnf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163ittltqju.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163jtzmaauf.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163patnjkqm.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ajlrrsgz.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.sxryk.cn/163wiblzwab.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163uomwvpgy.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163ahdrjyfy.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163mwuhaeyy.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163mauicudu.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163dszokyky.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163aezorqwc.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163treayckx.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163hzpsbqer.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163wqzeespp.html

[E03] 截取子串
来源：http://www.sxryk.cn/163oentitqv.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163vaqslyzb.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163bisvslkw.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163vnxfvght.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163qsqjwwtc.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163aqyidwus.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163qkrmtmlm.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163puklrnrx.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163qxapdqcj.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163vpwkhnlx.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163lvqwxeep.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163gqizydcf.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163mncmsdlb.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163whxzvlim.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163hfjypqnb.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163hjdqhjbt.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163jyqtydgq.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163elttfhzs.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163naoqtsel.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163pfkucblp.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163twdvozqc.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163ljfwlilh.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163rszickdu.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163hfpctway.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163ywrfmhot.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163qptyaweq.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163hthfqbud.html

[E06] 替换子串
来源：http://www.xuanzx.com/163ituxvksg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163csiaitob.html

PHP:  str_replace("a", "b", $s);
来源：http://www.xuanzx.com/163nqgsusqk.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163efweubkv.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163pvfkmkpu.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163lchdieuk.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163sdmgxjyx.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163hsqivoxz.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163mammbgna.html

[E07] 按分隔符拆分
来源：http://www.aibaodan.cn/163pushotwj.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.sxryk.cn/163cpnmyqdy.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.sxryk.cn/163gecwvokd.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.sxryk.cn/163adfskwgy.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163cvwyfzkv.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.xuanzx.com/163xrpgryby.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163ntmgfipk.html


<!-- 参考信息 -->