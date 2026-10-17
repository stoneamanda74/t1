外链999!wailian999！

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163pxvibuir.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163tgmoinvi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163eedkaerv.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163vtgbgtsd.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163oiwgblfn.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163fzxphcqd.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163jpqmlxin.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ysloppzc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163uvigrhqc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163qofshidi.html

Java: // 无解构
来源：http://www.aibaodan.cn/163bbetftzy.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163nysfffxq.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163omgeltqy.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163gruwpntn.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ujnyfwka.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wtoehgee.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163olawahig.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163xvldbawk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163dgtdiplp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163lugpgnox.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163lvzqhnbc.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163zwnjtlmk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163vchkwmyx.html

================================================================================
来源：http://www.sxryk.cn/163trofqxys.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163obiajlxl.html

================================================================================
来源：http://www.xuanzx.com/163puobwxuc.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163qaptndap.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163aevcjuoy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163owhrjoij.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163avymevmy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163cjblhape.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163mfcfpiun.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163btzscaye.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163hayreoey.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163gjepguei.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163lozvouvt.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163hdhsibry.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163dygtqkrr.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163lsphbogf.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163evqkjubn.html

Java: list.add(4);
来源：http://www.xuanzx.com/163tklegdhd.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163pvaxfncl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163wespnppx.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163nyqajrqp.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163jooyqbqj.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163iibhrkqh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163oehxerap.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163zrecnfzf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ejxotgto.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163wvpxqqgk.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163qosydooh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jbolzdid.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163bmpzryfu.html

[D04] 删除元素
来源：http://www.xuanzx.com/163fgumdzvr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163xrnwsjko.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163vhfnlrda.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163afkiscdj.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163zyscdkzj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163wgausrfa.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ulmpnspi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163rrdocpuq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163zpcwzsun.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163mbdnzyia.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163luwukbol.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163kywmodjv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163vbvfgedl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163bseysjsg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163jvpmcbnj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163wgplljao.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jlnutsty.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163rdnyrjas.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163llbistra.html

Py:   len(arr)
来源：http://www.xuanzx.com/163sxifpqfp.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163spwbwdkf.html

JS:   arr.length
来源：http://www.xuanzx.com/163iirwddiw.html

TS:   arr.length
来源：http://www.xuanzx.com/163psgtpxcd.html

Java: list.size();
来源：http://www.aibaodan.cn/163kaqoqbin.html

Go:   len(arr)
来源：http://www.xuanzx.com/163kstvnvmc.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163nwcrxpdc.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163pfemqmqm.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163lciojdfs.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163kjshmfap.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163sbayyceq.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kzuruxqa.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qtblshkl.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163izhfjrow.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163iwjtflrg.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163hidulkdr.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163osfzqfpv.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163fiwhrmfz.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163lurfzzhm.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163cetzrqsg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163kozilxnh.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163okgvkqdu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163kuadqrnb.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kvupgqyd.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163fnmxypit.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163zbacaysj.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ctkfthij.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163lyodadaf.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163dloctgcw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163wtwrstjo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163aedguyrf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163ztwvhdlf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163tsmyezex.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163oyyrnycj.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163sugbicdn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163mshrxbhe.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163vevdareh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163xthglozt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mwjfyzcb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163jwnmosrd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xpltcwlf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163azlxtpid.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163nxvgknfy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ecwsvlky.html

[D11] 反转数组
来源：http://www.xuanzx.com/163hftgbqwb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163jmuoolmm.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163wgwkflxy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163hciboguw.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163okatzbjc.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163aemmqxda.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163xavpnhlz.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163umqdgtce.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ihkhemeq.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163puwqwdcy.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163nphbkjco.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163qwxdwyll.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zwqffcpt.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ximfskez.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163drmdqjkz.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163jykwbfbt.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163anaewqxr.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163xineiygj.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163cepteetq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163sipagtrh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163bguhbnce.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163wninhfsc.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163brwpcgph.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ygrzwvwa.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163crlyosdl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ngeqztkb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163alxvzmqu.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163pcmhuqoe.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163gadnfsop.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163cxbxakfw.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163cgegrhrw.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163iassvfql.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163sjgoeeqo.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ydshbkld.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163obfycocp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163muflqzyk.html

