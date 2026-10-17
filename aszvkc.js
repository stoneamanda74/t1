外链999!wailian999！

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163oekxuthp.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163foawzvnz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163hyeglmua.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ezfvuocf.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163yuxhaydv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163vfhwloqo.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163hufbkjow.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163tejeiktp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163nynruzsp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163gfhmgxjk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163nxsqileb.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163wmzuhzfw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163rkupkzai.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163bkoknsxg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163sgsdodjn.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163dmwttmjd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163gylpbwaq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163guvtzxbq.html

Java: // 无解构
来源：http://www.sxryk.cn/163dcnovujc.html

Go:   // 无解构
来源：http://www.sxryk.cn/163rfxbdnov.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163nkqtapjh.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zlsuxnvh.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163jkzxojgq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163rwgxjech.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163fdqbbhvl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163rqobgdcj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163vqntqmli.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163smipvdgr.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ubrtukmf.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163lrfmsdcv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163txulfzyg.html

================================================================================
来源：http://www.xuanzx.com/163gsnibtax.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163whzjjwsv.html

================================================================================
来源：http://www.xuanzx.com/163yrnijqip.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163woufmisq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163agvbddqm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163aepaewlm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ofnebmjv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ulvvtfyn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fmkcddtu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163pirndvva.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163huavqazx.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163xzzlaeoy.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163zldcmifx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163wavfxnth.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163hkywegla.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163akbtnfbg.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163izmdfnfm.html

Java: list.add(4);
来源：http://www.sxryk.cn/163otqzfqps.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163orbpecoh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163cijsqmfb.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ephezkxl.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163nyctoeuy.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163gsuvieir.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163chhhoxgv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163caybdmcs.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163vqomixfz.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163gytksuhf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163izqbalxu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163wlqhslms.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163gkpnnwpt.html

[D04] 删除元素
来源：http://www.xuanzx.com/163keypoiek.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163nyuwawov.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163fftuwpkc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163tzxldyxj.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163yqzdppvr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163hyvjytth.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ddqhzthg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163swdrvmlu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163yoyvwurn.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tjilfisg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163iaxiidac.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ylakwhpv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ixybzbsd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ultrwzvz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163uzaabkqt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163dqexfpcb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wsaqybmc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163fezznuwv.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163wrngcwwx.html

Py:   len(arr)
来源：http://www.xuanzx.com/163mqxaqoiy.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163dlxwikzl.html

JS:   arr.length
来源：http://www.sxryk.cn/163ztyflchi.html

TS:   arr.length
来源：http://www.aibaodan.cn/163mcnmwsij.html

Java: list.size();
来源：http://www.aibaodan.cn/163tauijtsz.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163hhsrrgbb.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163zcefeivr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163tlznywqm.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163nzjtuhjt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163jruxbooq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163kzsigjtm.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163kiczukqy.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163inclvyjl.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163thyigygn.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163jmptbrzs.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ipzafpxq.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163vwhlfkzh.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163yjfylmhg.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163yxzoazrv.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163mvzscavc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ytsndkgt.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163fxnbcfvj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163xmqjeyzz.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kveagoxl.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163igmkoyxn.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163acavrbtw.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163dudnffvt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qrqxlxay.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ztvfodby.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163yznxdaya.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163vcnfwdfp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163dheqangk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163wieezycx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163jfjpnhse.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163oixrilgf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ebmzihpk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163lmfbadmf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163mmsjovut.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wavbfsrs.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163nxeynwye.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163qdytofpx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163yetgognz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gsaqgymk.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163tdszzckc.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163uwsrxleq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163obuwemje.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163xpvhurjv.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163azyqdubn.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163vqyiqkhw.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163smptvjtb.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163hpdocsmx.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ecnyupzo.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163xwmxsqjo.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163hncymvpp.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163hoynlrlj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163otlalprb.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163xmzdgtqz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163hvqtwfez.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163nxraiphw.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163bctpqvpe.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163hiqxaiko.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ncofwsxn.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163temheioq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163fvbvxilm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163npruailx.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ifoapgql.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163yukykccz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163lkhcrwsn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ahxpzkog.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163mrnxuqqd.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163mzxghvra.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163agmnrigv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ykllbpnr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163cpmycupx.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163tmsditvv.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163wefxwsly.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163sfilrimy.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163uaniwtdk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163yixzotzg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163axhlvtul.html

