外链999!wailian999！

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163epurdeib.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163jqcoapcn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163jbdevnxt.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163gtevetpv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163emtunlvj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163kynptrct.html

Java: // 无解构
来源：http://www.sxryk.cn/163pejrlxcq.html

Go:   // 无解构
来源：http://www.xuanzx.com/163erezmapw.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163pgzqwxxo.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163fzzfxmat.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163gjmykqqi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163pyzfylpd.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163cintzybi.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163jxwrfkhe.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163rxaasnep.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163cvjcuykv.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163awbuwqyp.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zztkswhr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ztryregs.html

================================================================================
来源：http://www.xuanzx.com/163atcyugux.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163wrnuihsp.html

================================================================================
来源：http://www.xuanzx.com/163fkdizoyg.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163qeggrhoo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163byhzpoaq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163klybhpqs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163shrqchcw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163lqdghxmr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163seyxajbn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163vlhovgum.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163onpxwjsj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163bgpcstyo.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163lmtafqsk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163davwkhtm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163vpkpynss.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163eedcokms.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163wuwxaklh.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163djuaqwzr.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ojisvkpx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163fwolleyc.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163kbpqgmsf.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163tkdxmjzi.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163mrgzavet.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163uhhqhdyo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ljdfcwvd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ykrevisv.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163lfaukfpu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163xopxzxop.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163gldhdzkv.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163jvqxeser.html

[D04] 删除元素
来源：http://www.xuanzx.com/163zaddrlao.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ckisdtxj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163ljgjoset.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163iepcefpt.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163thzunppx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163iatwgsis.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163qijlhxyd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163jmcglimd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163hpclfwvy.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163vvzkmykm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163odcctdpq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163htisxwbn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163wumbbhhq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163dgsmtsag.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163afqezjfv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163aojhmhpk.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163yxousrep.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163izhythqq.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zetlloyh.html

Py:   len(arr)
来源：http://www.xuanzx.com/163rmpjnkjw.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163bqrtjpkn.html

JS:   arr.length
来源：http://www.sxryk.cn/163woghqkkm.html

TS:   arr.length
来源：http://www.aibaodan.cn/163rsgznuph.html

Java: list.size();
来源：http://www.sxryk.cn/163ygqpubkd.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163irajzcpx.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163urvgujji.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163wcoelbpm.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163feeywbtr.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163prewjgzo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163rfbtvcdh.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zvxcpzsm.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163exmfoajz.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163dvdivfho.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163mwkykndm.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ziwwhgyn.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163jyfukzpb.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163fylkkuqm.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163qbtthmqg.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163bvhlfbgn.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163tsttgqgr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163vkjfwycd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ovunvppj.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163xvlbovpc.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163rglaoauc.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ircxxpwl.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163negmbgpj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wkvyxvrz.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163repqscia.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163lgnfkobs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163kaocqaou.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163xgrdbrrk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163zvfwmmka.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163hmfhkziu.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163domwcgua.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163gtkfalab.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163kyihjyme.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163zqubdjze.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163skjabhul.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cczofkld.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163htjfhrwg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163enfpieqx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163sebaezso.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ptfwsfbq.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163drhxcwir.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163fzoarkup.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163nzfkimga.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ecmmdpfc.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163sawybhpr.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163iycrvfyn.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163bwnsvvdj.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163dlkekrpz.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163wqnnlbed.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163gvibingu.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163rlezugfn.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163jqmmpbbz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163clsnfadn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163cwhlwusc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163uflxcrsr.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163rxowrwkr.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ctdlkndx.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163zejadaps.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163jgtjutyo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163qinngzjv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ueahvaym.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163fclrywcs.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163tptihyvs.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163unzeljyq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163slmmyrzu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163fimoqfsk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163yvyjthdw.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163xxdiljqw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163zatdajxk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vdwbyopj.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163esxhfybf.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163svhwtpql.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163xanmswdk.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163aekerwhn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163ovbfwtyv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163ouptfeuz.html

