外链999!wailian999！

[C14] 泛型函数
来源：http://www.sxryk.cn/163wgskzgbf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163zdmimzah.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163dulkvohd.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163cykscrzt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163mdvqlxqv.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163vcpdvgwt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163uqvbyxsw.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163buvoouij.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163iowvgiiq.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163kacytogp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ifpmrmgs.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163pgzwhnux.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163gysutrph.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163xwcyhqes.html

Java: // 无解构
来源：http://www.sxryk.cn/163lwsyuiri.html

Go:   // 无解构
来源：http://www.sxryk.cn/163jtmygait.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163uokfgbqv.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163wsrurvcx.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163cmrxoqod.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163uljetczh.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163iredvwtx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163kbyvbkfo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163vavmdriq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ofelczsa.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163vzikvgqn.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163fnvnsmij.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163kmrwmxds.html

================================================================================
来源：http://www.sxryk.cn/163zdaokqgr.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163kioarbtp.html

================================================================================
来源：http://www.aibaodan.cn/163rorgsmln.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163imfrctua.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163dtsjemjm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163aosvsekh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163oqjokfkh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163hztomqzo.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ymdbfjpw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163hngwlmbo.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163snynsxte.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ncfnlrkz.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163xlqmeoxm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163teubaalr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ooviigqa.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163wqemamim.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163wandisnr.html

Java: list.add(4);
来源：http://www.xuanzx.com/163zjvqmmif.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163trvegafc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163alfqmbuq.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163njodiwgr.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163kpyszosk.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163dhstqjet.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163gybakcje.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163nccezoyg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163lzvdrewq.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163qqpigjdh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ukfeojsb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163mwytkcax.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kinektaw.html

[D04] 删除元素
来源：http://www.sxryk.cn/163lxonlyaq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163vqeddmjh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163xldphqrj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ofwpfxqu.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163cycsopno.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163sjmejebx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163tgvvdszp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163jijqvfft.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163pziagmju.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163rwbsuycg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163lawmtqxj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zcwqijfp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163tyhqnzzn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163wimysrig.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163aakcrmpf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163xeuvpkfl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163bnlygjxs.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163spzwcsri.html

[D06] 数组长度
来源：http://www.xuanzx.com/163sarxgqhl.html

Py:   len(arr)
来源：http://www.xuanzx.com/163cadrjuyl.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163kzkaryvg.html

JS:   arr.length
来源：http://www.aibaodan.cn/163jyhuxenj.html

TS:   arr.length
来源：http://www.sxryk.cn/163kjljkbsm.html

Java: list.size();
来源：http://www.aibaodan.cn/163lreulhfd.html

Go:   len(arr)
来源：http://www.xuanzx.com/163sjpshlck.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163fjfiiegr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163vvaviuhs.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163tebsewrw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ayougtld.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163kdvugozi.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163httxayoy.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bheoyjsr.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ahrwlqrb.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163whmqylxd.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163tvaqdnzb.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163yjhtjyki.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163khyygjnu.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163uumgaevk.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163xxfuobwp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163cydgzlgt.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163igpcjxfw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163njtjwgdq.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163bdzvrrpa.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163vvqljtzg.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ckfmixjk.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163tdgosiew.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163wqbgmofi.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163akvnctuz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163vicsskfi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163nrmkvldv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163axtohvpd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163irupzssi.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vtavnsqz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163prwlxayf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jvylsskq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163qjabhuft.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163cqpeeobt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hbvvvciw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rtsgkwzs.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163nlrlsevd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163xdrymbra.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vnbebfuz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163icwfgsex.html

[D11] 反转数组
来源：http://www.sxryk.cn/163nrccmecs.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ozbyelvz.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163txmvhalr.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163swraytbb.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163grfqnwsi.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163mfmfwrpc.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163xcigzwpz.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163qjfcskjr.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ipuvdcup.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163piswenin.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163gkrgextv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163idrwduya.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163loijiddr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ykfwhuqg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163hznavkyu.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163dbyydhby.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163yhxfnkrq.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163xjtrhyjd.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163fsqlwrcj.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163dngooctq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ibqewsng.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xmotfjcl.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kuiobjbf.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163alfpabkt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163tovnfzhu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163gsqjjuhk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163keywnvwx.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163veytsrrf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163scnhwocm.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163fknwueox.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163iymzhxmu.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163rwwtxltg.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163kmlykzkk.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163lqhptsly.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163oqqesefv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163eiucogjy.html

