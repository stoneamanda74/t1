外链999!wailian999！

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163nuoizgzs.html

================================================================================
来源：http://www.aibaodan.cn/163tspyanub.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163blhzjzus.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163vhrrtnmi.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163lxpleuxi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ayviuacy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163lffkgdru.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xzdnxeau.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163utyltyut.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163mhtknnse.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163mcdmhsla.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163obhmmibh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ykobvfsa.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ckxrxfsg.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163wnbflmpk.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163shgalbxw.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163qtllxpmf.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163kpyqgzxp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163hqhvqblj.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163fluubtgz.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163noogarlj.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163wcesgrch.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163kskypnrw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163bfanabqu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163faurudwy.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163vszebtbu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163mogbteat.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163qjngvbwr.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163eaajjobi.html

[D04] 删除元素
来源：http://www.xuanzx.com/163xutwnfpd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163nxwhjfbp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zafvshyh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163sskbtdyd.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163xvepfvgg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163gmshxxgn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163bllbgpbn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ombmwkbb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ulkxzlwb.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163otvtbpzh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163kkzqbwqj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163adsrorjy.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163zzvyimrq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163btmhajao.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ziqzzrmn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163dugigmwj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pvuqgrtn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163omnhmqwp.html

[D06] 数组长度
来源：http://www.xuanzx.com/163lcmlctkd.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163mpnhedxx.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163yonaeuzv.html

JS:   arr.length
来源：http://www.aibaodan.cn/163icvoapgx.html

TS:   arr.length
来源：http://www.aibaodan.cn/163npiwtmmi.html

Java: list.size();
来源：http://www.sxryk.cn/163rbgcsvso.html

Go:   len(arr)
来源：http://www.xuanzx.com/163njvmdzgw.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163rngxooey.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ihugwqiu.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163nrsavusa.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163czbgfgmk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163nknfgere.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163pdiosfzb.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wladzcpn.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163poowqqlb.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163nuggttcp.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163wmoplzvc.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163urfkbqtl.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ycorgpsx.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ndliudqd.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163hkwawama.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163vyqpozae.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163bezycsxt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163tkowcbca.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163sjbgstdj.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163tqowdtgf.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163cmlabtsj.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163swgwhgfn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163mrndblgi.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163nmxlpmdq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163fsfazzqk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ywnuviwz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163myvufuju.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163utxrkyxf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qxtdbqau.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163bfyfabxy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163xhlakrwe.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ydgwrmpt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163qxnawfsu.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cthojdqq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163purlfynq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163rwouqifl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163mlqzzimi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163uhrxosih.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163phcbnirq.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163glgvnhee.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163gjxopenk.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163phwtddyi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163xaaturpr.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163savyylmw.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163cgqlvffx.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163wvnprzji.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163svzhalnh.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163fttapyoa.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163wyryynyj.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163zxpiplkp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163sgakkvsr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163lkpiemfn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163gmwpxgup.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163qierkekf.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163pbjbqyqd.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163nacrkjwq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163btehobfc.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163btmcpzwg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163yvlcbcus.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163syqnfpng.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163irtranfq.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ivqbkytk.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163uaeylnin.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163gdfaffca.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163gwjeyhwt.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163ymkqilpk.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163nlcjgmqs.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ijqtvpcs.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163pxmxvyoq.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vejjpjjt.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163wbcohmhe.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163tzkfxzpu.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163docxqddx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163yxprilqq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ilxbcsau.html

[D15] 去重
来源：http://www.sxryk.cn/163nhuihrku.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163rnyxmyqs.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163fibowvaw.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163leytuzpz.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163yksluavp.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163dlmuqnae.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163unkzmhbv.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163suuwecyp.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163qztvakwz.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163vyxqrsig.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163mqyrzlzz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ucgfyjyd.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qrociynn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163idldgrgv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163brxsqcdj.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163plfxnfsw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163vvispgfd.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163choghvaf.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163hdtwwwcd.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jpshfpig.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163kdgpmusw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163qytqjdkn.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163jjurcvog.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163vinxuvjo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163wuxrjzdn.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163fractreq.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163hfwivnlb.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163sejiqwih.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163qlqzpkxn.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163jjxudpvc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163uiuixvxq.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163awgrsxlv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163zembagka.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163oecwttnm.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ivryfaob.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163vajnmifi.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163dlpyccfg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163rfpeclig.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163oiqxmnjl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163maxbixgd.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163eekjjntv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163ukqsqaen.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163ryrhbrdu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163nyefsuye.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163xvlfyzix.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ranokvdd.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163anuimgif.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163kcqpitbt.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163jjwaievr.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163snjbbsbq.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163tnfftchz.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163lqsqysys.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163vtzkyisd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163zlrbcwtl.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163fghxagtn.html

