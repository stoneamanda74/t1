外链999!wailian999！

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ugoahfua.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163cbrzjaqd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163hmomvuir.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163cyrrlpxw.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ledjdaqn.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163rrixkpro.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ioinevyf.html

================================================================================
来源：http://www.sxryk.cn/163wcscdxgo.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163pkzrsjwy.html

================================================================================
来源：http://www.xuanzx.com/163xlzhbnxd.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163wzdlxtxb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163rixgalml.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163rpgpeaip.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163tvxhahtn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163wugyqyhx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163bcctlwak.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163wlnqyfac.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163hpaioalf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163mdhrrniw.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163dgleoegz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mfgoiseh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163blzwkyoh.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163jyqxhfnp.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163kwqpqjfi.html

Java: list.add(4);
来源：http://www.sxryk.cn/163hjtwlzvo.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163pxkeplyu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163cgfmvwyt.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163rwqblupq.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ufagmqyf.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ujqvjqor.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ffcthexs.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163jjovdwvf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163pbpvvcin.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163hxlhkvev.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163rryxhwko.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163glaylcyi.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ehjhqqvq.html

[D04] 删除元素
来源：http://www.xuanzx.com/163rjkohfri.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ckzuvnib.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163czhebrhj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163zngllekf.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163vrkvqpvg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163njvwianb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163lstrlgiw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163kjbbjolj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163yiafceih.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163xdjwizfx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163adbssokl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163nbslxvfe.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ppncegff.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163lvgcsdny.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163gdduedlk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163iygubjvq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ijzwnlju.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163xvnsznil.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163snsvherq.html

Py:   len(arr)
来源：http://www.xuanzx.com/163lbhxoxnz.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163nrcgxodo.html

JS:   arr.length
来源：http://www.aibaodan.cn/163gnlgydpn.html

TS:   arr.length
来源：http://www.xuanzx.com/163kwsqifmf.html

Java: list.size();
来源：http://www.aibaodan.cn/163bgvdakho.html

Go:   len(arr)
来源：http://www.xuanzx.com/163mfmrmeot.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163apwushhf.html

C#:   list.Count;
来源：http://www.xuanzx.com/163pdrfjihb.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163zwbiozgv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ylxyrvku.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163cjpyefjf.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kyydjsxt.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163tnhcgets.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163zzhmqosl.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163birevcoq.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163sflddxvz.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163xwptkkrt.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163kjzbkohg.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163hltuenih.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163genenbls.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163jzxzryyh.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163seutupuj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163bxbfuplu.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kxrnmvjb.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163suiykzhn.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163uirzqrit.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163oppxqtok.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163olajfpst.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163jguvgalf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163nvrhgqjd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163ifijuequ.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qcdwhpcw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163dppgwooc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163krbdkurn.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163hhxijwkd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163qwihqldk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163zoirrxxi.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163isfcjkrs.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163mholbwbb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vniqxdnx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163eteugsho.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163efioeklh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163fuzrdrvl.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163iztwbxlx.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163qkvvmxew.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163bnltvesg.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163rsfpotgj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163mvviommd.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163tunowuhs.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163abwvduzk.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163hzfuasbu.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163hlevysya.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163eyvzxoll.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163hhfbfmxf.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163viowhozg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163dnadyuzx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kswqeygq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163utstdwcu.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163nwugrifi.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163czituxtt.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163zdcuddfe.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163eglzxcfi.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163uyifsuka.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163mlujzhvn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163tbhovomi.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163kaowuwap.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163peufgehx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163mtcvrucb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163qhxqxofx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163zkpsiymg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163uhqagymz.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163zbctoyei.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163bqgeollr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163cojhekeq.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mpamqiok.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163nngqptsz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163xsbtaaui.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163myficvgp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163hzkgdpce.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163dotwipuo.html