[D15] 去重
来源：http://www.aibaodan.cn/163wmthetje.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163mrcgmonw.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163zulleydo.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163exvjhfcc.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163aoozzkag.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163cjkunjtf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163davovgwk.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163cfopaybe.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163nxwmafpv.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ffhegvqt.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163xaqfabgl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163zjudhbcc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jrojdful.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163dnqdpwxe.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163bjlxbgwy.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163pmioqjsv.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ggdvxotr.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163ulqmnpmj.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163mnkhwwep.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163cfiycmlj.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163bjrlbhdc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163ypvsmhvh.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163arnhkyok.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163uscyeowy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163rqgaaiey.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163jrvfojue.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163lzyxpowv.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163zsdzbegb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163twsrnxka.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163rmcwednf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163itrsgvay.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163bqsxqrgx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163vsfjtcmg.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163nfcihzal.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163glibbndv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163dudbrsnm.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163kexpeykk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163pomegbkx.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163xoatihte.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163vcfpsyzj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163conwbmxn.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163cohozgce.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ekzacmbk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163dcdsjnvj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ovmbuhcz.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163qitrdffl.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163nwinsmns.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163xeyvxaja.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163qcsdzpiz.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163hbykowxt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163uusloevw.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163jewadetd.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163abeeeywe.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163abwyeqlo.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163nktykypn.html

Py:   x in arr
来源：http://www.aibaodan.cn/163ikilfjwj.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163fvooiguu.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163dxbdhqsu.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163rkfgwonf.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163nymmuzhf.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163yvhydaxn.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163vqiguwhl.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163iqecghkj.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163bjxksphu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163rvbcvkul.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163hjytrstw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163uzmdeeau.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163vlibdnhc.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163ewxwtsoi.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163upuwtevz.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ymmazpuq.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163cvvcqlog.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163uzzkijuh.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163hjkamlwt.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163clsfkjrr.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163wukolwjw.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163kosdcefq.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.xuanzx.com/163ewwjhzih.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163qqohvkzv.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.sxryk.cn/163danfycvn.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.aibaodan.cn/163zetcfdqd.html

[D24] 字典 / Map 基本操作
来源：http://www.xuanzx.com/163qowoewqf.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.xuanzx.com/163uzhdfejn.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.xuanzx.com/163nhqbedmt.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.xuanzx.com/163tyxpsfde.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.xuanzx.com/163nqnqphox.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.sxryk.cn/163uavipvlz.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.xuanzx.com/163bskhhbul.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.xuanzx.com/163zbwemysi.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.aibaodan.cn/163mvyeqsjh.html

[D25] Set 集合去重与交并差
来源：http://www.sxryk.cn/163pllmryle.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.aibaodan.cn/163xtooitok.html

PHP:  // 无原生 Set：用数组键或 SplObjectStorage 变通
来源：http://www.aibaodan.cn/163rufsqtst.html

JS:   const s = new Set([1, 2, 3]);  s.add(4);  s.has(1);  s.delete(1)
来源：http://www.sxryk.cn/163nrfjbjxd.html

TS:   const s = new Set<number>([1, 2, 3]);
来源：http://www.sxryk.cn/163sjhagyws.html

Java: var s = new HashSet<>(List.of(1, 2, 3));  s.add(4);  s.contains(1)
来源：http://www.aibaodan.cn/163qzdcbfqt.html

Go:   // 无原生 Set：用 map[int]struct{}
来源：http://www.sxryk.cn/163zazuoeew.html

Ruby: s = Set[1, 2, 3];  s.add(4);  s.include?(1)
来源：http://www.aibaodan.cn/163posdboql.html

C#:   var s = new HashSet<int> { 1, 2, 3 };  s.Add(4);  s.Contains(1)
来源：http://www.sxryk.cn/163vgfnmvxu.html

[D26] 数组转字符串
来源：http://www.sxryk.cn/163pdukejlm.html

Py:   ", ".join(map(str, arr))
来源：http://www.xuanzx.com/163enymgmxh.html

PHP:  implode(", ", $arr);
来源：http://www.sxryk.cn/163wowwwsns.html

JS:   arr.join(", ")
来源：http://www.sxryk.cn/163mcagyopg.html

TS:   arr.join(", ")
来源：http://www.aibaodan.cn/163gzffxfoj.html