Py:   x in arr
来源：http://www.sxryk.cn/163yyqyefcy.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163qrlrunqj.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163yfvqucvq.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dxnyhldg.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163cesrjwxi.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163asmfxnww.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163jaoomcuv.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163qpxjgyht.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163foapxfkx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ruiwijus.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163jhdyvgas.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ogaytifp.html

TS:   [...arr];
来源：http://www.sxryk.cn/163gpvvmiyr.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ldwrjddc.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163evexfxax.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163hnlzvcfy.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163nafiisvf.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163inuecxay.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163owpmpolg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163vbmbfrhj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163zwvkcjgx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163hjigenvz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163fmhhbrfe.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163izdalepw.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163urbunmhd.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163xfjoheie.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163nldwmklg.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163stklvwgy.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163znxiyuac.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163iccbnzhh.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163jefjynbm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163qtcnuohz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163npgnqebs.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163enoimlpj.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163idzprdpq.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163ycnuubbu.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163cuvghoyb.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163bkzzrznh.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163wcuxwzjm.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163mzecuvlt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163nqybabbd.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163sdrelqei.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163nbbfoqja.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163epbefpzq.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163lrblbguw.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163yvuplqof.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163pcvtudpd.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163pxzvozvd.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163vubipjxt.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ffbdblur.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163wmiahjil.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163gwnkjvql.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163qczhxqza.html

================================================================================
来源：http://www.aibaodan.cn/163crfnasht.html

E. 字符串处理
来源：http://www.xuanzx.com/163tnzxqdcd.html

================================================================================
来源：http://www.aibaodan.cn/163bqpkogws.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163pkbdvsng.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163vqhqgybd.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163jkqbxdcw.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xqjpqbns.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163mskknahn.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163dfwtksab.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163hpuknmoo.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ouyozith.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163rwokzqku.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163rqewebfw.html

Py:   "ab" * 3
来源：http://www.xuanzx.com/163dxiobeqg.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163lwizmlkm.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jjhafxyi.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163enljuikz.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163jjfzrjcq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163cunkpfao.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163gsyiicqa.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163yufcywmc.html

[E03] 截取子串
来源：http://www.sxryk.cn/163elsiaobr.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163zpqyfcho.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163tyxkvmks.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163jcgwmxoq.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163weonwwzf.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163dycetcfw.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163eefdcvsx.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163rfzypyhq.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163xtwypcfd.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163gkvwoiwi.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163brmgfijy.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163ijkghumn.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163pruuhtfa.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163punzvhdv.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163tfywljxo.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163eypxkvrz.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163waibfcbm.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163wvvgckbm.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163lagzjqit.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163auinjnxd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163skojwlgk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wrqqpxby.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163hygwqmmz.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163zcyyyykm.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163jnxgeyvm.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163usnhouuw.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.xuanzx.com/163lxawtuqi.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163htoodtvt.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163dcoijqsk.html

PHP:  str_replace("a", "b", $s);
来源：http://www.sxryk.cn/163nnwlgxps.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163hwgwjbqm.html

TS:   s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163qbulbtxs.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.aibaodan.cn/163bdmmqjlw.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163hkhtqbyd.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163jzzdfunq.html

C#:   s.Replace("a", "b")
来源：http://www.xuanzx.com/163etdjtgnd.html

[E07] 按分隔符拆分
来源：http://www.xuanzx.com/163liffjwag.html

Py:   s.split(",");  s.split()      # 无参按任意空白拆
来源：http://www.xuanzx.com/163jwfievjb.html

PHP:  explode(",", $s);  preg_split('/\s+/', $s);
来源：http://www.aibaodan.cn/163aukedolw.html

JS:   s.split(",");  s.split(/\s+/)
来源：http://www.xuanzx.com/163sxkxbgdk.html

TS:   s.split(",")
来源：http://www.sxryk.cn/163rxvyjkdt.html

Java: s.split(",");  s.split("\\s+")
来源：http://www.aibaodan.cn/163vitxedsp.html

Go:   strings.Split(s, ",");  strings.Fields(s)
来源：http://www.sxryk.cn/163lxchorwk.html


<!-- 参考信息 -->