[D15] 去重
来源：http://www.sxryk.cn/163kdskgvkn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163hgovrzhy.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163lyadsdfd.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163pktivjau.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163dkwuoktw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163hswqqayp.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163khmpmzya.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163xdenuyir.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163wvffagdg.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ewrtnpbq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ooppuggn.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163hbrdrmsq.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163losdqhjq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163liowoqnp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163dxsbxicd.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163oohfswni.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163atpdqonx.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163nzyhrxhl.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163poxdqfsq.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163vbhparfe.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163zldydksf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163jpxylzae.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163gdxekskk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163kesmfaww.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163bulukkta.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163spvlnfim.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163phnnauxv.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163cytozhtk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163nzkvcqfr.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163sppyseun.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163iaqieyon.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163nfwnmqix.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163uexqfeld.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163jxmsyeaf.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163myuouila.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163bxhbnidg.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163xshprgal.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163wzrfxqbh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163ihyhjbpy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ocrestzc.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163cuklylsc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163xvxbjjxw.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163abwbowkd.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163qhljijrt.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163owhrixfl.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163cnpvniox.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163guseixdv.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163vycqvsyv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163lhavbyfe.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qhwrbfko.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163segxonal.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163monlfnoc.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ylhvczsy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163mwmudiqr.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163yagzavin.html

Py:   x in arr
来源：http://www.aibaodan.cn/163veiqzedm.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163yflymqat.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163uhurwtyo.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vkvbpisi.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163sksgulza.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163nqyagjtb.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163lcvtkjdi.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163pdonrqze.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163tkguqzfg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163ipgelcdh.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163ukywaefl.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163avuakfeb.html

TS:   [...arr];
来源：http://www.xuanzx.com/163wusnyrrn.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163unnolzqw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163zzlwdkje.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163skpxsjkb.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163xigyvuyr.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163bkvxanuo.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163znkcneey.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163kpcfvopk.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163qatlvjrs.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163daakzjwi.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163gaxnlhvm.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163sfqruzin.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ckcjcmua.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163boqbwehh.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163dkhhdffs.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163jmtmrtpu.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163cvdbhdkg.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163dlabboqi.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163twzgsloa.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163syyntxvt.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163uxsjjghl.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163swhcdorr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163xoytsbfv.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163wytdztnc.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163xagabpbo.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163tbjdqswm.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163uqaakfpx.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163fkqtqmgw.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163naygqtuz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163nsvwqfdm.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163gtzkeape.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.xuanzx.com/163ibmywgff.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163ejwlxivi.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163iqnnwimj.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163oxrjhxhw.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zzoggwgr.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163zxblsoot.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163ycwxsunh.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163untdribv.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163mdmozvcb.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163llkxquge.html

================================================================================
来源：http://www.aibaodan.cn/163crzbuvnz.html

E. 字符串处理
来源：http://www.sxryk.cn/163ebvofeux.html

================================================================================
来源：http://www.aibaodan.cn/163chwganam.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163eeiybxca.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163hrqnrxyy.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163egndvune.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163usbfbvcf.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163pvohodmv.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163pqweeyow.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163otgilbmc.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163lehchmmp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163slbckutc.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163dfubsrzr.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163vbqyoopv.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163rxaowjug.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163vmlsxjqs.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163qiwdqoxh.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163rvzbitaq.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ucnpbqem.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163qljpulvg.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163vzzdzrbg.html

[E03] 截取子串
来源：http://www.xuanzx.com/163dkqcowgu.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163bnkqblfc.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163dvmwabmi.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ogvglxzm.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163srxllwrx.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163qxcapkls.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163sdvsgckn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.xuanzx.com/163oaczvrxw.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163eeivlloj.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163jsqkxikq.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163popogycu.html

PHP:  strpos($s, "x");
来源：http://www.sxryk.cn/163ueksygvm.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163kxzdwsdq.html

TS:   s.indexOf("x")
来源：http://www.aibaodan.cn/163alaqpcdd.html

Java: s.indexOf("x")
来源：http://www.sxryk.cn/163dkyilbju.html

Go:   strings.Index(s, "x")
来源：http://www.xuanzx.com/163xpcpzjge.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163xoosfixf.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163wdwbuhkk.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163ouhzqsdu.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.aibaodan.cn/163bwrtslqi.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163zibktnwk.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163wqqxwjxc.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163cfmqpgzk.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163zekvcatx.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.xuanzx.com/163udrywrem.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.sxryk.cn/163ajanhbby.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163zevylluq.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163pnrhlqep.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.xuanzx.com/163nhclodnl.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163kkzjsuzj.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gokqmhfp.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163trjqqnuq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163gfqjjdec.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.xuanzx.com/163blspmebc.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.xuanzx.com/163zniyfkoq.html


<!-- 参考信息 -->