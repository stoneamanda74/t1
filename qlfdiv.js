外链999!wailian999！

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163zzrpbqbi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163iamegxup.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163tysywjpo.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ankladmw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163yueoaibv.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163qcgcxmkw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ywshxjdt.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163mmokiukk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hqhnvxyh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163wdjeewgr.html

Java: // 无解构
来源：http://www.xuanzx.com/163wdrrxaok.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ytthzeay.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163xdoymhdr.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163lgycnprj.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163fhyfmquq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wthgfpum.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163mkvjqdpg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163kytdhqtz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163bstwzkpc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ondslyjv.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163aikrzllp.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163cgrfgtxz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163mauemoyp.html

================================================================================
来源：http://www.xuanzx.com/163qhbjoszx.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163woudnlhy.html

================================================================================
来源：http://www.xuanzx.com/163qcamtibg.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163iqbhsvyp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163pufuszqt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163jvjysurm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163bhpdzdvf.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163surhoali.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163uanxffft.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163qrmyrckq.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163spnhvtoe.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163fbsgqwvi.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163hagbfmdc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163jrcfetzq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163yuisicnl.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163wojnmrvt.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163vypdlvvt.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163piugtkne.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163jcqqxbui.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163wywwmeeu.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163valhrolt.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163xpxtdkla.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163hwqmolqq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163drpeoiwn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163rnstyrbj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ddptkuro.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163lluojdad.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163bmengwbq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163hnlfcymz.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163btkiclip.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163riiqsnmk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163kltmaaqd.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163yrvkhxtz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163sopsyvcr.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163gzwunkke.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163tjpfzpvt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163mrrxxszh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163rlzrwkfs.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ptwmkqxa.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tkywevwf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xuhwynnk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163qcdraoqa.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163trqrpzir.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163tgmqywav.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163siufbkqq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163glbgyfuu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163rbmvljrl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163oruuygkq.html

[D06] 数组长度
来源：http://www.sxryk.cn/163coyaoxhk.html

Py:   len(arr)
来源：http://www.sxryk.cn/163wlfzpffp.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163hlrbsfos.html

JS:   arr.length
来源：http://www.sxryk.cn/163kirqbtvl.html

TS:   arr.length
来源：http://www.aibaodan.cn/163exghnwki.html

Java: list.size();
来源：http://www.aibaodan.cn/163stjeiulf.html

Go:   len(arr)
来源：http://www.xuanzx.com/163riezwnkf.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163homqyybg.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163mfnvyxhn.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163woroywhd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163frjwzxos.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163pglxmkst.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mxaxtimx.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mqtnbunl.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ijjoxbhf.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163hbdfgoia.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ashakgwx.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163dlpxwslr.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163brfphdyf.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163keanzmvp.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vjffxbzg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163vldtydtn.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163tlsrlceq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163gqgqairs.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163hjxlcngl.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163kzhfshlf.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163vnahoyzr.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163dfhzkgbw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163znakgumi.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163bqgnohhr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163vrqdyhzc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vtueofbz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163qemaujkm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163nrvuwshi.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ubizbaem.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163eaeiaawj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jsdxlnjm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163weumqmyh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163vmbpxbot.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163zjyttvfj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163alfkrsby.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163kjedznjy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163earqknlu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163iputqohy.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163rgkmrarn.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163wpqmgxzq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ilueaudn.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163vowmzyrb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ylbyfrvy.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163nyhlpesk.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163gwmupkwj.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163kkvkraif.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163czpukudq.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163hhpkqqbc.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163handwlyh.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ckkknzdg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163gybbxrfb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gzuahxdv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163jdnqzusg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163sefpyvmo.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163htgpauqh.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163oicjwvzh.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163yqhkxyxv.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163mgzcqhmc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ajvjvpjr.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163hkqxzvjb.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163banvgoew.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163wizzdsyu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163mhgjzjim.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163yyaujuho.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163utwumafg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163iotmrczc.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ycjxrsdx.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163gybulewy.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163erpoteer.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163psnflqzn.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163auclebcy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163xqbzusyp.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qbplwpsy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163hfcdccel.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ywdlywxm.html

[D15] 去重
来源：http://www.xuanzx.com/163dtovwtic.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163arpadgtx.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163bpmtquit.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163llwgfclp.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vjesfriy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163nhgyypbo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163zqyjrutl.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163kwkmfdxm.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163kbsrsozq.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163fxrymrii.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163buxwkqrb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163crhlizly.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163rozeoquz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mrbzihfp.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163vtflvejj.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163kdumafor.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163ntpaexig.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163ihcxyoug.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163noamgadj.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163udxgdnsc.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163qvlwkusk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163nmryyfgd.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163rrgcuwli.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163uewcbpcg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163ssofzgal.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163jtgaoigc.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163dgltjpit.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ocscpjqf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163wkgyzamf.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163kqzgtgsh.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163xkozksbg.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163tlpelhwk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163kvmykjhh.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163vdbgwruv.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163wwcmgmyz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ueotqmew.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163zifiofcg.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163zzoyikzl.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163pxflglrc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163pjubdpvf.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163iwmttbgp.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163fpvmldld.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163keqsjcyj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163gvjukjgs.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ogaohzgo.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163cmngkcao.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163btvioejy.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163kwqzzvfk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163xzmdenmw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163wpvxznio.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163sssyijey.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163rojpdrvm.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163yztgcpuh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ovvkqshi.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163lxfwrnmk.html