Java: String.join(", ", list)
来源：http://www.xuanzx.com/163uzqibpvm.html

Go:   strings.Join(strs, ", ")
来源：http://www.xuanzx.com/163jbckvbym.html

Ruby: arr.join(", ")
来源：http://www.sxryk.cn/163xnyaavxf.html

C#:   string.Join(", ", list)
来源：http://www.sxryk.cn/163nviblssg.html

================================================================================
来源：http://www.sxryk.cn/163dxpjqwrh.html

E. 字符串处理
来源：http://www.sxryk.cn/163zgwqidjz.html

================================================================================
来源：http://www.xuanzx.com/163kolidazw.html

[E01] 拼接字符串
来源：http://www.aibaodan.cn/163mxobaupq.html

Py:   "a" + "b";  "".join(["a", "b"])
来源：http://www.sxryk.cn/163waczwkyz.html

PHP:  "a" . "b";  implode("", ["a", "b"]);
来源：http://www.sxryk.cn/163gyqptgbc.html

JS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.sxryk.cn/163zzikloge.html

TS:   "a" + "b";  ["a", "b"].join("")
来源：http://www.aibaodan.cn/163earbbtzl.html

Java: "a" + "b";  String.join("", List.of("a", "b"))
来源：http://www.xuanzx.com/163tiafeuah.html

Go:   "a" + "b";  strings.Join([]string{"a", "b"}, "")
来源：http://www.xuanzx.com/163rxcrvxfd.html

Ruby: "a" + "b";  ["a", "b"].join
来源：http://www.xuanzx.com/163qxrdnbid.html

C#:   "a" + "b";  string.Concat("a", "b")
来源：http://www.aibaodan.cn/163svabixfy.html

[E02] 重复字符串
来源：http://www.xuanzx.com/163pzbhxdxq.html

Py:   "ab" * 3
来源：http://www.aibaodan.cn/163ivuqkoel.html

PHP:  str_repeat("ab", 3);
来源：http://www.aibaodan.cn/163gtvrbxkw.html

JS:   "ab".repeat(3)
来源：http://www.sxryk.cn/163hhwougud.html

TS:   "ab".repeat(3)
来源：http://www.aibaodan.cn/163qoktgruv.html

Java: "ab".repeat(3)
来源：http://www.sxryk.cn/163qfkexfar.html

Go:   strings.Repeat("ab", 3)
来源：http://www.aibaodan.cn/163frnzoszj.html

Ruby: "ab" * 3
来源：http://www.sxryk.cn/163odczskcn.html

C#:   string.Concat(Enumerable.Repeat("ab", 3))
来源：http://www.xuanzx.com/163tawjdhik.html

[E03] 截取子串
来源：http://www.aibaodan.cn/163ivnnwhip.html

Py:   s[1:4];  s[:3];  s[3:]
来源：http://www.xuanzx.com/163egshllmt.html

PHP:  substr($s, 1, 3);  mb_substr($s, 1, 3, "UTF-8");
来源：http://www.sxryk.cn/163wedmvytc.html

JS:   s.slice(1, 4);  s.substring(1, 4)
来源：http://www.aibaodan.cn/163ybnrhjfo.html

TS:   s.slice(1, 4)
来源：http://www.sxryk.cn/163eqhfbute.html

Java: s.substring(1, 4)
来源：http://www.sxryk.cn/163swdxizlq.html

Go:   s[1:4]        // 按字节；中文用 []rune(s)[1:4] 再转回 string
来源：http://www.aibaodan.cn/163nsomolal.html

Ruby: s[1, 3];  s[1..3]
来源：http://www.sxryk.cn/163cmcxejkn.html

C#:   s.Substring(1, 3)
来源：http://www.aibaodan.cn/163byhatxuh.html

[E04] 查找子串位置
来源：http://www.xuanzx.com/163uipwlvfm.html

Py:   s.find("x");  s.index("x")
来源：http://www.sxryk.cn/163ywtbzimd.html

PHP:  strpos($s, "x");
来源：http://www.xuanzx.com/163qxwnrejz.html

JS:   s.indexOf("x");  s.search(/x/)
来源：http://www.aibaodan.cn/163cizjuyoj.html

TS:   s.indexOf("x")
来源：http://www.xuanzx.com/163jqngeiye.html

Java: s.indexOf("x")
来源：http://www.xuanzx.com/163nptbtmdq.html


<!-- 参考信息 -->