外链999!wailian999！

Ruby: a, b = pair
来源：http://www.sxryk.cn/163jictdpsb.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163wpnvpitx.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163rlzzuqhh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163lvbipqiw.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163imrxyapq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ywxtrlkr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163xylnmtvn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163lfooexkj.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ouangwdj.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163xadtxooo.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163qakxycfb.html

================================================================================
来源：http://www.xuanzx.com/163swgzspdb.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163buddddkp.html

================================================================================
来源：http://www.aibaodan.cn/163oeeezula.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163fkjkyooa.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163fifubqrh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163bwpywfvf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163vanwbzan.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163wyzihtke.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163uihdonme.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163cohyoiwu.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163yctmzkva.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163lgsycdgm.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ytmscmgr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163etpbvskt.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163asmhgiav.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163mjlhpexv.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163nojttxad.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ucjvgnni.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163leossijp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163isykshsy.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163epdpwmst.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163zszddfsk.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163fptqztyy.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163vxvputjd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163vjzokujz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163hwzkvcvh.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163eazbhnbq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163vldlegxe.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163qltkmqxs.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163eqjubkad.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163thglueqg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163riqpscim.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ziyizyzf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163cuatzywu.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163fomqmcpp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163imduuccl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163laixjpht.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163loesuurj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163yhsxfaqy.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ozgtlfyd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163yabgeycd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163tcvwmegc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163vojisxdt.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163zmawciim.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ktymkmks.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ntoqipqo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163yizsljps.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163cmgktcgm.html

[D06] 数组长度
来源：http://www.xuanzx.com/163mzfomzjh.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ypfnccla.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163nugfqxut.html

JS:   arr.length
来源：http://www.sxryk.cn/163vnwicyha.html

TS:   arr.length
来源：http://www.aibaodan.cn/163wjzpugnz.html

Java: list.size();
来源：http://www.sxryk.cn/163xzrntlfn.html

Go:   len(arr)
来源：http://www.xuanzx.com/163pwttlxfi.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163zljnofoy.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ocvrjhhz.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163jdaitaqv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163opqclxpv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163heaqzitx.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163fkkahnft.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163sjepgctj.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163hwmigmjd.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163zrocvqqx.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163rdlprjqw.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163vhorxnri.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163zpekaeyk.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ufrfvkrx.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163bsrjhibp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163mplcdtak.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163jtxippnr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163zkmuyuzb.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163rwtimquv.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163aoesrjah.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ftanxefq.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163zelachjh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163shzanzaw.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ynwiklht.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163bbnvvxut.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163crqdynjc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163vfiszwgc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163qnfqidpz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hhphqzns.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ovicuhno.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163kayuewlc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163uwcievcb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163pdsewqke.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163yqfwzevi.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163atcirjyk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163yusrwtpr.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163kvpyzxta.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163xymjvpwe.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163qecvfnwc.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163sskcasjs.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163vgygvgik.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163bdyczgpn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jiykhfrd.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163qilcmofi.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ybjkflyl.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163qroutbjv.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163xjajpssm.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163mbdoyrcs.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163tzewmvso.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163yqvksidz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163noxnhtau.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163sidllunv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163lmwxpgif.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163uuvkfpla.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163kynnyghw.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163zfgxrxak.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163qbjjzolf.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ngiqpcsz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163xlzpousx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163rqyinayk.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163btbfvfpb.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kjxirkke.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163yexgdxnv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ewzhjbes.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ylowamhl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163peynvruw.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163yioycuza.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163vuuivcxe.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163solklkun.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163sxjwhxjc.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gkbzqwal.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163yhpnvued.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xdehiqum.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163vmxmeesc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163urkotqmv.html