Py:   x in arr
来源：http://www.aibaodan.cn/163wigmdhjo.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163igctaaxk.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163xjrciprh.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163gwacmmzh.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163evakfaip.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163cesipjnh.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163tbjhdbru.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163nyrjvgdk.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163gzfwxkoq.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163jxrookxa.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163hwiyzzyv.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163kwwkkmuv.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163pimqlzhp.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163elzkoriw.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163wmtyubqf.html

Ruby: arr.dup;  arr.clone
来源：http://www.sxryk.cn/163ejoxtyxr.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163pupgzpfr.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163imfibmhe.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163qlvysoai.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163nldjndoz.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163vywhagmn.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ityxohrk.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163zshpmjvi.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163nlzpkiga.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163jpmrpbpk.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163rqtqvnwm.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163evdeltzq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163fjahxzfm.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163zprdpwgk.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163iwqdiapc.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.aibaodan.cn/163viistylo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163qscgsslk.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163rykuppul.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163gyatcczt.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.sxryk.cn/163dwrynntm.html

[D25] Set 集合去重与交并差
来源：http://www.aibaodan.cn/163hbazqpwg.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163pptmeagg.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.sxryk.cn/163lkomatqu.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.xuanzx.com/163uioywsgc.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.aibaodan.cn/163wbjkatvs.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.xuanzx.com/163yqvxsukl.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.aibaodan.cn/163hnorbtzs.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163zawodcsb.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163rmtyczup.html

[D26] 数组转字符串
来源：http://www.xuanzx.com/163xfjolfeq.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163ulwupioh.html

PHP:  implode(", ", $arr);
来源：http://www.xuanzx.com/163ubxaytlc.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163otvhyril.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163aqsezuje.html

Java: String.join(", ", list)
来源：http://www.aibaodan.cn/163vuyggkuu.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163bcbijwge.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163zrzjesmv.html

C#:   string.Join(", ", list)
来源：http://www.xuanzx.com/163nxtidxlw.html

================================================================================
来源：http://www.aibaodan.cn/163fowgtftc.html

E. 字符串处理
来源：http://www.aibaodan.cn/163wxxvwmmw.html

================================================================================
来源：http://www.sxryk.cn/163hdzpuaok.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163olyjdcba.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.xuanzx.com/163wwcirlvx.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.xuanzx.com/163doisyows.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163qcijxtom.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163wooitcax.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163vrqirlgd.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163xdtloirn.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163asgdxcya.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163vcqmnwdl.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163uhbbsvyx.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163xbzmmhye.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163xgldbdly.html

JS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163uhffjhkl.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163sldfodtk.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163rhlyklbw.html

Go:   strings.Repeat("ab", 3)
来源：http://www.sxryk.cn/163zeletymg.html

Ruby: "ab" * 3
来源：http://www.xuanzx.com/163vluahynn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163ezjuwwxj.html

[E03] 截取子串
来源：http://www.xuanzx.com/163mcgrkgth.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.aibaodan.cn/163fddsfzql.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163xmfjhxjp.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163onlsrhts.html

TS:   s.slice(1, 4)
来源：http://www.aibaodan.cn/163kbzayfys.html

Java: s.substring(1, 4)
来源：http://www.aibaodan.cn/163gilkvhsm.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163zdcdryso.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163miarroxm.html

C#:   s.Substring(1, 3)
来源：http://www.sxryk.cn/163njososfj.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163pkogcnup.html

Py:   s.find("x");  s.index("x")
来源：http://www.xuanzx.com/163ovnwpixy.html

PHP:  strpos($s, "x");
来源：http://www.aibaodan.cn/163fdekgvgl.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163swroulfj.html

TS:   s.indexOf("x")
来源：http://www.sxryk.cn/163nwywzylt.html

Java: s.indexOf("x")
来源：http://www.aibaodan.cn/163rgcvpdyw.html

Go:   strings.Index(s, "x")
来源：http://www.sxryk.cn/163oewdtlus.html

Ruby: s.index("x")
来源：http://www.xuanzx.com/163rbqswibw.html

C#:   s.IndexOf("x")
来源：http://www.aibaodan.cn/163msprklzf.html

[E05] 判断包含 / 前缀 / 后缀
来源：http://www.xuanzx.com/163zcvwvzbs.html


<!-- 参考信息 -->