[D15] 去重
来源：http://www.xuanzx.com/163dblgdizf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163haebycew.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163afxtbxpy.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163npwdxyom.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cgoehpxi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163fhoknfhx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163luashgru.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163exmqtdii.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163oghinnro.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163hcgynxsx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163jagkhglj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163tsirgghf.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jgwfgise.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fwefjwep.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163bloxtovi.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163iddkkzyt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ebbuujtb.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163oplospvf.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163vlrtrvzr.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163lputlcfp.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163acdajfms.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163vlgdjztb.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163viialmod.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163kmphubpx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163vgmsqhcb.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163doexefil.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ncmjrbgr.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163mujbshit.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163gzxvxoqn.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163lxqztoak.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163iufhaqut.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163dbrumero.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163awdptuzk.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ypbrcqzg.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163mwfogzcf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163crddqzsx.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163mawgrnri.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163mjahgjjs.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163ulgkufjj.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163mdwnplxg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163ivnllcxv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163romsleiv.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163oftebsga.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163qmzkeowh.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163fycihhgm.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163uhgjnsgd.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163cidmwxtm.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163mvxgrfsw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qyrigdxz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hthlgeng.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163umxnlwdk.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163oxdfpyvj.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163lrxvaxmw.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163joxknmkv.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163nmmlepps.html

Py:   x in arr
来源：http://www.xuanzx.com/163ksbehfpk.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163yzivzjrl.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163hgbjepqy.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qbmrhdbt.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163lhxpwfrc.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163nryiuwgf.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163xapvljcw.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163pmbgccxt.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163zjiauqvm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163mfdxoxuv.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163vdluhxcd.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163qyzdeoru.html

TS:   [...arr];
来源：http://www.sxryk.cn/163bxenzyah.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163rgvrxtsd.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163upseoclh.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163zrzbiohg.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163irkmhzke.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163aoheamne.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163titdkyle.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.aibaodan.cn/163dcdfobyw.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163ietxtmuj.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163jxfhfhvq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163jgmoenyx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163wkyiewxd.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163ziiynmpn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163uzkzdwqv.html

[D24] 字典 / Map 基本操作
来源：http://www.aibaodan.cn/163xinljxyh.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163jchhrdyo.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163gmedlmif.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.sxryk.cn/163rwelycrq.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163ngkukzso.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163uqhvdttg.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163thjxhfus.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.sxryk.cn/163devvnqqq.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163oeishedk.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163ezjgyqde.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163guadepzn.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.xuanzx.com/163tpsnhfok.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163kpwpkigi.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.xuanzx.com/163gijsgkka.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.sxryk.cn/163ttpehtpz.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.xuanzx.com/163xqthbkcu.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.xuanzx.com/163ykbxulba.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163tilxmytv.html

[D26] 数组转字符串
来源：http://www.aibaodan.cn/163gaiinkev.html

Py:   ", ".join(map(str, arr))
来源：http://www.sxryk.cn/163lhtybidi.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163zsjpyyok.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163bvkzhxkd.html

TS:   arr.join(", ")
来源：http://www.sxryk.cn/163dztgxuza.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163eeoddrie.html

Go:   strings.Join(strs, ", ")
来源：http://www.sxryk.cn/163lgywypmm.html

Ruby: arr.join(", ")
来源：http://www.aibaodan.cn/163lfcclbzo.html

C#:   string.Join(", ", list)
来源：http://www.aibaodan.cn/163aartivlc.html

================================================================================
来源：http://www.xuanzx.com/163mkdnooyv.html

E. 字符串处理
来源：http://www.xuanzx.com/163qzqwojvb.html

================================================================================
来源：http://www.sxryk.cn/163zeygexfh.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163qefdypkk.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.aibaodan.cn/163gpbjkbto.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.aibaodan.cn/163ijwtqtdb.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163cfprxign.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.xuanzx.com/163zmjzyxbl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.aibaodan.cn/163aiwuzbpi.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.sxryk.cn/163hsahxils.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.sxryk.cn/163ykxicbsj.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.xuanzx.com/163ysdwijyd.html

[E02] 重复字符串
来源：http://www.aibaodan.cn/163mzxwzqel.html

Py:   "ab" * 3
来源：http://www.sxryk.cn/163xomoeovq.html

PHP:  str_repeat("ab", 3);
来源：http://www.sxryk.cn/163xkhgpqhj.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163maqlwdps.html

TS:   "ab".repeat(3)
来源：http://www.xuanzx.com/163egduaxxz.html

Java: "ab".repeat(3)
来源：http://www.xuanzx.com/163krinsspg.html

Go:   strings.Repeat("ab", 3)
来源：http://www.xuanzx.com/163ndqwyaor.html

Ruby: "ab" * 3
来源：http://www.aibaodan.cn/163bfbntnjm.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.sxryk.cn/163nyglwwtl.html

[E03] 截取子串
来源：http://www.xuanzx.com/163dlaiedcl.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163gecgaasv.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163jlqgzczr.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.xuanzx.com/163ytpxwywt.html

TS:   s.slice(1, 4)
来源：http://www.xuanzx.com/163bqxiearz.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163kkmaogix.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.xuanzx.com/163qdvikcrc.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.aibaodan.cn/163hrvnmlgg.html

C#:   s.Substring(1, 3)
来源：http://www.xuanzx.com/163ljknopzg.html

[E04] 查找子串位置
来源：http://www.aibaodan.cn/163qbtuczkm.html

Py:   s.find("x");  s.index("x")
来源：http://www.aibaodan.cn/163wvarzcwq.html


<!-- 参考信息 -->