外链999!wailian999！

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ijuvtqhd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163bwmjauux.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163nlcjrjhh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163vcrjoeku.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163yehcswtq.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163gqvvrgus.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163dsfsjfns.html

================================================================================
来源：http://www.aibaodan.cn/163wlkssugx.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163lutcynfo.html

================================================================================
来源：http://www.sxryk.cn/163dvybnkmm.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163uthkciqo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163otufghui.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163swglgzgv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163szcezoct.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ftokozhw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163pzudtudz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163dzdvkjcv.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163tmxcbwot.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163seqwvtig.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163qckcmswx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163lzslcdbr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163trynfyit.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163qmigpauo.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163fbbmzegc.html

Java: list.add(4);
来源：http://www.xuanzx.com/163qxfqagnf.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163xagqrncr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ctjwqkvp.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163teqorcto.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163nadgmphh.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163nqhuumxm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163maklqqgn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163vzicskbo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163kpkiaggh.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163vrtrshqd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163bupdmhtm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163exkytcfw.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163rjidggpi.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ilnctwnf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163vnpkpykn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163vcglfbtt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163bxabmkyk.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163aykovqkb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163jdykdjea.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163uerrcuid.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ejjfdqwk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163wcqeqxyt.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ntuspbwv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ucdjwruq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163lbycuzxw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163uilzgyvf.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163rbbepens.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163vaomrwrz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163jgnojrti.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163bmupoeat.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163fovduzdw.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163iigqkayj.html

Py:   len(arr)
来源：http://www.sxryk.cn/163bhtrdmuc.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163wnuffmik.html

JS:   arr.length
来源：http://www.xuanzx.com/163hzqblsva.html

TS:   arr.length
来源：http://www.aibaodan.cn/163pfdgsmtl.html

Java: list.size();
来源：http://www.xuanzx.com/163tkjqfcwr.html

Go:   len(arr)
来源：http://www.xuanzx.com/163exrwboqq.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163xoxolcjt.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163vidjjbrx.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163kbfouqyi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163wxenvyjp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163zwodqcbq.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fuyvvcol.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jfriwcjm.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163vdtqfegr.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163aboaffnd.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163iewiqjxe.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163nbejtxgk.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163cocqxkch.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163miahngco.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163jeqwklzv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163lnhnomzz.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163qhcvgvds.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163eeipuzfa.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163rsdpqnmu.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163rwtqcxad.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ncxigbco.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bhqvjcxn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tgqhjdxu.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xumbfjck.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163xxenspks.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163xtpcgfqr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163vlonjric.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163euzqiujm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163sfbusyee.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163sfhnnikk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163dafigjdb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163xwvvvxlr.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163dtluwbph.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wezozcvq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cxwxroto.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163jirdluxl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163laescvdl.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163fzjpwrhw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163cnfeuebj.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bqoqaehx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163clzxkfqh.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163jvwxvplt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163jriefupo.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163opcrrfdn.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163lfdvkcry.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163knniifvg.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163yxgoccsm.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ocvdgkmn.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163yccjaagj.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ffunsmsa.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163xackgimq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163llpdbmyr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163yzlljvfq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163tkshpkrt.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163iheryrro.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163kefqdifx.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ikcmlrra.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163einlkcza.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163mfzqhoyk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163zetkhrbl.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163bpmnejlb.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163wfyjknaa.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163tpvtqmsq.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163kjltymwg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163pwhjflym.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163okbpfzga.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163unpjoyfw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163kgbexfqs.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163nexlevby.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163pegknwgu.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163kehqxcoo.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163epwyehcu.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163eamafxgn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163kirdhbah.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163fywduuef.html

[D15] 去重
来源：http://www.aibaodan.cn/163oygcwaqr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163rwoilrjg.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163vpxfhegk.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163myiwyftu.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163glwtiufs.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163jsshzlrz.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163fwaqfvhn.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163gmwxjzyd.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163kwrywqte.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jqdsaeqp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163rctryuqh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163vshvdbcn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nujmoril.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163pndbnpid.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ehubypyo.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ltfginno.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163xmblelxh.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163eotwbidk.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163ncvoezlu.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163jvtifsdf.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163sefchman.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163credprrh.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163gragavmx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163eewjeswp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163anwawwie.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ewgshkpq.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163opyocfjy.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163gfmiwmdu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163tomqyxna.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163htxitgxr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163txrsmids.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163njkawxxk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163tkzuaivb.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163jliadsbl.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163oyzvbxvs.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163fochrovy.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163hxybbffz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163awsuyreb.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163rkcjgkwn.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163sgkkqcgw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163chvhzwcs.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163izcjhvwq.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163tljjoezz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163kvlssxdz.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163dgoyusnx.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163qgbytwwk.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163mvflovbc.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163cuxinemj.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163zhoexmxx.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163sygawqsb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163hmxmkakm.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163htkhohcl.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163ihzoklwb.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163cognufgl.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163gqwxvlfb.html