[D15] 去重
来源：http://www.xuanzx.com/163fqwewvnw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163skpprwae.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163wblhrhxl.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fjfkacht.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ktketbwq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163odjblyjj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163agpbsikd.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163dcurnvqf.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ptodxhym.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163vzuawkkc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ftomkfbr.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163zhyqeksk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mqnfsxdd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163lxjdmfmz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163dmwblobj.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163abmlbyae.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163trifpyij.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163xelgfcmz.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163svvdmxys.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163nuuxbvzs.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163fcoovmtw.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163yuczmrso.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163zkdqmguc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163xleljqjo.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163vdiqriub.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163cftznbfg.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163bitnvacb.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ycluryjs.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163bjlqxbsv.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163zctapelb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163adinkcbo.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163mpuivkxm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163vwvpoffg.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163rsxftgpd.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163dqxqoutp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163wmeracpt.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163tjmmjdur.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163aohxwqjk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163wjmgcsxn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163adjjxpiz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163aodimzzq.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163iopnoksw.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163jknuqzdf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163bxazkhvr.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163btwvzhzf.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163othtxchc.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163apjzftea.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ilwoirbf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qhveanjf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wyvnumpo.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ciebslaf.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163bylufkrv.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163mhunixcm.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163eidfnqle.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163dfpgzqzj.html

Py:   x in arr
来源：http://www.aibaodan.cn/163fwtocvcb.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163zxdulzaw.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163jyktbfzf.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163fagwwqky.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163rdznrdhm.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163dlqsrtiq.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163bvimqctr.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163krbroopr.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163wmspeaqf.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163jyfqrjhc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163uveveohv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163uyeavlhf.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ikukvxvt.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163zuwsnoyf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163gnicxghf.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163kqoykoep.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163zprhpbtw.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ttggebib.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163oveotscz.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163bufybctx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163qpexvxig.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163fqcptkna.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163qhkyyzgb.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163bqpxdzom.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163zdulhubt.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163sgyxpolh.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163eunajpoh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163yybmgcrm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163pehhrbjv.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163filfczlp.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163nmceenbt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163pmbtfndy.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163fyphally.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163vtdguufr.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163hfsbgkaq.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163tgekqcea.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163rgirvzss.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163sjxdlymw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163eiwphwwp.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163kqvkublt.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163xibqyhwr.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163hgjrgwme.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163bteivhtw.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163olljjfqy.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163ofnfuapn.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163hydtycch.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ialsbjes.html

JS:   arr.join(", ")
来源：http://www.aibaodan.cn/163fsaoslbk.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163lvsppmpi.html

Java: String.join(", ", list)
来源：http://www.sxryk.cn/163pruolpmn.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163wuuvqaiu.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163wbqsymzl.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163potrkuaw.html

================================================================================
来源：http://www.xuanzx.com/163ndgpzmdf.html

E. 字符串处理
来源：http://www.aibaodan.cn/163qmejwkli.html

================================================================================
来源：http://www.aibaodan.cn/163ckuibzqb.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163tcvnwfss.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163hkayyggb.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163hokqzwdh.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163xaurwgyg.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163lsudujso.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163gxzaltkn.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.aibaodan.cn/163nhtnfeyn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163ojuasubf.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ekyzxnrl.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163sdsyqjra.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163jjsizsct.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163mhgjgjmh.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163kawpxhmf.html

TS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163jpbkbofy.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163ufcbvbnr.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163ugrqfjur.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163wehcqgop.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163mbvcmyab.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163cgwrlyle.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163cjgejfra.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.xuanzx.com/163sigrekxk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163sbenetbi.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163ymcfwhsc.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163qkuxiuit.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163agqorknf.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163hutmhhtx.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163gbafhkyx.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163hwixpmvp.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163voyslkqy.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163rfcezqru.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163npcijyud.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163wzdubjpt.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163ufbwlbzr.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163iosnkqwv.html

Ruby: s.index("x")
来源：http://www.aibaodan.cn/163btomhkyc.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163pffjncdg.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ubikigng.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163onjvlqep.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.sxryk.cn/163xbecweid.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.xuanzx.com/163iotcmnmk.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.sxryk.cn/163wdjgrgdv.html


<!-- 参考信息 -->