[D15] 去重
来源：http://www.aibaodan.cn/163dbutwbhv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xvyzqsbo.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163rpjyhnlf.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163lsgbfyej.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163pitzueuf.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163vhdiryes.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163dmgxpyza.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163vkepiocn.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163sxeikstr.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163wreiiorv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ahatoaso.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163zzauonff.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163njrefzfg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163pbztorfu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163pgmqfjup.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163gsbhnprw.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163fetlrexn.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ydimlmdg.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163dyyrxmjk.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163xnfgyukg.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163brytxtif.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ejgohpcd.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163mekkwiul.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163npbeayoi.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163opejptfc.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ivxaruba.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163xclfgynd.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163zvntccsd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163opmabczs.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163lvdiashd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163yyfzbvhj.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163xadbjobd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163rwgrkmxw.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163tczvcbxq.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163dxcnwdaw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163nqohkejx.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163eerhrvgo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163rpkdifyk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163bvpfhywa.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163ykdopdqo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163zjifkstr.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163gvjozyzi.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163adolexcq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163ajdlhgim.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163nvgycpah.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163wmtlvscr.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163huykujav.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163oitkrtrt.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163bwxghify.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163padysrok.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163qscxnudp.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163clqlehyf.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163hpjggyjt.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163zcufqiqp.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163qjflrxfl.html

Py:   x in arr
来源：http://www.aibaodan.cn/163svivpiah.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163hqwswkbk.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163haygwbae.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163cmdtauoe.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163zamjmbjt.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163leaiwoan.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163bvxewryu.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163mpjexfnn.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163xtyrwoem.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163wgsbagvh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163qnpqffge.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163sdrzuvya.html

TS:   [...arr];
来源：http://www.sxryk.cn/163wqlfbqhn.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163bdhrokda.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163jmqjhtjf.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163iqxccepy.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163nzhjhopl.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163aezbkaib.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163yugjvnip.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163alfwsrzj.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163bibbdhud.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163zngkxywz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163qypqnmgb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163aghranuv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163qzdshpxp.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163hzsfljbf.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163kfnertgk.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163kshovrgm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163dnnfehqa.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163dkjboumd.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163okjdknbp.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163wvhswhax.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163yztggzzr.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163bwcqpssi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163ydkaevyu.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163kcagogpm.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163kvedhmng.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163duammtqr.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163hppayipw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ooaqrhtb.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163fucwldry.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163tyrlebvp.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163awokfgso.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.aibaodan.cn/163tejinbsl.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163yntnocyb.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163myyqnuej.html

PHP:  implode(", ", $arr);
来源：http://www.aibaodan.cn/163nyxexzxs.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163rkregwjp.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163sjxcobcx.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163ttrluxxx.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163ssfeoiqw.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163ynyqicjc.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163ptdtpqmp.html

================================================================================
来源：http://www.sxryk.cn/163zucedsqj.html

E. 字符串处理
来源：http://www.sxryk.cn/163omlvefmp.html

================================================================================
来源：http://www.sxryk.cn/163hpskdrdb.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163egkwzicj.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163ooxvuygo.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163icgkeebj.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163eqraqzji.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163eskliton.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.sxryk.cn/163siwssllo.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163ryrtkojw.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163hkygalfm.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163inmnjbsb.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163wlsrgvmv.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163sgwtrcpe.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163cojceymv.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163jnilrjhe.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ypuarvlg.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163waqisljl.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163jkwgnaio.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163hfffgcrc.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163remvbojn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163bnavflgk.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163pitiqkms.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163ilwnmsks.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.sxryk.cn/163nbtltpqe.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163xwrgwfwt.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163vyqbxmzh.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163xycqxysd.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163wklunomf.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163acxinfmp.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163heousfnc.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163mmyirldf.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163fdxeivrq.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163jdsrsnbl.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163yfipybwl.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163fbgnipey.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163tqfsuhsz.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163nxkzkpae.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163zpwubwzg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163pmbdtwdn.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163pvowvsdd.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.xuanzx.com/163ommhcmsu.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163dgvrrvca.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163hfnkxlnj.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163yakjkztp.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.aibaodan.cn/163qgbjyktg.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163styvdanh.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163zaqqnicx.html

[E06] 替换子串
来源：http://www.xuanzx.com/163wxstwhqg.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163xrqgpspf.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163gpkjmwlr.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.xuanzx.com/163fyxzlwix.html


<!-- 参考信息 -->