[D15] 去重
来源：http://www.aibaodan.cn/163dmxovbbc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163aoaercnu.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163huvgwrmd.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ykzpcjtu.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tblghfiy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163fwmdrizl.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163sobqukhp.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163wllyldnu.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163digjfbqj.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163trkonhlx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163synyythj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163lbfjxoaw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163unzaxpur.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163aiwisewu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163bgvfbozb.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163hwvxmnfk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163uimclqke.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163ifhglirw.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163wcthplkl.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163bepctbqn.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163iimqsqdj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163dysgbsor.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163svdkxoyv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163jpvvyjfl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163orpfbrbu.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163zjthcqqc.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163wkkposic.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ydrpihrf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ieqiebad.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163tjykfznn.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163cgbfahca.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163wolfbjkb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163gxqbntbo.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163cuymofqi.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163mvxoeggq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163xoffdwht.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163layorlwp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163epsratlk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163urcgbdhq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163vnxztowb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163dfkfcomy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163eyzvneij.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163cehvsjqq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163exbgiahc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163zgehgdmd.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163iwlkmiew.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163invnfywk.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163fsoddncd.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163gebeuxik.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163iwzhqpll.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163bzsppgjm.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163wpauzjii.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163iyrhgudi.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163txnjzopz.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163swymuapt.html

Py:   x in arr
来源：http://www.sxryk.cn/163zsmuwxzr.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163rfpitkvt.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163gbbfhcid.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163cgomchzv.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163npvhsunx.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163rfbfhbtg.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163ldvbfiis.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163wanvkaob.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163uoawefwx.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163olopzjxt.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163qjwpakqm.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163vavuwlro.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163feipenjk.html

Java: new ArrayList<>(list);
来源：http://www.aibaodan.cn/163gbdcumnd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163kgaqdagj.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163dubkryos.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163hkbnikgr.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163jrsgnjad.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163shfsmnkw.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163ualrzpnp.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.xuanzx.com/163tpgarzmr.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163xtvbzrcz.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163btzlegyb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mhgkdqxt.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163mgvtgkoz.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163fyobrnzs.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163nwwblsnq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163rkbberww.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163vwgashuk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163mhifrcdv.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163zexwjbzt.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163vfjfissm.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.aibaodan.cn/163kfepgmqw.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163ljuhbuhl.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163dsubkjxz.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163dihkcptd.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.xuanzx.com/163djiaoleq.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163mggoxlxg.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.aibaodan.cn/163lfishqjw.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163ijlksslu.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163vsgrckkh.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163cpnoccox.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163askpgkxr.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163rmwgbaci.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163mpbfgrpj.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163tytrjkhy.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163eutyvdtr.html

JS:   arr.join(", ")
来源：http://www.xuanzx.com/163nublkqsm.html

TS:   arr.join(", ")
来源：http://www.xuanzx.com/163gjldaptf.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163rounwukp.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163pkxmelhn.html

Ruby: arr.join(", ")
来源：http://www.xuanzx.com/163spigngif.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163tfdstatu.html

================================================================================
来源：http://www.xuanzx.com/163zmqojzgn.html

E. 字符串处理
来源：http://www.xuanzx.com/163dwfmfjhc.html

================================================================================
来源：http://www.xuanzx.com/163hqmttoiq.html

[E01] 拼接字符串
来源：http://www.sxryk.cn/163agtmjbbh.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163jvyyphnr.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163gnkcedzn.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163rjluixud.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qpvvqdzi.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163ugcqpwhk.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163ryenenyn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.aibaodan.cn/163piayfdrt.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163yafknxid.html

[E02] 重复字符串
来源：http://www.sxryk.cn/163vueunkzw.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163gebawqdk.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163ezpmxqhv.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163guxbmrqb.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163cyyldtki.html

Java: "ab".repeat(3)
来源：http://www.aibaodan.cn/163vbkpyqxo.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163hzqaacrp.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163fzphiimm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.aibaodan.cn/163pmigoytx.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163wvuimuug.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163lkjrkgky.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.aibaodan.cn/163yvomsvga.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163jqfeoccs.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163bqtpmaoz.html

Java: s.substring(1, 4)
来源：http://www.xuanzx.com/163ijmazyje.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.sxryk.cn/163ynzgjetn.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163yacfdqyl.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163omvovegb.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163zvuudxue.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163wrroosyo.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163wgpfkbsr.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163ufzqxwpd.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163wtlevtte.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163grfmwurw.html

Go:   strings.Index(s, "x")
来源：http://www.aibaodan.cn/163wnnbrqvx.html

Ruby: s.index("x")
来源：http://www.sxryk.cn/163ghufajtl.html

C#:   s.IndexOf("x")
来源：http://www.sxryk.cn/163bbrrwrok.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.aibaodan.cn/163ffsguoti.html


<!-- 参考信息 -->