Py:   x in arr
来源：http://www.xuanzx.com/163rpaurbyr.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163fmrurczv.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163tpxkhlhw.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163cjkmniqq.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163jkmznkmg.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163lmabodnn.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163biogrtvs.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163oooekcon.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163fadndyiq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163aubleyyc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163cxippjhu.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ldtnwyjj.html

TS:   [...arr];
来源：http://www.xuanzx.com/163isabkqdp.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163qdpyucxx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163snnmpxov.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163hslwiymj.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163triqjkjy.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163pfyllxab.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163jwwcyqhg.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163ogiixedf.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163oqcelmwt.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163mksxbgwq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ckkzaect.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ohloplfz.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163svzrcuhk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163xsjbojer.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163wxmubynu.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163bxtzjhse.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163iawlquts.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163lizrtawm.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163fmxbzvmm.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163decjeooe.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163xbyttjtj.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163pcqmlwql.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163xgzjjfix.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163yydlabom.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163cijqayyn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163lgeyfhgw.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163vnrzimvz.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163cnqaqzgc.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163aytfktqx.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163ednabooe.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.sxryk.cn/163vypkwbhe.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163jyrpbzld.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163wvwininu.html

Py:   ", ".join(map(str, arr))
来源：http://www.aibaodan.cn/163wddxqkga.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163jyhnrqmw.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163rnkwljev.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163iatwwigw.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163wvfghffj.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163dkwfzpmq.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163hcxtloiu.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163bvuuyubh.html

================================================================================
来源：http://www.aibaodan.cn/163moyzknis.html

E. 字符串处理
来源：http://www.aibaodan.cn/163agaupykz.html

================================================================================
来源：http://www.xuanzx.com/163gkxacavf.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163zrsxktoq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163cdjozise.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ifcgsrxx.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163pgeygfcs.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163mosmzkyq.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163zecrnkjw.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163jofespes.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163aljqfhrp.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163ltvfhrmy.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163ctasekhr.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163ivbksaqc.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163diisyjrr.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163ovxjdwvk.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163scdxrguh.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163ksajxxhz.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163bucmhkuc.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163yhpqxjqw.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163taivicvn.html

[E03] 截取子串
来源：http://www.xuanzx.com/163feansiza.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.sxryk.cn/163ydpvnvsz.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163poakocrk.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163tvgwbaji.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163ewnyfsab.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163cwilniuq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163qvvljcdc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163hqeiparf.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163parekrku.html

[E04] 查找子串位置
来源：http://www.sxryk.cn/163ffpplnnb.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163nehoznzl.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163houuyjrw.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.sxryk.cn/163frrotcqk.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163gwfdzqjc.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163yatcphug.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163gvwdeugo.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163rnqveioz.html

C#:   s.IndexOf("x")
来源：http://www.xuanzx.com/163ikqeptbx.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.sxryk.cn/163mdrcgqgj.html

Py:   "x" in s;  s.startswith("a");  s.endswith("z")
来源：http://www.xuanzx.com/163hkfyhtem.html

PHP:  str_contains($s, "x");  str_starts_with($s, "a");  str_ends_with($s, "z");
来源：http://www.aibaodan.cn/163wfkgssjy.html

JS:   s.includes("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.aibaodan.cn/163kykpjrhf.html

TS:   s.includes("x");  s.startsWith("a")
来源：http://www.xuanzx.com/163scublugg.html

Java: s.contains("x");  s.startsWith("a");  s.endsWith("z")
来源：http://www.sxryk.cn/163fmxnyuaf.html

Go:   strings.Contains(s, "x");  strings.HasPrefix(s, "a");  strings.HasSuffix(s, "z")
来源：http://www.sxryk.cn/163srxojslx.html

Ruby: s.include?("x");  s.start_with?("a");  s.end_with?("z")
来源：http://www.aibaodan.cn/163ljjoyyge.html

C#:   s.Contains("x");  s.StartsWith("a");  s.EndsWith("z")
来源：http://www.sxryk.cn/163gakobcln.html

[E06] 替换子串
来源：http://www.aibaodan.cn/163kxkmutyr.html

Py:   s.replace("a", "b");  s.replace("a", "b", 1)
来源：http://www.aibaodan.cn/163jbnlhwjo.html

PHP:  str_replace("a", "b", $s);
来源：http://www.aibaodan.cn/163vfwsnsht.html

JS:   s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163wwvaljii.html

TS:   s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163umjzyciq.html

Java: s.replace("a", "b");  s.replaceAll("a", "b")
来源：http://www.sxryk.cn/163mplxupvm.html

Go:   strings.ReplaceAll(s, "a", "b");  strings.Replace(s, "a", "b", 1)
来源：http://www.aibaodan.cn/163sbuitrnf.html

Ruby: s.gsub("a", "b");  s.sub("a", "b")
来源：http://www.sxryk.cn/163tjejdoxu.html


<!-- 参考信息 -->